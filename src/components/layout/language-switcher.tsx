"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { LOCALE_CONFIG, LOCALE_LIST, type Locale } from "@/lib/i18n/locales";
import { switcherTarget } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface LanguageSwitcherProps {
  className?: string;
  label: string;
  locale: Locale;
}

export function LanguageSwitcher({
  className,
  label,
  locale,
}: LanguageSwitcherProps): JSX.Element {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = LOCALE_CONFIG[locale];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent): void {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={label}
        className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-sm text-muted transition-colors hover:border-accent/60 hover:text-foreground"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span aria-hidden="true">{current.shortLabel}</span>
        <svg
          aria-hidden="true"
          className={cn("size-3 transition-transform", isOpen && "rotate-180")}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={cn(
          "absolute right-0 z-50 mt-2 min-w-36 overflow-hidden rounded-lg border border-line bg-background py-1 shadow-lg",
          !isOpen && "hidden",
        )}
        role="menu"
      >
        {LOCALE_LIST.map((option) => (
          <Link
            aria-current={option.code === locale ? "true" : undefined}
            className={cn(
              "block px-3 py-2 text-sm transition-colors hover:bg-panel",
              option.code === locale
                ? "text-foreground"
                : "text-muted hover:text-foreground",
            )}
            href={switcherTarget(pathname, option.code)}
            hrefLang={option.htmlLang}
            key={option.code}
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
