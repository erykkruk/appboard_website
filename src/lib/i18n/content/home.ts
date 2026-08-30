import { APP_URL, DISCORD_URL } from "@/lib/seo";

import type { SiteLocale } from "@/lib/i18n/locales";
import type { FaqEntry } from "@/lib/schema";

export interface HeroContent {
  dashboardAlt: string;
  facts: string[];
  lead: string;
  note: string;
  primaryCta: string;
  secondaryCta: string;
  titleHighlight: string;
  titleLead: string;
}

export interface StoresContent {
  eyebrow: string;
  footnote: string;
  liveStores: string[];
  plannedStores: string[];
}

export interface HowItWorksStep {
  description: string;
  title: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  steps: HowItWorksStep[];
  title: string;
}

export interface TourStopContent {
  docsHref: string;
  docsLabel: string;
  eyebrow: string;
  lead: string;
  points: string[];
  title: string;
  videoCaption?: string;
  visualAlt: string;
}

export interface TourContent {
  eyebrow: string;
  stops: TourStopContent[];
  title: string;
}

export interface FeatureContent {
  description: string;
  href: string;
  linkLabel?: string;
  title: string;
}

export interface FeaturesContent {
  eyebrow: string;
  items: FeatureContent[];
  title: string;
}

export interface GalleryItemContent {
  alt: string;
  label: string;
}

export interface FreeToolContent {
  ctaLabel: string;
  ctaNote: string;
  description: string;
  eyebrow: string;
  gallery: GalleryItemContent[];
  galleryLead: string;
  points: string[];
  title: string;
}

export interface PricingTeaserContent {
  ctaHref: string;
  ctaLabel: string;
  lead: string;
  titleHighlight: string;
  titleLead: string;
}

export interface FaqContent {
  docsHref: string;
  docsLabel: string;
  entries: FaqEntry[];
  eyebrow: string;
  faqHref: string;
  faqLabel: string;
  footnoteLead: string;
  footnoteMiddle: string;
  footnoteTail: string;
  schemaLanguage?: string;
  schemaPath: string;
  title: string;
}

export interface CtaContent {
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  titleHighlight: string;
  titleLead: string;
}

export interface DiffRowContent {
  field: string;
  language: string;
  newValue: string;
  oldValue: string;
}

export interface DiffDemoContent {
  headerNote: string;
  headerTitle: string;
  publishLabel: string;
  publishNote: string;
  rows: DiffRowContent[];
}

export interface TranslationRowContent {
  language: string;
  limit: number;
  value: string;
}

export interface TranslateDemoContent {
  badgeDoNotTranslate: string;
  badgeKeywords: string;
  badgeLimit: string;
  footnote: string;
  rows: TranslationRowContent[];
  sourceLabel: string;
  sourceValue: string;
}

export interface HomeContent {
  cta: CtaContent;
  diffDemo: DiffDemoContent;
  faq: FaqContent;
  features: FeaturesContent;
  freeTool: FreeToolContent;
  hero: HeroContent;
  howItWorks: HowItWorksContent;
  pricingTeaser: PricingTeaserContent;
  stores: StoresContent;
  tour: TourContent;
  translateDemo: TranslateDemoContent;
}

