import type { Locale } from "@/lib/i18n/locales";

export type OpenSourceRepoId = "backend" | "panel" | "website";

export interface OpenSourceRepoContent {
  description: string;
  id: OpenSourceRepoId;
  title: string;
}

export interface OpenSourcePageContent {
  discordCta: string;
  eyebrow: string;
  githubCta: string;
  lead: string;
  licenseNote: string;
  repos: OpenSourceRepoContent[];
  reposDescription: string;
  reposEyebrow: string;
  reposLinkLabel: string;
  reposTitle: string;
  titleHighlight: string;
  titleLead: string;
}

export interface SelfHostedPointContent {
  description: string;
  title: string;
}

export interface SelfHostedContent {
  description: string;
  discordCta: string;
  docsCta: string;
  docsHref: string;
  eyebrow: string;
  githubCta: string;
  licenseNote: string;
  points: SelfHostedPointContent[];
  titleHighlight: string;
  titleLead: string;
}

export interface CommunityChannelContent {
  cta: string;
  description: string;
  name: string;
  points: string[];
}

export interface CommunityContent {
  channels: CommunityChannelContent[];
  description: string;
  eyebrow: string;
  title: string;
}

export interface ComparisonRowContent {
  task: string;
  withAppboard: string;
  withoutAppboard: string;
}

export interface ComparisonContent {
  description: string;
  eyebrow: string;
  headerTask: string;
  headerWith: string;
  headerWithout: string;
  rows: ComparisonRowContent[];
  title: string;
}

export interface FounderNoteContent {
  eyebrow: string;
  paragraphs: string[];
  signature: string;
}

export interface ResearchPointContent {
  description: string;
  title: string;
}

export interface ResearchGalleryItemContent {
  alt: string;
  caption: string;
  src: string;
}

export interface ResearchContent {
  description: string;
  docsHref: string;
  docsLabel: string;
  eyebrow: string;
  gallery: ResearchGalleryItemContent[];
  heroAlt: string;
  points: ResearchPointContent[];
  title: string;
}

export interface OpenSourceContent {
  community: CommunityContent;
  comparison: ComparisonContent;
  founderNote: FounderNoteContent;
  page: OpenSourcePageContent;
  research: ResearchContent;
  selfHosted: SelfHostedContent;
}

