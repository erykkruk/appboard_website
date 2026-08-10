import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "history-and-rollback";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function HistoryPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        AppBoard prowadzi historię wersji pól listingu w stylu GitHuba. Każda
        opublikowana zmiana jest zapisywana, więc widzisz, co się zmieniło i
        kiedy, i możesz to cofnąć jednym kliknięciem.
      </p>

      <ScreenshotFrame
        alt="Historia zmian w AppBoard z czerwono-zielonymi diffami pól i kontrolkami rollbacku"
        src="/images/panel/app-history.png"
      />

      <h2>Co jest zapisywane</h2>
      <p>
        Przy każdej publikacji AppBoard zapisuje starą i nową wartość każdego
        zmienionego pola, oznaczoną językiem. Widok historii wypisuje te wpisy od
        najnowszych i pozwala filtrować po języku i po polu, więc znalezienie
        konkretnej zmiany w rozbudowanej aplikacji wielojęzycznej dalej idzie
        szybko.
      </p>

      <h2>Jak czytać diff</h2>
      <p>
        Każdy wpis pokazuje czerwono-zielony diff: poprzednia wartość na czerwono,
        nowa na zielono. Czyta się to jak code review, więc od razu widać, czy
        poszła drobna korekta tytułu, czy przepisanie całego opisu.
      </p>

      <h2>Cofanie zmian</h2>
      <p>
        Znalazłeś zmianę, którą chcesz cofnąć? Zrób rollback jednym kliknięciem.
        Rollback nie rusza żywego sklepu bezpośrednio, tylko przywraca starą
        wartość do Twojego <a href="/pl/docs/listings">draftu</a> i oznacza ten
        język jako dirty.
      </p>
      <ol>
        <li>Otwórz wpis historii, który chcesz cofnąć.</li>
        <li>Zrób rollback, a stara wartość wróci do Twojego draftu.</li>
        <li>
          Przejrzyj przywrócony draft, a potem{" "}
          <a href="/pl/docs/publishing">opublikuj</a> go, żeby rollback wszedł na
          żywo.
        </li>
      </ol>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> rollback aktualizuje Twój draft, a nie sklep.
          Cofnięta wartość wchodzi na żywo dopiero po publikacji, dzięki czemu
          kontrolujesz każdy zapis do sklepu.
        </p>
      </blockquote>

      <h2>Diffy draftu</h2>
      <p>
        Obok historii publikacji AppBoard pokazuje też diff na żywo między Twoim
        aktualnym draftem a tym, co jest w sklepie, per język. To te same
        oczekujące zmiany, które zobaczysz na{" "}
        <a href="/pl/docs/publishing">stronie publikacji</a>, zanim cokolwiek
        wyślesz.
      </p>
    </DocsLayout>
  );
}
