import { ArrowRightIcon, ButtonLink } from "@/components/ui";
import { APP_URL } from "@/lib/seo";

import type { JSX } from "react";

function HeroMockup(): JSX.Element {
  return (
    <div aria-hidden="true" className="relative mx-auto mt-16 max-w-4xl">
      <div className="absolute -inset-x-8 -top-16 h-64 bg-gradient-to-r from-accent/30 via-glow/20 to-accent/30 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-accent/10">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="ml-3 h-5 w-48 rounded-md bg-panel" />
        </div>
        <div className="flex">
          <div className="hidden w-44 shrink-0 flex-col gap-2 border-r border-line p-4 sm:flex">
            <span className="h-6 rounded-md bg-accent/25" />
            <span className="h-6 w-4/5 rounded-md bg-panel" />
            <span className="h-6 w-3/5 rounded-md bg-panel" />
            <span className="h-6 w-4/5 rounded-md bg-panel" />
            <span className="mt-4 h-6 w-2/3 rounded-md bg-panel" />
            <span className="h-6 w-3/5 rounded-md bg-panel" />
          </div>
          <div className="flex-1 space-y-4 p-5">
            <div className="flex items-center justify-between">
              <span className="h-5 w-40 rounded-md bg-panel" />
              <span className="h-7 w-24 rounded-lg bg-accent/70" />
            </div>
            <div className="rounded-xl border border-line bg-panel/50 p-4">
              <div className="space-y-2.5">
                <span className="block h-3.5 w-3/4 rounded bg-line" />
                <span className="block h-3.5 w-full rounded bg-line/70" />
                <span className="block h-3.5 w-2/3 rounded bg-line/70" />
              </div>
            </div>
            <div className="rounded-xl border border-line bg-panel/50 p-4 font-mono text-xs">
              <p className="rounded bg-rose-500/15 px-2 py-1 text-rose-300">
                - Track workouts and stay motivated
              </p>
              <p className="mt-1 rounded bg-emerald-500/15 px-2 py-1 text-emerald-300">
                + Smart workout tracker with AI coaching
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs text-accent-bright">
                workout tracker #4
              </span>
              <span className="rounded-full border border-glow/40 bg-glow/10 px-3 py-1 text-xs text-glow">
                fitness coach #11
              </span>
              <span className="rounded-full border border-line bg-panel px-3 py-1 text-xs text-muted">
                gym log #23
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection(): JSX.Element {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(109,111,251,0.18),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-6xl text-center">
        <p className="mx-auto w-fit rounded-full border border-line bg-panel/60 px-4 py-1.5 text-sm text-muted">
          Early access — free while in beta
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          One panel for your App Store and Google Play listings
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          AppBoard connects to App Store Connect and Google Play Console so you can
          edit metadata in every language, version changes like code, and publish to
          both stores — with an AI assistant and real ASO research built in.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={APP_URL} size="lg" variant="primary">
            Get started
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href="/#features" size="lg" variant="secondary">
            Explore features
          </ButtonLink>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}
