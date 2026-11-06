'use client';

import { useSearchParams } from 'next/navigation';
import { ServiceBookingForm } from '@/_components/forms/ServiceBookingForm';

export function ServiceBookingQuery() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('book') ?? undefined;
  return <ServiceBookingForm key={slug ?? 'default'} initialServiceSlug={slug} />;
}
