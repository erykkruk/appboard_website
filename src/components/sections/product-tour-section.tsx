import Link from "next/link";

import {
  ArrowRightIcon,
  Eyebrow,
  Reveal,
  ScreenshotFrame,
  SectionHeading,
  VideoDemo,
} from "@/components/ui";
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

import { DiffDemo } from "./diff-demo";
import { TranslateDemo } from "./translate-demo";

import type { TourStopContent } from "@/lib/i18n/content/home";
import type { JSX, ReactNode } from "react";

interface TourStop extends TourStopContent {
  visual: ReactNode;
  wide?: boolean;
}

const WIDE_STOP_INDEX = 4;

function tourVisual(
  index: number,
  stop: TourStopContent,
  locale: Locale,
): ReactNode {
  switch (index) {
    case 1:
      return <DiffDemo locale={locale} />;
    case 2:
      return <TranslateDemo locale={locale} />;
    case 3:
      return (
        <ScreenshotFrame alt={stop.visualAlt} src="/images/panel/app-history.png" />
      );
    case WIDE_STOP_INDEX:
      return (
        <VideoDemo
          caption={stop.videoCaption}
          height={800}
          poster="/videos/editor-demo-poster.jpg"
          src="/videos/editor-demo.mp4"
          title={stop.visualAlt}
          width={1280}
        />
      );
    case 5:
      return (
        <ScreenshotFrame
          alt={stop.visualAlt}
          src="/images/panel/research-analysis.png"
        />
      );
    default:
      return (
        <ScreenshotFrame
          alt={stop.visualAlt}
          src="/images/panel/app-listings-editor.png"
        />
      );
  }
}

function tourStops(locale: Locale): TourStop[] {
  return HOME_CONTENT[locale].tour.stops.map((stop, index) => ({
    ...stop,
    visual: tourVisual(index, stop, locale),
    ...(index === WIDE_STOP_INDEX ? { wide: true } : {}),
  }));
}

function TourCopy({ stop }: { stop: TourStop }): JSX.Element {
  return (
    <>
      <Eyebrow>{stop.eyebrow}</Eyebrow>
      <h3 className="display mt-4 text-4xl text-foreground sm:text-5xl">{stop.title}</h3>
      <p className="mt-5 text-[15px] leading-relaxed text-muted">{stop.lead}</p>
      <ul className="mt-5 space-y-2.5">
        {stop.points.map((point) => (
          <li className="flex gap-3 text-sm leading-relaxed text-muted" key={point}>
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-bright"
            />
            {point}
          </li>
        ))}
      </ul>
      <Link
        className="anim-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright"
        href={stop.docsHref}
      >
        {stop.docsLabel}
        <ArrowRightIcon className="size-3.5" />
      </Link>
    </>
  );
}

function TourStopRow({ index, stop }: { index: number; stop: TourStop }): JSX.Element {
  if (stop.wide) {
    return (
      <Reveal>
        <div className="mx-auto max-w-3xl text-center [&_p]:mx-auto [&_ul]:inline-block [&_ul]:text-left">
          <div className="flex flex-col items-center">
            <TourCopy stop={stop} />
          </div>
        </div>
        <div className="mt-12">{stop.visual}</div>
      </Reveal>
    );
  }

  const imageFirst = index % 2 === 1;

  return (
    <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(imageFirst && "lg:order-2")}>
        <TourCopy stop={stop} />
      </div>
      <div className={cn(imageFirst && "lg:order-1")}>{stop.visual}</div>
    </Reveal>
  );
}

export function ProductTourSection({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  const copy = HOME_CONTENT[locale].tour;

  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="tour">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        </Reveal>
        <div className="mt-16 space-y-28">
          {tourStops(locale).map((stop, index) => (
            <TourStopRow index={index} key={stop.eyebrow} stop={stop} />
          ))}
        </div>
      </div>
    </section>
  );
}
