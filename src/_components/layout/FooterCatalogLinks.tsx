import Link from "next/link";
import type { NavigationGroup } from "@/_components/layout/CatalogNavigation";

export function FooterCatalogLinks({
  title,
  href,
  links,
  shopLink = false,
  columns = 1,
}: NavigationGroup & { shopLink?: boolean; columns?: 1 | 2 }) {
  return (
    <nav aria-label={`Footer ${title}`} className="min-w-0">
      <h3 className="border-b border-white/10 pb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </h3>
      <ul className={`${columns === 2 ? "grid grid-cols-2 gap-x-3" : "space-y-0.5"} mt-3 text-sm text-slate-300 [overflow-wrap:anywhere]`}>
        <li>
          <Link href={href} className="inline-flex min-h-9 items-center font-semibold text-sky-300 transition-colors hover:text-white">
            All {title} →
          </Link>
        </li>
        {shopLink && (
          <li>
            <Link href="/shop" className="inline-flex min-h-9 items-center transition-colors hover:text-white">
              All Gadgets
            </Link>
          </li>
        )}
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="inline-flex min-h-9 items-center transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
