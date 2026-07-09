import { ArrowRightIcon, ButtonLink, Highlight, ScreenshotFrame } from "@/components/ui";
import { APP_URL } from "@/lib/seo";

import type { JSX } from "react";

const HERO_FACTS = [
  "App Store + Google Play",
  "Runs 100% in the browser",
  "Open source",
  "Diffs & rollback on every change",
] as const;

export function HeroSection(): JSX.Element {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(109,111,251,0.18),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-6xl text-center">
        <p className="mx-auto w-fit rounded-full border border-line bg-panel/60 px-4 py-1.5 text-sm text-muted">
          Free while in beta — no credit card, no sales call
        </p>
        <h1 className="display mx-auto mt-8 max-w-4xl text-6xl text-foreground sm:text-8xl">
          Edit, diff and publish your store listings from{" "}
          <Highlight>one panel</Highlight>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted">
          AppBoard is an open-source panel for App Store Connect and Google Play
          Console. Every title, description and screenshot in every language —
          drafted, versioned like code, and published in one batch, entirely from
          your browser. With AI help and real store research when you want it.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={`${APP_URL}/demo`} size="lg" variant="primary">
            Open the live demo
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href={APP_URL} size="lg" variant="secondary">
            Create free account
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-muted">
          The demo is a real workspace with example apps — no signup, one click.
        </p>
        <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {HERO_FACTS.map((fact) => (
            <li className="flex items-center gap-2" key={fact}>
              <span aria-hidden="true" className="size-1 rounded-full bg-accent-bright" />
              {fact}
            </li>
          ))}
        </ul>
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -top-16 h-64 bg-gradient-to-r from-accent/30 via-glow/15 to-accent/30 blur-3xl"
          />
          <ScreenshotFrame
            alt="AppBoard dashboard showing six apps from App Store and Google Play grouped in one workspace"
            className="relative"
            priority
            src="/images/panel/dashboard.png"
          />
        </div>
      </div>
    </section>
  );
}
