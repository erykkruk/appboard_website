import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "ai-assistant";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function AiAssistantPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        AppBoard&apos;s AI features run through OpenRouter using{" "}
        <strong>your own API key</strong>. You choose the provider and model, you
        control the spend, and AI never writes to a store without your approval.
      </p>

      <h2>Set up your key</h2>
      <ol>
        <li>Create an OpenRouter account and generate an API key.</li>
        <li>
          Add it in your workspace <strong>Settings</strong>. The key is stored
          per workspace and encrypted like any other credential.
        </li>
        <li>
          Optionally set a default model, and override it per feature when a
          particular task needs something bigger or cheaper.
        </li>
      </ol>

      <h2>Pick your model</h2>
      <p>
        Because it runs on OpenRouter, you can use essentially any model
        OpenRouter offers. Set a workspace default and override it for a specific
        feature — for example a stronger model for translations and a faster one
        for quick review replies.
      </p>

      <h2>What the assistant can do</h2>
      <ul>
        <li>Draft and refine listing descriptions.</li>
        <li>Translate metadata into other languages.</li>
        <li>Suggest keyword sets.</li>
        <li>
          Draft <a href="/docs/reviews">review replies</a> from the inbox.
        </li>
        <li>
          Power the deeper analysis in <a href="/docs/research">Research</a>.
        </li>
      </ul>

      <h2>You stay in control</h2>
      <p>
        AI output always lands as a draft or a suggestion. Nothing reaches the
        App Store or Google Play until you review it and{" "}
        <a href="/docs/publishing">publish</a> — the assistant proposes, you
        approve.
      </p>

      <blockquote>
        <p>
          <strong>Heads up:</strong> without an OpenRouter key, AI features stay
          off, but the rest of AppBoard — including heuristic review
          categorization in Research — keeps working.
        </p>
      </blockquote>
    </DocsLayout>
  );
}
