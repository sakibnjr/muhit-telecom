"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { CatalogIcon } from "@/_components/layout/CatalogIcon";

export type NavigationGroup = {
  title: string;
  href: string;
  links: { label: string; href: string; icon?: string }[];
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
  const pathname = usePathname() ?? "";
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter(groupTitle: string) {
    if (mobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveGroup(groupTitle);
  }

  function handleMouseLeave() {
    if (mobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveGroup(null), 140);
  }

  function closeMenus() {
    setActiveGroup(null);
    root.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((m) => { m.open = false; });
  }

  function handleNavigate() {
    closeMenus();
    onNavigate?.();
  }

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) closeMenus();
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenus();
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div ref={root} className={mobile ? "space-y-2" : "contents"}>
      {groups.map((group) => {
        const isGroupActive = pathname.startsWith(group.href);
        const isOpen = !mobile && activeGroup === group.title;

        return (
          <div
            key={group.href}
            className={mobile ? "min-w-0" : "flex items-center gap-1"}
            onMouseEnter={() => handleMouseEnter(group.title)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={group.href}
              onClick={handleNavigate}
              className={`block rounded-lg px-3 transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                mobile
                  ? "py-2.5 text-sm font-semibold text-foreground/85 hover:bg-muted hover:text-primary"
                  : dark
                    ? isGroupActive
                      ? "py-1.5 text-xs font-semibold bg-primary text-primary-foreground shadow-xs"
                      : "py-1.5 text-xs font-medium text-secondary-foreground/90 hover:bg-white/10 hover:text-white"
                    : "py-2.5 text-sm font-semibold text-foreground/85 hover:bg-muted hover:text-primary"
              }`}
            >
              All {group.title}
            </Link>

            <details
              name={mobile ? undefined : "desktop-catalog"}
              open={isOpen ? true : undefined}
              className={mobile ? "group rounded-lg border border-border" : "group"}
            >
              <summary
                onClick={(e) => {
                  if (!mobile) {
                    e.preventDefault();
                    setActiveGroup((prev) => (prev === group.title ? null : group.title));
                  }
                }}
                className={`flex cursor-pointer list-none items-center justify-between gap-1.5 rounded-lg px-3 transition-colors focus-visible:outline-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden ${
                  mobile
                    ? "py-2.5 text-sm font-medium text-foreground/85 hover:bg-muted hover:text-primary"
                    : dark
                      ? isOpen
                        ? "py-1.5 text-xs font-semibold text-white bg-white/15"
                        : "py-1.5 text-xs font-medium text-secondary-foreground/90 hover:bg-white/10 hover:text-white"
                      : "py-2.5 text-sm font-medium text-foreground/85 hover:bg-muted hover:text-primary"
                }`}
              >
                <span>Browse {group.title}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`size-3.5 shrink-0 transition-transform ${isOpen ? "rotate-180" : "group-open:rotate-180"}`}
                />
              </summary>

              <div
                onMouseEnter={() => handleMouseEnter(group.title)}
                onMouseLeave={handleMouseLeave}
                className={
                  mobile
                    ? "border-t border-border p-2"
                    : "absolute inset-x-0 top-full rounded-b-2xl border border-border bg-card p-5 shadow-2xl before:absolute before:-top-3 before:inset-x-0 before:h-3 before:content-[''] z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                }
              >
                <div className="mb-3 px-2 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {group.title === "Categories" ? "Find your next gadget" : "Expert care for your devices"}
                  </p>
                  <span className="text-[11px] font-medium text-muted-foreground/75">
                    {group.links.length} {group.title.toLowerCase()}
                  </span>
                </div>
                <ul
                  className={
                    mobile
                      ? "space-y-1"
                      : "grid max-h-[60dvh] grid-cols-2 gap-1.5 overflow-y-auto lg:grid-cols-3 xl:grid-cols-4"
                  }
                >
                  {group.links.map((link) => (
                    <li key={link.href} className="min-w-0">
                      <Link
                        href={link.href}
                        onClick={handleNavigate}
                        className="group/item flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-semibold text-foreground/90 transition-all duration-150 hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary [overflow-wrap:anywhere]"
                      >
                        <CatalogIcon name={link.icon} label={link.label} />
                        <span className="truncate">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        );
      })}
    </div>
  );
}
