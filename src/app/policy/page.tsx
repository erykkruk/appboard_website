import { LegalPageLayout } from "@/components/layout";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata, SITE_NAME } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const LAST_UPDATED = "July 8, 2026";
const CONTACT_EMAIL = "contact@appboard.dev";

const DESCRIPTION =
  "How AppBoard collects, uses, and protects your data — including end-to-end encrypted store credentials for App Store Connect and Google Play.";

export const metadata: Metadata = buildPageMetadata({
  description: DESCRIPTION,
  languages: buildAlternates("/policy"),
  path: "/policy",
  title: "Privacy Policy",
});

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <LegalPageLayout
      lastUpdated={LAST_UPDATED}
      subtitle="This policy explains what data AppBoard collects, why, and how we keep it secure."
      title="Privacy Policy"
    >
      <p>
        {SITE_NAME} (&ldquo;AppBoard&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
        provides an App Store Optimization (ASO) platform that helps you manage
        app store listings, screenshots, metadata, reviews, and in-app products
        for the Apple App Store and Google Play from a single panel. This Privacy
        Policy describes how we handle your information when you use our website
        and application (together, the &ldquo;Service&rdquo;).
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Account information.</strong> When you create an account we
          collect your name, email address, and authentication credentials
          (passwords are stored only as salted hashes).
        </li>
        <li>
          <strong>Store credentials.</strong> To manage your listings we store
          the API credentials you provide — Google Play service account keys and
          App Store Connect API keys. These are held in an end-to-end encrypted
          vault (see &ldquo;How we protect store credentials&rdquo; below).
        </li>
        <li>
          <strong>App data.</strong> Metadata we synchronize from the connected
          stores on your behalf — app titles, descriptions, screenshots,
          categories, reviews, in-app products, and related listing content.
        </li>
        <li>
          <strong>Content you create.</strong> Drafts, notes, ASO profiles, and
          other content you add within the Service.
        </li>
        <li>
          <strong>Usage and technical data.</strong> Log data such as IP address,
          browser type, pages visited, and timestamps, used to operate and secure
          the Service.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To provide, operate, and maintain the Service.</li>
        <li>
          To connect to the Apple App Store and Google Play on your behalf and
          synchronize, edit, and publish your listing data as you direct.
        </li>
        <li>
          To generate AI-assisted suggestions for listings, replies, and research
          when you use those features.
        </li>
        <li>To secure the Service, prevent abuse, and troubleshoot issues.</li>
        <li>To communicate with you about your account and service updates.</li>
      </ul>

      <h2>How we protect store credentials</h2>
      <p>
        Store credentials are encrypted in an <strong>end-to-end encrypted
        vault</strong>. Your credentials are encrypted with a key derived from a
        passphrase that only you know; that passphrase is never transmitted to or
        stored on our servers. As a result, we cannot read your store credentials,
        and a compromise of our database alone would not expose them. Actions on
        your stores require you to unlock the vault with your passphrase during an
        active session.
      </p>

      <h2>Third-party services</h2>
      <p>
        We share data with third parties only as needed to operate the Service:
      </p>
      <ul>
        <li>
          <strong>Apple App Store Connect</strong> and{" "}
          <strong>Google Play</strong> — to read and publish your listing data
          using the credentials you provide.
        </li>
        <li>
          <strong>AI providers</strong> — when you use AI features, the relevant
          text (for example a listing draft or a review) is sent to our AI
          provider to generate a response. This content is not used to train
          third-party models.
        </li>
        <li>
          <strong>Infrastructure and hosting providers</strong> — to run and
          store data for the Service.
        </li>
      </ul>
      <p>
        Your use of the connected stores is also governed by Apple&rsquo;s and
        Google&rsquo;s respective terms and privacy policies.
      </p>

      <h2>How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with the
        service providers described above, when required by law, or to protect the
        rights, safety, and security of AppBoard and its users.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain your information for as long as your account is active or as
        needed to provide the Service. You may delete connected stores and
        credentials at any time, and you may request deletion of your account, at
        which point we delete or anonymize your data except where retention is
        required by law.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct,
        export, or delete your personal data, and to object to or restrict certain
        processing. To exercise these rights, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard measures — including encryption in transit,
        encryption at rest, and the end-to-end encrypted credential vault — to
        protect your data. No method of transmission or storage is completely
        secure, but we work continually to safeguard your information.
      </p>

      <h2>Cookies</h2>
      <p>
        We use strictly necessary cookies to keep you signed in and to operate the
        Service. We do not use advertising cookies.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        The Service is intended for developers and businesses and is not directed
        to children under 16. We do not knowingly collect personal data from
        children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &ldquo;Last updated&rdquo; date above and, where appropriate,
        notify you.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this Privacy Policy or your data, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPageLayout>
  );
}
