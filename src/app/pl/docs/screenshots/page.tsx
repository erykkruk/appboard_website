import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "screenshots";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function ScreenshotsPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        Screenshoty w sklepie są uporządkowane według typu urządzenia i języka, a
        każdy sklep jest bardzo restrykcyjny co do dokładnych wymiarów w
        pikselach. AppBoard pokazuje wymagania od razu przy slocie i ma wbudowany
        edytor, który eksportuje w odpowiednim rozmiarze.
      </p>

      <ScreenshotFrame
        alt="Menedżer screenshotów w AppBoard pogrupowany według typu urządzenia i języka, z wbudowanym edytorem"
        src="/images/panel/app-screenshots-en.png"
      />

      <h2>Typy urządzeń i języki</h2>
      <p>
        Screenshoty są grupowane per urządzenie i per język. W Google Play oznacza
        to zestaw na telefon plus zestawy na tablety 7 cali i 10 cali, a w App
        Store rozmiary ekranów iPhone i iPad wymagane przez Apple, na przykład
        iPhone 6.7 cala. Przełącz język, aby zarządzać zlokalizowanymi zestawami
        screenshotów niezależnie od siebie.
      </p>

      <h2>Wymagania co do rozmiarów</h2>
      <p>
        Każdy slot pokazuje dokładne wymiary w pikselach, jakich oczekuje. Kilka
        stałych grafik, na które trafisz:
      </p>
      <table>
        <thead>
          <tr>
            <th>Zasób</th>
            <th>Wymiary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ikona aplikacji</td>
            <td>512 × 512</td>
          </tr>
          <tr>
            <td>Grafika promocyjna Google Play</td>
            <td>1024 × 500</td>
          </tr>
          <tr>
            <td>Screenshoty urządzeń</td>
            <td>Rozmiary w pikselach per urządzenie, pokazane w każdym slocie</td>
          </tr>
        </tbody>
      </table>

      <h2>Wbudowany edytor</h2>
      <p>
        Edytor screenshotów składa pełne grafiki sklepowe w przeglądarce: wybierasz
        tło (jednolite albo gradient), wrzucasz screenshot swojej aplikacji w ramkę
        urządzenia, iPhone albo Android, ustawiasz go i obracasz, a na wierzchu
        dodajesz tekst nagłówka. Sceny zapisują się per język i urządzenie, a
        eksport wychodzi dokładnie w kanonicznych wymiarach dla wybranego typu
        urządzenia, więc sklep nie odbije Ci uploadu przez niezgodny rozmiar.
      </p>

      <ScreenshotFrame
        alt="Edytor screenshotów w AppBoard z warstwową sceną: gradientowe tło, ramka urządzenia z Androidem, tekst nagłówka i eksport w dokładnych wymiarach"
        src="/images/panel/editor.png"
      />

      <h3>Warianty językowe</h3>
      <p>
        Scena nie jest przypisana do jednej lokalizacji. Użyj wariantów językowych,
        aby wygenerować tę samą kompozycję dla każdego języka, w którym wydajesz
        aplikację: ten sam układ, przetłumaczony nagłówek, bez projektowania
        czegokolwiek od nowa.
      </p>

      <h2>Dzielenie panoramy</h2>
      <p>
        Aby uzyskać panoramiczny efekt na listingu, wgraj jeden szeroki obraz, a
        AppBoard potnie go pionowo na 2-10 równych części i wgra każdą z nich jako
        kolejny screenshot. Najpierw kadrujesz i przybliżasz, potem wybierasz
        liczbę części, a podgląd podziału pokazuje dokładnie, gdzie wypadną cięcia.
      </p>

      <ScreenshotFrame
        alt="Okno Split Panorama dzielące jeden szeroki obraz na trzy kolejne screenshoty sklepowe z przerywanymi liniami cięcia"
        src="/images/panel/panorama.png"
      />

      <h2>Kadrowanie co do piksela</h2>
      <p>
        Wgraj obraz, który nie pasuje do slotu, a narzędzie do kadrowania otworzy
        się automatycznie, zablokowane na proporcjach docelowego urządzenia w
        orientacji pionowej albo poziomej. Przybliżasz i pozycjonujesz, a eksport
        wychodzi w dokładnym rozmiarze w pikselach, na przykład 1242 × 2688 dla
        iPhone 6.5 cala, dla każdego presetu od iPhone 3.5 cala po iPad Pro 12.9
        cala i tablety z Androidem.
      </p>

      <ScreenshotFrame
        alt="Okno Crop Screenshot z presetami pionowymi i poziomymi oraz dokładnym celem 1242 × 2688 pikseli"
        src="/images/panel/crop.png"
      />

      <blockquote>
        <p>
          <strong>Uwaga:</strong> sklepy odrzucają zestawy screenshotów, które nie
          trafiają dokładnie w wymagane wymiary. Korzystaj z rozmiaru pokazanego
          przy każdym slocie albo eksportuj z edytora lub narzędzia do kadrowania,
          bo oba od razu celują w dokładne piksele.
        </p>
      </blockquote>

      <h2>Publikowanie screenshotów</h2>
      <p>
        Screenshoty przechodzą przez ten sam proces draft, a potem publikacja, co
        teksty. Przygotuj zestawy per urządzenie i język, a potem wyślij je ze{" "}
        <a href="/pl/docs/publishing">strony publikacji</a>, gdy będą gotowe.
      </p>
    </DocsLayout>
  );
}
