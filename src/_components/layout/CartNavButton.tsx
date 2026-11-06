'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/_context/CartContext';

export function CartNavButton() {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <button
      type="button"
      onClick={() => setIsCartOpen(true)}
      className="group flex cursor-pointer select-none flex-col items-center justify-center px-2 py-1 text-secondary-foreground/85 transition-colors hover:text-white"
      aria-label={`View Cart (${totalCount} items)`}
      title="View Shopping Cart"
    >
      <div className="relative flex items-center justify-center">
        <ShoppingCart className="w-6 h-6 stroke-[1.75] group-hover:scale-105 transition-transform" />
        <span className="absolute -top-1.5 -right-2.5 bg-primary text-primary-foreground text-[10px] font-bold min-w-4 h-4 px-1 rounded-full flex items-center justify-center leading-none shadow-xs">
          {totalCount}
        </span>
      </div>
      <span className="mt-1 hidden text-xs font-medium leading-none text-secondary-foreground/85 transition-colors group-hover:text-white md:block">
        Cart
      </span>
    </button>
  );
}
