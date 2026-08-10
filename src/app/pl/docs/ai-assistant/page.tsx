import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "ai-assistant";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function AiAssistantPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        Funkcje AI w AppBoard działają przez OpenRouter na{" "}
        <strong>Twoim własnym kluczu API</strong>. Ty wybierasz dostawcę i model,
        Ty kontrolujesz wydatki, a AI nigdy nie zapisuje niczego do sklepu bez
        Twojej zgody.
      </p>

      <h2>Skonfiguruj swój klucz</h2>
      <ol>
        <li>Załóż konto w OpenRouter i wygeneruj klucz API.</li>
        <li>
          Dodaj go w <strong>Ustawieniach</strong> swojego workspace&apos;u. Klucz
          jest przechowywany per workspace i szyfrowany jak każde inne dane
          dostępowe.
        </li>
        <li>
          Opcjonalnie ustaw domyślny model i nadpisuj go per funkcja, gdy dane
          zadanie potrzebuje czegoś większego albo tańszego.
        </li>
      </ol>

      <h2>Wybierz model</h2>
      <p>
        Ponieważ całość działa na OpenRouter, możesz użyć w zasadzie dowolnego
        modelu, który OpenRouter udostępnia. Ustaw domyślny model dla
        workspace&apos;u i nadpisz go dla konkretnej funkcji, na przykład mocniejszy
        model do tłumaczeń, a szybszy do krótkich odpowiedzi na opinie.
      </p>

      <h2>Co potrafi asystent</h2>
      <ul>
        <li>Przygotować i dopracować opisy w listingu.</li>
        <li>Przetłumaczyć metadane na inne języki.</li>
        <li>Zaproponować zestawy słów kluczowych.</li>
        <li>
          Przygotować <a href="/pl/docs/reviews">odpowiedzi na opinie</a> prosto ze
          skrzynki.
        </li>
        <li>
          Napędzać głębszą analizę w{" "}
          <a href="/pl/docs/research">Research</a>.
        </li>
      </ul>

      <h2>Kontrolę masz Ty</h2>
      <p>
        Wynik AI zawsze ląduje jako draft albo propozycja. Do App Store i Google
        Play nic nie trafia, dopóki tego nie przejrzysz i nie{" "}
        <a href="/pl/docs/publishing">opublikujesz</a>. Asystent proponuje, Ty
        zatwierdzasz.
      </p>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> bez klucza OpenRouter funkcje AI pozostają
          wyłączone, ale reszta AppBoard działa normalnie, łącznie z heurystyczną
          kategoryzacją opinii w Research.
        </p>
      </blockquote>
    </DocsLayout>
  );
}
