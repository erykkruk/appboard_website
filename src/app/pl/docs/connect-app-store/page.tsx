import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "connect-app-store";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function ConnectAppStorePlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        AppBoard rozmawia z Apple przez App Store Connect API. Raz generujesz
        zespołowy API key, przekazujesz AppBoard trzy wartości i każda aplikacja
        na koncie staje się dostępna do zarządzania.
      </p>

      <h2>Czego potrzebujesz</h2>
      <table>
        <thead>
          <tr>
            <th>Wartość</th>
            <th>Skąd ją wziąć</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Issuer ID</td>
            <td>Widoczny na górze zakładki Keys w App Store Connect.</td>
          </tr>
          <tr>
            <td>Key ID</td>
            <td>Przypisywany do API key w momencie jego tworzenia.</td>
          </tr>
          <tr>
            <td>Klucz prywatny (.p8)</td>
            <td>Plik klucza do pobrania, Apple pozwala pobrać go tylko raz.</td>
          </tr>
        </tbody>
      </table>

      <h2>Wygeneruj API key</h2>
      <ol>
        <li>
          W App Store Connect otwórz <strong>Users and Access</strong> →{" "}
          <strong>Integrations</strong> → <strong>App Store Connect API</strong>.
        </li>
        <li>
          Utwórz nowy klucz. Nadaj mu nazwę i rolę, która pozwala czytać i
          edytować metadane aplikacji (Admin albo App Manager).
        </li>
        <li>
          Skopiuj <strong>Issuer ID</strong> oraz <strong>Key ID</strong> nowego
          klucza.
        </li>
        <li>
          Pobierz plik klucza prywatnego <strong>.p8</strong> i zachowaj go, bo
          Apple udostępnia pobranie tylko raz.
        </li>
      </ol>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> pliku .p8 nie da się pobrać ponownie. Jeśli go
          zgubisz, unieważnij klucz w App Store Connect i wygeneruj nowy.
        </p>
      </blockquote>

      <h2>Dodaj połączenie w AppBoard</h2>
      <ol>
        <li>Otwórz swój workspace i zacznij nowe połączenie z App Store.</li>
        <li>
          Wklej Issuer ID i Key ID, a potem wgraj plik .p8. AppBoard szyfruje
          wszystkie trzy wartości w sejfie, zanim trafią do bazy danych.
        </li>
        <li>
          Zapisz. AppBoard weryfikuje klucz i importuje aplikacje, które widzi na
          koncie.
        </li>
      </ol>
      <p>
        Jeśli to Twoje pierwsze dane dostępowe, AppBoard przeprowadzi Cię przez
        utworzenie <a href="/pl/docs/security">zaszyfrowanego sejfu</a>. Sejf musi
        być odblokowany, żeby AppBoard mógł użyć klucza. Gdy jest zamknięty,
        wywołania do sklepu są odrzucane, a interfejs prosi o odblokowanie.
      </p>

      <h2>Po podłączeniu</h2>
      <p>
        Twoje aplikacje pojawiają się na dashboardzie razem z aktualną wersją.
        Stamtąd możesz <a href="/pl/docs/listings">edytować listingi</a> w
        poszczególnych językach, zarządzać{" "}
        <a href="/pl/docs/screenshots">screenshotami</a> i{" "}
        <a href="/pl/docs/publishing">wysyłać lokalizacje wersji</a> z powrotem do
        Apple. Do App Store nic nie trafia, dopóki tego nie opublikujesz.
      </p>
    </DocsLayout>
  );
}
