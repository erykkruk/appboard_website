import type { SiteLocale } from "@/lib/i18n/locales";
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
    lead: "From your first app to a full portfolio - start free today and grow into the plan that fits your team.",
    title: "Simple plans for every stage",
  },
  tiers: {
    betaSuffix: "during beta",
    ctaLabel: "Get started",
    earlyAccessBody:
      "AppBoard is free while in beta. The tiers below show the planned structure - pricing will be announced before general availability.",
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
          "Unlímited connected apps",
          "AI assistant via OpenRouter - any model",
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


const DE: PricingContent = {
  faq: {
    entries: [
      {
        answer:
          "Ja. AppBoard ist im Early Access und während der Beta ist jeder Plan kostenlos. Die endgültigen Preise kündigen wir vor der allgemeinen Verfügbarkeit an, mit reichlich Vorlauf für bestehende Nutzer.",
        question: "Ist AppBoard gerade wirklich kostenlos?",
      },
      {
        answer:
          "AppBoard verbindet sich mit App Store Connect (Apple App Store) und der Google Play Console (Google Play). Die Einträge beider Stores verwalten Sie aus einem einzigen Workspace.",
        question: "Welche App-Stores unterstützt AppBoard?",
      },
      {
        answer:
          "Store-Zugangsdaten schützt ein Ende-zu-Ende-verschlüsselter Tresor. Die Schlüssel werden mit einem aus Ihrer Passphrase abgeleiteten Schlüssel verschlüsselt und liegen auf unseren Servern nie im Klartext.",
        question: "Wie sind meine Store-Zugangsdaten geschützt?",
      },
      {
        answer:
          "Der KI-Assistent läuft über OpenRouter, Sie wählen also jedes unterstützte Modell für Beschreibungen, Übersetzungen, ASO-Keyword-Vorschlaege und Antworten auf Rezensionen.",
        question: "Welche KI-Modelle kann ich nutzen?",
      },
    ],
    eyebrow: "FAQ",
    title: "Häufige Fragen",
  },
  page: {
    eyebrow: "Preise",
    lead: "Von der ersten App bis zum ganzen Portfolio: kostenlos starten und in den Plan wachsen, der zu Ihrem Team passt.",
    title: "Einfache Pläne für jede Phase",
  },
  tiers: {
    betaSuffix: "während der Beta",
    ctaLabel: "Jetzt starten",
    earlyAccessBody:
      "AppBoard ist während der Beta kostenlos. Die Pläne unten zeigen die geplante Struktur, die Preise nennen wir vor der allgemeinen Verfügbarkeit.",
    earlyAccessLabel: "Early Access:",
    mostPopular: "Am beliebtesten",
    selfHostBody:
      "Der Quellcode von AppBoard ist einsehbar und für private sowie nicht kommerzielle Nutzung kostenlos.",
    selfHostLabel: "Lieber selbst hosten?",
    selfHostLinkLabel: "Auf GitHub ansehen →",
    tiers: [
      {
        description: "Für Indie-Entwickler, die ihre ersten Apps veröffentlichen.",
        features: [
          "1 Workspace",
          "Bis zu 3 verbundene Apps",
          "Eintrags-Editor mit Verlauf und Rollback",
          "Rezensions-Posteingang",
          "Veröffentlichen in beide Stores",
        ],
        name: "Free",
      },
      {
        description: "Für Entwickler, die ASO als Wachstumskanal ernst nehmen.",
        features: [
          "Unbegrenzt verbundene Apps",
          "KI-Assistent über OpenRouter, jedes Modell",
          "Keyword-, Markt- und Wettbewerbsanalyse",
          "Screenshot-Studio mit Upload per CLI und CI",
          "Stapel-Veröffentlichung mit Bericht pro Position",
        ],
        highlighted: true,
        name: "Pro",
        regularPrice: "$10",
      },
      {
        description: "Für Teams, die ihr Portfolio gemeinsam verwalten.",
        features: [
          "Alles aus Pro",
          "Mehrere Workspaces mit Rollen",
          "Ende-zu-Ende-verschlüsselter Tresor für Zugangsdaten",
          "Feature-Flags pro Workspace",
          "Priorisierter Support",
        ],
        name: "Team",
      },
    ],
  },
};

const ES: PricingContent = {
  faq: {
    entries: [
      {
        answer:
          "Sí. AppBoard está en acceso anticipado y durante la beta todos los planes son gratis. Anunciaremos los precios definitivos antes del lanzamiento general, con mucho margen para quienes ya lo usan.",
        question: "¿Es AppBoard gratis de verdad ahora mismo?",
      },
      {
        answer:
          "AppBoard se conecta con App Store Connect (Apple App Store) y Google Play Console (Google Play). Gestionas las fichas de las dos tiendas desde un solo espacio de trabajo.",
        question: "¿Qué tiendas de aplicaciones admite AppBoard?",
      },
      {
        answer:
          "Las credenciales de las tiendas están protegidas por un baúl cifrado de extremo a extremo. Las claves se cifran con una clave derivada de tu frase de paso, así que nunca se guardan ni se pueden leer en texto plano en nuestros servidores.",
        question: "¿Cómo se protegen mis credenciales de las tiendas?",
      },
      {
        answer:
          "El asistente de IA funciona sobre OpenRouter, así que puedes elegir cualquier modelo compatible para generar descripciones, traducciones, sugerencias de keywords ASO y respuestas a reseñas.",
        question: "¿Qué modelos de IA puedo usar?",
      },
    ],
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
  },
  page: {
    eyebrow: "Precios",
    lead: "De tu primera app a un portfolio completo: empieza gratis y pasa al plan que encaje con tu equipo.",
    title: "Planes simples para cada etapa",
  },
  tiers: {
    betaSuffix: "durante la beta",
    ctaLabel: "Empezar",
    earlyAccessBody:
      "AppBoard es gratis durante la beta. Los planes de abajo muestran la estructura prevista y los precios se anunciarán antes del lanzamiento general.",
    earlyAccessLabel: "Acceso anticipado:",
    mostPopular: "El más elegido",
    selfHostBody:
      "El código de AppBoard es visible y gratuito para uso personal y no comercial.",
    selfHostLabel: "¿Prefieres alojarlo tú?",
    selfHostLinkLabel: "Verlo en GitHub →",
    tiers: [
      {
        description: "Para desarrolladores indie que publican sus primeras apps.",
        features: [
          "1 espacio de trabajo",
          "Hasta 3 apps conectadas",
          "Editor de fichas con historial y reversión",
          "Bandeja de reseñas",
          "Publicación en las dos tiendas",
        ],
        name: "Free",
      },
      {
        description: "Para quien trata el ASO como un canal de crecimiento.",
        features: [
          "Apps conectadas sin límite",
          "Asistente de IA por OpenRouter, cualquier modelo",
          "Research de keywords, mercados y competencia",
          "Estudio de capturas con subida por CLI y CI",
          "Publicación por lotes con informe por elemento",
        ],
        highlighted: true,
        name: "Pro",
        regularPrice: "$10",
      },
      {
        description: "Para equipos que gestionan un portfolio juntos.",
        features: [
          "Todo lo de Pro",
          "Varios espacios de trabajo con roles",
          "Baúl de credenciales cifrado de extremo a extremo",
          "Feature flags por espacio de trabajo",
          "Soporte prioritario",
        ],
        name: "Team",
      },
    ],
  },
};

export const PRICING_CONTENT: Record<SiteLocale, PricingContent> = {
  de: DE,
  en: EN,
  es: ES,
  pl: PL,
};
