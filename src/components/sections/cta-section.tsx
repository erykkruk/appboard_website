import { ArrowRightIcon, ButtonLink } from "@/components/ui";
import { APP_URL } from "@/lib/seo";

import type { JSX } from "react";

export function CtaSection(): JSX.Element {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,111,251,0.2),transparent_60%)]"
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Start optimizing your listings today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Connect your stores in minutes and run your whole ASO workflow from one
            panel. Free while in beta — no credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={APP_URL} size="lg" variant="primary">
              Get started
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href="/pricing" size="lg" variant="secondary">
              View pricing
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
