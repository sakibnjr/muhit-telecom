'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Send, CheckCircle2, ShieldCheck, LogIn, X } from 'lucide-react';
import { Button } from '@/_ui/button';
import { useAuth } from '@/_context/AuthContext';

interface ProductReviewFormProps {
  productTitle: string;
  onReviewSubmit: (review: { name: string; rating: number; comment: string }) => void;
  onClose?: () => void;
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="16" height="16">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

export function ProductReviewForm({ productTitle, onReviewSubmit, onClose }: ProductReviewFormProps) {
  const { user, signInWithGoogle, isLoading } = useAuth();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (isLoading) {
    return (
      <div className="rounded-xl border border-border/80 bg-muted/20 p-6 text-center text-xs text-muted-foreground animate-pulse">
        Checking authentication status...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative rounded-2xl border border-border/80 bg-muted/20 p-6 sm:p-8 text-center space-y-3">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        )}
        <div className="mx-auto size-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          <LogIn className="size-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground sm:text-base">Sign in to leave a review</h4>
          <p className="text-xs text-muted-foreground mt-1 max-w-md mx-auto">
            Please sign in with your Google account to share your rating and experience. It takes just a few seconds!
          </p>
        </div>
        <div className="pt-1">
          <Button
            type="button"
            onClick={signInWithGoogle}
            className="gap-2 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 shadow-xs font-semibold text-xs"
          >
            <GoogleIcon className="size-4" />
            <span>Continue with Google</span>
          </Button>
        </div>
      </div>
    );
  }

  const reviewerName = (user.user_metadata?.full_name as string) || (user.user_metadata?.name as string) || user.email?.split('@')[0] || 'Verified Buyer';
  const avatarUrl = (user.user_metadata?.avatar_url as string) || (user.user_metadata?.picture as string) || undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    onReviewSubmit({ name: reviewerName, rating, comment: comment.trim() });
    setSubmitted(true);
    setComment('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border/80 bg-muted/20 p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2.5">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={reviewerName}
              width={32}
              height={32}
              unoptimized
              className="size-8 rounded-full border border-border shrink-0"
            />
          ) : (
            <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">
              {reviewerName[0].toUpperCase()}
            </div>
          )}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-foreground">{reviewerName}</span>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-600">
                <ShieldCheck className="size-2.5" />
                <span>Google Verified</span>
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-muted-foreground mr-1.5">Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => {
            const active = (hoverRating || rating) >= star;
            return (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-0.5 text-amber-500 transition-transform hover:scale-125 focus:outline-none"
                aria-label={`Rate ${star} star`}
              >
                <Star className={`size-5 ${active ? 'fill-current text-amber-500' : 'text-muted-foreground/40'}`} />
              </button>
            );
          })}
          <span className="ml-1 text-xs font-bold text-foreground">{rating}/5</span>
        </div>
      </div>

      {submitted ? (
        <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-700">
          <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
          <span>Thank you! Your verified rating and review have been published.</span>
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Your Review for {productTitle}
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="How is the sound, build quality, battery backup or performance in your daily use?"
              rows={3}
              required
              className="w-full rounded-md border border-input bg-background p-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-1">
            {onClose && (
              <Button type="button" variant="outline" size="sm" onClick={onClose} className="text-xs">
                Cancel
              </Button>
            )}
            <Button type="submit" size="sm" className="gap-1.5 text-xs">
              <Send className="size-3.5" />
              <span>Submit Review</span>
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
