import type { SiteLocale } from "@/lib/i18n/locales";
import type { FaqEntry } from "@/lib/schema";

export interface FaqCategoryContent {
  entries: FaqEntry[];
  title: string;
}

export interface FaqOutroContent {
  accountCta: string;
  demoCta: string;
  lead: string;
  title: string;
}

export interface FaqPageContent {
  categories: FaqCategoryContent[];
  eyebrow: string;
  lead: string;
  outro: FaqOutroContent;
  title: string;
}

const EN: FaqPageContent = {
  categories: [
    {
      entries: [
        {
          answer:
            "AppBoard is one panel for managing your App Store and Google Play listings - metadata, screenshots, versions, reviews and ASO research - instead of jumping between App Store Connect and the Play Console. It's built for indie developers and small teams shipping the same app on both stores.",
          question: "What is AppBoard?",
        },
        {
          answer:
            "Yes. The live demo is a real AppBoard workspace pre-filled with example apps, reviews and listing history. It opens in one click - no signup and no store credentials - so you can click through every screen before deciding.",
          question: "Can I try it without connecting my own apps?",
        },
        {
          answer:
            "You sign in with your email and a one-time code we send you. There's no password to create or remember, and nothing to reset.",
          question: "How does login work?",
        },
        {
          answer:
            "About ten minutes if you have your store keys ready - an App Store Connect API key and a Google Play service account. Once they're connected, AppBoard imports your apps and listings automatically.",
          question: "How long does setup take?",
        },
        {
          answer:
            "Yes. AppBoard is an open-source product, and the whole tool runs in the web panel - there's no desktop app, no plugin and nothing to install. Any modern browser is enough.",
          question: "Is AppBoard open source, and do I need to install anything?",
        },
      ],
      title: "Getting started",
    },
    {
      entries: [
        {
          answer:
            "Both. App Store Connect connects with an API key - Issuer ID, Key ID and the .p8 file. Google Play connects with a service account JSON. Apps from both stores then sit side by side in one workspace.",
          question: "Which stores does AppBoard support?",
        },
        {
          answer:
            "Google's Reporting API doesn't expose apps that are still in draft, so a brand-new app won't show up on its own. You can register its package manually and AppBoard will track it from then on.",
          question: "Why doesn't my Google Play draft app appear?",
        },
        {
          answer:
            "Yes. A full re-import per store pulls everything fresh from the store and replaces the local data for that store - useful if something drifted out of sync or you changed things directly in the store console.",
          question: "Can I re-sync everything from a store?",
        },
        {
          answer:
            "Yes. You can have multiple apps and multiple workspaces, and app groups link the Android and iOS versions of the same app so you edit and compare them together.",
          question: "Can I manage multiple apps and workspaces?",
        },
      ],
      title: "Stores & connections",
    },
    {
      entries: [
        {
          answer:
            "In an end-to-end encrypted vault. The encryption key is derived from your passphrase, so AppBoard's servers only ever store ciphertext and never see your keys in plaintext.",
          question: "How are my store credentials stored?",
        },
        {
          answer:
            "By design there's no backdoor, so a reset wipes the stored credentials and you re-enter your keys afterwards. That's the trade-off for the servers never being able to read them.",
          question: "What happens if I forget my passphrase?",
        },
        {
          answer:
            "Only what you explicitly trigger. AppBoard uses your keys to read and edit listings, but nothing is ever published to a store without an explicit action from you.",
          question: "What can AppBoard actually do with my keys?",
        },
        {
          answer:
            "No. Credentials stay encrypted in the vault, and everything in AppBoard is workspace-scoped - teammates work with your listings without ever seeing the raw keys.",
          question: "Can teammates see my credentials?",
        },
      ],
      title: "Security",
    },
    {
      entries: [
        {
          answer:
            "No. Everything you change is a draft, you get a per-field diff preview of exactly what will change before you publish, and every published change is kept in history with one-click rollback.",
          question: "Can AppBoard break my live listing?",
        },
        {
          answer:
            "Every published change, per field and per language, shown as a red/green diff. You can see what changed, when, and roll any field back.",
          question: "What's tracked in history?",
        },
        {
          answer:
            "You can push a version as a draft or send it for review. AppBoard doesn't override the managed-publishing timing you've set - that stays in the Play Console.",
          question: "What publishing options exist on Google Play?",
        },
        {
          answer:
            "Screenshots are managed per device and per language at exact store dimensions, and the built-in editor composes scenes - device frame, background, headline - and exports each image at the precise size the stores require, with language variants of the same scene.",
          question: "How does AppBoard handle screenshots?",
        },
        {
          answer:
            'Upload one wide panorama and AppBoard splits it into 2-10 consecutive screenshots for the panoramic store-listing effect. And if an image has the wrong size, the crop tool locks to per-device presets - from iPhone 3.5" to iPad Pro 12.9" to Android tablets - so the store accepts the upload on the first try.',
          question: "What about panoramas and wrong-sized images?",
        },
      ],
      title: "Editing & publishing",
    },
    {
      entries: [
        {
          answer:
            "Your own. AI runs through your OpenRouter key with any model you choose, and you pay the provider directly - AppBoard doesn't mark up or resell tokens.",
          question: "Whose AI key does AppBoard use?",
        },
        {
          answer:
            "It drafts descriptions, translations, keyword ideas and review replies. Everything the AI produces is a suggestion you review and approve - nothing reaches a store automatically.",
          question: "What does the AI actually do?",
        },
        {
          answer:
            "Yes. Scraping, rank tracking and heuristic grouping of negative reviews all work without an AI key. Adding your own key layers deeper AI analysis on top.",
          question: "Does research work without AI?",
        },
        {
          answer:
            "Yes. You can research any app on the stores - its keywords, the markets it ranks in, its reviews, and a side-by-side visual comparison with yours.",
          question: "Can I research competitors?",
        },
      ],
      title: "AI & research",
    },
    {
      entries: [
        {
          answer:
            "AppBoard is free while it's in beta. No credit card is required, and you'll get advance notice before any paid plan is introduced.",
          question: "How much does AppBoard cost?",
        },
        {
          answer:
            "Early users get notice and a migration path onto whatever plan fits - no silent charging and no surprise switch from free to paid.",
          question: "What happens to my account after the beta?",
        },
      ],
      title: "Billing",
    },
  ],
  eyebrow: "FAQ",
  lead: "Honest answers about how AppBoard connects to your stores, keeps your credentials encrypted, and lets you edit and publish without breaking anything live.",
  outro: {
    accountCta: "Create free account",
    demoCta: "Explore the live demo",
    lead: "The fastest way to get an answer is to try it. Open the live demo and click through a real workspace, or create your own account free while AppBoard is in beta.",
    title: "Still have a question?",
  },
  title: "Everything people ask before trusting us with their store keys",
};

