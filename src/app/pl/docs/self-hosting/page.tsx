import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import {
  buildPageMetadata,
  DISCORD_URL,
  GITHUB_REPOS,
} from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "self-hosting";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function SelfHostingPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        AppBoard jest open source i można go hostować u siebie, i tak zostanie.
        Cała platforma jest publiczna, więc możesz przeczytać kod, uruchomić go na
        własnej infrastrukturze i zachować pełną kontrolę nad swoimi danymi oraz
        danymi dostępowymi do sklepów.
      </p>

      <h2>Repozytoria</h2>
      <p>AppBoard jest podzielony na trzy repozytoria:</p>
      <ul>
        <li>
          <a href={GITHUB_REPOS.backend}>appboard_backend</a>, czyli API (Bun +
          Elysia + Drizzle + PostgreSQL): połączenia ze sklepami, listingi,
          publikowanie, research, śledzenie pozycji na słowa kluczowe i
          zaszyfrowany sejf.
        </li>
        <li>
          <a href={GITHUB_REPOS.panel}>appboard_web</a>, czyli panel
          administracyjny (Next.js + React): dashboard, edytor listingów, studio
          screenshotów, research i automatyzacje.
        </li>
        <li>
          <a href={GITHUB_REPOS.website}>appboard_website</a>, czyli ta strona
          marketingowa, dokumentacja i blog.
        </li>
      </ul>
      <p>
        Do samodzielnego hostowania produktu potrzebujesz{" "}
        <strong>backendu</strong> i <strong>panelu administracyjnego</strong>.
        Strona jest opcjonalna i serwuje wyłącznie publiczne treści marketingowe.
      </p>

      <h2>Uruchomienie u siebie</h2>
      <p>
        Każde repozytorium ma <code>README.md</code> i{" "}
        <code>CONTRIBUTING.md</code> z dokładną konfiguracją. W skrócie:
      </p>
      <ol>
        <li>
          <strong>Backend</strong>: postaw PostgreSQL, skopiuj{" "}
          <code>.env.example</code> do <code>.env</code>, wygeneruj{" "}
          <code>ENCRYPTION_KEY</code> (<code>openssl rand -hex 32</code>), ustaw
          SMTP i publiczne adresy URL, a potem <code>bun install</code> i{" "}
          <code>bun run dev</code> (port 6680). Migracje bazy uruchamiają się
          automatycznie przy starcie.
        </li>
        <li>
          <strong>Panel administracyjny</strong>: <code>bun install</code>, ustaw{" "}
          <code>BACKEND_URL</code> na swój backend i <code>bun dev</code> (port
          6600). Panel proxuje <code>/api/*</code> do backendu.
        </li>
      </ol>
      <p>
        Do funkcji AI podstawiasz własny klucz OpenRouter, a do maili
        transakcyjnych własny SMTP. Dane dostępowe do sklepów chroni{" "}
        <a href="/pl/docs/security">szyfrowany end-to-end sejf</a>, a self-hosting
        oznacza, że te klucze nigdy nie opuszczają Twoich serwerów.
      </p>

      <h2>Licencja</h2>
      <p>
        AppBoard jest source-available na licencji{" "}
        <strong>PolyForm Noncommercial License 1.0.0</strong>: można go za darmo
        używać, uruchamiać i modyfikować do celów prywatnych i niekomercyjnych.
        Komercyjne wykorzystanie i odsprzedaż nie są dozwolone. (To nie jest
        licencja open source zatwierdzona przez OSI, bo ogranicza zastosowania
        komercyjne).
      </p>

      <h2>Dołącz do nas</h2>
      <p>
        Znalazłeś buga albo chcesz nową funkcję? Załóż issue w odpowiednim
        repozytorium albo dołącz do społeczności na{" "}
        <a href={DISCORD_URL}>Discordzie</a>. Kontrybucje są mile widziane, a model
        gałęzi (praca na <code>develop</code>) i proces PR opisuje{" "}
        <code>CONTRIBUTING.md</code> w każdym repo.
      </p>
    </DocsLayout>
  );
}
