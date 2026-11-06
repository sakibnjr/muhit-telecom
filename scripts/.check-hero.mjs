import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import puppeteer from "puppeteer-core";
const origin = "http://127.0.0.1:3111";
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "-p", "3111"],
  { stdio: "ignore" },
);
let browser;
try {
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(origin)).ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--no-proxy-server"],
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => {
    errors.push(e.message);
    console.error("PAGE_ERROR", e.message);
  });
  page.on("response", (r) => {
    if (r.status() >= 400) console.error("HTTP_ERROR", r.status(), r.url());
  });
  page.on("console", (m) => {
    if (m.type() === "error") console.error("CONSOLE_ERROR", m.text());
  });
  await page.setRequestInterception(true);
  page.on("request", (r) =>
    r.url().startsWith(origin) || r.url().startsWith("data:")
      ? r.continue()
      : r.abort(),
  );
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);
  for (const width of [320, 390, 1440]) {
    await page.setViewport({ width, height: 1000 });
    await page.goto(origin, { waitUntil: "networkidle0" });
    console.log(
      "PAGE",
      await page.title(),
      await page.$eval("h1", (e) => e.textContent),
    );
    console.log(
      "HERO_DEBUG",
      await page.evaluate(() => ({
        swiper: document.querySelector(".swiper")?.outerHTML.slice(0, 500),
        pagination: document.querySelector(".hero-pagination")?.outerHTML,
        scripts: [...document.scripts].map((s) => s.src).filter(Boolean),
      })),
    );
    await page.waitForSelector(".hero-bullet", { timeout: 10000 });
    assert.equal(
      await page.$$eval(".hero-bullet", (elements) => elements.length),
      6,
    );
    for (let i = 0; i < 6; i++) {
      await page.waitForFunction(() => {
        const img = document.querySelector(".swiper-slide-active img");
        return img?.complete && img.naturalWidth > 0;
      });
      const state = await page.evaluate(() => {
        const slide = document.querySelector(".swiper-slide-active");
        const img = slide.querySelector("img");
        const links = [...slide.querySelectorAll("a")];
        return {
          overflow: document.documentElement.scrollWidth > innerWidth,
          h1: document.querySelectorAll("h1").length,
          image: img.currentSrc,
          imageTop: img.getBoundingClientRect().top,
          linkBottom: Math.max(
            ...links.map((e) => e.getBoundingClientRect().bottom),
          ),
          title: slide.querySelector("h1,h2").textContent,
        };
      });
      assert.equal(state.overflow, false, `${width}: viewport overflow`);
      assert.equal(state.h1, 1);
      assert.match(
        decodeURIComponent(state.image),
        /\/images\/hero-slider\/.*\.webp/,
      );
      if (width < 1024)
        assert.ok(
          state.linkBottom < state.imageTop,
          `${width}: text overlaps image ${JSON.stringify(state)}`,
        );
      console.log(
        JSON.stringify({
          width,
          slide: i + 1,
          title: state.title,
          imageLoaded: true,
        }),
      );
      if (i === 0 && width !== 320)
        await page.screenshot({
          path: `public/images/hero-slider/check-${width}.png`,
        });
      await page.locator(".hero-btn-next").click();
    }
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS: all six WebP slides at 320/390/1440px; one H1, no overflow or text/image overlap, no browser errors",
  );
} finally {
  await browser?.close();
  server.kill("SIGTERM");
}
