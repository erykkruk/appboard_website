import { ArrowRightIcon, ButtonLink, Highlight, Reveal } from "@/components/ui";
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";

import type { JSX } from "react";

export function PricingTeaserSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].pricingTeaser;

  return (
    <section className="border-y border-line bg-surface px-4 py-24 sm:px-6" id="pricing">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="display text-4xl text-foreground sm:text-5xl">
          {`${copy.titleLead} `}
          <Highlight>{copy.titleHighlight}</Highlight>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">{copy.lead}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={copy.ctaHref} size="lg" variant="secondary">
            {copy.ctaLabel}
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
