This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Imagery and SEO maintenance

- Hero copy is editable in `src/_data/heroSlides.ts`; keep text in HTML rather than baking it into promotional images.
- Samsung Galaxy A15 product imagery: [Samsung official product page](https://www.samsung.com/levant/smartphones/galaxy-a/galaxy-a15-light-blue-128gb-sm-a155flbgmea/). The official source is 330 × 330, so do not upscale it or treat it as a high-resolution gallery image.
- Nokia 105 (2023) product imagery: [HMD official product page](https://www.hmd.com/en_int/nokia-105).
- Other product and editorial images reuse existing project assets, converted to AVIF without enlargement. Manufacturer imagery is not a claim of an official reseller relationship; verify usage rights before publishing.
- The About page showroom image is illustrative, not a verified photograph of the proprietor or premises. Replace it with an owner-approved photograph when available.
- `src/_components/StoreMap.tsx` uses the location URLs in `src/_data/siteConfig.ts`, with a direct Google Maps fallback. Embedded Maps contacts Google; it needs network access and may be blocked by privacy tools.
- Canonical URLs, sitemap and structured data share `siteUrl` in `src/_components/seo/metadata.ts`. Confirm the production hostname before launch. Cart, checkout and tracking pages intentionally use `noindex`.
- `/opengraph-image` generates a PNG social card for broad crawler compatibility; on-page editorial and product assets use AVIF.

Validation: `npm run lint`, `npx tsc --noEmit`, and `npm run build`. Responsive checks covered Home, Contact, Shop, Services, a product detail page and About at 320, 390 and 1440 px; Maps network rendering must also be checked in a normal browser.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Category and service pages

- `/categories` lists all 13 categories; `/categories/[slug]` serves their individual guides and current catalogue listings. Edit taxonomy in `src/_data/categories.ts` and editorial content in `src/_data/categoryContent*.ts`.
- Product `category` values in `src/_data/products.ts` must match the canonical category slug. Counts and category listings update from that data; categories without products show an enquiry state, never invented inventory.
- `/services/[slug]` covers all eight entries in `src/_data/services.ts`. Long-form guidance and related links live in `src/_data/serviceContent*.ts`. Service-specific forms preselect the correct service.
- The navbar, mobile menu, footer, homepage cards, product breadcrumbs and sitemap link the canonical landing pages. Existing `/shop?category=` aliases remain supported by `src/_data/catalog.ts`.
- An unknown slug invokes Next.js `notFound()`. With streaming enabled, Next can send HTTP 200 followed by the not-found result and `noindex`; this is covered by the smoke test.

## Production SEO smoke test

Use Node **22.18+ or 24+** (native TypeScript data imports; no test dependencies). After a successful `npm run build`, run:

```bash
npm run test:seo
```

The test reuses `.next` without rebuilding, discovers the 13 category, 8 service and current product detail routes from the prerender manifest, and checks metadata, H1s, escaped JSON-LD, actual product listings, navigation/hub links, deduplicated internal targets, legacy shop filters and missing-slug semantics. Rebuild first if app/data changes make the existing build stale.

It starts its own production server on an unused `127.0.0.1` port and stops it in `finally` (with forced-kill fallback). Startup, requests and the overall suite are bounded. Requests are local GETs only; redirects are not followed, external links are skipped, and no forms, orders or WhatsApp actions are submitted. Socket access to loopback is required.
