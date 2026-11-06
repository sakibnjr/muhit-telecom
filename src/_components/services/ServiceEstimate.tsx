import Link from 'next/link';
import type { ServiceItem } from '@/_types';
import { formatPrice } from '@/lib/utils';
import { siteConfig } from '@/_data/siteConfig';

export function ServiceEstimate({ service }: { service: ServiceItem }) {
  return (
    <aside className="surface-panel space-y-5 p-6 shadow-sm lg:sticky lg:top-36">
      <h2 className="text-2xl font-bold tracking-tight">Plan your visit</h2>
      <dl className="space-y-4 text-sm">
        <div>
          <dt className="font-semibold">Indicative starting price</dt>
          <dd className="text-muted-foreground">From {formatPrice(service.startingPrice)}; confirm the total after inspection or product selection.</dd>
        </div>
        <div>
          <dt className="font-semibold">Catalog time estimate</dt>
          <dd className="text-muted-foreground">{service.estimatedTime}; not a guaranteed completion time. Confirm scope and availability first.</dd>
        </div>
        <div>
          <dt className="font-semibold">Warranty guidance</dt>
          <dd className="text-muted-foreground">
            {service.warrantyDays > 0
              ? `Catalog reference: ${service.warrantyDays} days. This is indicative, not automatic coverage; confirm the applicable part or service terms and exclusions at inspection.`
              : 'No fixed warranty period is listed. Confirm the agreed scope and any applicable terms before proceeding.'}
          </dd>
        </div>
      </dl>
      <p className="text-sm leading-6 text-muted-foreground">Back up important data before service. No repair outcome, unlock eligibility or data preservation is guaranteed.</p>
      <a href="#booking-form" className="flex min-h-12 items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">Request this service</a>
      <a href={`tel:${siteConfig.phoneIntl}`} className="inline-flex min-h-11 items-center text-primary font-semibold">Call {siteConfig.phone}</a>
      <p className="text-sm text-muted-foreground">{siteConfig.address.fullAddress_en}<br />{siteConfig.hours.display}</p>
      <Link href="/contact" className="inline-block text-sm text-primary underline underline-offset-4">Visit and contact details</Link>
      <Link href="/warranty-policy" className="block text-sm text-primary underline underline-offset-4">Read warranty policy</Link>
    </aside>
  );
}
