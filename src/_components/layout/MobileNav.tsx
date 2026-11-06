"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu } from "lucide-react";
import type { NavigationGroup } from "@/_components/layout/CatalogNavigation";
import { MobileNavDrawer } from "@/_components/layout/MobileNavDrawer";

export function MobileNav({ groups }: { groups: NavigationGroup[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogId = useId();
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };

    dialog.showModal();
    document.body.style.overflow = "hidden";
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dialogId : undefined}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-xl p-2 text-secondary-foreground transition-colors hover:bg-white/10 hover:text-white"
        aria-label="Open Mobile Menu"
      >
        <Menu className="size-6" />
      </button>

      {isOpen &&
        createPortal(
          <dialog
            ref={dialogRef}
            id={dialogId}
            aria-labelledby={titleId}
            aria-modal="true"
            onCancel={(e) => {
              e.preventDefault();
              setIsOpen(false);
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
            className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-black/60 p-0 text-foreground backdrop-blur-xs backdrop:bg-transparent animate-in fade-in duration-200"
          >
            <MobileNavDrawer
              groups={groups}
              onClose={() => setIsOpen(false)}
            />
          </dialog>,
          document.body,
        )}
    </div>
  );
}
