'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left font-medium text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-semibold">{title}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ml-3',
            isOpen && 'transform rotate-180 text-primary'
          )}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-5 md:px-5 pt-1 text-sm text-muted-foreground border-t border-border/50">
          {children}
        </div>
      )}
    </div>
  );
}

