"use client";

import { useEffect, useRef, useState } from "react";

import { ChevronDownIcon } from "@/components/ui";
import { cn } from "@/lib/utils";

import type { FreeToolsMenuContent } from "@/lib/i18n/dictionaries";
import type { JSX } from "react";

/**
 * The "Free tools" dropdown, the same one visitors see on the panel's public
 * tool pages: opens on hover and focus, closes on outside click, Escape and
 * blur, so keyboard users get the same three links as mouse users.
 */
export function FreeToolsMenu({
  menu,
}: {
  menu: FreeToolsMenuContent;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent): void {
      if (!groupRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={groupRef}
    >
      <button
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
        onClick={() => setOpen((value) => !value)}
        onFocus={() => setOpen(true)}
        type="button"
      >
        {menu.label}
        <ChevronDownIcon
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3",
          !open && "hidden",
        )}
      >
        <div className="rounded-xl border border-line bg-background/95 p-2 shadow-xl backdrop-blur">
          {menu.items.map((tool) => (
            <a
              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-panel"
              href={tool.href}
              key={tool.href}
              onClick={() => setOpen(false)}
            >
              <span className="block text-sm font-medium text-foreground">
                {tool.label}
              </span>
              <span className="mt-0.5 block text-xs text-muted">
                {tool.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
