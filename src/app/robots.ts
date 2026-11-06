import type { MetadataRoute } from "next";
import { siteUrl } from "@/_components/seo/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Utility pages must remain crawlable so their noindex metadata can be read.
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
