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

export interface FreeToolItemContent {
  ctaLabel: string;
  description: string;
  href: string;
  title: string;
}

export interface FreeToolContent {
  ctaLabel: string;
  ctaNote: string;
  description: string;
  /** Heading of the editor block under the tool cards. */
  editorTitle: string;
  eyebrow: string;
  /** The tools themselves; the editor keeps its gallery below. */
  tools: FreeToolItemContent[];
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
          "Paste an App Store or Google Play link and the whole listing is in AppBoard. Connect the store API later, only for publishing.",
        href: "/docs/getting-started",
        title: "Start from a store link",
      },
      {
        description:
          "ASO check-up, keyword check and the screenshot editor run in your browser - free, no login, nothing uploaded.",
        href: "/#free-tools",
        title: "Free tools, no account",
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
      "Check any listing, score your keywords and design store screenshots - all in your browser, nothing uploaded, no sign-up. The same engine AppBoard uses inside the panel.",
    editorTitle: "Free ASO Screenshot Editor",
    eyebrow: "Free tools",
    tools: [
      {
        ctaLabel: "Check a listing",
        description:
          "Paste an App Store link: listing score, the keywords you rank for (top 200), the competition and three concrete next steps.",
        href: `${APP_URL}/aso-check`,
        title: "ASO check-up",
      },
      {
        ctaLabel: "Score keywords",
        description:
          "Up to five keywords a day: popularity, difficulty, opportunity and a download estimate for the market you pick.",
        href: `${APP_URL}/keyword-check`,
        title: "Keyword check",
      },
      {
        ctaLabel: "Open the editor",
        description:
          "Templates, real 3D devices, exact store sizes. Export and upload - or open your store screenshots straight from the panel.",
        href: `${APP_URL}/editor`,
        title: "Screenshot editor",
      },
    ],
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
    title: "Three free tools, no account",
  },
  hero: {
    dashboardAlt:
      "AppBoard dashboard showing six apps from App Store and Google Play grouped in one workspace",
    facts: [
      "App Store + Google Play",
      "Start from a store link, no API needed",
      "Diffs and rollback",
      "Open source",
    ],
    lead: "Paste a store link and your listing, screenshots, ratings and reviews are in AppBoard - no API keys. Audit it, fix the text with accept-or-reject diffs, then publish: by copy and paste, or in one click once a store is connected.",
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
          "Add an app from its App Store or Google Play page. The listing in every language, screenshots, ratings and reviews come in on their own - no API credentials, no console.",
        title: "Paste a store link",
      },
      {
        description:
          "A listing score on what the store really serves, the keywords you can actually win, and text fixes as diffs you accept or reject. The draft never touches the store on its own.",
        title: "Audit and fix the text",
      },
      {
        description:
          "Copy the changes into the console and mark them done, or connect the store API and push both stores in one batch - versioned, one click from a rollback.",
        title: "Publish your way",
      },
      {
        description:
          "Nightly keyword positions with every release and text change marked on the chart, reviews from every storefront in one inbox, and a nudge when a draft sits unpublished.",
        title: "Track what moved",
      },
    ],
    title: "Four steps, starting from a link",
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
          "Wklej link z App Store albo Google Play i cały listing jest w AppBoard. API sklepu podłączysz później, tylko do publikacji.",
        href: "/pl/docs/getting-started",
        linkLabel: "Dowiedz się więcej",
        title: "Start od linku ze sklepu",
      },
      {
        description:
          "ASO check-up, keyword check i edytor zrzutów działają w przeglądarce - za darmo, bez logowania, nic nie trafia na serwer.",
        href: "/pl#free-tools",
        linkLabel: "Dowiedz się więcej",
        title: "Darmowe narzędzia bez konta",
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
      "Sprawdź dowolny listing, oceń swoje słowa kluczowe i zaprojektuj zrzuty do sklepu - wszystko w przeglądarce, nic nie trafia na serwer, bez rejestracji. Ten sam silnik, którego AppBoard używa w panelu.",
    editorTitle: "Darmowy edytor zrzutów ekranu ASO",
    eyebrow: "Darmowe narzędzia",
    tools: [
      {
        ctaLabel: "Sprawdź listing",
        description:
          "Wklej link z App Store: ocena listingu, słowa kluczowe, na które rankujesz (top 200), konkurencja i trzy konkretne kolejne kroki.",
        href: `${APP_URL}/aso-check`,
        title: "ASO check-up",
      },
      {
        ctaLabel: "Oceń słowa kluczowe",
        description:
          "Do pięciu słów kluczowych dziennie: popularność, trudność, szansa i estymata pobrań dla wybranego rynku.",
        href: `${APP_URL}/keyword-check`,
        title: "Keyword check",
      },
      {
        ctaLabel: "Otwórz edytor",
        description:
          "Szablony, prawdziwe urządzenia 3D, dokładne wymiary sklepów. Wyeksportuj i wgraj albo otwórz zrzuty ze sklepu prosto z panelu.",
        href: `${APP_URL}/editor`,
        title: "Edytor zrzutów ekranu",
      },
    ],
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
    title: "Trzy darmowe narzędzia, bez konta",
  },
  hero: {
    dashboardAlt:
      "Panel AppBoard z sześcioma aplikacjami z App Store i Google Play zebranymi w jednym workspace",
    facts: [
      "App Store + Google Play",
      "Start od linku ze sklepu, bez API",
      "Diffy i rollback",
      "Open source",
    ],
    lead: "Wklej link ze sklepu, a listing, zrzuty ekranu, oceny i opinie są w AppBoard - bez kluczy API. Zrób audyt, popraw tekst diffami do akceptacji, potem opublikuj: kopiuj-wklej albo jednym kliknięciem po podłączeniu sklepu.",
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
          "Dodaj aplikację z jej strony w App Store albo Google Play. Listing w każdym języku, zrzuty ekranu, oceny i opinie wchodzą same - bez danych API, bez konsoli.",
        title: "Wklej link ze sklepu",
      },
      {
        description:
          "Ocena listingu na tym, co sklep naprawdę serwuje, słowa kluczowe, które realnie da się wygrać, i poprawki tekstu jako diffy do akceptacji albo odrzucenia. Draft sam nie dotyka sklepu.",
        title: "Audyt i poprawki tekstu",
      },
      {
        description:
          "Skopiuj zmiany do konsoli i oznacz jako wdrożone albo podłącz API sklepu i wyślij do obu sklepów w jednej paczce - wersjonowane, rollback jednym kliknięciem.",
        title: "Publikuj po swojemu",
      },
      {
        description:
          "Nocne pozycje słów kluczowych z każdym wydaniem i zmianą tekstu zaznaczoną na wykresie, opinie z każdego sklepu w jednej skrzynce i przypomnienie, gdy draft leży nieopublikowany.",
        title: "Śledź, co się ruszyło",
      },
    ],
    title: "Cztery kroki, od linku",
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


