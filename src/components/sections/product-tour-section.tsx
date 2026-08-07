import Link from "next/link";

import {
  ArrowRightIcon,
  Eyebrow,
  Reveal,
  ScreenshotFrame,
  SectionHeading,
} from "@/components/ui";
import { cn } from "@/lib/utils";

import { DiffDemo } from "./diff-demo";
import { TranslateDemo } from "./translate-demo";

import type { JSX, ReactNode } from "react";

interface TourStop {
  docsHref: string;
  docsLabel: string;
  eyebrow: string;
  lead: string;
  points: string[];
  title: string;
  visual: ReactNode;
}

const TOUR_STOPS: TourStop[] = [
  {
    docsHref: "/docs/listings",
    docsLabel: "Listings and languages",
    eyebrow: "One editor",
    lead: "Connect App Store Connect and Google Play once and AppBoard pulls every localization from both stores. From then on the title, subtitle, description, keywords and what's new for every language live in a single editor, as drafts.",
    points: [
      "Character counters tick against each store's real limits as you type",
      "Languages you touched stay marked until you push them",
      "Drafts sit next to what is actually live in the store",
    ],
    title: "Every language in one editor",
    visual: (
      <ScreenshotFrame
        alt="AppBoard listings editor with title, short description and full description fields, per-language tabs and live character counters"
        src="/images/panel/app-listings-editor.png"
      />
    ),
  },
  {
    docsHref: "/docs/publishing",
    docsLabel: "Publishing",
    eyebrow: "Diff before publish",
    lead: "Before anything reaches a store you see a GitHub-style diff: exactly which fields changed, in which language, old value against what is live right now. Then push to both stores from one dashboard and get a per-item report.",
    points: [
      "Red and green, field by field, language by language",
      "Push as a draft or send straight for review",
      "Nothing leaves your draft until you press publish",
    ],
    title: "See exactly what changes before it goes live",
    visual: <DiffDemo />,
  },
  {
    docsHref: "/docs/ai-assistant",
    docsLabel: "AI assistant",
    eyebrow: "AI translation",
    lead: "Translation that understands ASO instead of translating word for word. Titles, subtitles and keywords are localized with your store limits and keyword intent in mind, and brand terms you mark as do-not-translate stay untouched.",
    points: [
      "Per-field do-not-translate terms for brand and product names",
      "Free-text instructions to steer tone and glossary",
      "Runs on your own OpenRouter key, with any model you pick",
    ],
    title: "AI translation that speaks ASO, not just German",
    visual: <TranslateDemo />,
  },
  {
    docsHref: "/docs/history-and-rollback",
    docsLabel: "History and rollback",
    eyebrow: "History",
    lead: "Every published change is recorded per field and per language with a timestamp, so you can answer what did we change in May without scrolling Slack. When an update turns out to be a mistake, one click puts the old value back in your draft.",
    points: [
      "Filter the log by field and by language",
      "One-click rollback into your draft, never straight to the store",
      "A full audit trail of who changed what, and when",
    ],
    title: "An undo button for your store listing",
    visual: (
      <ScreenshotFrame
        alt="AppBoard change history with GitHub-style red and green diffs per field and language, and rollback buttons"
        src="/images/panel/app-history.png"
      />
    ),
  },
  {
    docsHref: "/docs/screenshots",
    docsLabel: "Screenshots and graphics",
    eyebrow: "Screenshots",
    lead: "Screenshots, icons and feature graphics live in one grid, per device and per language, with each store's exact pixel requirements printed where you upload. Design them in the built-in editor and they export at the size the store demands.",
    points: [
      "Per language and per device, from iPhone to 10 inch tablets",
      "Built-in editor with device frames, backgrounds and headlines",
      "Ship graphics together with the metadata, in the same publish",
    ],
    title: "Screenshots managed per language, not per download folder",
    visual: (
      <ScreenshotFrame
        alt="AppBoard screenshot manager showing phone screenshots per language with device size requirements"
        src="/images/panel/app-screenshots-en.png"
      />
    ),
  },
  {
    docsHref: "/docs/research",
    docsLabel: "Research and reviews",
    eyebrow: "Research",
    lead: "AppBoard reads the reviews for you and groups the complaints into themes, so you learn what keeps breaking without reading hundreds of them. The same research works on competitors, alongside keyword positions and market comparisons.",
    points: [
      "Review themes, sentiment and what users love or hate most",
      "Keyword rank tracking with day-over-day movement",
      "Works on any store app, not only the ones you connected",
    ],
    title: "Find out what users actually complain about",
    visual: (
      <ScreenshotFrame
        alt="AppBoard review analysis with an AI summary, positive and negative sentiment counts, features users love against features they criticize, and a ranked list of top user irritations"
        src="/images/panel/research-analysis.png"
      />
    ),
  },
];

function TourStopRow({ index, stop }: { index: number; stop: TourStop }): JSX.Element {
  const imageFirst = index % 2 === 1;

  return (
    <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(imageFirst && "lg:order-2")}>
        <Eyebrow>{stop.eyebrow}</Eyebrow>
        <h3 className="display mt-4 text-4xl text-foreground sm:text-5xl">
          {stop.title}
        </h3>
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
      </div>
      <div className={cn(imageFirst && "lg:order-1")}>{stop.visual}</div>
    </Reveal>
  );
}

export function ProductTourSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="tour">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Inside the panel"
            title="This is what you actually get"
          />
        </Reveal>
        <div className="mt-16 space-y-28">
          {TOUR_STOPS.map((stop, index) => (
            <TourStopRow index={index} key={stop.eyebrow} stop={stop} />
          ))}
        </div>
      </div>
    </section>
  );
}
