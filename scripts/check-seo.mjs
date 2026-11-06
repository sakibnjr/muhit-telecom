import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const require = createRequire(import.meta.url);
const suiteMs = 120_000;
const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" };
const decode = (s) =>
  s.replace(/&(amp|quot|apos|lt|gt);/g, (_, k) => entities[k]);
const clean = (s) =>
  s.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>|<!--[\s\S]*?-->/gi, "");
const text = (s) => decode(s.replace(/<[^>]*>/g, " ")).trim();
const attrs = (s) =>
  Object.fromEntries(
    [...s.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [
      key.toLowerCase(),
      decode(value),
    ]),
  );
const tags = (html, tag) =>
  [...html.matchAll(new RegExp(`<${tag}\\b([^>]*)>`, "gi"))].map((m) =>
    attrs(m[1]),
  );
const blocks = (html, tag) => [
  ...html.matchAll(
    new RegExp(`<${tag}\\b([^>]*)>([\\s\\S]*?)<\\/${tag}>`, "gi"),
  ),
];
function one(items, label) {
  assert.equal(items.length, 1, `${label}: expected exactly one`);
  return items[0];
}
const main = (html) => one(blocks(html, "main"), "main")[2];
const robotTags = (html) =>
  tags(html, "meta")
    .filter((m) => /^(robots|googlebot)$/i.test(m.name))
    .map((m) => m.content)
    .join();
const typed = (graph, type) =>
  graph.filter((n) => [n["@type"]].flat().includes(type));
function schemas(html) {
  return blocks(html, "script")
    .filter((m) => attrs(m[1]).type === "application/ld+json")
    .flatMap((m) => {
      assert.doesNotMatch(m[2], /[<\u2028\u2029]/u, "unescaped JSON-LD");
      const data = JSON.parse(m[2]); // Do not HTML-decode JSON script content.
      assert.equal(data["@context"], "https://schema.org");
      return data["@graph"] ?? [data];
    });
}
// Require a serialized Flight error record, not merely fallback UI text.
const notFound = (raw) =>
  /[\da-f]+:E\{\\"digest\\":\\"NEXT_HTTP_ERROR_FALLBACK;404\\"\}/i.test(raw);

async function startServer(signal) {
  const probe = createServer();
  let port;
  try {
    probe.listen(0, "127.0.0.1");
    await once(probe, "listening");
    port = probe.address().port;
  } finally {
    if (probe.listening) await new Promise((done) => probe.close(done));
  }
  const origin = `http://127.0.0.1:${port}`;
  const args = ["start", "--hostname", "127.0.0.1", "--port", String(port)];
  const child = spawn(
    process.execPath,
    [require.resolve("next/dist/bin/next"), ...args],
    {
      cwd: root,
      stdio: ["ignore", "ignore", "inherit"],
      env: {
        ...process.env,
        NODE_ENV: "production",
        NEXT_TELEMETRY_DISABLED: "1",
      },
      timeout: suiteMs + 5000,
      killSignal: "SIGKILL",
    },
  );
  const exited = once(child, "exit");
  // Handle spawn errors immediately as well as while awaiting readiness/shutdown.
  exited.catch(() => {});
  const alive = () =>
    child.pid && child.exitCode === null && child.signalCode === null;
  async function stop() {
    if (!alive()) return;
    child.kill("SIGTERM");
    await Promise.race([exited, delay(2000)]);
    if (alive()) child.kill("SIGKILL");
    await Promise.race([exited, delay(2000)]);
    assert.ok(!alive(), "production server did not exit");
  }
  async function request(path, timeout = 6000) {
    const url = new URL(path, origin);
    assert.equal(url.origin, origin, "only local requests allowed");
    const response = await fetch(url, {
      redirect: "manual", // Never follow production/WhatsApp redirects.
      signal: AbortSignal.any([signal, AbortSignal.timeout(timeout)]),
    });
    const raw = await response.text();
    return {
      status: response.status,
      headers: response.headers,
      raw,
      html: clean(raw),
    };
  }
  try {
    await once(child, "spawn");
    const deadline = Date.now() + 25_000;
    while (Date.now() < deadline) {
      signal.throwIfAborted();
      assert.ok(alive(), "Next exited before readiness");
      try {
        if ((await request("/", 1000)).status === 200) {
          return { origin, request, stop, pid: child.pid };
        }
      } catch (error) {
        if (signal.aborted) throw error;
      }
      await delay(150, undefined, { signal });
    }
    throw new Error("Next startup exceeded 25 seconds");
  } catch (error) {
    await stop();
    throw error;
  }
}

