import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, Eyebrow, ScreenshotFrame } from "@/components/ui";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface TourExtraImage {
  alt: string;
  caption: string;
  src: string;
}

interface TourStop {
  alt: string;
  docsHref: string;
  docsLabel: string;
  extraImages?: TourExtraImage[];
  eyebrow: string;
  image: string;
  lead: string;
  specs: string[];
  title: string;
}

const TOUR_STOPS: TourStop[] = [
  {
    alt: "AppBoard listings editor with title, short description and full description fields, per-language tabs and live character counters",
    docsHref: "/docs/listings",
    docsLabel: "Read the docs: Listings & languages",
    eyebrow: "Listings",
    image: "/images/panel/app-listings-editor.png",
    lead: "Title, short description, full description, keywords, promo text and what's new — every field of every language in one editor. Character counters tick against each store's real limits as you type, drafts sit next to what's actually live in the store, and languages you touched are marked until you push them. Nothing goes to a store until you explicitly publish.",
    specs: [
      "Live counters vs store limits — 30-char titles, 80-char short description, 4000-char description",
      "Dirty-language markers show exactly what still needs a push",
      "Drafts and remote values side by side, per language",
    ],
    title: "Every language in one editor — not eight console tabs",
  },
  {
    alt: "AppBoard change history with GitHub-style red and green diffs per field and language, and rollback buttons",
    docsHref: "/docs/history-and-rollback",
    docsLabel: "Read the docs: History & rollback",
    eyebrow: "History",
    image: "/images/panel/app-history.png",
    lead: "Every published change is recorded per field and per language: the old value in red, the new value in green, with a timestamp — exactly like a code review for your store listing. Before you publish, the same diff view shows what's about to change. And when an update turns out to be a mistake, one click rolls the field back into your draft.",
    specs: [
      "Field-level records for every language, filterable by field and language",
      "Red/green diffs on every entry — no more \"what did we change in May?\"",
      "One-click rollback restores the old value into your draft, never straight to the store",
    ],
    title: "An undo button for your store listing",
  },
  {
    alt: "AppBoard reviews inbox showing Google Play reviews with ratings, device info, replies and AI Draft buttons",
    docsHref: "/docs/reviews",
    docsLabel: "Read the docs: Reviews",
    eyebrow: "Reviews",
    image: "/images/panel/app-reviews.png",
    lead: "App Store and Google Play reviews land in one inbox with the full context — rating, app version, device and market. Reply inline, or hit AI Draft and get a suggested response in the reviewer's language that you edit and approve before it ships. The unreplied counter on your dashboard keeps the queue honest.",
    specs: [
      "Both stores in one inbox with rating distribution at a glance",
      "AI-drafted replies in the reviewer's language — you always approve",
      "Device, OS and app-version context on every review",
    ],
    title: "Answer both stores' reviews before your coffee cools",
  },
  {
    alt: "AppBoard screenshot manager showing phone screenshots per language with device size requirements",
    docsHref: "/docs/screenshots",
    docsLabel: "Read the docs: Screenshots & graphics",
    eyebrow: "Screenshots",
    image: "/images/panel/app-screenshots-en.png",
    lead: "Every screenshot, icon and feature graphic lives in one grid, organised per device type and per language — with each store's exact pixel requirements printed right where you upload. Reorder by dragging, replace in place, and ship graphics together with your metadata instead of hunting for the newest export in your downloads folder.",
    specs: [
      "Per device and per language — phones, 7\" and 10\" tablets, every iPhone and iPad size",
      "Exact size requirements shown inline — 1284×2778 phone shots, 1024×500 feature graphic, 512×512 icon",
      "Reorder, replace and publish together with your listing",
    ],
    title: "Screenshots managed like assets, not email attachments",
  },
  {
    alt: "AppBoard screenshot editor with layered scene: gradient background, Android device frame, headline text and export at exact dimensions",
    docsHref: "/docs/screenshots",
    docsLabel: "Read the docs: the graphics editor",
    extraImages: [
      {
        alt: "Split Panorama dialog cutting one wide image into three consecutive store screenshots",
        caption: "Panorama split — one wide visual becomes 2–10 consecutive screenshots",
        src: "/images/panel/panorama.png",
      },
      {
        alt: "Crop Screenshot dialog with portrait and landscape presets and the exact 1242×2688 pixel target",
        caption: "Crop with per-device presets — upload anything, export the exact pixels",
        src: "/images/panel/crop.png",
      },
    ],
    eyebrow: "Graphics editor",
    image: "/images/panel/editor.png",
    lead: "Stores reject graphics that are a pixel off, so the built-in editor never lets you export a wrong size. Compose scenes in the browser — background, device frame, your app screenshot, headline text — and export straight into the listing at the exact dimensions each store demands. Wide panorama? Upload it once and split it into 2–10 consecutive screenshots. Got a raw screenshot in the wrong size? The crop tool locks to per-device presets, from iPhone 3.5\" to iPad Pro 12.9\" to Android tablets.",
    specs: [
      "Scene editor with device frames, backgrounds and text — saved per language and device",
      "Language variants — regenerate the same scene for every locale without redesigning",
      "Panorama split and pixel-perfect crop, so the store accepts the upload on the first try",
    ],
    title: "A graphics editor that knows every store size by heart",
  },
  {
    alt: "AppBoard publish screen with pending listing changes per language and buttons to push to Google Play as draft or send for review",
    docsHref: "/docs/publishing",
    docsLabel: "Read the docs: Publishing",
    eyebrow: "Publishing",
    image: "/images/panel/app-publish.png",
    lead: "Before anything ships you see the exact pending changes — which fields, which languages, both stores. Push to Google Play as a draft or send changes for review; AppBoard respects the managed-publishing timing you set in the Play Console. On the App Store it pushes your version localizations. Batch-publish everything and get a per-item report of what landed and what needs attention.",
    specs: [
      "Pending-changes view per field and per language before every push",
      "Draft push or send-for-review — your store's release flow, respected",
      "Per-item publish report — no silent failures",
    ],
    title: "Publishing that feels like a deploy, not a leap of faith",
  },
];

function TourStopRow({
  index,
  stop,
}: {
  index: number;
  stop: TourStop;
}): JSX.Element {
  const imageFirst = index % 2 === 1;

  return (
    <div>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={cn(imageFirst && "lg:order-2")}>
          <Eyebrow>{stop.eyebrow}</Eyebrow>
          <h3 className="display mt-4 text-4xl text-foreground sm:text-5xl">
            {stop.title}
          </h3>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">{stop.lead}</p>
          <ul className="mt-5 space-y-2.5">
            {stop.specs.map((spec) => (
              <li className="flex gap-3 text-sm leading-relaxed text-muted" key={spec}>
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-bright"
                />
                {spec}
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
        <ScreenshotFrame
          alt={stop.alt}
          className={cn(imageFirst && "lg:order-1")}
          src={stop.image}
        />
      </div>
      {stop.extraImages ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {stop.extraImages.map((extra) => (
            <figure key={extra.src}>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  alt={extra.alt}
                  className="w-full"
                  height={1000}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src={extra.src}
                  width={1600}
                />
              </div>
              <figcaption className="mt-2.5 text-center text-sm text-muted">
                {extra.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ProductTourSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="tour">
      <div className="mx-auto max-w-6xl space-y-28">
        {TOUR_STOPS.map((stop, index) => (
          <TourStopRow index={index} key={stop.eyebrow} stop={stop} />
        ))}
      </div>
    </section>
  );
}
