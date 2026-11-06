'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface BackToTopProps {
  showProgress?: boolean;
}

export function BackToTop({ showProgress = true }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }

      if (scrollY > 240) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Radius = 23, Circumference = 2 * PI * 23 ~= 144.51
  const radius = 23;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title={`Scroll back to top (${Math.round(scrollProgress)}%)`}
      className={`fixed bottom-22 right-6 z-40 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-card/95 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 group md:bottom-24 md:flex md:h-14 md:w-14 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {showProgress && (
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 56 56"
          aria-hidden="true"
        >
          {/* Background circle track */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-muted/50"
            strokeWidth="3"
            fill="transparent"
          />
          {/* Active progress stroke */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-primary transition-all duration-150 ease-out"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
      )}

      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-foreground group-hover:text-primary transition-colors relative z-10" />
    </button>
  );
}
