import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { APP_URL, buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "getting-started";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function GettingStartedPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        AppBoard zbiera App Store Connect i Google Play Console w jednym panelu,
        więc metadane edytujesz, screenshotami zarządzasz, zmiany publikujesz i
        opinie analizujesz bez przeskakiwania między konsolami. Ta strona
        przeprowadzi Cię od świeżego konta do pierwszej aplikacji w minutę, a
        do podłączonego sklepu wtedy, gdy zechcesz publikować jednym kliknięciem.
      </p>

      <h2>Logowanie</h2>
      <p>
        AppBoard używa logowania bez hasła. Podajesz adres e-mail, my wysyłamy
        jednorazowy kod, a Ty wklejasz go z powrotem i wchodzisz do swojego
        workspace&apos;u. Nie ma haseł, które trzeba przechowywać albo rotować.
      </p>
      <p>
        Chcesz się rozejrzeć, zanim podłączysz prawdziwe konto? Otwórz{" "}
        <a href={`${APP_URL}/demo`}>demo na żywo</a>, czyli w pełni wypełniony
        workspace z przykładowymi aplikacjami, listingami i opiniami. Rejestracja
        nie jest potrzebna.
      </p>

      <h2>Załóż workspace</h2>
      <p>
        Każde konto zaczyna się od workspace&apos;u. Workspace to kontener na
        Twoje aplikacje, połączenia ze sklepami, ustawienia i zaszyfrowane dane
        dostępowe, a przy okazji granica, na której AppBoard izoluje dane. Później
        możesz założyć kolejne workspace&apos;y dla osobnych zespołów albo
        klientów.
      </p>

      <h2>Dodaj pierwszą aplikację</h2>
      <p>
        Wklej link do strony aplikacji w App Store albo Google Play. AppBoard
        importuje listing w każdym języku, w którym go wydajesz, zrzuty ekranu w
        pełnym rozmiarze, ocenę ze sklepu i opinie. Bez danych API, bez konsoli.
        Aplikacja jeszcze nieopublikowana? Wybierz &quot;Something new&quot; i
        zacznij od pustego listingu.
      </p>
      <p>
        Dalej panel prowadzi Cię krok po kroku: przejrzyj tekst, który serwuje
        sklep, uruchom audyt (ocena listingu, słowa kluczowe, które da się
        wygrać, co jest źle, a co dobrze), zaakceptuj albo odrzuć propozycje
        poprawek jako diffy, otwórz swoje zrzuty w edytorze i opublikuj.
      </p>

      <h2>Podłącz sklep (opcjonalnie)</h2>
      <p>
        Bez połączenia ze sklepem publikujesz, kopiując gotowy tekst do konsoli
        i klikając &quot;I pasted it into the store&quot;: AppBoard zapisze
        zmianę w historii i na wykresie pozycji. API sklepu podłącz wtedy, gdy
        resztę ma zrobić za Ciebie: publikacja jednym kliknięciem do obu
        sklepów, wgrywanie zrzutów i odpowiedzi na opinie z panelu.
      </p>
      <ul>
        <li>
          <a href="/pl/docs/connect-app-store">Podłącz App Store Connect</a>,
          przez API key z App Store Connect.
        </li>
        <li>
          <a href="/pl/docs/connect-google-play">Podłącz Google Play Console</a>,
          przez JSON service accounta.
        </li>
      </ul>
      <p>
        Dane dostępowe są szyfrowane w spoczynku; dodatkowo możesz zamknąć je w{" "}
        <a href="/pl/docs/security">sejfie</a> chronionym passphrase, którego
        serwery AppBoard nie potrafią otworzyć.
      </p>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> reset sejfu bezpowrotnie kasuje wszystkie
          zapisane dane dostępowe, a kodu odzyskiwania nie ma. Zapisz passphrase w
          menedżerze haseł, zanim przejdziesz dalej.
        </p>
      </blockquote>

      <h2>Rozejrzyj się po dashboardzie</h2>
      <p>
        Każda dodana aplikacja pojawia się na dashboardzie workspace&apos;u
        razem z platformą, rodzajem połączenia (link albo API), wersją i liczbą
        oczekujących zmian.
        Otwórz dowolną aplikację, aby przejść do jej listingów, screenshotów,
        historii, opinii i publikacji.
      </p>

      <ScreenshotFrame
        alt="Dashboard workspace'u w AppBoard z podłączonymi aplikacjami z App Store i Google Play"
        src="/images/panel/dashboard.png"
      />

      <h2>Co robić dalej</h2>
      <ol>
        <li>
          Otwórz ekran <strong>Fixes</strong> aplikacji i zaakceptuj propozycje
          tekstu z audytu albo{" "}
          <a href="/pl/docs/listings">zedytuj listing</a> samodzielnie z
          limitami sklepu pokazywanymi na żywo.
        </li>
        <li>
          <a href="/pl/docs/publishing">Opublikuj swoje zmiany</a>, bo nic nie
          trafia do sklepu, dopóki sam tego nie wyślesz.
        </li>
        <li>
          <a href="/pl/docs/research">Uruchom research</a> na konkurencie, żeby
          zobaczyć pozycje na słowa kluczowe i skargi z opinii.
        </li>
      </ol>
    </DocsLayout>
  );
}
