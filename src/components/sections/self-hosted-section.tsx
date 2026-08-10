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
import { OPEN_SOURCE_CONTENT } from "@/lib/i18n/content/opensource";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";
import { DISCORD_URL, GITHUB_URL } from "@/lib/seo";

import type { Locale } from "@/lib/i18n/locales";
import type { JSX, ReactNode } from "react";

const ICON_CLASS = "size-5";

const POINT_ICONS: ReactNode[] = [
  <LockIcon className={ICON_CLASS} key="own-your-data" />,
  <BranchIcon className={ICON_CLASS} key="source-available" />,
  <RocketIcon className={ICON_CLASS} key="deploy-anywhere" />,
  <ShieldIcon className={ICON_CLASS} key="credentials-stay-yours" />,
];

export function SelfHostedSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  const content = OPEN_SOURCE_CONTENT[locale].selfHosted;

  return (
    <section
      className="scroll-mt-24 border-y border-line bg-surface px-4 py-24 sm:px-6"
      id="self-hosted"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={
            <>
              {`${content.titleLead} `}
              <Highlight>{content.titleHighlight}</Highlight>
            </>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.points.map((point, index) => (
            <FeatureCard
              description={point.description}
              icon={POINT_ICONS[index]}
              key={point.title}
              title={point.title}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={GITHUB_URL} size="lg" variant="primary">
              {content.githubCta}
            </ButtonLink>
            <ButtonLink href={content.docsHref} size="lg" variant="secondary">
              {content.docsCta}
            </ButtonLink>
            <ButtonLink href={DISCORD_URL} size="lg" variant="secondary">
              <DiscordIcon className="size-4" />
              {content.discordCta}
            </ButtonLink>
          </div>
          <p className="text-sm text-muted">{content.licenseNote}</p>
        </div>
      </div>
    </section>
  );
}
