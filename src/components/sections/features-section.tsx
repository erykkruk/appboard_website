import {
  BranchIcon,
  ChartIcon,
  ChatIcon,
  FeatureCard,
  ImageIcon,
  LockIcon,
  PlugIcon,
  RocketIcon,
  SectionHeading,
  ShieldIcon,
  SparklesIcon,
} from "@/components/ui";

import type { JSX, ReactNode } from "react";

interface Feature {
  description: string;
  icon: ReactNode;
  title: string;
}

const ICON_CLASS = "size-5";

const FEATURES: Feature[] = [
  {
    description:
      "Link App Store Connect and Google Play Console once. AppBoard keeps both stores at your fingertips from a single panel.",
    icon: <PlugIcon className={ICON_CLASS} />,
    title: "Store connections",
  },
  {
    description:
      "Edit titles, descriptions, and keywords per language with draft and publish flows, GitHub-style diffs, full change history, and rollback.",
    icon: <BranchIcon className={ICON_CLASS} />,
    title: "Listings with version control",
  },
  {
    description:
      "Generate and translate descriptions, get ASO keyword suggestions, and draft review replies. Powered by OpenRouter — use any model you like.",
    icon: <SparklesIcon className={ICON_CLASS} />,
    title: "AI assistant",
  },
  {
    description:
      "Design screenshot scenes in the built-in editor, then ship them straight from your pipeline with CLI and CI uploads.",
    icon: <ImageIcon className={ICON_CLASS} />,
    title: "Screenshot studio",
  },
  {
    description:
      "Track keyword positions in the top 50, compare markets, and analyze competitors to find the gaps worth chasing.",
    icon: <ChartIcon className={ICON_CLASS} />,
    title: "Keyword and market research",
  },
  {
    description:
      "Read and answer reviews from both stores in one inbox — with AI-drafted responses whenever you want them.",
    icon: <ChatIcon className={ICON_CLASS} />,
    title: "Review management",
  },
  {
    description:
      "Push metadata to the App Store and Google Play in one batch and get a per-item report of what shipped and what needs attention.",
    icon: <RocketIcon className={ICON_CLASS} />,
    title: "Batch publishing",
  },
  {
    description:
      "Manage privacy declarations, age ratings, and in-app purchases alongside your listings — no console hopping.",
    icon: <ShieldIcon className={ICON_CLASS} />,
    title: "Compliance toolkit",
  },
  {
    description:
      "Multi-workspace teams with roles, feature flags, and an end-to-end encrypted credentials vault. Your store keys stay yours.",
    icon: <LockIcon className={ICON_CLASS} />,
    title: "Teams and security",
  },
];

export function FeaturesSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-20 sm:px-6" id="features">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description="Everything you need to run ASO seriously — from the first store connection to the next batch publish."
          eyebrow="Features"
          title="The whole ASO workflow, in one place"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard
              description={feature.description}
              icon={feature.icon}
              key={feature.title}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
