"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Home } from "lucide-react";
import {
  CatalogNavigation,
  type NavigationGroup,
} from "@/_components/layout/CatalogNavigation";

export function NavbarNav({ groups }: { groups: NavigationGroup[] }) {
  const pathname = usePathname() ?? "/";

  const isHomeActive = pathname === "/";
  const isShopActive = pathname === "/shop" || pathname.startsWith("/products/");
  const isAboutActive = pathname === "/about";
  const isWarrantyActive = pathname === "/warranty-policy";
  const isContactActive = pathname === "/contact";

  return (
    <nav
      aria-label="Main navigation"
      className="relative hidden md:flex flex-wrap items-center gap-1.5 py-2.5 text-xs font-medium xl:justify-between"
    >
      <Link
        href="/"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
          isHomeActive
            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
            : "text-secondary-foreground/90 hover:bg-white/10 hover:text-white font-medium"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      <Link
        href="/shop"
        className={`rounded-lg px-3 py-1.5 transition-colors shrink-0 ${
          isShopActive
            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
            : "text-secondary-foreground/90 hover:bg-white/10 hover:text-white font-medium"
        }`}
      >
        Shop
      </Link>

      <Link
        href="/shop?filter=deals"
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-semibold text-amber-100 transition-colors hover:bg-amber-300/10 hover:text-amber-50 shrink-0"
      >
        <Flame
          className="size-4 fill-orange-500 text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.65)] motion-safe:animate-bounce"
          aria-hidden="true"
        />
        <span>Hot Deals</span>
      </Link>

      <Link
        href="/#new-arrivals"
        className="rounded-lg px-3 py-1.5 text-secondary-foreground/90 transition-colors hover:bg-white/10 hover:text-white font-medium shrink-0"
      >
        New Arrivals
      </Link>

      <CatalogNavigation groups={groups} dark />

      <Link
        href="/about"
        className={`rounded-lg px-3 py-1.5 transition-colors shrink-0 ${
          isAboutActive
            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
            : "text-secondary-foreground/90 hover:bg-white/10 hover:text-white font-medium"
        }`}
      >
        About Us
      </Link>

      <Link
        href="/warranty-policy"
        className={`rounded-lg px-3 py-1.5 transition-colors shrink-0 ${
          isWarrantyActive
            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
            : "text-secondary-foreground/90 hover:bg-white/10 hover:text-white font-medium"
        }`}
      >
        Warranty
      </Link>

      <Link
        href="/contact"
        className={`rounded-lg px-3 py-1.5 transition-colors shrink-0 ${
          isContactActive
            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
            : "text-secondary-foreground/90 hover:bg-white/10 hover:text-white font-medium"
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}