const PL: FaqPageContent = {
  categories: [
    {
      entries: [
        {
          answer:
            "AppBoard to jeden panel do zarządzania listingami w App Store i Google Play: metadane, screenshoty, wersje, opinie i research ASO, zamiast skakania między App Store Connect a Play Console. Powstał z myślą o indie deweloperach i małych zespołach, które wydają tę samą aplikację w obu sklepach.",
          question: "Czym jest AppBoard?",
        },
        {
          answer:
            "Tak. Demo na żywo to prawdziwy workspace AppBoard wypełniony przykładowymi aplikacjami, opiniami i historią listingów. Otwiera się jednym kliknięciem, bez rejestracji i bez danych dostępowych do sklepów, więc obejrzysz każdy ekran, zanim się zdecydujesz.",
          question: "Czy mogę to sprawdzić bez podłączania własnych aplikacji?",
        },
        {
          answer:
            "Logujesz się mailem i jednorazowym kodem, który Ci wysyłamy. Nie ma hasła do wymyślania ani zapamiętywania, więc nie ma też czego resetować.",
          question: "Jak działa logowanie?",
        },
        {
          answer:
            "Jakieś dziesięć minut, jeśli masz pod ręką klucze do sklepów: API key z App Store Connect i konto serwisowe Google Play. Po podłączeniu AppBoard sam zaciąga Twoje aplikacje i listingi.",
          question: "Ile trwa konfiguracja?",
        },
        {
          answer:
            "Tak. AppBoard jest produktem open source, a całe narzędzie działa w panelu webowym: nie ma aplikacji desktopowej, nie ma wtyczek, nie ma czego instalować. Wystarczy dowolna nowoczesna przeglądarka.",
          question: "Czy AppBoard jest open source i czy muszę coś instalować?",
        },
      ],
      title: "Pierwsze kroki",
    },
    {
      entries: [
        {
          answer:
            "Oba. App Store Connect podłączasz przez API key: Issuer ID, Key ID i plik .p8. Google Play podłączasz przez JSON konta serwisowego. Aplikacje z obu sklepów stoją potem obok siebie w jednym workspace.",
          question: "Które sklepy obsługuje AppBoard?",
        },
        {
          answer:
            "Reporting API Google nie pokazuje aplikacji, które są nadal w wersji draft, więc zupełnie nowa aplikacja sama się nie pojawi. Możesz zarejestrować jej pakiet ręcznie, a AppBoard będzie ją od tego momentu śledzić.",
          question: "Dlaczego nie widzę mojej aplikacji w wersji draft z Google Play?",
        },
        {
          answer:
            "Tak. Pełny re-import dla danego sklepu pobiera wszystko na nowo i zastępuje lokalne dane tego sklepu. Przydaje się, gdy coś się rozjechało albo zmieniałeś rzeczy bezpośrednio w konsoli sklepu.",
          question: "Czy mogę zsynchronizować wszystko od nowa ze sklepu?",
        },
        {
          answer:
            "Tak. Możesz mieć wiele aplikacji i wiele workspace'ów, a grupy aplikacji łączą wersję Android i iOS tej samej aplikacji, żeby edytować je i porównywać razem.",
          question: "Czy mogę zarządzać wieloma aplikacjami i workspace'ami?",
        },
      ],
      title: "Sklepy i połączenia",
    },
    {
      entries: [
        {
          answer:
            "W sejfie szyfrowanym end-to-end. Klucz szyfrujący jest wyprowadzany z Twojego hasła, więc serwery AppBoard trzymają wyłącznie szyfrogram i nigdy nie widzą Twoich kluczy otwartym tekstem.",
          question: "Jak przechowywane są moje dane dostępowe do sklepów?",
        },
        {
          answer:
            "Z założenia nie ma tylnej furtki, więc reset kasuje zapisane dane dostępowe i klucze wpisujesz potem od nowa. To cena za to, że serwery nigdy nie są w stanie ich odczytać.",
          question: "Co się stanie, jeśli zapomnę hasła do sejfu?",
        },
        {
          answer:
            "Tylko to, co sam uruchomisz. AppBoard używa Twoich kluczy do odczytu i edycji listingów, ale nic nie trafia do sklepu bez Twojej świadomej akcji.",
          question: "Co AppBoard może właściwie zrobić moimi kluczami?",
        },
        {
          answer:
            "Nie. Dane dostępowe zostają zaszyfrowane w sejfie, a wszystko w AppBoard działa w obrębie workspace: osoby z zespołu pracują na Twoich listingach, nie widząc surowych kluczy.",
          question: "Czy osoby z zespołu widzą moje dane dostępowe?",
        },
      ],
      title: "Bezpieczeństwo",
    },
    {
      entries: [
        {
          answer:
            "Nie. Wszystko, co zmieniasz, jest wersją roboczą, przed publikacją dostajesz podgląd diffa pole po polu z dokładną listą zmian, a każda opublikowana zmiana zostaje w historii z rollbackiem na jedno kliknięcie.",
          question: "Czy AppBoard może zepsuć mój listing w sklepie?",
        },
        {
          answer:
            "Każda opublikowana zmiana, per pole i per język, pokazana jako czerwono-zielony diff. Widzisz, co się zmieniło i kiedy, a każde pole możesz cofnąć.",
          question: "Co trafia do historii?",
        },
        {
          answer:
            "Możesz wysłać wersję jako draft albo zgłosić ją do weryfikacji. AppBoard nie nadpisuje ustawionego przez Ciebie harmonogramu managed publishing, to zostaje w Play Console.",
          question: "Jakie opcje publikacji są w Google Play?",
        },
        {
          answer:
            "Screenshotami zarządzasz per urządzenie i per język w dokładnych wymiarach wymaganych przez sklepy, a wbudowany edytor składa sceny z ramki urządzenia, tła i nagłówka, po czym eksportuje każdy obraz w precyzyjnym rozmiarze, z wariantami językowymi tej samej sceny.",
          question: "Jak AppBoard obsługuje screenshoty?",
        },
        {
          answer:
            'Wrzucasz jedną szeroką panoramę, a AppBoard tnie ją na od 2 do 10 kolejnych screenshotów, żeby uzyskać panoramiczny efekt w listingu. A jeśli obraz ma zły rozmiar, narzędzie do kadrowania trzyma się presetów per urządzenie, od iPhone 3.5" przez iPad Pro 12.9" po tablety z Androidem, więc sklep przyjmuje plik za pierwszym razem.',
          question: "A co z panoramami i obrazami w złym rozmiarze?",
        },
      ],
      title: "Edycja i publikacja",
    },
    {
      entries: [
        {
          answer:
            "Twojego własnego. AI działa na Twoim kluczu OpenRouter z dowolnym wybranym modelem, a za tokeny płacisz bezpośrednio dostawcy. AppBoard nie dolicza marży ani nie odsprzedaje tokenów.",
          question: "Na czyim kluczu AI działa AppBoard?",
        },
        {
          answer:
            "Pisze opisy, tłumaczenia, pomysły na słowa kluczowe i odpowiedzi na opinie. Wszystko, co powstaje z AI, jest propozycją, którą przeglądasz i akceptujesz. Nic nie trafia do sklepu automatycznie.",
          question: "Co właściwie robi AI?",
        },
        {
          answer:
            "Tak. Scraping, śledzenie pozycji i heurystyczne grupowanie negatywnych opinii działają bez klucza do AI. Własny klucz dokłada do tego głębszą analizę AI.",
          question: "Czy research działa bez AI?",
        },
        {
          answer:
            "Tak. Możesz zbadać dowolną aplikację ze sklepów: jej słowa kluczowe, rynki, na których się wybija, jej opinie oraz wizualne porównanie obok Twojej.",
          question: "Czy mogę badać konkurencję?",
        },
      ],
      title: "AI i research",
    },
    {
      entries: [
        {
          answer:
            "AppBoard jest darmowy przez całą betę. Nie trzeba podawać karty, a o wprowadzeniu jakiegokolwiek płatnego planu uprzedzimy z wyprzedzeniem.",
          question: "Ile kosztuje AppBoard?",
        },
        {
          answer:
            "Wcześni użytkownicy dostają informację i ścieżkę przejścia na plan, który im pasuje. Bez cichego naliczania opłat i bez nagłego przełączenia z darmowego na płatny.",
          question: "Co stanie się z moim kontem po becie?",
        },
      ],
      title: "Płatności",
    },
  ],
  eyebrow: "FAQ",
  lead: "Szczere odpowiedzi na to, jak AppBoard łączy się z Twoimi sklepami, trzyma dane dostępowe zaszyfrowane i pozwala edytować oraz publikować bez psucia tego, co jest na żywo.",
  outro: {
    accountCta: "Załóż darmowe konto",
    demoCta: "Zobacz demo na żywo",
    lead: "Najszybciej odpowiesz sobie sam: otwórz demo na żywo i poklikaj po prawdziwym workspace albo załóż własne konto, darmowe na czas bety.",
    title: "Masz jeszcze pytanie?",
  },
  title: "Wszystko, o co ludzie pytają, zanim powierzą nam klucze do sklepów",
};


