"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  Phone,
  MessageSquare,
  ShoppingBag,
  Flame,
  Sparkles,
  MapPin,
  ShieldCheck,
  Store,
  Home,
  PackageSearch,
} from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";
import type { NavigationGroup } from "@/_components/layout/CatalogNavigation";
import { MobileNavAccordions } from "@/_components/layout/MobileNavAccordions";

const mainLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Shop All Gadgets", href: "/shop", icon: ShoppingBag },
  {
    label: "Hot Deals",
    href: "/shop?filter=deals",
    icon: Flame,
    badge: "🔥 Hot",
    badgeClass: "bg-rose-500/10 text-rose-600 border border-rose-500/20",
  },
  {
    label: "New Arrivals",
    href: "/#new-arrivals",
    icon: Sparkles,
    badge: "New",
    badgeClass: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
  },
];

const supportLinks = [
  { label: "Track Order", href: "/track-order", icon: PackageSearch },
  { label: "Warranty & Returns", href: "/warranty-policy", icon: ShieldCheck },
  { label: "About Muhit Telecom", href: "/about", icon: Store },
  { label: "Contact & Location", href: "/contact", icon: MapPin },
];

interface MobileNavDrawerProps {
  groups: NavigationGroup[];
  onClose: () => void;
}

export function MobileNavDrawer({ groups, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname() ?? "/";

  return (
    <div className="relative mr-auto flex h-full w-[86vw] max-w-sm flex-col bg-card shadow-2xl animate-in slide-in-from-left duration-250 ease-out">
      {/* Header with official logo and close button */}
      <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 bg-card shrink-0">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Muhit Telecom"
            width={130}
            height={40}
            className="h-7 w-auto"
            priority
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close Mobile Menu"
        >
          <X className="size-4.5" />
        </button>
      </div>

      {/* Scrollable Nav Content */}
      <nav
        aria-label="Mobile navigation"
        className="flex-1 overflow-y-auto px-3.5 py-4 space-y-4"
      >
        <div className="space-y-1">
          <p className="px-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80">
            Store Menu
          </p>
          {mainLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-4.5 text-primary" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="space-y-1.5 pt-1">
          <p className="px-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80">
            Explore Catalog
          </p>
          <MobileNavAccordions groups={groups} onNavigate={onClose} />
        </div>

        <div className="space-y-1 pt-1">
          <p className="px-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80">
            Customer Care & Info
          </p>
          {supportLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/90 hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="size-4 text-primary" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom Support & Direct Action Buttons */}
      <div className="mt-auto border-t border-border/80 bg-muted/40 p-4 space-y-2.5 shrink-0">
        <div className="text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">Need Urgent Support?</p>
          <p className="text-[11px]">{siteConfig.address.market}, Hili</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
          >
            <Phone className="size-3.5" />
            <span>Call Hotline</span>
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700"
          >
            <MessageSquare className="size-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

