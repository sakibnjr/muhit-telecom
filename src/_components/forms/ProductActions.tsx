'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ShoppingCart, Zap, MessageSquare, Plus, Minus } from 'lucide-react';
import type { Product } from '@/_types';
import { useCart } from '@/_context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/_ui/button';

export function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const addedFeedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => () => {
    if (addedFeedbackTimer.current) clearTimeout(addedFeedbackTimer.current);
  }, []);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    if (addedFeedbackTimer.current) clearTimeout(addedFeedbackTimer.current);
    addedFeedbackTimer.current = setTimeout(() => setIsAdded(false), 1600);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/checkout');
  };

  const handleWhatsAppOrder = () => {
    const total = formatPrice(product.price * quantity);
    const msg = encodeURIComponent(
      `Hello! I would like to order from Muhit Telecom:\n\nProduct: ${product.title}\nQuantity: ${quantity}\nPrice: ${total}\n\nPlease confirm availability and delivery schedule.`
    );
    window.open(`https://wa.me/8801910755835?text=${msg}`, '_blank');
  };

  return (
    <div className="space-y-4 pt-2">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-foreground">Quantity:</span>
        <div className="flex items-center rounded-xl border border-border bg-card">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex size-11 cursor-pointer items-center justify-center rounded-l-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-10 text-center text-base font-semibold text-foreground">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            className="flex size-11 cursor-pointer items-center justify-center rounded-r-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <span className="text-sm text-muted-foreground">
          ({product.stock} items available)
        </span>
      </div>

      {/* Main Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button
          variant="accent"
          size="lg"
          onClick={handleBuyNow}
          className="w-full text-sm font-bold shadow-md cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Buy Now (Instant Checkout)</span>
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={handleAddToCart}
          aria-label={isAdded ? `${product.title} added to cart` : `Add ${product.title} to cart`}
          aria-live="polite"
          className={`w-full text-sm font-bold shadow-md cursor-pointer ${isAdded ? 'from-emerald-700 to-emerald-800 shadow-emerald-700/20' : ''}`}
        >
          {isAdded ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          <span>{isAdded ? 'Added to Cart' : 'Add to Cart'}</span>
        </Button>
      </div>

      {/* WhatsApp Quick Order Banner */}
      <button
        type="button"
        onClick={handleWhatsAppOrder}
        className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-[background-color,border-color,box-shadow,color,transform] hover:bg-emerald-800 hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Order Directly via WhatsApp (01910-755835)</span>
      </button>
    </div>
  );
}
