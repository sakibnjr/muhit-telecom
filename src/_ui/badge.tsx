import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'outline' | 'muted';
}

export function Badge({ className, variant = 'primary', children, ...props }: BadgeProps) {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors';

  const variants = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground shadow-xs',
    success: 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/30',
    outline: 'border border-border text-foreground bg-card',
    muted: 'bg-muted text-muted-foreground',
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}

