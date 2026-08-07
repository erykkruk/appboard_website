import { ArrowRightIcon, ButtonLink, Highlight } from "@/components/ui";

import type { JSX } from "react";

export function PricingTeaserSection(): JSX.Element {
  return (
    <section className="border-y border-line bg-surface px-4 py-24 sm:px-6" id="pricing">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="display text-4xl text-foreground sm:text-5xl">
          Right now it is <Highlight>free</Highlight>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Every plan costs $0 while AppBoard is in beta: no credit card, no
          feature locks. The Free, Pro and Team tiers are already mapped out,
          and pricing will be announced well before general availability.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/pricing" size="lg" variant="secondary">
            See the planned plans
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
