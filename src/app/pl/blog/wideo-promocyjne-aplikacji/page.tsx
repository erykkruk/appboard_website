import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { Callout, JsonLd } from "@/components/ui";
import { buildBlogAlternates, getArticlePl, getEnSlugForPl } from "@/lib/blog";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "wideo-promocyjne-aplikacji";
const EN_SLUG = getEnSlugForPl(SLUG) ?? "app-preview-video-vs-screenshots";
const article = getArticlePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Ile realnie daje wideo promocyjne w App Store i Google Play, czym App Preview różni się od filmu na Play, kanały YouTube per język i pułapka poziomego wideo, która zabiera zrzuty z wyników wyszukiwania.",
  languages: buildBlogAlternates(EN_SLUG),
  locale: "pl_PL",
  ogType: "article",
  path: `/pl/blog/${SLUG}`,
  publishedTime: "2026-08-30",
  title: "Wideo promocyjne aplikacji czy zrzuty ekranu",
});

const IMAGES = [
  "/images/blog/app-store-landscape-app-preview.jpg",
  "/images/blog/app-store-search-no-screenshots.jpg",
];

const FAQ: FaqEntry[] = [
  {
    answer:
      "Testy platform A/B mówią o wzroście konwersji na instalację rzędu 16 procent (SplitMetrics) do 20-35 procent (StoreMaven). To dane producentów narzędzi, nie badania recenzowane, więc traktuj je kierunkowo. Efekt bardzo mocno zależy od kategorii: gry zyskują najwięcej, a w finansach i produktywności część testów pokazuje spadek konwersji o 3 do 7 procent, bo wideo jest wolniejszym sposobem powiedzenia tego, co jedna podpisana klatka mówi od razu.",
    question: "Czy wideo promocyjne zwiększa liczbę instalacji aplikacji?",
  },
  {
    answer:
      "App Store pozwala na maksymalnie 3 filmy App Preview na każdą lokalizację, długości 15 do 30 sekund, wgrywane jako plik (M4V, MP4 lub MOV, do 500 MB). Google Play przyjmuje jeden film promocyjny na kartę produktu i tylko jako adres URL pojedynczego filmu w YouTube, nie playlisty i nie kanału.",
    question: "Ile filmów można dodać w App Store i Google Play?",
  },
  {
    answer:
      "Najczęstsza przyczyna to poziome (landscape) wideo App Preview przy pionowych zrzutach ekranu. Poziomy film zajmuje w wynikach wyszukiwania całą szerokość wiersza i zrzuty nie są obok niego pokazywane, a w praktyce wiersz potrafi wyrenderować się całkowicie bez grafik. Sprawdź to na urządzeniu, które nigdy nie miało zainstalowanej Twojej aplikacji, bo dla osób z aplikacją na koncie układ karty produktu jest inny.",
    question:
      "Dlaczego moja aplikacja nie pokazuje zrzutów ekranu w wynikach wyszukiwania App Store?",
  },
  {
    answer:
      "Nie. Film promocyjny w Google Play w ogóle nie pojawia się w wynikach wyszukiwania sklepu, działa dopiero na karcie produktu, gdzie może odtworzyć się automatycznie bez dźwięku do 30 sekund. To odwrotnie niż w App Store, gdzie App Preview odtwarza się w wynikach wyszukiwania, zanim ktokolwiek Cię wybierze.",
    question: "Czy wideo z Google Play pokazuje się w wynikach wyszukiwania?",
  },
  {
    answer:
      "Tak, w obu sklepach. W App Store filmy są per lokalizacja. W Google Play grafiki karty produktu, razem z filmem, są lokalizowane per język. Dodatkowo Play ma osobną, rzadko używaną funkcję: w sekcji Rozwijaj odbiorców, Obecność w sklepie, Filmy w YouTube podpinasz kanały lub playlisty z ustawionym językiem, po jednym języku na kanał.",
    question: "Czy da się dodać osobne wideo dla każdego języka?",
  },
];

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout
      article={article}
      bylined
      images={IMAGES}
      locale="pl"
      translationHref={`/blog/${EN_SLUG}`}
    >
      <JsonLd data={buildFaqSchema(`/pl/blog/${SLUG}`, FAQ, "pl-PL")} />
      <p>
        Każda inna powierzchnia przeszła na wideo lata temu. Listingi w sklepach
        to ostatnie miejsce, gdzie dobre zespoły nadal wrzucają pięć statycznych
        klatek, a te, które dokładają wideo, często przy okazji psują sobie wynik
        w wyszukiwarce sklepu.
      </p>

      <Callout title="W skrócie">
        <ul>
        <li>
          Na Meta wideo mniej więcej podwaja klikalność w tym samym miejscu
          reklamowym. Statyk nadal wygrywa na efektywności kosztowej.
        </li>
        <li>
          W sklepach efekt jest mniejszy: mniej więcej{" "}
          <strong>od 5 do 30 procent wzrostu konwersji na instalację</strong>,
          zależnie od kategorii. Gry zyskują najwięcej, część testów w finansach
          i produktywności wychodzi na minus.
        </li>
        <li>
          App Preview odtwarza się w wynikach wyszukiwania App Store. Film z
          Google Play nie pojawia się w wyszukiwarce Play w ogóle.
        </li>
        <li>
          Play ma drugą, prawie nieużywaną powierzchnię: kanały YouTube per
          język.
        </li>
        <li>
          <strong>Poziome wideo w App Store potrafi wyrzucić zrzuty ekranu z
            Twojego wiersza w wynikach wyszukiwania</strong>, czasem
            zostawiając go zupełnie bez grafik.
          </li>
        </ul>
      </Callout>

      <h2>Ile realnie warte jest wideo</h2>
      <p>
        Zagregowane benchmarki z kont reklamowych Meta za 2026 rok (zestawienia
        agencyjne, nie oficjalne dane Meta, więc kierunkowo):
      </p>
      <table>
        <thead>
          <tr>
            <th>Metryka</th>
            <th>Grafika statyczna</th>
            <th>Wideo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CTR w tym samym miejscu w Reels</td>
            <td>0,62%</td>
            <td>1,31%</td>
          </tr>
          <tr>
            <td>Średni CTR na wszystkich umiejscowieniach</td>
            <td>0,90%</td>
            <td>1,14%</td>
          </tr>
          <tr>
            <td>Czas spędzony z kreacją</td>
            <td>1,4 s</td>
            <td>4,7 s</td>
          </tr>
          <tr>
            <td>Konwersja w środku lejka</td>
            <td>1,6%</td>
            <td>2,1%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Te liczby się nie przenoszą. W feedzie komuś przerywasz i wideo wygrywa,
        bo lepiej zatrzymuje scrollowanie. Na karcie produktu użytkownik już
        kliknął i decyduje, czy zainstalować, dlatego wzrosty w sklepach są
        jedno- i niskie dwucyfrowe, i dlatego słabe wideo potrafi zabrać
        instalacje, podczas gdy słaba reklama zostaje zignorowana.
      </p>
      <p>
        SplitMetrics podaje około <strong>+16%</strong> po dodaniu App Preview,
        StoreMaven <strong>+20% do +35%</strong>. Dobry zestaw statycznych zrzutów
        jest wart podobnie sam z siebie, więc wideo jest dodatkiem do dobrych
        zrzutów, a nie ich zamiennikiem. W rozbiciu na kategorie, kierunkowe
        przedziały AppFollow:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kategoria</th>
            <th>Wzrost konwersji dzięki wideo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gry</td>
            <td>+8% do +18%</td>
          </tr>
          <tr>
            <td>Zdrowie i fitness</td>
            <td>+7% do +14%</td>
          </tr>
          <tr>
            <td>Fintech</td>
            <td>+6% do +12%</td>
          </tr>
          <tr>
            <td>Social</td>
            <td>+5% do +11%</td>
          </tr>
          <tr>
            <td>E-commerce</td>
            <td>+4% do +10%</td>
          </tr>
          <tr>
            <td>Narzędzia</td>
            <td>+3% do +9%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Kilka firm testowych raportuje też, że wideo <em>szkodzi</em> konwersji w
        finansach i produktywności, o 3 do 7 procent. Zasada: wideo wygrywa,
        kiedy Twoja aplikacja jest czymś do oglądania, a przegrywa, kiedy jest
        czymś do używania.
      </p>

      <h2>Oba sklepy wystawiają wideo inaczej</h2>
      <table>
        <thead>
          <tr>
            <th>Parametr</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Liczba filmów</td>
            <td>Do 3 na lokalizację</td>
            <td>1 film promocyjny na kartę produktu</td>
          </tr>
          <tr>
            <td>Jak dostarczasz</td>
            <td>Wgrany plik (M4V, MP4, MOV, do 500 MB)</td>
            <td>Adres URL pojedynczego filmu w YouTube, nie playlisty i nie kanału</td>
          </tr>
          <tr>
            <td>Długość</td>
            <td>15 do 30 s</td>
            <td>Brak twardego limitu, zalecane 30 do 90 s</td>
          </tr>
          <tr>
            <td>W wynikach wyszukiwania</td>
            <td>Odtwarza się automatycznie, bez dźwięku</td>
            <td>Nie pojawia się w ogóle</td>
          </tr>
          <tr>
            <td>Na karcie produktu</td>
            <td>Odtwarza się automatycznie</td>
            <td>Może odtworzyć się bez dźwięku, do 30 s, zależnie od urządzenia</td>
          </tr>
          <tr>
            <td>Orientacja</td>
            <td>Pionowa albo pozioma, i to zmienia układ strony</td>
            <td>Preferowana pozioma 16:9</td>
          </tr>
          <tr>
            <td>Per język</td>
            <td>Tak, per lokalizacja</td>
            <td>Tak, grafiki karty produktu są lokalizowane per język</td>
          </tr>
        </tbody>
      </table>
      <p>
        W App Store wideo jest zasobem odkrywania, gra zanim ktokolwiek Cię
        wybrał. W Play istnieje dopiero po kliknięciu. Ta jedna różnica powinna
        decydować o podziale budżetu i jest odwrotnością tego, jak większość
        zespołów go dzieli.
      </p>

      <h2>Play: kanały YouTube per język</h2>
      <p>
        W sekcji{" "}
        <strong>Rozwijaj odbiorców, Obecność w sklepie, Filmy w YouTube</strong>{" "}
        podpinasz do listingu kanały lub playlisty z ustawionym językiem, po
        jednym języku na kanał. Listing w czterech językach może mieć cztery
        powierzchnie wideo zamiast jednej. Bardzo mało kart to robi. Zasady:
      </p>
      <ul>
        <li>Filmy publiczne, choć same playlisty mogą być niepubliczne.</li>
        <li>
          Monetyzacja wyłączona, możliwość osadzania włączona, własność Twojej
          aplikacji lub gry.
        </li>
        <li>Bez Shorts i bez transmisji na żywo.</li>
        <li>
          Gry: wgrane w ciągu 90 dni, żeby pokazać się na karcie produktu, 21 dni
          dla zakładki Gry, 180 dni dla zakładki Aplikacje.
        </li>
        <li>
          Wymagana kwalifikacja do Premium growth tools i uprawnienie do
          zarządzania obecnością w sklepie.
        </li>
        <li>Jedna playlista dla aplikacji, kilka playlist lub kanałów dla gry.</li>
      </ul>
      <p>
        Play Console raportuje potem oglądających, klikalność i instalacje w oknie
        28 dni. Żywy przykład:{" "}
        <a
          href="https://play.google.com/store/apps/details?id=tech.ravenlab.buzzin"
          rel="noopener"
          target="_blank"
        >
          Buzzin: TV Party Game Show
        </a>
        . Play przyjmuje też parametr <code>referrer</code> w linkach do sklepu,
        więc taguj je przed udostępnieniem zamiast zgadywać, co przyniosło
        instalację.
      </p>

      <h2>Pułapka poziomego wideo w App Store</h2>
      <p>
        Apple pozwala, żeby App Preview było pionowe albo poziome, i nie ostrzega
        przed żadną z konsekwencji. Na karcie produktu poziome wideo nie prowadzi
        galerii, tylko trafia do osobnej sekcji <em>A Closer Look</em>:
      </p>
      <figure>
        <Image
          alt="Karta produktu Buzzin w App Store z poziomym wideo App Preview w osobnej sekcji A Closer Look, poniżej Co nowego i powyżej galerii pionowych zrzutów ekranu"
          className="mx-auto w-full max-w-[320px]"
          height={1348}
          sizes="(min-width: 640px) 320px, 100vw"
          src="/images/blog/app-store-landscape-app-preview.jpg"
          width={620}
        />
        <figcaption>
          Poziome wideo zepchnięte do własnego bloku, zamiast prowadzić galerię.
        </figcaption>
      </figure>
      <p>
        W wynikach wyszukiwania zajmuje całą szerokość wiersza, a zrzuty nie są
        pokazywane obok. W praktyce bywa gorzej: wiersz renderuje się zupełnie
        bez grafik. Niżej ta sama aplikacja stoi między dwoma konkurentami
        pokazującymi po trzy klatki i nie pokazuje nic poza ikoną i linijką
        tekstu.
      </p>
      <figure>
        <Image
          alt="Wyniki wyszukiwania w App Store, w których listing Buzzin pokazuje tylko ikonę, tytuł i ocenę, bez zrzutów ekranu, podczas gdy aplikacje nad nim i pod nim wyświetlają po trzy klatki"
          className="mx-auto w-full max-w-[320px]"
          height={1348}
          sizes="(min-width: 640px) 320px, 100vw"
          src="/images/blog/app-store-search-no-screenshots.jpg"
          width={620}
        />
        <figcaption>
          Ta sama aplikacja w wyszukiwarce. Sąsiedzi po trzy klatki, my linijka
          tekstu.
        </figcaption>
      </figure>
      <Callout title="Sprawdź to przed czymkolwiek innym" variant="warning">
        <p>
          Wyniki wyszukiwania to miejsce, gdzie porównują Cię obok siebie. Utrata
          kreacji tam kosztuje więcej, niż wideo miało zarobić na karcie
          produktu, a App Store Connect w żaden sposób Cię o tym nie ostrzeże.
        </p>
      </Callout>
      <ul>
        <li>
          <strong>Aplikacja pionowa, wideo pionowe.</strong> Stoi wtedy obok
          pierwszych zrzutów zamiast je zastępować, więc zachowujesz obie
          powierzchnie.
        </li>
        <li>
          <strong>Produkt naprawdę poziomy</strong> (gra na telewizor, wyścigi,
          edytor wideo): albo wsadź materiał w pionową ramkę z czarnymi pasami,
          żeby wiersz zachował galerię, albo świadomie zaakceptuj goły wiersz.
        </li>
        <li>
          <strong>Nigdy nie mieszaj orientacji</strong> w zestawie dla jednego
          urządzenia. Pionowy interfejs w poziomej ramce to udokumentowany powód
          odrzucenia w App Review, a{" "}
          <Link href="/pl/blog/app-store-connect-publikacja-aplikacji">
            wymagane rozmiary zrzutów
          </Link>{" "}
          warto sprawdzić przed eksportem.
        </li>
        <li>
          <strong>Sprawdzaj na czystym urządzeniu po każdej publikacji.</strong>{" "}
          Dla osób, które mają już aplikację, układ jest inny, więc własny telefon
          mówi Ci niewiele.
        </li>
      </ul>
      <p>
        Ta sama aplikacja w drugim sklepie:{" "}
        <a
          href="https://apps.apple.com/pl/app/buzzin-tv-party-game-show/id6787068440"
          rel="noopener"
          target="_blank"
        >
          Buzzin w App Store
        </a>
        .
      </p>

      <h2>Zasady rzemiosła, które decydują o wyniku</h2>
      <ul>
        <li>
          <strong>Klatka poster to zrzut ekranu.</strong> Autoodtwarzanie jest
          warunkowe, więc gdy się nie odpali, całe wideo zwija się do tego jednego
          kadru. Podpisz go, zadbaj o czytelność w miniaturze, nigdy czarny ekran
          z logotypem.
        </li>
        <li>
          <strong>Pierwsze trzy sekundy działają bez dźwięku.</strong> Produkt w
          pierwszej sekundzie, przekaz tekstem na ekranie, najlepszy moment na
          początek.
        </li>
        <li>
          <strong>15 do 20 sekund</strong>, mimo że Apple pozwala na 30. Krótsze
          pętle zostają obejrzane więcej niż raz.
        </li>
        <li>
          <strong>Lokalizuj.</strong> Wideo jest per lokalizacja w obu sklepach, a
          wypalony angielski tekst na niemieckim listingu to ten sam błąd co
          nieprzetłumaczony podpis.
        </li>
        <li>
          <strong>Trzymaj aktualne.</strong> App Preview z interfejsem sprzed
          dwóch redesignów jest gorsze niż brak wideo.
        </li>
      </ul>

      <h2>Zanim wydasz budżet</h2>
      <ol>
        <li>
          Jeśli pierwsze dwie klatki to surowe zrzuty bez podpisów, napraw
          najpierw je. To większa i tańsza wygrana.
        </li>
        <li>
          Jeśli nieruchoma klatka przekazuje to samo, wideo dokłada czas ładowania
          i ryzyko, nie dokładając informacji.
        </li>
        <li>
          Przy ciasnym budżecie najpierw iOS: tam wideo kupuje powierzchnię
          odkrywania, w Play zwraca się dopiero po kliknięciu.
        </li>
      </ol>
      <p>
        Potem testuj zamiast wierzyć w powyższe średnie. Product Page
        Optimization w App Store i eksperymenty karty produktu w Google Play są
        darmowe. Puść wideo przeciwko brakowi wideo, a osobno klatki poster
        przeciwko sobie. Daj każdemu testowi dwa tygodnie, zmieniaj jedną rzecz
        naraz i zapisuj, jak wyglądał listing, kiedy liczby drgnęły. Ta ostatnia
        część po cichu się sypie, a trzymanie zapisu tego, co i kiedy poszło, per
        język i per sklep, to spora część tego, po co zrobiliśmy{" "}
        <Link href="/pricing">AppBoard</Link>. Konfigurację obu konsol opisaliśmy
        w przewodnikach po{" "}
        <Link href="/pl/blog/app-store-connect-publikacja-aplikacji">
          App Store Connect
        </Link>{" "}
        i{" "}
        <Link href="/pl/blog/google-play-console-publikacja-aplikacji">
          Google Play Console
        </Link>
        .
      </p>
      <p>
        Najpierw jednak zrób tani test. Wyszukaj własną aplikację na telefonie,
        który nigdy jej nie instalował, i zobacz, co renderuje się w wierszu.
        Jeśli wraca linijka tekstu między dwoma konkurentami pokazującymi po trzy
        klatki, żadna jakość produkcji tego nie naprawi.
      </p>

      <h2>Najczęstsze pytania</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Zasady sklepów sprawdzone w dokumentacji Apple i Google w sierpniu 2026
        roku. Dane o konwersji pochodzą od dostawców narzędzi do testów A/B
        (SplitMetrics, StoreMaven, AppFollow) i są kierunkowe, nie recenzowane
        naukowo.
      </p>
    </ArticleLayout>
  );
}
