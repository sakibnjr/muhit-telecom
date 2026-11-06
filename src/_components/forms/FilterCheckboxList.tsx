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
      className={`flex flex-col gap-0.5 overflow-y-auto [scrollbar-width:thin] ${
        maxHeight ? maxHeight : "max-h-52"
      }`}
    >
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex min-h-9 w-full cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 text-sm text-foreground hover:bg-muted/70"
        >
          <input
            type="checkbox"
            className="size-4 shrink-0 cursor-pointer rounded accent-primary"
            checked={selectedValues.includes(opt.value)}
            onChange={() => onToggle(opt.value)}
          />
          <span className="truncate">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
