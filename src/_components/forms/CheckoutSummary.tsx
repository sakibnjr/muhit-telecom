import type { CartItem } from '@/_types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/_ui/button';
import { ArrowRight } from 'lucide-react';

interface CheckoutSummaryProps {
  cart: CartItem[];
  subtotal: number;
  deliveryFee: number;
  grandTotal: number;
}

export function CheckoutSummary({ cart, subtotal, deliveryFee, grandTotal }: CheckoutSummaryProps) {
  return (
    <div className="surface-panel lg:col-span-5 p-6 sm:p-8 space-y-5 lg:sticky lg:top-36">
      <h3 className="text-lg font-bold tracking-tight text-foreground border-b border-border/70 pb-4">Your order</h3>
      <div className="divide-y divide-border/60 max-h-60 overflow-y-auto">
        {cart.map((item) => (
          <div key={item.product.id} className="py-3 flex items-center justify-between text-sm">
            <span className="line-clamp-1 flex-1 pr-2">
              {item.product.title} × {item.quantity}
            </span>
            <span className="font-bold shrink-0">{formatPrice(item.product.price * item.quantity)}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border/60 space-y-3 text-sm">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal:</span>
          <span className="font-semibold text-foreground">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Delivery Charge:</span>
          <span className="font-semibold text-foreground">{deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}</span>
        </div>
        <div className="pt-2 border-t border-border flex justify-between text-sm font-black text-foreground">
          <span>Total Payable:</span>
          <span className="text-lg text-primary">{formatPrice(grandTotal)}</span>
        </div>
      </div>

      <Button type="submit" variant="accent" size="lg" className="w-full text-sm font-bold shadow-md cursor-pointer">
        <span>Confirm Order ({formatPrice(grandTotal)})</span>
        <ArrowRight className="w-4 h-4 ml-1.5" />
      </Button>
    </div>
  );
}
