import { DOCS_SECTIONS } from "@/lib/docs";
import type { Locale } from "@/lib/i18n/locales";

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

export const DOCS_SECTIONS_DE: DocSection[] = [
  {
    pages: [
      {
        description:
          "Workspace anlegen, das Onboarding durchlaufen und in etwa zehn Minuten die erste App in AppBoard aufnehmen.",
        slug: "getting-started",
        title: "Erste Schritte",
      },
      {
        description:
          "App Store Connect per API-Key verbinden: Issuer ID, Key ID und der private .p8-Schlüssel, und wie der verschlüsselte Tresor sie schützt.",
        slug: "connect-app-store",
        title: "App Store Connect verbinden",
      },
      {
        description:
          "Google Play Console per Service-Account-JSON verbinden, Apps im Entwurfsstatus manuell erfassen und bei Bedarf einen vollständigen Re-Import starten.",
        slug: "connect-google-play",
        title: "Google Play Console verbinden",
      },
    ],
    title: "Einrichtung",
  },
  {
    pages: [
      {
        description:
          "Titel, Beschreibungen und Keywords getrennt pro Sprache bearbeiten, mit Entwürfen, Zeichenzählern und Dirty-State-Erkennung.",
        slug: "listings",
        title: "Einträge und Sprachen",
      },
      {
        description:
          "Screenshots pro Gerät und Sprache verwalten, die von den Stores geforderten Größen treffen und den eingebauten Editor nutzen.",
        slug: "screenshots",
        title: "Screenshots und Grafiken",
      },
      {
        description:
          "Änderungen an App Store und Google Play senden, als Entwurf veröffentlichen oder zur Prüfung einreichen und den Bericht pro Position lesen.",
        slug: "publishing",
        title: "Veröffentlichen",
      },
      {
        description:
          "Jede veröffentlichte Änderung wird pro Feld und Sprache festgehalten, mit rot-grünen Diffs und Rollback in den Entwurf per Klick.",
        slug: "history-and-rollback",
        title: "Verlauf und Rollback",
      },
    ],
    title: "Der tägliche Ablauf",
  },
  {
    pages: [
      {
        description:
          "Rezensionen aus App Store und Google Play in einem Posteingang lesen und mit KI-Entwürfen beantworten, die Sie selbst freigeben.",
        slug: "reviews",
        title: "Rezensionen",
      },
      {
        description:
          "Jede App im Store untersuchen: Keyword-Positionen, Marktvergleich, Wettbewerbsanalyse und KI-Auswertung von Rezensionen.",
        slug: "research",
        title: "Research",
      },
      {
        description:
          "Den KI-Assistenten mit eigenem OpenRouter-Key einrichten, Modelle wählen und genau sehen, worauf die KI zugreifen darf und worauf nicht.",
        slug: "ai-assistant",
        title: "KI-Assistent",
      },
    ],
    title: "Optimierung",
  },
  {
    pages: [
      {
        description:
          "Wie der Ende-zu-Ende-verschlüsselte Tresor für Zugangsdaten funktioniert: Passphrase, Entsperren und was beim Zurücksetzen passiert.",
        slug: "security",
        title: "Sicherheit und Tresor",
      },
      {
        description:
          "Workspaces, Feature-Flags, App-Gruppen für Android- und iOS-Paare sowie die Verwaltung von In-App-Käufen und Compliance-Daten.",
        slug: "workspace",
        title: "Workspace und Einstellungen",
      },
    ],
    title: "Plattform",
  },
  {
    pages: [
      {
        description:
          "AppBoard ist Open Source und selbst hostbar. Welches Repository wofür zuständig ist, wie Sie den Stack mit Docker starten und was die Lizenz erlaubt.",
        slug: "self-hosting",
        title: "Self-Hosting und Open Source",
      },
    ],
    title: "Open Source",
  },
];

