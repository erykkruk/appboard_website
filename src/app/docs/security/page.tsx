import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPage } from "@/lib/docs";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "security";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function SecurityPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        Store credentials — your App Store Connect API key and Google Play service
        account — are the most sensitive data in AppBoard. They live in an
        end-to-end encrypted vault that only you can unlock.
      </p>

      <h2>How the vault works</h2>
      <p>
        The vault&apos;s encryption key is derived from a{" "}
        <strong>passphrase you set</strong>, scoped to your workspace. Credentials
        are encrypted before they reach the database, and they can only be
        decrypted while the vault is unlocked with your passphrase. Store
        credentials cannot be saved outside the vault — there is no plaintext
        fallback.
      </p>

      <h2>Unlocking</h2>
      <p>
        You unlock the vault by entering your passphrase. While it&apos;s locked,
        AppBoard can&apos;t decrypt your keys, so any action that needs to reach a
        store is refused and the interface prompts you to unlock first. Unlock
        once and AppBoard can use the credentials for that session.
      </p>

      <h2>Resetting the vault</h2>
      <p>
        If you forget the passphrase, the only path forward is a reset — and a
        reset <strong>wipes the vault and every stored credential</strong>. There
        is no recovery code and no backdoor; that&apos;s what makes the vault
        end-to-end encrypted. After a reset you reconnect your stores and set a
        new passphrase.
      </p>

      <blockquote>
        <p>
          <strong>Heads up:</strong> resetting the vault permanently destroys all
          stored credentials with no recovery. Keep your passphrase in a password
          manager, and only reset if you&apos;re prepared to reconnect every
          store.
        </p>
      </blockquote>

      <h2>Practical tips</h2>
      <ul>
        <li>Store the passphrase in a password manager before you save any key.</li>
        <li>
          Expect to unlock the vault when you start working with store data in a
          new session.
        </li>
        <li>
          Losing the .p8 or service account JSON isn&apos;t catastrophic — you can
          revoke and regenerate them at the store and re-add the connection.
        </li>
      </ul>
    </DocsLayout>
  );
}
