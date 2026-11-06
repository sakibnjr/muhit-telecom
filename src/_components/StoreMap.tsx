import { ExternalLink, MapPin } from 'lucide-react';
import { siteConfig } from '@/_data/siteConfig';

export function StoreMap() {
  return (
    <figure className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-xs">
      <div className="flex items-center gap-3 border-b border-border bg-light-section px-5 py-4 text-light-section-text">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary">
          <MapPin className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold">Find {siteConfig.name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {siteConfig.address.upazila}, {siteConfig.address.district}
          </p>
        </div>
      </div>
      <iframe
        title={`${siteConfig.name} store location in ${siteConfig.address.upazila}, ${siteConfig.address.district}`}
        src={siteConfig.address.googleMapsEmbed}
        width="600"
        height="360"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-72 w-full flex-1 border-0 bg-muted sm:min-h-80"
      />
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4">
        <p className="text-xs text-muted-foreground">Map not loading? Open it directly.</p>
        <a
          href={siteConfig.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Open Google Maps
          <ExternalLink className="size-4" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  );
}
