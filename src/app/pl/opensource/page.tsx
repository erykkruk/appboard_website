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
import { OPEN_SOURCE_CONTENT } from "@/lib/i18n/content/opensource";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildSoftwareApplicationSchema } from "@/lib/schema";
import {
  buildPageMetadata,
  DISCORD_URL,
  GITHUB_REPOS,
  GITHUB_URL,
} from "@/lib/seo";

import type { OpenSourceRepoId } from "@/lib/i18n/content/opensource";
import type { Metadata } from "next";
import type { JSX, ReactNode } from "react";

const PL_TITLE = "Open source";
const PL_DESCRIPTION =
  "AppBoard jest open source i można go hostować u siebie: backend, panel admina i strona są publiczne. Darmowy do użytku osobistego i niekomercyjnego na licencji PolyForm Noncommercial.";

export const metadata: Metadata = buildPageMetadata({
  description: PL_DESCRIPTION,
  languages: buildAlternates("/opensource"),
  locale: "pl_PL",
  path: "/pl/opensource",
  title: PL_TITLE,
});

const ICON_CLASS = "size-5";

const REPO_ICONS: Record<OpenSourceRepoId, ReactNode> = {
  backend: <PlugIcon className={ICON_CLASS} />,
  panel: <ImageIcon className={ICON_CLASS} />,
  website: <BranchIcon className={ICON_CLASS} />,
};

const CONTENT = OPEN_SOURCE_CONTENT.pl.page;

export default function OpenSourcePagePl(): JSX.Element {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema()} />
      <Header locale="pl" />
      <main className="relative w-full flex-1" lang="pl">
        <section className="px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              {CONTENT.eyebrow}
            </p>
            <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl">
              {`${CONTENT.titleLead} `}
              <Highlight>{CONTENT.titleHighlight}</Highlight>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {CONTENT.lead}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              {CONTENT.licenseNote}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={GITHUB_URL} size="lg" variant="primary">
                {CONTENT.githubCta}
              </ButtonLink>
              <ButtonLink href={DISCORD_URL} size="lg" variant="secondary">
                <DiscordIcon className="size-4" />
                {CONTENT.discordCta}
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              description={CONTENT.reposDescription}
              eyebrow={CONTENT.reposEyebrow}
              title={CONTENT.reposTitle}
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CONTENT.repos.map((repo) => (
                <FeatureCard
                  description={repo.description}
                  href={GITHUB_REPOS[repo.id]}
                  icon={REPO_ICONS[repo.id]}
                  key={repo.title}
                  linkLabel={CONTENT.reposLinkLabel}
                  title={repo.title}
                />
              ))}
            </div>
          </div>
        </section>

        <SelfHostedSection locale="pl" />
        <CtaSection locale="pl" />
      </main>
      <Footer locale="pl" />
    </>
  );
}
