import Image from "next/image";
import { siteConfig } from "@/_data/siteConfig";

function getProductTitle(src: string) {
  return src
    .split("/")
    .at(-1)
    ?.replace(/\.avif$/i, "")
    .replaceAll("-", " ") ?? "Product model";
}

export function CategoryImageCatalogue({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  if (!images.length) return null;

  return (
    <section aria-labelledby="category-image-catalogue" className="mt-12">
      <div className="mb-5 max-w-2xl">
        <h2 id="category-image-catalogue" className="text-2xl font-bold tracking-tight sm:text-3xl">
          More {name} models
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Browse product images and ask us to confirm the exact model, current price, availability, and warranty before ordering.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {images.map((src) => {
          const title = getProductTitle(src);
          const message = `Hello ${siteConfig.name}, is ${title} available? Please share the current price and warranty details.`;
          const enquiryUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;

          return (
            <article key={src} className="surface-panel flex min-w-0 flex-col overflow-hidden p-3 shadow-sm sm:p-4">
              <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-white">
                <Image
                  src={src}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-contain p-3 sm:p-4"
                />
              </div>
              <h3 className="min-h-10 text-sm font-semibold leading-5 sm:min-h-12 sm:text-base">{title}</h3>
              <a
                href={enquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-11 items-center pt-2 text-xs font-semibold text-primary hover:underline sm:text-sm"
              >
                Ask about this model →
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
