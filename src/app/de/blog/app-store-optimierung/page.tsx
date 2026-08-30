import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
import { BLOG_ARTICLES_DE } from "@/lib/blog";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "app-store-optimierung";
const EN_SLUG = "best-aso-tools";
const article = BLOG_ARTICLES_DE.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "App Store Optimierung 2026: die tatsächlich geltenden Zeichenlimits, deutsche Keywords und Umlaute in Bytes, kostenlose A/B-Tests in beiden Stores und ASO Tools mit Preisen.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "de_DE",
  path: `/de/blog/${SLUG}`,
  title: "App Store Optimierung (ASO): der Leitfaden für 2026",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "App Store Optimierung bezeichnet die Optimierung von Apps für die Suche und die Conversion in App Store und Google Play. Die Abkürzung ASO ist im deutschen Sprachraum allerdings mehrdeutig belegt: In den Suchergebnissen dominieren die abwertende Kurzform für Asozialer sowie die medizinischen Bedeutungen Antistreptolysin O und Antisense-Oligonukleotid, dazu Administrative Services Only. Für deutsche Inhalte empfiehlt sich deshalb konsequent der ausgeschriebene Begriff.",
    question: "Was bedeutet ASO im deutschen Sprachgebrauch?",
  },
  {
    answer:
      "Der Titel in Google Play hat 30 Zeichen. Er wurde 2021 von 50 auf 30 gekürzt. Zwei der bestplatzierten deutschsprachigen ASO-Seiten, bitfactory.io und appyourself.net, nennen bis heute 50 Zeichen. Ein Titel, der auf den alten Wert hin getextet wurde, passt schlicht nicht in das Feld.",
    question: "Wie lang darf der Titel in Google Play sein?",
  },
  {
    answer:
      "Das Keyword-Feld im App Store misst 100 Bytes. Die Angabe von 130 Zeichen, die sich auf appmarketinghub.de findet, ist doppelt falsch: Der Wert stimmt nicht und die Einheit auch nicht. In UTF-8 belegen ä, ö, ü und ß jeweils zwei Bytes, deutsche Keyword-Sätze füllen das Feld daher schneller als englische.",
    question: "Wie groß ist das Keyword-Feld im App Store?",
  },
  {
    answer:
      "Ja, und zwar ohne Zusatzkosten. Der App Store bietet Product Page Optimization für A/B-Tests von Icon, Screenshots und Vorschauvideos sowie Custom Product Pages für kampagnenspezifische Varianten. Google Play bietet Store-Listing-Experimente und Custom Store Listings. Keine der reichweitenstarken deutschen ASO-Seiten erwähnt diese Werkzeuge, obwohl sie die einzige Möglichkeit sind, Änderungen am eigenen Traffic zu messen statt zu raten.",
    question: "Kann ich die Produktseite kostenlos testen?",
  },
  {
    answer:
      "Der Einstieg liegt je nach Anbieter zwischen rund 10 und 80 US-Dollar im Monat: Appfigures ab 9,99 USD pro Monat, Mobile Action ab 15 USD pro Monat, AppTweak ab 79 USD pro Monat, App Radar ab 69 EUR pro Monat, AppBoard ist in der Beta kostenlos. Auffällig ist, dass keine der deutschen ASO-Seiten Tools überhaupt mit Preisen nennt.",
    question: "Was kosten ASO Tools?",
  },
  {
    answer:
      "App Annie wurde in data.ai umbenannt und nach der Übernahme im März 2024 in Sensor Tower integriert, existiert also nicht mehr als eigenes Produkt. Appsee wurde 2021 eingestellt. Wenn ein Ratgeber diese Werkzeuge noch als aktuelle Empfehlung führt, sind die übrigen Zahlen darin mit hoher Wahrscheinlichkeit ebenfalls veraltet.",
    question: "Welche bekannten ASO Tools gibt es nicht mehr?",
  },
  {
    answer:
      "Erste Bewegungen bei den Keyword-Positionen zeigen sich meist zwei bis vier Wochen nach der Indexierung neuer Metadaten. Ein belastbarer Effekt auf die Installationen braucht eher zwei bis drei Monate, eine ehrliche Bewertung des gesamten Aufwands ein Quartal. A/B-Tests an Icon oder erstem Screenshot brauchen typischerweise vier bis acht Wochen, bevor das Ergebnis etwas bedeutet.",
    question: "Wie lange dauert es, bis App Store Optimierung wirkt?",
  },
];

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout
      article={article}
      locale="de"
      translationHref={`/blog/${EN_SLUG}`}
    >
      <JsonLd data={buildFaqSchema(`/de/blog/${SLUG}`, FAQ, "de-DE")} />
      <p>
        Beginnen wir mit einer Beobachtung, die für deutsche Inhalte praktische
        Folgen hat:{" "}
        <strong>
          das bloße Kürzel &quot;ASO&quot; bedeutet im deutschen Netz nicht App
          Store Optimization.
        </strong>{" "}
        Die erste Ergebnisseite wird von der abwertenden Kurzform für
        &quot;Asozialer&quot; dominiert, dazu kommen die medizinischen
        Bedeutungen Antistreptolysin O und Antisense-Oligonukleotid sowie
        Administrative Services Only aus der Versicherungswelt. Selbst die
        Kombination &quot;aso app&quot; hilft nicht weiter: Das Topergebnis ist
        die ASO-App des Abfall-Service Osterholz, einer kommunalen
        Müllabfuhr-Anwendung.
      </p>
      <p>
        Deshalb wird der Begriff in diesem Text ausgeschrieben, und deshalb
        sollte auch jede deutsche Landingpage zum Thema{" "}
        <strong>App Store Optimierung</strong> als Hauptbegriff führen und ASO
        nur als Nebenform. Wer auf das Kürzel allein optimiert, konkurriert mit
        Blutwerten und einer Müllabfuhr.
      </p>

      <h2>Was in deutschen ASO-Ratgebern nachweislich falsch steht</h2>
      <p>
        Die zweite Beobachtung betrifft die Datenqualität der bestplatzierten
        deutschsprachigen Beiträge. Drei Beispiele, die sich unmittelbar auf die
        Arbeit auswirken:
      </p>
      <ul>
        <li>
          <strong>bitfactory.io und appyourself.net</strong> geben das Titellimit
          in Google Play mit 50 Zeichen an. Es liegt seit 2021 bei 30.
        </li>
        <li>
          <strong>appmarketinghub.de</strong> gibt das Keyword-Feld unter iOS mit
          130 Zeichen an. Es sind 100 Bytes, also eine andere Zahl und eine andere
          Einheit.
        </li>
        <li>
          <strong>itportal24</strong>, der frischeste deutsche Beitrag aus dem
          Januar 2026, liefert einen leeren FAQ-Bereich aus, also eine Struktur
          ohne Inhalt.
        </li>
      </ul>
      <p>
        Hinzu kommt ein Muster: Keine der reichweitenstarken deutschen Seiten
        nennt ASO Tools mit Preisen, und keine erwähnt die kostenlosen
        Testwerkzeuge der beiden Stores. Beides steht weiter unten.
      </p>

      <h2>Die tatsächlich geltenden Limits</h2>
      <table>
        <thead>
          <tr>
            <th>Feld</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name der App</td>
            <td>30 Zeichen</td>
            <td>30 Zeichen</td>
          </tr>
          <tr>
            <td>Untertitel oder Kurzbeschreibung</td>
            <td>Untertitel, 30 Zeichen</td>
            <td>Kurzbeschreibung, 80 Zeichen</td>
          </tr>
          <tr>
            <td>Eigenes Keyword-Feld</td>
            <td>Ja, 100 Bytes, nicht sichtbar</td>
            <td>Nicht vorhanden</td>
          </tr>
          <tr>
            <td>Beschreibung</td>
            <td>4000 Zeichen</td>
            <td>4000 Zeichen</td>
          </tr>
          <tr>
            <td>Promotional Text</td>
            <td>170 Zeichen, ohne Build änderbar</td>
            <td>Kein Gegenstück</td>
          </tr>
          <tr>
            <td>Screenshots</td>
            <td>1 bis 10 pro Lokalisierung</td>
            <td>Mindestens 2, höchstens 8 je Gerätetyp</td>
          </tr>
        </tbody>
      </table>
      <p>
        Die dritte Zeile bestimmt die gesamte Textstrategie. Im App Store liegt
        ein verstecktes Keyword-Feld neben der Beschreibung, die Beschreibung
        selbst wird für die Suche nicht indexiert. Sie darf also vollständig für
        Menschen geschrieben werden. In Google Play gibt es{" "}
        <strong>kein Keyword-Feld</strong>, die Store-Suche zieht ihre Begriffe
        aus Titel, Kurzbeschreibung und Beschreibung. Derselbe Text in beide
        Stores zu kopieren ist deshalb kein Stilproblem, sondern ein
        struktureller Fehler.
      </p>

      <h2>Deutsche Keywords: Bytes und Komposita</h2>
      <p>
        Zwei Eigenheiten machen deutsche Keyword-Sätze schwieriger als englische.
      </p>
      <p>
        <strong>Erstens die Bytes.</strong> Das Keyword-Feld misst 100 Bytes. Ein
        normaler lateinischer Buchstabe belegt in UTF-8 ein Byte, ä, ö, ü und ß
        belegen jeweils zwei. &quot;Größe&quot; sind 5 Zeichen und 7 Bytes,
        &quot;Ernährungstagebuch&quot; sind 18 Zeichen und 19 Bytes. Ein
        Zeichenzähler im Editor führt hier systematisch in die Irre.
      </p>
      <p>
        <strong>Zweitens die Komposita.</strong> Deutsche Nutzer suchen sowohl
        nach zusammengesetzten Wörtern als auch nach getrennten Varianten, etwa
        &quot;Haushaltsbuch&quot; gegenüber &quot;Haushalt Buch&quot;. Beide
        Formen in das Feld zu schreiben kostet Bytes, die an anderer Stelle
        fehlen. Weder Apple noch Google veröffentlichen, wie sie Wortbestandteile
        zerlegen, wer hier Gewissheit behauptet, behauptet zu viel. Praktikabel
        ist folgende Reihenfolge:
      </p>
      <ol>
        <li>
          <strong>Grundform wählen</strong>, dazu die Variante, die Nutzer real
          eintippen. Das ist häufig nicht dasselbe.
        </li>
        <li>
          <strong>Nichts doppeln</strong>, was bereits im Namen oder im Untertitel
          steht. Apple indexiert die Summe der Felder.
        </li>
        <li>
          <strong>Umlaute einzeln entscheiden.</strong> Ein Teil der Nutzer tippt
          ohne Umlaut, das ist eine Messfrage, keine Grundsatzfrage.
        </li>
        <li>
          <strong>Echte Suchanfragen prüfen</strong> über eine kleine
          Apple-Ads-Kampagne mit Suchbegriffsabgleich. Das ist die einzige Quelle
          tatsächlicher Suchbegriffe aus dem deutschen Storefront, alles andere
          sind Modelle von Drittanbietern.
        </li>
      </ol>

      <h2>Rankingfaktoren nach realem Gewicht</h2>
      <ol>
        <li>
          <strong>Name der App.</strong> Stärkstes Feld in beiden Stores, 30
          Zeichen für Marke und wichtigsten Begriff.
        </li>
        <li>
          <strong>Untertitel bzw. Kurzbeschreibung.</strong> Zweitstärkster
          indexierter Text und zugleich das Erste, was gelesen wird.
        </li>
        <li>
          <strong>Keyword-Feld im App Store, Beschreibung in Google Play.</strong>{" "}
          Zwei verschiedene Mechanismen für dasselbe Ziel.
        </li>
        <li>
          <strong>Conversion von Impression zu Installation.</strong> Das ist der
          Unterschied zu klassischem SEO: Der Store misst, ob Nutzer nach dem
          Sehen der Produktseite installieren, und bezieht das in das Ranking ein.
          Icon und die ersten beiden Screenshots sind damit Rankingfaktoren und
          nicht nur Gestaltung.
        </li>
        <li>
          <strong>Bewertungen und Anzahl der Reviews.</strong> Wirken auf Ranking
          und Conversion gleichzeitig.
        </li>
        <li>
          <strong>Aktualisierungsfrequenz.</strong> Signal dafür, dass die App
          gepflegt wird.
        </li>
      </ol>

      <h2>Kostenlose A/B-Tests, die keine deutsche Seite erwähnt</h2>
      <p>
        Das ist die größte inhaltliche Lücke im deutschen Netz. Beide Stores
        liefern Testwerkzeuge mit, sie kosten nichts und sind der einzige Weg,
        eine Änderung am eigenen Traffic zu bewerten.
      </p>
      <table>
        <thead>
          <tr>
            <th>Werkzeug</th>
            <th>Store</th>
            <th>Zweck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Page Optimization</td>
            <td>App Store</td>
            <td>A/B-Test von Icon, Screenshots und Vorschauvideos</td>
          </tr>
          <tr>
            <td>Custom Product Pages</td>
            <td>App Store</td>
            <td>Eigene Produktseiten je Kampagne oder Zielgruppe</td>
          </tr>
          <tr>
            <td>Store-Listing-Experimente</td>
            <td>Google Play</td>
            <td>A/B-Test von Icon, Grafiken und Texten</td>
          </tr>
          <tr>
            <td>Custom Store Listings</td>
            <td>Google Play</td>
            <td>Varianten je Land, Quelle oder Zielgruppe</td>
          </tr>
        </tbody>
      </table>
      <p>
        Eine Regel dazu, gegen die fast jeder verstößt: eine Variable pro Test,
        und den Test zu Ende laufen lassen. Für Icon oder ersten Screenshot sind
        vier bis acht Wochen realistisch, bevor ein Ergebnis belastbar ist. Ein
        Test, der nach fünf Tagen abgebrochen wird, weil Variante B vorn liegt,
        ist kein Ergebnis, sondern Rauschen.
      </p>

      <h2>ASO Tools mit Preisen</h2>
      <p>
        Deutsche Ratgeber nennen Tools ohne Preise, was die Auswahl unmöglich
        macht. Die folgenden Einstiegspreise stammen von den Anbieterseiten.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Einstiegspreis</th>
            <th>Stärke</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appfigures</td>
            <td>ab 9,99 USD pro Monat</td>
            <td>Günstigster sinnvoller Einstieg, Umsätze und Rankings zusammen</td>
          </tr>
          <tr>
            <td>Mobile Action</td>
            <td>ab 15 USD pro Monat</td>
            <td>Verbindung von Apple-Ads-Kampagnen mit organischem Traffic</td>
          </tr>
          <tr>
            <td>AppTweak</td>
            <td>ab 79 USD pro Monat</td>
            <td>Tiefste Keyword-Daten für beide Stores</td>
          </tr>
          <tr>
            <td>App Radar</td>
            <td>ab 69 EUR pro Monat</td>
            <td>Metadaten bearbeiten und veröffentlichen an einer Stelle</td>
          </tr>
          <tr>
            <td>AppBoard</td>
            <td>in der Beta kostenlos</td>
            <td>Listings beider Stores, Änderungshistorie, Screenshot-Editor</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ebenso wichtig sind die Namen, die weiterhin empfohlen werden, obwohl es
        die Produkte nicht mehr gibt: <strong>App Annie</strong> wurde in data.ai
        umbenannt und nach der Übernahme im März 2024 in Sensor Tower integriert.{" "}
        <strong>Appsee</strong> wurde 2021 eingestellt. Wenn ein Beitrag eines
        davon als aktuelle Empfehlung führt, stammen seine übrigen Zahlen
        vermutlich aus derselben Zeit.
      </p>
      <p>
        Ein kostenloser Startpunkt existiert ohnehin: Beide Store-Konsolen zeigen
        Impressions, Produktseitenaufrufe und Conversion, und eine kleine
        Apple-Ads-Kampagne liefert echte Suchbegriffe aus dem deutschen
        Storefront. Wer Metadaten, Historie und Screenshots an einer Stelle führen
        will, findet die Konditionen auf der{" "}
        <Link href="/pricing">Preisseite von AppBoard</Link>.
      </p>

      <h2>Plan für die ersten 30 Tage</h2>
      <ol>
        <li>
          <strong>Woche 1.</strong> Limits korrigieren. Titel auf 30 Zeichen
          prüfen, Keyword-Feld in Bytes nachrechnen statt in Zeichen.
        </li>
        <li>
          <strong>Woche 1.</strong> Kleine Apple-Ads-Kampagne mit
          Suchbegriffsabgleich starten und echte Anfragen sammeln.
        </li>
        <li>
          <strong>Woche 2.</strong> Name, Untertitel und Kurzbeschreibung je Store
          getrennt neu schreiben, ohne Wortdopplungen.
        </li>
        <li>
          <strong>Woche 2.</strong> Die ersten beiden Screenshots austauschen,
          dort entscheidet sich der größte Teil der Conversion.
        </li>
        <li>
          <strong>Woche 3.</strong> Einen Test starten, Product Page Optimization
          oder ein Store-Listing-Experiment, mit genau einer Variablen.
        </li>
        <li>
          <strong>Woche 4 und danach.</strong> Nichts anfassen und Daten abwarten.
          Das ist der unbeliebteste Schritt.
        </li>
      </ol>

      <h2>Was man lassen sollte</h2>
      <ul>
        <li>
          <strong>Keine Installationen, Bewertungen oder Reviews kaufen.</strong>{" "}
          Das verstößt gegen die Richtlinien beider Stores und reicht bis zur
          Entfernung der App.
        </li>
        <li>
          <strong>Keywords nicht übersetzen.</strong> Eine grammatisch korrekte
          Übersetzung kann null Suchvolumen haben. Jeder Markt bekommt einen
          eigenen Satz.
        </li>
        <li>
          <strong>Nicht fünf Dinge gleichzeitig ändern.</strong> Danach ist nicht
          mehr feststellbar, was gewirkt hat.
        </li>
        <li>
          <strong>Nicht global messen.</strong> Eine gemittelte Conversion
          verdeckt das Ergebnis. Auswertung pro Land.
        </li>
        <li>
          <strong>Reviews nicht unbeantwortet lassen.</strong> Der einzige Teil der
          App Store Optimierung, der vollständig in eigener Hand liegt.
        </li>
      </ul>

      <h2>Häufige Fragen</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <h2>Weiterlesen</h2>
      <p>
        Die technische Seite beider Stores steht getrennt: die Kontotypen, die
        12-Tester-Regel und die Grafikvorgaben im Leitfaden zur{" "}
        <Link href="/de/blog/google-play-console-app-veroeffentlichen">
          Google Play Console
        </Link>
        , die API-Keys, Metadatenlimits und Screenshot-Größen im Leitfaden zu{" "}
        <Link href="/de/blog/app-store-connect-app-veroeffentlichen">
          App Store Connect
        </Link>
        . Wer abwägt, ob eine Agentur die bessere Wahl ist, findet die
        veröffentlichten Euro-Preise im Beitrag zu den{" "}
        <Link href="/de/blog/aso-agentur-kosten">ASO-Kosten</Link>.
      </p>
      <p>
        Limits und Store-Vorgaben wurden im August 2026 gegen die Dokumentation
        von Apple und Google geprüft. Wer diesen Text deutlich später liest,
        prüft Titellimit und Screenshot-Größen vor dem Release noch einmal nach.
      </p>
    </ArticleLayout>
  );
}
