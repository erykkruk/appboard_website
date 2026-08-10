import Link from "next/link";

import { getChrome, type NavLink } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";

import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";

import type { JSX } from "react";

interface FooterProps {
  locale?: Locale;
}

function FooterNavLink({ link }: { link: NavLink }): JSX.Element {
  const className =
    "anim-underline text-sm text-muted transition-colors hover:text-foreground";

  if (link.external) {
    return (
      <a className={className} href={link.href}>
        {link.label}
      </a>
    );
  }

  return (
    <Link className={className} href={link.href}>
      {link.label}
    </Link>
  );
}

export function Footer({ locale = DEFAULT_LOCALE }: FooterProps): JSX.Element {
  const chrome = getChrome(locale);

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo locale={locale} />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {chrome.footerTagline}
            </p>
            <LanguageSwitcher
              className="mt-6 w-fit"
              label={chrome.languageLabel}
              locale={locale}
            />
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {chrome.footerColumns.map((column) => (
              <nav aria-label={column.title} key={column.title}>
                <h2 className="text-sm font-semibold text-foreground">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterNavLink link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{chrome.footerCopyright}</p>
          <p className="text-sm text-muted">{chrome.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
