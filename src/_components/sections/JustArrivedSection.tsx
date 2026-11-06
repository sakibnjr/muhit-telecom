import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { productsData } from '@/_data/products';
import { ProductCard } from '@/_components/cards/ProductCard';

export function JustArrivedSection() {
  const newArrivals = productsData.slice(3, 9);

  return (
    <section id="new-arrivals" className="scroll-mt-44 bg-background py-5 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Just arrived
            </h2>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Fresh stock added this week
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <span>View new arrivals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

