import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
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
    "Vídeo de presentación en App Store y vídeo promocional en Google Play: cuánto suma realmente en conversión, en qué se diferencian las dos tiendas y la trampa del formato horizontal que deja tu resultado de búsqueda sin capturas.",
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
        Cualquier otra superficie que toca un usuario se pasó al vídeo hace
        tiempo. Instagram convirtió el feed en Reels, Facebook fue detrás, TikTok
        nunca tuvo un formato estático. Las fichas de las tiendas son el último
        sitio donde muchos equipos buenos siguen subiendo cinco imágenes
        estáticas y dan por cerrado el trabajo creativo.
      </p>
      <p>
        No es necesariamente un error. Una ficha de tienda no es un feed y los
        números no se trasladan uno a uno. Pero la distancia entre el esfuerzo
        que se pone en un creativo de social de pago y el que se pone en un vídeo
        de presentación suele ser indefendible, y la mecánica del vídeo en las
        tiendas está tan poco documentada que los equipos que sí invierten a
        menudo se rompen la propia ficha por el camino. Esto va de las dos cosas:
        cuánto vale el vídeo y cómo publicarlo sin empeorar tu resultado de
        búsqueda.
      </p>

      <h2>Conclusiones principales</h2>
      <ul>
        <li>
          En Meta el vídeo aproximadamente duplica el clic en el mismo
          emplazamiento y retiene la atención unas tres veces más que una imagen
          estática. Lo estático sigue ganando en eficiencia pura de coste en
          prospección.
        </li>
        <li>
          En las tiendas el efecto es mucho menor: los tests de proveedores
          hablan de{" "}
          <strong>entre un 5 y un 30 por ciento más de conversión a
          instalación</strong>, muy dependiente de la categoría. Los juegos son
          los que más ganan. Algunos tests en finanzas y productividad salen en
          negativo.
        </li>
        <li>
          Apple y Google colocan el vídeo en sitios completamente distintos. Un
          vídeo de presentación se reproduce en los resultados de búsqueda. El
          vídeo de Google Play no aparece en la búsqueda de Play en absoluto.
        </li>
        <li>
          Google Play tiene una segunda superficie de vídeo casi sin usar:
          canales o listas de reproducción de YouTube por idioma.
        </li>
        <li>
          <strong>Un vídeo horizontal en App Store puede borrar las capturas de
          tu fila de resultados</strong>, y a veces deja la fila sin ninguna
          imagen. Las pruebas están más abajo.
        </li>
        <li>
          El fotograma de portada y los tres primeros segundos sin sonido son
          todo el material para la mayoría. Trátalos como capturas, no como un
          vídeo.
        </li>
      </ul>

      <h2>El feed zanjó esta discusión hace años</h2>
      <p>
        Empecemos por la plataforma donde las muestras son enormes y el ciclo de
        feedback dura un día. Los benchmarks agregados de cuentas publicitarias
        de Meta en 2026 (recopilaciones de agencias, no datos publicados por
        Meta, así que orientativos) aterrizan siempre en el mismo sitio.
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
        El vídeo se lleva ya alrededor del 58 por ciento de los presupuestos
        publicitarios en Meta, los Reels salen un 26 por ciento más baratos por
        clic que el feed, y la interacción en Instagram Stories está bastante por
        encima del feed de Facebook. El contrapunto honesto, porque importa: el
        creativo estático sigue ganando a menudo en CPM, CPC y ROAS en
        prospección. Una imagen estática comunica una propuesta de valor en una
        fracción de segundo, y en una campaña de conversión con un CPA ajustado
        eso a veces gana a un vídeo que nadie termina.
      </p>
      <p>
        El resumen justo no es entonces &quot;gana el vídeo&quot;. Es: el vídeo
        compra atención e interacción, lo estático compra eficiencia, y el
        formato que gana depende de lo que necesites de ese emplazamiento
        concreto.
      </p>

      <h2>Una ficha de tienda no es un feed</h2>
      <p>
        Y por eso mismo los números de social no se trasladan. En un feed estás
        interrumpiendo a alguien. El vídeo gana ahí porque frena mejor el scroll.
      </p>
      <p>
        En una ficha de producto el usuario ya ha tocado. Tiene intención. No
        está decidiendo si mirar, está decidiendo si instalar, y el trabajo del
        creativo pasó de detener la atención a responder una pregunta. Por eso
        las subidas en tienda se miden en porcentajes de una cifra o de dos
        cifras bajas, y no en múltiplos, y por eso un mal vídeo puede quitarte
        instalaciones de verdad mientras que un mal anuncio simplemente se
        ignora.
      </p>

      <h2>Cuánto vale de verdad un vídeo en las tiendas</h2>
      <p>
        Todas las cifras publicadas vienen de proveedores de plataformas de tests
        A/B, así que cada número de abajo es orientativo y no investigación
        revisada. Son lo bastante consistentes como para planificar con ellos.
      </p>
      <ul>
        <li>
          SplitMetrics publica alrededor de <strong>+16%</strong> de conversión a
          instalación al añadir un vídeo de presentación en App Store.
        </li>
        <li>
          Los datos de StoreMaven sitúan el mismo efecto entre{" "}
          <strong>+20% y +35%</strong>.
        </li>
        <li>
          Un buen juego de capturas estáticas vale algo parecido por sí solo, y
          esa es la parte que se salta: el vídeo suma a unas buenas capturas, no
          las sustituye.
        </li>
      </ul>
      <p>Por categoría, los rangos orientativos de AppFollow quedan así:</p>
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
        Y el resultado que nadie cita: varias casas de testing informan de que el
        vídeo <em>perjudica</em> activamente la conversión en finanzas y
        productividad, del orden del 3 al 7 por ciento. El patrón es simple. El
        vídeo gana cuando tu app es algo que se mira: juego, movimiento, una
        transformación, un momento social. Pierde cuando tu app es algo que se
        usa, porque un vídeo de 20 segundos es una forma más lenta de decir
        &quot;esto escanea recibos&quot; que una sola captura con texto.
      </p>

      <h2>Apple y Google ponen el vídeo en sitios distintos</h2>
      <p>
        Aquí vive la mayoría de los errores evitables. Las dos tiendas no
        comparten casi nada en esto salvo la palabra &quot;vídeo&quot;.
      </p>
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
            <td>Sí, los gráficos de la ficha se localizan por idioma</td>
          </tr>
        </tbody>
      </table>
      <p>
        Lee otra vez la fila de resultados de búsqueda. En App Store el vídeo es
        un activo de descubrimiento, suena antes de que nadie te haya elegido. En
        Google Play es un activo de conversión, solo existe después del toque.
        Esa única diferencia debería decidir el reparto de presupuesto, y es lo
        contrario de como lo reparten casi todos los equipos.
      </p>

      <h2>Google Play: los canales de YouTube por idioma que casi nadie usa</h2>
      <p>
        El campo de vídeo promocional de la ficha principal no es la única
        superficie de vídeo en Play. En{" "}
        <strong>Aumentar usuarios, Presencia en Play Store, Vídeos de
        YouTube</strong>{" "}
        puedes enlazar a la ficha canales o listas de reproducción de YouTube:
        una lista dedicada para una app, varias listas o canales para un juego.
      </p>
      <p>
        Lo que merece el esfuerzo es la segmentación por idioma. Asignas un
        idioma a cada canal o lista, un idioma por canal, y Play se lo muestra a
        los usuarios cuya configuración de idioma coincide. Una ficha localizada
        a inglés, polaco, alemán y español puede llevar así cuatro superficies de
        vídeo separadas en lugar de una. Muy pocas fichas lo hacen.
      </p>
      <p>Las reglas que te tumbarán el material si las pasas por alto:</p>
      <ul>
        <li>
          Los vídeos tienen que ser públicos, aunque las listas pueden ser
          ocultas.
        </li>
        <li>
          Monetización desactivada, sin anuncios, con inserción permitida y
          propiedad de tu app o juego.
        </li>
        <li>Nada de YouTube Shorts ni de directos.</li>
        <li>
          Ventanas de novedad para juegos: subido en los últimos 90 días para
          salir en la ficha, 21 días para la pestaña Juegos, 180 días para la
          pestaña Aplicaciones.
        </li>
        <li>
          Hace falta elegibilidad para Premium growth tools y el permiso de
          gestión de presencia en la tienda en la cuenta.
        </li>
      </ul>
      <p>
        Play Console informa después de espectadores, clics e instalaciones en
        una ventana de 28 días, o sea más medición de la que da Apple para sus
        vídeos.
      </p>
      <p>
        Un ejemplo real de este montaje:{" "}
        <a
          href="https://play.google.com/store/apps/details?id=tech.ravenlab.buzzin"
          rel="noopener"
          target="_blank"
        >
          Buzzin: TV Party Game Show en Google Play
        </a>
        , un juego de fiesta donde el vídeo trabaja de verdad porque el producto
        es literalmente gente jugando junta en una habitación. Sobre la propia
        URL: Play acepta un parámetro <code>referrer</code> en los enlaces a la
        tienda, así que si quieres saber si la instalación la trajo el vídeo, la
        newsletter o la campaña de TikTok, etiqueta el enlace antes de
        compartirlo en vez de adivinar por un pico de instalaciones.
      </p>

      <h2>La trampa del formato horizontal en App Store</h2>
      <p>
        Apple deja que un vídeo de presentación sea vertical u horizontal y no
        avisa de ninguna de las consecuencias. Hay dos, y las dos son feas si tus
        capturas son verticales.
      </p>
      <p>
        <strong>En la ficha de producto</strong>, un vídeo horizontal no encabeza
        la galería de capturas. Se traslada a una sección propia llamada{" "}
        <em>A Closer Look</em>, separada de las capturas:
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
          Un vídeo horizontal acaba en su propio bloque <em>A Closer Look</em> en
          lugar de encabezar la galería.
        </figcaption>
      </figure>
      <p>
        Peor aún, el diseño no es igual para todos. Si quien mira ya se descargó
        la app, o la tiene en su cuenta, el vídeo se coloca en otro sitio. Probar
        tu propia ficha en tu propio móvil dice por tanto muy poco. Compruébalo
        en un dispositivo que nunca haya instalado la app.
      </p>
      <p>
        <strong>En los resultados de búsqueda</strong>, un vídeo horizontal ocupa
        todo el ancho de la fila y las capturas no se muestran a su lado. Ese es
        el comportamiento documentado. Lo que pasa en la práctica es a veces
        peor: la fila se dibuja sin ninguna imagen.
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
          La misma app en búsqueda. Las fichas de arriba y de abajo muestran tres
          imágenes cada una. La nuestra no muestra nada salvo icono, título y
          subtítulo.
        </figcaption>
      </figure>
      <p>
        Mira la fila del medio y luego sus vecinas. Dos competidores están
        gastando tres imágenes de pantalla cada uno en defender su caso, y la app
        que hay en medio es una línea de texto. Los resultados de búsqueda son
        donde ocurre el barrido visual y donde te comparan lado a lado. Perder
        ahí el creativo cuesta más de lo que el vídeo iba a ganar en la ficha.
      </p>

      <h3>Qué hacer al respecto</h3>
      <ul>
        <li>
          <strong>Si tu app es vertical, deja el vídeo en vertical.</strong> Un
          vídeo vertical se coloca junto a tus primeras capturas en la fila en
          lugar de sustituirlas, así conservas las dos superficies.
        </li>
        <li>
          <strong>Si tu producto es de verdad horizontal</strong>, un juego para
          televisión, uno de carreras, un editor de vídeo, tienes una decisión
          real y no un error. O metes el material horizontal dentro de un marco
          vertical con bandas para que la fila conserve la galería, o aceptas una
          fila desnuda y dejas que el icono, el título y el subtítulo carguen con
          el peso.
        </li>
        <li>
          <strong>Nunca mezcles orientaciones</strong> dentro del juego de
          capturas de un mismo dispositivo. Además del lío de maquetación, una
          interfaz vertical presentada dentro de un marco horizontal es un motivo
          documentado de rechazo en App Review.
        </li>
        <li>
          <strong>Verifica después de cada publicación.</strong> Este renderizado
          ha cambiado más de una vez y Apple lo documenta poco. Busca tu propia
          app en un dispositivo limpio tras cada publicación de metadatos y mira
          la fila, no solo la ficha.
        </li>
      </ul>
      <p>
        La misma app en la otra tienda, para comparar:{" "}
        <a
          href="https://apps.apple.com/pl/app/buzzin-tv-party-game-show/id6787068440"
          rel="noopener"
          target="_blank"
        >
          Buzzin en App Store
        </a>
        . Mismo producto, mismo material, dos conjuntos de restricciones
        completamente distintos, que es justo de lo que va este artículo.
      </p>

      <h2>Tu fotograma de portada es una captura</h2>
      <p>
        La reproducción automática es condicional. Depende de la superficie, del
        dispositivo, del modo de bajo consumo, de la red y de los ajustes del
        propio usuario. Cuando no salta, el vídeo entero se reduce a una sola
        imagen fija: el fotograma de portada.
      </p>
      <p>
        Es decir, ese fotograma está haciendo trabajo de captura y debería
        construirse como tal. Ponle un texto, que se lea en tamaño miniatura y
        elige un momento que diga qué es la app, en vez de una cartela de título
        o una animación de logo. Un fotograma que es una pantalla negra con el
        logotipo es un hueco desperdiciado en el sitio más valioso de tu ficha.
      </p>

      <h2>Los tres primeros segundos tienen que funcionar sin sonido</h2>
      <p>
        En los resultados de búsqueda App Store reproduce tu vídeo sin sonido. Da
        por hecho que nunca hay audio, y que la mayoría se va antes de la mitad.
      </p>
      <ul>
        <li>
          Enseña el producto en el primer segundo. Sin intro de logo, sin splash.
        </li>
        <li>
          Lleva el mensaje en texto sobre la imagen, porque para quien mira no
          existe la voz en off.
        </li>
        <li>
          Pon delante el mejor momento. No construyas hacia él, no vas a llegar.
        </li>
        <li>
          Quédate en 15 a 20 segundos aunque Apple permita 30. Los bucles cortos
          se ven más de una vez.
        </li>
        <li>
          Localiza. El vídeo es por localización en las dos tiendas, y un texto
          en inglés incrustado sobre una ficha en español es el mismo error que
          una captura sin traducir. Más sobre esto en el artículo de{" "}
          <Link href="/es/blog/posicionamiento-aso">posicionamiento ASO</Link>.
        </li>
      </ul>

      <h2>¿Merece la pena hacerlo?</h2>
      <p>Unos filtros honestos antes de gastar presupuesto:</p>
      <ol>
        <li>
          <strong>¿Tus capturas ya son buenas?</strong> Si tus dos primeras
          imágenes son capturas en crudo sin texto, arregla eso primero. Es una
          victoria mayor y más barata que cualquier vídeo.
        </li>
        <li>
          <strong>¿Hay movimiento que merezca verse?</strong> Si una imagen fija
          comunica lo mismo, el vídeo añade tiempo de carga y riesgo sin añadir
          información.
        </li>
        <li>
          <strong>¿Vas a mantenerlo al día?</strong> Un vídeo que enseña una
          interfaz de hace dos rediseños es peor que no tener vídeo, y en Play
          las superficies de YouTube tienen ventanas de novedad explícitas.
        </li>
        <li>
          <strong>¿Para qué tienda lo haces?</strong> En App Store el vídeo te
          compra una superficie de descubrimiento. En Play solo rinde después del
          toque. Con presupuesto ajustado, primero iOS.
        </li>
      </ol>

      <h2>Testea en vez de creerte los benchmarks</h2>
      <p>
        Cada número de este artículo es la media de otro. Las dos tiendas te dan
        herramientas gratuitas para encontrar la tuya: Product Page Optimization
        en App Store y experimentos de ficha en Google Play. Prueba vídeo contra
        no vídeo, y por separado fotogramas de portada entre sí, porque son dos
        experimentos distintos que los equipos mezclan con frecuencia. La
        configuración de las dos consolas está en las guías de{" "}
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
        Dale a cada test al menos dos semanas y tráfico suficiente para que
        signifique algo, cambia una sola variable cada vez y anota cómo era la
        ficha cuando los números se movieron. Esa última parte es la que se rompe
        en silencio: seis meses después nadie recuerda qué juego de capturas
        estaba publicado en el buen trimestre, ni qué idiomas llegaron a tener el
        vídeo localizado. Guardar el registro de qué se publicó y cuándo, por
        idioma y por tienda, es buena parte de para lo que construimos{" "}
        <Link href="/pricing">AppBoard</Link>, pero una hoja de cálculo que
        mantienes de verdad gana a una herramienta que no usas.
      </p>
      <p>
        Publiques lo que publiques, haz primero la comprobación barata. Busca tu
        propia app en un móvil que nunca la haya instalado y mira qué dibuja la
        fila. Si vuelve una línea de texto entre dos competidores que enseñan
        tres imágenes cada uno, no hay calidad de producción que lo arregle.
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
        tests A/B (SplitMetrics, StoreMaven, AppFollow) y son orientativas, no
        investigación revisada. Si lees esto bastante después, vuelve a
        comprobar los límites y el comportamiento de los resultados de búsqueda
        antes de publicar.
      </p>
    </ArticleLayout>
  );
}
