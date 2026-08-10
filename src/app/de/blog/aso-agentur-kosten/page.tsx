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

const SLUG = "aso-agentur-kosten";
const EN_SLUG = "app-store-optimization-services";
const article = BLOG_ARTICLES_DE.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Was kostet ASO 2026: veröffentlichte Agenturpreise in Euro von BlueBranch, App Marketing Hub und Die App Agentur, der Aufwand in Eigenregie und die Warnsignale beim Einkauf.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "de_DE",
  path: `/de/blog/${SLUG}`,
  title: "Was kostet ASO? Agentur, Tools oder selbst machen (2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "Die veröffentlichten Preise deutscher Anbieter liegen zwischen 500 und 2.500 EUR pro Monat. Die App Agentur nennt Pakete ab 500 EUR, 1.200 EUR und 2.500 EUR monatlich. BlueBranch nennt 900 EUR für ASO-Wachstum und 1.800 EUR für ASO-Skalierung. App Marketing Hub nennt 900 EUR für ASO Starter und 1.800 EUR für ASO Plus, jeweils netto. Alle Angaben stammen von den Anbieterseiten.",
    question: "Was kostet eine ASO Agentur pro Monat?",
  },
  {
    answer:
      "Ja, in zwei Fällen. BlueBranch nennt eine einmalige Setup-Gebühr von 990 EUR und eine Mindestlaufzeit von sechs Monaten, dazu ein ASO-Audit für einmalig 1.490 EUR. App Marketing Hub gibt an, keine Setup-Gebühr zu erheben. Bei einem Sechsmonatsvertrag über ASO-Wachstum bei BlueBranch ergibt sich damit eine Mindestbindung von 6.390 EUR, also 5.400 EUR Honorar plus 990 EUR Setup.",
    question: "Gibt es zusätzlich Einrichtungsgebühren?",
  },
  {
    answer:
      "Ein einmaliges Audit liefert eine Bestandsaufnahme mit Empfehlungen, ändert aber nichts an den Listings. BlueBranch veröffentlicht dafür 1.490 EUR einmalig. Sinnvoll ist das, wenn intern Kapazität für die Umsetzung besteht und nur die Richtung fehlt. Fehlt die Umsetzungskapazität, bleibt das Audit ein PDF ohne Wirkung.",
    question: "Lohnt sich ein einmaliges ASO-Audit?",
  },
  {
    answer:
      "Nicht alle. Claneo und AvantGrade veröffentlichen keine Preise und arbeiten auf Anfrage. Wer vergleichen will, sollte bei Anbietern ohne Preisliste im ersten Gespräch nach Mindestlaufzeit, Setup-Gebühr und dem konkreten monatlichen Leistungsumfang in Stunden fragen, sonst sind Angebote nicht vergleichbar.",
    question: "Veröffentlichen alle Agenturen ihre Preise?",
  },
  {
    answer:
      "In Eigenregie fallen vor allem Zeit und Toolkosten an. Realistisch sind ein bis zwei Wochen Anfangsaufwand für Keyword-Recherche, Metadaten und Screenshots pro Markt sowie mehrere Stunden pro Monat für Pflege, Review-Antworten und Testauswertung. Toolseitig beginnt der Markt bei rund 10 USD pro Monat, gemessen an den Einstiegspreisen der gängigen Anbieter.",
    question: "Was kostet ASO in Eigenregie?",
  },
  {
    answer:
      "Garantierte Rankings, Abrechnung pro Installation oder pro Bewertung und Ergebnisversprechen innerhalb weniger Tage. Alle drei setzen voraus, dass jemand die Store-Algorithmen kontrolliert, was niemand tut. Der Kauf von Installationen, Bewertungen oder Reviews verstößt zudem gegen die Richtlinien beider Stores und kann zur Entfernung der App führen.",
    question: "Welche Warnsignale gibt es bei ASO-Anbietern?",
  },
  {
    answer:
      "Erste Bewegungen bei Keyword-Positionen zeigen sich meist zwei bis vier Wochen nach der Indexierung, ein belastbarer Effekt auf Installationen eher nach zwei bis drei Monaten. Eine Mindestlaufzeit von sechs Monaten, wie sie BlueBranch nennt, entspricht damit ungefähr dem Zeitraum, in dem sich ein Ergebnis überhaupt beurteilen lässt.",
    question: "Ab wann ist der Erfolg einer ASO-Zusammenarbeit messbar?",
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
        Der deutsche Markt hat gegenüber vielen anderen einen praktischen
        Vorteil:{" "}
        <strong>
          mehrere Agenturen veröffentlichen tatsächlich Preise in Euro.
        </strong>{" "}
        Damit lässt sich rechnen, statt zu schätzen. Dieser Beitrag stellt die
        veröffentlichten Zahlen nebeneinander, beschreibt, was dafür geliefert
        wird, rechnet den Aufwand in Eigenregie gegen und benennt die Signale, bei
        denen ein Angebot besser unbeantwortet bleibt. Alle genannten Preise
        stammen von den jeweiligen Anbieterseiten und sind als
        Anbieterangaben gekennzeichnet.
      </p>

      <h2>Veröffentlichte Preise deutscher Anbieter</h2>
      <table>
        <thead>
          <tr>
            <th>Anbieter</th>
            <th>Leistung</th>
            <th>Preis laut Anbieter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BlueBranch GmbH</td>
            <td>ASO-Audit</td>
            <td>1.490 EUR einmalig</td>
          </tr>
          <tr>
            <td>BlueBranch GmbH</td>
            <td>ASO-Wachstum</td>
            <td>900 EUR pro Monat</td>
          </tr>
          <tr>
            <td>BlueBranch GmbH</td>
            <td>ASO-Skalierung</td>
            <td>1.800 EUR pro Monat</td>
          </tr>
          <tr>
            <td>BlueBranch GmbH</td>
            <td>Setup und Vertragsbindung</td>
            <td>990 EUR einmalig, Mindestlaufzeit 6 Monate</td>
          </tr>
          <tr>
            <td>App Marketing Hub</td>
            <td>ASO Starter</td>
            <td>900 EUR pro Monat, netto</td>
          </tr>
          <tr>
            <td>App Marketing Hub</td>
            <td>ASO Plus</td>
            <td>1.800 EUR pro Monat, netto</td>
          </tr>
          <tr>
            <td>App Marketing Hub</td>
            <td>ASO Ultimate</td>
            <td>Auf Anfrage, keine Setup-Gebühr</td>
          </tr>
          <tr>
            <td>Die App Agentur</td>
            <td>Pakete</td>
            <td>ab 500 EUR, 1.200 EUR und 2.500 EUR pro Monat</td>
          </tr>
          <tr>
            <td>Claneo</td>
            <td>ASO</td>
            <td>Keine Preisangabe, auf Anfrage</td>
          </tr>
          <tr>
            <td>AvantGrade</td>
            <td>ASO</td>
            <td>Keine Preisangabe, auf Anfrage</td>
          </tr>
        </tbody>
      </table>
      <p>
        Zwei Dinge fallen auf. Erstens liegen die mittleren Pakete zweier
        unabhängiger Anbieter bei identischen 900 EUR und 1.800 EUR pro Monat, es
        gibt also so etwas wie einen Marktpreis. Zweitens machen Setup-Gebühr und
        Mindestlaufzeit den Unterschied:{" "}
        <strong>
          Ein Sechsmonatsvertrag über ASO-Wachstum bei BlueBranch bindet 6.390
          EUR
        </strong>
        , nämlich 5.400 EUR Honorar plus 990 EUR Setup. Bei ASO-Skalierung sind es
        11.790 EUR. App Marketing Hub gibt an, keine Setup-Gebühr zu erheben, und
        weist die Preise netto aus. Wer vergleicht, vergleicht deshalb nicht den
        Monatspreis, sondern die Summe über die Mindestlaufzeit.
      </p>

      <h2>Was für dieses Geld tatsächlich geliefert wird</h2>
      <p>
        Der Leistungsumfang ähnelt sich über Anbieter hinweg stark. Typisch ist
        eine Kombination aus:
      </p>
      <ul>
        <li>
          <strong>Keyword-Recherche pro Markt</strong>, inklusive Aufbau des
          Keyword-Satzes für das 100-Byte-Feld im App Store und der Textbasis für
          Google Play, wo es kein Keyword-Feld gibt.
        </li>
        <li>
          <strong>Metadaten pro Sprache</strong>: Name, Untertitel oder
          Kurzbeschreibung, Beschreibung, Promotional Text.
        </li>
        <li>
          <strong>Creative-Arbeit</strong> an Icon und Screenshots, meist als
          gestaltete Sets pro Store und Gerätetyp.
        </li>
        <li>
          <strong>Aufsetzen und Auswerten von A/B-Tests</strong> über Product Page
          Optimization und Store-Listing-Experimente.
        </li>
        <li>
          <strong>Monatliches Reporting</strong> zu Impressions,
          Produktseitenaufrufen, Conversion und Keyword-Positionen.
        </li>
        <li>
          <strong>Wettbewerbsbeobachtung</strong> und Reaktion auf Änderungen der
          Store-Richtlinien.
        </li>
      </ul>
      <p>
        Was in der Regel <strong>nicht</strong> enthalten ist: Media-Budget für
        Apple Ads oder Google Ads, Übersetzungen in neue Sprachen, Produktarbeit
        an der App selbst und die Lizenzen für ASO Tools. Diese Posten gehören in
        die Rechnung, sonst wirkt die Agentur teurer oder billiger, als sie ist.
      </p>

      <h2>Der Aufwand in Eigenregie, in Stunden</h2>
      <p>
        Die folgende Aufstellung ist ein Erfahrungswert und keine Messung. Sie
        dient dazu, den Agenturpreis gegen den eigenen Kalender zu halten.
      </p>
      <table>
        <thead>
          <tr>
            <th>Aufgabe</th>
            <th>Einmalig</th>
            <th>Laufend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Keyword-Recherche je Markt</td>
            <td>6 bis 10 Stunden</td>
            <td>2 Stunden pro Monat</td>
          </tr>
          <tr>
            <td>Metadaten je Sprache schreiben</td>
            <td>3 bis 5 Stunden</td>
            <td>1 Stunde pro Monat</td>
          </tr>
          <tr>
            <td>Screenshot-Set je Store</td>
            <td>8 bis 16 Stunden</td>
            <td>2 bis 4 Stunden pro Monat</td>
          </tr>
          <tr>
            <td>A/B-Test aufsetzen und auswerten</td>
            <td>2 Stunden</td>
            <td>2 Stunden pro Monat</td>
          </tr>
          <tr>
            <td>Reviews beantworten</td>
            <td>Kein Anfangsaufwand</td>
            <td>1 bis 2 Stunden pro Woche</td>
          </tr>
        </tbody>
      </table>
      <p>
        Für einen Markt und zwei Stores landet man damit grob bei ein bis zwei
        Wochen Anfangsaufwand und danach bei mehreren Stunden pro Monat. Diese
        Zeit ist der eigentliche Vergleichsmaßstab: Nicht &bdquo;900 EUR gegen
        0 EUR&ldquo;, sondern 900 EUR gegen den internen Stundensatz mal diesen
        Aufwand, plus die Toolkosten.
      </p>

      <h2>Agentur, eigene Stelle oder Tools</h2>
      <p>
        Für die Entscheidung reicht eine ehrliche Rechnung mit den eigenen
        Zahlen. Die veröffentlichten Agenturpreise stehen oben, die
        Tool-Einstiegspreise liegen bei den gängigen Anbietern zwischen rund 10
        und 80 US-Dollar im Monat, aufgeschlüsselt im Beitrag zur{" "}
        <Link href="/de/blog/app-store-optimierung">App Store Optimierung</Link>.
        Die dritte Größe, die interne Stelle, lässt sich nicht pauschal beziffern:
        Sie besteht aus Bruttogehalt, Arbeitgeberanteilen, Tools und
        Einarbeitungszeit und ist je Unternehmen verschieden. Wer die drei Wege
        vergleicht, setzt genau diese drei Summen nebeneinander, jeweils auf zwölf
        Monate gerechnet.
      </p>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Sinnvoller Weg</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eine App, ein Markt, kleines Team</td>
            <td>Selbst machen, Tools ab dem günstigsten Tarif</td>
          </tr>
          <tr>
            <td>Solides Produkt, mehrere Märkte, keine Kapazität</td>
            <td>Agentur für sechs bis zwölf Monate, danach neu bewerten</td>
          </tr>
          <tr>
            <td>Richtung unklar, Umsetzung intern vorhanden</td>
            <td>Einmaliges Audit, Umsetzung selbst</td>
          </tr>
          <tr>
            <td>Mehrere Apps, kontinuierliche Releases</td>
            <td>Interne Stelle, Agentur nur punktuell</td>
          </tr>
        </tbody>
      </table>

      <h2>Was ein Budget für App-Marketing nicht abdeckt</h2>
      <p>
        Ein häufiger Planungsfehler besteht darin, App Store Optimierung und
        bezahlte Nutzergewinnung in einen Topf zu werfen. Beides greift
        ineinander, aber die Kostenarten sind verschieden. Ein Agenturhonorar
        bezahlt Arbeitszeit an Metadaten, Creatives und Tests. Ein Media-Budget
        bezahlt Sichtbarkeit bei Apple Ads oder Google Ads und wird zusätzlich
        fällig. Wer nur das Honorar einplant, steht nach vier Wochen mit einer
        besseren Produktseite und unverändertem Traffic da.
      </p>
      <p>
        Sinnvoll ist die umgekehrte Reihenfolge: erst die Produktseite in Ordnung
        bringen, dann bezahlten Traffic darauf leiten. Jeder Euro Media-Budget auf
        eine Seite mit schwacher Conversion ist teurer als derselbe Euro auf eine
        Seite, die getestet wurde. Eine kleine Apple-Ads-Kampagne mit
        Suchbegriffsabgleich hat außerdem einen zweiten Nutzen: Sie ist die
        einzige verlässliche Quelle für die tatsächlichen Suchbegriffe im
        deutschen Storefront und speist damit die Keyword-Arbeit, für die
        andernfalls Modelle von Drittanbietern herhalten müssen.
      </p>

      <h2>Übergabe und Ausstieg regeln, bevor es losgeht</h2>
      <p>
        Der Punkt wird selten verhandelt und kostet am Ende Zeit. Nach Ablauf der
        Zusammenarbeit sollten drei Dinge intern vorliegen: der aktuelle
        Keyword-Satz je Sprache mit Begründung, die Historie der Metadaten mit
        den Zeitpunkten der Änderungen, und die Ergebnisse aller gelaufenen
        A/B-Tests inklusive der Varianten, die verloren haben. Ohne diese
        Unterlagen beginnt die nächste Agentur oder die eigene Stelle wieder bei
        null und wiederholt Tests, die bereits bezahlt wurden. Am einfachsten ist
        es, die Änderungshistorie von Anfang an im eigenen Werkzeug zu führen und
        nicht ausschließlich im Dashboard des Dienstleisters.
      </p>

      <h2>Warnsignale beim Einkauf</h2>
      <ul>
        <li>
          <strong>Garantierte Rankings.</strong> Niemand kontrolliert die
          Store-Algorithmen. Eine Garantie auf Platz eins ist entweder wertlos
          oder sie beruht auf gekauftem Traffic.
        </li>
        <li>
          <strong>Abrechnung pro Installation oder pro Bewertung.</strong> Dieses
          Modell setzt Anreize genau in die Richtung, die beide Stores verbieten.
        </li>
        <li>
          <strong>Ergebnisse in wenigen Tagen.</strong> Erste Positionsbewegungen
          brauchen zwei bis vier Wochen nach der Indexierung, ein belastbarer
          Effekt auf Installationen eher zwei bis drei Monate.
        </li>
        <li>
          <strong>Kein Zugriff auf die eigenen Konten.</strong> Metadaten,
          Keyword-Sätze und Testergebnisse gehören in die eigenen Store-Konten,
          nicht ausschließlich in ein Agentur-Dashboard.
        </li>
        <li>
          <strong>Keine Angabe zur Mindestlaufzeit.</strong> Vergleichbarkeit
          entsteht erst über die Gesamtsumme, nicht über den Monatspreis.
        </li>
        <li>
          <strong>Reporting ohne Rohdaten.</strong> Ein Bericht, der sich nicht
          gegen die Zahlen der Store-Konsole prüfen lässt, ist eine Erzählung.
        </li>
      </ul>
      <p>
        Ein Punkt verdient eine eigene Zeile:{" "}
        <strong>
          Der Kauf von Installationen, Bewertungen oder Reviews verstößt gegen die
          Richtlinien beider Stores und kann zur Entfernung der App führen.
        </strong>{" "}
        Wenn ein Angebot Wachstum verspricht, das ohne solche Maßnahmen nicht
        erklärbar ist, ist das kein Schnäppchen, sondern ein Risiko für das
        gesamte Konto.
      </p>

      <h2>Fragen für das erste Gespräch</h2>
      <ol>
        <li>
          Wie hoch sind Mindestlaufzeit, Setup-Gebühr und die Gesamtsumme über die
          Laufzeit?
        </li>
        <li>
          Wie viele Stunden pro Monat sind im Paket enthalten, und wer arbeitet
          konkret daran?
        </li>
        <li>
          Wer besitzt die Zugänge zu App Store Connect und Google Play Console,
          und bleiben die Ergebnisse dort?
        </li>
        <li>
          Welche A/B-Tests werden aufgesetzt, in welchem Store, und wie lange
          laufen sie?
        </li>
        <li>
          Sind Übersetzungen, Creative-Produktion und Tool-Lizenzen enthalten oder
          separat?
        </li>
        <li>
          Woran wird der Erfolg gemessen, und lässt sich die Kennzahl in der
          Store-Konsole nachvollziehen?
        </li>
      </ol>

      <h2>Häufige Fragen</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <h2>Weiterlesen</h2>
      <p>
        Wer die Arbeit selbst übernimmt, findet die Grundlagen im Leitfaden zur{" "}
        <Link href="/de/blog/app-store-optimierung">App Store Optimierung</Link>{" "}
        und die technischen Voraussetzungen beider Stores in den Beiträgen zur{" "}
        <Link href="/de/blog/google-play-console-app-veroeffentlichen">
          Google Play Console
        </Link>{" "}
        und zu{" "}
        <Link href="/de/blog/app-store-connect-app-veroeffentlichen">
          App Store Connect
        </Link>
        . Für Metadaten, Änderungshistorie und Screenshots an einer Stelle: die{" "}
        <Link href="/pricing">Konditionen von AppBoard</Link>, in der Beta
        kostenlos.
      </p>
      <p>
        Alle Preisangaben wurden im August 2026 von den genannten Anbieterseiten
        übernommen und sind Anbieterangaben. Preise und Vertragsbedingungen können
        sich ändern, vor einer Beauftragung lohnt der Blick auf die aktuelle
        Seite des Anbieters.
      </p>
    </ArticleLayout>
  );
}
