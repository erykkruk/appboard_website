import { Eyebrow } from "@/components/ui";
import { OPEN_SOURCE_CONTENT } from "@/lib/i18n/content/opensource";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

import type { SiteLocale } from "@/lib/i18n/locales";
import type { JSX } from "react";

export function FounderNoteSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: SiteLocale;
}): JSX.Element {
  const content = OPEN_SOURCE_CONTENT[locale].founderNote;

  return (
    <section className="border-y border-line bg-surface px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 font-medium text-foreground">{content.signature}</p>
      </div>
    </section>
  );
}
