import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Container } from '@/_components/layout/Container';
import { ServiceCard } from '@/_components/cards/ServiceCard';
import { ServiceBookingForm } from '@/_components/forms/ServiceBookingForm';
import { ServiceArticle } from '@/_components/services/ServiceArticle';
import { ServiceEstimate } from '@/_components/services/ServiceEstimate';
import { ServiceJsonLd } from '@/_components/services/ServiceJsonLd';
import { pageMetadata } from '@/_components/seo/metadata';
import { getServicePage } from '@/_data/serviceContent';
import { servicesData } from '@/_data/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();
  return pageMetadata({
    title: `${page.content.title} | Muhit Telecom`,
    description: page.content.description,
    path: `/services/${slug}`,
  });
}

function ServiceLoading() {
  return (
    <div className="page-shell">
      <Container>
        <div className="mb-10 w-full animate-pulse space-y-4">
          <div className="h-3 w-48 rounded bg-muted" />
          <div className="h-12 w-full rounded bg-muted" />
          <div className="h-6 w-full rounded bg-muted" />
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <div className="h-96 rounded-lg bg-muted" />
          <div className="h-72 rounded-lg bg-muted" />
        </div>
      </Container>
    </div>
  );
}

async function ServicePageContent({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();
  const { service, content } = page;
  const related = content.relatedSlugs.flatMap((relatedSlug) => {
    const item = servicesData.find((entry) => entry.slug === relatedSlug);
    return item ? [item] : [];
  });

  return (
    <div className="page-shell">
      <ServiceJsonLd content={content} />
      <Container>
        <header className="mb-10 w-full">
          <h1 className="page-title">{content.title}</h1>
          <p lang="bn" className="mt-3 text-base text-muted-foreground">{service.title_bn}</p>
        </header>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] lg:gap-10">
          <ServiceArticle content={content} />
          <ServiceEstimate service={service} />
        </div>
        <section className="mt-14 w-full" aria-label="Request a service consultation">
          <ServiceBookingForm key={slug} initialServiceSlug={slug} />
        </section>
        <section className="mt-14" aria-labelledby="related-services">
          <h2 id="related-services" className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">Related services</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => <ServiceCard key={item.id} service={item} />)}
          </div>
          <Link href="/services" className="mt-5 inline-flex min-h-11 items-center text-primary font-semibold underline underline-offset-4">Browse all eight services</Link>
        </section>
      </Container>
    </div>
  );
}

export default function ServicePage({ params }: Props) {
  return (
    <Suspense fallback={<ServiceLoading />}>
      <ServicePageContent params={params} />
    </Suspense>
  );
}
