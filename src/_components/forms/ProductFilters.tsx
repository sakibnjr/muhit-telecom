'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { categories } from '@/_data/categories';
import { priceFilterOptions } from '@/_data/filterConfig';
import { FilterSection } from '@/_components/forms/FilterSection';
import { FilterCheckboxList } from '@/_components/forms/FilterCheckboxList';
import { Filter, X } from 'lucide-react';

interface ProductFiltersProps {
  brands: string[];
  resultCount: number;
  basePath?: string;
  showCategories?: boolean;
}

const optionClass =
  'flex min-h-9 w-full cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 text-sm text-foreground hover:bg-muted/70';

export function ProductFilters({ brands, resultCount, basePath = '/shop', showCategories = true }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    categories: true,
    brand: true,
    price: true,
    availability: true,
    sort: true,
  });

  const toggleSection = (key: string) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const updateQuery = (updater: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    updater(params);
    params.delete('page');
    const query = params.toString();
    router.replace(query ? `${basePath}?${query}` : basePath, { scroll: false });
  };

  const toggleParam = (key: string, value: string) => {
    updateQuery((params) => {
      const current = params.getAll(key);
      const next = current.includes(value) ? current.filter((i) => i !== value) : [...current, value];
      params.delete(key);
      next.forEach((item) => params.append(key, item));
    });
  };

  const setSort = (value: string) => {
    updateQuery((params) => {
      if (!value || value === 'default') params.delete('sort');
      else params.set('sort', value);
    });
  };

  const clearAllFilters = () => {
    const q = searchParams.get('q');
    router.replace(q ? `${basePath}?q=${encodeURIComponent(q)}` : basePath, { scroll: false });
  };

  const selectedCount = ['category', 'brand', 'price', 'availability', 'filter'].reduce(
    (c, k) => c + searchParams.getAll(k).length,
    0,
  );
  const hasActiveFilters = selectedCount > 0 || Boolean(searchParams.get('sort'));

  const categoryOptions = categories.map((c) => ({ value: c.slug, label: c.name }));
  const brandOptions = brands.map((b) => ({ value: b, label: b }));

  return (
    <div className="rounded-xl border border-border/80 bg-white shadow-sm backdrop-blur-xl lg:max-h-[calc(100vh-13rem)] lg:overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center justify-between border-b border-border/60 p-3 sm:p-4">
        <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
          <Filter className="size-4 text-primary" aria-hidden="true" />
          <span>Filters</span>
          {selectedCount > 0 && (
            <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {selectedCount}
            </span>
          )}
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAllFilters}
            className="inline-flex min-h-8 shrink-0 items-center gap-1 rounded-lg px-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-3.5" aria-hidden="true" />
            Clear
          </button>
        )}
      </div>

      {showCategories && (
        <FilterSection
          title="Categories"
          isOpen={openSections.categories}
          onToggle={() => toggleSection('categories')}
          activeCount={searchParams.getAll('category').length}
        >
          <FilterCheckboxList
            options={categoryOptions}
            selectedValues={searchParams.getAll('category')}
            onToggle={(val) => toggleParam('category', val)}
            maxHeight="lg:max-h-48"
          />
        </FilterSection>
      )}

      <FilterSection
        title="Brand"
        isOpen={openSections.brand}
        onToggle={() => toggleSection('brand')}
        activeCount={searchParams.getAll('brand').length}
      >
        <FilterCheckboxList
          options={brandOptions}
          selectedValues={searchParams.getAll('brand')}
          onToggle={(val) => toggleParam('brand', val)}
          maxHeight="lg:max-h-40"
        />
      </FilterSection>

      <FilterSection
        title="Price range"
        isOpen={openSections.price}
        onToggle={() => toggleSection('price')}
        activeCount={searchParams.getAll('price').length}
      >
        <FilterCheckboxList
          options={priceFilterOptions}
          selectedValues={searchParams.getAll('price')}
          onToggle={(val) => toggleParam('price', val)}
        />
      </FilterSection>

      <FilterSection
        title="Availability &amp; offers"
        isOpen={openSections.availability}
        onToggle={() => toggleSection('availability')}
        activeCount={searchParams.getAll('availability').length + searchParams.getAll('filter').length}
      >
        <div className="flex flex-col gap-0.5">
          <label className={optionClass}>
            <input type="checkbox" className="size-4 shrink-0 cursor-pointer accent-primary" checked={searchParams.getAll('availability').includes('in-stock')} onChange={() => toggleParam('availability', 'in-stock')} />
            <span className="truncate">In stock</span>
          </label>
          <label className={optionClass}>
            <input type="checkbox" className="size-4 shrink-0 cursor-pointer accent-primary" checked={searchParams.getAll('filter').includes('deals')} onChange={() => toggleParam('filter', 'deals')} />
            <span className="truncate">Hot deals</span>
          </label>
        </div>
      </FilterSection>

      <FilterSection title="Sort by" isOpen={openSections.sort} onToggle={() => toggleSection('sort')}>
        <select
          id="product-sort-filter"
          value={searchParams.get('sort') || 'default'}
          onChange={(event) => setSort(event.target.value)}
          className="min-h-10 w-full rounded-lg border border-border bg-card px-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25"
        >
          <option value="default">Recommended</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </FilterSection>

      <span className="sr-only" aria-live="polite">{resultCount} products found</span>
    </div>
  );
}
