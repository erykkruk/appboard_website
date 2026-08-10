import { DocsLayout } from "@/components/layout/docs-layout";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "security";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function SecurityPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        Dane dostępowe do sklepów, czyli Twój API key do App Store Connect i
        service account Google Play, to najbardziej wrażliwe dane w AppBoard.
        Leżą w szyfrowanym end-to-end sejfie (vault), który tylko Ty możesz
        odblokować.
      </p>

      <h2>Jak działa sejf</h2>
      <p>
        Klucz szyfrujący sejfu jest wyprowadzany z{" "}
        <strong>passphrase, które sam ustawiasz</strong>, i przypisany do Twojego
        workspace&apos;u. Dane dostępowe są szyfrowane, zanim dotrą do bazy, i da
        się je odszyfrować tylko wtedy, gdy sejf jest odblokowany Twoim
        passphrase. Danych dostępowych do sklepów nie da się zapisać poza sejfem,
        nie ma żadnego zapasowego trybu plaintext.
      </p>

      <h2>Odblokowywanie</h2>
      <p>
        Sejf odblokowujesz, wpisując swoje passphrase. Gdy jest zamknięty,
        AppBoard nie potrafi odszyfrować Twoich kluczy, więc każda akcja
        wymagająca kontaktu ze sklepem jest odrzucana, a interfejs prosi o
        wcześniejsze odblokowanie. Odblokuj raz, a AppBoard może korzystać z
        danych dostępowych przez całą sesję.
      </p>

      <h2>Reset sejfu</h2>
      <p>
        Jeśli zapomnisz passphrase, jedyne wyjście to reset, a reset{" "}
        <strong>czyści sejf i wszystkie zapisane dane dostępowe</strong>. Nie ma
        kodu odzyskiwania ani żadnej furtki i właśnie to sprawia, że sejf jest
        szyfrowany end-to-end. Po resecie podłączasz sklepy od nowa i ustawiasz
        nowe passphrase.
      </p>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> reset sejfu bezpowrotnie niszczy wszystkie
          zapisane dane dostępowe, bez możliwości odzyskania. Trzymaj passphrase w
          menedżerze haseł i resetuj tylko wtedy, gdy jesteś gotowy podłączyć
          każdy sklep od nowa.
        </p>
      </blockquote>

      <h2>Praktyczne wskazówki</h2>
      <ul>
        <li>
          Zapisz passphrase w menedżerze haseł, zanim zapiszesz jakikolwiek klucz.
        </li>
        <li>
          Licz się z tym, że sejf trzeba odblokować, gdy zaczynasz pracę z danymi
          ze sklepu w nowej sesji.
        </li>
        <li>
          Utrata pliku .p8 albo JSON-a service accounta nie jest katastrofą, bo
          możesz je unieważnić i wygenerować ponownie w sklepie, a potem dodać
          połączenie jeszcze raz.
        </li>
      </ul>
    </DocsLayout>
  );
}
