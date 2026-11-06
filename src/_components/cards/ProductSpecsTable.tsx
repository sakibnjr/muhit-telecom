interface ProductSpecsTableProps {
  description: string[];
  specs: Record<string, string>;
}

export function ProductSpecsTable({ description, specs }: ProductSpecsTableProps) {
  return (
    <section className="surface-panel mt-10 p-6 shadow-sm sm:p-8">
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground">Product details &amp; specifications</h2>
      <div className="mb-6 space-y-3 text-base leading-7 text-muted-foreground">
        {description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <tbody>
            {Object.entries(specs).map(([key, val], idx) => (
              <tr key={key} className={idx % 2 === 0 ? 'bg-muted/40' : 'bg-card'}>
                <td className="w-1/3 border border-border/70 px-4 py-3 font-semibold text-foreground">
                  {key}
                </td>
                <td className="border border-border/70 px-4 py-3 text-muted-foreground">
                  {val}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
