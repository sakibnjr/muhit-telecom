import type { MetadataRoute } from "next";
import { productsData } from "@/_data/products";
import { categories } from "@/_data/categories";
import { servicesData } from "@/_data/services";
import { siteUrl } from "@/_components/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = productsData.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticUrls = [
    "/",
    "/shop",
    "/categories",
    "/services",

    "/about",
    "/contact",
    "/warranty-policy",
    "/terms",
    "/privacy",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/" ? ("daily" as const) : ("weekly" as const),
    priority: route === "/" ? 1.0 : 0.7,
  }));

  const categoryUrls = categories.map(({ slug }) => ({
    url: `${siteUrl}/categories/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const serviceUrls = servicesData.map(({ slug }) => ({
    url: `${siteUrl}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...categoryUrls, ...serviceUrls, ...productUrls];
}
