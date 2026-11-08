'use client';

import { useState, useMemo, useSyncExternalStore } from 'react';
import { Star, ShieldCheck, MessageSquarePlus, MessageSquare } from 'lucide-react';
import type { Product } from '@/_types';
import { Button } from '@/_ui/button';
import { ProductReviewForm } from './ProductReviewForm';

interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('muhit_reviews_updated', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('muhit_reviews_updated', callback);
  };
}

export function ProductReviewsSection({ product }: { product: Product }) {
  const [showForm, setShowForm] = useState(false);

  const rawReviews = useSyncExternalStore(
    subscribe,
    () => (typeof window !== 'undefined' ? localStorage.getItem(`muhit_reviews_${product.slug}`) || '[]' : '[]'),
    () => '[]'
  );

  const reviews: ReviewItem[] = useMemo(() => {
    try { return JSON.parse(rawReviews); } catch { return []; }
  }, [rawReviews]);

  const handleNewReview = (newRev: { name: string; rating: number; comment: string }) => {
    const entry: ReviewItem = { id: `rev-${Date.now()}`, name: newRev.name, rating: newRev.rating, date: 'Just now', comment: newRev.comment, verified: true };
    localStorage.setItem(`muhit_reviews_${product.slug}`, JSON.stringify([entry, ...reviews]));
    window.dispatchEvent(new Event('muhit_reviews_updated'));
    setShowForm(false);
  };

  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews) : 0;

  const distribution = useMemo(() => {
    if (totalReviews === 0) return [];
    return [5, 4, 3, 2, 1].map((stars) => {
      const count = reviews.filter((r) => r.rating === stars).length;
      const pct = Math.round((count / totalReviews) * 100);
      return { stars, count, pct };
    });
  }, [reviews, totalReviews]);

  return (
    <section id="reviews" className="mt-12 rounded-2xl border border-border/80 bg-card p-5 sm:p-8 shadow-xs scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/60 pb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Customer Ratings & Reviews</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Verified buyer ratings for {product.title}</p>
        </div>
        <Button
          size="sm"
          variant={showForm ? 'outline' : 'primary'}
          onClick={() => setShowForm(!showForm)}
          className="gap-1.5 text-xs self-start sm:self-auto"
        >
          <MessageSquarePlus className="size-4" />
          <span>{showForm ? 'Close Form' : 'Write a Review'}</span>
        </Button>
      </div>

      {showForm && (
        <div className="my-6 animate-in fade-in">
          <ProductReviewForm
            productTitle={product.title}
            onReviewSubmit={handleNewReview}
            onClose={() => setShowForm(false)}
          />
        </div>
      )}

      {totalReviews === 0 ? (
        !showForm && (
          <div className="my-8 flex flex-col items-center justify-center text-center p-8 rounded-xl bg-muted/20 border border-border/60">
            <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
              <MessageSquare className="size-6" />
            </div>
            <h3 className="text-sm font-bold text-foreground">No customer reviews yet</h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm">
              Be the first verified buyer to share your hands-on feedback and rating for this product.
            </p>
            <Button size="sm" onClick={() => setShowForm(true)} className="mt-4 gap-1.5 text-xs">
              <MessageSquarePlus className="size-3.5" />
              <span>Write the first review</span>
            </Button>
          </div>
        )
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 items-center">
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-5 rounded-xl bg-muted/25 border border-border/60">
              <span className="text-4xl font-extrabold text-foreground">{averageRating.toFixed(1)}</span>
              <div className="flex items-center gap-1 my-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${i < Math.round(averageRating) ? 'fill-current text-amber-500' : 'text-muted-foreground/30'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                Based on {totalReviews} verified {totalReviews === 1 ? 'review' : 'reviews'}
              </span>
            </div>

            <div className="md:col-span-8 space-y-1.5">
              {distribution.map((d) => (
                <div key={d.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 text-muted-foreground font-medium flex items-center gap-1">
                    <span>{d.stars}</span>
                    <Star className="size-3 fill-amber-500 text-amber-500" />
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className="w-10 text-right font-semibold text-foreground text-[11px]">
                    {d.count} ({d.pct}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-foreground">Customer Reviews ({totalReviews})</h3>
            <div className="divide-y divide-border/60">
              {reviews.map((rev) => (
                <div key={rev.id} className="py-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">{rev.name}</span>
                      {rev.verified && (
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                          <ShieldCheck className="size-3" />
                          <span>Verified Buyer</span>
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-muted-foreground">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-3.5 ${i < rev.rating ? 'fill-current text-amber-500' : 'text-muted-foreground/30'}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
