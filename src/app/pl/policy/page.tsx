import { LegalPageLayout } from "@/components/layout";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata, SITE_NAME } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const LAST_UPDATED = "8 lipca 2026";
const CONTACT_EMAIL = "contact@appboard.dev";

const PL_TITLE = "Polityka prywatności";
const PL_DESCRIPTION =
  "Jak AppBoard zbiera, wykorzystuje i chroni Twoje dane, w tym szyfrowane end-to-end dane dostępowe do App Store Connect i Google Play.";

export const metadata: Metadata = buildPageMetadata({
  description: PL_DESCRIPTION,
  languages: buildAlternates("/policy"),
  locale: "pl_PL",
  path: "/pl/policy",
  title: PL_TITLE,
});

export default function PrivacyPolicyPagePl(): JSX.Element {
  return (
    <LegalPageLayout
      lastUpdated={LAST_UPDATED}
      locale="pl"
      subtitle="Ta polityka wyjaśnia, jakie dane zbiera AppBoard, w jakim celu i w jaki sposób je zabezpieczamy."
      title={PL_TITLE}
    >
      <p>
        {SITE_NAME} (&quot;AppBoard&quot;, &quot;my&quot;,
        &quot;nas&quot;) udostępnia platformę App Store Optimization (ASO),
        która pomaga zarządzać listingami w sklepach z aplikacjami,
        screenshotami, metadanymi, opiniami oraz produktami in-app dla Apple App
        Store i Google Play z jednego panelu. Niniejsza Polityka prywatności
        opisuje, w jaki sposób postępujemy z Twoimi informacjami, gdy korzystasz
        z naszej strony internetowej i aplikacji (łącznie:
        &quot;Usługa&quot;).
      </p>

      <p>
        <strong>Uwaga:</strong> ta strona jest tłumaczeniem angielskiego
        oryginału. W razie rozbieżności wiążąca jest{" "}
        <a href="/policy">wersja angielska</a>.
      </p>

      <h2>Informacje, które zbieramy</h2>
      <ul>
        <li>
          <strong>Informacje o koncie.</strong> Gdy zakładasz konto, zbieramy
          Twoje imię i nazwisko, adres e-mail oraz dane uwierzytelniające (hasła
          są przechowywane wyłącznie w postaci solonych skrótów).
        </li>
        <li>
          <strong>Dane dostępowe do sklepów.</strong> Aby zarządzać Twoimi
          listingami, przechowujemy przekazane przez Ciebie dane dostępowe do
          API: klucze konta serwisowego Google Play oraz klucze API App Store
          Connect. Są one trzymane w sejfie szyfrowanym end-to-end (zobacz
          sekcję &quot;Jak chronimy dane dostępowe do sklepów&quot; poniżej).
        </li>
        <li>
          <strong>Dane aplikacji.</strong> Metadane, które synchronizujemy z
          podłączonych sklepów w Twoim imieniu: tytuły aplikacji, opisy,
          screenshoty, kategorie, opinie, produkty in-app oraz powiązaną treść
          listingów.
        </li>
        <li>
          <strong>Treści, które tworzysz.</strong> Wersje robocze, notatki,
          profile ASO oraz inne treści dodawane przez Ciebie w Usłudze.
        </li>
        <li>
          <strong>Dane o użytkowaniu i dane techniczne.</strong> Dane z logów,
          takie jak adres IP, typ przeglądarki, odwiedzone strony i znaczniki
          czasu, wykorzystywane do działania i zabezpieczania Usługi.
        </li>
      </ul>

      <h2>Jak wykorzystujemy Twoje informacje</h2>
      <ul>
        <li>Aby udostępniać, obsługiwać i utrzymywać Usługę.</li>
        <li>
          Aby łączyć się z Apple App Store i Google Play w Twoim imieniu oraz
          synchronizować, edytować i publikować dane Twoich listingów zgodnie z
          Twoimi poleceniami.
        </li>
        <li>
          Aby generować sugestie wspierane przez AI dla listingów, odpowiedzi i
          researchu, gdy korzystasz z tych funkcji.
        </li>
        <li>
          Aby zabezpieczać Usługę, zapobiegać nadużyciom i rozwiązywać problemy.
        </li>
        <li>
          Aby komunikować się z Tobą w sprawach dotyczących Twojego konta i
          aktualizacji Usługi.
        </li>
      </ul>

      <h2>Jak chronimy dane dostępowe do sklepów</h2>
      <p>
        Dane dostępowe do sklepów są szyfrowane w{" "}
        <strong>sejfie szyfrowanym end-to-end</strong>. Twoje dane dostępowe są
        szyfrowane kluczem wyprowadzonym z hasła (passphrase), które znasz tylko
        Ty; to hasło nigdy nie jest przesyłane na nasze serwery ani na nich
        przechowywane. W rezultacie nie możemy odczytać Twoich danych dostępowych
        do sklepów, a samo naruszenie bezpieczeństwa naszej bazy danych ich nie
        ujawni. Działania na Twoich sklepach wymagają odblokowania sejfu Twoim
        hasłem podczas aktywnej sesji.
      </p>

      <h2>Usługi podmiotów trzecich</h2>
      <p>
        Dane udostępniamy podmiotom trzecim wyłącznie w zakresie niezbędnym do
        działania Usługi:
      </p>
      <ul>
        <li>
          <strong>Apple App Store Connect</strong> oraz{" "}
          <strong>Google Play</strong>: aby odczytywać i publikować dane Twoich
          listingów przy użyciu przekazanych przez Ciebie danych dostępowych.
        </li>
        <li>
          <strong>Dostawcy AI</strong>: gdy korzystasz z funkcji AI, odpowiedni
          tekst (na przykład wersja robocza listingu lub opinia) jest wysyłany
          do naszego dostawcy AI w celu wygenerowania odpowiedzi. Treści te nie
          są wykorzystywane do trenowania modeli podmiotów trzecich.
        </li>
        <li>
          <strong>Dostawcy infrastruktury i hostingu</strong>: aby uruchamiać
          Usługę i przechowywać jej dane.
        </li>
      </ul>
      <p>
        Korzystanie przez Ciebie z podłączonych sklepów podlega także
        odpowiednim regulaminom i politykom prywatności Apple oraz Google.
      </p>

      <h2>Jak udostępniamy informacje</h2>
      <p>
        Nie sprzedajemy Twoich danych osobowych. Udostępniamy je wyłącznie
        dostawcom usług opisanym powyżej, gdy wymaga tego prawo lub w celu
        ochrony praw, bezpieczeństwa oraz ochrony AppBoard i jego użytkowników.
      </p>

      <h2>Przechowywanie danych</h2>
      <p>
        Przechowujemy Twoje informacje tak długo, jak długo Twoje konto jest
        aktywne lub jak długo jest to potrzebne do świadczenia Usługi. W każdej
        chwili możesz usunąć podłączone sklepy i dane dostępowe, a także możesz
        zażądać usunięcia konta; wówczas usuwamy lub anonimizujemy Twoje dane,
        z wyjątkiem sytuacji, w których ich zachowanie jest wymagane przez
        prawo.
      </p>

      <h2>Twoje prawa</h2>
      <p>
        W zależności od miejsca Twojego pobytu możesz mieć prawo dostępu do
        swoich danych osobowych, ich sprostowania, wyeksportowania lub
        usunięcia, a także prawo do wniesienia sprzeciwu wobec określonych
        operacji przetwarzania lub do ich ograniczenia. Aby skorzystać z tych
        praw, skontaktuj się z nami pod adresem{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Bezpieczeństwo</h2>
      <p>
        Stosujemy standardowe w branży środki ochrony, w tym szyfrowanie w
        trakcie przesyłania, szyfrowanie w spoczynku oraz szyfrowany end-to-end
        sejf na dane dostępowe, aby chronić Twoje dane. Żadna metoda przesyłania
        ani przechowywania danych nie jest w pełni bezpieczna, ale nieustannie
        pracujemy nad zabezpieczeniem Twoich informacji.
      </p>

      <h2>Pliki cookie</h2>
      <p>
        Używamy ściśle niezbędnych plików cookie, aby utrzymać Twoje zalogowanie
        i zapewnić działanie Usługi. Nie używamy reklamowych plików cookie.
      </p>

      <h2>Prywatność dzieci</h2>
      <p>
        Usługa jest przeznaczona dla deweloperów i firm i nie jest kierowana do
        dzieci poniżej 16. roku życia. Nie zbieramy świadomie danych osobowych
        od dzieci.
      </p>

      <h2>Zmiany niniejszej polityki</h2>
      <p>
        Możemy okresowo aktualizować niniejszą Politykę prywatności. Gdy to
        zrobimy, zmienimy widoczną powyżej datę &quot;Ostatnia
        aktualizacja&quot; oraz, w uzasadnionych przypadkach, poinformujemy Cię
        o zmianach.
      </p>

      <h2>Kontakt</h2>
      <p>
        Jeśli masz pytania dotyczące niniejszej Polityki prywatności lub swoich
        danych, skontaktuj się z nami pod adresem{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPageLayout>
  );
}
