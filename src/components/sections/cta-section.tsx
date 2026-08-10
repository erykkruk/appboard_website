import { ArrowRightIcon, ButtonLink, Highlight } from "@/components/ui";
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { APP_URL } from "@/lib/seo";

import type { JSX } from "react";

export function CtaSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].cta;

  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,111,251,0.2),transparent_60%)]"
        />
        <div className="relative">
          <h2 className="display text-4xl text-foreground sm:text-6xl">
            {`${copy.titleLead} `}
            <Highlight>{copy.titleHighlight}</Highlight>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{copy.lead}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={`${APP_URL}/demo`} size="lg" variant="primary">
              {copy.primaryCta}
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href={APP_URL} size="lg" variant="secondary">
              {copy.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
