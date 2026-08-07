import { Reveal, SectionHeading } from "@/components/ui";

import type { JSX } from "react";

interface Step {
  description: string;
  title: string;
}

const STEPS: Step[] = [
  {
    description:
      "Link App Store Connect and Google Play Console once. Your keys go straight into an end-to-end encrypted vault.",
    title: "Connect your stores",
  },
  {
    description:
      "Every field, every language, one editor. Design store graphics in the browser at the exact sizes each store demands.",
    title: "Edit listings and screenshots",
  },
  {
    description:
      "Check the diff, then push to both stores in one batch. Every change is versioned and one click from a rollback.",
    title: "Publish everywhere",
  },
  {
    description:
      "Both stores' reviews land in one inbox. Keyword positions, market data and competitor research sit next to them.",
    title: "Track reviews and keywords",
  },
];

export function HowItWorksSection(): JSX.Element {
  return (
    <section
      className="scroll-mt-24 border-y border-line bg-surface px-4 py-24 sm:px-6"
      id="how-it-works"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Four steps, no console hopping"
          />
        </Reveal>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal as="li" delayMs={index * 90} key={step.title}>
              <span className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-base font-semibold text-accent-bright">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