const EN: OpenSourceContent = {
  community: {
    channels: [
      {
        cta: "Join the Discord",
        description:
          "The fastest way to reach us. Ask questions, report bugs, get help with self-hosting and see what's being built before it ships.",
        name: "Discord",
        points: [
          "Direct line to the maintainers",
          "Early previews of new features",
          "Self-hosting help from people who run it",
        ],
      },
      {
        cta: "Join r/appboard",
        description:
          "Feature requests, ASO tips and longer discussions. Vote on what gets built next — the roadmap is shaped by the community.",
        name: "Reddit",
        points: [
          "Vote on feature requests",
          "Share ASO wins and lessons",
          "Release notes and changelogs",
        ],
      },
    ],
    description:
      "AppBoard is open source and built in the open. The people using it decide where it goes — join in, say hi, and tell us what you need.",
    eyebrow: "Community",
    title: "Built in the open, with you",
  },
  comparison: {
    description:
      "Nothing here is magic — it's the same work you already do, minus the tab juggling.",
    eyebrow: "Why bother",
    headerTask: "Release-day task",
    headerWith: "With AppBoard",
    headerWithout: "Console hopping",
    rows: [
      {
        task: "Update a description in 8 languages",
        withAppboard: "One editor, per-language tabs, publish in one batch",
        withoutAppboard: "Two consoles, eight tabs, copy-paste from a spreadsheet",
      },
      {
        task: "Check what changed last month",
        withAppboard: "Field-level history with red/green diffs",
        withoutAppboard: "Scroll Slack and hope someone wrote it down",
      },
      {
        task: "Revert a bad listing update",
        withAppboard: "One-click rollback into your draft",
        withoutAppboard: "Reconstruct the old text from memory",
      },
      {
        task: "Answer reviews on both stores",
        withAppboard: "One inbox, AI-drafted replies you approve",
        withoutAppboard: "Two consoles, two reply flows, no overview",
      },
      {
        task: "Ship screenshots for a release",
        withAppboard: "Built-in editor exports exact store dimensions",
        withoutAppboard: "Figma exports, wrong pixel sizes, re-upload roulette",
      },
      {
        task: "Know why users are unhappy",
        withAppboard: "AI groups complaints from reviews into themes",
        withoutAppboard: "Read hundreds of reviews by hand",
      },
    ],
    title: "The same release day, with and without AppBoard",
  },
  founderNote: {
    eyebrow: "A note from the builder",
    paragraphs: [
      "AppBoard started as an internal tool. I ship my own apps, and every release ended the same way: two consoles, a dozen tabs, a spreadsheet of translations, and that quiet fear of overwriting a description nobody had backed up.",
      "So I built the tool I wanted: listings versioned like code, diffs before every publish, and both stores in one place. No growth hacks, no dashboards pretending to be insights — just the release-day work, made calm.",
      "If something feels off or missing, tell me — it's a small product and feedback genuinely changes the roadmap.",
    ],
    signature: "— Eryk, building AppBoard",
  },
  page: {
    discordCta: "Join our Discord",
    eyebrow: "Open source",
    githubCta: "View on GitHub",
    lead: "The whole platform — backend, admin panel, and this website — is public and self-hostable. And it will stay that way: AppBoard is committed to being open source, for good.",
    licenseNote:
      "Source-available under the PolyForm Noncommercial License — free for personal and non-commercial use.",
    repos: [
      {
        description:
          "Bun + Elysia + Drizzle + PostgreSQL. Store connections, listings, publishing, research, keyword rank tracking, the encrypted vault, and the REST API.",
        id: "backend",
        title: "appboard_backend — API",
      },
      {
        description:
          "Next.js + React admin panel: dashboard, listing editor with diffs and history, screenshot studio, research, reviews inbox, and automation.",
        id: "panel",
        title: "appboard_web — admin panel",
      },
      {
        description:
          "This marketing site — Next.js landing pages, documentation, and blog. Fork it, learn from it, or run your own.",
        id: "website",
        title: "appboard_website — website",
      },
    ],
    reposDescription:
      "AppBoard is split into three repositories. Self-host the backend + admin panel; the website is here for reference.",
    reposEyebrow: "Repositories",
    reposLinkLabel: "View on GitHub",
    reposTitle: "Where everything lives",
    titleHighlight: "open source",
    titleLead: "AppBoard is",
  },
  research: {
    description:
      "Most ASO tools stop at keywords. AppBoard turns store reviews and rankings into a research engine — below, a real deep run on Instagram and TikTok.",
    docsHref: "/docs/research",
    docsLabel: "Read the docs: Research",
    eyebrow: "Research and AI",
    gallery: [
      {
        alt: "AI-analyzed complaint themes for Instagram with severity badges and verbatim user quotes: missing features, UX/UI, login and account, crashes",
        caption:
          "Complaint themes with severity and verbatim quotes — the why behind the stars",
        src: "/images/panel/research-themes.png",
      },
      {
        alt: "Quick wins list and ASO metadata audit for Instagram, with keyword coverage tags showing which keywords are missing from title and description",
        caption:
          "Quick wins + metadata audit — which keywords your listing is missing",
        src: "/images/panel/research-quickwins.png",
      },
      {
        alt: "ASO keyword positions table for Instagram: each keyword with its App Store rank in the top 50 and why it matters",
        caption:
          "Keyword positions in the store's top 50, with the reasoning per keyword",
        src: "/images/panel/research-keywords.png",
      },
      {
        alt: "Star distribution and heuristic issue categories for TikTok built from 500 scraped App Store reviews",
        caption:
          "Star distribution + issue buckets from raw reviews — works without an AI key",
        src: "/images/panel/research-categories.png",
      },
      {
        alt: "Scraped App Store reviews list for Instagram with ratings, versions and full review text",
        caption:
          "The raw material: full scraped review set, kept for your own reading",
        src: "/images/panel/research-reviews.png",
      },
    ],
    heroAlt:
      "AppBoard AI research report on Instagram: features users love, features users criticize, and top user irritations distilled from reviews",
    points: [
      {
        description:
          "Point AppBoard at any app in the store — yours or a competitor's. It scrapes the listing and reviews, and the AI turns hundreds of them into what users love, what they criticize, and their top irritations — with verbatim quotes as evidence.",
        title: "AI review mining on any app",
      },
      {
        description:
          "Deep mode fetches the full review set — up to 1,500 on Google Play, ~500 on the App Store — and map-reduces it through the model, so the report reflects the whole tail, not just the last angry week.",
        title: "Deep mode for the full picture",
      },
      {
        description:
          "Keyword coverage is checked against your actual title and description, and positions are tracked within the store's top 50 — per market, with a reason why each keyword matters.",
        title: "Keywords, coverage and positions",
      },
      {
        description:
          "Bring your own OpenRouter key and pick any model. Star distribution and complaint grouping even work with no AI key at all.",
        title: "Your key, your model",
      },
    ],
    title: "Learn from every app on the store",
  },
  selfHosted: {
    description:
      "AppBoard is source-available and self-hostable. Run it on your own servers and keep full control of your data — free for personal and non-commercial use.",
    discordCta: "Join our Discord",
    docsCta: "Self-hosting guide",
    docsHref: "/docs/self-hosting",
    eyebrow: "Self-hosted",
    githubCta: "View on GitHub",
    licenseNote:
      "Source-available under the PolyForm Noncommercial License — free for personal & non-commercial use.",
    points: [
      {
        description:
          "Deploy the whole stack on your own VPS or cloud with Docker. Your database, your store credentials, your rules — nothing leaves your infrastructure.",
        title: "Own your data",
      },
      {
        description:
          "The full source is public — read it, audit it, and adapt it to your workflow. Free for personal and non-commercial use.",
        title: "Source-available",
      },
      {
        description:
          "One backend, one panel, one Postgres. Runs on anything that runs Docker — a spare VPS, your homelab, or an existing cluster. No vendor lock-in.",
        title: "Deploy anywhere",
      },
      {
        description:
          "Store keys live in an end-to-end encrypted vault on your server. Self-hosting keeps your App Store and Google Play credentials entirely under your control.",
        title: "Credentials stay yours",
      },
    ],
    titleHighlight: "own servers",
    titleLead: "Own your data. Run it on your",
  },
};

