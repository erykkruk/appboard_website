import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPage } from "@/lib/docs";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "history-and-rollback";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function HistoryPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        AppBoard keeps a GitHub-style version history for your listing fields.
        Every published change is recorded so you can see what changed, when, and
        revert it in one click.
      </p>

      <ScreenshotFrame
        alt="AppBoard change history with red and green field diffs and rollback controls"
        src="/images/panel/app-history.png"
      />

      <h2>What gets recorded</h2>
      <p>
        Each time you publish, AppBoard stores the old and new value for every
        field that changed, tagged with its language. The history view lists
        these entries newest-first and lets you filter by language and by field,
        so finding a specific change in a busy multi-locale app stays quick.
      </p>

      <h2>Reading a diff</h2>
      <p>
        Every entry shows a red/green diff: the previous value in red, the new
        value in green. It reads like a code review, which makes it obvious
        whether a title tweak or a full-description rewrite is what actually
        shipped.
      </p>

      <h2>Rolling back</h2>
      <p>
        Found a change you want to undo? Roll it back with one click. Rollback
        doesn&apos;t touch the live store directly — it restores the old value
        into your <a href="/docs/listings">draft</a> and marks that language as
        dirty.
      </p>
      <ol>
        <li>Open the history entry you want to revert.</li>
        <li>Roll it back — the old value returns to your draft.</li>
        <li>
          Review the restored draft, then{" "}
          <a href="/docs/publishing">publish</a> it to make the rollback live.
        </li>
      </ol>

      <blockquote>
        <p>
          <strong>Heads up:</strong> rolling back updates your draft, not the
          store. The reverted value only goes live after you publish it, which
          keeps you in control of every write to the store.
        </p>
      </blockquote>

      <h2>Draft diffs</h2>
      <p>
        Alongside published history, AppBoard can show a live diff of your
        current draft versus what&apos;s on the store, per language — the same
        pending changes you&apos;ll see on the{" "}
        <a href="/docs/publishing">publish page</a> before you push.
      </p>
    </DocsLayout>
  );
}
