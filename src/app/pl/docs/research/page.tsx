import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "research";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function ResearchPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        Research działa na <strong>dowolnej</strong> aplikacji ze sklepu, nie
        tylko na tych, które masz podłączone. Wyceluj nim w konkurenta, w
        aplikację, którą rozważasz, albo we własny listing, żeby wyciągnąć
        pozycje, opinie i dane rynkowe.
      </p>

      <h2>Co możesz uruchomić</h2>
      <ul>
        <li>
          <strong>Wyszukiwanie aplikacji</strong>, czyli znalezienie aplikacji w
          App Store albo Google Play do zbadania.
        </li>
        <li>
          <strong>Zbieranie opinii</strong>, czyli pobranie ostatnich opinii i
          heurystyczne pokategoryzowanie skarg. Działa nawet bez klucza do AI.
        </li>
        <li>
          <strong>Analiza AI</strong>, czyli podsumowanie motywów i sentymentu w
          zebranych opiniach.
        </li>
        <li>
          <strong>Śledzenie słów kluczowych</strong>, czyli sprawdzenie, na
          których pozycjach aplikacja wypada dla interesujących Cię fraz.
        </li>
        <li>
          <strong>Porównanie rynków</strong>, czyli zestawienie aplikacji w obrębie
          rynku.
        </li>
        <li>
          <strong>Porównanie z konkurencją</strong>, czyli dwie aplikacje obok
          siebie.
        </li>
        <li>
          <strong>Analiza wizualna</strong>, czyli analiza screenshotów ze sklepu.
        </li>
      </ul>

      <h2>Heurystyki kontra AI</h2>
      <p>
        Kategoryzacja skarg działa na heurystyce opartej na kubełkach słów
        kluczowych, więc sensowny rozkład opinii dostajesz od razu, bez żadnego
        klucza API. Dodaj własny{" "}
        <a href="/pl/docs/ai-assistant">klucz OpenRouter</a>, aby odblokować
        głębszą analizę AI i podsumowania na bazie surowych danych.
      </p>

      <h2>Limity</h2>
      <table>
        <thead>
          <tr>
            <th>Funkcja</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Śledzone słowa kluczowe</td>
            <td>Do 15, pozycje sprawdzane w obrębie top 50</td>
          </tr>
          <tr>
            <td>Analiza opinii w jednym przebiegu</td>
            <td>Do 300 opinii</td>
          </tr>
          <tr>
            <td>Opinie z Google Play</td>
            <td>250 standardowo, do 1,500 w trybie deep</td>
          </tr>
          <tr>
            <td>Porównanie z konkurencją</td>
            <td>120 opinii na stronę</td>
          </tr>
          <tr>
            <td>Analiza wizualna</td>
            <td>Do 6 obrazów</td>
          </tr>
        </tbody>
      </table>

      <h2>Tryb deep</h2>
      <p>
        Aby uzyskać pełniejszy obraz, tryb deep pobiera więcej opinii i analizuje
        je równolegle w porcjach, a potem łączy wyniki. Kosztuje to więcej czasu, a
        w krokach z AI także więcej tokenów, więc sięgaj po niego wtedy, gdy jeden
        przebieg daje za mało sygnału.
      </p>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> publiczny feed opinii Apple jest ograniczony,
          więc zbieranie opinii z App Store zwraca przycięty, świeży wycinek, a nie
          pełną historię opinii aplikacji.
        </p>
      </blockquote>
    </DocsLayout>
  );
}
