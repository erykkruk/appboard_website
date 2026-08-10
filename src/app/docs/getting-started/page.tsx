import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { APP_URL, buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "getting-started";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function GettingStartedPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        AppBoard brings App Store Connect and Google Play Console into one panel
        so you can edit metadata, manage screenshots, publish changes, and mine
        reviews without switching consoles. This page takes you from a fresh
        account to your first connected app in about ten minutes.
      </p>

      <h2>Sign in</h2>
      <p>
        AppBoard uses passwordless sign-in. Enter your email address and we send
        a one-time code; paste it back to open your workspace. There are no
        passwords to store or rotate.
      </p>
      <p>
        Want to look around before connecting a real account? Open the{" "}
        <a href={`${APP_URL}/demo`}>live demo</a> — a fully populated workspace
        with sample apps, listings, and reviews, no signup required.
      </p>

      <h2>Create your workspace</h2>
      <p>
        Every account starts with a workspace. A workspace is the container for
        your apps, store connections, settings, and encrypted credentials — and
        it is the boundary AppBoard uses to keep data isolated. You can create
        more workspaces later for separate teams or clients.
      </p>

      <h2>Connect your first store</h2>
      <p>
        Apps flow into AppBoard from a store connection. Pick the store you
        publish on and follow the dedicated guide:
      </p>
      <ul>
        <li>
          <a href="/docs/connect-app-store">Connect App Store Connect</a> — with
          an App Store Connect API key.
        </li>
        <li>
          <a href="/docs/connect-google-play">Connect Google Play Console</a> —
          with a service account JSON.
        </li>
      </ul>
      <p>
        The first time you save store credentials, AppBoard asks you to set up
        the <a href="/docs/security">encrypted vault</a>. Credentials cannot be
        stored outside it, so keep the passphrase somewhere safe.
      </p>

      <blockquote>
        <p>
          <strong>Heads up:</strong> resetting the vault permanently wipes every
          stored credential — there is no recovery code. Save your passphrase in
          a password manager before you continue.
        </p>
      </blockquote>

      <h2>Explore the dashboard</h2>
      <p>
        Once a store is connected, your apps appear on the workspace dashboard
        with their platform, version, and pending-change count. Open any app to
        reach its listings, screenshots, history, reviews, and publish flow.
      </p>

      <ScreenshotFrame
        alt="AppBoard workspace dashboard showing connected apps across App Store and Google Play"
        src="/images/panel/dashboard.png"
      />

      <h2>What to do next</h2>
      <ol>
        <li>
          <a href="/docs/listings">Edit a listing</a> in one language and watch
          the character counters and dirty-state markers.
        </li>
        <li>
          <a href="/docs/publishing">Publish your changes</a> — nothing reaches
          a store until you push it.
        </li>
        <li>
          <a href="/docs/research">Run research</a> on a competitor to see
          keyword rankings and review complaints.
        </li>
      </ol>
    </DocsLayout>
  );
}
