import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
import { buildBlogAlternates, getArticlePl, getEnSlugForPl } from "@/lib/blog";
import { buildFaqSchema } from "@/lib/schema";
import { APP_URL, buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "app-store-connect-publikacja-aplikacji";
const EN_SLUG = getEnSlugForPl(SLUG) ?? "app-store-screenshot-sizes";
const article = getArticlePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "App Store Connect od podstaw: klucz API i plik .p8, role użytkowników, limity metadanych, pole keywords liczone w bajtach i aktualne rozmiary zrzutów ekranu.",
  languages: buildBlogAlternates(EN_SLUG),
  locale: "pl_PL",
  path: `/pl/blog/${SLUG}`,
  title: "App Store Connect: publikacja aplikacji krok po kroku (2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "App Store Connect to panel, w którym zarządzasz aplikacją już po dołączeniu do Apple Developer Program: metadanymi, wersjami, buildami, cenami, testami TestFlight i raportami. Apple Developer to samo członkostwo, które daje Ci certyfikaty, profile i prawo publikowania. Płacisz za program, pracujesz w App Store Connect.",
    question: "Czym jest App Store Connect i czym różni się od Apple Developer?",
  },
  {
    answer:
      "Apple Developer Program kosztuje 99 USD rocznie, płatne w walucie lokalnej pokazanej w trakcie rejestracji. Apple nie publikuje stałej ceny w złotówkach. Nie istnieje konto studenckie za 79 USD ani edukacyjne za 49 USD, mimo że takie liczby krążą po polskich stronach. Kwota 299 USD dotyczy Apple Developer Enterprise Program, czyli dystrybucji wewnętrznej w firmie, a nie zwykłego konta firmowego. Instytucje edukacyjne, organizacje pozarządowe i podmioty rządowe mogą wnioskować o zwolnienie z opłaty.",
    question: "Ile kosztuje konto dewelopera Apple?",
  },
  {
    answer:
      "Nie. Plik klucza prywatnego .p8 można pobrać tylko raz, a Apple nie przechowuje jego kopii. Jeśli go zgubisz, musisz unieważnić klucz i wygenerować nowy. Trzymaj go w menedżerze haseł albo w sejfie sekretów, nigdy w repozytorium.",
    question: "Czy plik .p8 można pobrać ponownie?",
  },
  {
    answer:
      "Pole keywords ma limit 100 bajtów, a nie 100 znaków, i to jest różnica, która uderza akurat w język polski. Polskie znaki diakrytyczne jak ą, ć, ę, ł, ń, ó, ś, ź, ż zajmują w UTF-8 po dwa bajty, więc polski zestaw słów kluczowych wyczerpuje limit znacznie szybciej niż angielski. Warto policzyć bajty, a nie znaki, zanim uznasz, że pole jest pełne.",
    question: "Ile znaków ma pole keywords w App Store?",
  },
  {
    answer:
      "Jeśli aplikacja działa na iPhonie, wymagany jest zestaw dla ekranu 6,9 cala. Apple akceptuje trzy rozmiary w pionie: 1260 na 2736, 1290 na 2796 oraz 1320 na 2868 pikseli. Jeśli aplikacja działa na iPadzie, wymagany jest zestaw 13 cali: 2064 na 2752 albo 2048 na 2732 piksele. Wszystkie mniejsze rozmiary Apple skaluje automatycznie. Obrazy nie mogą mieć kanału alfa ani przezroczystości.",
    question: "Jakie rozmiary zrzutów ekranu są wymagane w 2026 roku?",
  },
  {
    answer:
      "Lokalizowane są: nazwa, podtytuł, słowa kluczowe, opis, tekst promocyjny, nowości w wersji oraz zrzuty ekranu i podglądy. Nie są lokalizowane: adresy URL wsparcia, marketingu i polityki prywatności, kategorie, klasyfikacja wiekowa, prawa autorskie, Bundle ID, SKU i język podstawowy.",
    question: "Które pola metadanych można przetłumaczyć na inne języki?",
  },
  {
    answer:
      "Apple podaje, że średnio 90 procent zgłoszeń jest sprawdzanych w mniej niż 24 godziny. Popularne w polskich poradnikach widełki od kilku dni do dwóch tygodni są mocno zawyżone. Ponad 40 procent nierozwiązanych problemów dotyczy wytycznej 2.1 o kompletności aplikacji, czyli awarii, treści zastępczych i niekompletnych informacji.",
    question: "Ile trwa weryfikacja aplikacji w App Store?",
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
        Sprawdziłem polskie wyniki wyszukiwania dla hasła App Store Connect i
        wniosek jest dość zaskakujący: <strong>nie ma tam ani jednej polskiej
        strony informacyjnej o samym App Store Connect</strong>. Są artykuły o
        tym, jak wrzucić aplikację do App Store, w których Connect jest jednym
        krokiem z ośmiu. Jest wpis, który wciąż nazywa ten panel iTunes Connect,
        czyli nazwą wycofaną w 2018 roku. Jest tłumaczona maszynowo
        dokumentacja Microsoftu do produktu wyłączonego w marcu 2025.
      </p>
      <p>
        Jest też jeszcze jedna rzecz warta odnotowania: <strong>pomoc App Store
        Connect nie istnieje po polsku</strong>. Apple tłumaczy ten przewodnik na
        koreański, japoński i chiński, ale nie na polski. Po polsku dostajesz
        wyłącznie wytyczne App Review i umowę licencyjną w PDF. Ten tekst
        wypełnia tę lukę, z liczbami sprawdzonymi u Apple w sierpniu 2026 roku.
      </p>

      <h2>Najpierw obalmy mity cenowe</h2>
      <p>
        Wokół ceny konta dewelopera Apple narosła w polskim internecie cała
        rodzina błędnych liczb, powielana przez kilkanaście niemal identycznych
        stron.
      </p>
      <table>
        <thead>
          <tr>
            <th>Krążąca liczba</th>
            <th>Jak jest naprawdę</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>49 USD, konto edukacyjne</td>
            <td>Nie istnieje. Instytucje dostają zwolnienie z opłaty, nie tańszy pakiet</td>
          </tr>
          <tr>
            <td>79 USD, konto studenckie</td>
            <td>Nie istnieje</td>
          </tr>
          <tr>
            <td>299 USD dla firm</td>
            <td>To Apple Developer Enterprise Program, do dystrybucji wewnętrznej. Zwykła firma płaci 99 USD</td>
          </tr>
          <tr>
            <td>Cena w złotówkach</td>
            <td>Apple nie publikuje stałej kwoty w PLN. Lokalna waluta pokazuje się w trakcie rejestracji</td>
          </tr>
        </tbody>
      </table>
      <p>
        Realia: <strong>99 USD rocznie</strong>, odnawiane co roku. To ważna
        różnica wobec Google Play, gdzie płacisz 25 USD raz w życiu. Zwolnienie z
        opłaty przysługuje akredytowanym instytucjom edukacyjnym, organizacjom
        pozarządowym i podmiotom rządowym po spełnieniu warunków.
      </p>

      <h2>Klucz API App Store Connect: to, czego nie ma po polsku</h2>
      <p>
        Jeśli chcesz cokolwiek zautomatyzować, czyli wysyłać buildy z CI,
        aktualizować metadane skryptem albo podłączyć zewnętrzne narzędzie,
        potrzebujesz klucza API. Ta sekcja nie występuje w polskim internecie w
        ogóle, a jest kluczowa.
      </p>
      <p>Klucz składa się z trzech elementów i wszystkie trzy są potrzebne:</p>
      <ul>
        <li>
          <strong>Issuer ID</strong>, identyfikator wystawcy, wspólny dla całego
          zespołu, widoczny na stronie kluczy API.
        </li>
        <li>
          <strong>Key ID</strong>, identyfikator konkretnego klucza, na przykład
          w formacie 2X9R4HXF34.
        </li>
        <li>
          <strong>Plik klucza prywatnego .p8</strong>, który pobierasz z panelu.
        </li>
      </ul>
      <p>
        Ścieżka w panelu: <strong>Users and Access</strong>, zakładka{" "}
        <strong>Integrations</strong>, sekcja <strong>App Store Connect API</strong>,{" "}
        <strong>Team Keys</strong>, przycisk generowania klucza. Do wygenerowania
        klucza zespołowego potrzebujesz roli Admin.
      </p>
      <p>
        Najważniejsza zasada, którą łatwo przeoczyć i której odkręcić się nie da:{" "}
        <strong>plik prywatny pobierasz tylko raz</strong>. Link do pobrania
        znika po pierwszym użyciu, a Apple nie przechowuje kopii klucza.
        Zgubiony plik oznacza unieważnienie klucza i wygenerowanie nowego, wraz z
        podmianą wszędzie, gdzie był używany. Klucza nie trzymaj w repozytorium
        ani w kodzie klienckim.
      </p>
      <p>
        Klucze bywają dwojakie. <strong>Team</strong> daje dostęp do wszystkich
        aplikacji zespołu z uprawnieniami wynikającymi z wybranych ról.{" "}
        <strong>Individual</strong> działa w zakresie uprawnień konkretnego
        użytkownika i nie obsługuje operacji provisioningu. Klucze
        indywidualne nie używają Issuer ID, tylko pola subject.
      </p>

      <h2>Role użytkowników</h2>
      <p>
        Druga rzecz nieopisana po polsku, a istotna, gdy w projekcie jest więcej
        niż jedna osoba. App Store Connect ma osiem ról: Account Holder, Admin,
        App Manager, Developer, Marketing, Finance, Sales i Customer Support.
      </p>
      <p>
        Praktyczna uwaga: <strong>Account Holder to jedyna rola</strong>, która
        może podpisywać umowy prawne, odnawiać członkostwo, wnioskować o dostęp
        do App Store Connect API, wycofywać subskrypcje odnawialne ze sprzedaży i
        tworzyć certyfikaty Developer ID. W praktyce oznacza to, że jeśli
        Account Holder jest osobą, która odeszła z firmy, część operacji staje
        się niemożliwa do wykonania przez kogokolwiek innego. Warto to sprawdzić,
        zanim stanie się problemem.
      </p>

      <h2>Limity metadanych i pułapka bajtów</h2>
      <table>
        <thead>
          <tr>
            <th>Pole</th>
            <th>Limit</th>
            <th>Lokalizowane?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nazwa aplikacji</td>
            <td>Od 2 do 30 znaków</td>
            <td>Tak</td>
          </tr>
          <tr>
            <td>Podtytuł</td>
            <td>30 znaków</td>
            <td>Tak</td>
          </tr>
          <tr>
            <td>Słowa kluczowe</td>
            <td>100 bajtów</td>
            <td>Tak</td>
          </tr>
          <tr>
            <td>Tekst promocyjny</td>
            <td>170 znaków</td>
            <td>Tak</td>
          </tr>
          <tr>
            <td>Opis</td>
            <td>4000 znaków, czysty tekst, bez HTML</td>
            <td>Tak</td>
          </tr>
          <tr>
            <td>Nowości w tej wersji</td>
            <td>4000 znaków</td>
            <td>Tak</td>
          </tr>
        </tbody>
      </table>
      <p>
        Zwróć uwagę na trzeci wiersz. Apple pisze o{" "}
        <strong>100 bajtach</strong>, nie o 100 znakach, i to jest rzecz, o
        której nie napisała po polsku żadna strona, mimo że akurat nas dotyczy
        najbardziej. W UTF-8 łacińska litera bez ogonków zajmuje jeden bajt, ale{" "}
        <strong>polskie znaki diakrytyczne zajmują po dwa</strong>. Słowo
        &quot;ćwiczenia&quot; to dziesięć znaków, ale jedenaście bajtów.
        Zestaw polskich słów kluczowych z ogonkami wyczerpie limit szybciej,
        niż podpowiada licznik znaków w edytorze tekstu.
      </p>
      <p>
        Praktyczny wniosek: licz bajty. I rozważ, czy dla danego słowa forma bez
        ogonków ma realny wolumen wyszukiwań, bo część polskich użytkowników
        wpisuje zapytania bez diakrytyków. To osobna decyzja dla każdego słowa, a
        nie reguła do zastosowania hurtem. Rozwijam ten wątek w tekście o{" "}
        <Link href="/pl/blog/pozycjonowanie-aplikacji-mobilnych">
          pozycjonowaniu aplikacji mobilnych
        </Link>
        .
      </p>
      <p>
        Apple sam podpowiada dwie zasady dla tego pola: słowa muszą mieć więcej
        niż dwa znaki, a <strong>nazwy aplikacji i firmy nie warto tam
        powtarzać</strong>, bo aplikacja i tak jest po nich wyszukiwalna. Każde
        powtórzenie to zmarnowane bajty.
      </p>

      <h3>Czego nie da się przetłumaczyć</h3>
      <p>
        Lokalizowane są nazwa, podtytuł, słowa kluczowe, opis, tekst promocyjny,
        nowości w wersji oraz zrzuty ekranu i podglądy. Nie są lokalizowane
        adresy URL wsparcia, marketingu i polityki prywatności, kategoria główna i
        dodatkowa, klasyfikacja wiekowa, prawa autorskie, Bundle ID, SKU i język
        podstawowy. Dodatkowo <strong>Bundle ID zablokuje się po wgraniu
        pierwszego builda, a SKU zaraz po utworzeniu aplikacji</strong>, więc obu
        nie zmienisz później. Warto poświęcić im pięć minut na początku.
      </p>
      <p>
        Przy dodawaniu nowego języka Apple kopiuje zrzuty ekranu i pozostałe
        pola z języka podstawowego, z wyjątkiem opisu i słów kluczowych. Polski
        jest jednym z około 50 języków obsługiwanych przez App Store.
      </p>

      <h2>Zrzuty ekranu: wymagane rozmiary w 2026</h2>
      <p>
        Tu polskie poradniki są jednomyślnie nieaktualne. Każdy z nich podaje
        klasy 6,7 cala i 5,5 cala oraz iPada 12,9 cala, czyli stan sprzed
        wprowadzenia obecnie wymaganych klas.
      </p>
      <table>
        <thead>
          <tr>
            <th>Klasa</th>
            <th>Rozmiary w pionie</th>
            <th>Wymagane?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iPhone 6,9 cala</td>
            <td>1260 x 2736, 1290 x 2796, 1320 x 2868</td>
            <td>Tak, jeśli aplikacja działa na iPhonie</td>
          </tr>
          <tr>
            <td>iPhone 6,5 cala</td>
            <td>1284 x 2778, 1242 x 2688</td>
            <td>Tylko jeśli pominiesz 6,9 cala</td>
          </tr>
          <tr>
            <td>iPad 13 cali</td>
            <td>2064 x 2752, 2048 x 2732</td>
            <td>Tak, jeśli aplikacja działa na iPadzie</td>
          </tr>
          <tr>
            <td>iPad 11 cali</td>
            <td>1488 x 2266, 1668 x 2420, 1668 x 2388, 1640 x 2360</td>
            <td>Opcjonalne</td>
          </tr>
        </tbody>
      </table>
      <p>
        Zasady wspólne: od 1 do 10 zrzutów na każdą lokalizację, formaty PNG albo
        JPEG,{" "}
        <strong>bez kanału alfa i bez przezroczystości</strong>. Jeśli nie
        dostarczysz żadnego z wymaganych rozmiarów, Apple użyje przeskalowanych
        zrzutów dla ekranu 6,9 cala. Wszystkie mniejsze klasy powstają
        automatycznie ze skalowania największego dostarczonego zestawu, więc w
        praktyce wystarczy jeden zestaw iPhone i, jeśli trzeba, jeden zestaw
        iPad.
      </p>
      <p>
        Zrzuty na wszystkie te rozmiary i języki możesz złożyć w{" "}
        <a href={`${APP_URL}/editor`}>
          darmowym edytorze zrzutów ekranu AppBoard
        </a>
        , który eksportuje dokładnie w powyższych wymiarach i działa w
        przeglądarce, bez konta i bez instalacji.
      </p>

      <h2>Weryfikacja: ile to naprawdę trwa</h2>
      <p>
        Polskie strony podają widełki od kilku dni do dwóch tygodni. Apple podaje
        co innego: <strong>średnio 90 procent zgłoszeń jest sprawdzanych w mniej
        niż 24 godziny</strong>.
      </p>
      <p>
        Apple publikuje też, na czym najczęściej wykłada się reszta:{" "}
        <strong>ponad 40 procent nierozwiązanych problemów dotyczy wytycznej 2.1
        o kompletności aplikacji</strong>, czyli awarii, treści zastępczych typu
        Lorem ipsum i niekompletnych informacji do logowania. Jeśli aplikacja
        wymaga konta, dołącz działające dane testowe. To najtańszy sposób na
        uniknięcie tygodnia opóźnienia.
      </p>
      <p>
        Dwie ścieżki awaryjne warto znać zawczasu. Przyspieszona weryfikacja
        jest dostępna przy krytycznej poprawce błędu albo wydaniu powiązanym z
        wydarzeniem. Od decyzji odwołujesz się do App Review Board, przy czym
        Apple prosi o <strong>jedno odwołanie na zgłoszenie</strong>.
      </p>

      <h2>Kolejność pracy w App Store Connect</h2>
      <ol>
        <li>Dołącz do Apple Developer Program i zaakceptuj umowy. Bez podpisanych umów nic nie opublikujesz.</li>
        <li>Utwórz aplikację: nazwa, język podstawowy, Bundle ID, SKU. Dwa ostatnie są nieodwracalne.</li>
        <li>Wygeneruj klucz API, jeśli cokolwiek automatyzujesz. Zapisz plik .p8 od razu w bezpiecznym miejscu.</li>
        <li>Uzupełnij informacje o aplikacji: kategorie, klasyfikacja wiekowa, prawa autorskie.</li>
        <li>Wypełnij ankietę prywatności. Musi zgadzać się z tym, co realnie zbiera kod.</li>
        <li>Dodaj metadane wersji: podtytuł, słowa kluczowe liczone w bajtach, opis, nowości.</li>
        <li>Wgraj zrzuty ekranu 6,9 cala i, jeśli trzeba, 13 cali.</li>
        <li>Prześlij build, przetestuj go w TestFlight, dodaj dane testowe dla recenzenta.</li>
        <li>Wyślij do weryfikacji i zdecyduj o sposobie publikacji po zatwierdzeniu.</li>
      </ol>

      <h2>Dwa sklepy, dwa różne modele</h2>
      <p>
        Jeśli wydajesz tę samą aplikację na Androida, największa różnica nie
        polega na interfejsie, tylko na tym, że{" "}
        <strong>Google Play nie ma osobnego pola na słowa kluczowe</strong>.
        Google wyciąga je z tytułu i opisów, Apple ma dedykowane 100 bajtów
        niewidocznych dla użytkownika. To znaczy, że tych samych tekstów nie
        przełożysz jeden do jednego. Zasady po stronie Google opisałem w tekście
        o{" "}
        <Link href="/pl/blog/google-play-console-publikacja-aplikacji">
          Google Play Console
        </Link>
        .
      </p>
      <p>
        Utrzymywanie obu kart produktu w dwóch konsolach, w kilku językach,
        szybko robi się uciążliwe. Do tego robimy{" "}
        <Link href="/pricing">AppBoard, darmowy w wersji beta</Link>: jeden panel
        na oba sklepy, edycja metadanych per język, historia zmian i podgląd
        różnic między wersją roboczą a opublikowaną.
      </p>

      <h2>Najczęściej zadawane pytania</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Wszystkie liczby pochodzą z dokumentacji Apple dla deweloperów i zostały
        sprawdzone w sierpniu 2026 roku. Apple dodaje nowe klasy ekranów przy
        każdej generacji iPhone, więc przed wydaniem znacznie późniejszym niż ta
        data warto zweryfikować wymagane rozmiary zrzutów.
      </p>
    </ArticleLayout>
  );
}
