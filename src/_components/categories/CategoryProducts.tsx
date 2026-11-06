"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Package, Search, Star } from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";
import { formatPrice } from "@/lib/utils";
import { ProductFilters } from "@/_components/forms/ProductFilters";
import { Pagination } from "@/_components/layout/Pagination";
import { filterProducts, getProductBrands } from "@/_data/productFiltering";
import type { Product } from "@/_types";

const ITEMS_PER_PAGE = 16;

export function CategoryProducts({
  name,
  slug,
  products,
  enquiryHint,
}: {
  name: string;
  slug: string;
  products: Product[];
  enquiryHint: string;
}) {
  const searchParams = useSearchParams();
  const activeBrand = searchParams.getAll("brand");
  const activePrice = searchParams.getAll("price");
  const activeAvailability = searchParams.getAll("availability");
  const activeSort = searchParams.get("sort") ?? undefined;
  const activeFilter = searchParams.getAll("filter");
  const filteredProducts = filterProducts(products, {
    brand: activeBrand,
    price: activePrice,
    availability: activeAvailability,
    sort: activeSort,
    filter: activeFilter,
  });
  const brands = getProductBrands(products);

  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const validPage = Math.min(currentPage, Math.max(1, totalPages));
  const paginatedProducts = filteredProducts.slice(
    (validPage - 1) * ITEMS_PER_PAGE,
    validPage * ITEMS_PER_PAGE,
  );

  const enquiryUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(
    `Hello ${siteConfig.name}, I would like to enquire about ${name}. ${enquiryHint}`,
  )}`;

  return (
    <section aria-labelledby="category-products" className="mt-10">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="category-products" className="text-2xl font-bold tracking-tight sm:text-3xl">Listed {name}</h2>
        <Link href="/shop" className="inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:underline">Browse the full shop →</Link>
      </div>
      {products.length ? (
        <>
          <p className="mb-5 text-base text-muted-foreground">
            Check product details and ask us to confirm current availability.
          </p>
          <div className="grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-[12rem] lg:self-start">
              <ProductFilters
                brands={brands}
                resultCount={filteredProducts.length}
                basePath={`/categories/${slug}`}
                showCategories={false}
              />
            </aside>
            <div className="min-w-0">
              <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
                Showing <span className="font-semibold text-foreground">{paginatedProducts.length}</span> of{" "}
                <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
              </p>
              {paginatedProducts.length ? (
                <>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-5">
                    {paginatedProducts.map((product) => (
                      <article key={product.id} className="surface-panel flex h-full flex-col p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg sm:p-4">
                        <Link href={`/products/${product.slug}`} className="group block">
                          <div className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-muted/50">
                            {product.image ? (
                              <Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 17vw" className="object-contain p-3 sm:p-5" />
                            ) : (
                              <Package className="size-14 text-primary" aria-hidden="true" />
                            )}
                          </div>
                          <h3 className="line-clamp-2 text-sm font-semibold leading-5 group-hover:text-primary">{product.title}</h3>
                          <div
                            className="mt-1.5 flex items-center gap-1.5 text-xs"
                            aria-label={`${product.rating} out of 5 from ${product.reviewsCount} reviews`}
                          >
                            <Star className="size-3.5 fill-current text-amber-500" aria-hidden="true" />
                            <span className="font-bold text-foreground">{product.rating}</span>
                            <span className="text-muted-foreground">({product.reviewsCount})</span>
                          </div>
                          <p className="mt-2 text-base font-bold sm:text-lg">{formatPrice(product.price)}</p>
                        </Link>
                        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">{product.shortDesc}</p>
                        <Link href={`/products/${product.slug}`} className="mt-2 inline-flex min-h-11 items-center text-xs font-semibold text-primary hover:underline sm:text-sm">
                          View product details →
                        </Link>
                      </article>
                    ))}
                  </div>

                  <Pagination
                    currentPage={validPage}
                    totalPages={totalPages}
                    totalItems={filteredProducts.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                    basePath={`/categories/${slug}`}
                  />
                </>
              ) : (
                <div className="surface-panel p-6 text-center shadow-sm sm:p-8">
                  <Search className="mx-auto mb-3 size-9 text-muted-foreground/70" aria-hidden="true" />
                  <h3 className="font-semibold">No listed products match these filters</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Try a different brand or price range, or clear the filters.</p>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-muted/30 p-6 sm:p-8">
          <h3 className="text-lg font-bold">No products listed in this category yet</h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
            There are no {name.toLowerCase()} in the online catalogue at present. Ask about current options before visiting; an enquiry does not confirm stock or reserve an item.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{enquiryHint}</p>
          <a href={enquiryUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            Enquire about {name} on WhatsApp
          </a>
        </div>
      )}
    </section>
  );
}
