import { Reveal, SectionHeading } from "@/components/ui";
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type SiteLocale } from "@/lib/i18n/locales";

import type { JSX } from "react";

export function HowItWorksSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: SiteLocale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].howItWorks;

  return (
    <section
      className="scroll-mt-24 border-y border-line bg-surface px-4 py-24 sm:px-6"
      id="how-it-works"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        </Reveal>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, index) => (
            <Reveal as="li" delayMs={index * 90} key={step.title}>
              <span className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-base font-semibold text-accent-bright">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
