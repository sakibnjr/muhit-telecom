"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  ShoppingBag,
  BadgePercent,
  Sparkles,
  MapPin,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/_data/siteConfig";
import {
  CatalogNavigation,
  type NavigationGroup,
} from "@/_components/layout/CatalogNavigation";

export function MobileNav({ groups }: { groups: NavigationGroup[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogId = useId();
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };

    // Native modal behavior contains focus and makes the page behind it inert.
    dialog.showModal();
    document.body.style.overflow = "hidden";
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const links = [
    { label: "Home", href: "/", icon: ShoppingBag },
    { label: "Shop All Gadgets", href: "/shop", icon: ShoppingBag },
    { label: "Hot Deals", href: "/shop?filter=deals", icon: BadgePercent },
    { label: "New Arrivals", href: "/#new-arrivals", icon: Sparkles },
    { label: "Track Order", href: "/track-order", icon: ShieldCheck },
    { label: "About Us", href: "/about", icon: HelpCircle },
    { label: "Warranty & Returns", href: "/warranty-policy", icon: ShieldCheck },
    { label: "Contact & Location", href: "/contact", icon: MapPin },
  ];

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dialogId : undefined}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-lg p-2 text-secondary-foreground hover:bg-white/10 hover:text-white"
        aria-label="Open Mobile Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen &&
        createPortal(
          <dialog
            ref={dialogRef}
            id={dialogId}
            aria-labelledby={titleId}
            aria-modal="true"
            onCancel={(event) => {
              event.preventDefault();
              setIsOpen(false);
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
            className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-black/60 p-0 text-foreground backdrop-blur-xs backdrop:bg-transparent"
          >
            <div className="relative ml-auto w-4/5 max-w-xs bg-card h-full shadow-2xl flex flex-col overflow-y-auto [overflow-wrap:anywhere]">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 id={titleId} className="font-bold text-foreground text-sm">
                  Muhit Telecom Menu
                </h2>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg"
                  aria-label="Close Mobile Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="p-4 flex flex-col gap-1"
              >
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
                <CatalogNavigation
                  groups={groups}
                  mobile
                  onNavigate={() => setIsOpen(false)}
                />
              </nav>

              <div className="mt-auto p-4 border-t border-border bg-muted/40 space-y-3">
                <div className="text-xs text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Need Urgent Support?
                  </p>
                  <p>{siteConfig.address.market}, Hili</p>
                </div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-lg shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Hotline: {siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </dialog>,
          document.body,
        )}
    </div>
  );
}
