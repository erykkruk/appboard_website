import Link from "next/link";

import { ArrowRightIcon, Eyebrow, ScreenshotFrame, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface TourStop {
  alt: string;
  docsHref: string;
  docsLabel: string;
  eyebrow: string;
  image: string;
  lead: string;
  title: string;
}

const TOUR_STOPS: TourStop[] = [
  {
    alt: "AppBoard listings editor with title, short description and full description fields, per-language tabs and live character counters",
    docsHref: "/docs/listings",
    docsLabel: "Listings and languages",
    eyebrow: "Listings",
    image: "/images/panel/app-listings-editor.png",
    lead: "Title, description, keywords, promo text and what's new for every language in one editor, with character counters ticking against each store's real limits. Nothing reaches a store until you publish it.",
    title: "Every language in one editor",
  },
  {
    alt: "AppBoard screenshot editor with layered scene: gradient background, Android device frame, headline text and export at exact dimensions",
    docsHref: "/docs/screenshots",
    docsLabel: "Screenshots and graphics",
    eyebrow: "Graphics",
    image: "/images/panel/editor.png",
    lead: "Compose screenshots and feature graphics in the browser: background, device frame, headline. Export at the exact pixels each store demands, so the upload is accepted the first time.",
    title: "A graphics editor that knows every store size",
  },
  {
    alt: "AppBoard change history with GitHub-style red and green diffs per field and language, and rollback buttons",
    docsHref: "/docs/history-and-rollback",
    docsLabel: "History and rollback",
    eyebrow: "History",
    image: "/images/panel/app-history.png",
    lead: "Every published change is recorded per field and per language, old value in red, new value in green. When an update turns out to be a mistake, one click puts the old text back in your draft.",
    title: "An undo button for your store listing",
  },
  {
    alt: "AppBoard reviews inbox showing Google Play reviews with ratings, device info, replies and AI Draft buttons",
    docsHref: "/docs/reviews",
    docsLabel: "Reviews",
    eyebrow: "Reviews",
    image: "/images/panel/app-reviews.png",
    lead: "App Store and Google Play reviews arrive in one inbox with rating, version and device context. Reply inline, or let AI draft a response in the reviewer's language that you approve before it ships.",
    title: "Answer both stores from one inbox",
  },
];

function TourStopRow({ index, stop }: { index: number; stop: TourStop }): JSX.Element {
  const imageFirst = index % 2 === 1;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(imageFirst && "lg:order-2")}>
        <Eyebrow>{stop.eyebrow}</Eyebrow>
        <h3 className="display mt-4 text-4xl text-foreground sm:text-5xl">
          {stop.title}
        </h3>
        <p className="mt-5 text-[15px] leading-relaxed text-muted">{stop.lead}</p>
        <Link
          className="anim-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright"
          href={stop.docsHref}
        >
          {stop.docsLabel}
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
      <ScreenshotFrame
        alt={stop.alt}
        className={cn(imageFirst && "lg:order-1")}
        src={stop.image}
      />
    </div>
  );
}

export function ProductTourSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="tour">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Inside the panel"
          title="This is what you actually get"
        />
        <div className="mt-16 space-y-24">
          {TOUR_STOPS.map((stop, index) => (
            <TourStopRow index={index} key={stop.eyebrow} stop={stop} />
          ))}
        </div>
      </div>
    </section>
  );
}
