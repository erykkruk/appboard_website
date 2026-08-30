import Image from "next/image";
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

const SLUG = "app-preview-video-oder-screenshots";
const EN_SLUG = "app-preview-video-vs-screenshots";
const article = BLOG_ARTICLES_DE.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "App Preview Video im App Store und Promo-Video bei Google Play: was es wirklich an Conversion bringt, wie unterschiedlich beide Stores Video ausspielen und die Querformat-Falle, die Screenshots aus den Suchergebnissen entfernt.",
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
        Jede andere Fläche, die Nutzer berühren, ist längst auf Video
        umgestiegen. Instagram hat den Feed in Reels verwandelt, Facebook ist
        gefolgt, TikTok hatte nie ein statisches Format. Store-Einträge sind der
        letzte Ort, an dem viele gute Teams noch fünf statische Bilder hochladen
        und die Kreativarbeit damit für erledigt halten.
      </p>
      <p>
        Das ist nicht zwangsläufig falsch. Ein Store-Eintrag ist kein Feed, und
        die Zahlen lassen sich nicht eins zu eins übertragen. Aber der Abstand
        zwischen dem Aufwand für ein Paid-Social-Creative und dem Aufwand für ein
        App Preview ist meist nicht zu rechtfertigen, und die Mechanik von Video
        in den Stores ist so dünn dokumentiert, dass Teams, die investieren, sich
        dabei oft den eigenen Eintrag beschädigen. Es geht hier um beides: was
        Video wert ist und wie Sie es ausliefern, ohne Ihr Suchergebnis zu
        verschlechtern.
      </p>

      <h2>Die wichtigsten Erkenntnisse</h2>
      <ul>
        <li>
          Bei Meta verdoppelt Video die Klickrate an derselben Platzierung
          ungefähr und hält die Aufmerksamkeit rund dreimal so lange wie ein
          statisches Bild. Statisch gewinnt weiterhin bei der reinen
          Kosteneffizienz im Prospecting.
        </li>
        <li>
          In den Stores ist der Effekt deutlich kleiner: Herstellertests nennen{" "}
          <strong>plus 5 bis 30 Prozent Installations-Conversion</strong>, stark
          abhängig von der Kategorie. Spiele gewinnen am meisten. Manche Tests in
          Finanzen und Produktivität fallen negativ aus.
        </li>
        <li>
          Apple und Google spielen Video an völlig unterschiedlichen Stellen aus.
          Ein App Preview läuft in den Suchergebnissen. Ein Google-Play-Video
          erscheint in der Play-Suche gar nicht.
        </li>
        <li>
          Google Play hat eine zweite, kaum genutzte Videofläche: YouTube-Kanäle
          oder Playlists pro Sprache.
        </li>
        <li>
          <strong>Ein App Preview im Querformat kann die Screenshots aus Ihrer
          Trefferzeile entfernen</strong>, manchmal bleibt die Zeile ganz ohne
          Bildmaterial. Belege dafür weiter unten.
        </li>
        <li>
          Das Standbild und die ersten drei stummen Sekunden sind für die
          meisten Betrachter das gesamte Material. Behandeln Sie sie wie
          Screenshots, nicht wie ein Video.
        </li>
      </ul>

      <h2>Im Feed ist die Frage längst entschieden</h2>
      <p>
        Beginnen wir bei der Plattform mit riesigen Fallzahlen und einem
        Rückkanal von einem Tag. Aggregierte Benchmarks aus Meta-Werbekonten für
        2026 (Agenturauswertungen, keine offiziellen Meta-Zahlen, also als
        Richtung zu lesen) landen immer wieder an derselben Stelle.
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
        Video nimmt inzwischen etwa 58 Prozent der Meta-Werbebudgets ein, Reels
        liegen rund 26 Prozent günstiger pro Klick als der Feed, und die
        Interaktionsrate der Instagram Stories liegt deutlich über dem Facebook
        Feed. Der ehrliche Gegenpunkt, weil er zählt: statische Creatives
        gewinnen häufig weiterhin bei CPM, CPC und ROAS im Prospecting. Ein
        statisches Bild vermittelt ein Nutzenversprechen im Bruchteil einer
        Sekunde, und bei einer Conversion-Kampagne mit engem CPA schlägt das
        manchmal ein Video, das niemand zu Ende sieht.
      </p>
      <p>
        Die faire Zusammenfassung lautet also nicht &quot;Video gewinnt&quot;.
        Sie lautet: Video kauft Aufmerksamkeit und Interaktion, Statisch kauft
        Effizienz, und welches Format gewinnt, hängt davon ab, was Sie von genau
        dieser Platzierung brauchen.
      </p>

      <h2>Ein Store-Eintrag ist kein Feed</h2>
      <p>
        Genau deshalb lassen sich die Social-Zahlen nicht übertragen. Im Feed
        unterbrechen Sie jemanden. Video gewinnt dort, weil es das Scrollen
        besser stoppt.
      </p>
      <p>
        Auf der Produktseite hat der Nutzer bereits getippt. Er hat Absicht. Er
        entscheidet nicht mehr, ob er hinsieht, sondern ob er installiert, und
        die Aufgabe des Creatives hat sich vom Stoppen der Aufmerksamkeit zum
        Beantworten einer Frage verschoben. Deshalb werden Store-Zuwächse in
        einstelligen und niedrigen zweistelligen Prozenten gemessen und nicht in
        Vielfachen, und deshalb kann ein schlechtes Video echte Installationen
        kosten, während eine schlechte Anzeige einfach ignoriert wird.
      </p>

      <h2>Was ein Preview-Video in den Stores tatsächlich wert ist</h2>
      <p>
        Alle veröffentlichten Zahlen stammen von Anbietern von A/B-Testing-
        Plattformen, jede Angabe unten ist also eine Richtung und keine
        begutachtete Forschung. Sie sind konsistent genug, um damit zu planen.
      </p>
      <ul>
        <li>
          SplitMetrics nennt rund <strong>+16%</strong> Installations-Conversion
          durch ein App Preview im App Store.
        </li>
        <li>
          Testdaten von StoreMaven setzen denselben Effekt auf{" "}
          <strong>+20% bis +35%</strong>.
        </li>
        <li>
          Ein starker Satz statischer Screenshots ist für sich genommen ähnlich
          viel wert, und genau das wird übersprungen: Video ergänzt gute
          Screenshots, es ersetzt sie nicht.
        </li>
      </ul>
      <p>
        Nach Kategorien aufgeschlüsselt sehen die Richtwerte von AppFollow so
        aus:
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
        Und das Ergebnis, das niemand zitiert: mehrere Testanbieter berichten,
        dass Preview-Videos die Conversion in Finanzen und Produktivität aktiv{" "}
        <em>senken</em>, um 3 bis 7 Prozent. Das Muster ist einfach. Video
        gewinnt, wenn Ihre App etwas zum Zusehen ist: Gameplay, Bewegung, eine
        Veränderung, ein sozialer Moment. Es verliert, wenn Ihre App etwas zum
        Benutzen ist, denn ein Video von 20 Sekunden ist ein langsamerer Weg zu
        sagen &quot;das scannt Belege&quot; als ein einziges beschriftetes Bild.
      </p>

      <h2>Apple und Google zeigen Video an anderen Stellen</h2>
      <p>
        Hier stecken die meisten vermeidbaren Fehler. Beide Stores teilen an
        dieser Stelle fast nichts außer dem Wort &quot;Video&quot;.
      </p>
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
            <td>Ja, die Grafiken des Eintrags werden pro Sprache lokalisiert</td>
          </tr>
        </tbody>
      </table>
      <p>
        Lesen Sie die Zeile zu den Suchergebnissen noch einmal. Im App Store ist
        Video ein Entdeckungsmittel, es läuft, bevor jemand Sie gewählt hat. Bei
        Google Play ist es ein Conversion-Mittel, es existiert erst nach dem
        Tippen. Dieser eine Unterschied sollte über die Budgetverteilung
        entscheiden, und er ist das Gegenteil dessen, wie die meisten Teams
        verteilen.
      </p>

      <h2>Google Play: YouTube-Kanäle pro Sprache, die fast niemand nutzt</h2>
      <p>
        Das Feld für das Promo-Video im Haupteintrag ist nicht die einzige
        Videofläche bei Play. Unter{" "}
        <strong>Nutzer gewinnen, Store-Präsenz, YouTube-Videos</strong> hinterlegen
        Sie dem Eintrag YouTube-Kanäle oder Playlists: eine eigene Playlist für
        eine App, mehrere Playlists oder Kanäle für ein Spiel.
      </p>
      <p>
        Den Aufwand wert ist die Sprachsteuerung. Sie setzen auf jedem Kanal oder
        jeder Playlist eine Sprache, eine Sprache pro Kanal, und Play zeigt sie
        Nutzern mit passender Spracheinstellung. Ein Eintrag, der auf Englisch,
        Polnisch, Deutsch und Spanisch lokalisiert ist, kann so vier getrennte
        Videoflächen tragen statt einer. Sehr wenige Einträge tun das.
      </p>
      <p>Die Regeln, an denen es sonst scheitert:</p>
      <ul>
        <li>
          Videos müssen öffentlich sichtbar sein, Playlists dürfen ungelistet
          sein.
        </li>
        <li>
          Monetarisierung aus, keine Anzeigen, Einbetten erlaubt, im Besitz Ihrer
          App oder Ihres Spiels.
        </li>
        <li>Keine YouTube Shorts und keine Livevideos.</li>
        <li>
          Aktualitätsfenster für Spiele: hochgeladen in den letzten 90 Tagen für
          die Anzeige im Eintrag, 21 Tage für den Tab Spiele, 180 Tage für den
          Tab Apps.
        </li>
        <li>
          Erforderlich sind die Berechtigung für Premium growth tools und das
          Recht zur Verwaltung der Store-Präsenz im Konto.
        </li>
      </ul>
      <p>
        Die Play Console berichtet anschließend Zuschauer, Klickrate und
        Installationen über 28 Tage, also mehr Messbarkeit, als Apple für
        Previews liefert.
      </p>
      <p>
        Ein Beispiel aus der Praxis:{" "}
        <a
          href="https://play.google.com/store/apps/details?id=tech.ravenlab.buzzin"
          rel="noopener"
          target="_blank"
        >
          Buzzin: TV Party Game Show bei Google Play
        </a>
        , ein Partyspiel, bei dem Video echte Arbeit leistet, weil das Produkt
        buchstäblich Menschen sind, die zusammen in einem Raum spielen. Zur URL
        selbst: Play akzeptiert einen <code>referrer</code>-Parameter an
        Store-Links. Wenn Sie wissen wollen, ob das Video, der Newsletter oder
        die TikTok-Kampagne eine Installation gebracht hat, markieren Sie den
        Link vor dem Teilen, statt aus einem Ausschlag der Installationszahl zu
        raten.
      </p>

      <h2>Die Querformat-Falle im App Store</h2>
      <p>
        Apple erlaubt App Previews im Hoch- oder Querformat und warnt vor keiner
        der Folgen. Es gibt zwei, und beide sind hässlich, wenn Ihre Screenshots
        im Hochformat vorliegen.
      </p>
      <p>
        <strong>Auf der Produktseite</strong> führt ein Querformat-Video nicht
        die Screenshot-Galerie an. Es wandert in einen eigenen Abschnitt namens{" "}
        <em>A Closer Look</em>, getrennt von den Screenshots:
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
          Ein Querformat-Preview landet im eigenen Block <em>A Closer Look</em>,
          statt die Galerie anzuführen.
        </figcaption>
      </figure>
      <p>
        Schlimmer noch, das Layout ist nicht für alle gleich. Wer die App bereits
        geladen hat oder sie im Konto besitzt, sieht das Video an anderer Stelle.
        Ihren eigenen Eintrag auf dem eigenen Telefon zu prüfen, sagt also sehr
        wenig aus. Prüfen Sie auf einem Gerät, das die App nie installiert hatte.
      </p>
      <p>
        <strong>In den Suchergebnissen</strong> nimmt ein Querformat-Preview die
        volle Breite der Zeile ein, und die Screenshots werden nicht daneben
        gezeigt. Das ist das dokumentierte Verhalten. In der Praxis kommt es
        schlimmer: die Zeile erscheint ganz ohne Bildmaterial.
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
          Dieselbe App in der Suche. Die Einträge darüber und darunter zeigen je
          drei Bilder. Unserer zeigt nichts außer Symbol, Titel und Untertitel.
        </figcaption>
      </figure>
      <p>
        Sehen Sie sich die mittlere Zeile an und dann ihre Nachbarn. Zwei
        Wettbewerber setzen je drei Bilder Bildschirmfläche für ihre Sache ein,
        und die App dazwischen ist eine Textzeile. Suchergebnisse sind der Ort
        des schnellen Überfliegens und des direkten Vergleichs. Dort das Creative
        zu verlieren, kostet mehr, als das Video auf der Produktseite verdienen
        sollte.
      </p>

      <h3>Was Sie dagegen tun</h3>
      <ul>
        <li>
          <strong>Ist Ihre App im Hochformat, bleibt das Preview im
          Hochformat.</strong> Ein Hochformat-Preview steht in der Zeile neben
          Ihren ersten Screenshots, statt sie zu ersetzen, Sie behalten also
          beide Flächen.
        </li>
        <li>
          <strong>Ist Ihr Produkt wirklich im Querformat</strong>, ein
          TV-Spiel, ein Rennspiel, ein Videoeditor, dann haben Sie eine echte
          Entscheidung und keinen Fehler gemacht. Entweder Sie setzen das
          Querformat-Material mit Balken in einen Hochformat-Rahmen, damit die
          Zeile die Galerie behält, oder Sie nehmen die leere Zeile bewusst in
          Kauf und lassen Symbol, Titel und Untertitel die Arbeit machen.
        </li>
        <li>
          <strong>Mischen Sie nie die Ausrichtungen</strong> innerhalb eines
          Screenshot-Satzes für ein Gerät. Neben dem Layout-Durcheinander ist
          eine Hochformat-Oberfläche in einem Querformat-Rahmen ein
          dokumentierter Ablehnungsgrund im App Review.
        </li>
        <li>
          <strong>Prüfen Sie nach jeder Veröffentlichung.</strong> Diese
          Darstellung hat sich mehr als einmal geändert, und Apple dokumentiert
          sie dünn. Suchen Sie nach jedem Metadaten-Release Ihre eigene App auf
          einem sauberen Gerät und sehen Sie sich die Zeile an, nicht nur die
          Seite.
        </li>
      </ul>
      <p>
        Dieselbe App im anderen Store, zum Vergleich:{" "}
        <a
          href="https://apps.apple.com/pl/app/buzzin-tv-party-game-show/id6787068440"
          rel="noopener"
          target="_blank"
        >
          Buzzin im App Store
        </a>
        . Gleiches Produkt, gleiches Material, zwei völlig verschiedene Sätze von
        Einschränkungen, und genau darum geht es hier.
      </p>

      <h2>Ihr Standbild ist ein Screenshot</h2>
      <p>
        Automatisches Abspielen ist bedingt. Es hängt von der Fläche, dem Gerät,
        dem Stromsparmodus, den Netzbedingungen und den Einstellungen des Nutzers
        ab. Wenn es ausbleibt, schrumpft das ganze Video auf ein einziges Bild:
        das Standbild.
      </p>
      <p>
        Damit leistet das Standbild Screenshot-Arbeit und sollte auch so gebaut
        sein. Geben Sie ihm eine Beschriftung, achten Sie auf Lesbarkeit in
        Miniaturgröße und wählen Sie einen Moment, der zeigt, was die App ist,
        statt einer Titeltafel oder einer Logoanimation. Ein Standbild aus
        schwarzem Hintergrund mit Wortmarke ist ein verschenkter Platz auf der
        wertvollsten Fläche Ihres Eintrags.
      </p>

      <h2>Die ersten drei Sekunden müssen ohne Ton funktionieren</h2>
      <p>
        In den Suchergebnissen spielt der App Store Ihr Preview stumm. Nehmen Sie
        an, es gibt nie Ton, und nehmen Sie an, die meisten steigen vor der
        Hälfte aus.
      </p>
      <ul>
        <li>
          Zeigen Sie das Produkt in der ersten Sekunde. Kein Logo-Intro, kein
          Splash.
        </li>
        <li>
          Tragen Sie die Botschaft im Text auf dem Bild, denn für den Betrachter
          gibt es keine Stimme aus dem Off.
        </li>
        <li>
          Setzen Sie den besten Moment nach vorn. Bauen Sie nicht darauf hin, Sie
          kommen dort nicht an.
        </li>
        <li>
          Bleiben Sie bei 15 bis 20 Sekunden, obwohl Apple 30 erlaubt. Kürzere
          Schleifen werden öfter als einmal gesehen.
        </li>
        <li>
          Lokalisieren Sie. Video ist in beiden Stores pro Lokalisierung, und
          eingebrannter englischer Text auf einem deutschen Eintrag ist derselbe
          Fehler wie eine unübersetzte Screenshot-Beschriftung. Mehr dazu im Text
          zur{" "}
          <Link href="/de/blog/app-store-optimierung">
            App Store Optimierung
          </Link>
          .
        </li>
      </ul>

      <h2>Sollten Sie überhaupt eines produzieren?</h2>
      <p>Ein paar ehrliche Prüfsteine, bevor Sie Budget ausgeben:</p>
      <ol>
        <li>
          <strong>Sind Ihre Screenshots schon gut?</strong> Wenn Ihre ersten
          beiden Bilder rohe Aufnahmen ohne Beschriftung sind, reparieren Sie
          zuerst die. Das ist der größere und günstigere Gewinn.
        </li>
        <li>
          <strong>Gibt es Bewegung, die sehenswert ist?</strong> Wenn ein
          Standbild dasselbe vermittelt, bringt das Video Ladezeit und Risiko,
          aber keine zusätzliche Information.
        </li>
        <li>
          <strong>Halten Sie es aktuell?</strong> Ein App Preview mit einer
          Oberfläche von vor zwei Redesigns ist schlechter als kein Video, und
          bei Play haben die YouTube-Flächen ausdrückliche Aktualitätsfenster.
        </li>
        <li>
          <strong>Für welchen Store tun Sie das?</strong> Im App Store kauft
          Video eine Entdeckungsfläche. Bei Play zahlt es sich erst nach dem
          Tippen aus. Bei knappem Budget zuerst iOS.
        </li>
      </ol>

      <h2>Testen statt Benchmarks glauben</h2>
      <p>
        Jede Zahl in diesem Text ist der Durchschnitt von jemand anderem. Beide
        Stores geben Ihnen kostenlose Werkzeuge, um Ihren eigenen zu finden:
        Product Page Optimization im App Store, Store-Eintrag-Experimente bei
        Google Play. Testen Sie Video gegen kein Video, und getrennt davon
        Standbilder gegeneinander, denn das sind zwei verschiedene Experimente,
        die regelmäßig vermischt werden. Die Einrichtung beider Konsolen steht in
        den Leitfäden zu{" "}
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
        Geben Sie einem Test mindestens zwei Wochen und genug Traffic, ändern Sie
        eine Sache auf einmal und notieren Sie, wie der Eintrag aussah, als sich
        die Zahlen bewegten. Genau das bricht still weg: ein halbes Jahr später
        weiß niemand mehr, welcher Screenshot-Satz im guten Quartal live war oder
        welche Sprachen je das lokalisierte Video bekommen haben. Festzuhalten,
        was wann pro Sprache und pro Store ausgeliefert wurde, ist ein großer Teil
        dessen, wofür wir <Link href="/pricing">AppBoard</Link> gebaut haben, aber
        eine Tabelle, die Sie wirklich pflegen, schlägt ein Werkzeug, das Sie
        nicht nutzen.
      </p>
      <p>
        Was auch immer Sie ausliefern, machen Sie zuerst die billige Probe.
        Suchen Sie Ihre eigene App auf einem Telefon, das sie nie installiert
        hatte, und sehen Sie, was die Zeile darstellt. Kommt eine Textzeile
        zwischen zwei Wettbewerbern mit je drei Bildern zurück, repariert das
        keine Produktionsqualität der Welt.
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
        2026. Die Conversion-Zahlen stammen von Anbietern von A/B-Testing-
        Plattformen (SplitMetrics, StoreMaven, AppFollow) und sind Richtwerte,
        keine begutachtete Forschung. Wenn Sie das deutlich später lesen, prüfen
        Sie Limits und Suchergebnis-Verhalten vor einem Release erneut.
      </p>
    </ArticleLayout>
  );
}
