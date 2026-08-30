import { LegalPageLayout } from "@/components/layout";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata, SITE_NAME } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const LAST_UPDATED = "8 lipca 2026";
const CONTACT_EMAIL = "contact@appboard.dev";

const PL_TITLE = "Regulamin";
const PL_DESCRIPTION =
  "Warunki korzystania z AppBoard, platformy ASO do zarządzania listingami w App Store i Google Play z jednego panelu.";

export const metadata: Metadata = buildPageMetadata({
  description: PL_DESCRIPTION,
  languages: buildAlternates("/terms"),
  locale: "pl_PL",
  path: "/pl/terms",
  title: PL_TITLE,
});

export default function TermsOfServicePagePl(): JSX.Element {
  return (
    <LegalPageLayout
      lastUpdated={LAST_UPDATED}
      locale="pl"
      subtitle="Niniejszy regulamin określa zasady dostępu do AppBoard i korzystania z niego. Korzystając z Usługi, akceptujesz te warunki."
      title={PL_TITLE}
    >
      <p>
        <strong>Uwaga:</strong> ta strona jest tłumaczeniem angielskiego
        oryginału. W razie rozbieżności wiążąca jest{" "}
        <a href="/terms">wersja angielska</a>.
      </p>

      <h2>1. Akceptacja warunków</h2>
      <p>
        Niniejszy regulamin (&quot;Warunki&quot;) stanowi wiążącą umowę między
        Tobą a {SITE_NAME} (&quot;AppBoard&quot;, &quot;my&quot;,
        &quot;nas&quot;). Zakładając konto lub korzystając z Usługi,
        akceptujesz niniejsze Warunki. Jeśli się na nie nie zgadzasz, nie
        korzystaj z Usługi.
      </p>

      <h2>2. Usługa</h2>
      <p>
        AppBoard to platforma App Store Optimization, która pozwala zarządzać
        listingami w sklepach z aplikacjami, screenshotami, metadanymi, opiniami
        oraz produktami in-app dla Apple App Store i Google Play z jednego
        panelu. Z czasem możemy dodawać, zmieniać lub usuwać funkcje.
      </p>

      <h2>3. Konta</h2>
      <p>
        Odpowiadasz za informacje, które przekazujesz, za zachowanie poufności
        swoich danych uwierzytelniających, w tym hasła do sejfu, oraz za
        wszelką aktywność w ramach Twojego konta. Aby korzystać z Usługi, musisz
        mieć ukończone co najmniej 16 lat i posiadać zdolność do zawarcia
        wiążącej umowy.
      </p>
      <p>
        <strong>Nie możemy odzyskać Twojego hasła do sejfu.</strong> Ponieważ
        dane dostępowe do sklepów są szyfrowane end-to-end, w razie utraty hasła
        nie możemy przywrócić dostępu do zaszyfrowanych danych, a Ty możesz być
        zmuszony zresetować sejf i ponownie wprowadzić swoje dane dostępowe.
      </p>

      <h2>4. Podłączone sklepy i autoryzacja</h2>
      <p>
        Podłączając sklep, upoważniasz AppBoard do dostępu do tego sklepu i do
        działania w nim w Twoim imieniu przy użyciu przekazanych przez Ciebie
        danych dostępowych, na przykład do odczytywania, edytowania i
        publikowania danych listingu zgodnie z Twoimi poleceniami. Oświadczasz,
        że jesteś uprawniony do udzielenia takiego dostępu i że korzystasz z
        Usługi zgodnie z warunkami Apple App Store Connect oraz Google Play.
        Twoje relacje z Apple i Google podlegają odpowiednim umowom zawartym z
        tymi podmiotami.
      </p>

      <h2>5. Dozwolone korzystanie</h2>
      <p>Zobowiązujesz się nie:</p>
      <ul>
        <li>
          Korzystać z Usługi z naruszeniem prawa lub praw podmiotów trzecich.
        </li>
        <li>
          Przesyłać ani publikować treści niezgodnych z prawem, naruszających
          cudze prawa lub takich, do których przesłania do sklepu nie jesteś
          uprawniony.
        </li>
        <li>
          Podejmować prób uzyskania nieuprawnionego dostępu do Usługi, innych
          kont lub naszych systemów ani zakłócać ich działania.
        </li>
        <li>
          Poddawać Usługi inżynierii wstecznej, odsprzedawać jej ani nadużywać
          Usługi lub jej limitów zapytań.
        </li>
      </ul>

      <h2>6. Twoje treści</h2>
      <p>
        Zachowujesz wszelkie prawa do treści i danych dostępowych, które
        przekazujesz. Udzielasz nam ograniczonej licencji na hostowanie,
        przetwarzanie i przesyłanie tych treści wyłącznie w celu świadczenia Ci
        Usługi. Odpowiadasz za prawidłowość i zgodność z prawem treści, które
        publikujesz w sklepach.
      </p>

      <h2>7. Funkcje AI</h2>
      <p>
        Sugestie generowane przez AI stanowią wyłącznie pomoc i mogą być
        nieprawidłowe. Odpowiadasz za sprawdzenie i zatwierdzenie każdej treści
        przed jej opublikowaniem w sklepie.
      </p>

      <h2>8. Opłaty</h2>
      <p>
        AppBoard jest obecnie udostępniany bezpłatnie w wersji beta. Jeśli
        wprowadzimy plany płatne, przekażemy stosowną informację oraz
        obowiązujące warunki cenowe i rozliczeniowe, zanim zaczną obowiązywać
        jakiekolwiek opłaty.
      </p>

      <h2>9. Własność intelektualna</h2>
      <p>
        Usługa, w tym jej oprogramowanie, projekt graficzny i znaki towarowe,
        stanowi własność AppBoard i jego licencjodawców oraz jest chroniona
        prawem. Niniejsze Warunki nie przyznają Ci żadnych praw do naszej
        własności intelektualnej poza ograniczonym prawem do korzystania z
        Usługi.
      </p>

      <h2>10. Wyłączenia odpowiedzialności</h2>
      <p>
        Usługa jest udostępniana w stanie &quot;takim, jaka jest&quot; oraz
        &quot;w miarę dostępności&quot;, bez jakichkolwiek gwarancji, wyraźnych
        ani dorozumianych, w tym gwarancji przydatności do określonego celu oraz
        nienaruszania praw osób trzecich. Nie gwarantujemy, że Usługa będzie
        działać nieprzerwanie i bezbłędnie ani że publikacja w sklepie zawsze
        zakończy się powodzeniem.
      </p>

      <h2>11. Ograniczenie odpowiedzialności</h2>
      <p>
        W maksymalnym zakresie dozwolonym przez prawo AppBoard nie ponosi
        odpowiedzialności za jakiekolwiek szkody pośrednie, uboczne, szczególne,
        następcze ani odszkodowania o charakterze karnym, ani za jakąkolwiek
        utratę danych, przychodów lub zysków wynikającą z korzystania przez
        Ciebie z Usługi.
      </p>

      <h2>12. Rozwiązanie</h2>
      <p>
        W każdej chwili możesz zaprzestać korzystania z Usługi i usunąć swoje
        konto. Możemy zawiesić lub zakończyć Twój dostęp, jeśli naruszysz
        niniejsze Warunki lub w celu ochrony Usługi. Z chwilą rozwiązania Twoje
        prawo do korzystania z Usługi wygasa, a my możemy usunąć Twoje dane w
        sposób opisany w naszej{" "}
        <a href="/pl/policy">Polityce prywatności</a>.
      </p>

      <h2>13. Zmiany niniejszych warunków</h2>
      <p>
        Możemy okresowo aktualizować niniejsze Warunki. Gdy to zrobimy, zmienimy
        widoczną powyżej datę &quot;Ostatnia aktualizacja&quot; oraz, w
        uzasadnionych przypadkach, poinformujemy Cię o zmianach. Dalsze
        korzystanie z Usługi po wejściu zmian w życie oznacza akceptację
        zaktualizowanych Warunków.
      </p>

      <h2>14. Kontakt</h2>
      <p>
        Masz pytania dotyczące niniejszych Warunków? Skontaktuj się z nami pod
        adresem <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPageLayout>
  );
}
