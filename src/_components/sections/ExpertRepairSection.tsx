import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  BatteryCharging,
  Smartphone,
  Unlock,
  Cpu,
  Laptop,
  Download,
} from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";

export function ExpertRepairSection() {
  const repairBadges = [
    {
      slug: "battery-replacement",
      title: "Battery Replacement",
      icon: BatteryCharging,
      desc: "Original Grade-A batteries",
    },
    {
      slug: "screen-repair-replacement",
      title: "Screen / Display Repair",
      icon: Smartphone,
      desc: "OLED & AMOLED panels",
    },
    {
      slug: "mobile-country-unlock",
      title: "Country & Network Unlock",
      icon: Unlock,
      desc: "Official permanent bypass",
    },
    {
      slug: "mobile-repair-flash-unlock",
      title: "Flash & Software Fixes",
      icon: Laptop,
      desc: "Bootloop & FRP recovery",
    },
    {
      slug: "pc-motherboard-repair",
      title: "Motherboard Diagnostics",
      icon: Cpu,
      desc: "Micro-soldering & IC repair",
    },
    {
      slug: "mobile-multimedia-downloading",
      title: "Clean Multimedia Downloads",
      icon: Download,
      desc: "Music, games & apps",
    },
  ];

  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative isolate overflow-hidden rounded-xl shadow-md">
          <Image
            src="/images/services/repair-service-background.avif"
            alt="Technician carefully repairing a smartphone at a bright electronics workbench"
            fill
            sizes="(max-width: 1023px) 100vw, 1440px"
            className="object-cover object-left"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/80 lg:bg-gradient-to-r lg:from-transparent lg:from-38% lg:via-white/85 lg:via-48% lg:to-white lg:to-65%"
          />
          <div className="relative min-h-[640px] sm:min-h-[660px] lg:min-h-[580px]">
            <div className="ml-auto flex min-h-[640px] items-center p-2 sm:min-h-[660px] sm:p-6 lg:min-h-[580px] lg:w-[53%] lg:p-8">
              <div className="w-full p-2 sm:p-6 lg:p-8">
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="truncate text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                      Expert mobile &amp; computer repair
                    </h2>
                    <p className="mt-3 text-base leading-7 text-muted-foreground [text-align:justify] [hyphens:auto]">
                      From cracked screens and weak batteries to complex
                      motherboard repairs and network unlocking, talk to our
                      team in Hili about the right repair for your device.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:gap-x-6 sm:gap-y-0">
                    {repairBadges.map((badge) => {
                      const Icon = badge.icon;
                      return (
                        <Link
                          key={badge.slug}
                          href={`/services/${badge.slug}`}
                          className="group relative flex flex-col items-start gap-2.5 rounded-2xl border border-white/80 bg-white/75 p-3 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:flex-row sm:items-center sm:gap-3 sm:rounded-none sm:border-0 sm:border-b sm:border-slate-300/60 sm:bg-transparent sm:p-0 sm:py-3 sm:shadow-none sm:backdrop-blur-none"
                        >
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-9 sm:rounded-none sm:bg-transparent">
                            <Icon className="size-5" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-[13px] font-semibold leading-snug text-foreground sm:text-sm">
                              {badge.title}
                            </h3>
                            <p className="mt-0.5 text-xs leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
                              {badge.desc}
                            </p>
                          </div>
                          <ArrowRight className="absolute right-3 top-3 size-4 shrink-0 text-muted-foreground/70 transition-all group-hover:translate-x-0.5 group-hover:text-primary sm:static" aria-hidden="true" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                    <Link
                      href="/services"
                      className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
                    >
                      <span>Book a repair</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-white/90 px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-white"
                    >
                      <Phone className="size-4 text-primary" aria-hidden="true" />
                      <span>{siteConfig.phone}</span>
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