await test("production SEO smoke", { timeout: suiteMs }, async (t) => {
  const controller = new AbortController();
  const interrupt = () => controller.abort(new Error("interrupted"));
  const signal = AbortSignal.any([t.signal, controller.signal]);
  process.once("SIGINT", interrupt);
  process.once("SIGTERM", interrupt);
  let server;
  try {
    const manifest = JSON.parse(
      await readFile(new URL(".next/prerender-manifest.json", root), "utf8"),
    );
    const { productsData: catalog } = await import(
      new URL("src/_data/products.ts", root)
    );
    const { matchesProductCategory: matches } = await import(
      new URL("src/_data/catalog.ts", root)
    );
    const discover = (kind, count) => {
      const paths = Object.keys(manifest.routes)
        .filter((p) => new RegExp(`^/${kind}/[^/]+$`).test(p))
        .sort();
      assert.equal(paths.length, count, `built ${kind} count`);
      return paths;
    };
    const categories = discover("categories", 13);
    const services = discover("services", 8);
    const products = discover("products", catalog.length);
    const productPaths = (items) =>
      items.map((p) => `/products/${p.slug}`).sort();
    assert.deepEqual(products, productPaths(catalog), "stale product build");
    server = await startServer(signal);
    const cache = new Map();
    const targets = new Set();
    const seen = new Map();
    let productionOrigin;
    const get = (path) => {
      if (!cache.has(path)) cache.set(path, server.request(path));
      return cache.get(path);
    };
    function localPath(href) {
      const url = new URL(href, server.origin);
      if ([server.origin, productionOrigin].includes(url.origin)) {
        return url.pathname + url.search;
      }
    }
    function links(html) {
      return new Set(
        tags(html, "a")
          .filter((a) => a.href && !a.href.startsWith("#"))
          .map((a) => localPath(a.href))
          .filter(Boolean),
      );
    }
    function hasLinks(html, expected) {
      const found = links(html);
      for (const path of expected)
        assert.ok(found.has(path), `missing ${path}`);
    }
    function exactProducts(html, expected) {
      const actual = [...links(html)]
        .filter((p) => p.startsWith("/products/"))
        .sort();
      assert.deepEqual(actual, productPaths(expected), "product selection");
    }
    async function seo(path) {
      const page = await get(path),
        html = page.html;
      assert.equal(page.status, 200, path);
      const title = text(one(blocks(html, "title"), "title")[2]);
      const description = one(
        tags(html, "meta").filter((m) => m.name === "description"),
        "description",
      ).content;
      const canonical = one(
        tags(html, "link").filter((m) => m.rel === "canonical"),
        "canonical",
      ).href;
      const url = new URL(canonical);
      productionOrigin ??= url.origin;
      assert.equal(url.href, new URL(path, productionOrigin).href);
      assert.equal(url.protocol, "https:");
      assert.match(title, / \| /);
      assert.ok(description?.trim());
      const metadata = { title, description, canonical };
      for (const [key, value] of Object.entries(metadata)) {
        const id = `${key}:${value}`;
        assert.ok(!seen.has(id), `duplicate ${key}: ${seen.get(id)}`);
        seen.set(id, path);
      }
      assert.ok(text(one(blocks(html, "h1"), "H1")[2]));
      assert.doesNotMatch(robotTags(html), /noindex/i);
      assert.doesNotMatch(page.headers.get("x-robots-tag") ?? "", /noindex/i);
      for (const target of links(html)) targets.add(target);
      const graph = schemas(page.raw);
      assert.ok(graph.length, "missing JSON-LD");
      return { ...page, canonical, graph };
    }
    function detail(page, type) {
      const entity = one(typed(page.graph, type), type);
      assert.equal(entity.url, page.canonical);
      assert.ok(entity.name?.trim() && entity.description?.trim());
      const crumbs = one(typed(page.graph, "BreadcrumbList"), "breadcrumbs");
      assert.equal(crumbs.itemListElement.at(-1).item, page.canonical);
      for (const item of crumbs.itemListElement) {
        assert.ok(item.name && localPath(item.item), "invalid breadcrumb");
        targets.add(localPath(item.item));
      }
      return entity;
    }
    for (const path of ["/", "/categories", "/services", "/shop"]) {
      await t.test(`hub ${path}`, async () => {
        const page = await seo(path),
          body = main(page.html);
        const nav = blocks(page.html, "nav").filter((m) =>
          m[1].includes('aria-label="Main navigation"'),
        );
        const navPaths = [
          ...categories,
          ...services,
          "/categories",
          "/services",
        ];
        hasLinks(one(nav, "nav")[2], navPaths);
        if (path === "/") hasLinks(body, ["/categories", "/services", "/shop"]);
        if (path === "/categories") {
          hasLinks(body, [...categories, "/shop"]);
          assert.ok(!detail(page, "CollectionPage").mainEntity);
          assert.equal(typed(page.graph, "ItemList").length, 0);
        }
        if (path === "/services") hasLinks(body, services);
        // Shop listings are streamed outside main; nav has no product links.
        if (path === "/shop") exactProducts(page.html, catalog);
      });
    }
    for (const path of [...categories, ...services, ...products]) {
      await t.test(path, async () => {
        const page = await seo(path),
          body = main(page.html);
        if (categories.includes(path)) {
          const entity = detail(page, "CollectionPage");
          const expected = catalog.filter(
            (p) => p.category === path.split("/").at(-1),
          );
          exactProducts(body, expected);
          const support = [
            "/categories",
            "/shop",
            "/contact",
            "/warranty-policy",
          ];
          hasLinks(body, support);
          const lists = typed(page.graph, "ItemList");
          if (expected.length) {
            const list = one(lists, "ItemList");
            assert.equal(entity.mainEntity?.["@id"], list["@id"]);
            assert.equal(list.numberOfItems, expected.length);
            assert.deepEqual(
              list.itemListElement,
              expected.map((p, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: p.title,
                url: `${productionOrigin}/products/${p.slug}`,
              })),
            );
          } else {
            assert.equal(lists.length, 0, "fake/empty ItemList");
            assert.ok(!entity.mainEntity);
            assert.match(
              text(body),
              /no products listed in this category yet/i,
            );
          }
        } else if (services.includes(path)) {
          const entity = detail(page, "Service");
          hasLinks(body, ["/services"]);
          assert.ok(entity.serviceType && entity.areaServed && entity.provider);
          assert.equal(typed(page.graph, "CollectionPage").length, 0);
          assert.equal(typed(page.graph, "ItemList").length, 0);
        } else {
          const entity = detail(page, "Product");
          const p = catalog.find((p) => `/products/${p.slug}` === path);
          assert.equal(entity.name, p.title);
          assert.equal(entity.offers?.url, page.canonical);
          assert.equal(entity.offers?.price, p.price);
          assert.equal(entity.offers?.priceCurrency, "BDT");
          hasLinks(body, [`/categories/${p.category}`, "/shop", "/contact"]);
        }
      });
    }
    const aliases = {
      smartphones: ["samsung-galaxy-a15"],
      "feature-phones": ["nokia-105-2023"],
      accessories: ["silicone-phone-case", "tplink-archer-c54"],
      "cases-covers": ["silicone-phone-case", "tplink-archer-c54"],
      "chargers-cables":
        "type-c-fast-charging-cable power-bank-10000mah tplink-archer-c54".split(
          " ",
        ),
      "earbuds-tws": ["tws-wireless-earbuds", "wireless-headphones-bluetooth"],
      smartwatches: ["smartwatch-bluetooth-calling"],
    };
    for (const [alias, ids] of Object.entries(aliases)) {
      await t.test(`legacy filter ${alias}`, async () => {
        const expected = catalog.filter((p) => ids.includes(p.id));
        assert.equal(expected.length, ids.length, "stale alias fixture");
        const matched = catalog.filter((p) => matches(p, alias));
        assert.deepEqual(matched, expected);
        const page = await get(`/shop?category=${alias}`);
        assert.equal(page.status, 200);
        exactProducts(page.html, expected);
        for (const target of links(page.html)) targets.add(target);
      });
    }
    for (const kind of ["categories", "services", "products"]) {
      await t.test(`invalid ${kind} slug`, async () => {
        const page = await get(`/${kind}/__seo_smoke_missing_slug__`);
        const directives = robotTags(page.html);
        const noindex = /noindex/i.test(
          directives + page.headers.get("x-robots-tag"),
        );
        assert.ok(page.status === 404 || (page.status === 200 && noindex));
        const h1 = blocks(page.html, "h1");
        if (h1.length)
          assert.match(text(one(h1, "notFound H1")[2]), /page not found/i);
        else assert.ok(noindex && notFound(page.raw), "missing notFound error");
        const graph = schemas(page.raw);
        const detailTypes =
          /^(Product|Service|CollectionPage|ItemList|BreadcrumbList)$/;
        assert.ok(
          !graph.some((n) =>
            [n["@type"]].flat().some((type) => detailTypes.test(type)),
          ),
          "schema on missing page",
        );
        t.diagnostic(`${kind}: HTTP ${page.status}, noindex=${noindex}`);
      });
    }
    await t.test("unique internal targets return 200", async () => {
      assert.ok(targets.size >= 34 && targets.size <= 200);
      for (const path of [...targets].sort())
        assert.equal((await get(path)).status, 200, path);
      t.diagnostic(
        `${targets.size} targets; ${cache.size} local requests plus readiness`,
      );
    });
  } finally {
    try {
      if (server) {
        await server.stop();
        t.diagnostic(`Server pid=${server.pid} stopped`);
      }
    } finally {
      process.removeListener("SIGINT", interrupt);
      process.removeListener("SIGTERM", interrupt);
    }
  }
});
