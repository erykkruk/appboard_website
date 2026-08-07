import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface DiffRow {
  field: string;
  language: string;
  newValue: string;
  oldValue: string;
}

const DIFF_ROWS: DiffRow[] = [
  {
    field: "Title",
    language: "EN",
    newValue: "Lumina: AI Photo Editor",
    oldValue: "Lumina - Photo Editor",
  },
  {
    field: "Subtitle",
    language: "EN",
    newValue: "Edit photos with AI in seconds",
    oldValue: "Edit your photos fast",
  },
  {
    field: "Kurzbeschreibung",
    language: "DE",
    newValue: "Fotos mit KI bearbeiten",
    oldValue: "Fotos schnell bearbeiten",
  },
];

const FADE_DELAY = ["[animation-delay:0ms]", "[animation-delay:700ms]", "[animation-delay:1400ms]"];
const WRITE_DELAY = [
  "[animation-delay:350ms]",
  "[animation-delay:1050ms]",
  "[animation-delay:1750ms]",
];

export function DiffDemo(): JSX.Element {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-accent/10">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-panel/60 px-5 py-3">
        <p className="text-sm font-medium text-foreground">Pending changes</p>
        <p className="text-xs text-muted">3 fields in 2 languages</p>
      </div>
      <div className="space-y-5 p-5 font-mono text-[13px] leading-relaxed">
        {DIFF_ROWS.map((row, index) => (
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
            Publish to both stores
          </span>
        </span>
        <span className="text-xs text-muted">Nothing ships until you press it</span>
      </div>
    </div>
  );
}
