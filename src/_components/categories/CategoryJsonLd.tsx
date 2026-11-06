import { siteUrl } from "@/_components/seo/metadata";
import type { Product } from "@/_types";

export function CategoryJsonLd({
  name, description, slug, products = [],
}: {
  name: string;
  description: string;
  slug?: string;
  products?: Product[];
}) {
  const path = slug ? `/categories/${slug}` : "/categories";
  const url = `${siteUrl}${path}`;
  const breadcrumbs = [
    { name: "Home", item: siteUrl },
    { name: "Categories", item: `${siteUrl}/categories` },
    ...(slug ? [{ name, item: url }] : []),
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        url,
        name,
        description,
        inLanguage: "en",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...(products.length ? { mainEntity: { "@id": `${url}#products` } } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          ...crumb,
        })),
      },
      ...(products.length ? [{
        "@type": "ItemList",
        "@id": `${url}#products`,
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.title,
          url: `${siteUrl}/products/${product.slug}`,
        })),
      }] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
          .replace(/</g, "\\u003c")
          .replace(/\u2028/g, "\\u2028")
          .replace(/\u2029/g, "\\u2029"),
      }}
    />
  );
}
