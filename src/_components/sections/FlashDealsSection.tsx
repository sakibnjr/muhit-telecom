import { productsData } from '@/_data/products';
import { ProductCard } from '@/_components/cards/ProductCard';
import { Container } from '@/_components/layout/Container';
import Link from 'next/link';
import { Zap, Clock, ArrowRight } from 'lucide-react';

export function FlashDealsSection() {
  const hotDeals = productsData
    .filter((product) => product.regularPrice > product.price)
    .slice(0, 6);

  return (
    <section className="py-12 md:py-16 bg-card border-y border-border/80">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 pb-4 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-md">
              <Zap className="w-5 h-5 fill-current animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-foreground">
                  Hot Flash Deals
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-accent/15 text-accent text-xs font-bold">
                  Limited Stock
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Special discounted prices on authentic tech gadgets.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-xs font-semibold text-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>Deals Active: Today & Tomorrow</span>
            </div>
            <Link
              href="/shop?filter=deals"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent hover:opacity-85 transition-opacity"
            >
              <span>View All Deals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-6">
          {hotDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
