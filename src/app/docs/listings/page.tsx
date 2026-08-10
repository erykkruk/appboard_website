import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "listings";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function ListingsPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        The listing editor is where you write the metadata that shows up on your
        store page. Every field is edited per language, so you can tune your
        Spanish subtitle without touching the English one.
      </p>

      <ScreenshotFrame
        alt="AppBoard listing editor with language tabs and live character counters"
        src="/images/panel/app-listings-editor.png"
      />

      <h2>Drafts and remote values</h2>
      <p>
        AppBoard keeps two copies of every field: the <strong>remote</strong>{" "}
        value currently live on the store, and your <strong>draft</strong>. You
        edit the draft freely; the remote value only changes when you
        deliberately <a href="/docs/publishing">publish</a>. A language whose
        draft differs from remote is flagged as <strong>dirty</strong> so you can
        see at a glance what still needs pushing.
      </p>

      <h2>Fields</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title / name</td>
            <td>Your app&apos;s display name in the store.</td>
          </tr>
          <tr>
            <td>Short description</td>
            <td>The tagline shown above the fold.</td>
          </tr>
          <tr>
            <td>Full description</td>
            <td>The long-form pitch on the store page.</td>
          </tr>
          <tr>
            <td>Keywords</td>
            <td>Search terms used for App Store indexing.</td>
          </tr>
          <tr>
            <td>Promotional text</td>
            <td>Editable without a new release on the App Store.</td>
          </tr>
          <tr>
            <td>What&apos;s new</td>
            <td>Release notes attached to a version.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Available fields vary by store — the editor only shows what the platform
        supports for that app.
      </p>

      <h2>Character counters</h2>
      <p>
        Each store enforces its own length limits. The editor shows a live
        counter for every field and warns you as you approach the cap, so you
        never submit metadata the store would reject.
      </p>

      <h2>Working across languages</h2>
      <p>
        Switch languages with the tabs at the top of the editor. Each language is
        an independent draft with its own dirty marker, which keeps large
        multi-locale listings manageable. When a draft looks right, move on to{" "}
        <a href="/docs/publishing">publishing</a> — nothing you type here reaches
        the store automatically.
      </p>
      <p>
        Need help filling a field? The{" "}
        <a href="/docs/ai-assistant">AI assistant</a> can draft descriptions,
        translations, and keyword sets for you to review before they land in a
        draft.
      </p>
    </DocsLayout>
  );
}
