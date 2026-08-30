import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { Callout, JsonLd } from "@/components/ui";
import { BLOG_ARTICLES_ES } from "@/lib/blog";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "video-promocional-o-capturas";
const EN_SLUG = "app-preview-video-vs-screenshots";
const article = BLOG_ARTICLES_ES.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Cuánto suma de verdad un vídeo de presentación, en qué se diferencian App Store y Google Play al mostrarlo, los canales de YouTube por idioma y la trampa del formato horizontal que deja tu resultado de búsqueda sin capturas.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "es_ES",
  ogType: "article",
  path: `/es/blog/${SLUG}`,
  publishedTime: "2026-08-30",
  title: "Vídeo promocional o capturas de pantalla",
});

const IMAGES = [
  "/images/blog/app-store-landscape-app-preview.jpg",
  "/images/blog/app-store-search-no-screenshots.jpg",
];

const FAQ: FaqEntry[] = [
  {
    answer:
      "Las plataformas de tests A/B publican subidas de conversión a instalación de alrededor del 16 por ciento (SplitMetrics) hasta el 20 o 35 por ciento (StoreMaven). Son datos de proveedores, no investigación revisada, así que tómalos como orientación. El efecto depende mucho de la categoría: los juegos son los que más ganan, mientras que varios tests en finanzas y productividad muestran caídas del 3 al 7 por ciento, porque un vídeo tarda más en decir lo que una sola captura con texto dice al instante.",
    question: "¿Un vídeo de presentación aumenta las instalaciones?",
  },
  {
    answer:
      "App Store permite hasta 3 vídeos de presentación por localización, de 15 a 30 segundos, subidos como archivo (M4V, MP4 o MOV, hasta 500 MB). Google Play acepta un vídeo promocional por ficha de Play Store, y solo como URL de un vídeo concreto de YouTube, no de una lista de reproducción ni de un canal.",
    question: "¿Cuántos vídeos se pueden añadir en App Store y Google Play?",
  },
  {
    answer:
      "La causa habitual es un vídeo de presentación en horizontal combinado con capturas verticales. El vídeo horizontal ocupa todo el ancho de la fila de resultados y las capturas no se muestran a su lado, y en la práctica la fila puede aparecer sin ninguna imagen. Compruébalo en un dispositivo que nunca haya instalado tu app, porque para quien ya la tiene la ficha se ve de otra forma.",
    question:
      "¿Por qué mi app no muestra capturas en los resultados de búsqueda de App Store?",
  },
  {
    answer:
      "No. El vídeo promocional de Google Play no aparece en los resultados de búsqueda de Play. Solo actúa en la ficha del producto, donde puede reproducirse solo y sin sonido hasta 30 segundos. Es lo contrario que en App Store, donde el vídeo de presentación se reproduce en los resultados de búsqueda antes de que nadie te haya elegido.",
    question: "¿El vídeo de Google Play aparece en los resultados de búsqueda?",
  },
  {
    answer:
      "Sí, en las dos tiendas. En App Store los vídeos van por localización. En Google Play los gráficos de la ficha, vídeo incluido, se localizan por idioma. Además Play tiene una superficie aparte y poco usada: en Aumentar usuarios, Presencia en Play Store, Vídeos de YouTube se enlazan canales o listas de reproducción con un idioma asignado, un idioma por canal.",
    question: "¿Se puede poner un vídeo distinto para cada idioma?",
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
      locale="es"
      translationHref={`/blog/${EN_SLUG}`}
    >
      <JsonLd data={buildFaqSchema(`/es/blog/${SLUG}`, FAQ, "es-ES")} />
      <p>
        Cualquier otra superficie se pasó al vídeo hace años. Las fichas de las
        tiendas son el último sitio donde buenos equipos siguen subiendo cinco
        imágenes estáticas, y quien añade vídeo a menudo se rompe por el camino
        su propio resultado de búsqueda.
      </p>

      <Callout title="En resumen">
        <ul>
          <li>
            En Meta el vídeo aproximadamente duplica el clic en el mismo
            emplazamiento. Lo estático sigue ganando en eficiencia de coste.
          </li>
          <li>
            En las tiendas el efecto es menor: en torno a{" "}
            <strong>un 5 a 30 por ciento más de conversión a instalación</strong>
            , según la categoría. Los juegos ganan más, algunos tests en finanzas
            y productividad salen en negativo.
          </li>
          <li>
            El vídeo de presentación se reproduce en los resultados de búsqueda
            de App Store. El de Google Play no aparece en la búsqueda de Play.
          </li>
          <li>
            Play tiene una segunda superficie casi sin usar: canales de YouTube
            por idioma.
          </li>
          <li>
            <strong>
              Un vídeo horizontal en App Store puede borrar las capturas de tu
              fila de resultados
            </strong>
            , y a veces la deja sin ninguna imagen.
          </li>
        </ul>
      </Callout>

      <h2>Cuánto vale de verdad el vídeo</h2>
      <p>
        Benchmarks agregados de cuentas publicitarias de Meta en 2026
        (recopilaciones de agencias, no datos publicados por Meta, así que
        orientativos):
      </p>
      <table>
        <thead>
          <tr>
            <th>Métrica</th>
            <th>Imagen estática</th>
            <th>Vídeo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CTR en el mismo emplazamiento de Reels</td>
            <td>0,62%</td>
            <td>1,31%</td>
          </tr>
          <tr>
            <td>CTR medio en todos los emplazamientos</td>
            <td>0,90%</td>
            <td>1,14%</td>
          </tr>
          <tr>
            <td>Tiempo dedicado al creativo</td>
            <td>1,4 s</td>
            <td>4,7 s</td>
          </tr>
          <tr>
            <td>Conversión en mitad del embudo</td>
            <td>1,6%</td>
            <td>2,1%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Esos números no se trasladan. En un feed estás interrumpiendo a alguien y
        el vídeo gana porque frena el scroll. En una ficha el usuario ya ha
        tocado y está decidiendo si instala, por eso las subidas en tienda son de
        una cifra o dos cifras bajas, y por eso un mal vídeo puede quitarte
        instalaciones mientras que un mal anuncio solo se ignora.
      </p>
      <p>
        SplitMetrics publica alrededor de <strong>+16%</strong> al añadir un
        vídeo de presentación, StoreMaven <strong>+20% a +35%</strong>. Un buen
        juego de capturas vale algo parecido por sí solo, así que el vídeo suma a
        unas buenas capturas, no las sustituye. Por categoría, los rangos
        orientativos de AppFollow:
      </p>
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Subida de conversión con vídeo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juegos</td>
            <td>+8% a +18%</td>
          </tr>
          <tr>
            <td>Salud y forma física</td>
            <td>+7% a +14%</td>
          </tr>
          <tr>
            <td>Fintech</td>
            <td>+6% a +12%</td>
          </tr>
          <tr>
            <td>Social</td>
            <td>+5% a +11%</td>
          </tr>
          <tr>
            <td>Comercio electrónico</td>
            <td>+4% a +10%</td>
          </tr>
          <tr>
            <td>Utilidades</td>
            <td>+3% a +9%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Varias casas de testing informan además de que el vídeo{" "}
        <em>perjudica</em> la conversión en finanzas y productividad entre un 3 y
        un 7 por ciento. La regla: el vídeo gana cuando tu app es algo que se
        mira, y pierde cuando es algo que se usa.
      </p>

      <h2>Las dos tiendas colocan el vídeo en sitios distintos</h2>
      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vídeos por ficha</td>
            <td>Hasta 3 por localización</td>
            <td>1 vídeo promocional por ficha</td>
          </tr>
          <tr>
            <td>Cómo se entrega</td>
            <td>Archivo subido (M4V, MP4, MOV, hasta 500 MB)</td>
            <td>URL de un vídeo concreto de YouTube, no lista ni canal</td>
          </tr>
          <tr>
            <td>Duración</td>
            <td>15 a 30 s</td>
            <td>Sin límite estricto, recomendado 30 a 90 s</td>
          </tr>
          <tr>
            <td>En resultados de búsqueda</td>
            <td>Se reproduce solo, sin sonido</td>
            <td>No aparece</td>
          </tr>
          <tr>
            <td>En la ficha de producto</td>
            <td>Se reproduce solo</td>
            <td>Puede reproducirse sin sonido hasta 30 s, según el dispositivo</td>
          </tr>
          <tr>
            <td>Orientación</td>
            <td>Vertical u horizontal, y eso cambia el diseño</td>
            <td>Preferible horizontal 16:9</td>
          </tr>
          <tr>
            <td>Por idioma</td>
            <td>Sí, por localización</td>
            <td>Sí, los gráficos se localizan por idioma</td>
          </tr>
        </tbody>
      </table>
      <p>
        En App Store el vídeo es un activo de descubrimiento, suena antes de que
        nadie te haya elegido. En Play solo existe después del toque. Esa única
        diferencia debería decidir el reparto de presupuesto, y es lo contrario
        de como lo reparten casi todos los equipos.
      </p>

      <h2>Play: canales de YouTube por idioma</h2>
      <p>
        En{" "}
        <strong>
          Aumentar usuarios, Presencia en Play Store, Vídeos de YouTube
        </strong>{" "}
        enlazas a la ficha canales o listas con un idioma asignado, un idioma por
        canal. Una ficha en cuatro idiomas puede llevar cuatro superficies de
        vídeo en lugar de una. Muy pocas lo hacen. Las reglas:
      </p>
      <ul>
        <li>Vídeos públicos, aunque las listas pueden ser ocultas.</li>
        <li>
          Monetización desactivada, inserción permitida, propiedad de tu app o
          juego.
        </li>
        <li>Nada de Shorts ni de directos.</li>
        <li>
          Juegos: subido en los últimos 90 días para salir en la ficha, 21 días
          para la pestaña Juegos, 180 para Aplicaciones.
        </li>
        <li>
          Hace falta Premium growth tools y el permiso de gestión de presencia en
          la tienda.
        </li>
        <li>Una lista para una app, varias para un juego.</li>
      </ul>
      <p>
        Play Console informa después de espectadores, clics e instalaciones en 28
        días. Un ejemplo real:{" "}
        <a
          href="https://play.google.com/store/apps/details?id=tech.ravenlab.buzzin"
          rel="noopener"
          target="_blank"
        >
          Buzzin: TV Party Game Show
        </a>
        . Play acepta además un parámetro <code>referrer</code> en los enlaces,
        así que etiquétalos antes de compartirlos en vez de adivinar.
      </p>

      <h2>La trampa del formato horizontal en App Store</h2>
      <p>
        Apple permite vertical u horizontal y no avisa de ninguna consecuencia. En
        la ficha, un vídeo horizontal no encabeza la galería: se traslada a una
        sección propia llamada <em>A Closer Look</em>:
      </p>
      <figure>
        <Image
          alt="Ficha de Buzzin en App Store con un vídeo de presentación horizontal en una sección aparte llamada A Closer Look, debajo de Novedades y encima de la galería de capturas verticales"
          className="mx-auto w-full max-w-[320px]"
          height={1348}
          sizes="(min-width: 640px) 320px, 100vw"
          src="/images/blog/app-store-landscape-app-preview.jpg"
          width={620}
        />
        <figcaption>
          Vídeo horizontal, empujado a su propio bloque en vez de encabezar la
          galería.
        </figcaption>
      </figure>
      <p>
        En los resultados de búsqueda ocupa todo el ancho de la fila y las
        capturas no se muestran al lado. En la práctica es peor: la fila se dibuja
        sin ninguna imagen. Abajo, la misma app está entre dos competidores con
        tres imágenes cada uno y no enseña más que un icono y una línea de texto.
      </p>
      <figure>
        <Image
          alt="Resultados de búsqueda de App Store donde la ficha de Buzzin muestra solo icono, título y valoración sin capturas, mientras que las apps de arriba y de abajo muestran tres imágenes cada una"
          className="mx-auto w-full max-w-[320px]"
          height={1348}
          sizes="(min-width: 640px) 320px, 100vw"
          src="/images/blog/app-store-search-no-screenshots.jpg"
          width={620}
        />
        <figcaption>
          La misma app en búsqueda. Los vecinos, tres imágenes. La nuestra, una
          línea de texto.
        </figcaption>
      </figure>
      <Callout title="Comprueba esto antes que nada" variant="warning">
        <p>
          Los resultados de búsqueda son donde te comparan lado a lado. Perder
          ahí el creativo cuesta más de lo que el vídeo iba a ganar en la ficha, y
          nada en App Store Connect te avisa de que ha pasado.
        </p>
      </Callout>
      <ul>
        <li>
          <strong>App vertical, vídeo vertical.</strong> Así se coloca junto a
          tus primeras capturas en lugar de sustituirlas.
        </li>
        <li>
          <strong>Producto de verdad horizontal</strong> (juego para televisión,
          de carreras, editor de vídeo): o metes el material en un marco vertical
          con bandas para que la fila conserve la galería, o aceptas una fila
          desnuda.
        </li>
        <li>
          <strong>Nunca mezcles orientaciones</strong> en el juego de capturas de
          un mismo dispositivo. Una interfaz vertical en un marco horizontal es
          un motivo documentado de rechazo en App Review.
        </li>
        <li>
          <strong>Verifica en un dispositivo limpio tras cada publicación.</strong>{" "}
          Para quien ya tiene la app el diseño es otro.
        </li>
      </ul>
      <p>
        La misma app en la otra tienda:{" "}
        <a
          href="https://apps.apple.com/pl/app/buzzin-tv-party-game-show/id6787068440"
          rel="noopener"
          target="_blank"
        >
          Buzzin en App Store
        </a>
        .
      </p>

      <h2>Las reglas de oficio que deciden el resultado</h2>
      <ul>
        <li>
          <strong>Tu fotograma de portada es una captura.</strong> La
          reproducción automática es condicional, y cuando no salta el vídeo se
          reduce a esa imagen. Ponle texto, que se lea en miniatura, nunca una
          pantalla negra con el logotipo.
        </li>
        <li>
          <strong>Los tres primeros segundos funcionan sin sonido.</strong>{" "}
          Producto en el primer segundo, mensaje en texto sobre la imagen, el
          mejor momento por delante.
        </li>
        <li>
          <strong>15 a 20 segundos</strong> aunque Apple permita 30. Los bucles
          cortos se ven más de una vez.
        </li>
        <li>
          <strong>Localiza.</strong> El vídeo es por localización en las dos
          tiendas.
        </li>
        <li>
          <strong>Mantenlo al día.</strong> Un vídeo con una interfaz de hace dos
          rediseños es peor que no tener vídeo.
        </li>
      </ul>

      <h2>Antes de gastar presupuesto</h2>
      <ol>
        <li>
          Si tus dos primeras imágenes son capturas en crudo sin texto, arregla
          eso primero. Victoria mayor y más barata.
        </li>
        <li>
          Si una imagen fija comunica lo mismo, el vídeo añade carga y riesgo sin
          añadir información.
        </li>
        <li>
          Con presupuesto ajustado, primero iOS: allí el vídeo compra una
          superficie de descubrimiento, en Play solo rinde tras el toque.
        </li>
      </ol>
      <p>
        Luego testea en vez de creerte las medias de arriba. Product Page
        Optimization en App Store y los experimentos de ficha en Google Play son
        gratis. Vídeo contra no vídeo, y por separado fotogramas de portada entre
        sí. Dos semanas por test, una variable, y anota cómo era la ficha cuando
        los números se movieron. Esa última parte es la que se rompe en silencio,
        y guardar el registro de qué se publicó y cuándo, por idioma y por
        tienda, es buena parte de para lo que construimos{" "}
        <Link href="/pricing">AppBoard</Link>. La configuración de las dos
        consolas está en las guías de{" "}
        <Link href="/es/blog/app-store-connect-publicar-app">
          App Store Connect
        </Link>{" "}
        y{" "}
        <Link href="/es/blog/google-play-console-publicar-app">
          Google Play Console
        </Link>
        .
      </p>
      <p>
        Haz primero la comprobación barata. Busca tu app en un móvil que nunca la
        haya instalado y mira qué dibuja la fila. Si vuelve una línea de texto
        entre dos competidores con tres imágenes cada uno, no hay calidad de
        producción que lo arregle.
      </p>

      <h2>Preguntas frecuentes</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Reglas de las tiendas verificadas en la documentación de Apple y Google
        en agosto de 2026. Las cifras de conversión vienen de proveedores de
        tests A/B (SplitMetrics, StoreMaven, AppFollow) y son orientativas.
      </p>
    </ArticleLayout>
  );
}