const PL: OpenSourceContent = {
  community: {
    channels: [
      {
        cta: "Dołącz na Discorda",
        description:
          "Najszybszy sposób, żeby się z nami skontaktować. Zadawaj pytania, zgłaszaj bugi, poproś o pomoc przy self-hostingu i zobacz, co powstaje, zanim trafi do wydania.",
        name: "Discord",
        points: [
          "Bezpośredni kontakt z maintainerami",
          "Wczesne podglądy nowych funkcji",
          "Pomoc przy self-hostingu od osób, które go używają",
        ],
      },
      {
        cta: "Dołącz do r/appboard",
        description:
          "Propozycje funkcji, porady ASO i dłuższe dyskusje. Głosuj na to, co powstanie następne: roadmapę kształtuje społeczność.",
        name: "Reddit",
        points: [
          "Głosuj na propozycje funkcji",
          "Dziel się sukcesami i wnioskami z ASO",
          "Release notes i changelogi",
        ],
      },
    ],
    description:
      "AppBoard jest open source i powstaje otwarcie. To osoby, które go używają, decydują, dokąd zmierza. Dołącz, przywitaj się i powiedz, czego potrzebujesz.",
    eyebrow: "Społeczność",
    title: "Budujemy otwarcie, razem z Tobą",
  },
  comparison: {
    description:
      "Nie ma tu magii: to ta sama praca co zwykle, tylko bez żonglowania zakładkami.",
    eyebrow: "Po co to wszystko",
    headerTask: "Zadanie na dzień premiery",
    headerWith: "Z AppBoardem",
    headerWithout: "Skakanie po konsolach",
    rows: [
      {
        task: "Aktualizacja opisu w 8 językach",
        withAppboard: "Jeden edytor, zakładki per język, publikacja jedną paczką",
        withoutAppboard: "Dwie konsole, osiem zakładek, kopiuj-wklej z arkusza",
      },
      {
        task: "Sprawdzenie, co zmieniło się w zeszłym miesiącu",
        withAppboard: "Historia na poziomie pól z czerwono-zielonymi diffami",
        withoutAppboard: "Przewijanie Slacka i nadzieja, że ktoś to zapisał",
      },
      {
        task: "Cofnięcie nieudanej zmiany w listingu",
        withAppboard: "Rollback do draftu jednym kliknięciem",
        withoutAppboard: "Odtwarzanie starego tekstu z pamięci",
      },
      {
        task: "Odpowiadanie na opinie w obu sklepach",
        withAppboard: "Jedna skrzynka, odpowiedzi od AI, które zatwierdzasz",
        withoutAppboard: "Dwie konsole, dwa sposoby odpowiadania, zero ogólnego obrazu",
      },
      {
        task: "Wypuszczenie screenshotów na premierę",
        withAppboard: "Wbudowany edytor eksportuje dokładne wymiary sklepów",
        withoutAppboard: "Eksporty z Figmy, złe rozmiary, upload w kółko",
      },
      {
        task: "Zrozumienie, czemu użytkownicy są niezadowoleni",
        withAppboard: "AI grupuje skargi z opinii w tematy",
        withoutAppboard: "Ręczne czytanie setek opinii",
      },
    ],
    title: "Ten sam dzień premiery, z AppBoardem i bez",
  },
  founderNote: {
    eyebrow: "Słowo od twórcy",
    paragraphs: [
      "AppBoard zaczął się jako narzędzie wewnętrzne. Wydaję własne aplikacje i każda premiera kończyła się tak samo: dwie konsole, kilkanaście zakładek, arkusz z tłumaczeniami i ten cichy strach, że nadpiszę opis, którego nikt nie zbackupował.",
      "Zbudowałem więc narzędzie, którego sam chciałem: listingi wersjonowane jak kod, diff przed każdą publikacją i oba sklepy w jednym miejscu. Bez growth hacków, bez dashboardów udających insighty. Po prostu praca dnia premiery, tyle że spokojna.",
      "Jeśli coś zgrzyta albo czegoś brakuje, napisz. To mały produkt i feedback naprawdę zmienia roadmapę.",
    ],
    signature: "Eryk, twórca AppBoard",
  },
  page: {
    discordCta: "Dołącz na Discorda",
    eyebrow: "Open source",
    githubCta: "Zobacz na GitHubie",
    lead: "Cała platforma, czyli backend, panel admina i ta strona, jest publiczna i można ją hostować u siebie. I tak zostanie: AppBoard ma być open source na stałe.",
    licenseNote:
      "Kod dostępny na licencji PolyForm Noncommercial: za darmo do użytku osobistego i niekomercyjnego.",
    repos: [
      {
        description:
          "Bun + Elysia + Drizzle + PostgreSQL. Połączenia ze sklepami, listingi, publikacja, research, śledzenie pozycji słów kluczowych, zaszyfrowany sejf i REST API.",
        id: "backend",
        title: "appboard_backend - API",
      },
      {
        description:
          "Panel admina w Next.js i React: dashboard, edytor listingów z diffami i historią, screenshot studio, research, skrzynka opinii i automatyzacje.",
        id: "panel",
        title: "appboard_web - panel admina",
      },
      {
        description:
          "Ta strona marketingowa: landing page w Next.js, dokumentacja i blog. Zforkuj ją, podejrzyj, jak działa, albo postaw własną.",
        id: "website",
        title: "appboard_website - strona",
      },
    ],
    reposDescription:
      "AppBoard jest podzielony na trzy repozytoria. Do self-hostingu potrzebujesz backendu i panelu admina, strona jest tu dla przykładu.",
    reposEyebrow: "Repozytoria",
    reposLinkLabel: "Zobacz na GitHubie",
    reposTitle: "Gdzie co znajdziesz",
    titleHighlight: "open source",
    titleLead: "AppBoard jest",
  },
  research: {
    description:
      "Większość narzędzi ASO kończy się na słowach kluczowych. AppBoard zamienia opinie i rankingi ze sklepów w silnik researchu, a poniżej widzisz prawdziwy deep run na Instagramie i TikToku.",
    docsHref: "/pl/docs/research",
    docsLabel: "Dokumentacja: Research",
    eyebrow: "Research i AI",
    gallery: [
      {
        alt: "Tematy skarg przeanalizowane przez AI dla Instagrama, z oznaczeniem wagi i dosłownymi cytatami użytkowników: brakujące funkcje, UX/UI, logowanie i konto, crashe",
        caption:
          "Tematy skarg z wagą i dosłownymi cytatami, czyli dlaczego takie, a nie inne oceny",
        src: "/images/panel/research-themes.png",
      },
      {
        alt: "Lista quick winów i audyt metadanych ASO dla Instagrama, z tagami pokrycia pokazującymi, których słów kluczowych brakuje w tytule i opisie",
        caption:
          "Quick winy i audyt metadanych, czyli których słów kluczowych brakuje w listingu",
        src: "/images/panel/research-quickwins.png",
      },
      {
        alt: "Tabela pozycji słów kluczowych ASO dla Instagrama: każde słowo z pozycją w App Store w top 50 i uzasadnieniem, dlaczego ma znaczenie",
        caption:
          "Pozycje słów kluczowych w top 50 sklepu, z uzasadnieniem dla każdego słowa",
        src: "/images/panel/research-keywords.png",
      },
      {
        alt: "Rozkład ocen i heurystyczne kategorie problemów dla TikToka zbudowane z 500 zebranych opinii z App Store",
        caption:
          "Rozkład ocen i kategorie problemów z surowych opinii, działa bez klucza do AI",
        src: "/images/panel/research-categories.png",
      },
      {
        alt: "Lista zebranych opinii z App Store dla Instagrama, z ocenami, wersjami i pełną treścią opinii",
        caption:
          "Materiał źródłowy: pełny zbiór zebranych opinii, zostaje do Twojego wglądu",
        src: "/images/panel/research-reviews.png",
      },
    ],
    heroAlt:
      "Raport researchu AI w AppBoard dla Instagrama: funkcje, które użytkownicy kochają, funkcje, które krytykują, i największe irytacje wyciągnięte z opinii",
    points: [
      {
        description:
          "Wskaż AppBoardowi dowolną aplikację w sklepie, swoją albo konkurencji. Narzędzie zbiera listing i opinie, a AI zamienia setki z nich w to, co użytkownicy kochają, co krytykują i co irytuje ich najbardziej, z dosłownymi cytatami jako dowodem.",
        title: "Analiza opinii przez AI dla dowolnej aplikacji",
      },
      {
        description:
          "Deep mode pobiera cały zbiór opinii, do 1500 w Google Play i około 500 w App Store, i przepuszcza go przez model metodą map-reduce, więc raport pokazuje cały ogon, a nie tylko ostatni zły tydzień.",
        title: "Deep mode dla pełnego obrazu",
      },
      {
        description:
          "Pokrycie słów kluczowych sprawdzamy względem Twojego realnego tytułu i opisu, a pozycje śledzimy w top 50 sklepu, per rynek, z uzasadnieniem, dlaczego każde słowo ma znaczenie.",
        title: "Słowa kluczowe, pokrycie i pozycje",
      },
      {
        description:
          "Podpinasz własny klucz OpenRouter i wybierasz dowolny model. Rozkład ocen i grupowanie skarg działają nawet zupełnie bez klucza do AI.",
        title: "Twój klucz, Twój model",
      },
    ],
    title: "Ucz się od każdej aplikacji w sklepie",
  },
  selfHosted: {
    description:
      "Kod AppBoard jest publiczny, a całość możesz hostować u siebie. Uruchom go na własnych serwerach i zachowaj pełną kontrolę nad danymi, za darmo do użytku osobistego i niekomercyjnego.",
    discordCta: "Dołącz na Discorda",
    docsCta: "Przewodnik po self-hostingu",
    docsHref: "/pl/docs/self-hosting",
    eyebrow: "Self-hosting",
    githubCta: "Zobacz na GitHubie",
    licenseNote:
      "Kod dostępny na licencji PolyForm Noncommercial: za darmo do użytku osobistego i niekomercyjnego.",
    points: [
      {
        description:
          "Postaw cały stack na własnym VPS albo w swojej chmurze, z Dockerem. Twoja baza, Twoje dane dostępowe do sklepów, Twoje zasady: nic nie opuszcza Twojej infrastruktury.",
        title: "Dane zostają u Ciebie",
      },
      {
        description:
          "Pełne źródła są jawne: czytaj je, audytuj i dopasuj do swojego workflow. Za darmo do użytku osobistego i niekomercyjnego.",
        title: "Publiczny kod",
      },
      {
        description:
          "Jeden backend, jeden panel, jeden Postgres. Działa na wszystkim, co uruchomi Dockera: zapasowym VPS, domowym serwerze albo istniejącym klastrze. Zero vendor lock-inu.",
        title: "Postawisz go wszędzie",
      },
      {
        description:
          "Klucze do sklepów leżą w sejfie szyfrowanym end-to-end na Twoim serwerze. Self-hosting sprawia, że dane dostępowe do App Store i Google Play zostają w całości pod Twoją kontrolą.",
        title: "Dane dostępowe zostają Twoje",
      },
    ],
    titleHighlight: "własnych serwerach",
    titleLead: "Twoje dane u Ciebie. Uruchom to na",
  },
};

export const OPEN_SOURCE_CONTENT: Record<Locale, OpenSourceContent> = {
  en: EN,
  pl: PL,
};
