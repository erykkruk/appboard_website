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
        przeprowadzi Cię od świeżego konta do pierwszej podłączonej aplikacji w
        jakieś dziesięć minut.
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

      <h2>Podłącz pierwszy sklep</h2>
      <p>
        Aplikacje trafiają do AppBoard z połączenia ze sklepem. Wybierz sklep, w
        którym publikujesz, i przejdź przez dedykowany przewodnik:
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
        Przy pierwszym zapisie danych dostępowych do sklepu AppBoard poprosi Cię o
        skonfigurowanie <a href="/pl/docs/security">zaszyfrowanego sejfu</a>. Poza
        nim danych dostępowych nie da się przechować, więc trzymaj passphrase w
        bezpiecznym miejscu.
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
        Po podłączeniu sklepu Twoje aplikacje pojawiają się na dashboardzie
        workspace&apos;u razem z platformą, wersją i liczbą oczekujących zmian.
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
          <a href="/pl/docs/listings">Zedytuj listing</a> w jednym języku i
          popatrz na liczniki znaków oraz oznaczenia stanu dirty.
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
