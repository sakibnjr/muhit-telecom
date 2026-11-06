"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import {
  A11y,
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideItem } from "@/_components/sections/SlideItem";
import { heroSlides as slides } from "@/_data/heroSlides";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const subscribeMotion = (callback: () => void) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
const emptySubscribe = () => () => {};

export function HeroSlider() {
  const instance = useRef<SwiperInstance | null>(null);
  const previousButton = useRef<HTMLButtonElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);
  const paginationElement = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
  useEffect(() => {
    const swiper = instance.current;
    if (!mounted || !swiper) return;
    // Bind after sibling controls have committed; selector-based init can race hydration.
    const { navigation, pagination } = swiper.params;
    if (typeof navigation === "object") {
      swiper.navigation.destroy();
      navigation.prevEl = previousButton.current;
      navigation.nextEl = nextButton.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
    if (typeof pagination === "object") {
      swiper.pagination.destroy();
      pagination.el = paginationElement.current;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }, [mounted]);

  return (
    <div
      role="region"
      aria-label="Featured collections and services"
      aria-roledescription="carousel"
      onFocusCapture={() => instance.current?.autoplay.stop()}
      className="hero-slider relative h-[clamp(11.25rem,48vw,14rem)] w-full overflow-hidden rounded-xl border border-border/80 bg-light-section shadow-sm sm:h-[300px] md:h-[360px] lg:h-[560px]"
    >
      {!mounted ? (
        <SlideItem slide={slides[0]} priority />
      ) : (
        <Swiper
          modules={[A11y, Autoplay, Pagination, Navigation, Keyboard]}
          onSwiper={(swiper) => {
            instance.current = swiper;
          }}
          autoplay={
            reducedMotion
              ? false
              : {
                  delay: 6500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }
          }
          speed={reducedMotion ? 0 : 500}
          loop
          keyboard={{ enabled: true, onlyInViewport: true }}
          navigation={{ prevEl: ".hero-btn-prev", nextEl: ".hero-btn-next" }}
          pagination={{
            clickable: true,
            el: ".hero-pagination",
            bulletClass: "hero-bullet",
            bulletActiveClass: "hero-bullet-active",
          }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <SlideItem slide={slide} priority={index === 0} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <button
        type="button"
        ref={previousButton}
        className="hero-arrow hero-btn-prev absolute left-3 top-[72px] z-30 hidden size-11 items-center justify-center rounded-full border border-white/70 bg-white/90 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-white lg:left-8 lg:top-1/2 lg:flex lg:size-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        ref={nextButton}
        className="hero-arrow hero-btn-next absolute right-3 top-[72px] z-30 hidden size-11 items-center justify-center rounded-full border border-white/70 bg-white/90 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-white lg:right-8 lg:top-1/2 lg:flex lg:size-12"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5" />
      </button>
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center sm:bottom-3 lg:bottom-5">
        <div
          ref={paginationElement}
          className="hero-pagination flex min-w-0 items-center justify-center"
        />
      </div>
    </div>
  );
}
