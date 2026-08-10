import { CheckIcon, ComingSoonBadge, Reveal } from "@/components/ui";
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type SiteLocale } from "@/lib/i18n/locales";

import type { JSX } from "react";

export function StoresSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: SiteLocale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].stores;

  return (
    <section className="border-y border-line bg-surface px-4 py-14 sm:px-6">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          {copy.eyebrow}
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {copy.liveStores.map((store) => (
            <li
              className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground"
              key={store}
            >
              <CheckIcon className="size-4 text-accent-bright" />
              {store}
            </li>
          ))}
          {copy.plannedStores.map((store) => (
            <li
              className="flex items-center gap-2 rounded-full border border-line bg-panel/50 px-4 py-2 text-sm text-muted"
              key={store}
            >
              {store}
              <ComingSoonBadge locale={locale} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">{copy.footnote}</p>
      </Reveal>
    </section>
  );
}
