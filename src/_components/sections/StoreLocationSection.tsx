import Image from "next/image";
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
            className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/75 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-transparent"
          />
          <div className="relative grid gap-4 p-4 sm:gap-6 sm:p-6 lg:grid-cols-2 lg:p-8">
            <div className="flex flex-col justify-center p-3 sm:p-5 lg:p-6">
              <h2
                id="store-location-heading"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Contact our Hili store
              </h2>
              <div className="mt-6 grid gap-4 text-sm sm:gap-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center">
                    <ContactIcon kind="address" />
                  </span>
                  <div>
                    <span className="block font-bold text-foreground">Address</span>
                    <span className="mt-1 block leading-6 text-muted-foreground">
                      {siteConfig.address.fullAddress_en}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center">
                    <ContactIcon kind="hours" />
                  </span>
                  <div>
                    <span className="block font-bold text-foreground">Opening hours</span>
                    <span className="mt-1 block leading-6 text-muted-foreground">
                      {siteConfig.hours.display}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center">
                    <ContactIcon kind="phone" />
                  </span>
                  <div>
                    <span className="block font-bold text-foreground">Call or WhatsApp</span>
                    <a
                      href={`tel:${siteConfig.phoneIntl}`}
                      className="mt-1 inline-flex min-h-6 items-center font-semibold text-primary hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