const DE: HomeContent = {
  cta: {
    lead: "Klicken Sie sich durch die Live-Demo und sehen Sie sich einen echten Workspace an, oder verbinden Sie in wenigen Minuten Ihre eigenen Stores. Während der Beta kostenlos.",
    primaryCta: "Live-Demo öffnen",
    secondaryCta: "Kostenloses Konto anlegen",
    titleHighlight: "ruhig",
    titleLead: "Ihr nächster Release-Tag könnte",
  },
  diffDemo: {
    headerNote: "3 Felder in 2 Sprachen",
    headerTitle: "Offene Änderungen",
    publishLabel: "In beide Stores veröffentlichen",
    publishNote: "Nichts geht raus, bevor Sie darauf drücken",
    rows: [
      {
        field: "Titel",
        language: "EN",
        newValue: "Lumina: AI Photo Editor",
        oldValue: "Lumina - Photo Editor",
      },
      {
        field: "Untertitel",
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
    docsHref: "/de/docs",
    docsLabel: "Dokumentation",
    entries: [
      {
        answer:
          "Nein. Die Live-Demo ist ein echter AppBoard-Workspace, gefüllt mit Beispiel-Apps, Rezensionen und Eintragsverlauf. Sie können sich durch alles klicken, ohne Registrierung und ohne Store-Zugangsdaten.",
        question: "Kann ich AppBoard testen, ohne eigene Apps zu verbinden?",
      },
      {
        answer:
          "Ihr App-Store-Connect-Key und Ihr Google-Play-Service-Account liegen in einem Ende-zu-Ende-verschlüsselten Tresor. Sie werden mit einem aus Ihrer Passphrase abgeleiteten Schlüssel verschlüsselt, die Server von AppBoard sehen sie also nie im Klartext, und ohne entsperrten Tresor lässt sich nichts veröffentlichen.",
        question: "Ist es sicher, meine Store-Zugangsdaten herzugeben?",
      },
      {
        answer:
          "Nein. Alles, was Sie bearbeiten, ist ein Entwurf, bis Sie es ausdrücklich veröffentlichen. Vorher sehen Sie einen Diff pro Feld und pro Sprache, und jede veröffentlichte Änderung landet im Verlauf, mit Rollback per Klick.",
        question: "Kann AppBoard meinen laufenden Store-Eintrag beschädigen?",
      },
      {
        answer:
          "Beide. AppBoard verbindet sich mit App Store Connect und der Google Play Console, und Apps aus beiden Stores liegen nebeneinander in einem Workspace, inklusive gruppierter Android- und iOS-Paare derselben App.",
        question: "Werden App Store und Google Play unterstützt?",
      },
      {
        answer:
          "App Store und Google Play funktionieren heute. Huawei AppGallery, Samsung Galaxy Store, Amazon Appstore, Xiaomi GetApps, RuStore und ONE Store sind als demnächst markiert: sie sind in aktiver Entwicklung und noch nicht veröffentlicht. Nehmen Sie jedes Demnächst-Label auf dieser Seite also genau so.",
        question: "Was ist mit anderen Stores als Apple und Google?",
      },
      {
        answer:
          "KI-Funktionen laufen über OpenRouter mit Ihrem eigenen API-Key, Sie wählen also das Modell und zahlen direkt beim Anbieter. Die KI entwirft Beschreibungen, Übersetzungen, Keyword-Ideen und Antworten auf Rezensionen, aber ohne Ihre Freigabe geht nichts in einen Store.",
        question: "Wie funktioniert die KI, und wessen API-Key nutzt sie?",
      },
      {
        answer:
          "Ja. AppBoard ist ein Open-Source-Produkt, und alles läuft im Web-Panel: keine Desktop-App, keine Plugins, nichts zu installieren. Wenn es in Ihrem Browser läuft, läuft es.",
        question: "Ist AppBoard Open Source, und muss ich etwas installieren?",
      },
      {
        answer:
          "AppBoard ist während der Beta kostenlos. Eine Kreditkarte ist nicht nötig, und vor der Einführung eines kostenpflichtigen Plans erfahren Sie es rechtzeitig.",
        question: "Was kostet es?",
      },
    ],
    eyebrow: "FAQ",
    faqHref: "/de/faq",
    faqLabel: "vollständigen FAQ",
    footnoteLead: "Mehr Antworten in der",
    footnoteMiddle: "und im",
    footnoteTail: ".",
    schemaPath: "/de",
    title: "Fragen, die wirklich gestellt werden",
  },
  features: {
    eyebrow: "Funktionen",
    items: [
      {
        description:
          "Einen App-Store- oder Google-Play-Link einfügen, und der ganze Eintrag ist in AppBoard. Die Store-API verbinden Sie später, nur zum Veröffentlichen.",
        href: "/de/docs",
        title: "Start mit einem Store-Link",
      },
      {
        description:
          "ASO-Check, Keyword-Check und Screenshot-Editor laufen im Browser - kostenlos, ohne Login, nichts wird hochgeladen.",
        href: "/de#free-tools",
        title: "Kostenlose Tools ohne Konto",
      },
      {
        description:
          "Keyword-Positionen mit Tagesveränderung verfolgen, Märkte vergleichen und jede App im Store analysieren.",
        href: "/de/docs/research",
        title: "Keyword- und Marktanalyse",
      },
      {
        description:
          "Rezensionen beider Stores in einem Posteingang, mit Bewertung, Version und Gerät, plus KI-Entwürfe, die Sie freigeben.",
        href: "/de/docs/reviews",
        title: "Rezensionen in einem Posteingang",
      },
      {
        description:
          "Metadaten und Grafiken im Stapel in beide Stores veröffentlichen, als Entwurf oder direkt zur Prüfung, mit Bericht pro Position.",
        href: "/de/docs/publishing",
        title: "Aus einem Dashboard veröffentlichen",
      },
      {
        description:
          "Store-Zugangsdaten liegen in einem Ende-zu-Ende-verschlüsselten Tresor. Die Server von AppBoard sehen sie nie im Klartext.",
        href: "/de/docs/security",
        title: "Verschlüsselter Tresor für Zugangsdaten",
      },
      {
        description:
          "Kostenlos in der Beta und dauerhaft quelloffen einsehbar. Betreiben Sie das Ganze jederzeit auf Ihrem eigenen Server.",
        href: "/de/docs/self-hosting",
        title: "Open Source und selbst hostbar",
      },
      {
        description:
          "Schlagen Sie die Funktionen vor, die Sie brauchen, und stimmen Sie über die der anderen ab. So entscheiden die Menschen über die Roadmap, die Apps ausliefern.",
        href: DISCORD_URL,
        linkLabel: "Auf Discord mitgestalten",
        title: "Eine Wunschliste zum Abstimmen",
      },
    ],
    title: "Alles Weitere, kurz",
  },
  freeTool: {
    ctaLabel: "Editor öffnen",
    ctaNote: "Dauerhaft kostenlos · ohne Login",
    description:
      "Jeden Eintrag prüfen, eigene Keywords bewerten und Store-Screenshots gestalten - alles im Browser, nichts wird hochgeladen, keine Registrierung. Dieselbe Engine, die AppBoard im Panel nutzt.",
    editorTitle: "Kostenloser ASO-Screenshot-Editor",
    eyebrow: "Kostenlose Tools",
    tools: [
      {
        ctaLabel: "Eintrag prüfen",
        description:
          "App-Store-Link einfügen: Bewertung des Eintrags, die Keywords, für die Sie ranken (Top 200), der Wettbewerb und drei konkrete nächste Schritte.",
        href: `${APP_URL}/aso-check`,
        title: "ASO-Check",
      },
      {
        ctaLabel: "Keywords bewerten",
        description:
          "Bis zu fünf Keywords pro Tag: Popularität, Schwierigkeit, Chance und eine Download-Schätzung für den gewählten Markt.",
        href: `${APP_URL}/keyword-check`,
        title: "Keyword-Check",
      },
      {
        ctaLabel: "Editor öffnen",
        description:
          "Vorlagen, echte 3D-Geräte, exakte Store-Maße. Exportieren und hochladen - oder die Store-Screenshots direkt aus dem Panel öffnen.",
        href: `${APP_URL}/editor`,
        title: "Screenshot-Editor",
      },
    ],
    gallery: [
      {
        alt: "Hero-Vorlage: im 3D-Winkel gekipptes iPhone auf einem Magenta-Violett-Verlauf mit kräftiger Überschrift",
        label: "Hero 3D",
      },
      {
        alt: "Dark-Mode-Vorlage mit gepunktetem Hintergrund und heller App-Oberfläche im iPhone-Rahmen",
        label: "Minimal dunkel",
      },
      {
        alt: "Award-Lorbeer-Vorlage: App-of-the-Day-Lorbeeren über einem Geräte-Mockup auf tiefem Violett",
        label: "Award-Lorbeer",
      },
      {
        alt: "Sahara-Vorlage: warmer Dünen-Verlauf mit gekipptem Gerät und handschriftlicher Überschrift",
        label: "Sahara",
      },
      {
        alt: "Social-Proof-Vorlage mit einem Fünf-Sterne-Zitat über dem Gerät",
        label: "Social Proof",
      },
      {
        alt: "Midnight-Vorlage: elegante dunkle Szene mit der Überschrift After hours, in style",
        label: "Midnight",
      },
      {
        alt: "Curved-Promo-Vorlage: oranger Verlauf mit gebogenem Text Start your journey",
        label: "Curved Promo",
      },
      {
        alt: "Feature-Callout-Vorlage mit einer Sprechblase, die auf die App-Oberfläche zeigt",
        label: "Feature-Callout",
      },
      {
        alt: "Clay-Showcase-Vorlage: türkiser Wellen-Hintergrund mit Geräte-Mockup im Clay-Stil",
        label: "Clay Showcase",
      },
      {
        alt: "Bold-Statement-Vorlage: Überschrift Loved by 1M+ users, gelb unterstrichen",
        label: "Bold Statement",
      },
      {
        alt: "Minimal-hell-Vorlage: saubere weiße Szene mit der Überschrift Simple. Fast. Yours.",
        label: "Minimal hell",
      },
    ],
    galleryLead:
      "Jede davon hat unter einer Minute gedauert: Vorlage wählen, Ihr Screenshot bleibt, die Szene wechselt:",
    points: [
      "Echte 3D-Gerätemodelle, iPhone oder Galaxy in echtem WebGL drehen, dazu gezeichnete und Clay-Stile",
      "Über 20 Szenenvorlagen: Hero-Shots, Panoramen, Social Proof, Award-Lorbeeren, Dark Mode",
      "Verläufe, Mesh, Muster, dekorativer Text, Formen und Sprachvarianten pro Locale",
      "Panorama-Layouts, die als mehrere aufeinanderfolgende Store-Screenshots exportiert werden",
      "Zu 100 Prozent im Browser, ohne Registrierung, nichts wird auf einen Server geladen",
    ],
    title: "Drei kostenlose Tools, kein Konto",
  },
  hero: {
    dashboardAlt:
      "AppBoard-Dashboard mit sechs Apps aus App Store und Google Play, gruppiert in einem Workspace",
    facts: [
      "App Store + Google Play",
      "Start mit einem Store-Link, ohne API",
      "Diffs und Rollback",
      "Open Source",
    ],
    lead: "Store-Link einfügen, und Eintrag, Screenshots, Bewertungen und Rezensionen sind in AppBoard - ohne API-Schlüssel. Audit machen, Text per Diff annehmen oder ablehnen, dann veröffentlichen: per Kopieren und Einfügen oder mit einem Klick, sobald ein Store verbunden ist.",
    note: "Während der Beta kostenlos. Keine Kreditkarte, kein Vertriebsgespräch.",
    primaryCta: "Kostenlos starten",
    secondaryCta: "Live-Demo öffnen",
    titleHighlight: "einem Panel",
    titleLead: "Jeden Store-Eintrag steuern aus",
  },
  howItWorks: {
    eyebrow: "So funktioniert es",
    steps: [
      {
        description:
          "App über ihre App-Store- oder Google-Play-Seite hinzufügen. Der Eintrag in jeder Sprache, Screenshots, Bewertungen und Rezensionen kommen von selbst - ohne API-Zugangsdaten, ohne Konsole.",
        title: "Store-Link einfügen",
      },
      {
        description:
          "Eine Bewertung des Eintrags so, wie der Store ihn wirklich ausliefert, die Keywords, die Sie tatsächlich gewinnen können, und Textkorrekturen als Diffs zum Annehmen oder Ablehnen. Der Entwurf rührt den Store nie von allein an.",
        title: "Audit und Textkorrekturen",
      },
      {
        description:
          "Die Änderungen in die Konsole kopieren und als erledigt markieren - oder die Store-API verbinden und beide Stores in einem Rutsch beschicken, versioniert und einen Klick vom Rollback entfernt.",
        title: "Veröffentlichen, wie Sie wollen",
      },
      {
        description:
          "Nächtliche Keyword-Positionen mit jedem Release und jeder Textänderung im Diagramm markiert, Rezensionen aus jedem Storefront in einem Posteingang und ein Hinweis, wenn ein Entwurf unveröffentlicht liegen bleibt.",
        title: "Sehen, was sich bewegt hat",
      },
    ],
    title: "Vier Schritte, angefangen mit einem Link",
  },
  pricingTeaser: {
    ctaHref: "/de/pricing",
    ctaLabel: "Geplante Pläne ansehen",
    lead: "Während der Beta kostet jeder Plan 0 Euro: keine Kreditkarte, keine gesperrten Funktionen. Die Stufen Free, Pro und Team stehen bereits, die Preise nennen wir lange vor der allgemeinen Verfügbarkeit.",
    titleHighlight: "kostenlos",
    titleLead: "Gerade ist alles",
  },
  stores: {
    eyebrow: "Veröffentlichen in",
    footnote:
      "Ein Eintrag, einmal geschrieben, unterwegs zu jedem Store, in dem Sie veröffentlichen.",
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
    eyebrow: "Im Panel",
    stops: [
      {
        docsHref: "/de/docs/listings",
        docsLabel: "Einträge und Sprachen",
        eyebrow: "Ein Editor",
        lead: "App Store Connect und Google Play einmal verbinden, und AppBoard holt jede Lokalisierung aus beiden Stores. Danach liegen Titel, Untertitel, Beschreibung, Keywords und Neuheiten für jede Sprache in einem einzigen Editor, als Entwürfe.",
        points: [
          "Zeichenzähler laufen beim Tippen gegen die echten Limits jedes Stores",
          "Bearbeitete Sprachen bleiben markiert, bis Sie sie hochschieben",
          "Entwürfe stehen neben dem, was im Store tatsächlich live ist",
        ],
        title: "Jede Sprache in einem Editor",
        visualAlt:
          "AppBoard-Eintragseditor mit Feldern für Titel, Kurzbeschreibung und vollständige Beschreibung, Sprach-Tabs und laufenden Zeichenzählern",
      },
      {
        docsHref: "/de/docs/publishing",
        docsLabel: "Veröffentlichen",
        eyebrow: "Diff vor dem Veröffentlichen",
        lead: "Bevor irgendetwas einen Store erreicht, sehen Sie einen Diff im GitHub-Stil: genau welche Felder sich geändert haben, in welcher Sprache, alter Wert gegen das, was gerade live ist. Danach aus einem Dashboard in beide Stores schieben und einen Bericht pro Position bekommen.",
        points: [
          "Rot und Grün, Feld für Feld, Sprache für Sprache",
          "Als Entwurf hochschieben oder direkt zur Prüfung senden",
          "Nichts verlässt Ihren Entwurf, bevor Sie auf Veröffentlichen drücken",
        ],
        title: "Genau sehen, was sich ändert, bevor es live geht",
        visualAlt: "",
      },
      {
        docsHref: "/de/docs/ai-assistant",
        docsLabel: "KI-Assistent",
        eyebrow: "KI-Übersetzung",
        lead: "Übersetzung, die ASO versteht, statt Wort für Wort zu übertragen. Titel, Untertitel und Keywords werden mit Blick auf Ihre Store-Limits und die Suchabsicht lokalisiert, und Markenbegriffe, die Sie als nicht zu übersetzen markieren, bleiben unangetastet.",
        points: [
          "Nicht zu übersetzende Begriffe pro Feld für Marken- und Produktnamen",
          "Freitext-Anweisungen für Tonfall und Glossar",
          "Läuft über Ihren eigenen OpenRouter-Key, mit jedem Modell Ihrer Wahl",
        ],
        title: "KI-Übersetzung, die ASO spricht, nicht nur Deutsch",
        visualAlt: "",
      },
      {
        docsHref: "/de/docs/history-and-rollback",
        docsLabel: "Verlauf und Rollback",
        eyebrow: "Verlauf",
        lead: "Jede veröffentlichte Änderung wird pro Feld und pro Sprache mit Zeitstempel festgehalten, damit Sie die Frage was haben wir im Mai geändert beantworten können, ohne durch Slack zu scrollen. Stellt sich ein Update als Fehler heraus, setzt ein Klick den alten Wert in Ihren Entwurf zurück.",
        points: [
          "Das Protokoll nach Feld und nach Sprache filtern",
          "Rollback per Klick in Ihren Entwurf, nie direkt in den Store",
          "Ein vollständiger Prüfpfad, wer wann was geändert hat",
        ],
        title: "Ein Rückgängig-Knopf für Ihren Store-Eintrag",
        visualAlt:
          "AppBoard-Änderungsverlauf mit rot-grünen Diffs im GitHub-Stil pro Feld und Sprache und Rollback-Schaltflächen",
      },
      {
        docsHref: "/de/docs/screenshots",
        docsLabel: "Screenshots und Grafiken",
        eyebrow: "Screenshots",
        lead: "Screenshots, Icons und Feature-Grafiken liegen in einem Raster, pro Gerät und pro Sprache. Gestalten Sie sie im eingebauten Editor, kippen Sie ein echtes 3D-Gerät und exportieren Sie in der Größe, die jeder Store verlangt. Das hier ist der echte Editor, im Browser aufgenommen.",
        points: [
          "Pro Sprache und pro Gerät, vom iPhone bis zu 10-Zoll-Tablets",
          "Echte WebGL-Gerätemodelle zum Drehen, dazu 40 Szenenvorlagen",
          "Ohne Konto nutzbar, und nichts wird auf einen Server geladen",
        ],
        title: "Ein Grafikeditor, der jede Store-Größe kennt",
        videoCaption:
          "Vorlage wählen, 3D-Gerät kippen, in Store-Größe exportieren",
        visualAlt:
          "Bildschirmaufnahme des AppBoard-Screenshot-Editors: die Szenenvorlage Hero 3D wird angewendet und ein WebGL-iPhone-Modell durch Pose-Presets gedreht",
      },
      {
        docsHref: "/de/docs/research",
        docsLabel: "Research und Rezensionen",
        eyebrow: "Research",
        lead: "AppBoard liest die Rezensionen für Sie und gruppiert die Beschwerden zu Themen, damit Sie erfahren, was immer wieder hakt, ohne Hunderte davon zu lesen. Dieselbe Analyse läuft auf Wettbewerbern, daneben Keyword-Positionen und Marktvergleiche.",
        points: [
          "Rezensionsthemen, Stimmung und was Nutzer am meisten lieben oder hassen",
          "Keyword-Rank-Tracking mit Veränderung von Tag zu Tag",
          "Funktioniert für jede App im Store, nicht nur für die verbundenen",
        ],
        title: "Herausfinden, worüber Nutzer sich wirklich beschweren",
        visualAlt:
          "AppBoard-Rezensionsanalyse mit KI-Zusammenfassung, Zählern für positive und negative Stimmung, beliebten gegen kritisierte Funktionen und einer Rangliste der größten Ärgernisse",
      },
    ],
    title: "Das bekommen Sie tatsächlich",
  },
  translateDemo: {
    badgeDoNotTranslate: "Nicht übersetzen: Lumina",
    badgeKeywords: "Behält ASO-Keywords",
    badgeLimit: "Hält das Titel-Limit von 30 Zeichen ein",
    footnote:
      "Jede Zeile landet in Ihrem Entwurf. Sie bearbeiten und geben frei, bevor etwas veröffentlicht wird.",
    rows: [
      { language: "Deutsch", limit: 30, value: "Lumina: KI-Fotoeditor" },
      { language: "Französisch", limit: 30, value: "Lumina : editeur photo IA" },
      { language: "Spanisch", limit: 30, value: "Lumina: editor de fotos IA" },
    ],
    sourceLabel: "Quelle, Englisch",
    sourceValue: "Lumina: AI Photo Editor",
  },
};


const ES: HomeContent = {
  cta: {
    lead: "Entra en la demo en vivo y recorre un espacio de trabajo real, o conecta tus propias tiendas en unos minutos. Gratis durante la beta.",
    primaryCta: "Abrir la demo en vivo",
    secondaryCta: "Crear cuenta gratis",
    titleHighlight: "tranquilo",
    titleLead: "Tu próximo día de lanzamiento puede ser",
  },
  diffDemo: {
    headerNote: "3 campos en 2 idiomas",
    headerTitle: "Cambios pendientes",
    publishLabel: "Publicar en las dos tiendas",
    publishNote: "Nada sale hasta que lo pulsas",
    rows: [
      {
        field: "Título",
        language: "EN",
        newValue: "Lumina: AI Photo Editor",
        oldValue: "Lumina - Photo Editor",
      },
      {
        field: "Subtítulo",
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
    docsHref: "/es/docs",
    docsLabel: "documentación",
    entries: [
      {
        answer:
          "No. La demo en vivo es un espacio de trabajo real de AppBoard con apps de ejemplo, reseñas e historial de fichas. Puedes recorrerlo todo sin registro y sin credenciales de tienda.",
        question: "¿Puedo probar AppBoard sin conectar mis apps?",
      },
      {
        answer:
          "Tu clave de App Store Connect y tu cuenta de servicio de Google Play viven en un baúl cifrado de extremo a extremo. Se cifran con una clave derivada de tu frase de paso, así que los servidores de AppBoard nunca las ven en claro, y no se puede publicar nada sin que tú desbloquees el baúl.",
        question: "¿Es seguro entregar mis credenciales de tienda?",
      },
      {
        answer:
          "No. Todo lo que editas es un borrador hasta que lo publicas de forma explícita. Antes de publicar ves un diff por campo y por idioma de lo que va a cambiar, y cada cambio publicado queda en el historial con reversión en un clic.",
        question: "¿Puede AppBoard romper mi ficha publicada?",
      },
      {
        answer:
          "Las dos. AppBoard se conecta con App Store Connect y Google Play Console, y las apps de ambas tiendas quedan una al lado de la otra en un mismo espacio de trabajo, incluidas las parejas Android e iOS agrupadas de la misma app.",
        question: "¿Admite App Store y Google Play?",
      },
      {
        answer:
          "App Store y Google Play funcionan hoy. Huawei AppGallery, Samsung Galaxy Store, Amazon Appstore, Xiaomi GetApps, RuStore y ONE Store aparecen como próximamente: están en desarrollo activo y aún no se han lanzado, así que toma cada etiqueta de próximamente de esta página tal cual.",
        question: "¿Y las tiendas que no son de Apple ni de Google?",
      },
      {
        answer:
          "Las funciones de IA van por OpenRouter con tu propia clave de API, así que eliges el modelo y pagas directamente al proveedor. La IA redacta descripciones, traducciones, ideas de keywords y respuestas a reseñas, pero nunca se envía nada a una tienda sin tu aprobación.",
        question: "¿Cómo funciona la IA y con qué clave de API?",
      },
      {
        answer:
          "Sí. AppBoard es un producto open source y todo funciona en el panel web: sin app de escritorio, sin plugins, sin nada que instalar. Si te funciona el navegador, te funciona.",
        question: "¿AppBoard es open source y hay que instalar algo?",
      },
      {
        answer:
          "AppBoard es gratis durante la beta. No hace falta tarjeta y te avisaremos con mucha antelación antes de introducir cualquier plan de pago.",
        question: "¿Cuánto cuesta?",
      },
    ],
    eyebrow: "FAQ",
    faqHref: "/es/faq",
    faqLabel: "FAQ completo",
    footnoteLead: "Más respuestas en la",
    footnoteMiddle: "y en el",
    footnoteTail: ".",
    schemaPath: "/es",
    title: "Preguntas que la gente hace de verdad",
  },
  features: {
    eyebrow: "Funciones",
    items: [
      {
        description:
          "Pega un enlace de App Store o Google Play y toda la ficha está en AppBoard. Conecta la API de la tienda más tarde, solo para publicar.",
        href: "/es/docs",
        title: "Empieza con un enlace de la tienda",
      },
      {
        description:
          "ASO check-up, keyword check y el editor de capturas funcionan en tu navegador - gratis, sin login, sin subir nada.",
        href: "/es#free-tools",
        title: "Herramientas gratis, sin cuenta",
      },
      {
        description:
          "Sigue posiciones de keywords con el movimiento día a día, compara mercados y analiza a la competencia en cualquier app de la tienda.",
        href: "/es/docs/research",
        title: "Research de keywords y mercados",
      },
      {
        description:
          "Las reseñas de las dos tiendas en una bandeja, con valoración, versión y dispositivo, más borradores de IA que apruebas tú.",
        href: "/es/docs/reviews",
        title: "Reseñas en una sola bandeja",
      },
      {
        description:
          "Publica metadatos y gráficos por lotes en las dos tiendas, como borrador o directo a revisión, con informe por elemento.",
        href: "/es/docs/publishing",
        title: "Publica desde un solo panel",
      },
      {
        description:
          "Las credenciales viven en un baúl cifrado de extremo a extremo. Los servidores de AppBoard nunca las ven en claro.",
        href: "/es/docs/security",
        title: "Baúl de credenciales cifrado",
      },
      {
        description:
          "Gratis durante la beta y con el código visible siempre. Ejecuta todo en tu propio servidor cuando quieras.",
        href: "/es/docs/self-hosting",
        title: "Open source y autoalojable",
      },
      {
        description:
          "Propón las funciones que necesitas y vota las de los demás, para que la hoja de ruta la decida quien publica apps.",
        href: DISCORD_URL,
        linkLabel: "Opina en Discord",
        title: "Una lista de deseos que se vota",
      },
    ],
    title: "Todo lo demás, en breve",
  },
  freeTool: {
    ctaLabel: "Abrir el editor",
    ctaNote: "Gratis para siempre · sin login",
    description:
      "Revisa cualquier ficha, puntúa tus keywords y diseña capturas para la tienda - todo en tu navegador, sin subir nada, sin registro. El mismo motor que AppBoard usa dentro del panel.",
    editorTitle: "Editor de capturas ASO gratuito",
    eyebrow: "Herramientas gratis",
    tools: [
      {
        ctaLabel: "Revisar una ficha",
        description:
          "Pega un enlace de App Store: puntuación de la ficha, las keywords en las que posicionas (top 200), la competencia y tres siguientes pasos concretos.",
        href: `${APP_URL}/aso-check`,
        title: "ASO check-up",
      },
      {
        ctaLabel: "Puntuar keywords",
        description:
          "Hasta cinco keywords al día: popularidad, dificultad, oportunidad y una estimación de descargas para el mercado que elijas.",
        href: `${APP_URL}/keyword-check`,
        title: "Keyword check",
      },
      {
        ctaLabel: "Abrir el editor",
        description:
          "Plantillas, dispositivos 3D reales, medidas exactas de cada tienda. Exporta y sube - o abre las capturas de tu tienda directamente desde el panel.",
        href: `${APP_URL}/editor`,
        title: "Editor de capturas",
      },
    ],
    gallery: [
      {
        alt: "Plantilla hero: iPhone inclinado en 3D sobre un degradado magenta y violeta con un titular contundente",
        label: "Hero 3D",
      },
      {
        alt: "Plantilla en modo oscuro con fondo punteado y una interfaz clara dentro de un marco de iPhone",
        label: "Oscuro minimal",
      },
      {
        alt: "Plantilla de laureles: laureles de App del Día sobre un mockup de dispositivo en violeta intenso",
        label: "Laureles",
      },
      {
        alt: "Plantilla Sahara: degradado cálido de dunas con dispositivo inclinado y titular manuscrito",
        label: "Sahara",
      },
      {
        alt: "Plantilla de prueba social con una cita de cinco estrellas sobre el dispositivo",
        label: "Prueba social",
      },
      {
        alt: "Plantilla Midnight: escena oscura elegante con el titular After hours, in style",
        label: "Midnight",
      },
      {
        alt: "Plantilla promocional curva: degradado naranja con el texto Start your journey en arco",
        label: "Promo curva",
      },
      {
        alt: "Plantilla de anotación con un bocadillo que señala la interfaz de la app",
        label: "Anotación",
      },
      {
        alt: "Plantilla Clay: fondo de olas turquesa con un mockup de dispositivo en estilo arcilla",
        label: "Escaparate clay",
      },
      {
        alt: "Plantilla de afirmación rotunda: titular Loved by 1M+ users subrayado en amarillo",
        label: "Afirmación",
      },
      {
        alt: "Plantilla clara minimal: escena blanca y limpia con el titular Simple. Fast. Yours.",
        label: "Claro minimal",
      },
    ],
    galleryLead:
      "Cada una llevó menos de un minuto: eliges plantilla, tu captura se queda, cambia la escena:",
    points: [
      "Modelos 3D reales de dispositivos, gira un iPhone o un Galaxy en WebGL de verdad, más estilos dibujado y arcilla",
      "Más de 20 plantillas de escena: hero, panoramas, prueba social, laureles, modo oscuro",
      "Degradados, mesh, patrones, texto decorativo, formas y variantes por idioma",
      "Diseños panorámicos que se exportan como varias capturas consecutivas",
      "100 % en tu navegador, sin registro y sin subir nada a un servidor",
    ],
    title: "Tres herramientas gratis, sin cuenta",
  },
  hero: {
    dashboardAlt:
      "Panel de AppBoard con seis apps de App Store y Google Play agrupadas en un espacio de trabajo",
    facts: [
      "App Store + Google Play",
      "Empieza con un enlace de la tienda, sin API",
      "Diffs y reversión",
      "Open source",
    ],
    lead: "Pega un enlace de la tienda y la ficha, las capturas, las valoraciones y las reseñas están en AppBoard - sin claves de API. Haz la auditoría, corrige el texto con diffs que aceptas o rechazas y publica: copiando y pegando, o con un clic cuando conectes la tienda.",
    note: "Gratis durante la beta. Sin tarjeta y sin llamada comercial.",
    primaryCta: "Empezar gratis",
    secondaryCta: "Abrir la demo en vivo",
    titleHighlight: "un solo panel",
    titleLead: "Gestiona todas tus fichas desde",
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    steps: [
      {
        description:
          "Añade una app desde su página de App Store o Google Play. La ficha en cada idioma, las capturas, las valoraciones y las reseñas entran solas - sin credenciales de API, sin consola.",
        title: "Pega un enlace de la tienda",
      },
      {
        description:
          "Una puntuación de la ficha tal como la sirve la tienda, las keywords que de verdad puedes ganar y correcciones de texto como diffs que aceptas o rechazas. El borrador nunca toca la tienda por su cuenta.",
        title: "Audita y corrige el texto",
      },
      {
        description:
          "Copia los cambios a la consola y márcalos como hechos, o conecta la API de la tienda y publica en las dos tiendas en un lote - versionado y a un clic de la reversión.",
        title: "Publica a tu manera",
      },
      {
        description:
          "Posiciones de keywords cada noche, con cada versión y cambio de texto marcado en la gráfica, reseñas de cada tienda en una bandeja y un aviso cuando un borrador se queda sin publicar.",
        title: "Sigue lo que se movió",
      },
    ],
    title: "Cuatro pasos, empezando por un enlace",
  },
  pricingTeaser: {
    ctaHref: "/es/pricing",
    ctaLabel: "Ver los planes previstos",
    lead: "Mientras AppBoard está en beta todos los planes cuestan 0: sin tarjeta y sin funciones bloqueadas. Los niveles Free, Pro y Team ya están definidos, y los precios se anunciarán mucho antes del lanzamiento general.",
    titleHighlight: "gratis",
    titleLead: "Ahora mismo es",
  },
  stores: {
    eyebrow: "Publica en",
    footnote:
      "Una ficha, escrita una vez, camino de todas las tiendas en las que publicas.",
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
    eyebrow: "Dentro del panel",
    stops: [
      {
        docsHref: "/es/docs/listings",
        docsLabel: "Fichas e idiomas",
        eyebrow: "Un editor",
        lead: "Conecta App Store Connect y Google Play una vez y AppBoard trae todas las localizaciones de ambas tiendas. A partir de ahí, título, subtítulo, descripción, keywords y novedades de cada idioma viven en un único editor, como borradores.",
        points: [
          "Los contadores de caracteres corren contra los límites reales de cada tienda mientras escribes",
          "Los idiomas que tocaste quedan marcados hasta que los subes",
          "Los borradores están junto a lo que hay publicado de verdad en la tienda",
        ],
        title: "Todos los idiomas en un editor",
        visualAlt:
          "Editor de fichas de AppBoard con campos de título, descripción corta y descripción completa, pestañas por idioma y contadores de caracteres en vivo",
      },
      {
        docsHref: "/es/docs/publishing",
        docsLabel: "Publicación",
        eyebrow: "Diff antes de publicar",
        lead: "Antes de que algo llegue a una tienda ves un diff al estilo de GitHub: exactamente qué campos cambiaron, en qué idioma, el valor antiguo frente a lo que hay publicado ahora. Después subes a las dos tiendas desde un panel y recibes un informe por elemento.",
        points: [
          "Rojo y verde, campo por campo, idioma por idioma",
          "Sube como borrador o manda directo a revisión",
          "Nada sale de tu borrador hasta que pulsas publicar",
        ],
        title: "Ve exactamente qué cambia antes de que salga",
        visualAlt: "",
      },
      {
        docsHref: "/es/docs/ai-assistant",
        docsLabel: "Asistente de IA",
        eyebrow: "Traducción con IA",
        lead: "Traducción que entiende de ASO en lugar de traducir palabra por palabra. Títulos, subtítulos y keywords se localizan teniendo en cuenta los límites de la tienda y la intención de búsqueda, y los términos de marca que marcas como no traducibles se quedan intactos.",
        points: [
          "Términos que no se traducen, por campo, para nombres de marca y producto",
          "Instrucciones en texto libre para dirigir el tono y el glosario",
          "Funciona con tu propia clave de OpenRouter y el modelo que elijas",
        ],
        title: "Traducción con IA que habla ASO, no solo español",
        visualAlt: "",
      },
      {
        docsHref: "/es/docs/history-and-rollback",
        docsLabel: "Historial y reversión",
        eyebrow: "Historial",
        lead: "Cada cambio publicado queda registrado por campo y por idioma con su marca de tiempo, así que puedes responder a qué cambiamos en mayo sin rebuscar en Slack. Cuando una actualización resulta ser un error, un clic devuelve el valor antiguo a tu borrador.",
        points: [
          "Filtra el registro por campo y por idioma",
          "Reversión en un clic a tu borrador, nunca directa a la tienda",
          "Un rastro completo de quién cambió qué y cuándo",
        ],
        title: "Un botón de deshacer para tu ficha",
        visualAlt:
          "Historial de cambios de AppBoard con diffs en rojo y verde al estilo de GitHub por campo e idioma, y botones de reversión",
      },
      {
        docsHref: "/es/docs/screenshots",
        docsLabel: "Capturas y gráficos",
        eyebrow: "Capturas",
        lead: "Capturas, iconos y gráficos destacados viven en una sola rejilla, por dispositivo y por idioma. Diséñalos en el editor integrado, inclina un dispositivo 3D real y exporta con el tamaño exacto que exige cada tienda. Esto es el editor de verdad, grabado en el navegador.",
        points: [
          "Por idioma y por dispositivo, del iPhone a las tabletas de 10 pulgadas",
          "Modelos WebGL reales que puedes girar, más 40 plantillas de escena",
          "Se usa gratis sin cuenta y no se sube nada a un servidor",
        ],
        title: "Un editor de gráficos que conoce todas las medidas",
        videoCaption:
          "Elige plantilla, inclina el dispositivo 3D, exporta al tamaño de la tienda",
        visualAlt:
          "Grabación de pantalla del editor de capturas de AppBoard: se aplica la plantilla Hero 3D y se gira un modelo WebGL de iPhone entre poses predefinidas",
      },
      {
        docsHref: "/es/docs/research",
        docsLabel: "Research y reseñas",
        eyebrow: "Research",
        lead: "AppBoard lee las reseñas por ti y agrupa las quejas en temas, para que sepas qué falla una y otra vez sin leer cientos. El mismo análisis vale para la competencia, junto a las posiciones de keywords y la comparación de mercados.",
        points: [
          "Temas de reseñas, sentimiento y qué gusta o disgusta más",
          "Seguimiento de posiciones con el movimiento día a día",
          "Funciona con cualquier app de la tienda, no solo con las que conectaste",
        ],
        title: "Descubre de qué se queja la gente de verdad",
        visualAlt:
          "Análisis de reseñas de AppBoard con resumen de IA, recuentos de sentimiento positivo y negativo, funciones que gustan frente a las criticadas y una lista ordenada de las mayores molestias",
      },
    ],
    title: "Esto es lo que realmente obtienes",
  },
  translateDemo: {
    badgeDoNotTranslate: "No traducir: Lumina",
    badgeKeywords: "Conserva las keywords ASO",
    badgeLimit: "Respeta el límite de 30 caracteres del título",
    footnote:
      "Cada línea aterriza en tu borrador. Editas y apruebas antes de que se publique nada.",
    rows: [
      { language: "Alemán", limit: 30, value: "Lumina: KI-Fotoeditor" },
      { language: "Francés", limit: 30, value: "Lumina : editeur photo IA" },
      { language: "Español", limit: 30, value: "Lumina: editor de fotos IA" },
    ],
    sourceLabel: "Origen, inglés",
    sourceValue: "Lumina: AI Photo Editor",
  },
};

export const HOME_CONTENT: Record<SiteLocale, HomeContent> = {
  de: DE,
  en: EN,
  es: ES,
  pl: PL,
};
