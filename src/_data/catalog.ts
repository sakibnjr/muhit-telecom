import type { Product } from '@/_types';

const legacyCategories: Record<string, string> = {
  smartphones: 'mobile-phones',
  'feature-phones': 'mobile-phones',
  accessories: 'phone-accessories',
  'cases-covers': 'phone-accessories',
  'chargers-cables': 'adapters-chargers',
  'earbuds-tws': 'tws',
  smartwatches: 'smart-watches',
};

export function normalizeCategorySlug(slug: string): string {
  return legacyCategories[slug] ?? slug;
}

// Existing shared shop URLs retain their original narrower/broader selection.
export function matchesProductCategory(product: Product, slug: string): boolean {
  if (slug === 'smartphones') {
    return product.category === 'mobile-phones' && !product.tags.includes('feature-phone');
  }
  if (slug === 'feature-phones') return product.tags.includes('feature-phone');
  if (slug === 'earbuds-tws') return ['tws', 'headsets'].includes(product.category);
  if (slug === 'chargers-cables') {
    return ['adapters-chargers', 'power-banks'].includes(product.category) || product.tags.includes('router');
  }
  return product.category === normalizeCategorySlug(slug);
}
