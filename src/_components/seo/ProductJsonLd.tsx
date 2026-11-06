import type { Product } from "@/_types";
import { getCategory } from "@/_data/categories";
import { siteUrl } from "@/_components/seo/metadata";

export function ProductJsonLd({ product }: { product: Product }) {
  const url = new URL(`/products/${product.slug}`, siteUrl).href;
  const category = getCategory(product.category);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        url,
        name: product.title,
        image: new URL(product.image, siteUrl).href,
        description: product.shortDesc,
        brand: { "@type": "Brand", name: product.brand },
        category: category?.name,
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "BDT",
          price: product.price,
          availability:
            product.stock > 0
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          seller: { "@id": `${siteUrl}/#store` },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: new URL("/", siteUrl).href,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Shop",
            item: new URL("/shop", siteUrl).href,
          },
          ...(category
            ? [
                {
                  "@type": "ListItem",
                  position: 3,
                  name: category.name,
                  item: new URL(`/categories/${category.slug}`, siteUrl).href,
                },
              ]
            : []),
          {
            "@type": "ListItem",
            position: category ? 4 : 3,
            name: product.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
