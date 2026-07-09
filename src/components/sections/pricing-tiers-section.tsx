import { ButtonLink, CheckIcon } from "@/components/ui";
import { APP_URL, GITHUB_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface PricingTier {
  description: string;
  features: string[];
  highlighted?: boolean;
  name: string;
  regularPrice?: string;
}

const TIERS: PricingTier[] = [
  {
    description: "For indie developers shipping their first apps.",
    features: [
      "1 workspace",
      "Up to 3 connected apps",
      "Listings editor with history and rollback",
      "Reviews inbox",
      "Publishing to both stores",
    ],
    name: "Free",
  },
  {
    description: "For developers who treat ASO as a growth channel.",
    features: [
      "Unlimited connected apps",
      "AI assistant via OpenRouter — any model",
      "Keyword, market, and competitor research",
      "Screenshot studio with CLI and CI uploads",
      "Batch publishing with per-item reports",
    ],
    highlighted: true,
    name: "Pro",
    regularPrice: "$10",
  },
  {
    description: "For teams managing portfolios together.",
    features: [
      "Everything in Pro",
      "Multiple workspaces with roles",
      "End-to-end encrypted credentials vault",
      "Feature flags per workspace",
      "Priority support",
    ],
    name: "Team",
  },
];

export function PricingTiersSection(): JSX.Element {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl rounded-2xl border border-accent/30 bg-accent/10 px-6 py-4 text-center">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Early access:</span> AppBoard is free
            while in beta. The tiers below show the planned structure — pricing will
            be announced before general availability.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <article
              className={cn(
                "flex flex-col rounded-2xl border p-8",
                tier.highlighted
                  ? "border-accent/60 bg-panel shadow-xl shadow-accent/10"
                  : "border-line bg-panel/50",
              )}
              key={tier.name}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">{tier.name}</h2>
                {tier.highlighted ? (
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-bright">
                    Most popular
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <p className="mt-6">
                {tier.regularPrice ? (
                  <span className="mr-2 text-2xl font-medium text-muted line-through decoration-accent-bright/70">
                    {tier.regularPrice}
                  </span>
                ) : null}
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  $0
                </span>
                <span className="ml-2 text-sm text-muted">during beta</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li className="flex items-start gap-3 text-sm text-muted" key={feature}>
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent-bright" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                className="mt-8 w-full"
                href={APP_URL}
                variant={tier.highlighted ? "primary" : "secondary"}
              >
                Get started
              </ButtonLink>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-accent/30 bg-accent/10 px-6 py-4 text-center">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Prefer to self-host?</span> AppBoard
            is source-available and free for personal &amp; non-commercial use.{" "}
            <a
              className="anim-underline font-medium text-accent-bright"
              href={GITHUB_URL}
            >
              View it on GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
