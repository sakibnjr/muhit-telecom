"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Ties an overlay (e.g. the mobile search screen) to the browser history so the
 * device or browser Back button closes it instead of leaving the page.
 *
 * - Opening pushes one history entry.
 * - Browser Back (popstate) closes the overlay.
 * - `goBack` is for in-UI close buttons: it pops that entry, which closes the overlay.
 * - `markNavigating` must be called before closing for a route change, so the
 *   extra entry is not popped while the router is navigating (use router.replace).
 */
export function useHistoryClose(isOpen: boolean, onClose: () => void) {
  const onCloseRef = useRef(onClose);
  const navigatingRef = useRef(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    navigatingRef.current = false;
    window.history.pushState({ ...window.history.state, overlay: true }, "");

    const handlePopState = () => onCloseRef.current();
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      // Closed from the UI without going back: remove the leftover entry.
      if (!navigatingRef.current && window.history.state?.overlay) {
        window.history.back();
      }
    };
  }, [isOpen]);

  const goBack = useCallback(() => {
    if (window.history.state?.overlay) {
      window.history.back();
    } else {
      onCloseRef.current();
    }
  }, []);

  const markNavigating = useCallback(() => {
    navigatingRef.current = true;
  }, []);

  return { goBack, markNavigating };
}

