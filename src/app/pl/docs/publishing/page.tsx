import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "publishing";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function PublishingPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        Publikowanie to świadomy krok, który wysyła Twoje drafty do sklepu. Dopóki
        nie opublikujesz, wszystko, co edytujesz, zostaje lokalnie w AppBoard i
        nic nie wychodzi automatycznie.
      </p>

      <ScreenshotFrame
        alt="Strona publikacji w AppBoard z oczekującymi zmianami i opcjami wysyłki dla każdego sklepu"
        src="/images/panel/app-publish.png"
      />

      <h2>Przejrzyj oczekujące zmiany</h2>
      <p>
        Strona publikacji wypisuje każdą oczekującą zmianę per pole i per język,
        więc dokładnie widzisz, co zostanie wysłane, zanim to zatwierdzisz. Zmiany
        zgodne z aktualną wartością w sklepie nie są wypisywane, pokazują się
        tylko realne różnice.
      </p>

      <h2>Google Play</h2>
      <p>W aplikacjach z Play możesz:</p>
      <ul>
        <li>
          <strong>Wysłać jako draft</strong>, czyli przekazać zmiany do sklepu bez
          zgłaszania ich do weryfikacji, żeby dokończyć przegląd w Play Console.
        </li>
        <li>
          <strong>Zgłosić zmiany do weryfikacji</strong>, czyli przekazać
          aktualizację do Google.
        </li>
      </ul>
      <p>
        To, czy zatwierdzona zmiana pójdzie od razu na żywo, czy poczeka, zależy od
        trybu managed publishing w Twoim Play Console (ręczny, automatyczny albo
        zaplanowany), a nie od AppBoard.
      </p>

      <h2>App Store</h2>
      <p>
        W aplikacjach z App Store AppBoard wysyła lokalizacje wersji dla zmienionych
        języków z powrotem do App Store Connect. Osobna akcja pozwala opublikować
        wszystkie lokalizacje wersji w stanie dirty naraz, gdy pracujesz na wielu
        lokalizacjach.
      </p>

      <h2>Publikowanie wsadowe</h2>
      <p>
        Gdy wysyłasz kilka pozycji razem, AppBoard traktuje je jako paczkę i zwraca{" "}
        <strong>raport dla każdej pozycji</strong>: każda para pole i język
        pokazuje, czy się udało, czy nie, więc jedna odrzucona pozycja nie zostawia
        Cię z pytaniem o resztę.
      </p>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> publikowanie wysyła dane do żywego sklepu.
          Najpierw przejrzyj listę oczekujących zmian i pamiętaj, że to, co dzieje
          się po zatwierdzeniu przez Google, zależy od trybu publikacji w Twoim Play
          Console.
        </p>
      </blockquote>

      <h2>Po publikacji</h2>
      <p>
        Każda opublikowana zmiana jest zapisywana. Zajrzyj do sekcji{" "}
        <a href="/pl/docs/history-and-rollback">Historia i rollback</a>, żeby
        zobaczyć diff przed i po dla każdego pola i języka oraz cofnąć zmianę z
        powrotem do draftu, jeśli zmienisz zdanie.
      </p>
    </DocsLayout>
  );
}
