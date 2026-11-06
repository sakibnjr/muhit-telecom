import Link from "next/link";

export function CategoryBreadcrumbs({ name }: { name?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-primary hover:underline">Home</Link></li>
        <li aria-hidden="true">/</li>
        {name ? (
          <>
            <li><Link href="/categories" className="hover:text-primary hover:underline">Categories</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">{name}</li>
          </>
        ) : (
          <li aria-current="page" className="text-foreground">Categories</li>
        )}
      </ol>
    </nav>
  );
}
