import Link from "next/link";
import type { NavigationGroup } from "@/_components/layout/CatalogNavigation";

export function FooterCatalogLinks({
  title,
  href,
  links,
  shopLink = false,
  columns = 1,
}: NavigationGroup & { shopLink?: boolean; columns?: 1 | 2 }) {
  const itemClass =
    "inline-flex min-h-9 items-center transition-colors hover:text-white hover:translate-x-0.5";
  const listClass =
    columns === 2
      ? "grid grid-cols-2 auto-rows-fr gap-x-3"
      : "flex flex-col";

  return (
    <nav aria-label={`Footer ${title}`} className="flex h-full min-w-0 flex-col">
      <h3 className="flex items-center gap-2 border-b border-white/10 pb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300">
        <span aria-hidden="true" className="h-3 w-0.5 rounded-full bg-primary" />
        {title}
      </h3>
      <ul className={`${listClass} mt-3 flex-1 text-sm text-slate-300 [overflow-wrap:anywhere]`}>
        <li className="flex items-center">
          <Link href={href} className="inline-flex min-h-9 items-center font-semibold text-sky-300 transition-colors hover:text-white">
            All {title} →
          </Link>
        </li>
        {shopLink && (
          <li className="flex items-center">
            <Link href="/shop" className={itemClass}>
              All Gadgets
            </Link>
          </li>
        )}
        {links.map((link) => (
          <li key={link.href} className="flex items-center">
            <Link href={link.href} className={itemClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
