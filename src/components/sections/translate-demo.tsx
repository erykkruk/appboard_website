import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface TranslationRow {
  language: string;
  limit: number;
  value: string;
}

const TRANSLATIONS: TranslationRow[] = [
  { language: "German", limit: 30, value: "Lumina: KI-Fotoeditor" },
  { language: "French", limit: 30, value: "Lumina : editeur photo IA" },
  { language: "Spanish", limit: 30, value: "Lumina: editor de fotos IA" },
];

const FADE_DELAY = ["[animation-delay:0ms]", "[animation-delay:700ms]", "[animation-delay:1400ms]"];
const WRITE_DELAY = [
  "[animation-delay:350ms]",
  "[animation-delay:1050ms]",
  "[animation-delay:1750ms]",
];

export function TranslateDemo(): JSX.Element {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-accent/10">
      <div className="border-b border-line bg-panel/60 px-5 py-4">
        <p className="text-xs uppercase tracking-wider text-muted">Source, English</p>
        <p className="mt-1.5 font-mono text-[13px] text-foreground">
          Lumina: AI Photo Editor
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] text-accent-soft">
            Do not translate: Lumina
          </span>
          <span className="rounded-full border border-line bg-panel px-2.5 py-0.5 text-[11px] text-muted">
            Keeps ASO keywords
          </span>
          <span className="rounded-full border border-line bg-panel px-2.5 py-0.5 text-[11px] text-muted">
            Respects the 30 character title limit
          </span>
        </div>
      </div>
      <ul className="divide-y divide-line">
        {TRANSLATIONS.map((row, index) => (
          <li
            className={cn(
              "demo-fade flex items-center justify-between gap-4 px-5 py-3.5",
              FADE_DELAY[index],
            )}
            key={row.language}
          >
            <div className="min-w-0">
              <p className="text-xs text-muted">{row.language}</p>
              <p
                className={cn(
                  "demo-write mt-1 truncate font-mono text-[13px] text-foreground",
                  WRITE_DELAY[index],
                )}
              >
                {row.value}
              </p>
            </div>
            <span className="shrink-0 font-mono text-[11px] text-emerald-300/80">
              {row.value.length}/{row.limit}
            </span>
          </li>
        ))}
      </ul>
      <p className="border-t border-line bg-panel/40 px-5 py-3.5 text-xs text-muted">
        Every line lands in your draft. You edit and approve before anything is
        published.
      </p>
    </div>
  );
}
