import { Phone, Truck } from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";

export function TopBanner() {
  return (
    <div className="hidden w-full bg-secondary py-2 text-xs text-secondary-foreground md:block">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4">
        {/* Left: Message */}
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Truck className="w-3.5 h-3.5 text-sky-300 shrink-0 hidden sm:inline" />
          <span className="hidden truncate text-xs font-medium sm:block">
            Fast delivery in Hili &amp; Hakimpur • Cash on delivery nationwide
          </span>
          <span className="truncate text-[10px] font-medium sm:hidden">
            Cash on delivery nationwide
          </span>
        </div>

        {/* Right: Phone & Language */}
        <div className="flex items-center gap-3 shrink-0 text-xs">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold"
          >
            <Phone className="w-3 h-3 text-sky-300" />
            <span>{siteConfig.phone}</span>
          </a>
          <span className="hidden opacity-30 sm:inline">|</span>
          <div className="hidden items-center gap-1.5 font-medium sm:flex">
            <span className="text-white font-bold">EN</span>
            <span className="opacity-40">|</span>
            <span className="opacity-60">বাংলা</span>
          </div>
        </div>
      </div>
    </div>
  );
}
