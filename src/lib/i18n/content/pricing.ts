import type { Locale } from "@/lib/i18n/locales";
import type { FaqEntry } from "@/lib/schema";

export interface PricingTierContent {
  description: string;
  features: string[];
  highlighted?: boolean;
  name: string;
  regularPrice?: string;
}

export interface PricingTiersContent {
  betaSuffix: string;
  ctaLabel: string;
  earlyAccessBody: string;
  earlyAccessLabel: string;
  mostPopular: string;
  selfHostBody: string;
  selfHostLabel: string;
  selfHostLinkLabel: string;
  tiers: PricingTierContent[];
}

export interface PricingFaqContent {
  entries: FaqEntry[];
  eyebrow: string;
  title: string;
}

export interface PricingPageContent {
  eyebrow: string;
  lead: string;
  title: string;
}

export interface PricingContent {
  faq: PricingFaqContent;
  page: PricingPageContent;
  tiers: PricingTiersContent;
}

const EN: PricingContent = {
  faq: {
    entries: [
      {
        answer:
          "Yes. AppBoard is in early access and every plan is free while we are in beta. We will announce final pricing before general availability, with plenty of notice for existing users.",
        question: "Is AppBoard really free right now?",
      },
      {
        answer:
          "AppBoard connects to App Store Connect (Apple App Store) and Google Play Console (Google Play). You can manage listings for both stores from a single workspace.",
        question: "Which app stores does AppBoard support?",
      },
      {
        answer:
          "Store credentials are protected by an end-to-end encrypted vault. Keys are encrypted with a passphrase-derived key, so they are never stored or readable in plaintext on our servers.",
        question: "How are my store credentials protected?",
      },
      {
        answer:
          "The AI assistant runs on OpenRouter, so you can pick any supported model for generating descriptions, translations, ASO keyword suggestions, and review replies.",
        question: "Which AI models can I use?",
      },
    ],
    eyebrow: "FAQ",
    title: "Frequently asked questions",
  },
  page: {
    eyebrow: "Pricing",
    lead: "From your first app to a full portfolio — start free today and grow into the plan that fits your team.",
    title: "Simple plans for every stage",
  },
  tiers: {
    betaSuffix: "during beta",
    ctaLabel: "Get started",
    earlyAccessBody:
      "AppBoard is free while in beta. The tiers below show the planned structure — pricing will be announced before general availability.",
    earlyAccessLabel: "Early access:",
    mostPopular: "Most popular",
    selfHostBody:
      "AppBoard is source-available and free for personal & non-commercial use.",
    selfHostLabel: "Prefer to self-host?",
    selfHostLinkLabel: "View it on GitHub →",
    tiers: [
      {
        description: "For indie developers shipping their first apps.",
        features: [
          "1 workspace",
          "Up to 3 connected apps",
          "Listings editor with history and rollback",
          "Reviews inbox",
          "Publishing to both stores",
        ],
        name: "Free",
      },
      {
        description: "For developers who treat ASO as a growth channel.",
        features: [
          "Unlimited connected apps",
          "AI assistant via OpenRouter — any model",
          "Keyword, market, and competitor research",
          "Screenshot studio with CLI and CI uploads",
          "Batch publishing with per-item reports",
        ],
        highlighted: true,
        name: "Pro",
        regularPrice: "$10",
      },
      {
        description: "For teams managing portfolios together.",
        features: [
          "Everything in Pro",
          "Multiple workspaces with roles",
          "End-to-end encrypted credentials vault",
          "Feature flags per workspace",
          "Priority support",
        ],
        name: "Team",
      },
    ],
  },
};

const PL: PricingContent = {
  faq: {
    entries: [
      {
        answer:
          "Tak. AppBoard jest we wczesnym dostępie i przez całą betę każdy plan jest darmowy. Finalny cennik ogłosimy przed oficjalną premierą, z dużym wyprzedzeniem dla osób, które już korzystają z narzędzia.",
        question: "Czy AppBoard naprawdę jest teraz darmowy?",
      },
      {
        answer:
          "AppBoard łączy się z App Store Connect (Apple App Store) i Google Play Console (Google Play). Listingami z obu sklepów zarządzasz z jednego workspace.",
        question: "Które sklepy z aplikacjami obsługuje AppBoard?",
      },
      {
        answer:
          "Dane dostępowe do sklepów chroni sejf szyfrowany end-to-end. Klucze są zaszyfrowane kluczem wyprowadzonym z Twojego hasła, więc na naszych serwerach nigdy nie leżą ani nie dają się odczytać otwartym tekstem.",
        question: "Jak chronione są moje dane dostępowe do sklepów?",
      },
      {
        answer:
          "Asystent AI działa na OpenRouterze, więc do generowania opisów, tłumaczeń, propozycji słów kluczowych ASO i odpowiedzi na opinie wybierasz dowolny obsługiwany model.",
        question: "Z jakich modeli AI mogę korzystać?",
      },
    ],
    eyebrow: "FAQ",
    title: "Najczęstsze pytania",
  },
  page: {
    eyebrow: "Cennik",
    lead: "Od pierwszej aplikacji po całe portfolio: zacznij za darmo i przejdź na plan, który pasuje do Twojego zespołu.",
    title: "Proste plany na każdy etap",
  },
  tiers: {
    betaSuffix: "w becie",
    ctaLabel: "Zacznij teraz",
    earlyAccessBody:
      "AppBoard jest darmowy w becie. Plany poniżej pokazują planowaną strukturę, a ceny podamy przed oficjalną premierą.",
    earlyAccessLabel: "Wczesny dostęp:",
    mostPopular: "Najpopularniejszy",
    selfHostBody:
      "Kod AppBoard jest publiczny i darmowy do użytku osobistego oraz niekomercyjnego.",
    selfHostLabel: "Wolisz self-hosting?",
    selfHostLinkLabel: "Zobacz na GitHubie →",
    tiers: [
      {
        description: "Dla indie deweloperów, którzy wypuszczają pierwsze aplikacje.",
        features: [
          "1 workspace",
          "Do 3 podłączonych aplikacji",
          "Edytor listingów z historią i rollbackiem",
          "Skrzynka opinii",
          "Publikacja do obu sklepów",
        ],
        name: "Free",
      },
      {
        description: "Dla deweloperów, którzy traktują ASO jako kanał wzrostu.",
        features: [
          "Bez limitu podłączonych aplikacji",
          "Asystent AI przez OpenRouter, dowolny model",
          "Research słów kluczowych, rynków i konkurencji",
          "Screenshot studio z uploadem przez CLI i CI",
          "Publikacja wsadowa z raportem dla każdej pozycji",
        ],
        highlighted: true,
        name: "Pro",
        regularPrice: "$10",
      },
      {
        description: "Dla zespołów, które zarządzają portfolio wspólnie.",
        features: [
          "Wszystko z planu Pro",
          "Wiele workspace'ów z rolami",
          "Sejf na dane dostępowe szyfrowany end-to-end",
          "Feature flagi per workspace",
          "Priorytetowe wsparcie",
        ],
        name: "Team",
      },
    ],
  },
};

export const PRICING_CONTENT: Record<Locale, PricingContent> = {
  en: EN,
  pl: PL,
};
