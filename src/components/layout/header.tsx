"use client";

import Link from "next/link";
import { useState } from "react";

import { ButtonLink, CloseIcon, MenuIcon } from "@/components/ui";
import { getChrome } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { APP_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";

import type { JSX } from "react";

interface HeaderProps {
  locale?: Locale;
}

export function Header({ locale = DEFAULT_LOCALE }: HeaderProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const chrome = getChrome(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo locale={locale} />
        <nav
          aria-label={chrome.mainNavLabel}
          className="hidden items-center gap-8 md:flex"
        >
          {chrome.navLinks.map((link) => (
            <Link
              className="anim-underline text-sm text-muted transition-colors hover:text-foreground"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher label={chrome.languageLabel} locale={locale} />
          <ButtonLink href={APP_URL} variant="ghost">
            {chrome.secondaryCta}
          </ButtonLink>
          <ButtonLink href={APP_URL} variant="primary">
            {chrome.primaryCta}
          </ButtonLink>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher label={chrome.languageLabel} locale={locale} />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? chrome.closeMenu : chrome.openMenu}
            className="flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "border-t border-line bg-background md:hidden",
          !isMenuOpen && "hidden",
        )}
        id="mobile-navigation"
      >
        <nav
          aria-label={chrome.mobileNavLabel}
          className="flex flex-col gap-1 px-4 py-4"
        >
          {chrome.navLinks.map((link) => (
            <Link
              className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-panel hover:text-foreground"
              href={link.href}
              key={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
            <ButtonLink href={APP_URL} variant="secondary">
              {chrome.secondaryCta}
            </ButtonLink>
            <ButtonLink href={APP_URL} variant="primary">
              {chrome.primaryCta}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
