import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "workspace";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function WorkspacePage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        A workspace is the boundary around everything you manage in AppBoard — its
        apps, store connections, credentials, and settings. This page covers the
        controls that sit at the workspace level.
      </p>

      <h2>Multiple workspaces</h2>
      <p>
        You can run more than one workspace, which is handy for separating teams,
        clients, or brands. Each workspace has its own apps, its own encrypted{" "}
        <a href="/docs/security">vault</a>, and its own settings — data never
        crosses between them.
      </p>

      <h2>Feature flags</h2>
      <p>
        Modules can be toggled per workspace with feature flags, so you can turn
        off parts of AppBoard a given workspace doesn&apos;t need — for example
        hiding Research or the AI assistant. Some features depend on others: when
        you disable a prerequisite, the features that rely on it switch off too.
      </p>

      <h2>App groups</h2>
      <p>
        Most products ship on both platforms. App groups link the Android and iOS
        variants of the same app so you can see and manage them as one product
        instead of two disconnected listings.
      </p>

      <h2>Purchases and subscriptions</h2>
      <p>
        AppBoard surfaces an overview of your in-app purchases and subscriptions
        alongside your listings, so pricing and product catalog live next to the
        metadata you&apos;re optimizing.
      </p>

      <h2>Ratings and compliance</h2>
      <p>
        Workspace tools also cover the compliance metadata stores require —
        editing age ratings and privacy declarations — so the non-marketing parts
        of a listing stay in one place too.
      </p>

      <h2>Settings</h2>
      <p>
        Workspace settings are where you add your{" "}
        <a href="/docs/ai-assistant">OpenRouter API key</a> for AI features and
        manage the other per-workspace configuration. Combined with feature flags
        and the vault, settings let each workspace run exactly the surface area it
        needs.
      </p>
    </DocsLayout>
  );
}
