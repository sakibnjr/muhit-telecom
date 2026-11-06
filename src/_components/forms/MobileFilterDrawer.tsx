"use client";

import { useEffect, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { categories } from "@/_data/categories";
import { priceFilterOptions } from "@/_data/filterConfig";
import { FilterSection } from "@/_components/forms/FilterSection";
import { FilterCheckboxList } from "@/_components/forms/FilterCheckboxList";
import { useHistoryClose } from "@/lib/useHistoryClose";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  brands: string[];
  resultCount: number;
  selectedCount: number;
  selectedCategories: string[];
  selectedBrands: string[];
  selectedPrices: string[];
  onToggleParam: (key: string, value: string) => void;
  onClearAll: () => void;
}

export function MobileFilterDrawer({
  isOpen,
  onClose,
  brands,
  resultCount,
  selectedCount,
  selectedCategories,
  selectedBrands,
  selectedPrices,
  onToggleParam,
  onClearAll,
}: MobileFilterDrawerProps) {
  const [openSections, setOpenSections] = useState({
    categories: true,
    brand: true,
    price: true,
  });

  const toggleSection = (key: keyof typeof openSections) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const { goBack } = useHistoryClose(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const categoryOptions = categories.map((c) => ({
    value: c.slug,
    label: c.name,
  }));
  const brandOptions = brands.map((b) => ({ value: b, label: b }));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Filter products"
      className="fixed inset-0 z-[60] flex flex-col bg-card text-foreground animate-in fade-in duration-150"
    >
      {/* Drawer Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/80 bg-card px-4 py-3 pt-[calc(0.75rem+env(safe-area-inset-top))]">
        <div className="flex items-center gap-2 text-base font-bold text-foreground">
          <SlidersHorizontal className="size-4 text-primary" />
          <span>Filters</span>
          {selectedCount > 0 && (
            <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {selectedCount}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {selectedCount > 0 && (
            <button
              type="button"
              onClick={onClearAll}
              className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Clear all
            </button>
          )}
          <button
            type="button"
            onClick={goBack}
            aria-label="Close filters"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      {/* Drawer Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <FilterSection
          title="Categories"
          isOpen={openSections.categories}
          onToggle={() => toggleSection("categories")}
          activeCount={selectedCategories.length}
        >
          <FilterCheckboxList
            options={categoryOptions}
            selectedValues={selectedCategories}
            onToggle={(val) => onToggleParam("category", val)}
            maxHeight="max-h-56"
          />
        </FilterSection>

        <FilterSection
          title="Brand"
          isOpen={openSections.brand}
          onToggle={() => toggleSection("brand")}
          activeCount={selectedBrands.length}
        >
          <FilterCheckboxList
            options={brandOptions}
            selectedValues={selectedBrands}
            onToggle={(val) => onToggleParam("brand", val)}
            maxHeight="max-h-48"
          />
        </FilterSection>

        <FilterSection
          title="Price range"
          isOpen={openSections.price}
          onToggle={() => toggleSection("price")}
          activeCount={selectedPrices.length}
        >
          <FilterCheckboxList
            options={priceFilterOptions}
            selectedValues={selectedPrices}
            onToggle={(val) => onToggleParam("price", val)}
          />
        </FilterSection>
      </div>

      {/* Drawer Sticky Footer */}
      <div className="sticky bottom-0 border-t border-border/80 bg-card p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-lg">
        <button
          type="button"
          onClick={goBack}
          className="flex min-h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Show {resultCount} {resultCount === 1 ? "Product" : "Products"}
        </button>
      </div>
    </div>
  );
}
