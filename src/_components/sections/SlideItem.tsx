import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Phone, MessageSquare, Star } from "lucide-react";

export interface SlideData {
  id: string;
  bgImage: string;
  imageAlt: string;
  title: string;
  desc: string;
  primaryBtn: { label: string; href: string };
  secondaryBtn?: {
    label: string;
    href: string;
    iconType: "wrench" | "phone" | "whatsapp" | "arrow";
  };
  badgeText?: string;
  isStarRating?: boolean;
}

export function SlideItem({
  slide,
  priority = false,
}: {
  slide: SlideData;
  priority?: boolean;
}) {
  const isWhatsApp = slide.secondaryBtn?.iconType === "whatsapp";
  const Heading = priority ? "h1" : "h2";

  return (
    <div className="relative isolate h-full overflow-hidden bg-light-section lg:block">
      <div className="absolute inset-0 z-0">
        <Image
          src={slide.bgImage}
          alt={slide.imageAlt}
          fill
          preload={priority}
          sizes="(max-width: 1023px) 100vw, 1440px"
          className="object-cover object-[64%_center] sm:object-[70%_center] lg:object-right"
        />
      </div>
      <div
        aria-hidden="true"
        className="hero-mobile-wash pointer-events-none absolute inset-0 z-[1] lg:hidden"
      />
      <div
        aria-hidden="true"
        className="hero-content-wash absolute inset-0 hidden lg:block"
      />

      <div className="absolute inset-y-0 left-0 z-10 flex w-[48%] flex-col items-start justify-center px-4 sm:w-[50%] sm:px-8 md:w-[52%] lg:left-0 lg:w-[52%] lg:px-14 lg:py-14 xl:px-16">
        <Heading className="max-w-full line-clamp-2 text-[0.98rem] font-bold leading-[1.12] tracking-[-0.04em] text-foreground sm:max-w-xl sm:text-2xl md:text-3xl lg:line-clamp-none lg:text-4xl xl:text-5xl">
          {slide.title}
        </Heading>
        <p className="mt-1 max-w-full line-clamp-1 text-xs leading-[1.35] text-muted-foreground sm:mt-2 sm:max-w-md sm:text-sm sm:leading-5 lg:mt-5 lg:line-clamp-none lg:text-base lg:leading-7">
          {slide.desc}
        </p>
        <div className="mt-3 hidden w-full flex-col items-stretch gap-2 sm:mt-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 lg:mt-6 lg:flex">
          <Link
            href={slide.primaryBtn.href}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-[0.8125rem] font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md sm:min-h-12 sm:w-auto sm:px-5 sm:py-3 sm:text-sm"
          >
            {slide.primaryBtn.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          {slide.secondaryBtn && (
            <Link
              href={slide.secondaryBtn.href}
              target={isWhatsApp ? "_blank" : undefined}
              rel={isWhatsApp ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-white/90 px-3 py-2.5 text-[0.8125rem] font-semibold text-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-white sm:min-h-12 sm:w-auto sm:px-4 sm:py-3 sm:text-sm"
            >
              {slide.secondaryBtn.iconType === "wrench" && (
                <Wrench className="size-4 text-primary" aria-hidden="true" />
              )}
              {slide.secondaryBtn.iconType === "phone" && (
                <Phone className="size-4 text-primary" aria-hidden="true" />
              )}
              {isWhatsApp && (
                <MessageSquare
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
              )}
              {slide.secondaryBtn.iconType === "arrow" && (
                <ArrowRight
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
              )}
              {slide.secondaryBtn.label}
            </Link>
          )}
        </div>
        {slide.badgeText && (
          <p className="mt-5 hidden items-center gap-2 text-sm leading-relaxed text-muted-foreground lg:flex">
            {slide.isStarRating && (
              <Star
                className="size-4 shrink-0 fill-amber-400 text-amber-500"
                aria-hidden="true"
              />
            )}
            {slide.badgeText}
          </p>
        )}
      </div>
    </div>
  );
}
