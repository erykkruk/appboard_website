import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "connect-google-play";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function ConnectGooglePlayPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        AppBoard łączy się z Google Play przez service account, którego zapraszasz
        do swojego Play Console. Klucz JSON tego service accounta to dane
        dostępowe, których AppBoard używa do czytania i aktualizowania Twoich
        listingów.
      </p>

      <h2>Utwórz i zaproś service account</h2>
      <ol>
        <li>
          W projekcie Google Cloud powiązanym z Twoim Play Console utwórz service
          account i wygeneruj dla niego <strong>klucz JSON</strong>.
        </li>
        <li>
          W Play Console, w sekcji <strong>Users and permissions</strong>, zaproś
          adres e-mail service accounta i nadaj mu dostęp do podglądu informacji o
          aplikacji oraz edycji listingów w sklepie.
        </li>
        <li>
          Zacznij nowe połączenie z Google Play w AppBoard i wgraj klucz JSON.
          Zostanie zaszyfrowany w <a href="/pl/docs/security">sejfie</a>, zanim
          trafi do bazy.
        </li>
      </ol>

      <h2>Ręczna rejestracja aplikacji w wersji draft</h2>
      <p>
        Play Developer API od Google zwraca tylko aplikacje, które mają co
        najmniej jedno wydanie opublikowane albo w trakcie weryfikacji. Aplikacje,
        które są dalej w wersji draft, są dla API niewidoczne, więc nie
        zaimportują się automatycznie.
      </p>
      <p>
        Dla nich AppBoard wspiera{" "}
        <strong>ręczną rejestrację pakietu</strong>: sam podajesz package name
        aplikacji, a AppBoard śledzi ją obok aplikacji wykrytych automatycznie.
        Gdy aplikacja dostanie wydanie widoczne dla Google, zachowuje się jak
        każda inna podłączona aplikacja.
      </p>

      <h2>Pełny re-import</h2>
      <p>
        Jeśli Twoje lokalne aplikacje rozjechały się z tym, co jest na koncie, na
        przykład zostały nieaktualne wpisy, konsola została przeorganizowana albo
        po prostu chcesz zacząć od zera, uruchom{" "}
        <strong>pełny re-import</strong>. AppBoard czyści lokalnie zapisane
        aplikacje dla tego sklepu i pobiera wszystko na nowo z konta.
      </p>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> pełny re-import usuwa lokalne aplikacje dla
          danego sklepu, zanim pobierze je ponownie. Wpisy istniejące tylko
          lokalnie, w tym ręcznie zarejestrowane pakiety w wersji draft, trzeba
          potem dodać jeszcze raz.
        </p>
      </blockquote>

      <h2>Publikowanie do Play</h2>
      <p>
        Gdy <a href="/pl/docs/publishing">publikujesz</a>, AppBoard może wysłać
        Twoje zmiany jako draft albo zgłosić je do weryfikacji. Tryby managed
        publishing, czyli ręczny, automatyczny i zaplanowany, ustawia się w samym
        Play Console, więc AppBoard respektuje to, co masz tam skonfigurowane.
      </p>
    </DocsLayout>
  );
}
