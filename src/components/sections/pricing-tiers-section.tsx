import { ButtonLink, CheckIcon } from "@/components/ui";
import { PRICING_CONTENT } from "@/lib/i18n/content/pricing";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";
import { APP_URL, GITHUB_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

import type { Locale } from "@/lib/i18n/locales";
import type { JSX } from "react";

export function PricingTiersSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  const content = PRICING_CONTENT[locale].tiers;

  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl rounded-2xl border border-accent/30 bg-accent/10 px-6 py-4 text-center">
          <p className="text-sm text-foreground">
            <span className="font-semibold">{content.earlyAccessLabel}</span>
            {` ${content.earlyAccessBody}`}
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.tiers.map((tier) => (
            <article
              className={cn(
                "flex flex-col rounded-2xl border p-8",
                tier.highlighted
                  ? "border-accent/60 bg-panel shadow-xl shadow-accent/10"
                  : "border-line bg-panel/50",
              )}
              key={tier.name}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">{tier.name}</h2>
                {tier.highlighted ? (
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-bright">
                    {content.mostPopular}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <p className="mt-6">
                {tier.regularPrice ? (
                  <span className="mr-2 text-2xl font-medium text-muted line-through decoration-accent-bright/70">
                    {tier.regularPrice}
                  </span>
                ) : null}
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  $0
                </span>
                <span className="ml-2 text-sm text-muted">
                  {content.betaSuffix}
                </span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li className="flex items-start gap-3 text-sm text-muted" key={feature}>
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent-bright" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                className="mt-8 w-full"
                href={APP_URL}
                variant={tier.highlighted ? "primary" : "secondary"}
              >
                {content.ctaLabel}
              </ButtonLink>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-accent/30 bg-accent/10 px-6 py-4 text-center">
          <p className="text-sm text-foreground">
            <span className="font-semibold">{content.selfHostLabel}</span>
            {` ${content.selfHostBody}`}{" "}
            <a
              className="anim-underline font-medium text-accent-bright"
              href={GITHUB_URL}
            >
              {content.selfHostLinkLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
