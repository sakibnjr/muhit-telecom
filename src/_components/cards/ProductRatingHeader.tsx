'use client';

import { useMemo, useSyncExternalStore } from 'react';
import { Star } from 'lucide-react';
import type { Product } from '@/_types';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('muhit_reviews_updated', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('muhit_reviews_updated', callback);
  };
}

export function ProductRatingHeader({ product }: { product: Product }) {
  const rawReviews = useSyncExternalStore(
    subscribe,
    () => (typeof window !== 'undefined' ? localStorage.getItem(`muhit_reviews_${product.slug}`) || '[]' : '[]'),
    () => '[]'
  );

  const reviews = useMemo(() => {
    try {
      return JSON.parse(rawReviews) as Array<{ rating: number }>;
    } catch {
      return [];
    }
  }, [rawReviews]);

  const count = reviews.length;
  const avg = count > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / count : 0;

  if (count > 0) {
    return (
      <a href="#reviews" className="inline-flex items-center gap-2 mt-3 group cursor-pointer">
        <div className="flex items-center text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-4 ${i < Math.round(avg) ? 'fill-current text-amber-500' : 'text-muted-foreground/30'}`}
            />
          ))}
        </div>
        <span className="text-xs font-bold text-foreground">{avg.toFixed(1)}</span>
        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
          ({count} {count === 1 ? 'review' : 'reviews'})
        </span>
      </a>
    );
  }

  return (
    <a href="#reviews" className="inline-flex items-center gap-2 mt-3 group cursor-pointer">
      <div className="flex items-center text-muted-foreground/30">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 text-muted-foreground/30" />
        ))}
      </div>
      <span className="text-xs text-muted-foreground font-medium">No customer reviews yet</span>
      <span className="text-xs text-primary font-semibold underline underline-offset-2 group-hover:text-primary/80 transition-colors">
        Be the first to review
      </span>
    </a>
  );
}

