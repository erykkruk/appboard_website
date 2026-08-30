import { LegalPageLayout } from "@/components/layout";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata, SITE_NAME } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const LAST_UPDATED = "July 8, 2026";
const CONTACT_EMAIL = "contact@appboard.dev";

const DESCRIPTION =
  "The terms that govern your use of AppBoard - the ASO platform for managing App Store and Google Play listings from one panel.";

export const metadata: Metadata = buildPageMetadata({
  description: DESCRIPTION,
  languages: buildAlternates("/terms"),
  path: "/terms",
  title: "Terms of Service",
});

export default function TermsOfServicePage(): JSX.Element {
  return (
    <LegalPageLayout
      lastUpdated={LAST_UPDATED}
      subtitle="These terms govern your access to and use of AppBoard. By using the Service, you agree to them."
      title="Terms of Service"
    >
      <h2>1. Acceptance of terms</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) form a binding agreement
        between you and {SITE_NAME} (&ldquo;AppBoard&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;). By creating an account or using the Service, you agree
        to these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>2. The Service</h2>
      <p>
        AppBoard is an App Store Optimization platform that lets you manage app
        store listings, screenshots, metadata, reviews, and in-app products for
        the Apple App Store and Google Play from a single panel. We may add,
        change, or remove features over time.
      </p>

      <h2>3. Accounts</h2>
      <p>
        You are responsible for the information you provide, for maintaining the
        confidentiality of your credentials - including your vault passphrase -
        and for all activity under your account. You must be at least 16 years old
        and able to form a binding contract to use the Service.
      </p>
      <p>
        <strong>Your vault passphrase cannot be recovered by us.</strong> Because
        store credentials are end-to-end encrypted, if you lose your passphrase we
        cannot restore access to the encrypted data, and you may need to reset the
        vault and re-enter your credentials.
      </p>

      <h2>4. Connected stores and authorization</h2>
      <p>
        When you connect a store, you authorize AppBoard to access and act on that
        store on your behalf using the credentials you provide - for example, to
        read, edit, and publish listing data as you direct. You represent that you
        are authorized to grant this access and that your use complies with the
        terms of Apple App Store Connect and Google Play. Your relationship with
        Apple and Google is governed by their respective agreements.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service in violation of any law or third-party rights.</li>
        <li>
          Upload or publish content that is unlawful, infringing, or that you are
          not authorized to submit to a store.
        </li>
        <li>
          Attempt to gain unauthorized access to the Service, other accounts, or
          our systems, or interfere with their operation.
        </li>
        <li>
          Reverse engineer, resell, or abuse the Service or its rate limits.
        </li>
      </ul>

      <h2>6. Your content</h2>
      <p>
        You retain all rights to the content and credentials you provide. You
        grant us a limited license to host, process, and transmit that content
        solely to operate the Service for you. You are responsible for the
        accuracy and legality of content you publish to the stores.
      </p>

      <h2>7. AI features</h2>
      <p>
        AI-generated suggestions are provided as assistance only and may be
        inaccurate. You are responsible for reviewing and approving any content
        before publishing it to a store.
      </p>

      <h2>8. Fees</h2>
      <p>
        AppBoard is currently offered free of charge during its beta. If we
        introduce paid plans, we will provide notice and the applicable pricing
        and billing terms before any charges apply.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        The Service, including its software, design, and trademarks, is owned by
        AppBoard and its licensors and is protected by law. These Terms do not
        grant you any right to our intellectual property except the limited right
        to use the Service.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        without warranties of any kind, whether express or implied, including
        fitness for a particular purpose and non-infringement. We do not warrant
        that the Service will be uninterrupted, error-free, or that store
        publishing will always succeed.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, AppBoard will not be liable for
        any indirect, incidental, special, consequential, or punitive damages, or
        for any loss of data, revenue, or profits, arising from your use of the
        Service.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the Service and delete your account at any time. We may
        suspend or terminate your access if you violate these Terms or to protect
        the Service. On termination, your right to use the Service ends and we may
        delete your data as described in our{" "}
        <a href="/policy">Privacy Policy</a>.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise the
        &ldquo;Last updated&rdquo; date above and, where appropriate, notify you.
        Continued use of the Service after changes take effect constitutes
        acceptance of the updated Terms.
      </p>

      <h2>14. Contact us</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPageLayout>
  );
}
