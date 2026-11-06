import { productsData } from '@/_data/products';
import { ProductCard } from '@/_components/cards/ProductCard';
import { Container } from '@/_components/layout/Container';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeaturedGadgetsSection() {
  const featured = productsData
    .filter((product) => product.featured || product.rating >= 4.5)
    .slice(0, 6);

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-0">
              Featured Tech Gear
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Top-selling and reliable gadget gear across Bangladesh at competitive prices.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <span>Browse All Gear</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
