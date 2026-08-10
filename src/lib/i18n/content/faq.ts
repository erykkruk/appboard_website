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
            "AppBoard is one panel for managing your App Store and Google Play listings — metadata, screenshots, versions, reviews and ASO research — instead of jumping between App Store Connect and the Play Console. It's built for indie developers and small teams shipping the same app on both stores.",
          question: "What is AppBoard?",
        },
        {
          answer:
            "Yes. The live demo is a real AppBoard workspace pre-filled with example apps, reviews and listing history. It opens in one click — no signup and no store credentials — so you can click through every screen before deciding.",
          question: "Can I try it without connecting my own apps?",
        },
        {
          answer:
            "You sign in with your email and a one-time code we send you. There's no password to create or remember, and nothing to reset.",
          question: "How does login work?",
        },
        {
          answer:
            "About ten minutes if you have your store keys ready — an App Store Connect API key and a Google Play service account. Once they're connected, AppBoard imports your apps and listings automatically.",
          question: "How long does setup take?",
        },
        {
          answer:
            "Yes. AppBoard is an open-source product, and the whole tool runs in the web panel — there's no desktop app, no plugin and nothing to install. Any modern browser is enough.",
          question: "Is AppBoard open source, and do I need to install anything?",
        },
      ],
      title: "Getting started",
    },
    {
      entries: [
        {
          answer:
            "Both. App Store Connect connects with an API key — Issuer ID, Key ID and the .p8 file. Google Play connects with a service account JSON. Apps from both stores then sit side by side in one workspace.",
          question: "Which stores does AppBoard support?",
        },
        {
          answer:
            "Google's Reporting API doesn't expose apps that are still in draft, so a brand-new app won't show up on its own. You can register its package manually and AppBoard will track it from then on.",
          question: "Why doesn't my Google Play draft app appear?",
        },
        {
          answer:
            "Yes. A full re-import per store pulls everything fresh from the store and replaces the local data for that store — useful if something drifted out of sync or you changed things directly in the store console.",
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
            "No. Credentials stay encrypted in the vault, and everything in AppBoard is workspace-scoped — teammates work with your listings without ever seeing the raw keys.",
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
            "You can push a version as a draft or send it for review. AppBoard doesn't override the managed-publishing timing you've set — that stays in the Play Console.",
          question: "What publishing options exist on Google Play?",
        },
        {
          answer:
            "Screenshots are managed per device and per language at exact store dimensions, and the built-in editor composes scenes — device frame, background, headline — and exports each image at the precise size the stores require, with language variants of the same scene.",
          question: "How does AppBoard handle screenshots?",
        },
        {
          answer:
            'Upload one wide panorama and AppBoard splits it into 2–10 consecutive screenshots for the panoramic store-listing effect. And if an image has the wrong size, the crop tool locks to per-device presets — from iPhone 3.5" to iPad Pro 12.9" to Android tablets — so the store accepts the upload on the first try.',
          question: "What about panoramas and wrong-sized images?",
        },
      ],
      title: "Editing & publishing",
    },
    {
      entries: [
        {
          answer:
            "Your own. AI runs through your OpenRouter key with any model you choose, and you pay the provider directly — AppBoard doesn't mark up or resell tokens.",
          question: "Whose AI key does AppBoard use?",
        },
        {
          answer:
            "It drafts descriptions, translations, keyword ideas and review replies. Everything the AI produces is a suggestion you review and approve — nothing reaches a store automatically.",
          question: "What does the AI actually do?",
        },
        {
          answer:
            "Yes. Scraping, rank tracking and heuristic grouping of negative reviews all work without an AI key. Adding your own key layers deeper AI analysis on top.",
          question: "Does research work without AI?",
        },
        {
          answer:
            "Yes. You can research any app on the stores — its keywords, the markets it ranks in, its reviews, and a side-by-side visual comparison with yours.",
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
            "Early users get notice and a migration path onto whatever plan fits — no silent charging and no surprise switch from free to paid.",
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

export const FAQ_PAGE_CONTENT: Record<SiteLocale, FaqPageContent> = {
  en: EN,
  pl: PL,
};
