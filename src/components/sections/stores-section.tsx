import { CheckIcon, ComingSoonBadge, Reveal } from "@/components/ui";

import type { JSX } from "react";

const LIVE_STORES = ["App Store", "Google Play"] as const;

const PLANNED_STORES = [
  "Huawei AppGallery",
  "Samsung Galaxy Store",
  "Amazon Appstore",
  "Xiaomi GetApps",
  "RuStore",
  "ONE Store",
] as const;

export function StoresSection(): JSX.Element {
  return (
    <section className="border-y border-line bg-surface px-4 py-14 sm:px-6">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Publish to
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {LIVE_STORES.map((store) => (
            <li
              className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground"
              key={store}
            >
              <CheckIcon className="size-4 text-accent-bright" />
              {store}
            </li>
          ))}
          {PLANNED_STORES.map((store) => (
            <li
              className="flex items-center gap-2 rounded-full border border-line bg-panel/50 px-4 py-2 text-sm text-muted"
              key={store}
            >
              {store}
              <ComingSoonBadge />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          One listing, written once, on its way to every store you ship on.
        </p>
      </Reveal>
    </section>
  );
}
