import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex min-h-11 cursor-pointer select-none items-center justify-center rounded-xl font-semibold transition-[background-color,border-color,box-shadow,color,transform] duration-200 active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variants = {
      primary: 'bg-gradient-to-b from-primary to-primary/90 text-primary-foreground shadow-sm shadow-primary/20 ring-1 ring-inset ring-white/10 hover:brightness-[1.03] hover:shadow-md hover:shadow-primary/25 focus-visible:ring-primary',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 hover:shadow-md focus-visible:ring-secondary',
      accent: 'bg-gradient-to-b from-accent to-accent/90 text-accent-foreground shadow-sm shadow-accent/20 ring-1 ring-inset ring-white/10 hover:brightness-[1.03] hover:shadow-md hover:shadow-accent/25 focus-visible:ring-accent',
      outline: 'border border-border bg-card text-foreground shadow-xs hover:border-primary/35 hover:bg-primary/5 hover:text-primary focus-visible:ring-primary',
      ghost: 'bg-transparent text-foreground hover:bg-muted focus-visible:ring-primary',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

