import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  CheckIcon,
  ScreenshotFrame,
  SectionHeading,
} from "@/components/ui";

import type { JSX } from "react";

interface ResearchPoint {
  description: string;
  title: string;
}

const RESEARCH_POINTS: ResearchPoint[] = [
  {
    description:
      "Point AppBoard at any app in the store — yours or a competitor's. It scrapes the listing and reviews, and the AI turns hundreds of them into what users love, what they criticize, and their top irritations — with verbatim quotes as evidence.",
    title: "AI review mining on any app",
  },
  {
    description:
      "Deep mode fetches the full review set — up to 1,500 on Google Play, ~500 on the App Store — and map-reduces it through the model, so the report reflects the whole tail, not just the last angry week.",
    title: "Deep mode for the full picture",
  },
  {
    description:
      "Keyword coverage is checked against your actual title and description, and positions are tracked within the store's top 50 — per market, with a reason why each keyword matters.",
    title: "Keywords, coverage and positions",
  },
  {
    description:
      "Bring your own OpenRouter key and pick any model. Star distribution and complaint grouping even work with no AI key at all.",
    title: "Your key, your model",
  },
];

interface GalleryItem {
  alt: string;
  caption: string;
  src: string;
}

const RESEARCH_GALLERY: GalleryItem[] = [
  {
    alt: "AI-analyzed complaint themes for Instagram with severity badges and verbatim user quotes: missing features, UX/UI, login and account, crashes",
    caption: "Complaint themes with severity and verbatim quotes — the why behind the stars",
    src: "/images/panel/research-themes.png",
  },
  {
    alt: "Quick wins list and ASO metadata audit for Instagram, with keyword coverage tags showing which keywords are missing from title and description",
    caption: "Quick wins + metadata audit — which keywords your listing is missing",
    src: "/images/panel/research-quickwins.png",
  },
  {
    alt: "ASO keyword positions table for Instagram: each keyword with its App Store rank in the top 50 and why it matters",
    caption: "Keyword positions in the store's top 50, with the reasoning per keyword",
    src: "/images/panel/research-keywords.png",
  },
  {
    alt: "Star distribution and heuristic issue categories for TikTok built from 500 scraped App Store reviews",
    caption: "Star distribution + issue buckets from raw reviews — works without an AI key",
    src: "/images/panel/research-categories.png",
  },
  {
    alt: "Scraped App Store reviews list for Instagram with ratings, versions and full review text",
    caption: "The raw material: full scraped review set, kept for your own reading",
    src: "/images/panel/research-reviews.png",
  },
];

export function ResearchSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="research">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-14 lg:grid-cols-[2fr_3fr]">
          <div>
            <SectionHeading
              align="left"
              description="Most ASO tools stop at keywords. AppBoard turns store reviews and rankings into a research engine — below, a real deep run on Instagram and TikTok."
              eyebrow="Research and AI"
              title="Learn from every app on the store"
            />
            <ul className="mt-10 space-y-6">
              {RESEARCH_POINTS.map((point) => (
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
              href="/docs/research"
            >
              Read the docs: Research
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
          <ScreenshotFrame
            alt="AppBoard AI research report on Instagram: features users love, features users criticize, and top user irritations distilled from reviews"
            src="/images/panel/research-analysis.png"
          />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {RESEARCH_GALLERY.map((item) => (
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
