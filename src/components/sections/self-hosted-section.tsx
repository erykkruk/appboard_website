import {
  BranchIcon,
  ButtonLink,
  DiscordIcon,
  FeatureCard,
  Highlight,
  LockIcon,
  RocketIcon,
  SectionHeading,
  ShieldIcon,
} from "@/components/ui";
import { DISCORD_URL, GITHUB_URL } from "@/lib/seo";

import type { JSX, ReactNode } from "react";

interface SelfHostedPoint {
  description: string;
  icon: ReactNode;
  title: string;
}

const ICON_CLASS = "size-5";

const POINTS: SelfHostedPoint[] = [
  {
    description:
      "Deploy the whole stack on your own VPS or cloud with Docker. Your database, your store credentials, your rules — nothing leaves your infrastructure.",
    icon: <LockIcon className={ICON_CLASS} />,
    title: "Own your data",
  },
  {
    description:
      "The full source is public — read it, audit it, and adapt it to your workflow. Free for personal and non-commercial use.",
    icon: <BranchIcon className={ICON_CLASS} />,
    title: "Source-available",
  },
  {
    description:
      "One backend, one panel, one Postgres. Runs on anything that runs Docker — a spare VPS, your homelab, or an existing cluster. No vendor lock-in.",
    icon: <RocketIcon className={ICON_CLASS} />,
    title: "Deploy anywhere",
  },
  {
    description:
      "Store keys live in an end-to-end encrypted vault on your server. Self-hosting keeps your App Store and Google Play credentials entirely under your control.",
    icon: <ShieldIcon className={ICON_CLASS} />,
    title: "Credentials stay yours",
  },
];

export function SelfHostedSection(): JSX.Element {
  return (
    <section
      className="scroll-mt-24 border-y border-line bg-surface px-4 py-24 sm:px-6"
      id="self-hosted"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description="AppBoard is source-available and self-hostable. Run it on your own servers and keep full control of your data — free for personal and non-commercial use."
          eyebrow="Self-hosted"
          title={
            <>
              Own your data. Run it on your <Highlight>own servers</Highlight>
            </>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point) => (
            <FeatureCard
              description={point.description}
              icon={point.icon}
              key={point.title}
              title={point.title}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={GITHUB_URL} size="lg" variant="primary">
              View on GitHub
            </ButtonLink>
            <ButtonLink href="/docs" size="lg" variant="secondary">
              Self-hosting guide
            </ButtonLink>
            <ButtonLink href={DISCORD_URL} size="lg" variant="secondary">
              <DiscordIcon className="size-4" />
              Join our Discord
            </ButtonLink>
          </div>
          <p className="text-sm text-muted">
            Source-available under the PolyForm Noncommercial License — free for
            personal &amp; non-commercial use.
          </p>
        </div>
      </div>
    </section>
  );
}
