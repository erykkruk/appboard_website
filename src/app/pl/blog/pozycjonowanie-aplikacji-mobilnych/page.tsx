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

const SLUG = "pozycjonowanie-aplikacji-mobilnych";
const EN_SLUG = getEnSlugForPl(SLUG) ?? "best-aso-tools";
const article = getArticlePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Pozycjonowanie aplikacji mobilnych (ASO) w 2026: aktualne limity znaków, polska fleksja w słowach kluczowych, testy A/B w sklepach i narzędzia, które nadal istnieją.",
  languages: buildBlogAlternates(EN_SLUG),
  locale: "pl_PL",
  path: `/pl/blog/${SLUG}`,
  title: "Pozycjonowanie aplikacji mobilnych (ASO): przewodnik na 2026",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "ASO to App Store Optimization, czyli pozycjonowanie aplikacji mobilnych w sklepach Google Play i App Store. Uwaga na skrót: w polskim internecie ASO oznacza przede wszystkim antystreptolizynę O, czyli badanie krwi, a w drugiej kolejności Autoryzowaną Stację Obsługi. Wyszukiwanie samego hasła ASO nie prowadzi do treści o aplikacjach.",
    question: "Co to jest ASO?",
  },
  {
    answer:
      "SEO dotyczy stron w wyszukiwarce, ASO aplikacji w sklepach. Największe różnice praktyczne są trzy: w ASO nie ma linkowania zewnętrznego jako głównego czynnika, konwersja z wyświetlenia na instalację jest sama w sobie czynnikiem rankingowym, a zmiana metadanych wymaga przejścia przez weryfikację sklepu, więc iteracja jest wolniejsza niż w SEO.",
    question: "Czym różni się ASO od SEO?",
  },
  {
    answer:
      "Tytuł aplikacji w Google Play ma 30 znaków od 2021 roku. Limit 50 znaków, który wciąż podaje większość polskich poradników, w tym te aktualizowane w 2025 roku, jest nieaktualny. W App Store nazwa również ma 30 znaków, a dodatkowo dostępny jest podtytuł na kolejne 30 znaków.",
    question: "Ile znaków ma tytuł aplikacji w Google Play w 2026?",
  },
  {
    answer:
      "Nie da się jednoznacznie, bo Apple i Google nie publikują zasad dopasowania form fleksyjnych. Praktyka jest taka: nie marnuj ograniczonego pola na wszystkie odmiany jednego rzeczownika, wybierz formę podstawową i tę, którą użytkownicy realnie wpisują. Sprawdź obie w kampanii Apple Ads z dopasowaniem wyszukiwania, bo to jedyne źródło realnych zapytań, jakie masz w polskim storefroncie.",
    question: "Czy odmieniać polskie słowa kluczowe przez przypadki?",
  },
  {
    answer:
      "Tak. Sklepy dają darmowe narzędzia testowe: App Store ma Product Page Optimization i Custom Product Pages, Google Play ma eksperymenty karty produktu i niestandardowe karty produktu. Nie kosztują nic i są jedynym sposobem na sprawdzenie zmiany na własnym ruchu zamiast zgadywania.",
    question: "Czy mogę testować A/B kartę produktu za darmo?",
  },
  {
    answer:
      "Nie polecaj się narzędziami, które już nie istnieją. App Annie zostało przemianowane na data.ai, a następnie wchłonięte przez Sensor Tower po przejęciu w marcu 2024. Firebase App Indexing jest wycofane. Jeśli polski poradnik odsyła Cię do App Annie albo do Google AdWords Keyword Planner pod starą nazwą, to znak, że nie był aktualizowany od lat.",
    question: "Które narzędzia ASO polecane w polskich poradnikach już nie działają?",
  },
  {
    answer:
      "Pierwsze ruchy pozycji na słowach kluczowych zwykle widać po 2 do 4 tygodni od zaindeksowania nowych metadanych. Realny wpływ na instalacje to 2 do 3 miesięcy, a pełna ocena zwrotu z pracy nad ASO wymaga zwykle kwartału. Ktokolwiek obiecuje pierwsze miejsce w dwa tygodnie, mówi o kupionych instalacjach, a nie o optymalizacji.",
    question: "Jak długo trwa, zanim ASO przyniesie efekty?",
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
        Zacznijmy od rzeczy, która oszczędzi Ci dziesięć minut na Google.{" "}
        <strong>Wpisanie samego hasła ASO w polskiej wyszukiwarce nie prowadzi do
        niczego związanego z aplikacjami.</strong> Cała pierwsza strona wyników
        to medycyna: antystreptolizyna O, czyli badanie krwi wykrywające
        przeciwciała przeciw paciorkowcom. Druga pod względem popularności
        interpretacja to Autoryzowana Stacja Obsługi, czyli serwis samochodowy.
        App Store Optimization nie pojawia się w top 10 w ogóle.
      </p>
      <p>
        Dlatego w tym tekście używam pełnej nazwy: pozycjonowanie aplikacji
        mobilnych. I dlatego, jeśli budujesz treści dla polskiego rynku, nie
        opieraj tytułu na samym skrócie.
      </p>
      <p>
        Druga rzecz, którą trzeba powiedzieć na wstępie, dotyczy stanu polskich
        poradników o ASO. Przeczytałem trzynaście najlepiej widocznych i{" "}
        <strong>większość z nich podaje błędny limit znaków dla tytułu w Google
        Play</strong>. Piszą o 50 znakach, a limit wynosi 30 od 2021 roku. Jedna
        z tych stron była aktualizowana w grudniu 2025 i nadal ma tam 50. Kilka
        poleca App Annie, narzędzie, które przestało istnieć. Najstarszy z nich
        pochodzi z 2016 roku i twierdzi, że tytuł w App Store ma 25 znaków, co
        nigdy nie było prawdą.
      </p>

      <h2>Aktualne limity, sprawdzone u źródła</h2>
      <table>
        <thead>
          <tr>
            <th>Pole</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nazwa aplikacji</td>
            <td>30 znaków</td>
            <td>30 znaków</td>
          </tr>
          <tr>
            <td>Podtytuł lub krótki opis</td>
            <td>Podtytuł, 30 znaków</td>
            <td>Krótki opis, 80 znaków</td>
          </tr>
          <tr>
            <td>Osobne pole słów kluczowych</td>
            <td>Tak, 100 bajtów, niewidoczne</td>
            <td>Nie ma</td>
          </tr>
          <tr>
            <td>Opis</td>
            <td>4000 znaków</td>
            <td>4000 znaków</td>
          </tr>
          <tr>
            <td>Tekst promocyjny</td>
            <td>170 znaków, zmienny bez nowego builda</td>
            <td>Brak odpowiednika</td>
          </tr>
          <tr>
            <td>Zrzuty ekranu</td>
            <td>Od 1 do 10 na lokalizację</td>
            <td>Min. 2, maks. 8 na typ urządzenia</td>
          </tr>
        </tbody>
      </table>
      <p>
        Najważniejszy wiersz to trzeci i on definiuje całą strategię. W App Store
        masz ukryte pole na słowa kluczowe, więc opis piszesz dla człowieka, a
        słowa kluczowe upychasz osobno. W Google Play{" "}
        <strong>nie ma żadnego pola na słowa kluczowe</strong>, więc wyszukiwarka
        sklepu wyciąga je z tytułu, krótkiego opisu i pełnego opisu. To znaczy,
        że opis w Google Play musi jednocześnie dobrze się czytać i zawierać
        frazy, na których Ci zależy. Kopiowanie tego samego tekstu do obu sklepów
        jest błędem strukturalnym, a nie tylko stylistycznym.
      </p>

      <h2>Polska fleksja w słowach kluczowych</h2>
      <p>
        Tego wątku nie porusza w polskim internecie nikt, a jest to jedyny
        element ASO, który jest specyficznie polski.
      </p>
      <p>
        Zacznijmy od liczb, bo to zmienia arytmetykę. Pole keywords w App Store
        ma limit <strong>100 bajtów, nie 100 znaków</strong>. W UTF-8 zwykła
        łacińska litera zajmuje jeden bajt, ale{" "}
        <strong>polskie znaki diakrytyczne zajmują po dwa</strong>. Wyraz
        &quot;ćwiczenia&quot; to dziesięć znaków i jedenaście bajtów.
        &quot;żółć&quot; to cztery znaki i siedem bajtów. Zestaw słów z
        ogonkami wyczerpie limit szybciej, niż pokazuje licznik znaków w
        zwykłym edytorze.
      </p>
      <p>
        Do tego dochodzi odmiana. Polski rzeczownik ma siedem przypadków w dwóch
        liczbach, więc pokusa, żeby wpisać wszystkie formy, jest duża. To zła
        strategia z prostego powodu: pole jest ograniczone, a każda dodatkowa
        forma to bajty odebrane innemu słowu. Ani Apple, ani Google nie publikują
        zasad dopasowania form fleksyjnych, więc nikt, kto twierdzi, że wie na
        pewno, nie mówi prawdy.
      </p>
      <p>Praktyczne podejście, które ma sens przy tych ograniczeniach:</p>
      <ol>
        <li>
          <strong>Wybierz formę podstawową</strong> i tę, którą użytkownicy
          realnie wpisują. Często to nie to samo. Ludzie szukają
          &quot;treningi&quot;, nie &quot;trening&quot;.
        </li>
        <li>
          <strong>Rozstrzygnij ogonki per słowo, nie hurtem.</strong> Część
          polskich użytkowników wpisuje zapytania bez diakrytyków, część z nimi.
          To jest decyzja do sprawdzenia, a nie do przyjęcia z góry.
        </li>
        <li>
          <strong>Nie powtarzaj słów</strong> między nazwą, podtytułem a polem
          keywords. Apple indeksuje sumę tych pól, więc każde powtórzenie to
          zmarnowane bajty. Apple pisze wprost, że nazwy aplikacji i firmy nie
          trzeba dublować w keywords.
        </li>
        <li>
          <strong>Sprawdź realne zapytania</strong> w kampanii Apple Ads z
          dopasowaniem wyszukiwania. To jedyne źródło prawdziwych fraz z
          polskiego storefrontu, jakie masz. Reszta to modele zewnętrznych
          narzędzi.
        </li>
      </ol>
      <p>
        Ta ostatnia uwaga jest istotna. Zagraniczne narzędzia ASO liczą wolumeny
        dla polskiego rynku na podstawie własnych modeli i na małym rynku
        wypadają wyraźnie gorzej niż na amerykańskim. Traktuj ich liczby jako
        kierunek, nie jako pomiar.
      </p>

      <h2>Czynniki rankingowe, w kolejności realnego wpływu</h2>
      <ol>
        <li>
          <strong>Nazwa aplikacji.</strong> Najsilniejsze pole w obu sklepach.
          Trzydzieści znaków, w których musi zmieścić się marka i najważniejsza
          fraza.
        </li>
        <li>
          <strong>Podtytuł, App Store, i krótki opis, Google Play.</strong> Drugi
          co do siły indeksowany tekst, a jednocześnie pierwsze, co widzi
          człowiek.
        </li>
        <li>
          <strong>Pole keywords w App Store i treść opisu w Google Play.</strong>{" "}
          Dwa różne mechanizmy do tego samego celu.
        </li>
        <li>
          <strong>Konwersja z wyświetlenia na instalację.</strong> To odróżnia
          ASO od SEO: sklep obserwuje, czy ludzie po zobaczeniu Twojej karty
          faktycznie instalują, i to wpływa na pozycję. Dlatego ikona i pierwsze
          dwa zrzuty ekranu są czynnikiem rankingowym, a nie tylko estetyką.
        </li>
        <li>
          <strong>Oceny i liczba opinii.</strong> Wpływają i na ranking, i na
          konwersję.
        </li>
        <li>
          <strong>Regularność aktualizacji.</strong> Sygnał, że aplikacja żyje.
        </li>
      </ol>

      <h2>Darmowe testy A/B, o których nie pisze żadna polska strona</h2>
      <p>
        To jest największa luka w polskich treściach o ASO. Przejrzałem
        trzynaście stron i <strong>ani jedna nie wspomina o natywnych
        narzędziach testowych sklepów</strong>, choć są darmowe i są jedynym
        sposobem, żeby przestać zgadywać.
      </p>
      <table>
        <thead>
          <tr>
            <th>Narzędzie</th>
            <th>Sklep</th>
            <th>Do czego służy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Page Optimization</td>
            <td>App Store</td>
            <td>Test A/B ikony, zrzutów i podglądów na własnym ruchu</td>
          </tr>
          <tr>
            <td>Custom Product Pages</td>
            <td>App Store</td>
            <td>Osobne warianty karty pod konkretną kampanię lub grupę</td>
          </tr>
          <tr>
            <td>Eksperymenty karty produktu</td>
            <td>Google Play</td>
            <td>Test A/B ikony, grafik, opisów</td>
          </tr>
          <tr>
            <td>Niestandardowe karty produktu</td>
            <td>Google Play</td>
            <td>Warianty karty dla krajów i grup odbiorców</td>
          </tr>
        </tbody>
      </table>
      <p>
        Zasada przy testach jest jedna i wszyscy ją łamią: testuj jedną rzecz na
        raz i daj testowi dobiec do końca. Na zmianę ikony albo pierwszego zrzutu
        zwykle trzeba od czterech do ośmiu tygodni, żeby wynik cokolwiek znaczył.
        Wyłączenie testu po pięciu dniach, bo wariant B prowadzi, to nie jest
        wynik, tylko szum.
      </p>

      <h2>Narzędzia: co jeszcze istnieje</h2>
      <p>
        Ważna uwaga zanim wymienię: <strong>nie ma polskiego narzędzia
        ASO</strong>. Wszystkie produkty polecane w polskich poradnikach są
        zagraniczne, a polski rynek jest dla nich marginalny, co widać w jakości
        danych.
      </p>
      <table>
        <thead>
          <tr>
            <th>Narzędzie</th>
            <th>Cena wejściowa</th>
            <th>Do czego się nadaje</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appfigures</td>
            <td>9,99 USD/mies.</td>
            <td>Najtańsze sensowne wejście, przychody i pozycje razem</td>
          </tr>
          <tr>
            <td>Mobile Action</td>
            <td>15 USD/mies.</td>
            <td>Powiązanie kampanii Apple Ads z ruchem organicznym</td>
          </tr>
          <tr>
            <td>AppTweak</td>
            <td>79 USD/mies.</td>
            <td>Najgłębsze dane o słowach kluczowych w obu sklepach</td>
          </tr>
          <tr>
            <td>App Radar</td>
            <td>69 EUR/mies.</td>
            <td>Edycja i publikacja metadanych w tym samym miejscu</td>
          </tr>
          <tr>
            <td>AppBoard</td>
            <td>Darmowy w becie</td>
            <td>Listingi obu sklepów, historia zmian, zrzuty ekranu</td>
          </tr>
        </tbody>
      </table>
      <p>
        Narzędzia, na które trafisz w polskich poradnikach, a których{" "}
        <strong>już nie ma</strong>: App Annie, przemianowane na data.ai i
        wchłonięte przez Sensor Tower po przejęciu w marcu 2024; Firebase App
        Indexing, wycofane; StoreMaven, które nie działa już jako samodzielny
        produkt. Jeśli artykuł poleca któreś z nich jako aktualne, reszta jego
        liczb też prawdopodobnie jest z tamtej epoki.
      </p>
      <p>
        Zanim cokolwiek kupisz, warto wiedzieć, że da się zacząć za zero. Konsole
        obu sklepów pokazują wyświetlenia, wejścia na kartę produktu i konwersję,
        a kampania Apple Ads z małym budżetem dostarczy Ci prawdziwych zapytań z
        polskiego storefrontu. Porównanie płatnych narzędzi ze sprawdzonymi
        cenami opisałem po angielsku w{" "}
        <Link href="/blog/best-aso-tools">zestawieniu narzędzi ASO</Link>.
      </p>

      <h2>Plan na pierwszy miesiąc</h2>
      <ol>
        <li>
          <strong>Tydzień 1.</strong> Popraw limity. Sprawdź, czy tytuł nie jest
          napisany pod nieistniejący limit 50 znaków i czy pole keywords mieści
          się w 100 bajtach, a nie znakach.
        </li>
        <li>
          <strong>Tydzień 1.</strong> Uruchom małą kampanię Apple Ads z
          dopasowaniem wyszukiwania i zbieraj realne zapytania.
        </li>
        <li>
          <strong>Tydzień 2.</strong> Przepisz nazwę i podtytuł oraz krótki opis
          w Google Play, osobno dla każdego sklepu, bez powielania słów.
        </li>
        <li>
          <strong>Tydzień 2.</strong> Wymień pierwsze dwa zrzuty ekranu. Tam
          rozgrywa się większość konwersji.
        </li>
        <li>
          <strong>Tydzień 3.</strong> Uruchom jeden test: Product Page
          Optimization albo eksperyment karty produktu. Jedną zmienną.
        </li>
        <li>
          <strong>Tydzień 4 i dalej.</strong> Nie dotykaj niczego, czekaj na
          dane. To jest najtrudniejszy krok.
        </li>
      </ol>

      <h2>Czego nie robić</h2>
      <ul>
        <li>
          <strong>Nie kupuj instalacji, ocen ani opinii.</strong> To narusza
          zasady obu sklepów, a konsekwencje sięgają usunięcia aplikacji i
          zamknięcia konta dewelopera, zwykle bez skutecznego odwołania.
        </li>
        <li>
          <strong>Nie tłumacz słów kluczowych.</strong> Poprawne gramatycznie
          tłumaczenie potrafi mieć zerowy wolumen. Zestaw dla każdego rynku buduje
          się od nowa.
        </li>
        <li>
          <strong>Nie zmieniaj pięciu rzeczy naraz.</strong> Nie dowiesz się,
          która zadziałała.
        </li>
        <li>
          <strong>Nie mierz w skali globalnej.</strong> Uśredniona konwersja
          ukrywa cały wynik. Patrz per kraj.
        </li>
        <li>
          <strong>Nie zostawiaj opinii bez odpowiedzi.</strong> To jedyny element
          ASO, który jest w całości pod Twoją kontrolą i kosztuje tylko czas.
        </li>
      </ul>

      <h2>Gdzie to prowadzić</h2>
      <p>
        Praca nad ASO rozjeżdża się w dwóch konsolach, w kilku językach, bez
        historii zmian. Po trzech miesiącach nikt już nie pamięta, co i kiedy
        zmieniono ani jak wyglądał opis przed poprawką, która zbiła konwersję.
        Dlatego robimy{" "}
        <Link href="/pricing">AppBoard, darmowy w wersji beta</Link>: oba sklepy
        w jednym panelu, metadane per język, historia zmian z podglądem różnic i
        możliwością cofnięcia oraz edytor zrzutów ekranu eksportujący w
        dokładnych wymiarach sklepów.
      </p>
      <p>
        Techniczne szczegóły obu konsol opisałem osobno: w tekście o{" "}
        <Link href="/pl/blog/google-play-console-publikacja-aplikacji">
          Google Play Console
        </Link>{" "}
        i w tekście o{" "}
        <Link href="/pl/blog/app-store-connect-publikacja-aplikacji">
          App Store Connect
        </Link>
        . Jeśli zastanawiasz się, czy robić to samodzielnie, czy zlecić agencji,
        realne stawki w złotówkach zebrałem w tekście o{" "}
        <Link href="/pl/blog/promocja-aplikacji-mobilnej">
          promocji aplikacji mobilnej
        </Link>
        .
      </p>

      <h2>Najczęściej zadawane pytania</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Limity znaków i wymagania sklepów sprawdzone w dokumentacji Apple i
        Google w sierpniu 2026 roku. Jeśli czytasz to znacznie później, zweryfikuj
        limit tytułu i wymagane rozmiary zrzutów przed wydaniem, bo to zmienia
        się częściej niż reszta.
      </p>
    </ArticleLayout>
  );
}