export const DOCS_SECTIONS_ES: DocSection[] = [
  {
    pages: [
      {
        description:
          "Crea tu espacio de trabajo, completa el onboarding y añade tu primera app a AppBoard en unos diez minutos.",
        slug: "getting-started",
        title: "Primeros pasos",
      },
      {
        description:
          "Conecta App Store Connect con una clave de API: issuer ID, key ID y el archivo .p8, y cómo los protege el baúl cifrado.",
        slug: "connect-app-store",
        title: "Conectar App Store Connect",
      },
      {
        description:
          "Conecta Google Play Console con el JSON de la cuenta de servicio, registra apps en borrador a mano y lanza una reimportación completa cuando haga falta.",
        slug: "connect-google-play",
        title: "Conectar Google Play Console",
      },
    ],
    title: "Configuración",
  },
  {
    pages: [
      {
        description:
          "Edita títulos, descripciones y keywords por idioma, con borradores, contadores de caracteres y seguimiento de cambios sin publicar.",
        slug: "listings",
        title: "Fichas e idiomas",
      },
      {
        description:
          "Gestiona capturas por dispositivo e idioma, cumple los tamaños que exige cada tienda y usa el editor integrado.",
        slug: "screenshots",
        title: "Capturas y gráficos",
      },
      {
        description:
          "Envía cambios a App Store y Google Play, publica como borrador o manda a revisión, y lee el informe de cada elemento.",
        slug: "publishing",
        title: "Publicación",
      },
      {
        description:
          "Cada cambio publicado queda registrado por campo e idioma, con diffs en rojo y verde y vuelta atrás al borrador en un clic.",
        slug: "history-and-rollback",
        title: "Historial y reversión",
      },
    ],
    title: "El flujo diario",
  },
  {
    pages: [
      {
        description:
          "Lee las reseñas de App Store y Google Play en una sola bandeja y respóndelas con borradores de IA que apruebas tú.",
        slug: "reviews",
        title: "Reseñas",
      },
      {
        description:
          "Investiga cualquier app de las tiendas: posiciones por keyword, comparación de mercados, análisis de competencia y lectura de reseñas con IA.",
        slug: "research",
        title: "Research",
      },
      {
        description:
          "Configura el asistente de IA con tu propia clave de OpenRouter, elige modelos y comprueba exactamente a qué puede acceder y a qué no.",
        slug: "ai-assistant",
        title: "Asistente de IA",
      },
    ],
    title: "Optimización",
  },
  {
    pages: [
      {
        description:
          "Cómo funciona el baúl de credenciales cifrado de extremo a extremo: frase de paso, desbloqueo y qué ocurre al restablecerlo.",
        slug: "security",
        title: "Seguridad y baúl",
      },
      {
        description:
          "Espacios de trabajo, feature flags, grupos de apps para parejas Android e iOS y gestión de compras integradas y datos de cumplimiento.",
        slug: "workspace",
        title: "Espacio de trabajo y ajustes",
      },
    ],
    title: "Plataforma",
  },
  {
    pages: [
      {
        description:
          "AppBoard es open source y puedes alojarlo tú. Qué hace cada repositorio, cómo levantar el stack con Docker y qué permite la licencia.",
        slug: "self-hosting",
        title: "Self-hosting y open source",
      },
    ],
    title: "Open source",
  },
];

/**
 * Docs sections per locale. Adding a language means adding one array and one
 * entry here; every helper below and the docs layout derive from this map, so
 * nothing else needs a new function.
 */
export const DOCS_SECTIONS_BY_LOCALE: Record<Locale, DocSection[]> = {
  de: DOCS_SECTIONS_DE,
  en: DOCS_SECTIONS,
  es: DOCS_SECTIONS_ES,
  pl: DOCS_SECTIONS_PL,
};

export function getDocSectionsFor(locale: Locale): DocSection[] {
  return DOCS_SECTIONS_BY_LOCALE[locale];
}

export function getAllDocPagesFor(locale: Locale): DocPage[] {
  return getDocSectionsFor(locale).flatMap((section) => section.pages);
}

export function getDocPageFor(
  locale: Locale,
  slug: string,
): DocPage | undefined {
  return getAllDocPagesFor(locale).find((page) => page.slug === slug);
}
