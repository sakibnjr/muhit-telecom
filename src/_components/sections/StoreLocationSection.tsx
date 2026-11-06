import Image from "next/image";
import { Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";

function ContactIcon({ kind }: { kind: "address" | "hours" | "phone" }) {
  if (kind === "address") {
    return (
      <svg viewBox="0 0 24 24" className="size-7 text-primary" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.25a7.25 7.25 0 0 0-7.25 7.25c0 5.2 7.25 12.25 7.25 12.25s7.25-7.05 7.25-12.25A7.25 7.25 0 0 0 12 2.25Z"
        />
        <circle cx="12" cy="9.5" r="2.6" fill="white" />
      </svg>
    );
  }

  if (kind === "hours") {
    return (
      <svg viewBox="0 0 24 24" className="size-7 text-primary" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          d="M12 6.5v5.7l3.7 2.2"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-7 text-primary" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.06 21 3 13.94 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.19Z"
      />
    </svg>
  );
}

const rowClass =
  "flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-3 shadow-sm backdrop-blur-sm lg:items-start lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none";
const iconClass =
  "flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 lg:mt-0.5 lg:size-8 lg:rounded-none lg:bg-transparent";

const rows = [
  {
    kind: "address" as const,
    label: "Address",
    content: (
      <span className="mt-0.5 block leading-5 text-muted-foreground lg:mt-1 lg:leading-6">
        {siteConfig.address.fullAddress_en}
      </span>
    ),
  },
  {
    kind: "hours" as const,
    label: "Opening hours",
    content: (
      <span className="mt-0.5 block leading-5 text-muted-foreground lg:mt-1 lg:leading-6">
        {siteConfig.hours.display}
      </span>
    ),
  },
  {
    kind: "phone" as const,
    label: "Call or WhatsApp",
    content: (
      <a
        href={`tel:${siteConfig.phoneIntl}`}
        className="mt-0.5 inline-flex min-h-6 items-center font-semibold text-primary hover:underline lg:mt-1"
      >
        {siteConfig.phone}
      </a>
    ),
  },
];

export function StoreLocationSection() {
  return (
    <section aria-labelledby="store-location-heading" className="py-6 sm:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative isolate overflow-hidden rounded-xl">
          <Image
            src="/images/hero/promo-hili-store.avif"
            alt="Bright local electronics shop with neatly displayed phones and accessories"
            fill
            sizes="(max-width: 1023px) 100vw, 1440px"
            className="object-cover object-right"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/75 lg:bg-gradient-to-r lg:from-white lg:from-32% lg:via-white/85 lg:via-46% lg:to-transparent lg:to-56%"
          />
          <div className="relative grid gap-4 p-4 sm:gap-6 sm:p-6 lg:grid-cols-2 lg:p-8">
            <div className="flex flex-col justify-center p-1 sm:p-5 lg:p-6">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary lg:hidden">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                Visit our store
              </span>
              <h2
                id="store-location-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:mt-0"
              >
                Contact our Hili store
              </h2>
              <div className="mt-5 grid gap-3 text-sm sm:gap-5 lg:mt-6">
                {rows.map(({ kind, label, content }) => (
                  <div key={kind} className={rowClass}>
                    <span className={iconClass}>
                      <ContactIcon kind={kind} />
                    </span>
                    <div className="min-w-0">
                      <span className="block font-bold text-foreground">{label}</span>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2.5 lg:hidden">
                <a
                  href={`tel:${siteConfig.phoneIntl}`}
                  className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call now
                </a>
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-white/90 px-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-white"
                >
                  <Navigation className="size-4 text-primary" aria-hidden="true" />
                  Directions
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
