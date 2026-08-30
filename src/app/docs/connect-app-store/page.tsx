import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "connect-app-store";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function ConnectAppStorePage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        AppBoard talks to Apple through the App Store Connect API. You generate a
        team API key once, hand AppBoard three values, and every app on the
        account becomes available to manage.
      </p>

      <h2>What you need</h2>
      <table>
        <thead>
          <tr>
            <th>Value</th>
            <th>Where it comes from</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Issuer ID</td>
            <td>Shown at the top of the Keys tab in App Store Connect.</td>
          </tr>
          <tr>
            <td>Key ID</td>
            <td>Assigned to the API key when you create it.</td>
          </tr>
          <tr>
            <td>Private key (.p8)</td>
            <td>The key file you download - Apple lets you download it once.</td>
          </tr>
        </tbody>
      </table>

      <h2>Generate the API key</h2>
      <ol>
        <li>
          In App Store Connect, open <strong>Users and Access</strong> →{" "}
          <strong>Integrations</strong> → <strong>App Store Connect API</strong>.
        </li>
        <li>
          Create a new key. Give it a name and an access role that can read and
          edit app metadata (Admin or App Manager).
        </li>
        <li>
          Copy the <strong>Issuer ID</strong> and the new key&apos;s{" "}
          <strong>Key ID</strong>.
        </li>
        <li>
          Download the <strong>.p8</strong> private key file and keep it - Apple
          only offers the download once.
        </li>
      </ol>

      <blockquote>
        <p>
          <strong>Heads up:</strong> the .p8 file can&apos;t be re-downloaded. If
          you lose it, revoke the key in App Store Connect and generate a new
          one.
        </p>
      </blockquote>

      <h2>Add the connection in AppBoard</h2>
      <ol>
        <li>Open your workspace and start a new App Store connection.</li>
        <li>
          Paste the Issuer ID and Key ID, then upload the .p8 file. AppBoard
          encrypts all three in the vault before they touch the database.
        </li>
        <li>
          Save. AppBoard verifies the key and imports the apps it can see on the
          account.
        </li>
      </ol>
      <p>
        If this is your first credential, AppBoard walks you through creating the{" "}
        <a href="/docs/security">encrypted vault</a>. The vault must be unlocked
        for AppBoard to use the key - while it is locked, store calls are
        rejected and the UI prompts you to unlock.
      </p>

      <h2>After it connects</h2>
      <p>
        Your apps land on the dashboard with their current version. From there
        you can <a href="/docs/listings">edit listings</a> per language, manage{" "}
        <a href="/docs/screenshots">screenshots</a>, and{" "}
        <a href="/docs/publishing">push version localizations</a> back to Apple.
        Nothing is sent to the App Store until you publish it.
      </p>
    </DocsLayout>
  );
}
