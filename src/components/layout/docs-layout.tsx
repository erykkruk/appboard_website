import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ArrowRightIcon } from "@/components/ui";
import { ALL_DOC_PAGES, DOCS_SECTIONS, getDocPage } from "@/lib/docs";
import {
  ALL_DOC_PAGES_PL,
  DOCS_SECTIONS_PL,
  getDocPagePl,
} from "@/lib/i18n/content/docs";
import {
  DEFAULT_LOCALE,
  LOCALE_CONFIG,
  type SiteLocale,
} from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

import type { DocPage, DocSection } from "@/lib/docs";
import type { JSX, ReactNode } from "react";

interface DocsLayoutProps {
  children: ReactNode;
  locale?: SiteLocale;
  slug: string;
}

interface DocsCopy {
  eyebrow: string;
  fallbackTitle: string;
  menuLabel: string;
  navLabel: string;
  next: string;
  paginationLabel: string;
  previous: string;
}

const DOCS_COPY: Record<SiteLocale, DocsCopy> = {
  en: {
    eyebrow: "Docs",
    fallbackTitle: "Documentation",
    menuLabel: "Documentation menu",
    navLabel: "Documentation",
    next: "Next",
    paginationLabel: "Pagination",
    previous: "Previous",
  },
  pl: {
    eyebrow: "Dokumentacja",
    fallbackTitle: "Dokumentacja",
    menuLabel: "Menu dokumentacji",
    navLabel: "Dokumentacja",
    next: "Dalej",
    paginationLabel: "Nawigacja stron",
    previous: "Wstecz",
  },
};

interface DocsRegistry {
  allPages: DocPage[];
  basePath: string;
  getPage: (slug: string) => DocPage | undefined;
  sections: DocSection[];
}

const DOCS_REGISTRY: Record<SiteLocale, DocsRegistry> = {
  en: {
    allPages: ALL_DOC_PAGES,
    basePath: "/docs",
    getPage: getDocPage,
    sections: DOCS_SECTIONS,
  },
  pl: {
    allPages: ALL_DOC_PAGES_PL,
    basePath: "/pl/docs",
    getPage: getDocPagePl,
    sections: DOCS_SECTIONS_PL,
  },
};

function SidebarNav({
  locale,
  slug,
}: {
  locale: SiteLocale;
  slug: string;
}): JSX.Element {
  const { basePath, sections } = DOCS_REGISTRY[locale];

  return (
    <nav aria-label={DOCS_COPY[locale].navLabel} className="flex flex-col gap-7">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {section.title}
          </p>
          <ul className="flex flex-col gap-0.5">
            {section.pages.map((page) => {
              const isActive = page.slug === slug;

              return (
                <li key={page.slug}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                      isActive
                        ? "bg-accent-soft/10 font-medium text-accent-bright"
                        : "text-muted hover:bg-panel hover:text-foreground",
                    )}
                    href={`${basePath}/${page.slug}`}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function PrevNextLink({
  direction,
  locale,
  page,
}: {
  direction: "next" | "prev";
  locale: SiteLocale;
  page: DocPage;
}): JSX.Element {
  const isNext = direction === "next";
  const copy = DOCS_COPY[locale];

  return (
    <Link
      className={cn(
        "group flex flex-1 flex-col gap-1 rounded-xl border border-line bg-panel/40 px-5 py-4 transition-colors hover:border-accent/50 hover:bg-panel",
        isNext ? "items-end text-right" : "items-start",
      )}
      href={`${DOCS_REGISTRY[locale].basePath}/${page.slug}`}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-muted">
        {isNext ? copy.next : copy.previous}
      </span>
      <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
        {isNext ? null : (
          <ArrowRightIcon className="size-4 rotate-180 text-accent-bright" />
        )}
        {page.title}
        {isNext ? (
          <ArrowRightIcon className="size-4 text-accent-bright" />
        ) : null}
      </span>
    </Link>
  );
}

export function DocsLayout({
  children,
  locale = DEFAULT_LOCALE,
  slug,
}: DocsLayoutProps): JSX.Element {
  const copy = DOCS_COPY[locale];
  const { allPages, getPage } = DOCS_REGISTRY[locale];
  const page = getPage(slug);
  const currentIndex = allPages.findIndex((item) => item.slug === slug);
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : undefined;
  const next =
    currentIndex >= 0 && currentIndex < allPages.length - 1
      ? allPages[currentIndex + 1]
      : undefined;

  return (
    <>
      <Header locale={locale} />
      <main
        className="relative mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-10 sm:px-6 sm:pt-14"
        lang={
          locale === DEFAULT_LOCALE ? undefined : LOCALE_CONFIG[locale].htmlLang
        }
      >
        <div className="lg:grid lg:grid-cols-[15rem_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <SidebarNav locale={locale} slug={slug} />
            </div>
          </aside>

          <details className="mb-8 rounded-xl border border-line bg-panel/40 lg:hidden">
            <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-foreground">
              {copy.menuLabel}
            </summary>
            <div className="border-t border-line px-4 py-4">
              <SidebarNav locale={locale} slug={slug} />
            </div>
          </details>

          <article className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
              {copy.eyebrow}
            </p>
            <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">
              {page?.title ?? copy.fallbackTitle}
            </h1>
            {page?.description ? (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                {page.description}
              </p>
            ) : null}

            <div className="prose mt-10">{children}</div>

            {prev || next ? (
              <nav
                aria-label={copy.paginationLabel}
                className="mt-16 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row"
              >
                {prev ? (
                  <PrevNextLink direction="prev" locale={locale} page={prev} />
                ) : (
                  <span className="flex-1" />
                )}
                {next ? (
                  <PrevNextLink direction="next" locale={locale} page={next} />
                ) : (
                  <span className="flex-1" />
                )}
              </nav>
            ) : null}
          </article>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
