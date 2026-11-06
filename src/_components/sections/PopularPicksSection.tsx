import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { productsData } from '@/_data/products';
import { ProductCard } from '@/_components/cards/ProductCard';

export function PopularPicksSection() {
  const popularProducts = productsData.slice(0, 6);

  return (
    <section className="bg-background py-5 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-4 flex items-center justify-between gap-2 sm:mb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-3xl">
              Popular picks
            </h2>
            <p className="mt-1 hidden text-sm text-muted-foreground sm:block sm:text-base">
              Most loved gadgets by our customers this month
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex min-h-9 items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80 sm:min-h-11 sm:gap-1.5 sm:text-sm"
          >
            <span>View all products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

