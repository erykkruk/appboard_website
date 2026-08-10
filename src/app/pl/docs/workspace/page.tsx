import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "workspace";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function WorkspacePlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        Workspace to granica wokół wszystkiego, czym zarządzasz w AppBoard: jego
        aplikacji, połączeń ze sklepami, danych dostępowych i ustawień. Ta strona
        opisuje kontrolki, które siedzą na poziomie workspace&apos;u.
      </p>

      <h2>Wiele workspace&apos;ów</h2>
      <p>
        Możesz prowadzić więcej niż jeden workspace, co przydaje się przy
        rozdzielaniu zespołów, klientów albo marek. Każdy workspace ma własne
        aplikacje, własny zaszyfrowany{" "}
        <a href="/pl/docs/security">sejf</a> i własne ustawienia, a dane nigdy nie
        przechodzą między nimi.
      </p>

      <h2>Feature flagi</h2>
      <p>
        Moduły można włączać i wyłączać per workspace za pomocą feature flag, więc
        da się wyłączyć te części AppBoard, których dany workspace nie potrzebuje,
        na przykład ukryć Research albo asystenta AI. Niektóre funkcje zależą od
        innych: gdy wyłączysz wymaganą podstawę, funkcje oparte na niej też się
        wyłączą.
      </p>

      <h2>Grupy aplikacji</h2>
      <p>
        Większość produktów wychodzi na obu platformach. Grupy aplikacji łączą
        warianty Android i iOS tej samej aplikacji, więc widzisz je i zarządzasz
        nimi jak jednym produktem, a nie dwoma rozjechanymi listingami.
      </p>

      <h2>Zakupy i subskrypcje</h2>
      <p>
        AppBoard pokazuje przegląd zakupów in-app i subskrypcji obok Twoich
        listingów, więc ceny i katalog produktów są tuż przy metadanych, które
        optymalizujesz.
      </p>

      <h2>Oceny wiekowe i compliance</h2>
      <p>
        Narzędzia workspace&apos;u obejmują też metadane compliance wymagane przez
        sklepy, czyli edycję ocen wiekowych i deklaracji prywatności, dzięki czemu
        niemarketingowe części listingu też zostają w jednym miejscu.
      </p>

      <h2>Ustawienia</h2>
      <p>
        W ustawieniach workspace&apos;u dodajesz swój{" "}
        <a href="/pl/docs/ai-assistant">klucz API OpenRouter</a> do funkcji AI i
        zarządzasz pozostałą konfiguracją per workspace. W parze z feature flagami
        i sejfem ustawienia sprawiają, że każdy workspace działa dokładnie w takim
        zakresie, jakiego potrzebuje.
      </p>
    </DocsLayout>
  );
}
