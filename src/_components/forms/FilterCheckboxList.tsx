interface FilterOption {
  value: string;
  label: string;
}

interface FilterCheckboxListProps {
  options: FilterOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
  maxHeight?: string;
}

export function FilterCheckboxList({
  options,
  selectedValues,
  onToggle,
  maxHeight,
}: FilterCheckboxListProps) {
  return (
    <div
      className={`flex max-w-full gap-1 overflow-x-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        maxHeight
          ? `${maxHeight} lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:no-scrollbar`
          : 'lg:flex-col lg:overflow-visible'
      }`}
    >
      {options.map((opt) => (
        <label
          key={opt.value}
          className="inline-flex min-h-9 shrink-0 cursor-pointer items-center gap-2 rounded-lg px-2 text-sm text-foreground hover:bg-muted/70 lg:w-full lg:shrink lg:rounded-md"
        >
          <input
            type="checkbox"
            className="size-4 shrink-0 cursor-pointer accent-primary"
            checked={selectedValues.includes(opt.value)}
            onChange={() => onToggle(opt.value)}
          />
          <span className="whitespace-nowrap lg:whitespace-normal">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
