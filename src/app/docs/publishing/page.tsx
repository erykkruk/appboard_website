import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPage } from "@/lib/docs";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "publishing";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function PublishingPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        Publishing is the deliberate step that pushes your drafts to the store.
        Until you publish, everything you edit stays local to AppBoard — nothing
        is sent automatically.
      </p>

      <ScreenshotFrame
        alt="AppBoard publish page showing pending changes and push options per store"
        src="/images/panel/app-publish.png"
      />

      <h2>Review pending changes</h2>
      <p>
        The publish page lists every pending change per field and per language,
        so you can see exactly what will be sent before you commit. Changes that
        match the live store value aren&apos;t listed — only real differences show
        up.
      </p>

      <h2>Google Play</h2>
      <p>
        For Play apps you can:
      </p>
      <ul>
        <li>
          <strong>Push as draft</strong> — send the changes to the store without
          submitting them, so you can finish review inside the Play Console.
        </li>
        <li>
          <strong>Send changes for review</strong> — submit the update to
          Google.
        </li>
      </ul>
      <p>
        Whether an approved change goes live immediately or waits is governed by
        your Play Console&apos;s managed publishing mode (manual, automatic, or
        scheduled), not by AppBoard.
      </p>

      <h2>App Store</h2>
      <p>
        For App Store apps, AppBoard pushes the version localizations for your
        changed languages back to App Store Connect. A dedicated action lets you
        publish every dirty version localization at once when you&apos;re working
        across many locales.
      </p>

      <h2>Batch publishing</h2>
      <p>
        When you push several items together, AppBoard runs them as a batch and
        returns a <strong>per-item report</strong> — each field/language pair
        shows whether it succeeded or failed, so a single rejected item
        doesn&apos;t leave you guessing about the rest.
      </p>

      <blockquote>
        <p>
          <strong>Heads up:</strong> publishing sends data to the live store.
          Review the pending-changes list first, and remember that what happens
          after Google approves depends on your Play Console publishing mode.
        </p>
      </blockquote>

      <h2>After publishing</h2>
      <p>
        Every published change is recorded. Head to{" "}
        <a href="/docs/history-and-rollback">History &amp; rollback</a> to see the
        before/after diff for each field and language, and to roll a change back
        into your draft if you change your mind.
      </p>
    </DocsLayout>
  );
}
