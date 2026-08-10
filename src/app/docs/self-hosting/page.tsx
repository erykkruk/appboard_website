import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import {
  buildPageMetadata,
  DISCORD_URL,
  GITHUB_REPOS,
} from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "self-hosting";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function SelfHostingPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        AppBoard is open source and self-hostable — and it will stay that way.
        The entire platform is public, so you can read the code, run it on your
        own infrastructure, and keep full control of your data and store
        credentials.
      </p>

      <h2>The repositories</h2>
      <p>AppBoard is split into three repositories:</p>
      <ul>
        <li>
          <a href={GITHUB_REPOS.backend}>appboard_backend</a> — the API (Bun +
          Elysia + Drizzle + PostgreSQL): store connections, listings,
          publishing, research, keyword rank tracking, and the encrypted vault.
        </li>
        <li>
          <a href={GITHUB_REPOS.panel}>appboard_web</a> — the admin panel (Next.js
          + React): dashboard, listing editor, screenshot studio, research, and
          automation.
        </li>
        <li>
          <a href={GITHUB_REPOS.website}>appboard_website</a> — this marketing
          site, docs, and blog.
        </li>
      </ul>
      <p>
        To self-host the product you need the <strong>backend</strong> and the{" "}
        <strong>admin panel</strong>. The website is optional and only serves the
        public marketing pages.
      </p>

      <h2>Running it yourself</h2>
      <p>
        Each repository ships a <code>README.md</code> and <code>CONTRIBUTING.md</code>{" "}
        with the exact setup. In short:
      </p>
      <ol>
        <li>
          <strong>Backend</strong> — provision PostgreSQL, copy{" "}
          <code>.env.example</code> to <code>.env</code>, generate an{" "}
          <code>ENCRYPTION_KEY</code> (<code>openssl rand -hex 32</code>), set your
          SMTP and public URLs, then <code>bun install</code> and{" "}
          <code>bun run dev</code> (port 6680). Database migrations run
          automatically on start.
        </li>
        <li>
          <strong>Admin panel</strong> — <code>bun install</code>, point{" "}
          <code>BACKEND_URL</code> at your backend, and <code>bun dev</code> (port
          6600). The panel proxies <code>/api/*</code> to the backend.
        </li>
      </ol>
      <p>
        Bring your own OpenRouter key for the AI features and your own SMTP for
        transactional email. Store credentials are protected by an{" "}
        <a href="/docs/security">end-to-end encrypted vault</a> — self-hosting
        means those keys never leave your servers.
      </p>

      <h2>License</h2>
      <p>
        AppBoard is source-available under the{" "}
        <strong>PolyForm Noncommercial License 1.0.0</strong>: free to use, run,
        and modify for personal and non-commercial purposes. Commercial use and
        resale are not permitted. (This is not an OSI-approved open-source license,
        because it restricts commercial use.)
      </p>

      <h2>Get involved</h2>
      <p>
        Found a bug or want a feature? Open an issue on the relevant repository, or
        join the community on <a href={DISCORD_URL}>Discord</a>. Contributions are
        welcome — see each repo&apos;s <code>CONTRIBUTING.md</code> for the branch
        model (work off <code>develop</code>) and PR process.
      </p>
    </DocsLayout>
  );
}
