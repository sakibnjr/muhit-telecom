import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `৳${amount.toLocaleString('en-US')}`;
}

export function calculateDiscount(regular: number, offer: number): number {
  if (regular <= offer) return 0;
  return Math.round(((regular - offer) / regular) * 100);
}

