import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const promotions = [
  {
    title: "Good tech. Great company.",
    description:
      "Audio, charging and everyday essentials, picked for your routine.",
    image: "/images/promotions/product-audio-cutout.avif",
    href: "/shop",
    action: "Find your next favourite",
    tint: "from-sky-50 via-white to-cyan-100/80",
  },
  {
    title: "Find your next phone.",
    description:
      "Explore reliable smartphones with a local team ready to help you choose.",
    image: "/images/promotions/product-smartphone-cutout.avif",
    href: "/categories/mobile-phones",
    action: "Explore mobile phones",
    tint: "from-violet-50 via-white to-blue-100/80",
  },
];

export function PromoBannerSection() {
  return (
    <section
      className="py-5 sm:py-8"
      aria-label="Explore gadgets and repair services"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {promotions.map((promo) => (
            <Link
              key={promo.href}
              href={promo.href}
              className={`group relative isolate flex min-h-[260px] items-center overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br ${promo.tint} shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg sm:min-h-[300px]`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 z-10 w-[45%] sm:w-[64%]"
              >
                <Image
                  src={promo.image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 64vw, (max-width: 1023px) 46vw, 420px"
                  className="object-contain p-0 transition-transform duration-500 group-hover:scale-105 sm:p-1"
                />
              </div>
              <div
                aria-hidden="true"
                className="promo-copy-wash absolute inset-y-0 left-0 z-0 w-[62%] sm:w-[72%]"
              />
              <div className="relative z-20 flex w-[58%] flex-col items-start p-4 sm:w-[60%] sm:p-8">
                <h2 className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                  {promo.title}
                </h2>
                <p className="mb-4 mt-2 max-w-sm text-xs leading-5 text-muted-foreground sm:mb-6 sm:mt-3 sm:text-base sm:leading-7">
                  {promo.description}
                </p>
                <span className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">
                  {promo.action}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
