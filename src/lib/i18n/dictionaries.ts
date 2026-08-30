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
    "See how AppBoard handles listings, versioning, keywords, and reviews for both stores - no signup required.",
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
    "App Store Optimization for App Store and Google Play - listings, screenshots, research, and publishing from one panel.",
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

const DE: ChromeDictionary = {
  articleBackToBlog: "Zurück zum Blog",
  articleCtaBody:
    "So verwaltet AppBoard Store-Einträge, Versionen, Keywords und Bewertungen für beide Stores. Ohne Anmeldung.",
  articleCtaButton: "Live-Demo öffnen",
  articleCtaTitle: "Diesen Workflow in AppBoard ausprobieren",
  articleMore: "Weitere Artikel",
  articleReadingSuffix: "Min. Lesezeit",
  closeMenu: "Menü schließen",
  footerColumns: [
    {
      links: [
        { href: "/#tour", label: "Produkt-Tour" },
        { href: "/pricing", label: "Preise" },
        { external: true, href: `${APP_URL}/demo`, label: "Live-Demo" },
        { external: true, href: APP_URL, label: "Anmelden" },
      ],
      title: "Produkt",
    },
    {
      links: [
        { href: "/de/blog", label: "Blog" },
        { href: "/docs", label: "Dokumentation" },
        { href: "/faq", label: "FAQ" },
        { external: true, href: GITHUB_URL, label: "Quellcode auf GitHub" },
        { external: true, href: DISCORD_URL, label: "Discord-Community" },
        { href: "/opensource", label: "Open Source" },
        {
          external: true,
          href: `${APP_URL}/editor`,
          label: "Kostenloser Screenshot-Editor",
        },
      ],
      title: "Ressourcen",
    },
    {
      links: [
        { href: "/policy", label: "Datenschutz" },
        { href: "/terms", label: "Nutzungsbedingungen" },
      ],
      title: "Rechtliches",
    },
  ],
  footerCopyright: "© 2026 AppBoard. Alle Rechte vorbehalten.",
  footerNote: "Unabhängig gebaut, ein Release nach dem anderen.",
  footerTagline:
    "App Store Optimization für App Store und Google Play. Store-Einträge, Screenshots, Research und Veröffentlichung aus einem Panel.",
  languageLabel: "Sprache",
  mainNavLabel: "Hauptnavigation",
  mobileNavLabel: "Mobile Navigation",
  navLinks: [
    { href: "/de/blog", label: "Blog" },
    { external: true, href: `${APP_URL}/editor`, label: "Editor" },
    { href: "/opensource", label: "Open Source" },
    { href: "/pricing", label: "Preise" },
    { href: "/docs", label: "Docs" },
  ],
  openMenu: "Menü öffnen",
  primaryCta: "Kostenlos starten",
  secondaryCta: "Anmelden",
};

const ES: ChromeDictionary = {
  articleBackToBlog: "Volver al blog",
  articleCtaBody:
    "Así gestiona AppBoard las fichas, el versionado, las palabras clave y las reseñas de ambas tiendas. Sin registro.",
  articleCtaButton: "Abrir la demo",
  articleCtaTitle: "Prueba este flujo en AppBoard",
  articleMore: "Más artículos",
  articleReadingSuffix: "min de lectura",
  closeMenu: "Cerrar menú",
  footerColumns: [
    {
      links: [
        { href: "/#tour", label: "Tour del producto" },
        { href: "/pricing", label: "Precios" },
        { external: true, href: `${APP_URL}/demo`, label: "Demo en vivo" },
        { external: true, href: APP_URL, label: "Iniciar sesión" },
      ],
      title: "Producto",
    },
    {
      links: [
        { href: "/es/blog", label: "Blog" },
        { href: "/docs", label: "Documentación" },
        { href: "/faq", label: "FAQ" },
        { external: true, href: GITHUB_URL, label: "Código en GitHub" },
        { external: true, href: DISCORD_URL, label: "Comunidad en Discord" },
        { href: "/opensource", label: "Open source" },
        {
          external: true,
          href: `${APP_URL}/editor`,
          label: "Editor de capturas gratuito",
        },
      ],
      title: "Recursos",
    },
    {
      links: [
        { href: "/policy", label: "Privacidad" },
        { href: "/terms", label: "Términos del servicio" },
      ],
      title: "Legal",
    },
  ],
  footerCopyright: "© 2026 AppBoard. Todos los derechos reservados.",
  footerNote: "Construido de forma independiente, versión a versión.",
  footerTagline:
    "App Store Optimization para App Store y Google Play. Fichas, capturas, research y publicación desde un solo panel.",
  languageLabel: "Idioma",
  mainNavLabel: "Navegación principal",
  mobileNavLabel: "Navegación móvil",
  navLinks: [
    { href: "/es/blog", label: "Blog" },
    { external: true, href: `${APP_URL}/editor`, label: "Editor" },
    { href: "/opensource", label: "Open source" },
    { href: "/pricing", label: "Precios" },
    { href: "/docs", label: "Docs" },
  ],
  openMenu: "Abrir menú",
  primaryCta: "Empieza gratis",
  secondaryCta: "Iniciar sesión",
};

const CHROME: Record<Locale, ChromeDictionary> = {
  de: DE,
  en: EN,
  es: ES,
  pl: PL,
};

export function getChrome(locale: Locale): ChromeDictionary {
  return CHROME[locale];
}
