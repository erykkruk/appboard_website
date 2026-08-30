import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "reviews";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function ReviewsPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        The reviews inbox brings App Store and Google Play reviews together in one
        place, so you can triage feedback and reply without switching consoles.
      </p>

      <ScreenshotFrame
        alt="AppBoard reviews inbox combining App Store and Google Play with AI Draft reply buttons"
        src="/images/panel/app-reviews.png"
      />

      <h2>One inbox for both stores</h2>
      <p>
        Reviews from both platforms land in a single list. A rating distribution
        summarizes how your app is scoring, and an unreplied counter shows how
        many reviews still need a response so nothing slips through.
      </p>

      <h2>Replying</h2>
      <p>
        Reply to a review inline, right from the inbox. Your response is sent back
        to the originating store, so a Play review gets a Play reply and an App
        Store review gets an App Store reply.
      </p>

      <h2>AI-drafted replies</h2>
      <p>
        Every review has an <strong>AI Draft</strong> button. It generates a
        suggested response you can edit before sending - useful for working
        through a backlog of feedback quickly while keeping a human in the loop.
      </p>

      <blockquote>
        <p>
          <strong>Heads up:</strong> an AI draft is a suggestion, not an
          auto-reply. Nothing is sent to the store until you review it and hit
          send.
        </p>
      </blockquote>

      <h2>From reviews to insight</h2>
      <p>
        Looking for patterns rather than individual replies? The{" "}
        <a href="/docs/research">Research</a> tools scrape and categorize reviews
        in bulk - including for competitor apps - to surface the complaints and
        themes behind your ratings.
      </p>
    </DocsLayout>
  );
}
