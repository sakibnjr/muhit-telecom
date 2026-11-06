import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'min-h-11 w-full rounded-xl border bg-card px-4 py-2.5 text-sm text-foreground transition-colors',
          'placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary',
          error ? 'border-red-500 focus:ring-red-500' : 'border-border',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

