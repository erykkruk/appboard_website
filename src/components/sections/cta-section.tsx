import { ArrowRightIcon, ButtonLink, Highlight } from "@/components/ui";
import { APP_URL } from "@/lib/seo";

import type { JSX } from "react";

export function CtaSection(): JSX.Element {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,111,251,0.2),transparent_60%)]"
        />
        <div className="relative">
          <h2 className="display text-4xl text-foreground sm:text-6xl">
            Your next release day could be <Highlight>calm</Highlight>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Click into the live demo and poke around a real workspace, or connect
            your own stores in a few minutes. Free while in beta.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={`${APP_URL}/demo`} size="lg" variant="primary">
              Open the live demo
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href={APP_URL} size="lg" variant="secondary">
              Create free account
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
