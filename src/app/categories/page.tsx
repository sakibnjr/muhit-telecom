import Link from "next/link";
import { categories } from "@/_data/categories";
import { Container } from "@/_components/layout/Container";
import { pageMetadata } from "@/_components/seo/metadata";
import { CategoryImage } from "@/_components/categories/CategoryImage";
import { CategoryJsonLd } from "@/_components/categories/CategoryJsonLd";
import { CategorySupport } from "@/_components/categories/CategorySupport";
import { CategoriesHeader } from "@/_components/categories/CategoriesHeader";

const description =
  "Explore 12 mobile, audio, charging and everyday tech categories at Muhit Telecom in Hili, Dinajpur, with buying guides, listed products and enquiry options.";

export const metadata = pageMetadata({
  title: "Shop Categories & Buying Guides | Muhit Telecom",
  description,
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <div className="page-shell">
      <CategoryJsonLd
        name="Shop Categories & Buying Guides"
        description={description}
      />
      <Container>
        <CategoriesHeader />

        <section
          aria-label="All product categories"
          className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categories.map((category) => (
            <article
              key={category.slug}
              className="surface-panel flex h-full flex-col p-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-5"
            >
              <Link href={`/categories/${category.slug}`} className="group block">
                <CategoryImage category={category} />
                <h2 className="mt-2.5 truncate text-sm font-bold text-foreground group-hover:text-primary group-hover:underline sm:mt-4 sm:text-xl">
                  {category.name}
                </h2>
              </Link>
              <p className="mt-1.5 flex-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:line-clamp-none sm:text-sm sm:leading-7">
                {category.description}
              </p>
              <p className="mt-2 text-[11px] font-medium text-foreground sm:mt-4 sm:text-sm">
                {category.itemCount > 0
                  ? `${category.itemCount} ${
                      category.itemCount === 1 ? "product" : "products"
                    }`
                  : "No products listed"}
              </p>
              <Link
                href={`/categories/${category.slug}`}
                className="mt-2 inline-flex items-center text-xs font-semibold text-primary hover:underline sm:text-sm"
              >
                View guide →
              </Link>
            </article>
          ))}
        </section>

        <CategorySupport />
      </Container>
    </div>
  );
}
