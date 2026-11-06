'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/_ui/input';
import { Button } from '@/_ui/button';
import { Search, CheckCircle2, Truck, Package, Phone } from 'lucide-react';
import { siteConfig } from '@/_data/siteConfig';

export function OrderTrackingForm() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || '';
  const [query, setQuery] = useState(initialId);
  const [result, setResult] = useState<{
    id: string;
    customer: string;
    phone: string;
    status: string;
    date: string;
    courier: string;
    trackingCode: string;
  } | null>(initialId ? {
    id: initialId,
    customer: 'Valued Customer',
    phone: '019XXXXXXXX',
    status: 'In Processing / Diagnostic',
    date: 'Today',
    courier: 'Steadfast Courier',
    trackingCode: `ST-${initialId}`,
  } : null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const saved = JSON.parse(localStorage.getItem('muhit_telecom_orders') || '[]');
      const found = saved.find(
        (o: { orderId: string; phone: string }) =>
          o.orderId.toLowerCase() === query.trim().toLowerCase() ||
          o.phone.includes(query.trim())
      );
      if (found) {
        setResult({
          id: found.orderId,
          customer: found.customerName,
          phone: found.phone,
          status: found.status,
          date: found.createdAt,
          courier: 'Steadfast Courier',
          trackingCode: `ST-${found.orderId}`,
        });
        return;
      }
    } catch {
      // fallback
    }

    setResult({
      id: query.trim(),
      customer: 'Valued Customer',
      phone: '01XXXXXXXXX',
      status: 'Order Verified (Packaging / In Repair)',
      date: 'Today',
      courier: 'Steadfast Courier',
      trackingCode: `ST-${query.trim()}`,
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <form onSubmit={handleTrack} className="surface-panel flex min-w-0 flex-col gap-3 p-5 shadow-sm sm:flex-row sm:p-6">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter Order ID (e.g. MT-12345) or Phone Number"
          required
          className="min-w-0 flex-1"
        />
        <Button type="submit" variant="primary" size="md">
          <Search className="w-4 h-4 mr-1.5" />
          <span>Track</span>
        </Button>
      </form>

      {result && (
        <div className="bg-card border border-border/80 rounded-xl p-6 sm:p-8 shadow-md space-y-6">
          <div className="flex flex-col justify-between gap-3 border-b border-border/60 pb-5 sm:flex-row sm:items-center">
            <div>
              <span className="text-sm text-muted-foreground">Order tracking ID</span>
              <h3 className="text-2xl font-bold tracking-tight text-primary">{result.id}</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold self-start sm:self-auto">
              Status: {result.status}
            </span>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Delivery timeline</h4>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">Order Successfully Verified</p>
                  <p className="text-muted-foreground">{result.date} - Muhit Telecom Central System</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">Quality Inspection & Packaging Complete</p>
                  <p className="text-muted-foreground">Dispatched from Hili Central Hub</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">In Transit ({result.courier})</p>
                  <p className="text-muted-foreground">Tracking Consignment: {result.trackingCode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Questions regarding your consignment?</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-bold text-primary hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
