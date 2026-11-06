"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

const routeLabels: Record<string, string> = {
  about: "About Us",
  categories: "Categories",
  cart: "Cart",
  checkout: "Checkout",
  contact: "Contact & Store Location",
  privacy: "Privacy Policy",
  services: "Services",
  shop: "Shop",
  terms: "Terms & Conditions",
  "track-order": "Track Order",
  "warranty-policy": "Warranty & Returns",
};

const categoryLabels: Record<string, string> = {
  "mobile-phones": "Mobile Phones",
  "adapters-chargers": "Adapters & Chargers",
  headsets: "Headsets",
  lifestyle: "Lifestyle",
  neckbands: "Neckbands",
  "phone-accessories": "Phone Accessories",
  "power-banks": "Power Banks",
  "rechargeable-fans": "Rechargeable Fans",
  "smart-watches": "Smart Watches",
  speakers: "Speakers",
  tws: "TWS",
  "wired-earphones": "Wired Earphones",
};

const serviceLabels: Record<string, string> = {
  "battery-replacement": "Battery Replacement (Original)",
  "screen-repair-replacement": "Screen Repair & Replacement",
  "mobile-country-unlock": "Mobile Country Unlock",
  "mobile-repair-flash-unlock": "Mobile Repair Flash & Unlock",
  "pc-motherboard-repair": "PC & Mobile Motherboard Repair",
  "mobile-display-replacements": "Mobile Display Replacements",
  "mobile-multimedia-downloading": "Mobile Multimedia Downloading",
  "computer-mobile-accessories-sale": "Computer & Mobile Accessories Sale",
};

function humanizeSegment(segment: string) {
  let decodedSegment = segment;
  try {
    decodedSegment = decodeURIComponent(segment);
  } catch {
    // Keep the original segment readable for malformed URLs and the 404 page.
  }

  let label = decodedSegment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  label = label
    .replace(/\bTws\b/g, "TWS")
    .replace(/\bPc\b/g, "PC")
    .replace(/\bUsb\b/g, "USB")
    .replace(/\bTp\b/g, "TP")
    .replace(/\bType C\b/g, "Type-C")
    .replace(/(\d+)Gb\b/g, "$1GB")
    .replace(/(\d+)Mah\b/g, "$1mAh")
    .replace(/\bAc(\d+)\b/g, "AC$1");

  return label;
}

function getSegmentLabel(segment: string, parent?: string) {
  if (parent === "categories") return categoryLabels[segment] ?? humanizeSegment(segment);
  if (parent === "services") return serviceLabels[segment] ?? humanizeSegment(segment);
  if (segment === "products") return "Shop";
  return routeLabels[segment] ?? humanizeSegment(segment);
}

function getCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }];

  if (segments[0] === "products") {
    crumbs.push({ label: "Shop", href: "/shop" });
    if (segments[1]) crumbs.push({ label: humanizeSegment(segments[1]) });
    return crumbs;
  }

  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const isCurrent = index === segments.length - 1;
    crumbs.push({
      label: getSegmentLabel(segment, segments[index - 1]),
      href: isCurrent ? undefined : href,
    });
  });

  return crumbs;
}

export function RouteBreadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const crumbs = getCrumbs(pathname);

  return (
    <nav
      aria-label="Breadcrumb"
      className="route-breadcrumbs mx-auto max-w-[1440px] px-4 pb-4 pt-4 text-sm sm:px-6 sm:pb-5 sm:pt-5 lg:px-8 xl:px-10"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
        {crumbs.map((crumb, index) => {
          const isCurrent = index === crumbs.length - 1;

          return (
            <li key={`${crumb.label}-${index}`} className="flex min-w-0 items-center gap-2">
              {index > 0 && (
                <ChevronRight className="size-3.5 shrink-0 text-dim" aria-hidden="true" />
              )}
              {isCurrent ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href ?? "/"} className="transition-colors hover:text-primary">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
