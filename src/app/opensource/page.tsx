import { Footer, Header } from "@/components/layout";
import { CtaSection, SelfHostedSection } from "@/components/sections";
import {
  BranchIcon,
  ButtonLink,
  DiscordIcon,
  FeatureCard,
  Highlight,
  ImageIcon,
  JsonLd,
  PlugIcon,
  SectionHeading,
} from "@/components/ui";
import { buildSoftwareApplicationSchema } from "@/lib/schema";
import { buildAlternates } from "@/lib/i18n/routes";
import {
  buildPageMetadata,
  DISCORD_URL,
  GITHUB_REPOS,
  GITHUB_URL,
} from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX, ReactNode } from "react";

const OPEN_SOURCE_DESCRIPTION =
  "AppBoard is open source and self-hostable - backend, admin panel, and website are all public. Free for personal and non-commercial use under the PolyForm Noncommercial License.";

export const metadata: Metadata = buildPageMetadata({
  description: OPEN_SOURCE_DESCRIPTION,
  languages: buildAlternates("/opensource"),
  path: "/opensource",
  title: "Open source",
});

const ICON_CLASS = "size-5";

interface Repo {
  description: string;
  href: string;
  icon: ReactNode;
  title: string;
}

const REPOS: Repo[] = [
  {
    description:
      "Bun + Elysia + Drizzle + PostgreSQL. Store connections, listings, publishing, research, keyword rank tracking, the encrypted vault, and the REST API.",
    href: GITHUB_REPOS.backend,
    icon: <PlugIcon className={ICON_CLASS} />,
    title: "appboard_backend - API",
  },
  {
    description:
      "Next.js + React admin panel: dashboard, listing editor with diffs and history, screenshot studio, research, reviews inbox, and automation.",
    href: GITHUB_REPOS.panel,
    icon: <ImageIcon className={ICON_CLASS} />,
    title: "appboard_web - admin panel",
  },
  {
    description:
      "This marketing site - Next.js landing pages, documentation, and blog. Fork it, learn from it, or run your own.",
    href: GITHUB_REPOS.website,
    icon: <BranchIcon className={ICON_CLASS} />,
    title: "appboard_website - website",
  },
];

export default function OpenSourcePage(): JSX.Element {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema()} />
      <Header />
      <main className="relative w-full flex-1">
        <section className="px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              Open source
            </p>
            <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl">
              AppBoard is <Highlight>open source</Highlight>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              The whole platform - backend, admin panel, and this website - is
              public and self-hostable. And it will stay that way: AppBoard is
              committed to being open source, for good.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              Source-available under the PolyForm Noncommercial License - free for
              personal and non-commercial use.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={GITHUB_URL} size="lg" variant="primary">
                View on GitHub
              </ButtonLink>
              <ButtonLink href={DISCORD_URL} size="lg" variant="secondary">
                <DiscordIcon className="size-4" />
                Join our Discord
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              description="AppBoard is split into three repositories. Self-host the backend + admin panel; the website is here for reference."
              eyebrow="Repositories"
              title="Where everything lives"
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {REPOS.map((repo) => (
                <FeatureCard
                  description={repo.description}
                  href={repo.href}
                  icon={repo.icon}
                  key={repo.title}
                  linkLabel="View on GitHub"
                  title={repo.title}
                />
              ))}
            </div>
          </div>
        </section>

        <SelfHostedSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
