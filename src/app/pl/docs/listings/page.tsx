import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "listings";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function ListingsPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        Edytor listingów to miejsce, w którym piszesz metadane widoczne na stronie
        Twojej aplikacji w sklepie. Każde pole edytujesz osobno dla każdego
        języka, więc możesz dopracować hiszpański podtytuł, nie ruszając
        angielskiego.
      </p>

      <ScreenshotFrame
        alt="Edytor listingów w AppBoard z zakładkami języków i licznikami znaków na żywo"
        src="/images/panel/app-listings-editor.png"
      />

      <h2>Drafty i wartości zdalne</h2>
      <p>
        AppBoard trzyma dwie kopie każdego pola: wartość <strong>zdalną</strong>,
        czyli tę aktualnie żywą w sklepie, oraz Twój <strong>draft</strong>. Draft
        edytujesz swobodnie, a wartość zdalna zmienia się dopiero wtedy, gdy
        świadomie <a href="/pl/docs/publishing">opublikujesz</a> zmiany. Język,
        którego draft różni się od wartości zdalnej, dostaje oznaczenie{" "}
        <strong>dirty</strong>, więc od razu widzisz, co jeszcze trzeba wysłać.
      </p>

      <h2>Pola</h2>
      <table>
        <thead>
          <tr>
            <th>Pole</th>
            <th>Uwagi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tytuł / nazwa</td>
            <td>Wyświetlana nazwa Twojej aplikacji w sklepie.</td>
          </tr>
          <tr>
            <td>Krótki opis</td>
            <td>Hasło widoczne w górnej części strony.</td>
          </tr>
          <tr>
            <td>Pełny opis</td>
            <td>Długa prezentacja aplikacji na stronie w sklepie.</td>
          </tr>
          <tr>
            <td>Słowa kluczowe</td>
            <td>Frazy używane do indeksowania w App Store.</td>
          </tr>
          <tr>
            <td>Tekst promocyjny</td>
            <td>W App Store można go edytować bez nowego wydania.</td>
          </tr>
          <tr>
            <td>Co nowego</td>
            <td>Informacje o wydaniu przypięte do konkretnej wersji.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Dostępne pola różnią się między sklepami, a edytor pokazuje tylko to, co
        dana platforma obsługuje dla tej aplikacji.
      </p>

      <h2>Liczniki znaków</h2>
      <p>
        Każdy sklep wymusza własne limity długości. Edytor pokazuje licznik na
        żywo dla każdego pola i ostrzega, gdy zbliżasz się do limitu, więc nigdy
        nie wyślesz metadanych, które sklep by odrzucił.
      </p>

      <h2>Praca w wielu językach</h2>
      <p>
        Języki przełączasz zakładkami na górze edytora. Każdy język to niezależny
        draft z własnym oznaczeniem dirty, dzięki czemu duże listingi w wielu
        lokalizacjach dalej da się ogarnąć. Gdy draft wygląda dobrze, przejdź do{" "}
        <a href="/pl/docs/publishing">publikowania</a>, bo nic, co tu wpiszesz,
        nie trafia do sklepu automatycznie.
      </p>
      <p>
        Potrzebujesz pomocy przy wypełnianiu pola?{" "}
        <a href="/pl/docs/ai-assistant">Asystent AI</a> przygotuje opisy,
        tłumaczenia i zestawy słów kluczowych, które przejrzysz, zanim wylądują w
        drafcie.
      </p>
    </DocsLayout>
  );
}
