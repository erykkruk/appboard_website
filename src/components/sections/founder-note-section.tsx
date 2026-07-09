import { Eyebrow } from "@/components/ui";

import type { JSX } from "react";

export function FounderNoteSection(): JSX.Element {
  return (
    <section className="border-y border-line bg-surface px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Eyebrow>A note from the builder</Eyebrow>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
          <p>
            AppBoard started as an internal tool. I ship my own apps, and every
            release ended the same way: two consoles, a dozen tabs, a spreadsheet
            of translations, and that quiet fear of overwriting a description
            nobody had backed up.
          </p>
          <p>
            So I built the tool I wanted: listings versioned like code, diffs
            before every publish, and both stores in one place. No growth hacks,
            no dashboards pretending to be insights — just the release-day work,
            made calm.
          </p>
          <p>
            If something feels off or missing, tell me — it&apos;s a small product
            and feedback genuinely changes the roadmap.
          </p>
        </div>
        <p className="mt-8 font-medium text-foreground">
          — Eryk, building AppBoard
        </p>
      </div>
    </section>
  );
}
