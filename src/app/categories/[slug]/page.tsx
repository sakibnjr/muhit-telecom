import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/_data/categories";
import { categoryContent } from "@/_data/categoryContent";
import { productsData } from "@/_data/products";
import { Container } from "@/_components/layout/Container";
import { pageMetadata } from "@/_components/seo/metadata";
import { CategoryGuide } from "@/_components/categories/CategoryGuide";
import { CategoryImage } from "@/_components/categories/CategoryImage";
import { CategoryImageCatalogue } from "@/_components/categories/CategoryImageCatalogue";
import { CategoryJsonLd } from "@/_components/categories/CategoryJsonLd";
import { CategoryProducts } from "@/_components/categories/CategoryProducts";
import { CategorySupport } from "@/_components/categories/CategorySupport";
import { categoryImageCatalog } from "@/_data/categoryImageCatalog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const content = categoryContent[category.slug];

  return pageMetadata({
    title: `${category.name} | Muhit Telecom`,
    description: content.metaDescription,
    path: `/categories/${category.slug}`,
  });
}

function CategoryLoading() {
  return (
    <div className="page-shell">
      <Container>
        <div className="surface-panel grid min-h-72 animate-pulse items-center gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_220px]">
          <div className="space-y-4">
            <div className="h-3 w-44 rounded bg-muted" />
            <div className="h-10 w-full rounded bg-muted" />
            <div className="h-16 w-full rounded bg-muted" />
          </div>
          <div className="mx-auto h-48 w-full max-w-56 rounded-lg bg-muted" />
        </div>
      </Container>
    </div>
  );
}

async function CategoryPageContent({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const content = categoryContent[category.slug];
  const products = productsData.filter((product) => product.category === category.slug);

  return (
    <div className="page-shell">
      <CategoryJsonLd name={category.name} description={content.metaDescription} slug={category.slug} products={products} />
      <Container>
        <header className="surface-panel grid items-center gap-6 p-6 shadow-sm sm:p-8 md:grid-cols-[minmax(0,1fr)_220px]">
          <div>
            <h1 className="page-title">{content.heading}</h1>
            <p className="page-lede mt-4">{content.intro}</p>
            <Link href="#category-products" className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">See listed products &amp; enquiry options</Link>
          </div>
          <div className="mx-auto w-full max-w-56 overflow-hidden rounded-lg"><CategoryImage category={category} /></div>
        </header>
        <CategoryProducts name={category.name} slug={category.slug} products={products} enquiryHint={content.enquiryHint} />
        <CategoryImageCatalogue name={category.name} images={categoryImageCatalog[category.slug] ?? []} />
        <CategoryGuide name={category.name} content={content} />
        <CategorySupport content={content} />
      </Container>
    </div>
  );
}

export default function CategoryPage({ params }: Props) {
  return (
    <Suspense fallback={<CategoryLoading />}>
      <CategoryPageContent params={params} />
    </Suspense>
  );
}
