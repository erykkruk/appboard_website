import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "research";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function ResearchPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        Research works on <strong>any</strong> store app - not just the ones you
        have connected. Point it at a competitor, an app you&apos;re considering,
        or your own listing to pull rankings, reviews, and market data.
      </p>

      <h2>What you can run</h2>
      <ul>
        <li>
          <strong>App search</strong> - find an app on the App Store or Google
          Play to research.
        </li>
        <li>
          <strong>Review scraping</strong> - pull recent reviews and categorize
          the complaints heuristically. This works even without an AI key.
        </li>
        <li>
          <strong>AI analysis</strong> - summarize themes and sentiment across
          the reviews you scraped.
        </li>
        <li>
          <strong>Keyword tracking</strong> - check where an app ranks for the
          search terms you care about.
        </li>
        <li>
          <strong>Market comparison</strong> - compare apps across a market.
        </li>
        <li>
          <strong>Competitor compare</strong> - put two apps side by side.
        </li>
        <li>
          <strong>Visual analysis</strong> - analyze store screenshots.
        </li>
      </ul>

      <h2>Heuristics vs. AI</h2>
      <p>
        Complaint categorization runs on a keyword-bucket heuristic, so you get
        useful review breakdowns immediately, with no API key required. Add your
        own <a href="/docs/ai-assistant">OpenRouter key</a> to unlock deeper AI
        analysis and summaries on top of the raw data.
      </p>

      <h2>Limits</h2>
      <table>
        <thead>
          <tr>
            <th>Capability</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tracked keywords</td>
            <td>Up to 15; positions checked within the top 50</td>
          </tr>
          <tr>
            <td>Single-pass review analysis</td>
            <td>Up to 300 reviews</td>
          </tr>
          <tr>
            <td>Google Play reviews</td>
            <td>250 standard, up to 1,500 in deep mode</td>
          </tr>
          <tr>
            <td>Competitor compare</td>
            <td>120 reviews per side</td>
          </tr>
          <tr>
            <td>Visual analysis</td>
            <td>Up to 6 images</td>
          </tr>
        </tbody>
      </table>

      <h2>Deep mode</h2>
      <p>
        For a fuller picture, deep mode fetches more reviews and analyzes them in
        parallel chunks before combining the results. It costs more time and, for
        AI steps, more tokens - reach for it when a single pass isn&apos;t enough
        signal.
      </p>

      <blockquote>
        <p>
          <strong>Heads up:</strong> Apple&apos;s public review feed is limited,
          so App Store review scraping returns a capped, recent sample rather than
          an app&apos;s full review history.
        </p>
      </blockquote>
    </DocsLayout>
  );
}
