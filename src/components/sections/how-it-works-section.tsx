import { SectionHeading } from "@/components/ui";

import type { JSX } from "react";

interface Step {
  description: string;
  title: string;
}

const STEPS: Step[] = [
  {
    description:
      "Connect App Store Connect and Google Play Console. Credentials are protected by an end-to-end encrypted vault — AppBoard never sees them in plaintext.",
    title: "Connect your stores",
  },
  {
    description:
      "Edit metadata per language, polish screenshots in the studio, and let the AI assistant generate, translate, and suggest ASO phrases backed by research.",
    title: "Optimize your listings",
  },
  {
    description:
      "Batch publish to both stores and get a per-item report. Every change is versioned with diffs, so you can review history and roll back anytime.",
    title: "Publish with confidence",
  },
];

export function HowItWorksSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 border-y border-line bg-surface px-4 py-20 sm:px-6" id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description="Three steps from scattered store consoles to a single, versioned ASO workflow."
          eyebrow="How it works"
          title="Connect. Optimize. Publish."
        />
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li className="relative rounded-2xl border border-line bg-panel/40 p-6" key={step.title}>
              <span className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-base font-semibold text-accent-bright">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
