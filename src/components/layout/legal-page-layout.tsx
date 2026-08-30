import { DEFAULT_LOCALE, LOCALE_CONFIG, type SiteLocale } from "@/lib/i18n/locales";

import { Footer } from "./footer";
import { Header } from "./header";

import type { JSX, ReactNode } from "react";

interface LegalPageLayoutProps {
  children: ReactNode;
  lastUpdated: string;
  locale?: SiteLocale;
  subtitle: string;
  title: string;
}

interface LegalCopy {
  eyebrow: string;
  lastUpdatedPrefix: string;
}

const LEGAL_COPY: Record<SiteLocale, LegalCopy> = {
  en: {
    eyebrow: "Legal",
    lastUpdatedPrefix: "Last updated: ",
  },
  pl: {
    eyebrow: "Informacje prawne",
    lastUpdatedPrefix: "Ostatnia aktualizacja: ",
  },
};

// Prose styling for the semantic HTML the legal pages pass as children. Tailwind
// v4 arbitrary variants keep the markup clean (plain <h2>/<p>/<ul>) while staying
// on the site's design tokens - no typography plugin needed.
const PROSE_CLASSES = [
  "[&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
  "[&_h2:first-child]:mt-0",
  "[&_p]:mt-4 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-muted",
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5",
  "[&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-muted [&_li]:marker:text-accent",
  "[&_a]:text-accent-bright [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-foreground",
  "[&_strong]:font-medium [&_strong]:text-foreground",
].join(" ");

export function LegalPageLayout({
  children,
  lastUpdated,
  locale = DEFAULT_LOCALE,
  subtitle,
  title,
}: LegalPageLayoutProps): JSX.Element {
  const copy = LEGAL_COPY[locale];
  const contentLang =
    locale === DEFAULT_LOCALE ? undefined : LOCALE_CONFIG[locale].htmlLang;

  return (
    <>
      <Header locale={locale} />
      <main className="relative w-full flex-1" lang={contentLang}>
        <section className="px-4 pb-10 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              {copy.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{subtitle}</p>
            <p className="mt-4 text-sm text-muted">
              {copy.lastUpdatedPrefix}
              {lastUpdated}
            </p>
          </div>
        </section>
        <section className="px-4 pb-24 sm:px-6">
          <article className={`mx-auto max-w-3xl ${PROSE_CLASSES}`}>
            {children}
          </article>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
