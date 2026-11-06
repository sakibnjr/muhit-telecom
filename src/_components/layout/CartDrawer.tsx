'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '@/_context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/_ui/button';

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalCount,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="relative w-full max-w-md bg-card h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">Shopping Bag ({totalCount})</span>
          </div>
          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="text-xs font-semibold text-red-500 hover:text-red-600 hover:underline px-1.5 py-1 cursor-pointer transition-colors"
                title="Clear all items from bag"
              >
                Clear Bag
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 divide-y divide-border/60">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/40 mb-3" />
              <p className="font-medium text-foreground">Your shopping bag is empty!</p>
              <p className="text-xs text-muted-foreground mt-1 mb-6">Explore our authentic gadgets collection.</p>
              <Button size="sm" onClick={() => setIsCartOpen(false)}>
                <Link href="/shop">Browse Catalog</Link>
              </Button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="py-3 flex gap-3 items-center">
                <div className="relative w-16 h-16 rounded-lg bg-muted border border-border/80 overflow-hidden shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-foreground line-clamp-1">
                    {item.product.title}
                  </h4>
                  <p className="text-xs text-primary font-bold mt-0.5">
                    {formatPrice(item.product.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-border rounded-md bg-muted/40">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-muted-foreground hover:text-foreground"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-muted-foreground hover:text-foreground"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-muted-foreground hover:text-red-500 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t border-border bg-muted/20 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Estimated Subtotal:</span>
              <span className="font-extrabold text-foreground text-base">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              * Delivery fee calculated at checkout (Free store pickup in Hili).
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(false)}
                className="w-full"
              >
                <Link href="/cart">View Cart</Link>
              </Button>
              <Button
                variant="accent"
                size="sm"
                onClick={() => setIsCartOpen(false)}
                className="w-full"
              >
                <Link href="/checkout" className="flex items-center justify-center gap-1.5">
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
