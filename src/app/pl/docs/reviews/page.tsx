import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPagePl } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "reviews";
const page = getDocPagePl(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  locale: "pl_PL",
  path: `/pl/docs/${SLUG}`,
  title: page?.title,
});

export default function ReviewsPlPage(): JSX.Element {
  return (
    <DocsLayout locale="pl" slug={SLUG}>
      <p>
        Skrzynka opinii zbiera opinie z App Store i Google Play w jednym miejscu,
        więc segregujesz feedback i odpowiadasz na niego bez przeskakiwania między
        konsolami.
      </p>

      <ScreenshotFrame
        alt="Skrzynka opinii w AppBoard łącząca App Store i Google Play z przyciskami AI Draft do odpowiedzi"
        src="/images/panel/app-reviews.png"
      />

      <h2>Jedna skrzynka dla obu sklepów</h2>
      <p>
        Opinie z obu platform trafiają na jedną listę. Rozkład ocen podsumowuje,
        jak wypada Twoja aplikacja, a licznik nieodpowiedzianych pokazuje, ile
        opinii dalej czeka na reakcję, więc nic nie przepada.
      </p>

      <h2>Odpowiadanie</h2>
      <p>
        Na opinię odpowiadasz od razu w skrzynce. Twoja odpowiedź wraca do sklepu,
        z którego pochodzi opinia, więc opinia z Play dostaje odpowiedź w Play, a
        opinia z App Store odpowiedź w App Store.
      </p>

      <h2>Odpowiedzi przygotowane przez AI</h2>
      <p>
        Każda opinia ma przycisk <strong>AI Draft</strong>. Generuje on
        propozycję odpowiedzi, którą możesz zedytować przed wysłaniem. Przydaje
        się, gdy trzeba szybko przerobić zaległy stos feedbacku, a przy tym
        zostawić decyzję człowiekowi.
      </p>

      <blockquote>
        <p>
          <strong>Uwaga:</strong> draft od AI to propozycja, a nie automatyczna
          odpowiedź. Do sklepu nic nie idzie, dopóki jej nie przejrzysz i nie
          klikniesz wyślij.
        </p>
      </blockquote>

      <h2>Od opinii do wniosków</h2>
      <p>
        Szukasz wzorców, a nie pojedynczych odpowiedzi? Narzędzia{" "}
        <a href="/pl/docs/research">Research</a> zbierają i kategoryzują opinie
        masowo, także dla aplikacji konkurencji, żeby wyciągnąć na wierzch skargi
        i motywy stojące za Twoimi ocenami.
      </p>
    </DocsLayout>
  );
}
