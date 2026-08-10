import Link from "next/link";

import { JsonLd, Reveal, SectionHeading } from "@/components/ui";
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { buildFaqSchema } from "@/lib/schema";

import type { JSX } from "react";

export function FaqSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].faq;

  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="faq">
      <JsonLd
        data={buildFaqSchema(copy.schemaPath, copy.entries, copy.schemaLanguage)}
      />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        </Reveal>
        <div className="mt-12 space-y-3">
          {copy.entries.map((entry) => (
            <details
              className="group rounded-2xl border border-line bg-panel/40 px-6 py-4 transition-colors open:border-accent/40 open:bg-panel/70 hover:border-accent/30"
              key={entry.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-foreground [&::-webkit-details-marker]:hidden">
                {entry.question}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-accent-bright transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{entry.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          {copy.footnoteLead}{" "}
          <Link className="anim-underline text-accent-bright" href={copy.faqHref}>
            {copy.faqLabel}
          </Link>{" "}
          {copy.footnoteMiddle}{" "}
          <Link className="anim-underline text-accent-bright" href={copy.docsHref}>
            {copy.docsLabel}
          </Link>
          {copy.footnoteTail}
        </p>
      </div>
    </section>
  );
}
