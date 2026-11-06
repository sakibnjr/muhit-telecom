'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/_context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/_ui/button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export function CartView() {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal, totalCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="surface-panel text-center p-8 sm:p-12 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-muted-foreground">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Your Shopping Bag is Empty!</h2>
        <p className="text-sm leading-6 text-muted-foreground mt-2 mb-7">
          Add your favorite earbuds, chargers, or gadgets to your cart.
        </p>
        <Button variant="primary" size="md">
          <Link href="/shop" className="flex items-center gap-2">
            <span>Browse Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Cart Items List */}
      <div className="surface-panel lg:col-span-8 p-5 sm:p-7 divide-y divide-border/70">
        <div className="pb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Cart Items ({totalCount} items)
          </h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={clearCart}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600 hover:underline cursor-pointer transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Cart</span>
            </button>
            <Link href="/shop" className="text-sm font-semibold text-primary hover:underline">
              + Add More Gear
            </Link>
          </div>
        </div>

        {cart.map((item) => (
          <div key={item.product.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative w-24 h-24 rounded-lg bg-muted/70 border border-border/70 overflow-hidden shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.title}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <Link href={`/products/${item.product.slug}`} className="hover:text-primary transition-colors">
                  <h3 className="text-base font-semibold text-foreground line-clamp-2">
                    {item.product.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mt-1">{item.product.brand}</p>
                <p className="text-sm font-black text-primary mt-1">
                  {formatPrice(item.product.price)}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-6">
              <div className="flex items-center border border-border rounded-lg bg-card">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="min-h-10 min-w-10 p-2 text-muted-foreground hover:text-foreground cursor-pointer rounded-lg hover:bg-muted"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-semibold text-foreground">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="min-h-10 min-w-10 p-2 text-muted-foreground hover:text-foreground cursor-pointer rounded-lg hover:bg-muted"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-right min-w-[80px]">
                <p className="text-sm font-bold text-foreground">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => removeFromCart(item.product.id)}
                className="min-h-10 min-w-10 p-2 text-muted-foreground hover:text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                aria-label="Delete item"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="surface-panel lg:col-span-4 p-6 sm:p-7 space-y-5">
        <h3 className="text-lg font-bold tracking-tight text-foreground border-b border-border/70 pb-4">
          Order Summary
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Subtotal:</span>
            <span className="font-bold text-foreground">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Shipping:</span>
            <span className="font-semibold text-emerald-600">Calculated at checkout</span>
          </div>
        </div>

        <div className="pt-3 border-t border-border flex items-center justify-between">
          <span className="text-sm font-bold text-foreground">Total:</span>
          <span className="text-xl font-black text-primary">{formatPrice(subtotal)}</span>
        </div>

        <Button variant="accent" size="lg" className="w-full">
          <Link href="/checkout" className="flex items-center justify-center gap-2">
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>

        <div className="pt-2 text-xs text-muted-foreground flex items-center gap-2 justify-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>100% Safe Checkout & Cash on Delivery</span>
        </div>
      </div>
    </div>
  );
}
