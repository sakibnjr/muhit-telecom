'use client';

import { useState } from 'react';
import { Button } from '@/_ui/button';
import { Input } from '@/_ui/input';
import { MessageSquare, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const msg = encodeURIComponent(
      `Hello! I am reaching out through the Muhit Telecom website:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message || 'I would like to inquire about gadget availability / device repair.'}`
    );

    setSent(true);
    window.open(`https://wa.me/8801910755835?text=${msg}`, '_blank');
  };

  if (sent) {
    return (
      <div className="surface-panel space-y-3 border-emerald-500/40 p-6 text-center sm:p-8">
        <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
        <h3 className="text-base font-bold text-foreground">Message Dispatched!</h3>
        <p className="text-sm leading-7 text-muted-foreground">
          Thank you, {name}! We will connect with you shortly via WhatsApp or direct phone call.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="min-h-11 text-sm font-semibold text-primary hover:underline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-panel space-y-5 p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-foreground">Send an Instant Message</h3>
      <p className="text-sm leading-7 text-muted-foreground">
        For wholesale gadget queries, warranty claims, or device repair inquiries:
      </p>

      <div>
        <label className="mb-2 block text-sm font-semibold text-foreground">Your Name *</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Md. Arif Hossain" required />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-foreground">Phone Number *</label>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="01XXXXXXXXX" required />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-foreground">Your Inquiry or Device Model</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Please describe your gadget requirement or smartphone issue..."
          className="min-h-28 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
        />
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full">
        <MessageSquare className="w-4 h-4 mr-2" />
        <span>Submit & Chat on WhatsApp</span>
      </Button>
    </form>
  );
}
