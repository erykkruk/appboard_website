import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  CheckIcon,
  ScreenshotFrame,
  SectionHeading,
} from "@/components/ui";
import { OPEN_SOURCE_CONTENT } from "@/lib/i18n/content/opensource";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

import type { Locale } from "@/lib/i18n/locales";
import type { JSX } from "react";

export function ResearchSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  const content = OPEN_SOURCE_CONTENT[locale].research;

  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="research">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-14 lg:grid-cols-[2fr_3fr]">
          <div>
            <SectionHeading
              align="left"
              description={content.description}
              eyebrow={content.eyebrow}
              title={content.title}
            />
            <ul className="mt-10 space-y-6">
              {content.points.map((point) => (
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
            <Link
              className="anim-underline mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright"
              href={content.docsHref}
            >
              {content.docsLabel}
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
          <ScreenshotFrame
            alt={content.heroAlt}
            src="/images/panel/research-analysis.png"
          />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {content.gallery.map((item) => (
            <figure key={item.src}>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  alt={item.alt}
                  className="w-full"
                  height={1000}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src={item.src}
                  width={1600}
                />
              </div>
              <figcaption className="mt-2.5 text-center text-sm text-muted">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
