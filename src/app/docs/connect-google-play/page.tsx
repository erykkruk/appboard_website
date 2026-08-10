import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "connect-google-play";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function ConnectGooglePlayPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        AppBoard connects to Google Play through a service account that you
        invite into your Play Console. The service account&apos;s JSON key is the
        credential AppBoard uses to read and update your listings.
      </p>

      <h2>Create and invite the service account</h2>
      <ol>
        <li>
          In the Google Cloud project linked to your Play Console, create a
          service account and generate a <strong>JSON key</strong> for it.
        </li>
        <li>
          In the Play Console, under <strong>Users and permissions</strong>,
          invite the service account&apos;s email and grant it access to view app
          information and edit store listings.
        </li>
        <li>
          Start a new Google Play connection in AppBoard and upload the JSON key.
          It is encrypted in the <a href="/docs/security">vault</a> before it is
          stored.
        </li>
      </ol>

      <h2>Register draft apps manually</h2>
      <p>
        Google&apos;s Play Developer API only returns apps that have at least one
        published or in-review release. Apps that are still in draft are
        invisible to the API, so they won&apos;t import automatically.
      </p>
      <p>
        For those, AppBoard supports <strong>manual package registration</strong>
        : add the app&apos;s package name yourself and AppBoard tracks it
        alongside the discovered apps. Once the app has a release Google exposes,
        it behaves like any other connected app.
      </p>

      <h2>Full re-import</h2>
      <p>
        If your local apps have drifted from what&apos;s on the account — stale
        entries, a reorganized console, or a fresh start — run a{" "}
        <strong>full re-import</strong>. AppBoard wipes the locally stored apps
        for that store and fetches everything fresh from the account.
      </p>

      <blockquote>
        <p>
          <strong>Heads up:</strong> a full re-import removes the local apps for
          that store before re-fetching. Any local-only entries, including
          manually registered draft packages, need to be re-added afterward.
        </p>
      </blockquote>

      <h2>Publishing to Play</h2>
      <p>
        When you <a href="/docs/publishing">publish</a>, AppBoard can push your
        changes as a draft or send them for review. Managed publishing modes —
        manual, automatic, or scheduled — are controlled in the Play Console
        itself, so AppBoard respects whatever you have configured there.
      </p>
    </DocsLayout>
  );
}
