import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://muhit-telecom.sakibnjr.workers.dev";
export const defaultTitle =
  "Muhit Telecom | Authentic Gadgets & Electronics Shop in Bangladesh";
export const defaultDescription =
  "Shop mobile gadgets and computer accessories or ask about phone and PC repairs at Muhit Telecom in Hakimpur (Hili), Dinajpur. Cash on Delivery across Bangladesh.";
export const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Mobile gadgets and accessories at Muhit Telecom",
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  // Many social crawlers cannot decode AVIF; keep their previews on the PNG card.
  const images =
    image && !image.endsWith(".avif")
      ? [{ url: image, alt: title }]
      : [socialImage];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_BD",
      siteName: "Muhit Telecom",
      title,
      description,
      url: path,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
