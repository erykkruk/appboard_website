import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
import { BLOG_ARTICLES_DE } from "@/lib/blog";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildFaqSchema } from "@/lib/schema";
import { APP_URL, buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "app-store-connect-app-veroeffentlichen";
const EN_SLUG = "app-store-screenshot-sizes";
const article = BLOG_ARTICLES_DE.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "App Store Connect 2026: API-Key mit Issuer ID und .p8-Datei, Metadatenlimits in Bytes statt Zeichen, aktuelle Screenshot-Größen, Review-Dauer und der DSA-Händlerstatus.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "de_DE",
  path: `/de/blog/${SLUG}`,
  title: "App Store Connect: App veröffentlichen (Leitfaden 2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "Ein API-Key besteht aus drei Teilen: der Issuer ID, die für das gesamte Team gilt, der Key ID des einzelnen Schlüssels und der privaten Schlüsseldatei im Format .p8. Die .p8-Datei lässt sich nur ein einziges Mal herunterladen, Apple bewahrt keine Kopie auf. Geht sie verloren, muss der Schlüssel widerrufen und ein neuer erzeugt werden.",
    question: "Was gehört zu einem App-Store-Connect-API-Key?",
  },
  {
    answer:
      "Apple gibt an, dass im Durchschnitt 90 Prozent der eingereichten Apps in weniger als 24 Stunden geprüft werden. Die Angabe von ein bis zwei Wochen, die sich in vielen deutschsprachigen Beiträgen findet, entspricht nicht der von Apple veröffentlichten Größenordnung. Verzögerungen entstehen in der Praxis eher durch Rückfragen im Review als durch die Wartezeit selbst.",
    question: "Wie lange dauert das App Review bei Apple?",
  },
  {
    answer:
      "Das Keyword-Feld hat 100 Bytes, nicht 100 Zeichen. In UTF-8 belegt ein normaler lateinischer Buchstabe ein Byte, die deutschen Umlaute ä, ö und ü sowie das ß dagegen zwei Bytes. Ein deutscher Keyword-Satz schöpft das Feld deshalb schneller aus als ein englischer, obwohl der Zeichenzähler im Editor dasselbe anzeigt.",
    question: "Wie viele Zeichen hat das Keyword-Feld im App Store?",
  },
  {
    answer:
      "Für das 6,9-Zoll-iPhone akzeptiert Apple im Hochformat drei Größen: 1260 x 2736, 1290 x 2796 und 1320 x 2868 Pixel. Für das 13-Zoll-iPad sind es 2064 x 2752 und 2048 x 2732 Pixel. Screenshots dürfen keinen Alphakanal enthalten, und pro Lokalisierung sind ein bis zehn Screenshots möglich.",
    question: "Welche Screenshot-Größen verlangt der App Store 2026?",
  },
  {
    answer:
      "Apple veröffentlicht die Gebühr für das Apple Developer Program mit 99 US-Dollar pro Jahr. Ein fester Euro-Betrag wird von Apple nicht als Preis ausgewiesen, der lokale Betrag erscheint erst beim Bezahlvorgang. Deutschsprachige Seiten, die 99 Euro als Apple-Preis angeben, geben damit einen Wert an, den Apple so nicht veröffentlicht.",
    question: "Was kostet das Apple Developer Program?",
  },
  {
    answer:
      "Der Händlerstatus ist für die Verbreitung in der EU nach den Artikeln 30 und 31 DSA erforderlich. Nach der Verifizierung veröffentlicht Apple Name, Adresse, Telefonnummer und E-Mail-Adresse des Händlers auf der Produktseite im App Store in allen 27 EU-Territorien. Privatpersonen können eine Adresse oder ein Postfach angeben. Seit dem 16. Oktober 2024 ist der Status Voraussetzung für Updates, seit dem 17. Februar 2025 wurden Apps ohne Händlerstatus aus dem EU-App-Store entfernt, bis der Status angegeben und verifiziert ist.",
    question: "Was ist der DSA-Händlerstatus im App Store?",
  },
  {
    answer:
      "Nein. Apple stellt für App Store Connect keine deutschsprachige Dokumentation bereit. Die Review-Seite unter developer.apple.com/de/app-store/review/ liefert einen 404, und der Hilfe-Leitfaden zu App Store Connect existiert auf Koreanisch, Japanisch und Chinesisch, aber nicht auf Deutsch. Als verbindliche Quelle bleibt die englische Fassung.",
    question: "Gibt es App Store Connect auf Deutsch?",
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
        Eine Sache vorweg, die den Rest dieses Textes erklärt:{" "}
        <strong>
          Apple stellt für App Store Connect keinerlei deutschsprachige
          Dokumentation bereit.
        </strong>{" "}
        Die Review-Seite unter developer.apple.com/de/app-store/review/ liefert
        einen 404. Der Hilfe-Leitfaden zu App Store Connect existiert auf
        Koreanisch, auf Japanisch und auf Chinesisch, aber nicht auf Deutsch. Das
        ist der Grund, warum sich in deutschen Ratgebern falsche Zahlen so hart
        halten: Sie werden voneinander abgeschrieben, weil es keine deutsche
        Primärquelle gibt, gegen die sich prüfen ließe.
      </p>
      <p>
        Dieser Leitfaden gibt deshalb bei jedem Wert an, wogegen er geprüft
        wurde, und korrigiert drei Angaben, die in deutschen Beiträgen
        systematisch falsch stehen: die Review-Dauer, den Preis des Developer
        Programs und die Größe des Keyword-Felds.
      </p>

      <h2>Programm und Kosten</h2>
      <p>
        Vor der ersten Veröffentlichung steht die Mitgliedschaft im Apple
        Developer Program. Apple veröffentlicht dafür{" "}
        <strong>99 US-Dollar pro Jahr</strong>. Das ist keine Formalie, sondern
        eine Korrektur: Zahlreiche deutsche Seiten schreiben &bdquo;99
        Euro&ldquo; und geben damit einen Preis an, den Apple so nicht
        veröffentlicht. Der lokale Betrag entsteht erst im Bezahlvorgang und
        hängt von Wechselkurs und Steuersatz ab. Wer intern budgetiert, plant
        deshalb mit dem Dollarbetrag zuzüglich Umrechnung, nicht mit einer
        gerundeten Euro-Zahl aus einem Blogartikel.
      </p>
      <p>
        Für Organisationen verlangt Apple zusätzlich eine D-U-N-S-Nummer zur
        Verifizierung. Wichtig für die Planung: Diese Anforderung ist{" "}
        <strong>nicht Apple-exklusiv</strong>. Google verlangt sie für
        Organisationskonten ebenfalls, was auf deutschen Seiten regelmäßig
        untergeht. Details dazu stehen im Leitfaden zur{" "}
        <Link href="/de/blog/google-play-console-app-veroeffentlichen">
          Google Play Console
        </Link>
        .
      </p>

      <h2>Der API-Key: Issuer ID, Key ID und die .p8-Datei</h2>
      <p>
        Sobald der Upload automatisiert werden soll, sei es über eine CI-Pipeline
        oder ein externes Tool, führt der Weg über einen App-Store-Connect-Key.
        Er besteht aus drei Teilen, und einer davon ist unwiederbringlich.
      </p>
      <table>
        <thead>
          <tr>
            <th>Bestandteil</th>
            <th>Gültigkeitsbereich</th>
            <th>Besonderheit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Issuer ID</td>
            <td>Gesamtes Team</td>
            <td>Für alle Keys identisch, jederzeit einsehbar</td>
          </tr>
          <tr>
            <td>Key ID</td>
            <td>Einzelner Schlüssel</td>
            <td>Identifiziert den Key, jederzeit einsehbar</td>
          </tr>
          <tr>
            <td>Private Key (.p8)</td>
            <td>Einzelner Schlüssel</td>
            <td>
              <strong>Nur ein einziger Download möglich</strong>, Apple bewahrt
              keine Kopie auf
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Die .p8-Datei lässt sich exakt einmal herunterladen. Geht sie verloren,
        gibt es keinen Weg zurück: Der Key muss widerrufen und ein neuer erzeugt
        werden, und jede Pipeline, die ihn nutzte, bricht bis zur Umstellung. Die
        Datei gehört deshalb sofort nach dem Download in den Passwortmanager oder
        den Secret-Store der CI, niemals in ein Git-Repository. Rollen lassen sich
        pro Key vergeben, ein Key für Uploads braucht keine Admin-Rechte.
      </p>

      <h2>Metadatenlimits, und warum Umlaute teuer sind</h2>
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
            <td>App-Name</td>
            <td>30 Zeichen</td>
            <td>Stärkstes Rankingfeld</td>
          </tr>
          <tr>
            <td>Untertitel</td>
            <td>30 Zeichen</td>
            <td>Wird indexiert und ist sichtbar</td>
          </tr>
          <tr>
            <td>Keywords</td>
            <td>
              100 <strong>Bytes</strong>
            </td>
            <td>Nicht 100 Zeichen, nicht sichtbar</td>
          </tr>
          <tr>
            <td>Promotional Text</td>
            <td>170 Zeichen</td>
            <td>Ohne neuen Build änderbar</td>
          </tr>
          <tr>
            <td>Beschreibung</td>
            <td>4000 Zeichen</td>
            <td>Wird nicht für die Suche indexiert</td>
          </tr>
        </tbody>
      </table>
      <p>
        Die dritte Zeile ist für den deutschen Markt die wichtigste.{" "}
        <strong>
          Das Keyword-Feld misst 100 Bytes, nicht 100 Zeichen.
        </strong>{" "}
        In UTF-8 belegt ein normaler lateinischer Buchstabe ein Byte, die
        deutschen Sonderzeichen ä, ö, ü und ß dagegen jeweils zwei. Konkret:
      </p>
      <ul>
        <li>
          &bdquo;Größe&ldquo; hat 5 Zeichen und belegt 7 Bytes.
        </li>
        <li>
          &bdquo;Bücher&ldquo; hat 6 Zeichen und belegt 7 Bytes.
        </li>
        <li>
          &bdquo;Ernährungstagebuch&ldquo; hat 18 Zeichen und belegt 19 Bytes.
        </li>
      </ul>
      <p>
        Ein deutscher Keyword-Satz schöpft das Feld also messbar schneller aus als
        ein englischer, während der Zeichenzähler im Editor beide gleich lang
        anzeigt. Zwei praktische Regeln folgen daraus: Wörter mit Umlauten nur
        aufnehmen, wenn Nutzer sie tatsächlich so eingeben, und keine Begriffe
        doppeln, die bereits im App-Namen oder im Untertitel stehen. Apple
        indexiert die Summe dieser Felder, jede Wiederholung sind verschenkte
        Bytes. Der Beitrag zur{" "}
        <Link href="/de/blog/app-store-optimierung">App Store Optimierung</Link>{" "}
        geht auf die Auswahl der Begriffe im Detail ein.
      </p>

      <h2>Screenshot-Größen, direkt bei Apple geprüft</h2>
      <p>
        Die Größen wurden für diesen Beitrag unmittelbar bei Apple nachgesehen.
        Bemerkenswert ist, dass für dasselbe Gerät mehrere Größen akzeptiert
        werden, was in Vorlagen selten abgebildet ist.
      </p>
      <table>
        <thead>
          <tr>
            <th>Gerät</th>
            <th>Akzeptierte Größen im Hochformat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iPhone, 6,9 Zoll</td>
            <td>
              1260 &times; 2736, 1290 &times; 2796 und 1320 &times; 2868
            </td>
          </tr>
          <tr>
            <td>iPad, 13 Zoll</td>
            <td>2064 &times; 2752 und 2048 &times; 2732</td>
          </tr>
        </tbody>
      </table>
      <p>
        Dazu zwei harte Vorgaben:{" "}
        <strong>kein Alphakanal</strong> in den Bilddateien und{" "}
        <strong>ein bis zehn Screenshots pro Lokalisierung</strong>. Der
        Alphakanal ist der häufigste stille Ablehnungsgrund, weil viele
        Design-Tools PNG standardmäßig mit Transparenz exportieren, auch wenn
        keine Fläche transparent ist.
      </p>
      <p>
        Wer beide Stores bedient, pflegt schnell ein Dutzend Exportvarianten pro
        Sprache. Der{" "}
        <a href={`${APP_URL}/editor`}>Screenshot-Editor von AppBoard</a>{" "}
        exportiert direkt in den akzeptierten Größen und ist in der Beta
        kostenlos.
      </p>

      <h2>Review: die Zahl, die deutsche Seiten falsch angeben</h2>
      <p>
        Apple gibt an, dass{" "}
        <strong>
          im Durchschnitt 90 Prozent der eingereichten Apps in weniger als 24
          Stunden geprüft werden.
        </strong>{" "}
        Die in deutschen Beiträgen verbreitete Angabe von ein bis zwei Wochen
        entspricht dieser Größenordnung nicht. Wer plant, sollte den Puffer
        deshalb nicht in die Wartezeit legen, sondern in die Iteration: Eine
        Ablehnung, eine Korrektur und eine erneute Einreichung sind zeitlich der
        realistische Risikofall, nicht die Erstprüfung.
      </p>
      <p>
        Was die Prüfung tatsächlich aufhält, ist in der Regel banal:
        unvollständige Angaben zum Datenschutz, Testzugänge ohne funktionierende
        Anmeldedaten, Funktionen hinter einem Login ohne Demokonto oder
        Screenshots, die eine Funktionalität zeigen, die im Build nicht existiert.
        Ein sauber ausgefülltes Feld für Hinweise an den Reviewer spart im Zweifel
        mehrere Tage.
      </p>

      <h2>DSA-Händlerstatus: Pflicht, und Apple veröffentlicht die Daten</h2>
      <p>
        Dieser Punkt fehlt in praktisch jedem deutschsprachigen Beitrag zum
        Thema, obwohl er unmittelbar über die Verfügbarkeit der App in der EU
        entscheidet.
      </p>
      <ul>
        <li>
          Der Händlerstatus ist für die Verbreitung in der EU nach den{" "}
          <strong>Artikeln 30 und 31 DSA</strong> erforderlich.
        </li>
        <li>
          Nach der Verifizierung <strong>veröffentlicht Apple</strong> Name,
          Adresse, Telefonnummer und E-Mail-Adresse des Händlers auf der
          Produktseite im App Store, und zwar in allen 27 EU-Territorien.
        </li>
        <li>
          Privatpersonen können eine Adresse oder ein Postfach angeben. Wer als
          Einzelperson veröffentlicht, sollte das vor der Angabe der Privatadresse
          wissen.
        </li>
        <li>
          Seit dem <strong>16. Oktober 2024</strong> ist der Status Voraussetzung
          für das Einreichen von Updates.
        </li>
        <li>
          Seit dem <strong>17. Februar 2025</strong> wurden Apps ohne
          Händlerstatus aus dem EU-App-Store entfernt, bis der Status angegeben
          und verifiziert ist.
        </li>
      </ul>
      <p>
        Für Google Play gilt das <strong>nicht analog</strong>. Eine offizielle
        Hilfeseite von Google Play, die eine gleichwertige DSA-Anforderung
        dokumentiert, ließ sich nicht finden. Google dokumentiert eine Pflicht zur
        vollständigen Adressangabe für Händlerkonten aus dem
        Verbraucherschutzrecht, und die Seite zu den allgemeinen
        Zugangsbedingungen im EWR behandelt den DMA, nicht den DSA. Wer eine
        symmetrische Pflicht in beiden Stores annimmt, argumentiert über die
        Quellenlage hinaus.
      </p>
      <p>
        Getrennt davon steht die deutsche Rechtslage: Nach juristischer
        Kommentarliteratur besteht für kommerziell betriebene Apps eine
        Impressumspflicht nach Paragraph 5 DDG, dem Nachfolger von Paragraph 5
        TMG. Das ist deutsches Recht und keine Store-Richtlinie. Für die konkrete
        Umsetzung im Einzelfall ist anwaltliche Beratung angebracht.
      </p>

      <h2>Ablauf bis zum Release</h2>
      <ol>
        <li>
          <strong>Mitgliedschaft im Apple Developer Program.</strong> 99 US-Dollar
          pro Jahr, für Organisationen zusätzlich die D-U-N-S-Nummer.
        </li>
        <li>
          <strong>Bundle-ID und App-Eintrag anlegen.</strong> Die Bundle-ID ist
          nach der Erstellung nicht mehr änderbar.
        </li>
        <li>
          <strong>API-Key erzeugen.</strong> Issuer ID und Key ID notieren, die
          .p8-Datei sofort sicher ablegen, sie ist nur einmal ladbar.
        </li>
        <li>
          <strong>Händlerstatus angeben und verifizieren lassen.</strong> Ohne ihn
          keine Updates und keine Verfügbarkeit in der EU.
        </li>
        <li>
          <strong>Datenschutzangaben ausfüllen.</strong> Datenerhebung pro
          Kategorie, plus Datenschutzerklärung als erreichbare URL.
        </li>
        <li>
          <strong>Metadaten pro Sprache pflegen.</strong> 30 Zeichen Name, 30
          Zeichen Untertitel, 100 Bytes Keywords, 170 Zeichen Promotional Text,
          4000 Zeichen Beschreibung.
        </li>
        <li>
          <strong>Screenshots hochladen.</strong> Geprüfte Größen, kein
          Alphakanal, ein bis zehn Stück pro Lokalisierung.
        </li>
        <li>
          <strong>Build hochladen und einreichen.</strong> Mit Demokonto und
          Hinweisen an den Reviewer, das verhindert die meisten Rückfragen.
        </li>
        <li>
          <strong>Phased Release nutzen.</strong> Schrittweise Verteilung statt
          alles auf einmal.
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
        Wer parallel bei Google veröffentlicht, findet die Kontoregeln, die
        12-Tester-Pflicht und die Grafikvorgaben im Leitfaden zur{" "}
        <Link href="/de/blog/google-play-console-app-veroeffentlichen">
          Google Play Console
        </Link>
        . Was ein externer Dienstleister für die laufende Optimierung kostet und
        wann sich das rechnet, steht im Beitrag zu den{" "}
        <Link href="/de/blog/aso-agentur-kosten">ASO-Kosten</Link>.
      </p>
      <p>
        Alle Angaben wurden im August 2026 gegen die Dokumentation von Apple
        geprüft. Screenshot-Größen und Metadatenlimits ändern sich schneller als
        der Rest des Prozesses, deshalb vor jedem größeren Release kurz
        gegenprüfen.
      </p>
    </ArticleLayout>
  );
}
