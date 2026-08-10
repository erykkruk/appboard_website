import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
import { BLOG_ARTICLES_ES } from "@/lib/blog";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildFaqSchema } from "@/lib/schema";
import { APP_URL, buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "posicionamiento-aso";
const EN_SLUG = "best-aso-tools";
const article = BLOG_ARTICLES_ES.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Posicionamiento ASO en 2026: límites de caracteres reales, tildes que gastan el doble en el campo de keywords, tests A/B gratuitos de las tiendas y herramientas que siguen existiendo.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "es_ES",
  path: `/es/blog/${SLUG}`,
  title: "Posicionamiento ASO: la guía completa de 2026",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "El posicionamiento ASO, o App Store Optimization, es el trabajo de mejorar la visibilidad y la conversión de una app dentro de App Store y Google Play. Escribe siempre el término completo: buscar solo las siglas en español devuelve la tienda de moda ASOS, el verbo asar en pretérito y la antiestreptolisina O, un análisis de sangre. Nunca devuelve apps.",
    question: "¿Qué es el posicionamiento ASO?",
  },
  {
    answer:
      "El SEO trabaja páginas web en un buscador y el ASO trabaja fichas de app dentro de una tienda. Tres diferencias prácticas: en ASO no hay enlaces externos como factor principal, la conversión de impresión a instalación es en sí misma un factor de posicionamiento, y cada cambio de metadatos pasa por la revisión de la tienda, así que se itera más despacio.",
    question: "¿En qué se diferencia el ASO del SEO?",
  },
  {
    answer:
      "Treinta caracteres, desde el 29 de septiembre de 2021. Varias páginas españolas bien posicionadas siguen indicando 50, entre ellas beedigital.es y staiapps.com. En App Store el nombre también son 30 caracteres, más un subtítulo de otros 30.",
    question: "¿Cuántos caracteres tiene el título de una app en Google Play?",
  },
  {
    answer:
      "Son 100 bytes, no 100 caracteres, y la diferencia importa mucho en español. En UTF-8 las vocales acentuadas y la eñe ocupan dos bytes cada una, así que un conjunto de keywords en español agota el campo antes que uno en inglés. Alguna guía española lo describe como 100 caracteres, y eso lleva a escribir un campo que luego no cabe.",
    question: "¿El campo de keywords de Apple son 100 caracteres o 100 bytes?",
  },
  {
    answer:
      "Sí, y son gratuitos. App Store tiene Product Page Optimization y Custom Product Pages. Google Play tiene los experimentos de ficha de Play Store y las fichas personalizadas. Ninguna de las páginas españolas mejor posicionadas los menciona, y son la única forma de medir un cambio sobre tu propio tráfico en lugar de opinar.",
    question: "¿Puedo hacer tests A/B de la ficha sin pagar una herramienta?",
  },
  {
    answer:
      "App Annie ya no existe: pasó a llamarse data.ai y quedó absorbida por Sensor Tower tras la adquisición de marzo de 2024. Aun así la siguen recomendando bloo.media, aulacm.com y comunicare.es. Appsee cerró en 2021 y bloo.media también la sigue recomendando. Si una guía te manda a esas herramientas, el resto de sus datos probablemente también sea antiguo.",
    question: "¿Qué herramientas ASO recomendadas en español ya no existen?",
  },
  {
    answer:
      "Los primeros movimientos de posición tras indexar nuevos metadatos suelen verse entre dos y cuatro semanas después. El efecto real sobre instalaciones se mide en dos o tres meses, y evaluar el retorno del trabajo de ASO requiere normalmente un trimestre. Quien prometa el primer puesto en quince días está hablando de instalaciones compradas.",
    question: "¿Cuánto tarda el posicionamiento ASO en dar resultados?",
  },
];

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout
      article={article}
      locale="es"
      translationHref={`/blog/${EN_SLUG}`}
    >
      <JsonLd data={buildFaqSchema(`/es/blog/${SLUG}`, FAQ, "es-ES")} />
      <p>
        Antes de nada, una advertencia que te ahorra diez minutos:{" "}
        <strong>las siglas ASO a secas no sirven en español</strong>. Si las
        buscas, la primera página de resultados es ASOS, la tienda de moda
        británica, mezclada con &laquo;asó&raquo;, el pretérito del verbo asar, y
        con la antiestreptolisina O, un análisis de sangre. App Store
        Optimization no aparece.
      </p>
      <p>
        Por eso en este texto se escribe siempre{" "}
        <strong>posicionamiento ASO</strong> o{" "}
        <strong>App Store Optimization</strong> completo, y por eso, si vas a
        producir contenido para el mercado español, no construyas ningún título
        sobre las siglas desnudas.
      </p>
      <p>
        La segunda advertencia es sobre el estado de las guías en español. Las
        mejor posicionadas se contradicen en el dato más básico de todos:{" "}
        <strong>
          prácticamente todas las que indican el límite del título en Google Play
          lo dan mal
        </strong>
        . beedigital.es y staiapps.com dicen 50 caracteres; son 30. beedigital
        además describe el campo de keywords de Apple como 100
        &laquo;caracteres&raquo;; son 100 bytes, lo cual en español cambia las
        cuentas de verdad. Y la mayoría, sencillamente, no menciona ningún
        límite.
      </p>

      <h2>Los límites reales, campo por campo</h2>
      <table>
        <thead>
          <tr>
            <th>Campo</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre de la app</td>
            <td>30 caracteres</td>
            <td>30 caracteres</td>
          </tr>
          <tr>
            <td>Subtítulo o descripción breve</td>
            <td>Subtítulo, 30 caracteres</td>
            <td>Descripción breve, 80 caracteres</td>
          </tr>
          <tr>
            <td>Campo de keywords</td>
            <td>
              Sí, 100 <strong>bytes</strong>, oculto al usuario
            </td>
            <td>No existe</td>
          </tr>
          <tr>
            <td>Descripción</td>
            <td>4000 caracteres, no se indexa</td>
            <td>4000 caracteres, sí se indexa</td>
          </tr>
          <tr>
            <td>Texto promocional</td>
            <td>170 caracteres, editable sin nueva versión</td>
            <td>Sin equivalente</td>
          </tr>
          <tr>
            <td>Capturas</td>
            <td>De 1 a 10 por localización</td>
            <td>Mínimo 2, máximo 8 por tipo de dispositivo</td>
          </tr>
        </tbody>
      </table>
      <p>
        La fila decisiva es la del campo de keywords, porque define dos
        estrategias completamente distintas. En App Store tienes un campo oculto
        para las palabras clave, así que la descripción la escribes para una
        persona. En Google Play{" "}
        <strong>no hay campo de keywords</strong>: el buscador de la tienda
        extrae los términos del título, de la descripción breve y de la
        descripción completa. La descripción de Google Play tiene que leerse bien
        y contener tus frases al mismo tiempo.
      </p>
      <p>
        Conclusión operativa:{" "}
        <strong>copiar el mismo texto a las dos tiendas es un error
        estructural</strong>, no una cuestión de estilo.
      </p>

      <h2>Las tildes cuestan el doble</h2>
      <p>
        Este es el punto específicamente español del posicionamiento ASO y no lo
        trata ninguna de las guías en circulación.
      </p>
      <p>
        El campo de keywords de App Store tiene un límite de{" "}
        <strong>100 bytes</strong>. En UTF-8, una letra latina sin acento ocupa
        un byte, pero <strong>á, é, í, ó, ú y ñ ocupan dos</strong>. El contador
        de caracteres de tu editor no te está diciendo la verdad sobre el espacio
        que te queda.
      </p>
      <table>
        <thead>
          <tr>
            <th>Palabra</th>
            <th>Caracteres</th>
            <th>Bytes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>diseño</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>gestión</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>organización</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr>
            <td>traducción</td>
            <td>10</td>
            <td>11</td>
          </tr>
        </tbody>
      </table>
      <p>Tres reglas que salen de ahí:</p>
      <ol>
        <li>
          <strong>Nada de espacios tras las comas.</strong> Cada espacio es un
          byte que no vuelve.
        </li>
        <li>
          <strong>No repitas palabras</strong> que ya estén en el nombre o en el
          subtítulo. Apple indexa la suma de esos campos, así que repetir es
          gastar dos veces.
        </li>
        <li>
          <strong>Decide con datos si incluyes la variante con tilde y la
          variante sin tilde.</strong> Mucha gente escribe sin acentos en el
          buscador y mucha otra no. Duplicar es legítimo, pero cuesta el doble en
          un campo diminuto, así que compruébalo en lugar de suponerlo.
        </li>
      </ol>
      <p>
        La comprobación se hace con una campaña pequeña de Apple Ads con
        coincidencia de búsqueda. Es la única fuente de consultas reales del
        escaparate español que vas a tener; el resto son modelos de herramientas
        de terceros, que en mercados no anglosajones fallan bastante más de lo
        que admiten.
      </p>

      <h2>Factores de posicionamiento por impacto real</h2>
      <ol>
        <li>
          <strong>Nombre de la app.</strong> El campo más fuerte en las dos
          tiendas. Treinta caracteres para meter marca y término principal.
        </li>
        <li>
          <strong>Subtítulo (App Store) y descripción breve (Google Play).</strong>{" "}
          Segundo texto indexado por peso y primer texto que lee la persona.
        </li>
        <li>
          <strong>Campo de keywords en App Store, cuerpo de la descripción en
          Google Play.</strong> Dos mecanismos distintos para el mismo objetivo.
        </li>
        <li>
          <strong>Conversión de impresión a instalación.</strong> Aquí es donde
          el ASO se separa del SEO: la tienda observa si la gente que ve tu ficha
          instala, y eso afecta a tu posición. Por eso el icono y las dos
          primeras capturas son un factor de posicionamiento y no una cuestión
          estética.
        </li>
        <li>
          <strong>Valoración media y número de reseñas.</strong> Afectan al
          ranking y a la conversión a la vez.
        </li>
        <li>
          <strong>Frecuencia de actualización.</strong> Señal de que la app está
          viva.
        </li>
      </ol>

      <h2>Tests A/B gratuitos que nadie menciona</h2>
      <p>
        Esta es la mayor laguna del contenido español sobre posicionamiento ASO.
        Las dos tiendas ofrecen herramientas nativas de experimentación,{" "}
        <strong>son gratuitas</strong>, y no aparecen en las guías mejor
        posicionadas.
      </p>
      <table>
        <thead>
          <tr>
            <th>Herramienta</th>
            <th>Tienda</th>
            <th>Para qué</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Page Optimization</td>
            <td>App Store</td>
            <td>Test A/B de icono, capturas y vídeos sobre tu propio tráfico</td>
          </tr>
          <tr>
            <td>Custom Product Pages</td>
            <td>App Store</td>
            <td>Variantes de ficha para una campaña o un público concreto</td>
          </tr>
          <tr>
            <td>Experimentos de ficha de Play Store</td>
            <td>Google Play</td>
            <td>Test A/B de icono, gráficos y textos</td>
          </tr>
          <tr>
            <td>Fichas personalizadas</td>
            <td>Google Play</td>
            <td>Variantes por país o por grupo de usuarios</td>
          </tr>
        </tbody>
      </table>
      <p>
        La regla al testar es una sola y casi todo el mundo la incumple:{" "}
        <strong>una variable cada vez y deja que el test termine</strong>. Un
        cambio de icono o de primera captura necesita entre cuatro y ocho semanas
        para significar algo. Parar el test al quinto día porque la variante B va
        ganando no es un resultado, es ruido.
      </p>

      <h2>Herramientas: cuáles existen todavía</h2>
      <p>
        Antes de la lista, la parte incómoda. Estas herramientas siguen
        apareciendo como recomendadas en páginas españolas de 2026 y{" "}
        <strong>ya no existen</strong>:
      </p>
      <ul>
        <li>
          <strong>App Annie.</strong> Pasó a llamarse data.ai y quedó absorbida
          por Sensor Tower tras la adquisición de marzo de 2024. La siguen
          recomendando bloo.media, aulacm.com y comunicare.es.
        </li>
        <li>
          <strong>Appsee.</strong> Cerró en 2021. bloo.media la sigue
          recomendando.
        </li>
      </ul>
      <p>
        No es una anécdota: si una guía recomienda herramientas muertas, sus
        límites de caracteres y sus tácticas vienen de la misma época.
      </p>
      <table>
        <thead>
          <tr>
            <th>Herramienta</th>
            <th>Precio de entrada</th>
            <th>Para qué destaca</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appfigures</td>
            <td>Desde 9,99 USD/mes</td>
            <td>La entrada más barata que es útil: ingresos y posiciones juntos</td>
          </tr>
          <tr>
            <td>Mobile Action</td>
            <td>Desde 15 USD/mes</td>
            <td>Cruzar campañas de Apple Ads con el tráfico orgánico</td>
          </tr>
          <tr>
            <td>AppTweak</td>
            <td>Desde 79 USD/mes</td>
            <td>Los datos de keywords más profundos en ambas tiendas</td>
          </tr>
          <tr>
            <td>App Radar</td>
            <td>Desde 69 EUR/mes</td>
            <td>Editar y publicar metadatos desde la propia herramienta</td>
          </tr>
          <tr>
            <td>AppBoard</td>
            <td>Gratis en beta</td>
            <td>Fichas de las dos tiendas, historial de cambios y capturas</td>
          </tr>
        </tbody>
      </table>
      <p>
        Antes de pagar nada, ten presente que se puede empezar por cero. Las
        consolas de ambas tiendas te dan impresiones, visitas a la ficha y
        conversión, y una campaña mínima de Apple Ads te da consultas reales del
        escaparate español. La comparativa completa de herramientas de pago, con
        precios verificados, está en inglés en{" "}
        <Link href="/blog/best-aso-tools">the best ASO tools</Link>.
      </p>

      <h2>Plan de primer mes</h2>
      <ol>
        <li>
          <strong>Semana 1.</strong> Corrige los límites. Comprueba que el título
          no se escribió contra el límite inexistente de 50 caracteres y que las
          keywords caben en 100 bytes, no en 100 caracteres.
        </li>
        <li>
          <strong>Semana 1.</strong> Lanza una campaña pequeña de Apple Ads con
          coincidencia de búsqueda y empieza a recoger consultas reales.
        </li>
        <li>
          <strong>Semana 2.</strong> Reescribe nombre y subtítulo en App Store, y
          nombre y descripción breve en Google Play, por separado y sin repetir
          palabras.
        </li>
        <li>
          <strong>Semana 2.</strong> Cambia las dos primeras capturas. Ahí se
          juega la mayor parte de la conversión. El{" "}
          <a href={`${APP_URL}/editor`}>editor de capturas</a> exporta las
          medidas exactas de cada tienda.
        </li>
        <li>
          <strong>Semana 3.</strong> Arranca un test: Product Page Optimization o
          un experimento de ficha. Una sola variable.
        </li>
        <li>
          <strong>Semana 4 en adelante.</strong> No toques nada y espera datos.
          Es el paso más difícil de todos.
        </li>
      </ol>

      <h2>Qué no hacer</h2>
      <ul>
        <li>
          <strong>No compres instalaciones, valoraciones ni reseñas.</strong>{" "}
          Incumple las directrices de las dos tiendas y las consecuencias llegan
          hasta la retirada de la app y el cierre de la cuenta de desarrollador.
        </li>
        <li>
          <strong>No traduzcas las keywords.</strong> Una traducción
          gramaticalmente perfecta puede tener volumen cero. Cada mercado se
          construye desde cero.
        </li>
        <li>
          <strong>No cambies cinco cosas a la vez.</strong> No sabrás cuál
          funcionó.
        </li>
        <li>
          <strong>No midas en global.</strong> La conversión promediada entre
          países esconde el resultado. Mira España aparte.
        </li>
        <li>
          <strong>No dejes reseñas sin responder.</strong> Es la única parte del
          posicionamiento ASO que depende solo de ti y solo cuesta tiempo.
        </li>
      </ul>

      <h2>Dónde llevar todo esto</h2>
      <p>
        El trabajo se dispersa entre dos consolas, varios idiomas y ningún
        historial. A los tres meses nadie recuerda qué se cambió, cuándo, ni cómo
        era la descripción antes del retoque que hundió la conversión. Por eso
        hacemos <Link href="/pricing">AppBoard, gratis en beta</Link>: las dos
        tiendas en un panel, metadatos por idioma, historial con diferencias y
        reversión, y un editor de capturas que exporta en las medidas exactas.
      </p>
      <p>
        La parte técnica de cada consola está desarrollada aparte: en la guía de{" "}
        <Link href="/es/blog/google-play-console-publicar-app">
          Google Play Console
        </Link>{" "}
        y en la de{" "}
        <Link href="/es/blog/app-store-connect-publicar-app">
          App Store Connect
        </Link>
        . Y si te estás planteando delegarlo, los precios reales del mercado
        español están en{" "}
        <Link href="/es/blog/agencia-aso-precios">agencia ASO y precios</Link>.
      </p>

      <h2>Preguntas frecuentes</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Límites de caracteres, requisitos y precios verificados en la
        documentación de Apple y Google y en las páginas de cada proveedor en
        agosto de 2026. Si lees esto bastante después, comprueba el límite del
        título y los tamaños de captura antes de publicar: son lo que cambia con
        más frecuencia.
      </p>
    </ArticleLayout>
  );
}
