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

const SLUG = "promocja-aplikacji-mobilnej";
const EN_SLUG = getEnSlugForPl(SLUG) ?? "app-store-optimization-services";
const article = getArticlePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Ile kosztuje promocja aplikacji mobilnej w Polsce: stawki agencji w złotówkach, benchmarki CPI, kanały które działają i moment, w którym warto zlecić to na zewnątrz.",
  languages: buildBlogAlternates(EN_SLUG, SLUG),
  locale: "pl_PL",
  path: `/pl/blog/${SLUG}`,
  title: "Promocja aplikacji mobilnej: ile to kosztuje i co naprawdę działa",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "Polskie agencje praktycznie nie publikują cen za ASO ani marketing aplikacji. Przejrzeliśmy dziesięć stron ofertowych z pierwszej strony wyników i tylko jedna cena była jawna: 3000 zł za optymalizację ASO w ogłoszeniu na agregatorze usług. Reszta to zapytaj o wycenę albo model success fee. Dla porównania ogólne stawki agencji marketingowych w Polsce to 100 do 500 zł za godzinę, a kampanie reklamowe dla małych firm 2000 do 5000 zł miesięcznie.",
    question: "Ile kosztuje promocja aplikacji mobilnej w Polsce?",
  },
  {
    answer:
      "Według benchmarków publikowanych przez polską agencję App&More koszt instalacji na polskim rynku to około 1 do 2 zł na Androidzie i 5 do 7 zł na iOS dla dobrze zoptymalizowanych aplikacji społecznościowych i gier, 3 do 5 zł oraz 8 do 12 zł dla aplikacji średniej wielkości, a przy dużej skali 7 do 12 zł i 15 do 25 zł. To dane jednej agencji bez opisanej metodologii, więc traktuj je jako rząd wielkości, a nie pomiar rynku.",
    question: "Ile kosztuje jedna instalacja aplikacji w Polsce?",
  },
  {
    answer:
      "Tak, i dla pierwszej aplikacji zwykle jest to właściwy wybór. Konsole obu sklepów pokazują wyświetlenia, wejścia na kartę produktu i konwersję za darmo, natywne testy A/B w sklepach też nic nie kosztują, a płatne narzędzia zaczynają się poniżej 50 zł miesięcznie. Od agencji kupujesz nie dostęp do danych, tylko godziny i doświadczenie.",
    question: "Czy mogę promować aplikację samodzielnie zamiast zlecać agencji?",
  },
  {
    answer:
      "Tak. Apple wymienia Polskę wśród 35 europejskich krajów, w których dostępne są Apple Ads. Kampanie promujące aplikacje w Google Ads również działają w Polsce i mają polską dokumentację. Oba kanały możesz uruchomić samodzielnie bez pośrednika.",
    question: "Czy Apple Ads i Google App Campaigns działają w Polsce?",
  },
  {
    answer:
      "Pierwsze ruchy pozycji po zmianie metadanych widać zwykle po 2 do 4 tygodniach, wpływ na instalacje po 2 do 3 miesiącach, a pełną ocenę zwrotu po kwartale. Przygotowanie planu marketingowego to według polskich agencji do 4 tygodni, a etap pre-launch i soft launch od 2 do 6 miesięcy.",
    question: "Jak długo trzeba czekać na efekty promocji aplikacji?",
  },
  {
    answer:
      "Nie. Żadna agencja nie może zagwarantować pozycji, bo ani Apple, ani Google nie sprzedają miejsc w rankingu. Dostawcy, którzy gwarantują wyniki, zwykle sprzedają instalacje motywowane, kupione oceny albo opinie. To narusza zasady obu sklepów i grozi usunięciem aplikacji oraz zamknięciem konta dewelopera.",
    question: "Czy agencja może zagwarantować pierwsze miejsce w sklepie?",
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
        Przejrzeliśmy wszystkie polskie strony, które wychodzą wysoko na hasła o
        promocji, marketingu i reklamie aplikacji mobilnych. Dwie z nich mają w
        tytule słowo cennik albo pytanie ile kosztuje.{" "}
        <strong>Żadna z tych dwóch nie podaje ani jednej kwoty w
        złotówkach.</strong> Trzy kolejne mają w sekcji pytań nagłówek
        &bdquo;Ile kosztuje marketing aplikacji?&rdquo; i odpowiadają, że cena
        jest ustalana indywidualnie.
      </p>
      <p>
        W całym polskim internecie znaleźliśmy dokładnie{" "}
        <strong>jedną jawną cenę za usługę ASO</strong>. Ten tekst zbiera
        wszystko, co da się o kosztach powiedzieć uczciwie, z podaniem, skąd
        pochodzi każda liczba i jak bardzo jest pewna. Zastrzeżenie na wstępie:
        robimy narzędzie do zarządzania listingami, więc mamy interes w tym,
        żebyś część tej pracy robił sam. Traktuj naszą konkluzję z taką samą
        podejrzliwością, z jaką warto traktować agencyjne.
      </p>

      <h2>Dlaczego nikt nie podaje cen</h2>
      <p>
        To nie jest zmowa, tylko struktura rynku. Zakres pracy przy aplikacji
        rozjeżdża się dramatycznie w zależności od tego, ile masz rynków, ilu
        języków i czy w grę wchodzi produkcja kreacji. Agencje wolą wycenę
        indywidualną, bo trudno o cennik, który nie będzie mylący.
      </p>
      <p>
        Warto jednak zauważyć asymetrię: <strong>polskie agencje SEO publikują
        widełki cenowe rutynowo</strong>, od 490 zł netto miesięcznie w górę,
        podczas gdy przy ASO panuje cisza. To sugeruje raczej młodość tej
        kategorii usług w Polsce niż jej wyjątkową złożoność.
      </p>

      <h2>Ceny, które faktycznie ktoś opublikował</h2>
      <table>
        <thead>
          <tr>
            <th>Pozycja</th>
            <th>Kwota</th>
            <th>Źródło i pewność</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Optymalizacja ASO, pakiet</td>
            <td>3000 zł</td>
            <td>Jedna oferta na agregatorze usług. Pojedynczy punkt, nie stawka rynkowa</td>
          </tr>
          <tr>
            <td>Audyt ASO</td>
            <td>Od 0 zł do wyceny</td>
            <td>Jedna agencja prowadzi akcję z darmowym audytem, reszta wycenia indywidualnie</td>
          </tr>
          <tr>
            <td>ASO w modelu success fee</td>
            <td>Bez kwoty</td>
            <td>Jedna agencja deklaruje ten model, bez podania stawki</td>
          </tr>
          <tr>
            <td>Stawka godzinowa agencji marketingowej</td>
            <td>100 do 500 zł/h</td>
            <td>Zestawienie branżowe, nie dotyczy wyłącznie ASO</td>
          </tr>
          <tr>
            <td>Kampanie reklamowe, małe firmy</td>
            <td>2000 do 5000 zł/mies.</td>
            <td>Zestawienie branżowe, marketing ogólny</td>
          </tr>
          <tr>
            <td>Kampanie reklamowe, średnie i duże</td>
            <td>7000 do 15 000 zł/mies.</td>
            <td>Zestawienie branżowe, marketing ogólny</td>
          </tr>
          <tr>
            <td>Prowizja agencji od budżetu kampanii</td>
            <td>10 do 30 proc., min. 1000 zł/mies.</td>
            <td>Zestawienie branżowe</td>
          </tr>
          <tr>
            <td>Konsultacje</td>
            <td>200 do 700 zł/h</td>
            <td>Zestawienie branżowe</td>
          </tr>
        </tbody>
      </table>
      <p>
        Cztery ostatnie wiersze pochodzą z zestawienia stawek agencji
        marketingowych w Polsce i <strong>nie są stawkami za ASO</strong>. Podaję
        je, bo to jedyna zakotwiczona w rzeczywistości skala, do której możesz
        przyłożyć ofertę, którą dostaniesz. Jeśli agencja policzy Ci 8000 zł
        miesięcznie za samo ASO jednej aplikacji na jednym rynku, wiesz, że to
        górna półka rynku marketingowego w ogóle.
      </p>

      <h2>Ile kosztuje instalacja</h2>
      <p>
        Tu jest jedyny publiczny polski benchmark, jaki udało się znaleźć.
        Pochodzi od agencji App&More i dotyczy kosztu pozyskania instalacji na
        polskim rynku:
      </p>
      <table>
        <thead>
          <tr>
            <th>Typ aplikacji</th>
            <th>Android</th>
            <th>iOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Społecznościowe i gry, dobrze zoptymalizowane</td>
            <td>1 do 2 zł</td>
            <td>5 do 7 zł</td>
          </tr>
          <tr>
            <td>Aplikacje średniej wielkości</td>
            <td>3 do 5 zł</td>
            <td>8 do 12 zł</td>
          </tr>
          <tr>
            <td>Duża skala, mocne płatne media</td>
            <td>7 do 12 zł</td>
            <td>15 do 25 zł</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Uczciwe zastrzeżenie:</strong> to liczby jednej agencji, bez
        podanej metodologii i bez daty pomiaru. Ta sama strona podaje wewnętrznie
        sprzeczne dane o liczbie aplikacji w sklepach, więc nie traktuj tego jako
        pomiaru rynku. Jako rząd wielkości do policzenia budżetu jednak działają,
        a nic lepszego publicznie w Polsce nie ma.
      </p>
      <p>
        Praktyczny wniosek z tej tabeli jest ważniejszy niż same liczby:{" "}
        <strong>instalacja na iOS kosztuje w Polsce mniej więcej cztery razy
        więcej niż na Androidzie</strong>. Jeśli monetyzujesz reklamami i
        potrzebujesz skali, budżet idzie na Androida. Jeśli monetyzujesz
        subskrypcją, droższa instalacja na iOS może i tak wychodzić lepiej, bo
        różnica w skłonności do płacenia jest realna. Policz to na własnych
        danych, zanim rozdzielisz budżet.
      </p>

      <h2>Kontekst polskiego rynku</h2>
      <p>
        Jedna liczba, której nie używa żadna z konkurencyjnych stron, a która
        najlepiej uzasadnia inwestycję w aplikację: według badania Mediapanel
        PBI za czwarty kwartał 2025 roku{" "}
        <strong>aplikacje mobilne odpowiadają za 70 procent czasu spędzanego
        online przez Polaków</strong>, przy 76 procentach dla telefonów ogółem i
        23 procentach dla komputerów. Średni dzienny czas online to 3 godziny 49
        minut.
      </p>
      <p>
        Wszystkie polskie strony w tej kategorii cytują globalne statystyki
        Business of Apps albo Statista sprzed kilku lat. Dane PBI są krajowe,
        aktualne i mierzone, a nie szacowane.
      </p>
      <p>
        Czego <strong>nie</strong> udało się ustalić: wiarygodnego podziału
        udziałów App Store i Google Play w polskich pobraniach ani przychodach.
        Ta liczba po prostu nie istnieje publicznie. Jeśli spotkasz ją w czyjejś
        prezentacji, poproś o źródło.
      </p>

      <h2>Kanały, w kolejności zwrotu na złotówkę</h2>
      <ol>
        <li>
          <strong>ASO, czyli optymalizacja kart produktu.</strong> Nie kosztuje
          nic poza czasem, działa bez końca i podnosi skuteczność każdego innego
          kanału, bo cały płatny ruch i tak ląduje na Twojej karcie produktu.
          Reklama kierująca na słabą kartę to przepalanie budżetu.
        </li>
        <li>
          <strong>Odpowiadanie na opinie.</strong> Godzina tygodniowo, zero
          kosztu, mierzalny wpływ na ocenę i konwersję.
        </li>
        <li>
          <strong>Natywne testy A/B w sklepach.</strong> Product Page
          Optimization w App Store i eksperymenty karty produktu w Google Play.
          Darmowe i jedyne, które mierzą na Twoim realnym ruchu.
        </li>
        <li>
          <strong>Apple Ads.</strong> Dostępne w Polsce. Poza samą sprzedażą dają
          rzecz bezcenną dla ASO: listę prawdziwych zapytań, którymi ludzie
          trafiają do Twojej aplikacji w polskim storefroncie.
        </li>
        <li>
          <strong>Kampanie promujące aplikacje w Google Ads.</strong> Dostępne w
          Polsce, z polską dokumentacją, dobre do skali na Androidzie.
        </li>
        <li>
          <strong>Landing page i treści.</strong> Wolno działają, ale nie
          znikają, gdy wyłączysz budżet.
        </li>
        <li>
          <strong>Influencerzy i social.</strong> Potrafią działać świetnie w
          wąskich niszach i fatalnie przy szerokim targecie. Najtrudniejszy kanał
          do przewidzenia.
        </li>
      </ol>
      <p>
        Kolejność nie jest przypadkowa. Pierwsze trzy pozycje kosztują wyłącznie
        czas i powinny być zrobione, zanim wydasz pierwszą złotówkę na reklamę.
        Podstawy ASO zebrałem w tekście o{" "}
        <Link href="/pl/blog/pozycjonowanie-aplikacji-mobilnych">
          pozycjonowaniu aplikacji mobilnych
        </Link>
        .
      </p>

      <h2>Ile czasu to zajmuje, jeśli robisz to sam</h2>
      <table>
        <thead>
          <tr>
            <th>Zadanie</th>
            <th>Czas</th>
            <th>Częstotliwość</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Research słów kluczowych na jeden rynek</td>
            <td>4 do 8 godzin</td>
            <td>Raz, potem odświeżenie kwartalne</td>
          </tr>
          <tr>
            <td>Napisanie metadanych pod limity znaków</td>
            <td>3 do 5 godzin</td>
            <td>Przy większym wydaniu</td>
          </tr>
          <tr>
            <td>Zrzuty ekranu na jeden język</td>
            <td>4 do 10 godzin</td>
            <td>Przy większym wydaniu</td>
          </tr>
          <tr>
            <td>Ustawienie i odczytanie jednego testu A/B</td>
            <td>2 do 3 godzin</td>
            <td>Na test, każdy trwa 4 do 8 tygodni</td>
          </tr>
          <tr>
            <td>Monitoring pozycji i opinii</td>
            <td>1 do 2 godzin</td>
            <td>Miesięcznie</td>
          </tr>
        </tbody>
      </table>
      <p>
        Razem: około 15 do 30 godzin na start i 3 do 6 godzin miesięcznie na
        utrzymanie. Przeliczając po stawce konsultacyjnej 200 do 700 zł za
        godzinę, samo wdrożenie to równowartość od 3000 do 21 000 zł czyjegoś
        czasu. Jeśli robisz to sam, nie jest darmowe, tylko płacone innym
        rodzajem waluty.
      </p>

      <h2>Kiedy zlecić na zewnątrz</h2>
      <table>
        <thead>
          <tr>
            <th>Sytuacja</th>
            <th>Sensowny wybór</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pierwsza aplikacja, brak przychodów</td>
            <td>Samodzielnie, konsole sklepów i darmowe testy</td>
          </tr>
          <tr>
            <td>Jest przychód, ktoś w zespole ma kilka godzin miesięcznie</td>
            <td>Samodzielnie plus jednorazowy płatny audyt</td>
          </tr>
          <tr>
            <td>Kilka rynków, nikt nie ma czasu</td>
            <td>Freelancer albo mała agencja</td>
          </tr>
          <tr>
            <td>Budżet mediowy powyżej kilkudziesięciu tysięcy miesięcznie</td>
            <td>Agencja z kompetencją User Acquisition</td>
          </tr>
          <tr>
            <td>Stały retainer zbliża się do kosztu etatu</td>
            <td>Zatrudnij osobę na miejscu</td>
          </tr>
        </tbody>
      </table>
      <p>
        Najbardziej niedoceniana opcja to drugi wiersz. Zamiast wchodzić w stały
        retainer, kup <strong>jednorazowy audyt</strong> i wdróż go sam. Dostajesz
        spojrzenie z zewnątrz na kartę produktu, luki w słowach kluczowych i
        kierunek dla kreacji, a wykonanie zostaje u Ciebie. Jeśli audyt jest
        dobry, zwraca się od razu. Jeśli jest ogólnikowy, dowiadujesz się tego za
        kilka tysięcy złotych, a nie po roku współpracy.
      </p>

      <h2>Czerwone flagi przy wyborze wykonawcy</h2>
      <ul>
        <li>
          <strong>Gwarancja pozycji albo gwarantowana liczba opinii.</strong>{" "}
          Nikt nie może tego zagwarantować bez kupienia. Sklepy nie sprzedają
          miejsc w rankingu.
        </li>
        <li>
          <strong>Rozliczenie za instalację, ocenę albo opinię.</strong> To nie
          jest model rozliczeń, to opis produktu, a produktem są instalacje
          motywowane i kupione opinie. Konsekwencją bywa usunięcie aplikacji i
          zamknięcie konta dewelopera.
        </li>
        <li>
          <strong>Efekty obiecane w dni.</strong> Zaindeksowanie nowych metadanych
          zajmuje tygodnie.
        </li>
        <li>
          <strong>Brak odpowiedzi na pytanie, skąd pochodzą dane o słowach
          kluczowych.</strong> Jeśli nie potrafią wymienić narzędzia, odsprzedają
          Ci subskrypcję za 79 USD.
        </li>
        <li>
          <strong>Case study bez metodologii.</strong> Wykres z pionową kreską i
          bez opisu, co dokładnie zmieniono, nie jest dowodem.
        </li>
      </ul>
      <p>Cztery pytania, które warto zadać przed podpisaniem umowy:</p>
      <ol>
        <li>Czy Wy albo Wasi podwykonawcy dostarczacie instalacje, oceny lub opinie? Poproście o to na piśmie.</li>
        <li>Z jakiego narzędzia pochodzą dane o słowach kluczowych dla polskiego rynku?</li>
        <li>Kto fizycznie publikuje zmiany w konsolach, Wy czy my?</li>
        <li>Co zostaje u nas po zakończeniu współpracy: research, pliki źródłowe kreacji, historia testów?</li>
      </ol>

      <h2>Co zrobić w tym tygodniu</h2>
      <p>
        Niezależnie od tego, czy zlecisz komuś promocję, te trzy rzeczy zrób
        sam. Po pierwsze dlatego, że są darmowe. Po drugie dlatego, że dzięki nim
        wejdziesz do rozmowy z agencją z punktem odniesienia zamiast z pustą
        kartką.
      </p>
      <ol>
        <li>
          Sprawdź limity znaków w obu sklepach i popraw tytuł oraz podtytuł.
          Szczegóły techniczne w tekstach o{" "}
          <Link href="/pl/blog/google-play-console-publikacja-aplikacji">
            Google Play Console
          </Link>{" "}
          i{" "}
          <Link href="/pl/blog/app-store-connect-publikacja-aplikacji">
            App Store Connect
          </Link>
          .
        </li>
        <li>Wymień pierwsze dwa zrzuty ekranu. Tam rozstrzyga się konwersja.</li>
        <li>Uruchom jeden test A/B w konsoli sklepu i pozwól mu dobiec do końca.</li>
      </ol>
      <p>
        Po kwartale będziesz mieć dane, które pozwolą ocenić, czy w ogóle
        potrzebujesz kogoś z zewnątrz, i brief, z którym da się rozmawiać. Do
        prowadzenia tego wszystkiego w jednym miejscu, z historią zmian i
        podglądem różnic między wersją roboczą a opublikowaną, robimy{" "}
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
        Ceny zebrane z publicznie dostępnych stron polskich agencji i zestawień
        branżowych w sierpniu 2026 roku. Tam, gdzie kwota pochodzi od jednego
        dostawcy albo z zestawienia spoza kategorii ASO, jest to zaznaczone przy
        liczbie. Nie podajemy stawek, których nie dało się nigdzie znaleźć.
      </p>
    </ArticleLayout>
  );
}
