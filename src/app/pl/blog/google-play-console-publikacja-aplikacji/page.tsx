import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
import { buildBlogAlternates, getArticlePl, getEnSlugForPl } from "@/lib/blog";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "google-play-console-publikacja-aplikacji";
const EN_SLUG = getEnSlugForPl(SLUG) ?? "app-store-localization";
const article = getArticlePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Google Play Console w 2026: konto osobiste czy organizacji, numer D-U-N-S, wymóg 12 testerów przez 14 dni, limity znaków i pełna specyfikacja grafik.",
  languages: buildBlogAlternates(EN_SLUG),
  locale: "pl_PL",
  path: `/pl/blog/${SLUG}`,
  title: "Google Play Console: publikacja aplikacji krok po kroku (2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "Rejestracja konta dewelopera w Google Play to jednorazowa opłata 25 USD. Nie jest to abonament roczny, w przeciwieństwie do Apple Developer Program, gdzie 99 USD płacisz co roku. Musisz mieć ukończone 18 lat.",
    question: "Ile kosztuje konto dewelopera w Google Play?",
  },
  {
    answer:
      "Konta osobiste założone po 13 listopada 2023 roku muszą przed uzyskaniem dostępu do produkcji przeprowadzić testy zamknięte: co najmniej 12 testerów, którzy nieprzerwanie uczestniczą w programie przez co najmniej 14 dni. Jeśli tester wypisze się i wróci, licznik dni startuje od nowa. Konta organizacji ten wymóg nie obowiązuje.",
    question: "Ilu testerów potrzeba, żeby opublikować aplikację?",
  },
  {
    answer:
      "Numer D-U-N-S jest wymagany do założenia konta organizacji w Google Play. To nie jest już tylko wymóg Apple, jak podaje wiele polskich poradników. Numer jest darmowy, wydaje go Dun and Bradstreet, a oczekiwanie zajmuje zwykle kilka dni roboczych.",
    question: "Czy potrzebuję numeru D-U-N-S do Google Play?",
  },
  {
    answer:
      "Nazwa aplikacji ma limit 30 znaków, krótki opis 80 znaków, a pełny opis 4000 znaków. Limit 50 znaków dla nazwy, który wciąż pojawia się w polskich poradnikach, jest nieaktualny od 2021 roku. Limity liczą znaki pełnej i połowicznej szerokości tak samo, więc znak japoński czy chiński kosztuje tyle samo co łacińska litera.",
    question: "Jakie są limity znaków w karcie produktu Google Play?",
  },
  {
    answer:
      "Ikona 512 na 512 pikseli, 32-bitowy PNG z kanałem alfa, maksymalnie 1024 KB. Grafika promocyjna 1024 na 500 pikseli, JPEG albo 24-bitowy PNG bez kanału alfa. Zrzuty ekranu: minimum 2 z różnych typów urządzeń, maksymalnie 8 na typ urządzenia, każdy bok od 320 do 3840 pikseli, przy czym dłuższy bok nie może być większy niż dwukrotność krótszego.",
    question: "Jakie grafiki są wymagane w Google Play?",
  },
  {
    answer:
      "Google Play ma cztery ścieżki: test wewnętrzny do 100 testerów, test zamknięty z listami do 200 list po 2000 osób, test otwarty dostępny publicznie w sklepie oraz produkcja. Dla nowych kont osobistych to test zamknięty odblokowuje dostęp do produkcji.",
    question: "Czym różnią się ścieżki testowe w Google Play Console?",
  },
  {
    answer:
      "Nie musisz. Google oferuje darmowe tłumaczenie maszynowe na 10 języków wprost w konsoli, a jeśli nie dodasz tłumaczenia, użytkownik zobaczy automatyczne tłumaczenie Google Translate z widocznym banerem albo Twój język domyślny. Automatyczne tłumaczenie nie daje jednak żadnych pozycji na lokalne słowa kluczowe, więc na rynkach, które realnie chcesz zdobyć, warto przygotować własne teksty.",
    question: "Czy muszę tłumaczyć kartę produktu na inne języki?",
  },
];

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout
      article={article}
      locale="pl"
      translationHref={`/blog/${EN_SLUG}`}
    >
      <JsonLd data={buildFaqSchema(`/pl/blog/${SLUG}`, FAQ, "pl-PL")} />
      <p>
        Poradników o publikacji aplikacji w Google Play po polsku jest sporo i
        prawie wszystkie mają ten sam problem: pochodzą z 2021 albo 2024 roku i
        nie ma w nich rzeczy, która dziś blokuje publikację najczęściej. Chodzi o
        wymóg 12 testerów przez 14 dni dla nowych kont osobistych. Sprawdziłem
        wszystkie polskie strony z pierwszej strony wyników: nie ma go w żadnej.
      </p>
      <p>
        Do tego dwie z nich podają limit 50 znaków dla nazwy aplikacji, który jest
        nieaktualny od 2021 roku, a jedna wciąż odsyła do App Annie i Flurry,
        czyli narzędzi, które już nie istnieją. Ten tekst jest zbudowany wokół
        liczb sprawdzonych bezpośrednio w polskiej dokumentacji Google w sierpniu
        2026 roku.
      </p>

      <h2>Zanim klikniesz rejestrację: osobiste czy organizacji</h2>
      <p>
        To jest decyzja, którą podejmujesz raz i której nie zmienisz jednym
        kliknięciem. Google udostępnia dwa rodzaje kont dewelopera i różnią się
        one znacznie bardziej, niż sugeruje formularz rejestracji.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Konto osobiste</th>
            <th>Konto organizacji</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Numer D-U-N-S</td>
            <td>Niepotrzebny</td>
            <td>Wymagany</td>
          </tr>
          <tr>
            <td>Weryfikacja tożsamości</td>
            <td>Dokument tożsamości</td>
            <td>D-U-N-S, dokument tożsamości, dokument firmy</td>
          </tr>
          <tr>
            <td>12 testerów przez 14 dni</td>
            <td>Tak, dla kont od 13 listopada 2023</td>
            <td>Nie</td>
          </tr>
          <tr>
            <td>Aplikacje finansowe, zdrowotne, rządowe</td>
            <td>Niedozwolone</td>
            <td>Dozwolone</td>
          </tr>
          <tr>
            <td>Nazwa widoczna w sklepie</td>
            <td>Twoje imię i nazwisko lub nazwa profilu</td>
            <td>Nazwa firmy</td>
          </tr>
        </tbody>
      </table>
      <p>
        Uwaga dla polskich zespołów: <strong>D-U-N-S nie jest już wymogiem
        wyłącznie Apple</strong>. Google wymaga go do konta organizacji od końca
        2023 roku, a większość polskich poradników opisuje D-U-N-S tylko przy
        App Store, bo powstała wcześniej. Numer jest darmowy, wydaje go Dun and
        Bradstreet, a na jego otrzymanie trzeba zarezerwować kilka dni roboczych.
        Jeśli planujesz aplikację fintechową albo zdrowotną, konto osobiste
        odpada od razu i warto uruchomić procedurę D-U-N-S zanim zaczniesz pisać
        kod.
      </p>

      <h2>Opłata i weryfikacja tożsamości</h2>
      <p>
        Rejestracja to <strong>jednorazowa opłata 25 USD</strong>. To jedna z
        niewielu liczb, które polskie poradniki podają zgodnie z prawdą, więc
        tylko dwie rzeczy warto dodać. Po pierwsze, musisz mieć ukończone 18 lat.
        Po drugie, weryfikacja tożsamości nie jest opcjonalna i ma termin: Google
        pozwala rozpocząć ją do 60 dni przed Twoim indywidualnym terminem, a
        niedotrzymanie go kończy się usunięciem treści i aplikacji ze sklepu.
        Potrzebujesz też zweryfikowanego adresu e-mail i numeru telefonu w
        formacie międzynarodowym.
      </p>

      <h2>Wymóg 12 testerów przez 14 dni</h2>
      <p>
        To jest najważniejsza sekcja tego tekstu, bo to jest rzecz, która
        najczęściej zatrzymuje polskiego solowego dewelopera na tydzień albo
        dwa, zwykle w najgorszym możliwym momencie.
      </p>
      <p>
        Jeśli założyłeś konto osobiste po 13 listopada 2023 roku, przed
        uzyskaniem dostępu do produkcji musisz przeprowadzić test zamknięty
        spełniający dwa warunki jednocześnie:
      </p>
      <ul>
        <li>
          <strong>co najmniej 12 testerów</strong> zapisanych do testu
          zamkniętego,
        </li>
        <li>
          którzy <strong>nieprzerwanie uczestniczyli w programie przez co
          najmniej 14 dni</strong>.
        </li>
      </ul>
      <p>
        Trzy pułapki, o których warto wiedzieć zawczasu. Po pierwsze, jeśli
        tester wypisze się z programu i zapisze ponownie, jego wcześniejsze dni
        nie liczą się do puli. Po drugie, do czasu spełnienia wymogu zablokowana
        jest nie tylko produkcja, ale też rejestracja wstępna. Po trzecie, po
        złożeniu wniosku o dostęp do produkcji Google deklaruje rozpatrzenie w
        siedem dni lub mniej, więc realny bufor między startem testów a premierą
        to około trzech tygodni, a nie dwóch.
      </p>
      <p>
        Praktyczny wniosek: zbierz 12 osób, zanim aplikacja będzie gotowa. Nie po
        tym. Najprościej użyć adresów Gmail znajomych albo grupy Google, ale
        muszą to być realne konta, które faktycznie zaakceptują zaproszenie.
      </p>

      <h2>Cztery ścieżki testowe i ich realne limity</h2>
      <table>
        <thead>
          <tr>
            <th>Ścieżka</th>
            <th>Limit testerów</th>
            <th>Kiedy jej używać</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test wewnętrzny</td>
            <td>Do 100 testerów</td>
            <td>Najszybsza dystrybucja do własnego zespołu</td>
          </tr>
          <tr>
            <td>Test zamknięty</td>
            <td>Do 200 list po 2000 osób każda</td>
            <td>Wymóg 12 testerów, testy z beta grupą</td>
          </tr>
          <tr>
            <td>Test otwarty</td>
            <td>Limit od 1000 osób lub bez limitu</td>
            <td>Publiczna beta widoczna w sklepie</td>
          </tr>
          <tr>
            <td>Produkcja</td>
            <td>Wszyscy użytkownicy</td>
            <td>Premiera</td>
          </tr>
        </tbody>
      </table>
      <p>
        Żadna polska strona z topki nie podaje tych liczb, a dwie podają błędne.
        Test wewnętrzny jest osobną ścieżką od zamkniętego i{" "}
        <strong>nie liczy się</strong> do wymogu 12 testerów.
      </p>

      <h2>Karta produktu: limity znaków</h2>
      <table>
        <thead>
          <tr>
            <th>Pole</th>
            <th>Limit</th>
            <th>Uwagi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nazwa aplikacji</td>
            <td>30 znaków</td>
            <td>Nie 50. Zmiana weszła w 2021 roku</td>
          </tr>
          <tr>
            <td>Krótki opis</td>
            <td>80 znaków</td>
            <td>Widoczny nad przyciskiem instalacji</td>
          </tr>
          <tr>
            <td>Pełny opis</td>
            <td>4000 znaków</td>
            <td>Indeksowany przez wyszukiwarkę sklepu</td>
          </tr>
        </tbody>
      </table>
      <p>
        Google Play nie ma osobnego pola na słowa kluczowe. Wyszukiwarka sklepu
        wyciąga je z nazwy, krótkiego opisu i pełnego opisu, co jest zasadniczą
        różnicą wobec App Store i decyduje o tym, jak piszesz te trzy pola.
        Rozwijam to w tekście o{" "}
        <Link href="/pl/blog/pozycjonowanie-aplikacji-mobilnych">
          pozycjonowaniu aplikacji mobilnych
        </Link>
        .
      </p>
      <p>
        Jeden szczegół wart zapamiętania przy wejściu na rynki azjatyckie: Google
        liczy znaki pełnej i połowicznej szerokości tak samo. Znak japoński czy
        chiński kosztuje jeden z Twoich 30 znaków nazwy, dokładnie tak jak
        łacińska litera, więc japoński tytuł mieści nieporównanie więcej treści
        niż angielski w tym samym budżecie.
      </p>

      <h2>Grafiki: pełna specyfikacja</h2>
      <table>
        <thead>
          <tr>
            <th>Zasób</th>
            <th>Specyfikacja</th>
            <th>Liczba</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ikona</td>
            <td>512 x 512 px, 32-bit PNG z alfą, maks. 1024 KB</td>
            <td>Wymagana</td>
          </tr>
          <tr>
            <td>Grafika promocyjna</td>
            <td>1024 x 500 px, JPEG lub 24-bit PNG bez alfy</td>
            <td>Wymagana</td>
          </tr>
          <tr>
            <td>Zrzuty ekranu, telefon</td>
            <td>
              Każdy bok 320 do 3840 px, dłuższy bok maks. 2x krótszy, bez alfy
            </td>
            <td>Min. 2 z różnych typów urządzeń, maks. 8 na typ</td>
          </tr>
          <tr>
            <td>Duże ekrany, tablety i Chromebooki</td>
            <td>Rozdzielczość 1080 do 7680 px</td>
            <td>Minimum 4</td>
          </tr>
          <tr>
            <td>Wear OS</td>
            <td>Min. 384 x 384 px, proporcje 1:1, bez ramek urządzeń</td>
            <td>Minimum 1</td>
          </tr>
          <tr>
            <td>Android XR</td>
            <td>Proporcje 8:5, zalecane 3840 x 2400 px, maks. 8 MB</td>
            <td>Od 4 do 8</td>
          </tr>
        </tbody>
      </table>
      <p>
        Dwie rzeczy, na których łatwo się przewrócić. Po pierwsze,{" "}
        <strong>ikona wymaga kanału alfa, a grafika promocyjna i zrzuty ekranu
        go zabraniają</strong>. Pomylenie tych dwóch zasad to jedna z
        najczęstszych przyczyn odrzuconego uploadu. Po drugie, Google{" "}
        <strong>nie publikuje osobnych rozmiarów pikselowych dla tabletów 7 i 10
        cali</strong>. Jedna specyfikacja dużych ekranów obejmuje oba, a
        konkretne liczby typu 1200 na 1920, które krążą po polskich poradnikach,
        są zmyślone. Proporcje 16:9 i 9:16 to rekomendacja dla lepszej
        widoczności, a nie twardy wymóg.
      </p>

      <h2>Tłumaczenia karty produktu</h2>
      <p>
        Ta część nie istnieje w żadnym polskim poradniku, a dla aplikacji z
        Polski jest kluczowa, bo rynek krajowy rzadko wystarcza do sensownej
        monetyzacji.
      </p>
      <p>
        Google Play obsługuje ponad 100 języków w tłumaczeniach karty produktu.
        Warto podać tę liczbę ostrożnie, bo Google publikuje listę bez sumy, a
        różne tabele w dokumentacji zawierają różne zestawy: osobno języki
        tłumaczeń karty, a osobno języki interfejsu konsoli. Polskie strony
        cytują zwykle tę drugą, mniejszą tabelę i podają liczby w rodzaju 51,
        które do karty produktu się nie odnoszą.
      </p>
      <p>
        Jeśli nie dodasz tłumaczenia, użytkownik zobaczy automatyczne
        tłumaczenie Google Translate z widocznym banerem informującym o tym, albo
        Twój język domyślny, którym po utworzeniu aplikacji jest angielski
        amerykański. Google udostępnia też darmowe tłumaczenie maszynowe na 10
        języków wprost w konsoli, wraz z jasnym zastrzeżeniem, że nie sprawdza go
        człowiek.
      </p>
      <p>
        Rzecz, której nie zobaczysz w dokumentacji: automatyczne tłumaczenie{" "}
        <strong>nie daje Ci żadnej pozycji na lokalne słowa kluczowe</strong>.
        Jest uprzejmością wobec użytkownika, który i tak Cię znalazł, a nie
        kanałem pozyskania.
      </p>

      <h2>Najczęstsze przyczyny odrzucenia</h2>
      <ol>
        <li>
          <strong>Polityka prywatności.</strong> Link musi być aktywny i
          publiczny w momencie sprawdzania. Martwy link to automatyczne
          odrzucenie.
        </li>
        <li>
          <strong>Deklaracja bezpieczeństwa danych niezgodna z kodem.</strong>{" "}
          Jeśli biblioteka zbiera identyfikator reklamowy, a formularz mówi, że
          nie zbierasz nic, wróci do poprawki.
        </li>
        <li>
          <strong>Kwestionariusz treści wypełniony pobieżnie.</strong>{" "}
          Klasyfikacja wiekowa niezgodna z zawartością to powtarzalny problem.
        </li>
        <li>
          <strong>Grafiki z kanałem alfa</strong> tam, gdzie jest zabroniony.
        </li>
        <li>
          <strong>Zrzuty ekranu niezgodne z zasadą podwójności boków.</strong>{" "}
          Bardzo wąski panoramiczny kadr przekracza limit 2x.
        </li>
      </ol>

      <h2>Kolejność, która oszczędza tydzień</h2>
      <ol>
        <li>Zdecyduj: konto osobiste czy organizacji. Jeśli organizacji, wystąp o D-U-N-S dziś.</li>
        <li>Załóż konto, zapłać 25 USD, uruchom weryfikację tożsamości od razu.</li>
        <li>Zbierz listę 12 testerów, zanim zbudujesz finalny plik AAB.</li>
        <li>Wypuść test zamknięty i licz 14 dni.</li>
        <li>W trakcie tych 14 dni przygotuj kartę produktu, grafiki i tłumaczenia.</li>
        <li>Złóż wniosek o dostęp do produkcji i zarezerwuj do 7 dni na decyzję.</li>
        <li>Publikuj.</li>
      </ol>
      <p>
        Punkt piąty jest tu celowo. Czternaście dni testów to jedyny moment w
        całym procesie, kiedy masz wymuszony czas na spokojne napisanie opisu i
        przygotowanie zrzutów ekranu, zamiast robienia tego w noc przed premierą.
      </p>

      <h2>Co dalej po publikacji</h2>
      <p>
        Publikacja to nie koniec pracy nad kartą produktu, tylko jej początek.
        Karta produktu jest metadanymi, a nie częścią pliku aplikacji, więc
        możesz zmieniać opis, zrzuty ekranu i grafiki bez wypuszczania nowej
        wersji. To otwiera pole do testowania: Google Play ma eksperymenty karty
        produktu, którymi sprawdzisz, czy nowa ikona albo inny pierwszy zrzut
        ekranu podnoszą konwersję.
      </p>
      <p>
        Jeśli wydajesz tę samą aplikację również na iOS, druga konsola działa
        zupełnie inaczej, ma osobne pole na słowa kluczowe i inne wymagania co do
        grafik. Opisałem to w tekście o{" "}
        <Link href="/pl/blog/app-store-connect-publikacja-aplikacji">
          App Store Connect
        </Link>
        . A jeśli chcesz prowadzić obie karty produktu w jednym miejscu, z
        historią zmian i podglądem różnic między wersją roboczą a opublikowaną,
        do tego właśnie robimy{" "}
        <Link href="/pricing">AppBoard, darmowy w wersji beta</Link>.
      </p>

      <h2>Najczęściej zadawane pytania</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Wszystkie liczby w tym tekście pochodzą z polskiej dokumentacji Google
        Play i zostały sprawdzone w sierpniu 2026 roku. Google zmienia zasady
        rejestracji i testów częściej niż raz do roku, więc przy publikacji
        znacznie później niż ta data warto zweryfikować wymóg testerów i terminy
        weryfikacji tożsamości.
      </p>
    </ArticleLayout>
  );
}
