import type { Metadata } from "next";
import { pageMetadata } from "@/_components/seo/metadata";
import { Suspense } from "react";
import Image from "next/image";
import {
  ProductCategoryLinks,
} from "@/_components/cards/ProductCategoryLinks";
import { notFound } from "next/navigation";
import { productsData } from "@/_data/products";
import { Container } from "@/_components/layout/Container";
import { ProductActions } from "@/_components/forms/ProductActions";
import { ProductCard } from "@/_components/cards/ProductCard";
import { ProductSpecsTable } from "@/_components/cards/ProductSpecsTable";
import { ProductTrustBadges } from "@/_components/cards/ProductTrustBadges";
import { ProductJsonLd } from "@/_components/seo/ProductJsonLd";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { Star } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) notFound();

  return pageMetadata({
    title: `${product.title} | Muhit Telecom`,
    description: `${product.shortDesc} Price: ${formatPrice(product.price)}. Order from Muhit Telecom in Hili with Cash on Delivery across Bangladesh.`,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

function ProductLoading() {
  return (
    <div className="page-shell">
      <Container>
        <div className="surface-panel grid animate-pulse gap-6 p-4 sm:p-7 lg:grid-cols-2 lg:p-8">
          <div className="aspect-square rounded-lg bg-muted" />
          <div className="space-y-5 py-2">
            <div className="h-4 w-32 rounded bg-muted" />
            <div className="h-12 max-w-lg rounded bg-muted" />
            <div className="h-20 max-w-xl rounded bg-muted" />
            <div className="h-16 rounded-lg bg-muted" />
          </div>
        </div>
      </Container>
    </div>
  );
}

async function ProductDetailsContent({ params }: Props) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) notFound();

  const discount = calculateDiscount(product.regularPrice, product.price);
  const related = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="page-shell">
      <ProductJsonLd product={product} />
      <Container>
        <div className="surface-panel grid grid-cols-1 gap-6 p-4 shadow-sm sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border/60 bg-muted/45 p-5 sm:p-8">
              <Image
                src={product.image}
                alt={`${product.title} | Muhit Telecom Hili`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 sm:p-8 drop-shadow-sm"
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-accent text-accent-foreground text-xs font-bold shadow-md">
                  -{discount}% OFF
                </span>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs text-primary font-bold uppercase tracking-wider mb-1">
                <span>{product.brand}</span>
                <span className="text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  {product.stock > 0
                    ? `In Stock (${product.stock} units)`
                    : "Out of Stock"}
                </span>
              </div>
              <h1 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                {product.title}
              </h1>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {product.shortDesc}
              </p>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-foreground">
                  {product.rating}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviewsCount} reviews)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-baseline gap-3 rounded-lg border border-border/70 bg-muted/40 p-4 sm:p-5">
              <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {formatPrice(product.price)}
              </span>
              {product.regularPrice > product.price && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.regularPrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-xs font-bold text-accent">
                  You Save {formatPrice(product.regularPrice - product.price)}
                </span>
              )}
            </div>

            <ProductActions product={product} />

            <ProductTrustBadges warranty={product.warranty} />
          </div>
        </div>

        <ProductSpecsTable
          description={product.description}
          specs={product.specs}
        />
        <ProductCategoryLinks product={product} />

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Related Tech Gear
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-6">
              {related.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default function ProductDetailsPage({ params }: Props) {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductDetailsContent params={params} />
    </Suspense>
  );
}
