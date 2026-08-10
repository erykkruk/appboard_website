import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type SiteLocale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

const FADE_DELAY = ["[animation-delay:0ms]", "[animation-delay:700ms]", "[animation-delay:1400ms]"];
const WRITE_DELAY = [
  "[animation-delay:350ms]",
  "[animation-delay:1050ms]",
  "[animation-delay:1750ms]",
];

export function DiffDemo({
  locale = DEFAULT_LOCALE,
}: {
  locale?: SiteLocale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].diffDemo;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-accent/10">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-panel/60 px-5 py-3">
        <p className="text-sm font-medium text-foreground">{copy.headerTitle}</p>
        <p className="text-xs text-muted">{copy.headerNote}</p>
      </div>
      <div className="space-y-5 p-5 font-mono text-[13px] leading-relaxed">
        {copy.rows.map((row, index) => (
          <div className={cn("demo-fade", FADE_DELAY[index])} key={row.field}>
            <p className="flex items-center gap-2 font-sans text-xs text-muted">
              <span className="rounded border border-line bg-panel px-1.5 py-0.5 font-medium text-foreground">
                {row.language}
              </span>
              {row.field}
            </p>
            <p className="mt-2 flex gap-2 rounded-md bg-red-500/10 px-2 py-1 text-red-300/80">
              <span aria-hidden="true" className="select-none text-red-400/70">
                -
              </span>
              <span className="line-through decoration-red-400/50">{row.oldValue}</span>
            </p>
            <p className="mt-1 flex gap-2 rounded-md bg-emerald-500/10 px-2 py-1 text-emerald-200">
              <span aria-hidden="true" className="select-none text-emerald-400/70">
                +
              </span>
              <span className={cn("demo-write", WRITE_DELAY[index])}>{row.newValue}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line bg-panel/40 px-5 py-4">
        <span className="relative inline-flex">
          <span
            aria-hidden="true"
            className="demo-ring absolute inset-0 rounded-full bg-accent [animation-delay:2200ms]"
          />
          <span className="relative rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white">
            {copy.publishLabel}
          </span>
        </span>
        <span className="text-xs text-muted">{copy.publishNote}</span>
      </div>
    </div>
  );
}
