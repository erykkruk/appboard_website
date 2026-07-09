import { CheckIcon, CloseIcon, SectionHeading } from "@/components/ui";

import type { JSX } from "react";

interface ComparisonRow {
  task: string;
  withAppboard: string;
  withoutAppboard: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    task: "Update a description in 8 languages",
    withAppboard: "One editor, per-language tabs, publish in one batch",
    withoutAppboard: "Two consoles, eight tabs, copy-paste from a spreadsheet",
  },
  {
    task: "Check what changed last month",
    withAppboard: "Field-level history with red/green diffs",
    withoutAppboard: "Scroll Slack and hope someone wrote it down",
  },
  {
    task: "Revert a bad listing update",
    withAppboard: "One-click rollback into your draft",
    withoutAppboard: "Reconstruct the old text from memory",
  },
  {
    task: "Answer reviews on both stores",
    withAppboard: "One inbox, AI-drafted replies you approve",
    withoutAppboard: "Two consoles, two reply flows, no overview",
  },
  {
    task: "Ship screenshots for a release",
    withAppboard: "Built-in editor exports exact store dimensions",
    withoutAppboard: "Figma exports, wrong pixel sizes, re-upload roulette",
  },
  {
    task: "Know why users are unhappy",
    withAppboard: "AI groups complaints from reviews into themes",
    withoutAppboard: "Read hundreds of reviews by hand",
  },
];

export function ComparisonSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 border-y border-line bg-surface px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          description="Nothing here is magic — it's the same work you already do, minus the tab juggling."
          eyebrow="Why bother"
          title="The same release day, with and without AppBoard"
        />
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                <th className="w-1/3 rounded-tl-2xl border border-line bg-panel/60 px-5 py-4 text-left font-semibold text-foreground">
                  Release-day task
                </th>
                <th className="w-1/3 border-y border-line bg-panel/60 px-5 py-4 text-left font-semibold text-muted">
                  Console hopping
                </th>
                <th className="w-1/3 rounded-tr-2xl border border-line border-l-accent/40 bg-accent/10 px-5 py-4 text-left font-semibold text-accent-bright">
                  With AppBoard
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => {
                const isLast = index === COMPARISON_ROWS.length - 1;
                return (
                  <tr key={row.task}>
                    <td
                      className={`border-x border-b border-line px-5 py-4 font-medium text-foreground ${isLast ? "rounded-bl-2xl" : ""}`}
                    >
                      {row.task}
                    </td>
                    <td className="border-b border-r border-line px-5 py-4 text-muted">
                      <span className="flex gap-2.5">
                        <CloseIcon className="mt-0.5 size-4 shrink-0 text-muted/60" />
                        {row.withoutAppboard}
                      </span>
                    </td>
                    <td
                      className={`border-b border-r border-line border-l border-l-accent/40 bg-accent/5 px-5 py-4 text-foreground ${isLast ? "rounded-br-2xl" : ""}`}
                    >
                      <span className="flex gap-2.5">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent-bright" />
                        {row.withAppboard}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
