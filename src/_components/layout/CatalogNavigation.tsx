"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type NavigationGroup = {
  title: string;
  href: string;
  links: { label: string; href: string }[];
};

export function CatalogNavigation({
  groups,
  mobile = false,
  dark = false,
  onNavigate,
}: {
  groups: NavigationGroup[];
  mobile?: boolean;
  dark?: boolean;
  onNavigate?: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);

  function closeMenus() {
    root.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((menu) => {
        menu.open = false;
      });
  }

  function handleNavigate() {
    closeMenus();
    onNavigate?.();
  }

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        closeMenus();
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const openMenu =
        root.current?.querySelector<HTMLDetailsElement>("details[open]");
      if (openMenu?.contains(document.activeElement))
        openMenu.querySelector("summary")?.focus();
      closeMenus();
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <div ref={root} className={mobile ? "space-y-2" : "contents"}>
      {groups.map((group) => (
        <div
          key={group.href}
          className={mobile ? "min-w-0" : "flex items-center gap-1"}
        >
          <Link
            href={group.href}
            onClick={handleNavigate}
            className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-primary ${dark && !mobile ? "text-secondary-foreground/90 hover:bg-white/10 hover:text-white" : "text-foreground/85 hover:bg-muted hover:text-primary"}`}
          >
            All {group.title}
          </Link>
          <details
            name={mobile ? undefined : "desktop-catalog"}
            className={
              mobile ? "group rounded-lg border border-border" : "group"
            }
          >
            <summary className={`flex cursor-pointer list-none items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden ${dark && !mobile ? "text-secondary-foreground/90 hover:bg-white/10 hover:text-white" : "text-foreground/85 hover:bg-muted hover:text-primary"}`}>
              <span>Browse {group.title}</span>
              <ChevronDown
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform group-open:rotate-180"
              />
            </summary>
            <div
              className={
                mobile
                  ? "border-t border-border p-2"
                  : "absolute inset-x-0 top-full rounded-b-2xl border border-border bg-card p-5 shadow-xl"
              }
            >
              <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title === "Categories"
                  ? "Find your next gadget"
                  : "Expert care for your devices"}
              </p>
              <ul
                className={
                  mobile
                    ? "space-y-1"
                    : "grid max-h-[60dvh] grid-cols-2 gap-1 overflow-y-auto lg:grid-cols-3 xl:grid-cols-4"
                }
              >
                {group.links.map((link) => (
                  <li key={link.href} className="min-w-0">
                    <Link
                      href={link.href}
                      onClick={handleNavigate}
                      className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-2 focus-visible:outline-primary [overflow-wrap:anywhere]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
