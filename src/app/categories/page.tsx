import Link from "next/link";
import { categories } from "@/_data/categories";
import { Container } from "@/_components/layout/Container";
import { pageMetadata } from "@/_components/seo/metadata";
import { CategoryImage } from "@/_components/categories/CategoryImage";
import { CategoryJsonLd } from "@/_components/categories/CategoryJsonLd";
import { CategorySupport } from "@/_components/categories/CategorySupport";

const description = "Explore 12 mobile, audio, charging and everyday tech categories at Muhit Telecom in Hili, Dinajpur, with buying guides, listed products and enquiry options.";

export const metadata = pageMetadata({
  title: "Shop Categories & Buying Guides | Muhit Telecom",
  description,
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <div className="page-shell">
      <CategoryJsonLd name="Shop Categories & Buying Guides" description={description} />
      <Container>
        <header className="mb-8 w-full">
          <h1 className="page-title">Shop categories &amp; practical buying guides</h1>
          <p className="page-lede mt-4">
            Explore all 12 categories to compare device compatibility, useful features and safe everyday use. Each guide links to the products listed in that category. A category without listings is an invitation to enquire about options, not a claim of available stock.
          </p>
          <Link href="/shop" className="mt-4 inline-flex min-h-11 items-center font-semibold text-primary hover:underline">Prefer to browse products? Visit the shop →</Link>
        </header>
        <section aria-label="All product categories" className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <article key={category.slug} className="surface-panel flex h-full flex-col p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg sm:p-5">
              <Link href={`/categories/${category.slug}`} className="group block">
                <CategoryImage category={category} />
                <h2 className="mt-4 text-xl font-bold group-hover:text-primary group-hover:underline">{category.name}</h2>
              </Link>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{category.description}</p>
              <p className="mt-4 text-sm font-medium text-foreground">
                {category.itemCount > 0
                  ? `${category.itemCount} ${category.itemCount === 1 ? "product" : "products"} listed`
                  : "No products listed yet | Enquiries welcome"}
              </p>
              <Link href={`/categories/${category.slug}`} className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:underline">Read the {category.name} guide →</Link>
            </article>
          ))}
        </section>
        <CategorySupport />
      </Container>
    </div>
  );
}
