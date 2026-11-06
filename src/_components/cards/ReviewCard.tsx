import { Star, CheckCircle } from 'lucide-react';
import type { CustomerReview } from '@/_types';

export function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <article className="surface-panel flex h-full flex-col justify-between p-5 shadow-sm sm:p-6">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < review.rating ? 'fill-current text-amber-400' : 'text-muted'}`}
              />
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground">{review.date}</span>
        </div>

        <p className="mb-5 text-sm leading-7 text-foreground/90 sm:text-base">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      <div className="pt-3 border-t border-border/50 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-semibold text-foreground">{review.name}</h4>
            {review.verifiedPurchase && (
              <span className="flex items-center gap-0.5 text-[10px] text-emerald-600 font-semibold bg-emerald-500/10 px-1.5 py-0.2 rounded-full">
                <CheckCircle className="w-2.5 h-2.5" />
                <span>Verified</span>
              </span>
            )}
          </div>
          <p className="text-[11px] text-muted-foreground">{review.location}</p>
        </div>
        <span className="text-[10px] text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-md text-right max-w-[130px] truncate">
          {review.serviceOrProduct}
        </span>
      </div>
    </article>
  );
}
