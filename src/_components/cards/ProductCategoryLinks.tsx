import Link from 'next/link';
import { getCategory } from '@/_data/categories';
import type { Product } from '@/_types';

export function ProductBreadcrumbs({ product }: { product: Product }) {
  const category = getCategory(product.category);
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li><Link href="/" className="hover:text-primary">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
        {category && <><li aria-hidden="true">/</li><li><Link href={`/categories/${category.slug}`} className="hover:text-primary">{category.name}</Link></li></>}
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-medium text-foreground">{product.title}</li>
      </ol>
    </nav>
  );
}

export function ProductCategoryLinks({ product }: { product: Product }) {
  const category = getCategory(product.category);
  if (!category) return null;
  return (
    <aside aria-label="Buying guides and support" className="mt-8 rounded-lg border border-border bg-muted p-6">
      <h2 className="text-lg font-bold">Compare, choose & get support</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Explore the {category.name.toLowerCase()} guide before choosing, or ask our Hili store about compatibility and warranty terms.</p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary">
        <Link href={`/categories/${category.slug}`} className="underline underline-offset-4">Explore {category.name}</Link>
        {product.category === 'mobile-phones' ? <>
          <Link href="/services/battery-replacement" className="underline underline-offset-4">Phone battery replacement</Link>
          <Link href="/services/screen-repair-replacement" className="underline underline-offset-4">Screen repair advice</Link>
        </> : <Link href="/services/computer-mobile-accessories-sale" className="underline underline-offset-4">Accessory compatibility advice</Link>}
        <Link href="/warranty-policy" className="underline underline-offset-4">Warranty policy</Link>
        <Link href="/contact" className="underline underline-offset-4">Visit or contact us</Link>
      </div>
    </aside>
  );
}
