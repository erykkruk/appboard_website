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
        account to your first app in about a minute - and to a connected store
        whenever you want one-click publishing.
      </p>

      <h2>Sign in</h2>
      <p>
        AppBoard uses passwordless sign-in. Enter your email address and we send
        a one-time code; paste it back to open your workspace. There are no
        passwords to store or rotate.
      </p>
      <p>
        Want to look around before connecting a real account? Open the{" "}
        <a href={`${APP_URL}/demo`}>live demo</a> - a fully populated workspace
        with sample apps, listings, and reviews, no signup required.
      </p>

      <h2>Create your workspace</h2>
      <p>
        Every account starts with a workspace. A workspace is the container for
        your apps, store connections, settings, and encrypted credentials - and
        it is the boundary AppBoard uses to keep data isolated. You can create
        more workspaces later for separate teams or clients.
      </p>

      <h2>Add your first app</h2>
      <p>
        Paste a link to your app&apos;s App Store or Google Play page. AppBoard
        imports the listing in every language it ships, the screenshots at full
        size, the store rating and the reviews - no API credentials, no console.
        Not published yet? Choose &quot;Something new&quot; and start from a
        blank listing.
      </p>
      <p>
        From there the panel walks you through the flow: review the text the
        store serves, run the audit (listing score, the keywords you can win,
        what is wrong and what is good), accept or reject the proposed text
        fixes as diffs, open your screenshots in the editor, and publish.
      </p>

      <h2>Connect a store (optional)</h2>
      <p>
        Without a store connection you publish by copying the finished text
        into the console and pressing &quot;I pasted it into the store&quot;
        - AppBoard records the change in History and on the rank chart. Connect
        the store API when you want the rest done for you: one-click publishing
        to both stores, screenshot upload and review replies from the panel.
      </p>
      <ul>
        <li>
          <a href="/docs/connect-app-store">Connect App Store Connect</a> - with
          an App Store Connect API key.
        </li>
        <li>
          <a href="/docs/connect-google-play">Connect Google Play Console</a> -
          with a service account JSON.
        </li>
      </ul>
      <p>
        Store credentials are encrypted at rest; you can additionally lock them
        behind a passphrase-protected{" "}
        <a href="/docs/security">vault</a> that AppBoard&apos;s servers cannot
        open.
      </p>

      <blockquote>
        <p>
          <strong>Heads up:</strong> resetting the vault permanently wipes every
          stored credential - there is no recovery code. Save your passphrase in
          a password manager before you continue.
        </p>
      </blockquote>

      <h2>Explore the dashboard</h2>
      <p>
        Every app you add appears on the workspace dashboard with its platform,
        connection (link or API), version and pending-change count. Open any app to
        reach its listings, screenshots, history, reviews, and publish flow.
      </p>

      <ScreenshotFrame
        alt="AppBoard workspace dashboard showing connected apps across App Store and Google Play"
        src="/images/panel/dashboard.png"
      />

      <h2>What to do next</h2>
      <ol>
        <li>
          Open the app&apos;s <strong>Fixes</strong> screen and accept the text
          proposals the audit made, or{" "}
          <a href="/docs/listings">edit the listing</a> yourself with the store
          limits shown live.
        </li>
        <li>
          <a href="/docs/publishing">Publish your changes</a> - nothing reaches
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
