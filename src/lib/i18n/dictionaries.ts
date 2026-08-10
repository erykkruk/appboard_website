import { APP_URL, DISCORD_URL, GITHUB_URL } from "@/lib/seo";

import type { Locale } from "@/lib/i18n/locales";

export interface NavLink {
  external?: boolean;
  href: string;
  label: string;
}

export interface FooterColumn {
  links: NavLink[];
  title: string;
}

export interface ChromeDictionary {
  articleBackToBlog: string;
  articleCtaBody: string;
  articleCtaButton: string;
  articleCtaTitle: string;
  articleMore: string;
  articleReadingSuffix: string;
  closeMenu: string;
  footerColumns: FooterColumn[];
  footerCopyright: string;
  footerNote: string;
  footerTagline: string;
  languageLabel: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  navLinks: NavLink[];
  openMenu: string;
  primaryCta: string;
  secondaryCta: string;
}

const EN: ChromeDictionary = {
  articleBackToBlog: "Back to blog",
  articleCtaBody:
    "See how AppBoard handles listings, versioning, keywords, and reviews for both stores — no signup required.",
  articleCtaButton: "Open the live demo",
  articleCtaTitle: "Try this workflow in AppBoard",
  articleMore: "More articles",
  articleReadingSuffix: "min read",
  closeMenu: "Close menu",
  footerColumns: [
    {
      links: [
        { href: "/#tour", label: "Product tour" },
        { href: "/pricing", label: "Pricing" },
        { external: true, href: `${APP_URL}/demo`, label: "Live demo" },
        { external: true, href: APP_URL, label: "Sign in" },
      ],
      title: "Product",
    },
    {
      links: [
        { href: "/docs", label: "Documentation" },
        { href: "/blog", label: "Blog" },
        { href: "/faq", label: "FAQ" },
        { external: true, href: GITHUB_URL, label: "Source on GitHub" },
        { external: true, href: DISCORD_URL, label: "Discord community" },
        { href: "/docs/self-hosting", label: "Self-hosting" },
        { href: "/opensource", label: "Open source" },
        {
          external: true,
          href: `${APP_URL}/editor`,
          label: "Free screenshot editor",
        },
      ],
      title: "Resources",
    },
    {
      links: [
        { href: "/policy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ],
      title: "Legal",
    },
  ],
  footerCopyright: "© 2026 AppBoard. All rights reserved.",
  footerNote: "Built independently, one release at a time.",
  footerTagline:
    "App Store Optimization for App Store and Google Play — listings, screenshots, research, and publishing from one panel.",
  languageLabel: "Language",
  mainNavLabel: "Main navigation",
  mobileNavLabel: "Mobile navigation",
  navLinks: [
    { href: "/#tour", label: "Product" },
    { external: true, href: `${APP_URL}/editor`, label: "Free editor" },
    { href: "/opensource", label: "Open source" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/blog", label: "Blog" },
  ],
  openMenu: "Open menu",
  primaryCta: "Get started free",
  secondaryCta: "Sign in",
};

const PL: ChromeDictionary = {
  articleBackToBlog: "Wróć na blog",
  articleCtaBody:
    "Zobacz, jak AppBoard prowadzi listingi, wersjonowanie, słowa kluczowe i opinie w obu sklepach. Bez zakładania konta.",
  articleCtaButton: "Otwórz demo",
  articleCtaTitle: "Sprawdź ten workflow w AppBoard",
  articleMore: "Więcej artykułów",
  articleReadingSuffix: "min czytania",
  closeMenu: "Zamknij menu",
  footerColumns: [
    {
      links: [
        { href: "/pl#tour", label: "Zwiedzanie produktu" },
        { href: "/pl/pricing", label: "Cennik" },
        { external: true, href: `${APP_URL}/demo`, label: "Demo na żywo" },
        { external: true, href: APP_URL, label: "Zaloguj się" },
      ],
      title: "Produkt",
    },
    {
      links: [
        { href: "/pl/docs", label: "Dokumentacja" },
        { href: "/pl/blog", label: "Blog" },
        { href: "/pl/faq", label: "FAQ" },
        { external: true, href: GITHUB_URL, label: "Kod na GitHubie" },
        { external: true, href: DISCORD_URL, label: "Społeczność na Discordzie" },
        { href: "/pl/docs/self-hosting", label: "Self-hosting" },
        { href: "/pl/opensource", label: "Open source" },
        {
          external: true,
          href: `${APP_URL}/editor`,
          label: "Darmowy edytor zrzutów",
        },
      ],
      title: "Zasoby",
    },
    {
      links: [
        { href: "/pl/policy", label: "Polityka prywatności" },
        { href: "/pl/terms", label: "Regulamin" },
      ],
      title: "Informacje prawne",
    },
  ],
  footerCopyright: "© 2026 AppBoard. Wszelkie prawa zastrzeżone.",
  footerNote: "Budowane niezależnie, wydanie po wydaniu.",
  footerTagline:
    "App Store Optimization dla App Store i Google Play. Listingi, zrzuty ekranu, research i publikacja z jednego panelu.",
  languageLabel: "Język",
  mainNavLabel: "Nawigacja główna",
  mobileNavLabel: "Nawigacja mobilna",
  navLinks: [
    { href: "/pl#tour", label: "Produkt" },
    { external: true, href: `${APP_URL}/editor`, label: "Darmowy edytor" },
    { href: "/pl/opensource", label: "Open source" },
    { href: "/pl/pricing", label: "Cennik" },
    { href: "/pl/docs", label: "Dokumentacja" },
    { href: "/pl/blog", label: "Blog" },
  ],
  openMenu: "Otwórz menu",
  primaryCta: "Zacznij za darmo",
  secondaryCta: "Zaloguj się",
};

const CHROME: Record<Locale, ChromeDictionary> = { en: EN, pl: PL };

export function getChrome(locale: Locale): ChromeDictionary {
  return CHROME[locale];
}
