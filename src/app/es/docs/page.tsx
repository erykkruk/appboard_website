import Link from "next/link";

import { Footer, Header } from "@/components/layout";
import { ArrowRightIcon } from "@/components/ui";
import { DOCS_SECTIONS_ES } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const DOCS_DESCRIPTION =
  "Documentación AppBoard: podłącz App Store i Google Play, edytuj listingi, publikuj z diffami i rollbackiem, prowadź research ASO i zabezpiecz dane dostępowe w sejfie.";

export const metadata: Metadata = buildPageMetadata({
  description: DOCS_DESCRIPTION,
  languages: buildAlternates("/docs"),
  locale: "es_ES",
  path: "/es/docs",
  title: "Documentación",
});

export default function DocsIndexPlPage(): JSX.Element {
  return (
    <>
      <Header locale="es" />
      <main
        className="relative mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-14 sm:px-6 sm:pt-20"
        lang="es"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
            Documentación
          </p>
          <p className="mt-3 text-sm text-muted">Las guías están, por ahora, en inglés.</p>
          <h1 className="display mt-3 text-5xl text-foreground sm:text-6xl">
            Todo lo que necesitas para hacer ASO en AppBoard
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Guías para conectar las tiendas, editar y publicar fichas, investigar el mercado y guardar tus credenciales de forma segura. Empieza por la configuración y sigue por el flujo que encaje con tu equipo.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12">
          {DOCS_SECTIONS_ES.map((section) => (
            <section key={section.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {section.title}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {section.pages.map((page) => (
                  <Link
                    className="group flex flex-col gap-2 rounded-2xl border border-line bg-panel/40 p-6 transition-colors hover:border-accent/50 hover:bg-panel"
                    href={`/docs/${page.slug}`}
                    key={page.slug}
                  >
                    <span className="flex items-center gap-2 text-base font-medium text-foreground">
                      {page.title}
                      <ArrowRightIcon className="size-4 -translate-x-1 text-accent-bright opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted">
                      {page.description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer locale="es" />
    </>
  );
}
