import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { Callout, JsonLd } from "@/components/ui";
import { BLOG_ARTICLES_DE } from "@/lib/blog";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "app-preview-video-oder-screenshots";
const EN_SLUG = "app-preview-video-vs-screenshots";
const article = BLOG_ARTICLES_DE.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Was ein App Preview Video wirklich bringt, wie unterschiedlich App Store und Google Play Video ausspielen, YouTube-Kanäle pro Sprache und die Querformat-Falle, die Ihr Suchergebnis ohne Screenshots zurücklässt.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "de_DE",
  ogType: "article",
  path: `/de/blog/${SLUG}`,
  publishedTime: "2026-08-30",
  title: "App Preview Video oder Screenshots",
});

const IMAGES = [
  "/images/blog/app-store-landscape-app-preview.jpg",
  "/images/blog/app-store-search-no-screenshots.jpg",
];

const FAQ: FaqEntry[] = [
  {
    answer:
      "Anbieter von A/B-Testing-Plattformen berichten von einem Conversion-Plus von rund 16 Prozent (SplitMetrics) bis 20 bis 35 Prozent (StoreMaven). Das sind Herstellerdaten und keine begutachtete Forschung, also nur als Richtung zu verstehen. Der Effekt hängt stark von der Kategorie ab: Spiele gewinnen am meisten, während mehrere Tests in Finanzen und Produktivität einen Rückgang von 3 bis 7 Prozent zeigen, weil ein Video langsamer erklärt als ein einziger beschrifteter Screenshot.",
    question: "Erhöht ein App Preview Video die Installationen?",
  },
  {
    answer:
      "Der App Store erlaubt bis zu 3 App Previews pro Lokalisierung, jeweils 15 bis 30 Sekunden, als Datei hochgeladen (M4V, MP4 oder MOV, bis 500 MB). Google Play nimmt ein Promo-Video pro Store-Eintrag, und zwar ausschließlich als URL eines einzelnen YouTube-Videos, nicht als Playlist und nicht als Kanal.",
    question: "Wie viele Videos sind im App Store und bei Google Play möglich?",
  },
  {
    answer:
      "Die häufigste Ursache ist ein App Preview im Querformat bei Screenshots im Hochformat. Ein Querformat-Video nimmt die volle Breite der Trefferzeile ein, die Screenshots werden daneben nicht angezeigt, und in der Praxis kann die Zeile ganz ohne Bildmaterial erscheinen. Prüfen Sie das auf einem Gerät, auf dem die App nie installiert war, denn für Nutzer mit installierter App sieht die Produktseite anders aus.",
    question:
      "Warum zeigt meine App in den App-Store-Suchergebnissen keine Screenshots?",
  },
  {
    answer:
      "Nein. Das Promo-Video von Google Play erscheint in der Play-Suche überhaupt nicht. Es wirkt erst auf der Produktseite, wo es stummgeschaltet bis zu 30 Sekunden automatisch abspielen kann. Im App Store ist es umgekehrt: Dort läuft das App Preview bereits in den Suchergebnissen, bevor jemand Sie ausgewählt hat.",
    question: "Erscheint das Google-Play-Video in den Suchergebnissen?",
  },
  {
    answer:
      "Ja, in beiden Stores. Im App Store sind Videos pro Lokalisierung hinterlegt. Bei Google Play werden die Grafiken des Store-Eintrags inklusive Video pro Sprache lokalisiert. Zusätzlich hat Play eine eigene, selten genutzte Fläche: unter Nutzer gewinnen, Store-Präsenz, YouTube-Videos hinterlegen Sie Kanäle oder Playlists mit gesetzter Sprache, eine Sprache pro Kanal.",
    question: "Lässt sich pro Sprache ein eigenes Video hinterlegen?",
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
      locale="de"
      translationHref={`/blog/${EN_SLUG}`}
    >
      <JsonLd data={buildFaqSchema(`/de/blog/${SLUG}`, FAQ, "de-DE")} />
      <p>
        Jede andere Fläche ist vor Jahren auf Video umgestiegen. Store-Einträge
        sind der letzte Ort, an dem gute Teams noch fünf statische Bilder
        hochladen, und wer Video ergänzt, beschädigt dabei oft das eigene
        Suchergebnis.
      </p>

      <Callout title="Kurz gefasst">
        <ul>
          <li>
            Bei Meta verdoppelt Video die Klickrate an derselben Platzierung
            ungefähr. Statisch gewinnt weiterhin bei der Kosteneffizienz.
          </li>
          <li>
            In den Stores ist der Effekt kleiner: etwa{" "}
            <strong>plus 5 bis 30 Prozent Installations-Conversion</strong>, je
            nach Kategorie. Spiele gewinnen am meisten, manche Tests in Finanzen
            und Produktivität fallen negativ aus.
          </li>
          <li>
            Ein App Preview läuft in den Suchergebnissen. Ein Google-Play-Video
            erscheint in der Play-Suche gar nicht.
          </li>
          <li>
            Play hat eine zweite, kaum genutzte Fläche: YouTube-Kanäle pro
            Sprache.
          </li>
          <li>
            <strong>
              Ein Querformat-Preview kann die Screenshots aus Ihrer Trefferzeile
              entfernen
            </strong>
            , manchmal bleibt die Zeile ganz ohne Bildmaterial.
          </li>
        </ul>
      </Callout>

      <h2>Was Video tatsächlich wert ist</h2>
      <p>
        Aggregierte Benchmarks aus Meta-Werbekonten für 2026 (Agenturauswertungen,
        keine offiziellen Meta-Zahlen, also Richtwerte):
      </p>
      <table>
        <thead>
          <tr>
            <th>Kennzahl</th>
            <th>Statisches Bild</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CTR an derselben Reels-Platzierung</td>
            <td>0,62%</td>
            <td>1,31%</td>
          </tr>
          <tr>
            <td>Durchschnittliche CTR über alle Platzierungen</td>
            <td>0,90%</td>
            <td>1,14%</td>
          </tr>
          <tr>
            <td>Verweildauer beim Creative</td>
            <td>1,4 s</td>
            <td>4,7 s</td>
          </tr>
          <tr>
            <td>Conversion in der Mitte des Funnels</td>
            <td>1,6%</td>
            <td>2,1%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Diese Zahlen lassen sich nicht übertragen. Im Feed unterbrechen Sie
        jemanden, und Video gewinnt, weil es das Scrollen stoppt. Auf der
        Produktseite hat der Nutzer bereits getippt und entscheidet über die
        Installation. Deshalb liegen Store-Zuwächse im einstelligen und niedrigen
        zweistelligen Bereich, und deshalb kostet ein schlechtes Video echte
        Installationen, während eine schlechte Anzeige nur ignoriert wird.
      </p>
      <p>
        SplitMetrics nennt rund <strong>+16%</strong> durch ein App Preview,
        StoreMaven <strong>+20% bis +35%</strong>. Ein starker statischer Satz ist
        für sich genommen ähnlich viel wert, Video ergänzt also gute Screenshots,
        statt sie zu ersetzen. Nach Kategorien, Richtwerte von AppFollow:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kategorie</th>
            <th>Conversion-Plus durch Video</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spiele</td>
            <td>+8% bis +18%</td>
          </tr>
          <tr>
            <td>Gesundheit und Fitness</td>
            <td>+7% bis +14%</td>
          </tr>
          <tr>
            <td>Fintech</td>
            <td>+6% bis +12%</td>
          </tr>
          <tr>
            <td>Social</td>
            <td>+5% bis +11%</td>
          </tr>
          <tr>
            <td>E-Commerce</td>
            <td>+4% bis +10%</td>
          </tr>
          <tr>
            <td>Werkzeuge</td>
            <td>+3% bis +9%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Mehrere Testanbieter berichten außerdem, dass Video die Conversion in
        Finanzen und Produktivität um 3 bis 7 Prozent <em>senkt</em>. Die Regel:
        Video gewinnt, wenn Ihre App etwas zum Zusehen ist, und verliert, wenn
        sie etwas zum Benutzen ist.
      </p>

      <h2>Die beiden Stores zeigen Video anders</h2>
      <table>
        <thead>
          <tr>
            <th>Merkmal</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Videos pro Eintrag</td>
            <td>Bis zu 3 pro Lokalisierung</td>
            <td>1 Promo-Video pro Store-Eintrag</td>
          </tr>
          <tr>
            <td>Art der Übergabe</td>
            <td>Hochgeladene Datei (M4V, MP4, MOV, bis 500 MB)</td>
            <td>URL eines einzelnen YouTube-Videos, keine Playlist, kein Kanal</td>
          </tr>
          <tr>
            <td>Länge</td>
            <td>15 bis 30 s</td>
            <td>Kein hartes Limit, empfohlen 30 bis 90 s</td>
          </tr>
          <tr>
            <td>In den Suchergebnissen</td>
            <td>Spielt stumm automatisch ab</td>
            <td>Erscheint gar nicht</td>
          </tr>
          <tr>
            <td>Auf der Produktseite</td>
            <td>Spielt automatisch ab</td>
            <td>Kann stumm bis 30 s abspielen, geräteabhängig</td>
          </tr>
          <tr>
            <td>Ausrichtung</td>
            <td>Hoch- oder Querformat, und das ändert das Layout</td>
            <td>Querformat 16:9 bevorzugt</td>
          </tr>
          <tr>
            <td>Pro Sprache</td>
            <td>Ja, pro Lokalisierung</td>
            <td>Ja, die Grafiken werden pro Sprache lokalisiert</td>
          </tr>
        </tbody>
      </table>
      <p>
        Im App Store ist Video ein Entdeckungsmittel, es läuft, bevor jemand Sie
        gewählt hat. Bei Play existiert es erst nach dem Tippen. Dieser eine
        Unterschied sollte die Budgetverteilung entscheiden, und er ist das
        Gegenteil dessen, wie die meisten Teams verteilen.
      </p>

      <h2>Play: YouTube-Kanäle pro Sprache</h2>
      <p>
        Unter <strong>Nutzer gewinnen, Store-Präsenz, YouTube-Videos</strong>{" "}
        hinterlegen Sie dem Eintrag Kanäle oder Playlists mit gesetzter Sprache,
        eine Sprache pro Kanal. Ein Eintrag in vier Sprachen kann so vier
        Videoflächen tragen statt einer. Sehr wenige tun das. Die Regeln:
      </p>
      <ul>
        <li>Öffentliche Videos, Playlists dürfen ungelistet sein.</li>
        <li>
          Monetarisierung aus, Einbetten erlaubt, im Besitz Ihrer App oder Ihres
          Spiels.
        </li>
        <li>Keine Shorts, keine Livevideos.</li>
        <li>
          Spiele: hochgeladen in den letzten 90 Tagen für den Eintrag, 21 Tage
          für den Tab Spiele, 180 Tage für den Tab Apps.
        </li>
        <li>
          Erforderlich sind Premium growth tools und das Recht zur Verwaltung der
          Store-Präsenz.
        </li>
        <li>Eine Playlist für eine App, mehrere für ein Spiel.</li>
      </ul>
      <p>
        Die Play Console berichtet dann Zuschauer, Klickrate und Installationen
        über 28 Tage. Ein Beispiel:{" "}
        <a
          href="https://play.google.com/store/apps/details?id=tech.ravenlab.buzzin"
          rel="noopener"
          target="_blank"
        >
          Buzzin: TV Party Game Show
        </a>
        . Play akzeptiert außerdem einen <code>referrer</code>-Parameter an
        Store-Links, markieren Sie sie also vor dem Teilen, statt zu raten.
      </p>

      <h2>Die Querformat-Falle im App Store</h2>
      <p>
        Apple erlaubt Hoch- und Querformat und warnt vor keiner der Folgen. Auf
        der Produktseite führt ein Querformat-Video nicht die Galerie an, es
        wandert in einen eigenen Abschnitt <em>A Closer Look</em>:
      </p>
      <figure>
        <Image
          alt="App-Store-Produktseite von Buzzin mit einem App Preview im Querformat in einem eigenen Abschnitt A Closer Look, unterhalb von Neuheiten und oberhalb der Galerie mit Screenshots im Hochformat"
          className="mx-auto w-full max-w-[320px]"
          height={1348}
          sizes="(min-width: 640px) 320px, 100vw"
          src="/images/blog/app-store-landscape-app-preview.jpg"
          width={620}
        />
        <figcaption>
          Querformat-Preview, in einen eigenen Block geschoben statt an die
          Spitze der Galerie.
        </figcaption>
      </figure>
      <p>
        In den Suchergebnissen nimmt es die volle Breite der Zeile ein, die
        Screenshots werden nicht daneben gezeigt. In der Praxis kommt es
        schlimmer: die Zeile erscheint ohne jedes Bild. Unten steht dieselbe App
        zwischen zwei Wettbewerbern mit je drei Bildern und zeigt nichts außer
        Symbol und einer Textzeile.
      </p>
      <figure>
        <Image
          alt="App-Store-Suchergebnisse, in denen der Eintrag von Buzzin nur Symbol, Titel und Bewertung zeigt und keine Screenshots, während die Apps darüber und darunter je drei Bilder anzeigen"
          className="mx-auto w-full max-w-[320px]"
          height={1348}
          sizes="(min-width: 640px) 320px, 100vw"
          src="/images/blog/app-store-search-no-screenshots.jpg"
          width={620}
        />
        <figcaption>
          Dieselbe App in der Suche. Nachbarn je drei Bilder, wir eine Textzeile.
        </figcaption>
      </figure>
      <Callout title="Prüfen Sie das vor allem anderen" variant="warning">
        <p>
          Suchergebnisse sind der Ort des direkten Vergleichs. Dort das Creative
          zu verlieren, kostet mehr, als das Video auf der Produktseite verdienen
          sollte, und nichts in App Store Connect warnt Sie davor.
        </p>
      </Callout>
      <ul>
        <li>
          <strong>Hochformat-App, Hochformat-Preview.</strong> Es steht dann
          neben Ihren ersten Screenshots, statt sie zu ersetzen.
        </li>
        <li>
          <strong>Wirklich querformatiges Produkt</strong> (TV-Spiel, Rennspiel,
          Videoeditor): entweder das Material mit Balken in einen
          Hochformat-Rahmen setzen, damit die Zeile die Galerie behält, oder die
          leere Zeile bewusst in Kauf nehmen.
        </li>
        <li>
          <strong>Nie Ausrichtungen mischen</strong> innerhalb eines Geräte-Satzes.
          Eine Hochformat-Oberfläche in einem Querformat-Rahmen ist ein
          dokumentierter Ablehnungsgrund im App Review.
        </li>
        <li>
          <strong>Nach jedem Release auf einem sauberen Gerät prüfen.</strong> Für
          Nutzer mit installierter App sieht das Layout anders aus.
        </li>
      </ul>
      <p>
        Dieselbe App im anderen Store:{" "}
        <a
          href="https://apps.apple.com/pl/app/buzzin-tv-party-game-show/id6787068440"
          rel="noopener"
          target="_blank"
        >
          Buzzin im App Store
        </a>
        .
      </p>

      <h2>Die Handwerksregeln, die über das Ergebnis entscheiden</h2>
      <ul>
        <li>
          <strong>Ihr Standbild ist ein Screenshot.</strong> Automatisches
          Abspielen ist bedingt, und wenn es ausbleibt, schrumpft das Video auf
          dieses eine Bild. Beschriften, in Miniaturgröße lesbar halten, nie ein
          schwarzer Bildschirm mit Wortmarke.
        </li>
        <li>
          <strong>Die ersten drei Sekunden funktionieren ohne Ton.</strong>{" "}
          Produkt in Sekunde eins, Botschaft als Text im Bild, bester Moment nach
          vorn.
        </li>
        <li>
          <strong>15 bis 20 Sekunden</strong>, obwohl Apple 30 erlaubt. Kürzere
          Schleifen werden öfter gesehen.
        </li>
        <li>
          <strong>Lokalisieren.</strong> Video ist in beiden Stores pro
          Lokalisierung.
        </li>
        <li>
          <strong>Aktuell halten.</strong> Ein Preview von vor zwei Redesigns ist
          schlechter als kein Video.
        </li>
      </ul>

      <h2>Bevor Sie Budget ausgeben</h2>
      <ol>
        <li>
          Sind Ihre ersten beiden Bilder rohe Aufnahmen ohne Beschriftung,
          reparieren Sie zuerst die. Größerer und günstigerer Gewinn.
        </li>
        <li>
          Vermittelt ein Standbild dasselbe, bringt das Video Ladezeit und Risiko
          ohne zusätzliche Information.
        </li>
        <li>
          Bei knappem Budget zuerst iOS: dort kauft Video eine Entdeckungsfläche,
          bei Play zahlt es sich erst nach dem Tippen aus.
        </li>
      </ol>
      <p>
        Testen Sie dann, statt den Durchschnitten oben zu glauben. Product Page
        Optimization im App Store und Store-Eintrag-Experimente bei Google Play
        sind kostenlos. Video gegen kein Video, und getrennt davon Standbilder
        gegeneinander. Zwei Wochen pro Test, eine Variable, und notieren, wie der
        Eintrag aussah, als sich die Zahlen bewegten. Genau das bricht still weg,
        und festzuhalten, was wann pro Sprache und pro Store ausgeliefert wurde,
        ist ein großer Teil dessen, wofür wir{" "}
        <Link href="/pricing">AppBoard</Link> gebaut haben. Die Einrichtung
        beider Konsolen steht in den Leitfäden zu{" "}
        <Link href="/de/blog/app-store-connect-app-veroeffentlichen">
          App Store Connect
        </Link>{" "}
        und{" "}
        <Link href="/de/blog/google-play-console-app-veroeffentlichen">
          Google Play Console
        </Link>
        .
      </p>
      <p>
        Machen Sie zuerst die billige Probe. Suchen Sie Ihre App auf einem
        Telefon, das sie nie installiert hatte, und sehen Sie, was die Zeile
        darstellt. Kommt eine Textzeile zwischen zwei Wettbewerbern mit je drei
        Bildern zurück, repariert das keine Produktionsqualität.
      </p>

      <h2>Häufige Fragen</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Store-Regeln geprüft an der Dokumentation von Apple und Google im August
        2026. Die Conversion-Zahlen stammen von A/B-Testing-Anbietern
        (SplitMetrics, StoreMaven, AppFollow) und sind Richtwerte.
      </p>
    </ArticleLayout>
  );
}
