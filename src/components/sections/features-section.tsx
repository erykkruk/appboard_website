import {
  ChartIcon,
  ChatIcon,
  ComingSoonBadge,
  FeatureCard,
  ImageIcon,
  LockIcon,
  PlugIcon,
  Reveal,
  RocketIcon,
  SectionHeading,
  ShieldIcon,
  SparklesIcon,
} from "@/components/ui";
import { APP_URL, DISCORD_URL } from "@/lib/seo";

import type { JSX, ReactNode } from "react";

interface Feature {
  comingSoon?: boolean;
  description: string;
  href: string;
  icon: ReactNode;
  linkLabel?: string;
  title: string;
}

const ICON_CLASS = "size-5";

const FEATURES: Feature[] = [
  {
    description:
      "Link App Store Connect and Google Play Console once. AppBoard pulls in every app and every localization you already have.",
    href: "/docs/connect-app-store",
    icon: <PlugIcon className={ICON_CLASS} />,
    title: "Connect once, import everything",
  },
  {
    description:
      "Design and export store graphics in your browser at exact device sizes. No account, no install, free forever.",
    href: `${APP_URL}/editor`,
    icon: <ImageIcon className={ICON_CLASS} />,
    title: "Free screenshot editor",
  },
  {
    description:
      "Track keyword positions with day-over-day movement, compare markets and analyze competitors on any store app.",
    href: "/docs/research",
    icon: <ChartIcon className={ICON_CLASS} />,
    title: "Keyword and market research",
  },
  {
    description:
      "Both stores' reviews in one inbox with rating, version and device context, plus AI-drafted replies you approve.",
    href: "/docs/reviews",
    icon: <ChatIcon className={ICON_CLASS} />,
    title: "Reviews in one inbox",
  },
  {
    description:
      "Batch publish metadata and graphics to both stores, as a draft or straight for review, with a per-item report.",
    href: "/docs/publishing",
    icon: <RocketIcon className={ICON_CLASS} />,
    title: "Publish from one dashboard",
  },
  {
    description:
      "Store credentials sit in an end-to-end encrypted vault. AppBoard's servers never see them in plaintext.",
    href: "/docs/security",
    icon: <LockIcon className={ICON_CLASS} />,
    title: "Encrypted credentials vault",
  },
  {
    description:
      "Free while in beta and source-available forever. Run the whole thing on your own server whenever you want to.",
    href: "/docs/self-hosting",
    icon: <ShieldIcon className={ICON_CLASS} />,
    title: "Open source and self-hostable",
  },
  {
    comingSoon: true,
    description:
      "Propose the features you need and vote on everyone else's, so the roadmap is decided by the people shipping apps.",
    href: DISCORD_URL,
    icon: <SparklesIcon className={ICON_CLASS} />,
    linkLabel: "Shape it on Discord",
    title: "A wishlist you vote on",
  },
];

export function FeaturesSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="features">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Features" title="Everything else, briefly" />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <Reveal delayMs={(index % 4) * 80} key={feature.title}>
              <FeatureCard
                badge={feature.comingSoon ? <ComingSoonBadge /> : undefined}
                description={feature.description}
                href={feature.href}
                icon={feature.icon}
                linkLabel={feature.linkLabel}
                title={feature.title}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