const EN: HomeContent = {
  cta: {
    lead: "Click into the live demo and poke around a real workspace, or connect your own stores in a few minutes. Free while in beta.",
    primaryCta: "Open the live demo",
    secondaryCta: "Create free account",
    titleHighlight: "calm",
    titleLead: "Your next release day could be",
  },
  diffDemo: {
    headerNote: "3 fields in 2 languages",
    headerTitle: "Pending changes",
    publishLabel: "Publish to both stores",
    publishNote: "Nothing ships until you press it",
    rows: [
      {
        field: "Title",
        language: "EN",
        newValue: "Lumina: AI Photo Editor",
        oldValue: "Lumina - Photo Editor",
      },
      {
        field: "Subtitle",
        language: "EN",
        newValue: "Edit photos with AI in seconds",
        oldValue: "Edit your photos fast",
      },
      {
        field: "Kurzbeschreibung",
        language: "DE",
        newValue: "Fotos mit KI bearbeiten",
        oldValue: "Fotos schnell bearbeiten",
      },
    ],
  },
  faq: {
    docsHref: "/docs",
    docsLabel: "documentation",
    entries: [
      {
        answer:
          "No. The live demo is a real AppBoard workspace pre-filled with example apps, reviews and listing history. You can click through everything, with no signup and no store credentials needed.",
        question: "Can I try AppBoard without connecting my own apps?",
      },
      {
        answer:
          "Your App Store Connect key and Google Play service account live in an end-to-end encrypted vault. They are encrypted with a key derived from your passphrase, so AppBoard's servers never see them in plaintext, and nothing can be published without you unlocking the vault.",
        question: "Is it safe to hand over my store credentials?",
      },
      {
        answer:
          "No. Everything you edit is a draft until you explicitly publish it. Before publishing you see a per-field, per-language diff of what will change, and every published change is recorded in history with one-click rollback.",
        question: "Can AppBoard break my live store listing?",
      },
      {
        answer:
          "Both. AppBoard connects to App Store Connect and Google Play Console, and apps from both stores sit side by side in one workspace, including grouped Android and iOS pairs of the same app.",
        question: "Does it support the App Store and Google Play?",
      },
      {
        answer:
          "The App Store and Google Play work today. Huawei AppGallery, Samsung Galaxy Store, Amazon Appstore, Xiaomi GetApps, RuStore and ONE Store are marked coming soon: they are in active development and not released yet, so treat every coming-soon label on this page as exactly that.",
        question: "What about stores other than Apple and Google?",
      },
      {
        answer:
          "AI features run through OpenRouter with your own API key, so you pick the model and pay the provider directly. AI drafts descriptions, translations, keyword ideas and review replies, but nothing is ever sent to a store without your approval.",
        question: "How does the AI work, and whose API key does it use?",
      },
      {
        answer:
          "Yes. AppBoard is an open-source product, and everything runs in the web panel: no desktop app, no plugins, nothing to install. If it works in your browser, it works.",
        question: "Is AppBoard open source, and do I need to install anything?",
      },
      {
        answer:
          "AppBoard is free while in beta. No credit card is required, and you'll be told well in advance before any paid plan is introduced.",
        question: "What does it cost?",
      },
    ],
    eyebrow: "FAQ",
    faqHref: "/faq",
    faqLabel: "full FAQ",
    footnoteLead: "More questions answered in the",
    footnoteMiddle: "and the",
    footnoteTail: ".",
    schemaPath: "/",
    title: "Questions people actually ask",
  },
  features: {
    eyebrow: "Features",
    items: [
      {
        description:
          "Link App Store Connect and Google Play Console once. AppBoard pulls in every app and every localization you already have.",
        href: "/docs/connect-app-store",
        title: "Connect once, import everything",
      },
      {
        description:
          "Design and export store graphics in your browser at exact device sizes. No account, no install, free forever.",
        href: `${APP_URL}/editor`,
        title: "Free screenshot editor",
      },
      {
        description:
          "Track keyword positions with day-over-day movement, compare markets and analyze competitors on any store app.",
        href: "/docs/research",
        title: "Keyword and market research",
      },
      {
        description:
          "Both stores' reviews in one inbox with rating, version and device context, plus AI-drafted replies you approve.",
        href: "/docs/reviews",
        title: "Reviews in one inbox",
      },
      {
        description:
          "Batch publish metadata and graphics to both stores, as a draft or straight for review, with a per-item report.",
        href: "/docs/publishing",
        title: "Publish from one dashboard",
      },
      {
        description:
          "Store credentials sit in an end-to-end encrypted vault. AppBoard's servers never see them in plaintext.",
        href: "/docs/security",
        title: "Encrypted credentials vault",
      },
      {
        description:
          "Free while in beta and source-available forever. Run the whole thing on your own server whenever you want to.",
        href: "/docs/self-hosting",
        title: "Open source and self-hostable",
      },
      {
        description:
          "Propose the features you need and vote on everyone else's, so the roadmap is decided by the people shipping apps.",
        href: DISCORD_URL,
        linkLabel: "Shape it on Discord",
        title: "A wishlist you vote on",
      },
    ],
    title: "Everything else, briefly",
  },
  freeTool: {
    ctaLabel: "Open the editor",
    ctaNote: "Free forever · no login",
    description:
      "Design App Store and Google Play screenshots for free - right in your browser. Pick a template, drop in your screenshot, rotate a real 3D device, export at exact store dimensions. No account needed.",
    eyebrow: "Free tool",
    gallery: [
      {
        alt: "Hero screenshot template: 3D-tilted iPhone on a magenta-violet gradient with a bold headline",
        label: "Hero 3D",
      },
      {
        alt: "Dark mode screenshot template with dotted background and a light app UI in an iPhone frame",
        label: "Minimal dark",
      },
      {
        alt: "Award laurel screenshot template: App of the Day laurels above a device mockup on deep violet",
        label: "Award laurel",
      },
      {
        alt: "Sahara screenshot template: warm dune gradient with a tilted device and handwritten headline",
        label: "Sahara",
      },
      {
        alt: "Social proof screenshot template with a five-star review quote above the device",
        label: "Social proof",
      },
      {
        alt: "Midnight screenshot template: elegant dark scene with After hours, in style headline",
        label: "Midnight",
      },
      {
        alt: "Curved promo screenshot template: orange gradient with arched Start your journey text",
        label: "Curved promo",
      },
      {
        alt: "Feature callout screenshot template with a speech-bubble annotation pointing at the app UI",
        label: "Feature callout",
      },
      {
        alt: "Clay showcase screenshot template: teal wave background with a clay-style device mockup",
        label: "Clay showcase",
      },
      {
        alt: "Bold statement screenshot template: Loved by 1M+ users headline underlined in yellow",
        label: "Bold statement",
      },
      {
        alt: "Minimal light screenshot template: clean white scene with Simple. Fast. Yours. headline",
        label: "Minimal light",
      },
    ],
    galleryLead:
      "Every one of these took under a minute - pick a template, your screenshot stays, the scene changes:",
    points: [
      "Real 3D device models - rotate an iPhone or Galaxy in true WebGL, plus drawn and clay styles",
      "20+ scene templates: hero shots, panoramas, social proof, award laurels, dark mode",
      "Gradients, mesh, patterns, decorative text, shapes - and language variants per locale",
      "Panorama layouts that export as several consecutive store screenshots",
      "100% in your browser - no sign-up, nothing uploaded to a server",
    ],
    title: "Free ASO Screenshot Editor",
  },
  hero: {
    dashboardAlt:
      "AppBoard dashboard showing six apps from App Store and Google Play grouped in one workspace",
    facts: [
      "App Store + Google Play",
      "Every language in one editor",
      "Diffs and rollback",
      "Open source",
    ],
    lead: "Metadata in every language, screenshots, reviews and AI research for the App Store and Google Play. Draft it, review the diff, publish everywhere.",
    note: "Free while in beta. No credit card, no sales call.",
    primaryCta: "Get started free",
    secondaryCta: "Open the live demo",
    titleHighlight: "one panel",
    titleLead: "Run every app store listing from",
  },
  howItWorks: {
    eyebrow: "How it works",
    steps: [
      {
        description:
          "Link App Store Connect and Google Play Console once. Your keys go straight into an end-to-end encrypted vault.",
        title: "Connect your stores",
      },
      {
        description:
          "Every field, every language, one editor. Design store graphics in the browser at the exact sizes each store demands.",
        title: "Edit listings and screenshots",
      },
      {
        description:
          "Check the diff, then push to both stores in one batch. Every change is versioned and one click from a rollback.",
        title: "Publish everywhere",
      },
      {
        description:
          "Both stores' reviews land in one inbox. Keyword positions, market data and competitor research sit next to them.",
        title: "Track reviews and keywords",
      },
    ],
    title: "Four steps, no console hopping",
  },
  pricingTeaser: {
    ctaHref: "/pricing",
    ctaLabel: "See the planned plans",
    lead: "Every plan costs $0 while AppBoard is in beta: no credit card, no feature locks. The Free, Pro and Team tiers are already mapped out, and pricing will be announced well before general availability.",
    titleHighlight: "free",
    titleLead: "Right now it is",
  },
  stores: {
    eyebrow: "Publish to",
    footnote:
      "One listing, written once, on its way to every store you ship on.",
    liveStores: ["App Store", "Google Play"],
    plannedStores: [
      "Huawei AppGallery",
      "Samsung Galaxy Store",
      "Amazon Appstore",
      "Xiaomi GetApps",
      "RuStore",
      "ONE Store",
    ],
  },
  tour: {
    eyebrow: "Inside the panel",
    stops: [
      {
        docsHref: "/docs/listings",
        docsLabel: "Listings and languages",
        eyebrow: "One editor",
        lead: "Connect App Store Connect and Google Play once and AppBoard pulls every localization from both stores. From then on the title, subtitle, description, keywords and what's new for every language live in a single editor, as drafts.",
        points: [
          "Character counters tick against each store's real limits as you type",
          "Languages you touched stay marked until you push them",
          "Drafts sit next to what is actually live in the store",
        ],
        title: "Every language in one editor",
        visualAlt:
          "AppBoard listings editor with title, short description and full description fields, per-language tabs and live character counters",
      },
      {
        docsHref: "/docs/publishing",
        docsLabel: "Publishing",
        eyebrow: "Diff before publish",
        lead: "Before anything reaches a store you see a GitHub-style diff: exactly which fields changed, in which language, old value against what is live right now. Then push to both stores from one dashboard and get a per-item report.",
        points: [
          "Red and green, field by field, language by language",
          "Push as a draft or send straight for review",
          "Nothing leaves your draft until you press publish",
        ],
        title: "See exactly what changes before it goes live",
        visualAlt: "",
      },
      {
        docsHref: "/docs/ai-assistant",
        docsLabel: "AI assistant",
        eyebrow: "AI translation",
        lead: "Translation that understands ASO instead of translating word for word. Titles, subtitles and keywords are localized with your store limits and keyword intent in mind, and brand terms you mark as do-not-translate stay untouched.",
        points: [
          "Per-field do-not-translate terms for brand and product names",
          "Free-text instructions to steer tone and glossary",
          "Runs on your own OpenRouter key, with any model you pick",
        ],
        title: "AI translation that speaks ASO, not just German",
        visualAlt: "",
      },
      {
        docsHref: "/docs/history-and-rollback",
        docsLabel: "History and rollback",
        eyebrow: "History",
        lead: "Every published change is recorded per field and per language with a timestamp, so you can answer what did we change in May without scrolling Slack. When an update turns out to be a mistake, one click puts the old value back in your draft.",
        points: [
          "Filter the log by field and by language",
          "One-click rollback into your draft, never straight to the store",
          "A full audit trail of who changed what, and when",
        ],
        title: "An undo button for your store listing",
        visualAlt:
          "AppBoard change history with GitHub-style red and green diffs per field and language, and rollback buttons",
      },
      {
        docsHref: "/docs/screenshots",
        docsLabel: "Screenshots and graphics",
        eyebrow: "Screenshots",
        lead: "Screenshots, icons and feature graphics live in one grid, per device and per language. Design them in the built-in editor, tilt a real 3D device, and export at the exact size each store demands. This is the actual editor, recorded in the browser.",
        points: [
          "Per language and per device, from iPhone to 10 inch tablets",
          "Real WebGL device models you can rotate, plus 40 scene templates",
          "Free to use without an account, and nothing is uploaded to a server",
        ],
        title: "A graphics editor that knows every store size",
        videoCaption:
          "Pick a template, tilt the 3D device, export at store size",
        visualAlt:
          "Screen recording of the AppBoard screenshot editor: applying the Hero 3D scene template and rotating a WebGL iPhone model through pose presets",
      },
      {
        docsHref: "/docs/research",
        docsLabel: "Research and reviews",
        eyebrow: "Research",
        lead: "AppBoard reads the reviews for you and groups the complaints into themes, so you learn what keeps breaking without reading hundreds of them. The same research works on competitors, alongside keyword positions and market comparisons.",
        points: [
          "Review themes, sentiment and what users love or hate most",
          "Keyword rank tracking with day-over-day movement",
          "Works on any store app, not only the ones you connected",
        ],
        title: "Find out what users actually complain about",
        visualAlt:
          "AppBoard review analysis with an AI summary, positive and negative sentiment counts, features users love against features they criticize, and a ranked list of top user irritations",
      },
    ],
    title: "This is what you actually get",
  },
  translateDemo: {
    badgeDoNotTranslate: "Do not translate: Lumina",
    badgeKeywords: "Keeps ASO keywords",
    badgeLimit: "Respects the 30 character title limit",
    footnote:
      "Every line lands in your draft. You edit and approve before anything is published.",
    rows: [
      { language: "German", limit: 30, value: "Lumina: KI-Fotoeditor" },
      { language: "French", limit: 30, value: "Lumina : editeur photo IA" },
      { language: "Spanish", limit: 30, value: "Lumina: editor de fotos IA" },
    ],
    sourceLabel: "Source, English",
    sourceValue: "Lumina: AI Photo Editor",
  },
};

