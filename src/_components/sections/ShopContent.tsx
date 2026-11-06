import Link from "next/link";
import { productsData } from "@/_data/products";
import { getCategory } from "@/_data/categories";
import { matchesProductCategory, normalizeCategorySlug } from "@/_data/catalog";
import { ProductCard } from "@/_components/cards/ProductCard";
import { ProductFilters } from "@/_components/forms/ProductFilters";
import { Pagination } from "@/_components/layout/Pagination";
import { Search } from "lucide-react";
import { filterProducts, getProductBrands } from "@/_data/productFiltering";

const ITEMS_PER_PAGE = 16;

interface ShopContentProps {
  category?: string | string[];
  sort?: string;
  filter?: string | string[];
  q?: string;
  brand?: string | string[];
  price?: string | string[];
  availability?: string | string[];
  page?: string;
}

const toValues = (value?: string | string[]) =>
  value === undefined ? [] : Array.isArray(value) ? value : [value];

export function ShopContent({
  category,
  sort,
  filter,
  q,
  brand,
  price,
  availability,
  page,
}: ShopContentProps) {
  let filtered = [...productsData];
  const selectedCategories = toValues(category).filter((value) => value && value !== "all");

  if (selectedCategories.length) {
    filtered = filtered.filter((product) =>
      selectedCategories.some((selected) => matchesProductCategory(product, selected)),
    );
  }

  if (toValues(filter).includes("deals")) {
    filtered = filtered.filter((p) => p.regularPrice > p.price);
  }

  if (q && q.trim()) {
    const query = q.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.title_bn.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query)),
    );
  }

  const brands = getProductBrands(filtered);
  filtered = filterProducts(filtered, { brand, price, availability, filter, sort });

  const currentPage = Math.max(1, Number(page) || 1);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const validPage = Math.min(currentPage, Math.max(1, totalPages));
  const paginatedProducts = filtered.slice(
    (validPage - 1) * ITEMS_PER_PAGE,
    validPage * ITEMS_PER_PAGE,
  );

  const singleSelectedCategory = selectedCategories.length === 1 ? selectedCategories[0] : undefined;
  const selectedCategory = singleSelectedCategory
    ? getCategory(normalizeCategorySlug(singleSelectedCategory))
    : undefined;

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-[12rem] lg:self-start">
          <ProductFilters
            brands={brands}
            resultCount={filtered.length}
          />
        </aside>

        <div className="min-w-0">
          <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
            Showing <span className="font-semibold text-foreground">{paginatedProducts.length}</span> of{" "}
            <span className="font-semibold text-foreground">{filtered.length}</span> products
          </p>

          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-5">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <Pagination
                currentPage={validPage}
                totalPages={totalPages}
                totalItems={filtered.length}
                itemsPerPage={ITEMS_PER_PAGE}
                basePath="/shop"
              />
            </>
          ) : (
            <div className="surface-panel mx-auto max-w-xl p-8 py-14 text-center shadow-sm">
              <Search className="mx-auto mb-4 size-12 text-muted-foreground/70" />
              <h3 className="text-xl font-semibold text-foreground">
                No Products Found!
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Please try searching with another keyword or reset your filters.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border/60 pt-6 text-sm font-semibold text-primary">
        <Link href="/categories" className="inline-flex min-h-10 items-center underline underline-offset-4 hover:text-primary/80">
          Explore all categories &amp; buying guides →
        </Link>
        {selectedCategory && (
          <Link
            href={`/categories/${selectedCategory.slug}`}
            className="inline-flex min-h-10 items-center underline underline-offset-4 hover:text-primary/80"
          >
            {selectedCategory.name} buying guide →
          </Link>
        )}
      </div>
    </>
  );
}
