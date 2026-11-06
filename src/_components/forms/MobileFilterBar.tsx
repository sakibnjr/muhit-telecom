"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Flame, SlidersHorizontal } from "lucide-react";
import { MobileFilterDrawer } from "@/_components/forms/MobileFilterDrawer";

interface MobileFilterBarProps {
  brands: string[];
  resultCount: number;
  basePath?: string;
}

export function MobileFilterBar({
  brands,
  resultCount,
  basePath = "/shop",
}: MobileFilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const updateQuery = (updater: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    updater(params);
    params.delete("page");
    const query = params.toString();
    router.replace(query ? `${basePath}?${query}` : basePath, { scroll: false });
  };

  const toggleParam = (key: string, value: string) => {
    updateQuery((params) => {
      const current = params.getAll(key);
      const next = current.includes(value)
        ? current.filter((i) => i !== value)
        : [...current, value];
      params.delete(key);
      next.forEach((item) => params.append(key, item));
    });
  };

  const setSort = (value: string) => {
    updateQuery((params) => {
      if (!value || value === "default") params.delete("sort");
      else params.set("sort", value);
    });
  };

  const clearAllFilters = () => {
    const q = searchParams.get("q");
    router.replace(q ? `${basePath}?q=${encodeURIComponent(q)}` : basePath, {
      scroll: false,
    });
  };

  const isDealsActive = searchParams.getAll("filter").includes("deals");
  const isInStockActive = searchParams.getAll("availability").includes("in-stock");
  const selectedCount = [
    "category",
    "brand",
    "price",
    "availability",
    "filter",
  ].reduce((c, k) => c + searchParams.getAll(k).length, 0);

  return (
    <div className="mb-4 lg:hidden">
      {/* Top Filter Trigger Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar [scrollbar-width:none]">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl border px-3 text-xs font-semibold shadow-xs transition-colors ${
            selectedCount > 0
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-card text-foreground hover:bg-muted"
          }`}
        >
          <SlidersHorizontal className="size-3.5" />
          <span>Filters</span>
          {selectedCount > 0 && (
            <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {selectedCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => toggleParam("filter", "deals")}
          className={`inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-xl border px-3 text-xs font-semibold shadow-xs transition-colors ${
            isDealsActive
              ? "border-orange-500 bg-orange-500/10 text-orange-600 font-bold"
              : "border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          <Flame className="size-3.5 text-orange-500" />
          <span>Hot Deals</span>
        </button>

        <button
          type="button"
          onClick={() => toggleParam("availability", "in-stock")}
          className={`inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-xl border px-3 text-xs font-semibold shadow-xs transition-colors ${
            isInStockActive
              ? "border-emerald-600 bg-emerald-600/10 text-emerald-700 font-bold"
              : "border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          <span>In Stock</span>
        </button>

        <div className="ml-auto shrink-0">
          <select
            value={searchParams.get("sort") || "default"}
            onChange={(e) => setSort(e.target.value)}
            className="min-h-10 rounded-xl border border-border bg-card px-2 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25"
          >
            <option value="default">Sort: Default</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <MobileFilterDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        brands={brands}
        resultCount={resultCount}
        selectedCount={selectedCount}
        selectedCategories={searchParams.getAll("category")}
        selectedBrands={searchParams.getAll("brand")}
        selectedPrices={searchParams.getAll("price")}
        onToggleParam={toggleParam}
        onClearAll={clearAllFilters}
      />
    </div>
  );
}
