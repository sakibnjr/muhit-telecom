import { Suspense } from "react";
import { HeroSlider } from "@/_components/sections/HeroSlider";

export function HeroSection() {
  return (
    <section className="w-full pb-2 pt-2 sm:pb-4 sm:pt-6">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <Suspense
          fallback={
            <div className="h-[430px] w-full animate-pulse rounded-xl bg-light-section sm:h-[540px] lg:h-[560px]" />
          }
        >
          <HeroSlider />
        </Suspense>
      </div>
    </section>
  );
}
