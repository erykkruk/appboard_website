import { CheckIcon, SectionHeading } from "@/components/ui";

import type { JSX } from "react";

interface ResearchPoint {
  description: string;
  title: string;
}

const RESEARCH_POINTS: ResearchPoint[] = [
  {
    description:
      "Point AppBoard at any app in the store — yours or a competitor. AI categorizes complaints from reviews and surfaces quick wins you can act on.",
    title: "AI review mining",
  },
  {
    description:
      "See where your phrases rank within the top 50 search results, tracked per store and per market.",
    title: "Keyword positions",
  },
  {
    description:
      "Compare how an app performs across countries to decide which markets deserve localized listings first.",
    title: "Market comparison",
  },
  {
    description:
      "Line up competitors side by side to spot the metadata and screenshot gaps worth exploiting.",
    title: "Competitor analysis",
  },
];

interface ComplaintBar {
  label: string;
  share: string;
  width: string;
}

const COMPLAINT_BARS: ComplaintBar[] = [
  { label: "Sync issues", share: "34%", width: "w-[85%]" },
  { label: "Onboarding confusion", share: "22%", width: "w-[55%]" },
  { label: "Pricing complaints", share: "17%", width: "w-[42%]" },
  { label: "Missing dark mode", share: "9%", width: "w-[22%]" },
];

function ResearchMockup(): JSX.Element {
  return (
    <div aria-hidden="true" className="relative">
      <div className="absolute -inset-6 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_70%)] blur-2xl" />
      <div className="relative rounded-2xl border border-line bg-surface p-6 shadow-xl shadow-glow/5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Complaint categories</span>
          <span className="rounded-full border border-glow/40 bg-glow/10 px-2.5 py-0.5 text-xs text-glow">
            AI analyzed
          </span>
        </div>
        <ul className="mt-5 space-y-4">
          {COMPLAINT_BARS.map((bar) => (
            <li key={bar.label}>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted">{bar.label}</span>
                <span className="font-mono text-foreground">{bar.share}</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-panel">
                <div className={`h-2 rounded-full bg-gradient-to-r from-accent to-glow ${bar.width}`} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Quick win
          </p>
          <p className="mt-1.5 text-sm text-foreground">
            Mention offline sync in the first description paragraph — 1 in 3
            complaints is about sync expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ResearchSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-20 sm:px-6" id="research">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            description="Most ASO tools stop at keywords. AppBoard turns store reviews and rankings into a research engine for your roadmap and your listings."
            eyebrow="Research and AI"
            title="Learn from every app on the store"
          />
          <ul className="mt-10 space-y-6">
            {RESEARCH_POINTS.map((point) => (
              <li className="flex gap-4" key={point.title}>
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-bright">
                  <CheckIcon className="size-3.5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ResearchMockup />
      </div>
    </section>
  );
}