const DE: FaqPageContent = {
  categories: [
    {
      entries: [
        {
          answer:
            "AppBoard ist ein Panel für Ihre Einträge im App Store und bei Google Play: Metadaten, Screenshots, Versionen, Rezensionen und ASO-Research, statt ständig zwischen App Store Connect und der Play Console zu wechseln. Gebaut für Indie-Entwickler und kleine Teams, die dieselbe App in beiden Stores veröffentlichen.",
          question: "Was ist AppBoard?",
        },
        {
          answer:
            "Ja. Die Live-Demo ist ein echter AppBoard-Workspace, gefüllt mit Beispiel-Apps, Rezensionen und Eintragsverlauf. Sie öffnet sich mit einem Klick, ohne Registrierung und ohne Store-Zugangsdaten, sodass Sie jeden Screen ansehen können, bevor Sie sich entscheiden.",
          question: "Kann ich es testen, ohne eigene Apps zu verbinden?",
        },
        {
          answer:
            "Sie melden sich mit Ihrer E-Mail-Adresse und einem Einmalcode an, den wir Ihnen schicken. Es gibt kein Passwort, das Sie sich ausdenken oder merken müssten, und nichts zurückzusetzen.",
          question: "Wie funktioniert die Anmeldung?",
        },
        {
          answer:
            "Etwa zehn Minuten, wenn Ihre Store-Schlüssel bereitliegen: ein App-Store-Connect-API-Key und ein Google-Play-Service-Account. Sobald sie verbunden sind, importiert AppBoard Ihre Apps und Einträge automatisch.",
          question: "Wie lange dauert die Einrichtung?",
        },
        {
          answer:
            "Ja. AppBoard ist ein Open-Source-Produkt und läuft vollständig im Web-Panel. Es gibt keine Desktop-App, kein Plugin und nichts zu installieren. Ein moderner Browser genügt.",
          question: "Ist AppBoard Open Source, und muss ich etwas installieren?",
        },
      ],
      title: "Erste Schritte",
    },
    {
      entries: [
        {
          answer:
            "Beide. App Store Connect wird über einen API-Key verbunden: Issuer ID, Key ID und die .p8-Datei. Google Play über das JSON eines Service-Accounts. Die Apps aus beiden Stores liegen danach nebeneinander in einem Workspace.",
          question: "Welche Stores unterstützt AppBoard?",
        },
        {
          answer:
            "Googles Reporting-API gibt Apps im Entwurfsstatus nicht heraus, eine brandneue App taucht also nicht von allein auf. Sie können ihr Package manuell erfassen, danach verfolgt AppBoard sie normal weiter.",
          question: "Warum erscheint meine Google-Play-App im Entwurf nicht?",
        },
        {
          answer:
            "Ja. Ein vollständiger Re-Import pro Store holt alles frisch aus dem Store und ersetzt die lokalen Daten dieses Stores. Praktisch, wenn etwas auseinandergelaufen ist oder Sie direkt in der Store-Konsole gearbeitet haben.",
          question: "Kann ich alles aus einem Store neu synchronisieren?",
        },
        {
          answer:
            "Ja. Sie können mehrere Apps und mehrere Workspaces führen, und App-Gruppen verbinden die Android- und die iOS-Fassung derselben App, sodass Sie beide gemeinsam bearbeiten und vergleichen.",
          question: "Kann ich mehrere Apps und Workspaces verwalten?",
        },
      ],
      title: "Stores und Verbindungen",
    },
    {
      entries: [
        {
          answer:
            "In einem Ende-zu-Ende-verschlüsselten Tresor. Der Schlüssel zur Verschlüsselung wird aus Ihrer Passphrase abgeleitet, die Server von AppBoard speichern also ausschließlich Chiffrat und sehen Ihre Schlüssel nie im Klartext.",
          question: "Wie werden meine Store-Zugangsdaten gespeichert?",
        },
        {
          answer:
            "Es gibt bewusst keine Hintertür, ein Zurücksetzen löscht daher die gespeicherten Zugangsdaten und Sie tragen Ihre Schlüssel danach neu ein. Das ist der Preis dafür, dass die Server sie nie lesen können.",
          question: "Was passiert, wenn ich meine Passphrase vergesse?",
        },
        {
          answer:
            "Nur das, was Sie ausdrücklich auslösen. AppBoard nutzt Ihre Schlüssel, um Einträge zu lesen und zu bearbeiten, aber es geht nie etwas ohne Ihre ausdrückliche Aktion in einen Store.",
          question: "Was kann AppBoard mit meinen Schlüsseln tatsächlich tun?",
        },
        {
          answer:
            "Nein. Zugangsdaten bleiben verschlüsselt im Tresor, und alles in AppBoard ist an den Workspace gebunden. Kolleginnen und Kollegen arbeiten mit Ihren Einträgen, ohne die rohen Schlüssel je zu sehen.",
          question: "Können Teammitglieder meine Zugangsdaten sehen?",
        },
      ],
      title: "Sicherheit",
    },
    {
      entries: [
        {
          answer:
            "Nein. Alles, was Sie ändern, ist zunächst ein Entwurf, Sie sehen vor dem Veröffentlichen eine Diff-Vorschau pro Feld, und jede veröffentlichte Änderung bleibt im Verlauf mit Rollback per Klick.",
          question: "Kann AppBoard meinen laufenden Eintrag beschädigen?",
        },
        {
          answer:
            "Jede veröffentlichte Änderung, pro Feld und pro Sprache, dargestellt als rot-grüner Diff. Sie sehen, was sich wann geändert hat, und können jedes Feld zurückrollen.",
          question: "Was wird im Verlauf festgehalten?",
        },
        {
          answer:
            "Sie können eine Version als Entwurf hochladen oder zur Prüfung einreichen. AppBoard überschreibt Ihre Einstellungen zum gesteuerten Veröffentlichen nicht, die bleiben in der Play Console.",
          question: "Welche Veröffentlichungsoptionen gibt es bei Google Play?",
        },
        {
          answer:
            "Screenshots werden pro Gerät und pro Sprache in den exakten Store-Maßen verwaltet, und der eingebaute Editor baut ganze Szenen aus Geräterahmen, Hintergrund und Überschrift und exportiert jedes Bild in der genau geforderten Größe, inklusive Sprachvarianten derselben Szene.",
          question: "Wie geht AppBoard mit Screenshots um?",
        },
        {
          answer:
            "Laden Sie ein breites Panorama hoch, und AppBoard teilt es in 2 bis 10 aufeinanderfolgende Screenshots für den Panorama-Effekt im Store-Eintrag. Und wenn ein Bild die falsche Größe hat, rastet das Zuschneiden auf Geräte-Presets ein, vom iPhone 3,5 Zoll über das iPad Pro 12,9 Zoll bis zu Android-Tablets, sodass der Store den Upload beim ersten Versuch annimmt.",
          question: "Was ist mit Panoramen und Bildern in falscher Größe?",
        },
      ],
      title: "Bearbeiten und veröffentlichen",
    },
    {
      entries: [
        {
          answer:
            "Ihren eigenen. Die KI läuft über Ihren OpenRouter-Key mit jedem Modell Ihrer Wahl, und Sie zahlen direkt beim Anbieter. AppBoard schlägt nichts auf und verkauft keine Token weiter.",
          question: "Wessen KI-Key nutzt AppBoard?",
        },
        {
          answer:
            "Sie entwirft Beschreibungen, Übersetzungen, Keyword-Ideen und Antworten auf Rezensionen. Alles, was die KI produziert, ist ein Vorschlag, den Sie prüfen und freigeben. Nichts erreicht automatisch einen Store.",
          question: "Was macht die KI konkret?",
        },
        {
          answer:
            "Ja. Scraping, Rank-Tracking und die heuristische Gruppierung negativer Rezensionen funktionieren ohne KI-Key. Ein eigener Key legt die tiefere KI-Analyse obendrauf.",
          question: "Funktioniert Research auch ohne KI?",
        },
        {
          answer:
            "Ja. Sie können jede App in den Stores untersuchen: ihre Keywords, die Märkte, in denen sie rankt, ihre Rezensionen und einen visuellen Vergleich Seite an Seite mit Ihrer eigenen.",
          question: "Kann ich den Wettbewerb untersuchen?",
        },
      ],
      title: "KI und Research",
    },
    {
      entries: [
        {
          answer:
            "AppBoard ist während der Beta kostenlos. Eine Kreditkarte ist nicht nötig, und vor der Einführung eines kostenpflichtigen Plans erhalten Sie rechtzeitig Bescheid.",
          question: "Was kostet AppBoard?",
        },
        {
          answer:
            "Frühe Nutzer bekommen eine Ankündigung und einen Wechselpfad auf den passenden Plan. Keine stille Abbuchung und kein überraschender Sprung von kostenlos auf kostenpflichtig.",
          question: "Was passiert nach der Beta mit meinem Konto?",
        },
      ],
      title: "Abrechnung",
    },
  ],
  eyebrow: "FAQ",
  lead: "Ehrliche Antworten dazu, wie AppBoard sich mit Ihren Stores verbindet, Ihre Zugangsdaten verschlüsselt hält und Sie bearbeiten und veröffentlichen lässt, ohne etwas Laufendes zu beschädigen.",
  outro: {
    accountCta: "Kostenloses Konto anlegen",
    demoCta: "Live-Demo ansehen",
    lead: "Am schnellsten bekommen Sie eine Antwort, indem Sie es ausprobieren. Öffnen Sie die Live-Demo und klicken Sie durch einen echten Workspace, oder legen Sie Ihr eigenes Konto an, kostenlos während der Beta.",
    title: "Noch eine Frage offen?",
  },
  title: "Alles, was Leute fragen, bevor sie uns ihre Store-Schlüssel anvertrauen",
};