const PL: HomeContent = {
  cta: {
    lead: "Wejdź do demo na żywo i poklikaj po prawdziwym workspace albo podłącz własne sklepy w kilka minut. Za darmo w becie.",
    primaryCta: "Otwórz demo na żywo",
    secondaryCta: "Załóż darmowe konto",
    titleHighlight: "spokojny",
    titleLead: "Twój następny dzień premiery może być",
  },
  diffDemo: {
    headerNote: "3 pola w 2 językach",
    headerTitle: "Zmiany do wysłania",
    publishLabel: "Opublikuj w obu sklepach",
    publishNote: "Nic nie wyjedzie, dopóki tego nie klikniesz",
    rows: [
      {
        field: "Tytuł",
        language: "EN",
        newValue: "Lumina: AI Photo Editor",
        oldValue: "Lumina - Photo Editor",
      },
      {
        field: "Podtytuł",
        language: "EN",
        newValue: "Edit photos with AI in seconds",
        oldValue: "Edit your photos fast",
      },
      {
        field: "Kurzbeschreibung",
        language: "DE",
        newValue: "Fotos mit KI bearbeiten",
        oldValue: "Fotos schnell bearbeiten",
      },
    ],
  },
  faq: {
    docsHref: "/pl/docs",
    docsLabel: "dokumentacji",
    entries: [
      {
        answer:
          "Nie trzeba niczego podłączać. Demo na żywo to prawdziwy workspace AppBoard wypełniony przykładowymi aplikacjami, opiniami i historią listingów. Wyklikasz w nim wszystko, bez rejestracji i bez danych dostępowych do sklepów.",
        question: "Czy mogę wypróbować AppBoard bez podłączania własnych aplikacji?",
      },
      {
        answer:
          "Twój klucz do App Store Connect i konto serwisowe Google Play leżą w sejfie szyfrowanym end-to-end. Są zaszyfrowane kluczem wyprowadzonym z Twojego hasła, więc serwery AppBoard nigdy nie widzą ich otwartym tekstem, a nic nie zostanie opublikowane, dopóki nie odblokujesz sejfu.",
        question: "Czy powierzenie danych dostępowych do sklepów jest bezpieczne?",
      },
      {
        answer:
          "Nie. Wszystko, co edytujesz, jest wersją roboczą, dopóki świadomie tego nie opublikujesz. Przed publikacją widzisz diff pole po polu i język po języku, a każda opublikowana zmiana trafia do historii z rollbackiem na jedno kliknięcie.",
        question: "Czy AppBoard może zepsuć mój listing w sklepie?",
      },
      {
        answer:
          "Oba. AppBoard łączy się z App Store Connect i Google Play Console, a aplikacje z obu sklepów stoją obok siebie w jednym workspace, razem z powiązanymi parami Android i iOS tej samej aplikacji.",
        question: "Czy obsługujecie App Store i Google Play?",
      },
      {
        answer:
          "App Store i Google Play działają już dziś. Huawei AppGallery, Samsung Galaxy Store, Amazon Appstore, Xiaomi GetApps, RuStore i ONE Store mają etykietę wkrótce: są w aktywnym rozwoju i jeszcze nie zostały wydane, więc każdą etykietę wkrótce na tej stronie traktuj dosłownie.",
        question: "A co ze sklepami innymi niż Apple i Google?",
      },
      {
        answer:
          "Funkcje AI działają przez OpenRouter na Twoim własnym kluczu API, więc sam wybierasz model i płacisz bezpośrednio dostawcy. AI pisze opisy, tłumaczenia, pomysły na słowa kluczowe i odpowiedzi na opinie, ale nic nie trafia do sklepu bez Twojej akceptacji.",
        question: "Jak działa AI i na czyim kluczu API?",
      },
      {
        answer:
          "Tak. AppBoard to produkt open source, a wszystko dzieje się w panelu w przeglądarce: żadnej aplikacji desktopowej, żadnych wtyczek, nic do instalowania. Jeśli działa Ci przeglądarka, działa AppBoard.",
        question: "Czy AppBoard jest open source i czy muszę coś instalować?",
      },
      {
        answer:
          "AppBoard jest darmowy w becie. Karta nie jest potrzebna, a o wprowadzeniu jakiegokolwiek płatnego planu uprzedzimy z dużym wyprzedzeniem.",
        question: "Ile to kosztuje?",
      },
    ],
    eyebrow: "FAQ",
    faqHref: "/pl/faq",
    faqLabel: "pełnym FAQ",
    footnoteLead: "Więcej pytań znajdziesz w",
    footnoteMiddle: "oraz w",
    footnoteTail: ".",
    schemaLanguage: "pl-PL",
    schemaPath: "/pl",
    title: "Pytania, które naprawdę padają",
  },
  features: {
    eyebrow: "Funkcje",
    items: [
      {
        description:
          "Podłącz App Store Connect i Google Play Console raz. AppBoard zaciągnie każdą aplikację i każdą lokalizację, którą już masz.",
        href: "/pl/docs/connect-app-store",
        linkLabel: "Dowiedz się więcej",
        title: "Podłącz raz, zaimportuj wszystko",
      },
      {
        description:
          "Projektuj i eksportuj grafiki do sklepów w przeglądarce, dokładnie w wymiarach urządzeń. Bez konta, bez instalacji, za darmo na zawsze.",
        href: `${APP_URL}/editor`,
        linkLabel: "Dowiedz się więcej",
        title: "Darmowy edytor zrzutów ekranu",
      },
      {
        description:
          "Śledź pozycje słów kluczowych ze zmianą dzień do dnia, porównuj rynki i analizuj konkurencję na dowolnej aplikacji ze sklepu.",
        href: "/pl/docs/research",
        linkLabel: "Dowiedz się więcej",
        title: "Research słów kluczowych i rynków",
      },
      {
        description:
          "Opinie z obu sklepów w jednej skrzynce, z oceną, wersją i kontekstem urządzenia, plus odpowiedzi napisane przez AI, które zatwierdzasz.",
        href: "/pl/docs/reviews",
        linkLabel: "Dowiedz się więcej",
        title: "Opinie w jednej skrzynce",
      },
      {
        description:
          "Wysyłaj metadane i grafiki do obu sklepów w paczkach, jako wersję roboczą albo od razu do recenzji, z raportem pozycja po pozycji.",
        href: "/pl/docs/publishing",
        linkLabel: "Dowiedz się więcej",
        title: "Publikuj z jednego panelu",
      },
      {
        description:
          "Dane dostępowe do sklepów leżą w sejfie szyfrowanym end-to-end. Serwery AppBoard nigdy nie widzą ich otwartym tekstem.",
        href: "/pl/docs/security",
        linkLabel: "Dowiedz się więcej",
        title: "Szyfrowany sejf na dane dostępowe",
      },
      {
        description:
          "Za darmo w becie, a kod dostępny na zawsze. Całość odpalisz na własnym serwerze, kiedy tylko zechcesz.",
        href: "/pl/docs/self-hosting",
        linkLabel: "Dowiedz się więcej",
        title: "Open source i self-hosting",
      },
      {
        description:
          "Zgłaszaj funkcje, których potrzebujesz, i głosuj na pomysły innych, żeby o roadmapie decydowali ci, którzy wydają aplikacje.",
        href: DISCORD_URL,
        linkLabel: "Współtwórz na Discordzie",
        title: "Wishlista, na którą głosujesz",
      },
    ],
    title: "Cała reszta, w skrócie",
  },
  freeTool: {
    ctaLabel: "Otwórz edytor",
    ctaNote: "Za darmo na zawsze · bez logowania",
    description:
      "Projektuj zrzuty ekranu do App Store i Google Play za darmo, prosto w przeglądarce. Wybierz szablon, wrzuć swój zrzut, obróć prawdziwe urządzenie 3D, wyeksportuj w dokładnych wymiarach sklepu. Konto niepotrzebne.",
    eyebrow: "Darmowe narzędzie",
    gallery: [
      {
        alt: "Szablon zrzutu Hero: iPhone przechylony w 3D na gradiencie magenta i fiolet z mocnym nagłówkiem",
        label: "Hero 3D",
      },
      {
        alt: "Szablon zrzutu w trybie ciemnym z kropkowanym tłem i jasnym interfejsem aplikacji w ramce iPhone'a",
        label: "Minimal dark",
      },
      {
        alt: "Szablon zrzutu z laurami nagrody: laury App of the Day nad makietą urządzenia na głębokim fiolecie",
        label: "Award laurel",
      },
      {
        alt: "Szablon zrzutu Sahara: ciepły gradient wydm z przechylonym urządzeniem i odręcznym nagłówkiem",
        label: "Sahara",
      },
      {
        alt: "Szablon zrzutu z social proof: cytat z pięciogwiazdkowej opinii nad urządzeniem",
        label: "Social proof",
      },
      {
        alt: "Szablon zrzutu Midnight: elegancka ciemna scena z nagłówkiem After hours, in style",
        label: "Midnight",
      },
      {
        alt: "Szablon zrzutu Curved promo: pomarańczowy gradient z tekstem Start your journey wygiętym w łuk",
        label: "Curved promo",
      },
      {
        alt: "Szablon zrzutu z wyróżnieniem funkcji: dymek z adnotacją wskazujący na interfejs aplikacji",
        label: "Feature callout",
      },
      {
        alt: "Szablon zrzutu Clay showcase: turkusowe tło z falą i makietą urządzenia w stylu clay",
        label: "Clay showcase",
      },
      {
        alt: "Szablon zrzutu Bold statement: nagłówek Loved by 1M+ users podkreślony na żółto",
        label: "Bold statement",
      },
      {
        alt: "Szablon zrzutu Minimal light: czysta biała scena z nagłówkiem Simple. Fast. Yours.",
        label: "Minimal light",
      },
    ],
    galleryLead:
      "Każdy z nich powstał w mniej niż minutę: wybierasz szablon, Twój zrzut zostaje, zmienia się scena:",
    points: [
      "Prawdziwe modele urządzeń 3D: obracaj iPhone'a albo Galaxy w prawdziwym WebGL, plus style rysowany i clay",
      "20+ szablonów scen: hero shoty, panoramy, social proof, laury nagród, tryb ciemny",
      "Gradienty, mesh, wzory, teksty ozdobne, kształty oraz warianty językowe dla każdej lokalizacji",
      "Układy panoramiczne, które eksportują się jako kilka kolejnych zrzutów w sklepie",
      "100% w Twojej przeglądarce: bez rejestracji, nic nie trafia na serwer",
    ],
    title: "Darmowy edytor zrzutów ekranu ASO",
  },
  hero: {
    dashboardAlt:
      "Panel AppBoard z sześcioma aplikacjami z App Store i Google Play zebranymi w jednym workspace",
    facts: [
      "App Store + Google Play",
      "Wszystkie języki w jednym edytorze",
      "Diffy i rollback",
      "Open source",
    ],
    lead: "Metadane w każdym języku, zrzuty ekranu, opinie i research AI dla App Store i Google Play. Przygotuj draft, sprawdź diff, opublikuj wszędzie.",
    note: "Za darmo w becie. Bez karty, bez rozmowy z handlowcem.",
    primaryCta: "Zacznij za darmo",
    secondaryCta: "Otwórz demo na żywo",
    titleHighlight: "jednego panelu",
    titleLead: "Prowadź wszystkie listingi w sklepach z",
  },
  howItWorks: {
    eyebrow: "Jak to działa",
    steps: [
      {
        description:
          "Podłącz App Store Connect i Google Play Console raz. Klucze trafiają prosto do sejfu szyfrowanego end-to-end.",
        title: "Podłącz sklepy",
      },
      {
        description:
          "Każde pole, każdy język, jeden edytor. Grafiki do sklepów projektujesz w przeglądarce, dokładnie w wymiarach, których wymaga każdy sklep.",
        title: "Edytuj listingi i zrzuty ekranu",
      },
      {
        description:
          "Sprawdź diff i wyślij zmiany do obu sklepów w jednej paczce. Każda zmiana jest wersjonowana, a rollback to jedno kliknięcie.",
        title: "Publikuj wszędzie",
      },
      {
        description:
          "Opinie z obu sklepów lądują w jednej skrzynce. Obok nich pozycje słów kluczowych, dane rynkowe i research konkurencji.",
        title: "Śledź opinie i słowa kluczowe",
      },
    ],
    title: "Cztery kroki, bez skakania po konsolach",
  },
  pricingTeaser: {
    ctaHref: "/pl/pricing",
    ctaLabel: "Zobacz planowane pakiety",
    lead: "Każdy plan kosztuje $0, dopóki AppBoard jest w becie: bez karty, bez blokowanych funkcji. Poziomy Free, Pro i Team są już rozpisane, a cennik ogłosimy na długo przed pełną premierą.",
    titleHighlight: "za darmo",
    titleLead: "Teraz jest",
  },
  stores: {
    eyebrow: "Publikujesz do",
    footnote:
      "Jeden listing, napisany raz, trafia do każdego sklepu, w którym wydajesz.",
    liveStores: ["App Store", "Google Play"],
    plannedStores: [
      "Huawei AppGallery",
      "Samsung Galaxy Store",
      "Amazon Appstore",
      "Xiaomi GetApps",
      "RuStore",
      "ONE Store",
    ],
  },
  tour: {
    eyebrow: "Zaglądamy do panelu",
    stops: [
      {
        docsHref: "/pl/docs/listings",
        docsLabel: "Listingi i języki",
        eyebrow: "Jeden edytor",
        lead: "Podłącz App Store Connect i Google Play raz, a AppBoard pobierze wszystkie lokalizacje z obu sklepów. Od tej pory tytuł, podtytuł, opis, słowa kluczowe i nowości dla każdego języka żyją w jednym edytorze, jako wersje robocze.",
        points: [
          "Liczniki znaków odliczają do realnych limitów każdego sklepu, kiedy piszesz",
          "Języki, w których coś zmieniłeś, zostają oznaczone, dopóki ich nie wyślesz",
          "Wersje robocze stoją obok tego, co naprawdę jest teraz w sklepie",
        ],
        title: "Wszystkie języki w jednym edytorze",
        visualAlt:
          "Edytor listingów w AppBoard z polami tytułu, krótkiego opisu i pełnego opisu, zakładkami języków i licznikami znaków na żywo",
      },
      {
        docsHref: "/pl/docs/publishing",
        docsLabel: "Publikacja",
        eyebrow: "Diff przed publikacją",
        lead: "Zanim cokolwiek trafi do sklepu, widzisz diff w stylu GitHuba: dokładnie które pola się zmieniły, w którym języku, stara wartość obok tego, co jest w sklepie teraz. Potem wysyłasz zmiany do obu sklepów z jednego panelu i dostajesz raport pozycja po pozycji.",
        points: [
          "Czerwone i zielone, pole po polu, język po języku",
          "Wyślij jako wersję roboczą albo od razu do recenzji",
          "Nic nie opuszcza Twojego draftu, dopóki nie klikniesz publikuj",
        ],
        title: "Zobacz dokładnie, co się zmieni, zanim trafi do sklepu",
        visualAlt: "",
      },
      {
        docsHref: "/pl/docs/ai-assistant",
        docsLabel: "Asystent AI",
        eyebrow: "Tłumaczenie AI",
        lead: "Tłumaczenie, które rozumie ASO, zamiast przekładać słowo po słowie. Tytuły, podtytuły i słowa kluczowe lokalizujemy z myślą o limitach sklepów i intencji wyszukiwania, a terminy marki oznaczone jako do-not-translate zostają nietknięte.",
        points: [
          "Terminy do-not-translate ustawiane per pole, dla nazw marki i produktu",
          "Instrukcje własnym tekstem, żeby ustawić ton i słownik",
          "Działa na Twoim własnym kluczu OpenRouter, z dowolnym modelem",
        ],
        title: "Tłumaczenie AI, które mówi w ASO, nie tylko po niemiecku",
        visualAlt: "",
      },
      {
        docsHref: "/pl/docs/history-and-rollback",
        docsLabel: "Historia i rollback",
        eyebrow: "Historia",
        lead: "Każda opublikowana zmiana jest zapisana per pole i per język, ze znacznikiem czasu, więc odpowiesz na pytanie co zmienialiśmy w maju bez przewijania Slacka. Kiedy aktualizacja okaże się pomyłką, jedno kliknięcie przywraca starą wartość do wersji roboczej.",
        points: [
          "Filtruj log po polu i po języku",
          "Rollback jednym kliknięciem do wersji roboczej, nigdy prosto do sklepu",
          "Pełny audit trail: kto co zmienił i kiedy",
        ],
        title: "Cofnij zmiany w listingu jednym kliknięciem",
        visualAlt:
          "Historia zmian w AppBoard z diffami w czerwieni i zieleni w stylu GitHuba, per pole i język, oraz przyciskami rollbacku",
      },
      {
        docsHref: "/pl/docs/screenshots",
        docsLabel: "Zrzuty ekranu i grafiki",
        eyebrow: "Zrzuty ekranu",
        lead: "Zrzuty ekranu, ikony i grafiki promocyjne leżą w jednej siatce, per urządzenie i per język. Zaprojektujesz je we wbudowanym edytorze, przechylisz prawdziwe urządzenie 3D i wyeksportujesz dokładnie w wymiarach, których wymaga każdy sklep. To nagranie prawdziwego edytora, prosto z przeglądarki.",
        points: [
          "Per język i per urządzenie, od iPhone'a po tablety 10 cali",
          "Prawdziwe modele urządzeń WebGL, które obracasz, plus 40 szablonów scen",
          "Za darmo i bez konta, nic nie trafia na serwer",
        ],
        title: "Edytor grafik, który zna wymiary każdego sklepu",
        videoCaption:
          "Wybierz szablon, przechyl urządzenie 3D, wyeksportuj w wymiarze sklepu",
        visualAlt:
          "Nagranie ekranu edytora zrzutów AppBoard: nakładanie szablonu sceny Hero 3D i obracanie modelu iPhone'a w WebGL przez gotowe ujęcia",
      },
      {
        docsHref: "/pl/docs/research",
        docsLabel: "Research i opinie",
        eyebrow: "Research",
        lead: "AppBoard czyta opinie za Ciebie i grupuje skargi w tematy, więc wiesz, co się psuje, bez czytania setek recenzji. Ten sam research działa na konkurencji, obok pozycji słów kluczowych i porównań rynków.",
        points: [
          "Tematy opinii, sentyment i to, co użytkownicy kochają albo czego nie znoszą",
          "Śledzenie pozycji słów kluczowych ze zmianą dzień do dnia",
          "Działa na dowolnej aplikacji ze sklepu, nie tylko na tych podłączonych",
        ],
        title: "Dowiedz się, na co użytkownicy naprawdę narzekają",
        visualAlt:
          "Analiza opinii w AppBoard z podsumowaniem AI, liczbą pozytywnych i negatywnych sygnałów, funkcjami chwalonymi obok krytykowanych oraz listą najczęstszych irytacji użytkowników",
      },
    ],
    title: "Oto, co naprawdę dostajesz",
  },
  translateDemo: {
    badgeDoNotTranslate: "Nie tłumacz: Lumina",
    badgeKeywords: "Zachowuje słowa kluczowe ASO",
    badgeLimit: "Trzyma limit 30 znaków w tytule",
    footnote:
      "Każda linia ląduje w Twojej wersji roboczej. Edytujesz i zatwierdzasz, zanim cokolwiek zostanie opublikowane.",
    rows: [
      { language: "Niemiecki", limit: 30, value: "Lumina: KI-Fotoeditor" },
      { language: "Francuski", limit: 30, value: "Lumina : editeur photo IA" },
      { language: "Hiszpański", limit: 30, value: "Lumina: editor de fotos IA" },
    ],
    sourceLabel: "Źródło, angielski",
    sourceValue: "Lumina: AI Photo Editor",
  },
};

export const HOME_CONTENT: Record<SiteLocale, HomeContent> = { en: EN, pl: PL };
