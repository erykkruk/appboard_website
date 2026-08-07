import {
  BranchIcon,
  ChartIcon,
  ChatIcon,
  FeatureCard,
  ImageIcon,
  LockIcon,
  PlugIcon,
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
      "App Store and Google Play today. Huawei AppGallery, Samsung Galaxy Store, Amazon Appstore, Xiaomi GetApps, RuStore and ONE Store are on the way.",
    href: "/docs/connect-app-store",
    icon: <PlugIcon className={ICON_CLASS} />,
    title: "Multi-store, one workspace",
  },
  {
    description:
      "AI groups complaints into themes, tells you what users keep hitting, and drafts replies in the reviewer's language.",
    href: "/docs/reviews",
    icon: <ChatIcon className={ICON_CLASS} />,
    title: "AI review analysis",
  },
  {
    description:
      "Diffs on every field and language, a full change log, and one-click rollback when an update turns out wrong.",
    href: "/docs/history-and-rollback",
    icon: <BranchIcon className={ICON_CLASS} />,
    title: "Version history",
  },
  {
    description:
      "Write and translate descriptions, get ASO keyword ideas, run on your own OpenRouter key with any model. You approve everything.",
    href: "/docs/ai-assistant",
    icon: <SparklesIcon className={ICON_CLASS} />,
    title: "AI assistant",
  },
  {
    description:
      "Track keyword positions, compare markets and analyze competitors on any store app, not just your own.",
    href: "/docs/research",
    icon: <ChartIcon className={ICON_CLASS} />,
    title: "Keyword and market research",
  },
  {
    description:
      "Design and export store graphics in your browser, free and without an account, at exact device sizes.",
    href: "/docs/screenshots",
    icon: <ImageIcon className={ICON_CLASS} />,
    title: "Free screenshot editor",
  },
  {
    description:
      "Store credentials live in an end-to-end encrypted vault. AppBoard's servers never see them in plaintext.",
    href: "/docs/security",
    icon: <LockIcon className={ICON_CLASS} />,
    title: "Encrypted credentials vault",
  },
  {
    description:
      "Open source, and every part runs in the web panel. Nothing to install, and you can self-host the whole thing.",
    href: "/docs/self-hosting",
    icon: <ShieldIcon className={ICON_CLASS} />,
    title: "Open source and self-hostable",
  },
];

export function FeaturesSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="features">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Features" title="Short version" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
