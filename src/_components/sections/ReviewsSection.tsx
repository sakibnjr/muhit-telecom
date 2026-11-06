import { Container } from '@/_components/layout/Container';
import { ReviewCard } from '@/_components/cards/ReviewCard';
import { customerReviews } from '@/_data/reviews';
import { Star } from 'lucide-react';
import { siteConfig } from '@/_data/siteConfig';

export function ReviewsSection() {
  return (
    <section className="py-14 md:py-20 bg-muted/40 border-t border-border/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-amber-500 font-bold text-xs uppercase tracking-wider">
              <Star className="w-4 h-4 fill-current" />
              <span>4.3 ★ Google Rating & Community Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Genuine feedback from customers in Hakimpur, Hili, Dinajpur, and all across Bangladesh.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-card border border-border px-4 py-2.5 rounded-xl shadow-xs shrink-0">
            <span className="text-2xl font-black text-foreground">{siteConfig.rating}</span>
            <div className="text-xs">
              <div className="flex text-amber-400">★★★★☆</div>
              <span className="text-muted-foreground text-[11px]">Google Maps Verified</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
