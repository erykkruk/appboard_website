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

const SLUG = "google-play-console-app-veroeffentlichen";
const EN_SLUG = "app-store-localization";
const article = BLOG_ARTICLES_DE.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Google Play Console 2026: privates Konto oder Organisation, D-U-N-S-Nummer, die 12-Tester-Regel über 14 Tage, Zeichenlimits, Grafikvorgaben und der DSA-Händlerstatus.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "de_DE",
  path: `/de/blog/${SLUG}`,
  title: "Google Play Console: App veröffentlichen (Leitfaden 2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "Für private Entwicklerkonten, die nach dem 13. November 2023 erstellt wurden, verlangt Google vor dem Zugang zur Produktion einen geschlossenen Test mit mindestens 12 Testern, die 14 Tage lang ununterbrochen angemeldet bleiben. Entscheidend ist die Kontinuität: Verlässt ein Tester die Testgruppe und tritt später wieder bei, beginnt die Zählung für diesen Test von vorn. Erst danach lässt sich der Produktionszugang beantragen.",
    question: "Was ist die 12-Tester-Regel in der Google Play Console?",
  },
  {
    answer:
      "Nach dem geschlossenen Test wird der Antrag auf Produktionszugang von Google geprüft. Google nennt dafür einen Zeitraum von sieben Tagen oder weniger. Diese Prüfung ist unabhängig von der eigentlichen App-Review und kommt zeitlich obendrauf, weshalb ein realistischer Releaseplan für ein neues privates Konto mindestens drei Wochen einplanen sollte.",
    question: "Wie lange dauert die Freigabe des Produktionszugangs?",
  },
  {
    answer:
      "Für ein Organisationskonto verlangt Google eine D-U-N-S-Nummer zur Verifizierung der Organisation. Diese Anforderung wird auf vielen deutschen Seiten fälschlich als reines Apple-Thema dargestellt. Die D-U-N-S-Nummer wird von Dun and Bradstreet vergeben und ist kostenlos, die Bearbeitung kann aber mehrere Werktage dauern. Wer ein Organisationskonto plant, beantragt sie deshalb vor allem anderen.",
    question: "Brauche ich eine D-U-N-S-Nummer für Google Play?",
  },
  {
    answer:
      "Der Titel hat 30 Zeichen, die Kurzbeschreibung 80 Zeichen und die vollständige Beschreibung 4000 Zeichen. Der Titel wurde 2021 von 50 auf 30 Zeichen gekürzt, mehrere gut platzierte deutsche Ratgeber nennen bis heute den alten Wert. Ein Text, der auf 50 Zeichen hin geschrieben wurde, wird in der Console schlicht abgeschnitten oder abgelehnt.",
    question: "Welche Zeichenlimits gelten im Google-Play-Listing?",
  },
  {
    answer:
      "Pro Gerätetyp sind mindestens zwei und höchstens acht Screenshots möglich, für große Bildschirme verlangt Google mindestens vier. Jede Kantenlänge liegt zwischen 320 und 3840 Pixeln, und die lange Seite darf höchstens doppelt so lang sein wie die kurze. Feste Pixelziele für 7-Zoll- und 10-Zoll-Tablets veröffentlicht Google nicht, anders als es viele Vorlagen im Netz suggerieren.",
    question: "Wie viele Screenshots verlangt Google Play?",
  },
  {
    answer:
      "Für Apple ist der DSA-Händlerstatus dokumentiert und verpflichtend, für Google Play ließ sich keine offizielle Hilfeseite mit einer gleichwertigen DSA-Anforderung finden. Google dokumentiert eine Pflicht zur vollständigen Adressangabe für Händlerkonten aus dem Verbraucherschutzrecht, die Seite zu den allgemeinen Zugangsbedingungen im EWR bezieht sich dagegen auf den DMA, nicht auf den DSA. Von Symmetrie zwischen beiden Stores sollte man deshalb nicht ausgehen.",
    question: "Gilt der DSA-Händlerstatus auch bei Google Play?",
  },
  {
    answer:
      "Nach deutscher juristischer Kommentarliteratur besteht für kommerziell betriebene Apps eine Impressumspflicht nach Paragraph 5 DDG, dem Nachfolger von Paragraph 5 TMG. Das ist deutsches Recht und keine Store-Richtlinie, die beiden Ebenen sind getrennt zu betrachten. Für die konkrete Ausgestaltung im Einzelfall ist anwaltliche Beratung sinnvoll.",
    question: "Braucht eine App ein Impressum?",
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
        Die teuerste Überraschung beim ersten Release in der Google Play Console
        hat nichts mit Code zu tun.{" "}
        <strong>
          Wer sein Entwicklerkonto als Privatperson nach dem 13. November 2023
          erstellt hat, kommt ohne einen geschlossenen Test mit mindestens 12
          Testern über 14 zusammenhängende Tage nicht in die Produktion.
        </strong>{" "}
        Diese Regel steht in keinem der gut platzierten deutschsprachigen
        Ratgeber, und sie verschiebt einen Releasetermin problemlos um drei
        Wochen. Deshalb beginnt dieser Leitfaden mit der Kontoentscheidung und
        nicht mit dem Store-Listing.
      </p>

      <h2>Kontotyp zuerst: privates Konto oder Organisationskonto</h2>
      <p>
        Google unterscheidet zwei Kontotypen, und die Wahl ist nach der
        Verifizierung nicht mehr beliebig änderbar. Sie entscheidet außerdem
        darüber, ob die 12-Tester-Regel greift.
      </p>
      <table>
        <thead>
          <tr>
            <th>Kriterium</th>
            <th>Privates Konto</th>
            <th>Organisationskonto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Verifizierung</td>
            <td>Ausweisdokument der Person</td>
            <td>D-U-N-S-Nummer der Organisation</td>
          </tr>
          <tr>
            <td>Geschlossener Test vor Produktion</td>
            <td>Pflicht bei Konten ab 13.11.2023</td>
            <td>Nicht in dieser Form vorgesehen</td>
          </tr>
          <tr>
            <td>Öffentlich sichtbarer Entwicklername</td>
            <td>Name der Person</td>
            <td>Name der Organisation</td>
          </tr>
          <tr>
            <td>Vorlaufzeit</td>
            <td>Kurz, dafür Testphase davor</td>
            <td>Länger, D-U-N-S-Beantragung dauert</td>
          </tr>
        </tbody>
      </table>
      <p>
        Der wichtigste Punkt in dieser Tabelle wird auf deutschen Seiten fast
        durchgängig falsch dargestellt:{" "}
        <strong>
          die D-U-N-S-Nummer ist keine reine Apple-Anforderung, Google verlangt
          sie ebenfalls für Organisationskonten.
        </strong>{" "}
        Sie wird von Dun and Bradstreet vergeben, kostet nichts und braucht in
        der Praxis mehrere Werktage. Wer als GmbH, UG oder eingetragener Verein
        veröffentlicht, beantragt sie deshalb als allerersten Schritt, parallel
        zu allem anderen.
      </p>

      <h2>Die 12-Tester-Regel im Detail</h2>
      <p>
        Für private Entwicklerkonten, die nach dem 13. November 2023 erstellt
        wurden, gilt eine feste Reihenfolge: geschlossener Test, dann Antrag auf
        Produktionszugang, dann Produktion. Drei Details entscheiden darüber, ob
        die Frist eingehalten wird.
      </p>
      <ol>
        <li>
          <strong>Mindestens 12 Tester.</strong> Es zählen Konten, die tatsächlich
          im geschlossenen Test angemeldet sind, nicht eingeladene Adressen.
        </li>
        <li>
          <strong>14 zusammenhängende Tage.</strong> Die Tester müssen über den
          gesamten Zeitraum angemeldet bleiben. Ein Test, der am achten Tag unter
          zwölf Teilnehmer fällt, erfüllt die Bedingung nicht.
        </li>
        <li>
          <strong>Austritt setzt die Zählung zurück.</strong> Verlässt ein Tester
          die Gruppe und tritt später wieder bei, beginnt die Zählung für diesen
          Test von vorn. Das ist der häufigste Grund, warum ein Antrag scheitert,
          obwohl gefühlt alles passte.
        </li>
      </ol>
      <p>
        Nach Ablauf der 14 Tage wird der Produktionszugang beantragt. Google gibt
        für diese Prüfung sieben Tage oder weniger an. Sie ist unabhängig von der
        späteren App-Review und kommt zeitlich obendrauf. Ein realistischer Plan
        für ein frisches privates Konto lautet also: 14 Tage Test, bis zu 7 Tage
        Prüfung, danach erst Review und Rollout.
      </p>
      <p>
        Praktische Konsequenz: Die Tester werden nicht am Tag der Fertigstellung
        gesucht, sondern während der Entwicklung. Zwölf Personen, die zwei Wochen
        lang durchhalten, sind ein Rekrutierungsproblem und kein technisches
        Problem. Ein interner Test läuft parallel und ohne Wartezeit weiter, er
        ersetzt den geschlossenen Test aber nicht.
      </p>

      <h2>Die vier Test-Tracks und ihre Obergrenzen</h2>
      <table>
        <thead>
          <tr>
            <th>Track</th>
            <th>Obergrenze</th>
            <th>Typischer Einsatz</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Interner Test</td>
            <td>100 Tester</td>
            <td>Team und Stakeholder, schnellste Verteilung</td>
          </tr>
          <tr>
            <td>Geschlossener Test</td>
            <td>Bis zu 200 Listen mit je 2000 Nutzern</td>
            <td>Beta mit Einladung, Pflichtschritt für private Konten</td>
          </tr>
          <tr>
            <td>Offener Test</td>
            <td>Unbegrenzt oder mindestens 1000 Nutzer</td>
            <td>Öffentliche Beta, im Store auffindbar</td>
          </tr>
          <tr>
            <td>Produktion</td>
            <td>Alle Nutzer</td>
            <td>Regulärer Release, gestufter Rollout möglich</td>
          </tr>
        </tbody>
      </table>
      <p>
        Der Sprung vom internen in den geschlossenen Test wird oft unterschätzt.
        Der interne Test verteilt innerhalb von Minuten, der geschlossene Test
        durchläuft eine Prüfung. Wer die 14-Tage-Frist einhalten will, plant
        diese Prüfung als eigenen Puffer ein.
      </p>

      <h2>Store-Listing: die tatsächlich geltenden Limits</h2>
      <table>
        <thead>
          <tr>
            <th>Feld</th>
            <th>Limit</th>
            <th>Hinweis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Titel</td>
            <td>30 Zeichen</td>
            <td>Seit 2021, nicht 50</td>
          </tr>
          <tr>
            <td>Kurzbeschreibung</td>
            <td>80 Zeichen</td>
            <td>Sichtbar vor dem Aufklappen, wird indexiert</td>
          </tr>
          <tr>
            <td>Vollständige Beschreibung</td>
            <td>4000 Zeichen</td>
            <td>Einzige Quelle für Keywords, es gibt kein Keyword-Feld</td>
          </tr>
        </tbody>
      </table>
      <p>
        Google Play hat{" "}
        <strong>kein verstecktes Keyword-Feld</strong>. Die Suche des Stores
        zieht ihre Begriffe aus Titel, Kurzbeschreibung und der vollständigen
        Beschreibung. Das ist der strukturelle Unterschied zum App Store und der
        Grund, warum derselbe Text in beiden Stores nie optimal ist. Wie sich
        beide Seiten sauber trennen lassen, steht im Leitfaden zur{" "}
        <Link href="/de/blog/app-store-optimierung">App Store Optimierung</Link>.
      </p>

      <h2>Grafiken: die vollständige Tabelle</h2>
      <p>
        Die Grafikvorgaben sind der zweithäufigste Grund für Verzögerungen, weil
        sie sich in Details unterscheiden, die keine Vorlage aus dem Netz
        zuverlässig abbildet.
      </p>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Vorgabe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>App-Icon</td>
            <td>
              512 &times; 512, 32-Bit-PNG <strong>mit</strong> Alphakanal, maximal
              1024 KB
            </td>
          </tr>
          <tr>
            <td>Feature-Grafik</td>
            <td>
              1024 &times; 500, JPEG oder 24-Bit-PNG <strong>ohne</strong>{" "}
              Alphakanal
            </td>
          </tr>
          <tr>
            <td>Screenshots, Kantenlänge</td>
            <td>320 bis 3840 Pixel je Seite</td>
          </tr>
          <tr>
            <td>Screenshots, Seitenverhältnis</td>
            <td>
              Die lange Seite höchstens doppelt so lang wie die kurze Seite
            </td>
          </tr>
          <tr>
            <td>Screenshots, Anzahl</td>
            <td>
              Mindestens 2 je Gerätetyp, höchstens 8 je Gerätetyp, große
              Bildschirme mindestens 4
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Zwei Fallen stecken in dieser Tabelle. Erstens der Alphakanal: Das Icon
        braucht ihn, die Feature-Grafik darf ihn nicht haben. Ein Export mit
        einheitlichen Einstellungen für beide Assets scheitert deshalb
        zuverlässig an einem von beiden. Zweitens die Tablets:{" "}
        <strong>
          Google veröffentlicht keine separaten Pixelziele für 7-Zoll- und
          10-Zoll-Tablets.
        </strong>{" "}
        Es gilt allein der Rahmen aus Kantenlänge und Seitenverhältnis. Vorlagen,
        die exakte Tabletmaße als verbindlich ausgeben, erfinden eine Vorgabe,
        die es so nicht gibt.
      </p>
      <p>
        Wer die Assets für beide Stores in den korrekten Maßen exportieren will,
        ohne pro Gerät eine eigene Datei zu pflegen: Der{" "}
        <Link href="/pricing">Screenshot-Editor von AppBoard</Link> ist in der
        Beta kostenlos und exportiert direkt in den vom jeweiligen Store
        akzeptierten Größen.
      </p>

      <h2>DSA-Händlerstatus: der größte blinde Fleck</h2>
      <p>
        Kein einziger der reichweitenstarken deutschen Ratgeber zur Google Play
        Console erwähnt den Händlerstatus nach dem Digital Services Act. Für
        Apple ist die Lage eindeutig dokumentiert, für Google ist sie es
        ausdrücklich nicht. Diese Asymmetrie ist wichtig, denn sie wird gern
        weggeglättet.
      </p>
      <ul>
        <li>
          <strong>Apple:</strong> Der Händlerstatus ist für die Verbreitung in der
          EU nach den Artikeln 30 und 31 DSA erforderlich. Nach der Verifizierung
          veröffentlicht Apple Name, Adresse, Telefonnummer und E-Mail-Adresse
          des Händlers auf der Produktseite im App Store in allen 27
          EU-Territorien. Privatpersonen können eine Adresse oder ein Postfach
          angeben. Seit dem 16. Oktober 2024 ist der Status Voraussetzung für das
          Einreichen von Updates, und seit dem 17. Februar 2025 wurden Apps ohne
          Händlerstatus aus dem EU-App-Store entfernt, bis der Status angegeben
          und verifiziert ist.
        </li>
        <li>
          <strong>Google:</strong> Eine offizielle Hilfeseite von Google Play, die
          eine gleichwertige DSA-Anforderung zum Händlerstatus dokumentiert, ließ
          sich nicht finden. Google dokumentiert eine Pflicht zur vollständigen
          Adressangabe für Händlerkonten aus dem Verbraucherschutzrecht, und die
          Seite zu den allgemeinen Zugangsbedingungen im EWR behandelt den DMA,
          nicht den DSA. Es sollte also{" "}
          <strong>keine Symmetrie zwischen beiden Stores unterstellt werden.</strong>
        </li>
      </ul>
      <p>
        Davon getrennt zu betrachten ist die deutsche Rechtslage: Nach
        juristischer Kommentarliteratur besteht für kommerziell betriebene Apps
        eine Impressumspflicht nach Paragraph 5 DDG, dem Nachfolger von Paragraph
        5 TMG. Das ist deutsches Recht und keine Store-Richtlinie. Für den
        konkreten Einzelfall ist anwaltliche Beratung sinnvoll, pauschale Angaben
        zu Bußgeldhöhen aus Blogartikeln sind es nicht.
      </p>

      <h2>Ablauf bis zum Release</h2>
      <ol>
        <li>
          <strong>Kontotyp festlegen.</strong> Bei Organisationskonto sofort die
          D-U-N-S-Nummer beantragen, sie ist der längste Einzelschritt.
        </li>
        <li>
          <strong>Konto verifizieren.</strong> Ausweis oder Organisationsdaten,
          Zahlungsprofil und Kontaktdaten vollständig hinterlegen.
        </li>
        <li>
          <strong>App anlegen und Deklarationen ausfüllen.</strong>{" "}
          Datensicherheitsformular, Zielgruppe, Inhaltsbewertung, Werbe-ID und
          Datenschutzerklärung. Unvollständige Deklarationen blockieren jeden
          Track.
        </li>
        <li>
          <strong>Internen Test starten.</strong> Bis zu 100 Tester, sofortige
          Verteilung, hier fallen die groben Fehler auf.
        </li>
        <li>
          <strong>Geschlossenen Test aufsetzen.</strong> Bei privaten Konten mit
          mindestens 12 Testern über 14 zusammenhängende Tage, ohne Austritte.
        </li>
        <li>
          <strong>Produktionszugang beantragen.</strong> Prüfung durch Google in
          sieben Tagen oder weniger.
        </li>
        <li>
          <strong>Store-Listing finalisieren.</strong> 30 Zeichen Titel, 80
          Zeichen Kurzbeschreibung, 4000 Zeichen Beschreibung, Grafiken nach
          Tabelle oben, je Sprache separat.
        </li>
        <li>
          <strong>Gestuften Rollout starten.</strong> Erst ein kleiner Prozentsatz,
          Crash-Rate und Bewertungen beobachten, dann hochziehen.
        </li>
      </ol>

      <h2>Fehler, die Releases kosten</h2>
      <ul>
        <li>
          <strong>Tester zu spät suchen.</strong> Die 14 Tage laufen erst, wenn
          zwölf Personen tatsächlich angemeldet sind.
        </li>
        <li>
          <strong>Testergruppe während der Frist umbauen.</strong> Austritt und
          Wiedereintritt setzen die Zählung zurück.
        </li>
        <li>
          <strong>Titel auf 50 Zeichen schreiben.</strong> Das Limit liegt seit
          2021 bei 30 Zeichen, auch wenn deutsche Ratgeber weiter 50 nennen.
        </li>
        <li>
          <strong>Feature-Grafik mit Alphakanal exportieren.</strong> Beim Icon
          Pflicht, bei der Feature-Grafik ein Ablehnungsgrund.
        </li>
        <li>
          <strong>Beschreibung aus dem App Store kopieren.</strong> Ohne
          Keyword-Feld muss die Google-Play-Beschreibung die Suchbegriffe selbst
          tragen.
        </li>
        <li>
          <strong>Deklarationen als Formalie behandeln.</strong> Das
          Datensicherheitsformular ist der häufigste stille Blocker vor dem
          Rollout.
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
        Die Gegenseite, also Zertifikate, API-Keys, Metadatenlimits in Bytes und
        die aktuellen Screenshot-Größen, steht im Leitfaden zu{" "}
        <Link href="/de/blog/app-store-connect-app-veroeffentlichen">
          App Store Connect
        </Link>
        . Wer nach dem Release wissen will, ob sich eine Agentur lohnt oder ob
        Tools reichen, findet die veröffentlichten Euro-Preise deutscher Anbieter
        im Beitrag zu den{" "}
        <Link href="/de/blog/aso-agentur-kosten">ASO-Kosten</Link>.
      </p>
      <p>
        Alle Vorgaben wurden im August 2026 gegen die Dokumentation von Google
        geprüft. Grafikmaße, Limits und Kontoregeln ändern sich häufiger als der
        Rest, deshalb vor jedem größeren Release kurz gegenprüfen.
      </p>
    </ArticleLayout>
  );
}
