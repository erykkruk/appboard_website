import { ArrowRightIcon, ButtonLink, Highlight, ScreenshotFrame } from "@/components/ui";
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { APP_URL } from "@/lib/seo";

import { HeroLogo3d } from "./hero-logo-3d";

import type { JSX } from "react";

export function HeroSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].hero;

  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(109,111,251,0.18),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-[720px] md:block"
      >
        <HeroLogo3d />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="display enter mx-auto text-6xl text-foreground sm:text-8xl">
          {`${copy.titleLead} `}
          <Highlight>{copy.titleHighlight}</Highlight>
        </h1>
        <p className="enter mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:120ms]">
          {copy.lead}
        </p>
        <div className="enter mt-10 flex flex-col items-center justify-center gap-3 [animation-delay:240ms] sm:flex-row">
          <ButtonLink href={APP_URL} size="lg" variant="primary">
            {copy.primaryCta}
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href={`${APP_URL}/demo`} size="lg" variant="secondary">
            {copy.secondaryCta}
          </ButtonLink>
        </div>
        <p className="enter mt-5 text-sm text-muted [animation-delay:320ms]">
          {copy.note}
        </p>
        <ul className="enter mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted [animation-delay:400ms]">
          {copy.facts.map((fact) => (
            <li className="flex items-center gap-2" key={fact}>
              <span aria-hidden="true" className="size-1 rounded-full bg-accent-bright" />
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <div className="parallax-rise relative mx-auto mt-20 max-w-5xl">
        <div
          aria-hidden="true"
          className="absolute -inset-x-8 -top-16 h-64 bg-gradient-to-r from-accent/30 via-glow/15 to-accent/30 blur-3xl"
        />
        <ScreenshotFrame
          alt={copy.dashboardAlt}
          className="relative"
          priority
          src="/images/panel/dashboard.png"
        />
      </div>
    </section>
  );
}