const ES: FaqPageContent = {
  categories: [
    {
      entries: [
        {
          answer:
            "AppBoard es un solo panel para gestionar tus fichas de App Store y Google Play: metadatos, capturas, versiones, reseñas e investigación ASO, en lugar de saltar entre App Store Connect y Play Console. Está pensado para desarrolladores indie y equipos pequeños que publican la misma app en las dos tiendas.",
          question: "¿Qué es AppBoard?",
        },
        {
          answer:
            "Sí. La demo en vivo es un espacio de trabajo real de AppBoard con apps de ejemplo, reseñas e historial de fichas. Se abre con un clic, sin registro y sin credenciales de tienda, así que puedes recorrer todas las pantallas antes de decidir.",
          question: "¿Puedo probarlo sin conectar mis propias apps?",
        },
        {
          answer:
            "Entras con tu correo y un código de un solo uso que te enviamos. No hay contraseña que inventar ni recordar, y nada que restablecer.",
          question: "¿Cómo funciona el acceso?",
        },
        {
          answer:
            "Unos diez minutos si tienes a mano las claves: una clave de API de App Store Connect y una cuenta de servicio de Google Play. En cuanto están conectadas, AppBoard importa tus apps y tus fichas automáticamente.",
          question: "¿Cuánto se tarda en configurarlo?",
        },
        {
          answer:
            "Sí. AppBoard es un producto open source y funciona entero en el panel web. No hay aplicación de escritorio, ni plugin, ni nada que instalar. Basta con un navegador moderno.",
          question: "¿AppBoard es open source y hay que instalar algo?",
        },
      ],
      title: "Primeros pasos",
    },
    {
      entries: [
        {
          answer:
            "Las dos. App Store Connect se conecta con una clave de API: issuer ID, key ID y el archivo .p8. Google Play, con el JSON de una cuenta de servicio. Las apps de ambas tiendas quedan luego una al lado de la otra en el mismo espacio de trabajo.",
          question: "¿Qué tiendas admite AppBoard?",
        },
        {
          answer:
            "La API de informes de Google no expone las apps que siguen en borrador, así que una app recién creada no aparece sola. Puedes registrar su paquete a mano y AppBoard la seguirá con normalidad a partir de ahí.",
          question: "¿Por qué no aparece mi app en borrador de Google Play?",
        },
        {
          answer:
            "Sí. Una reimportación completa por tienda trae todo de nuevo desde la tienda y reemplaza los datos locales de esa tienda. Va bien si algo se desincronizó o si tocaste cosas directamente en la consola.",
          question: "¿Puedo volver a sincronizar todo desde una tienda?",
        },
        {
          answer:
            "Sí. Puedes tener varias apps y varios espacios de trabajo, y los grupos de apps enlazan la versión Android y la iOS de la misma app para editarlas y compararlas juntas.",
          question: "¿Puedo gestionar varias apps y espacios de trabajo?",
        },
      ],
      title: "Tiendas y conexiones",
    },
    {
      entries: [
        {
          answer:
            "En un baúl cifrado de extremo a extremo. La clave de cifrado se deriva de tu frase de paso, así que los servidores de AppBoard solo guardan texto cifrado y nunca ven tus claves en claro.",
          question: "¿Cómo se guardan mis credenciales de tienda?",
        },
        {
          answer:
            "Por diseño no hay puerta trasera, así que restablecerla borra las credenciales guardadas y luego vuelves a introducir tus claves. Ese es el precio de que los servidores nunca puedan leerlas.",
          question: "¿Qué pasa si olvido mi frase de paso?",
        },
        {
          answer:
            "Solo lo que tú lances de forma explícita. AppBoard usa tus claves para leer y editar fichas, pero nunca se publica nada en una tienda sin una acción expresa tuya.",
          question: "¿Qué puede hacer AppBoard realmente con mis claves?",
        },
        {
          answer:
            "No. Las credenciales siguen cifradas en el baúl y todo en AppBoard está acotado al espacio de trabajo: tus compañeros trabajan con tus fichas sin ver nunca las claves en bruto.",
          question: "¿Pueden mis compañeros ver mis credenciales?",
        },
      ],
      title: "Seguridad",
    },
    {
      entries: [
        {
          answer:
            "No. Todo lo que cambias es un borrador, antes de publicar ves una vista previa del diff campo por campo, y cada cambio publicado queda en el historial con reversión en un clic.",
          question: "¿Puede AppBoard romper mi ficha publicada?",
        },
        {
          answer:
            "Cada cambio publicado, por campo y por idioma, mostrado como un diff en rojo y verde. Ves qué cambió y cuándo, y puedes revertir cualquier campo.",
          question: "¿Qué queda registrado en el historial?",
        },
        {
          answer:
            "Puedes subir una versión como borrador o enviarla a revisión. AppBoard no pisa la configuración de publicación gestionada que tengas puesta, eso sigue en Play Console.",
          question: "¿Qué opciones de publicación hay en Google Play?",
        },
        {
          answer:
            "Las capturas se gestionan por dispositivo y por idioma con las medidas exactas de cada tienda, y el editor integrado compone escenas con marco de dispositivo, fondo y titular, y exporta cada imagen al tamaño exacto que piden las tiendas, con variantes de idioma de la misma escena.",
          question: "¿Cómo trata AppBoard las capturas?",
        },
        {
          answer:
            "Sube un panorama ancho y AppBoard lo parte en 2 a 10 capturas consecutivas para el efecto panorámico en la ficha. Y si una imagen tiene el tamaño equivocado, el recorte se ajusta a preajustes por dispositivo, del iPhone de 3,5 pulgadas al iPad Pro de 12,9 y a las tabletas Android, para que la tienda acepte la subida al primer intento.",
          question: "¿Y los panoramas y las imágenes con tamaño incorrecto?",
        },
      ],
      title: "Edición y publicación",
    },
    {
      entries: [
        {
          answer:
            "La tuya. La IA funciona con tu clave de OpenRouter y el modelo que elijas, y pagas directamente al proveedor. AppBoard no aplica margen ni revende tokens.",
          question: "¿Qué clave de IA usa AppBoard?",
        },
        {
          answer:
            "Redacta descripciones, traducciones, ideas de keywords y respuestas a reseñas. Todo lo que produce la IA es una propuesta que revisas y apruebas: nada llega solo a una tienda.",
          question: "¿Qué hace la IA exactamente?",
        },
        {
          answer:
            "Sí. El scraping, el seguimiento de posiciones y la agrupación heurística de reseñas negativas funcionan sin clave de IA. Añadir tu clave suma encima el análisis con IA.",
          question: "¿Funciona el research sin IA?",
        },
        {
          answer:
            "Sí. Puedes investigar cualquier app de las tiendas: sus keywords, los mercados donde posiciona, sus reseñas y una comparación visual lado a lado con la tuya.",
          question: "¿Puedo investigar a la competencia?",
        },
      ],
      title: "IA e investigación",
    },
    {
      entries: [
        {
          answer:
            "AppBoard es gratis mientras está en beta. No hace falta tarjeta y te avisaremos con antelación antes de introducir cualquier plan de pago.",
          question: "¿Cuánto cuesta AppBoard?",
        },
        {
          answer:
            "Quien llegue pronto recibirá aviso y una vía de migración al plan que le encaje. Sin cargos silenciosos y sin saltos por sorpresa de gratis a pago.",
          question: "¿Qué pasa con mi cuenta después de la beta?",
        },
      ],
      title: "Facturación",
    },
  ],
  eyebrow: "FAQ",
  lead: "Respuestas honestas sobre cómo AppBoard se conecta con tus tiendas, mantiene cifradas tus credenciales y te deja editar y publicar sin romper nada de lo que ya está en vivo.",
  outro: {
    accountCta: "Crear cuenta gratis",
    demoCta: "Ver la demo en vivo",
    lead: "La forma más rápida de resolver una duda es probarlo. Abre la demo en vivo y recorre un espacio de trabajo real, o crea tu propia cuenta gratis mientras AppBoard está en beta.",
    title: "¿Te queda alguna duda?",
  },
  title: "Todo lo que preguntan antes de confiarnos las claves de su tienda",
};

export const FAQ_PAGE_CONTENT: Record<SiteLocale, FaqPageContent> = {
  de: DE,
  en: EN,
  es: ES,
  pl: PL,
};
