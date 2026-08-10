import { SectionHeading } from "@/components/ui";
import { PRICING_CONTENT } from "@/lib/i18n/content/pricing";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

import type { SiteLocale } from "@/lib/i18n/locales";
import type { FaqEntry } from "@/lib/schema";
import type { JSX } from "react";

export function getPricingFaq(locale: SiteLocale): FaqEntry[] {
  return PRICING_CONTENT[locale].faq.entries;
}

export const PRICING_FAQ: FaqEntry[] = getPricingFaq(DEFAULT_LOCALE);

export function PricingFaqSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: SiteLocale;
}): JSX.Element {
  const content = PRICING_CONTENT[locale].faq;

  return (
    <section className="border-t border-line bg-surface px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
        />
        <dl className="mt-12 space-y-8">
          {content.entries.map((entry) => (
            <div className="rounded-2xl border border-line bg-panel/40 p-6" key={entry.question}>
              <dt className="font-semibold text-foreground">{entry.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{entry.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
