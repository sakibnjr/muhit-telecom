import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  activeCount?: number;
}

export function FilterSection({
  title,
  isOpen,
  onToggle,
  children,
  activeCount,
}: FilterSectionProps) {
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex min-h-11 w-full items-center justify-between px-3 py-2.5 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted/40 sm:px-4"
      >
        <span className="flex items-center gap-1.5">
          <span>{title}</span>
          {Boolean(activeCount && activeCount > 0) && (
            <span className="flex size-4 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
              {activeCount}
            </span>
          )}
        </span>
        <ChevronDown
          className={`size-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180 text-foreground" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && <div className="px-3 pb-3 sm:px-4 sm:pb-4">{children}</div>}
    </div>
  );
}
