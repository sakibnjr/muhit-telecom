'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/_context/CartContext';
import { siteConfig } from '@/_data/siteConfig';
import { Button } from '@/_ui/button';
import { Input } from '@/_ui/input';
import { OrderSuccessView } from '@/_components/forms/OrderSuccessView';
import { CheckoutSummary } from '@/_components/forms/CheckoutSummary';
import { Truck, Store } from 'lucide-react';

export function CheckoutForm() {
  const { cart, subtotal, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('Dinajpur');
  const [deliveryType, setDeliveryType] = useState<'store_pickup' | 'local_hili' | 'courier_cod'>('courier_cod');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bkash' | 'store_pay'>('cod');
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  const deliveryFee = siteConfig.deliveryFees[deliveryType];
  const grandTotal = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;

    const generatedOrderId = `MT-${Math.floor(10000 + Math.random() * 90000)}`;

    const orderRecord = {
      orderId: generatedOrderId,
      customerName: name,
      phone,
      address: `${address}, ${district}`,
      deliveryType,
      paymentMethod,
      items: cart,
      subtotal,
      deliveryFee,
      total: grandTotal,
      createdAt: new Date().toLocaleDateString('en-US'),
      status: 'Confirmed',
    };

    try {
      const existing = JSON.parse(localStorage.getItem('muhit_telecom_orders') || '[]');
      existing.unshift(orderRecord);
      localStorage.setItem('muhit_telecom_orders', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setOrderSuccess(generatedOrderId);
    clearCart();
  };

  if (orderSuccess) {
    return <OrderSuccessView orderId={orderSuccess} customerName={name} phone={phone} />;
  }

  if (cart.length === 0) {
    return (
      <div className="surface-panel text-center p-8 sm:p-12 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-foreground">Your cart is empty</h2>
        <p className="text-sm leading-6 text-muted-foreground mt-2 mb-7">Please add some tech gadgets before proceeding to checkout.</p>
        <Button variant="primary" size="md">
          <Link href="/shop">Return to Shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="surface-panel lg:col-span-7 p-5 sm:p-8 space-y-7">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-foreground mb-1.5">
            1. Customer Information & Delivery Address
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Please enter your accurate name and active phone number for courier delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Md. Masum Billah" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Active Mobile Number *</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="01XXXXXXXXX" required />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">District *</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Dinajpur">Dinajpur</option>
              <option value="Joypurhat">Joypurhat</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Bogura">Bogura</option>
              <option value="Other">Other District (All Bangladesh)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Street Address / Landmark *</label>
            <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="e.g. Sonarpatti Road, Bazar Rd" required />
          </div>
        </div>

        <div className="pt-4 border-t border-border/60">
          <label className="block text-sm font-bold text-foreground mb-3">02 &nbsp; Choose delivery method</label>
          <div className="space-y-2.5">
            <label className={`flex items-center justify-between gap-2 p-4 rounded-lg border cursor-pointer transition-all ${deliveryType === 'store_pickup' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-border bg-card hover:bg-muted/50'}`}>
              <div className="flex items-center gap-3">
                <input type="radio" name="delivery" checked={deliveryType === 'store_pickup'} onChange={() => setDeliveryType('store_pickup')} className="text-primary" />
                <Store className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Store pickup (free, Sonarpatti, Hili)</span>
              </div>
              <span className="text-xs font-bold text-emerald-600">Free</span>
            </label>

            <label className={`flex items-center justify-between gap-2 p-4 rounded-lg border cursor-pointer transition-all ${deliveryType === 'local_hili' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-border bg-card hover:bg-muted/50'}`}>
              <div className="flex items-center gap-3">
                <input type="radio" name="delivery" checked={deliveryType === 'local_hili'} onChange={() => setDeliveryType('local_hili')} className="text-primary" />
                <Truck className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">Hili & Hakimpur local courier</span>
              </div>
              <span className="text-xs font-bold text-foreground">৳50</span>
            </label>

            <label className={`flex items-center justify-between gap-2 p-4 rounded-lg border cursor-pointer transition-all ${deliveryType === 'courier_cod' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-border bg-card hover:bg-muted/50'}`}>
              <div className="flex items-center gap-3">
                <input type="radio" name="delivery" checked={deliveryType === 'courier_cod'} onChange={() => setDeliveryType('courier_cod')} className="text-primary" />
                <Truck className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-foreground">Nationwide cash on delivery (all Bangladesh)</span>
              </div>
              <span className="text-xs font-bold text-foreground">৳120</span>
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-border/60">
          <label className="block text-sm font-bold text-foreground mb-3">03 &nbsp; Payment option</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className={`p-4 rounded-lg border cursor-pointer flex items-center gap-3 transition-colors ${paymentMethod === 'cod' ? 'border-accent bg-accent/5 ring-1 ring-accent/20' : 'border-border bg-card hover:bg-muted/50'}`}>
              <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
              <div>
                <p className="text-sm font-bold text-foreground">Cash on delivery</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pay when your parcel arrives</p>
              </div>
            </label>
            <label className={`p-4 rounded-lg border cursor-pointer flex items-center gap-3 transition-colors ${paymentMethod === 'bkash' ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-border bg-card hover:bg-muted/50'}`}>
              <input type="radio" name="payment" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} />
              <div>
                <p className="text-sm font-bold text-foreground">bKash / Nagad</p>
                <p className="text-xs text-muted-foreground mt-0.5">Send money to 01910-755835</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <CheckoutSummary cart={cart} subtotal={subtotal} deliveryFee={deliveryFee} grandTotal={grandTotal} />
    </form>
  );
}
