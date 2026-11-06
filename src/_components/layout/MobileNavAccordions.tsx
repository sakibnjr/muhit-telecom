"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, LayoutGrid, Wrench } from "lucide-react";
import { CatalogIcon } from "@/_components/layout/CatalogIcon";
import type { NavigationGroup } from "@/_components/layout/CatalogNavigation";

interface MobileNavAccordionsProps {
  groups: NavigationGroup[];
  onNavigate: () => void;
}

export function MobileNavAccordions({
  groups,
  onNavigate,
}: MobileNavAccordionsProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (title: string) => {
    setOpenGroup((prev) => (prev === title ? null : title));
  };

  return (
    <div className="space-y-2">
      {groups.map((group) => {
        const isCategories = group.title.toLowerCase().includes("cat");
        const isOpen = openGroup === group.title;
        const Icon = isCategories ? LayoutGrid : Wrench;
        const label = isCategories
          ? "Browse Categories"
          : "Repair & Technical Services";
        const allHref = isCategories ? "/categories" : "/services";
        const allLabel = isCategories
          ? "View all 12 categories →"
          : "View all 8 services →";

        return (
          <div
            key={group.title}
            className="overflow-hidden rounded-xl border border-border/70 bg-card shadow-xs"
          >
            <button
              type="button"
              onClick={() => toggleGroup(group.title)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-3.5 py-3 text-left transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-border/80 bg-muted/50 px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                  {group.links.length}
                </span>
                <ChevronDown
                  className={`size-4 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-border/70 bg-muted/20 p-2.5 animate-in fade-in-50 duration-150">
                <div className="grid grid-cols-2 gap-1.5">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onNavigate}
                      className="group/item flex items-center gap-2 rounded-lg border border-border/50 bg-card p-2 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    >
                      <CatalogIcon name={link.icon} label={link.label} />
                      <span className="truncate">{link.label}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href={allHref}
                  onClick={onNavigate}
                  className="mt-2.5 block rounded-lg border border-primary/20 bg-primary/10 py-2 text-center text-xs font-semibold text-primary transition-colors hover:bg-primary/15"
                >
                  {allLabel}
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

