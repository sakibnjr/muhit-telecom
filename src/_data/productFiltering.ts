import type { Product } from "@/_types";

export interface ProductFilterOptions {
  brand?: string | string[];
  price?: string | string[];
  availability?: string | string[];
  filter?: string | string[];
  sort?: string;
}

const priceRanges: Record<string, { min?: number; max?: number }> = {
  under_1000: { max: 999 },
  from_1000_to_4999: { min: 1000, max: 4999 },
  from_5000_to_19999: { min: 5000, max: 19999 },
  over_20000: { min: 20000 },
};

export function getProductBrands(products: Product[]) {
  return [...new Set(products.map(({ brand }) => brand))].sort((a, b) =>
    a.localeCompare(b),
  );
}

export function filterProducts(
  products: Product[],
  options: ProductFilterOptions,
) {
  let filtered = [...products];
  const values = (value?: string | string[]) =>
    value === undefined ? [] : Array.isArray(value) ? value : [value];

  const brands = values(options.brand);
  if (brands.length) {
    filtered = filtered.filter((product) => brands.includes(product.brand));
  }

  const ranges = values(options.price)
    .map((price) => priceRanges[price])
    .filter((range): range is { min?: number; max?: number } => Boolean(range));
  if (ranges.length) {
    filtered = filtered.filter(
      (product) => ranges.some((range) =>
        (range.min === undefined || product.price >= range.min) &&
        (range.max === undefined || product.price <= range.max),
      ),
    );
  }

  if (values(options.availability).includes("in-stock")) {
    filtered = filtered.filter((product) => product.stock > 0);
  }

  if (values(options.filter).includes("deals")) {
    filtered = filtered.filter((product) => product.regularPrice > product.price);
  }

  if (options.sort === "price_asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (options.sort === "price_desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (options.sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}
