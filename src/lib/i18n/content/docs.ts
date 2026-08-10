import type { DocPage, DocSection } from "@/lib/docs";

export const DOCS_SECTIONS_PL: DocSection[] = [
  {
    pages: [
      {
        description:
          "Załóż workspace, przejdź przez wprowadzenie i dodaj pierwszą aplikację do AppBoard w jakieś dziesięć minut.",
        slug: "getting-started",
        title: "Pierwsze kroki",
      },
      {
        description:
          "Podłącz App Store Connect przez API key: issuer ID, key ID i klucz prywatny .p8, plus to, jak chroni je zaszyfrowany sejf.",
        slug: "connect-app-store",
        title: "Podłącz App Store Connect",
      },
      {
        description:
          "Podłącz Google Play Console przez JSON service accounta, rejestruj ręcznie aplikacje w wersji draft i uruchom pełny re-import, gdy zajdzie potrzeba.",
        slug: "connect-google-play",
        title: "Podłącz Google Play Console",
      },
    ],
    title: "Konfiguracja",
  },
  {
    pages: [
      {
        description:
          "Edytuj tytuły, opisy i słowa kluczowe osobno dla każdego języka, z draftami, licznikami znaków i śledzeniem stanu dirty.",
        slug: "listings",
        title: "Listingi i języki",
      },
      {
        description:
          "Zarządzaj screenshotami per urządzenie i język, trafiaj w wymagane przez sklepy rozmiary i korzystaj z wbudowanego edytora.",
        slug: "screenshots",
        title: "Screenshoty i grafiki",
      },
      {
        description:
          "Wysyłaj zmiany do App Store i Google Play, publikuj jako draft albo zgłaszaj do weryfikacji i czytaj raport publikacji dla każdej pozycji.",
        slug: "publishing",
        title: "Publikowanie",
      },
      {
        description:
          "Każda opublikowana zmiana jest zapisywana per pole i język, z czerwono-zielonymi diffami oraz rollbackiem do draftu jednym kliknięciem.",
        slug: "history-and-rollback",
        title: "Historia i rollback",
      },
    ],
    title: "Podstawowy workflow",
  },
  {
    pages: [
      {
        description:
          "Czytaj opinie z App Store i Google Play w jednej skrzynce i odpowiadaj na nie, korzystając z propozycji AI, które sam zatwierdzasz.",
        slug: "reviews",
        title: "Opinie",
      },
      {
        description:
          "Przebadaj dowolną aplikację ze sklepu: pozycje na słowa kluczowe, porównanie rynków, analizę konkurencji i wyciąganie wniosków z opinii przez AI.",
        slug: "research",
        title: "Research",
      },
      {
        description:
          "Skonfiguruj asystenta AI własnym kluczem OpenRouter, wybierz modele i zobacz dokładnie, czego AI może dotknąć, a czego nie.",
        slug: "ai-assistant",
        title: "Asystent AI",
      },
    ],
    title: "Optymalizacja",
  },
  {
    pages: [
      {
        description:
          "Jak działa szyfrowany end-to-end sejf na dane dostępowe: passphrase, odblokowywanie i co się dzieje przy resecie.",
        slug: "security",
        title: "Bezpieczeństwo i sejf",
      },
      {
        description:
          "Workspace'y, feature flagi, grupy aplikacji dla par Android + iOS oraz zarządzanie zakupami in-app i danymi compliance.",
        slug: "workspace",
        title: "Workspace i ustawienia",
      },
    ],
    title: "Platforma",
  },
  {
    pages: [
      {
        description:
          "AppBoard jest open source i można go hostować u siebie. Które repozytorium za co odpowiada, jak samodzielnie uruchomić stack z Dockerem i jakie są warunki licencji.",
        slug: "self-hosting",
        title: "Self-hosting i open source",
      },
    ],
    title: "Open source",
  },
];

export const ALL_DOC_PAGES_PL: DocPage[] = DOCS_SECTIONS_PL.flatMap(
  (section) => section.pages,
);

export function getDocPagePl(slug: string): DocPage | undefined {
  return ALL_DOC_PAGES_PL.find((page) => page.slug === slug);
}
