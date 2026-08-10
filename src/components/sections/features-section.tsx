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
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type SiteLocale } from "@/lib/i18n/locales";

import type { JSX, ReactNode } from "react";

const ICON_CLASS = "size-5";

const COMING_SOON_INDEX = 7;

function featureIcon(index: number): ReactNode {
  switch (index) {
    case 1:
      return <ImageIcon className={ICON_CLASS} />;
    case 2:
      return <ChartIcon className={ICON_CLASS} />;
    case 3:
      return <ChatIcon className={ICON_CLASS} />;
    case 4:
      return <RocketIcon className={ICON_CLASS} />;
    case 5:
      return <LockIcon className={ICON_CLASS} />;
    case 6:
      return <ShieldIcon className={ICON_CLASS} />;
    case COMING_SOON_INDEX:
      return <SparklesIcon className={ICON_CLASS} />;
    default:
      return <PlugIcon className={ICON_CLASS} />;
  }
}

export function FeaturesSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: SiteLocale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].features;

  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="features">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((feature, index) => (
            <Reveal delayMs={(index % 4) * 80} key={feature.title}>
              <FeatureCard
                badge={index === COMING_SOON_INDEX ? <ComingSoonBadge locale={locale} /> : undefined}
                description={feature.description}
                href={feature.href}
                icon={featureIcon(index)}
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
