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
  href: string;
  icon: ReactNode;
  title: string;
}

const ICON_CLASS = "size-5";

const FEATURES: Feature[] = [
  {
    description:
      "Link App Store Connect (API key) and Google Play Console (service account) once. Apps from both stores sit side by side — including manually registered draft apps Google's API won't show.",
    href: "/docs/connect-app-store",
    icon: <PlugIcon className={ICON_CLASS} />,
    title: "Store connections",
  },
  {
    description:
      "Edit titles, descriptions, and keywords per language with drafts, live character counters, GitHub-style diffs, full change history, and one-click rollback.",
    href: "/docs/listings",
    icon: <BranchIcon className={ICON_CLASS} />,
    title: "Listings with version control",
  },
  {
    description:
      "Generate and translate descriptions, get ASO keyword suggestions, and draft review replies. Runs on your own OpenRouter key — any model, and you approve everything.",
    href: "/docs/ai-assistant",
    icon: <SparklesIcon className={ICON_CLASS} />,
    title: "AI assistant",
  },
  {
    description:
      "Compose store graphics in the browser — device frames, backgrounds, headlines, language variants — plus panorama splitting and pixel-perfect crop for every device size.",
    href: "/docs/screenshots",
    icon: <ImageIcon className={ICON_CLASS} />,
    title: "Graphics editor",
  },
  {
    description:
      "Track keyword positions in the top 50, compare markets, mine reviews for complaint themes, and analyze competitors — works on any store app, not just yours.",
    href: "/docs/research",
    icon: <ChartIcon className={ICON_CLASS} />,
    title: "Keyword and market research",
  },
  {
    description:
      "Read and answer reviews from both stores in one inbox — with rating distribution, device context, and AI-drafted responses whenever you want them.",
    href: "/docs/reviews",
    icon: <ChatIcon className={ICON_CLASS} />,
    title: "Review management",
  },
  {
    description:
      "Push metadata to the App Store and Google Play in one batch — as a draft or straight to review — and get a per-item report of what shipped.",
    href: "/docs/publishing",
    icon: <RocketIcon className={ICON_CLASS} />,
    title: "Batch publishing",
  },
  {
    description:
      "Manage privacy declarations, age ratings, and in-app purchases alongside your listings — no console hopping.",
    href: "/docs/workspace",
    icon: <ShieldIcon className={ICON_CLASS} />,
    title: "Compliance toolkit",
  },
  {
    description:
      "Multi-workspace teams, feature flags, app groups for Android + iOS pairs, and an end-to-end encrypted credentials vault. Your store keys stay yours.",
    href: "/docs/security",
    icon: <LockIcon className={ICON_CLASS} />,
    title: "Teams and security",
  },
];

export function FeaturesSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-20 sm:px-6" id="features">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description="Open source, and everything runs in the web panel — no installs, no plugins, no desktop app. Every card links to the docs."
          eyebrow="Features"
          title="The whole ASO workflow, in one place"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard
              description={feature.description}
              href={feature.href}
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
