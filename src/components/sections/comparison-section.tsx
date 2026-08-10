import { CheckIcon, CloseIcon, SectionHeading } from "@/components/ui";
import { OPEN_SOURCE_CONTENT } from "@/lib/i18n/content/opensource";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

import type { SiteLocale } from "@/lib/i18n/locales";
import type { JSX } from "react";

export function ComparisonSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: SiteLocale;
}): JSX.Element {
  const content = OPEN_SOURCE_CONTENT[locale].comparison;
  const rows = content.rows;

  return (
    <section className="scroll-mt-24 border-y border-line bg-surface px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                <th className="w-1/3 rounded-tl-2xl border border-line bg-panel/60 px-5 py-4 text-left font-semibold text-foreground">
                  {content.headerTask}
                </th>
                <th className="w-1/3 border-y border-line bg-panel/60 px-5 py-4 text-left font-semibold text-muted">
                  {content.headerWithout}
                </th>
                <th className="w-1/3 rounded-tr-2xl border border-line border-l-accent/40 bg-accent/10 px-5 py-4 text-left font-semibold text-accent-bright">
                  {content.headerWith}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const isLast = index === rows.length - 1;
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
