import Link from 'next/link';
import { Button } from '@/_ui/button';
import { CheckCircle2, MessageSquare } from 'lucide-react';

interface OrderSuccessViewProps {
  orderId: string;
  customerName: string;
  phone: string;
}

export function OrderSuccessView({ orderId, customerName, phone }: OrderSuccessViewProps) {
  return (
    <div className="bg-card border border-emerald-500/40 rounded-xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-xl space-y-5">
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>
      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 text-xs font-bold">
        Order Placed Successfully!
      </span>
      <h2 className="text-2xl font-black text-foreground">Thank you, {customerName}!</h2>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        Your order has been confirmed in our system. Our team will contact your phone number ({phone}) shortly to verify shipping details.
      </p>

      <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
        <span className="text-xs text-muted-foreground">Your Order Tracking ID:</span>
        <p className="text-xl font-black text-primary tracking-widest mt-0.5">{orderId}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button variant="accent" size="md" className="flex-1">
          <a
            href={`https://wa.me/8801910755835?text=${encodeURIComponent(
              `Hello! My Order ID is ${orderId}. Please confirm my order.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Notify via WhatsApp</span>
          </a>
        </Button>
        <Button variant="outline" size="md" className="flex-1">
          <Link href={`/track-order?id=${orderId}`}>Track Order Live</Link>
        </Button>
      </div>
    </div>
  );
}
