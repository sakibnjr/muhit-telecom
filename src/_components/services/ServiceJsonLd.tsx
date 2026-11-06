import { siteUrl } from '@/_components/seo/metadata';
import type { ServiceContent } from '@/_data/serviceContent';

export function ServiceJsonLd({ content }: { content: ServiceContent }) {
  const url = `${siteUrl}/services/${content.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
          { '@type': 'ListItem', position: 3, name: content.title, item: url },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: content.title,
        serviceType: content.title,
        description: content.description,
        url,
        provider: { '@id': `${siteUrl}/#store` },
        areaServed: { '@type': 'Place', name: 'Hakimpur (Hili), Dinajpur, Bangladesh' },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
