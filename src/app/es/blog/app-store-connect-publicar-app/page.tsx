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

const SLUG = "app-store-connect-publicar-app";
const EN_SLUG = "app-store-screenshot-sizes";
const article = BLOG_ARTICLES_ES.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Cómo publicar una app con App Store Connect en 2026: clave de API y archivo .p8, límites de metadatos, keywords medidas en bytes, capturas vigentes y estatus de comerciante.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "es_ES",
  path: `/es/blog/${SLUG}`,
  title: "App Store Connect: cómo publicar una app (guía 2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "Apple publica el precio del Apple Developer Program en 99 USD al año y no publica un importe en euros para España. La cantidad local aparece únicamente en el momento del pago, así que lo honesto es decir unos 99 USD, en euros al pagar, y desconfiar de cualquier guía que te dé una cifra exacta en euros como precio oficial de Apple.",
    question: "¿Cuánto cuesta la cuenta de desarrollador de Apple en España?",
  },
  {
    answer:
      "El campo de keywords admite 100 bytes, no 100 caracteres. En UTF-8 las vocales acentuadas y la eñe ocupan dos bytes cada una, así que un conjunto de keywords en español llena el campo antes que uno en inglés. La palabra diseño son seis caracteres pero siete bytes; gestión son siete caracteres y ocho bytes.",
    question: "¿El campo de keywords admite 100 caracteres o 100 bytes?",
  },
  {
    answer:
      "El archivo .p8 con la clave privada se puede descargar una sola vez desde App Store Connect. Apple no conserva ninguna copia, así que si lo pierdes tendrás que revocar esa clave y generar una nueva. Guárdalo en el gestor de secretos del equipo el mismo día que lo generas y nunca en el repositorio.",
    question: "¿Qué pasa si pierdo el archivo .p8 de la clave de API?",
  },
  {
    answer:
      "Apple publica que, de media, el 90 por ciento de los envíos se revisan en menos de 24 horas. Es una media, no una garantía: un rechazo por metadatos o por una función que el revisor no consigue probar reinicia el reloj, y conviene reservar margen antes de una fecha de lanzamiento comprometida.",
    question: "¿Cuánto tarda la revisión de Apple?",
  },
  {
    answer:
      "El iPhone de 6,9 pulgadas acepta tres tamaños en vertical: 1260 por 2736, 1290 por 2796 y 1320 por 2868 píxeles. El iPad de 13 pulgadas acepta 2064 por 2752 y 2048 por 2732. Las capturas no pueden llevar canal alfa y se admiten entre 1 y 10 por localización.",
    question: "¿Qué tamaños de captura acepta App Store Connect en 2026?",
  },
  {
    answer:
      "Sí, si distribuyes en la Unión Europea. Apple exige el estatus de comerciante bajo la Ley de Servicios Digitales y, una vez verificado, publica el nombre, la dirección, el teléfono y el correo en la ficha del App Store en los 27 territorios de la UE. Las personas físicas pueden facilitar una dirección o un apartado de correos.",
    question: "¿Tengo que declarar el estatus de comerciante en el App Store?",
  },
  {
    answer:
      "Para España, el idioma por defecto de App Store Connect es español (España) y el escaparate admite además catalán e inglés (Reino Unido). Cada idioma que añadas es un conjunto completo de metadatos y capturas, así que conviene abrirlos de uno en uno y solo cuando puedas mantenerlos.",
    question: "¿Qué idiomas admite el escaparate español del App Store?",
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
        Empecemos por un dato incómodo que explica por qué esta guía existe:{" "}
        <strong>
          Apple no tiene documentación para desarrolladores en español sobre
          este proceso
        </strong>
        . Las rutas developer.apple.com/es/programs/, /es/programs/enroll/ y
        /es/distribute/app-review/ devuelven 404. Quien busca en español cómo
        publicar una app en el App Store no tiene una fuente autoritativa en su
        idioma: o lee en inglés, o depende de blogs de terceros con datos de
        hace tres años.
      </p>
      <p>
        Aquí van los pasos y las cifras, verificados en la documentación de
        Apple, con los tres puntos donde más gente se atasca:{" "}
        <strong>
          la clave de API y su archivo .p8 irrepetible, el campo de keywords
          medido en bytes y los tamaños de captura vigentes
        </strong>
        .
      </p>

      <h2>Alta en el Apple Developer Program</h2>
      <p>
        La cuota es de <strong>99 USD al año</strong>, es decir, una
        suscripción, no un pago único como en Google Play. Y una precisión que
        casi ningún artículo en español hace bien:{" "}
        <strong>
          Apple no publica un precio en euros para España
        </strong>
        . El importe local aparece solo al pagar. Cualquier guía que te dé una
        cifra exacta en euros presentándola como precio oficial de Apple se la
        está inventando o la copió de un cambio de divisa antiguo. Lo correcto es
        decir unos 99 USD, en euros al pagar.
      </p>
      <p>
        Puedes darte de alta como individuo o como organización. Como
        organización necesitarás un D-U-N-S y que la persona que inscribe tenga
        autoridad legal para vincular a la empresa. Como individuo, el nombre
        que aparece públicamente es el tuyo. Igual que en Google Play, es una
        decisión que cuesta revertir, así que tómala antes de pagar.
      </p>

      <h2>La clave de API: Issuer ID, Key ID y el archivo .p8</h2>
      <p>
        Para automatizar subidas, integrar CI o conectar herramientas externas a
        tu cuenta necesitas una clave de API de App Store Connect. Son tres
        piezas y una de ellas solo existe una vez.
      </p>
      <table>
        <thead>
          <tr>
            <th>Pieza</th>
            <th>Qué es</th>
            <th>Se puede recuperar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Issuer ID</td>
            <td>Identificador de tu cuenta, común a todas las claves</td>
            <td>Sí, siempre visible en App Store Connect</td>
          </tr>
          <tr>
            <td>Key ID</td>
            <td>Identificador de esa clave concreta</td>
            <td>Sí, aparece en el listado de claves</td>
          </tr>
          <tr>
            <td>Archivo .p8</td>
            <td>La clave privada en sí</td>
            <td>
              <strong>No. Se descarga una sola vez</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Este es el punto donde más equipos se quedan bloqueados semanas después:{" "}
        <strong>
          el .p8 se descarga una única vez y Apple no guarda ninguna copia
        </strong>
        . Si lo pierdes, no hay recuperación, hay revocación y generación de una
        clave nueva, con la consiguiente actualización de todos los sitios donde
        estuviera configurada.
      </p>
      <p>
        Regla operativa el mismo día que lo generas: guárdalo en el gestor de
        secretos del equipo, no en el escritorio de una sola persona, y nunca en
        el repositorio. Un .p8 en un repo público es acceso de escritura a tu
        cuenta de App Store Connect.
      </p>

      <h2>Límites de metadatos y por qué el español los llena antes</h2>
      <table>
        <thead>
          <tr>
            <th>Campo</th>
            <th>Límite</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre de la app</td>
            <td>30 caracteres</td>
            <td>El campo con más peso de toda la ficha</td>
          </tr>
          <tr>
            <td>Subtítulo</td>
            <td>30 caracteres</td>
            <td>Se indexa y además lo lee la persona</td>
          </tr>
          <tr>
            <td>Keywords</td>
            <td>
              100 <strong>bytes</strong>
            </td>
            <td>Campo oculto, separado por comas sin espacios</td>
          </tr>
          <tr>
            <td>Texto promocional</td>
            <td>170 caracteres</td>
            <td>Se puede cambiar sin enviar una versión nueva</td>
          </tr>
          <tr>
            <td>Descripción</td>
            <td>4000 caracteres</td>
            <td>No se indexa en el App Store</td>
          </tr>
        </tbody>
      </table>
      <p>
        La fila que cambia tu forma de trabajar es la tercera. El campo de
        keywords son <strong>100 bytes, no 100 caracteres</strong>, y en UTF-8
        una letra latina normal ocupa un byte mientras que{" "}
        <strong>á, é, í, ó, ú y ñ ocupan dos cada una</strong>.
      </p>
      <p>
        En la práctica: &laquo;diseño&raquo; son seis caracteres y siete bytes.
        &laquo;gestión&raquo; son siete caracteres y ocho bytes.
        &laquo;organización&raquo; son doce caracteres y trece bytes. Un
        conjunto de keywords en español{" "}
        <strong>llena el campo antes que el mismo conjunto en inglés</strong>, y
        el contador de caracteres de tu editor de texto te miente sobre cuánto
        espacio te queda.
      </p>
      <p>
        Tres consecuencias prácticas. Primera: no separes las keywords con
        espacios después de la coma, porque cada espacio es un byte tirado.
        Segunda: no repitas palabras que ya están en el nombre o en el subtítulo,
        porque Apple indexa la suma de esos campos. Tercera: decide con datos si
        vale la pena incluir la variante con tilde y la variante sin tilde de una
        misma palabra, porque duplicar cuesta el doble en un campo diminuto.
      </p>
      <p>
        Cómo se eligen esas keywords, y por qué no se traducen nunca del inglés,
        está en la guía de{" "}
        <Link href="/es/blog/posicionamiento-aso">posicionamiento ASO</Link>.
      </p>

      <h2>Tamaños de captura vigentes en 2026</h2>
      <p>
        Comprobado directamente en la documentación de Apple. Lo relevante es que
        varios tamaños conviven: Apple acepta más de una resolución para el mismo
        grupo de dispositivos, y eso simplifica la vida si ya tienes un set
        antiguo.
      </p>
      <table>
        <thead>
          <tr>
            <th>Dispositivo</th>
            <th>Tamaños aceptados (vertical)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iPhone de 6,9 pulgadas</td>
            <td>
              1260 &times; 2736, 1290 &times; 2796 y 1320 &times; 2868 px
            </td>
          </tr>
          <tr>
            <td>iPad de 13 pulgadas</td>
            <td>2064 &times; 2752 y 2048 &times; 2732 px</td>
          </tr>
        </tbody>
      </table>
      <p>Reglas que se aplican a todas las capturas:</p>
      <ul>
        <li>
          <strong>Sin canal alfa.</strong> Un PNG exportado con transparencia se
          rechaza aunque se vea idéntico.
        </li>
        <li>
          <strong>Entre 1 y 10 capturas por localización.</strong> Cada idioma
          puede tener su propio set.
        </li>
        <li>
          <strong>Las dos primeras hacen el trabajo.</strong> Son las que se ven
          en resultados de búsqueda sin que nadie abra la ficha.
        </li>
      </ul>
      <p>
        Si tienes que generar el set completo para iPhone e iPad, y además para
        Google Play, puedes exportarlo en las medidas exactas con nuestro{" "}
        <a href={`${APP_URL}/editor`}>editor de capturas</a> gratuito.
      </p>

      <h2>Idiomas del escaparate español</h2>
      <p>
        Para España, el idioma por defecto en App Store Connect es{" "}
        <strong>español (España)</strong>, y el escaparate admite además{" "}
        <strong>catalán</strong> e <strong>inglés (Reino Unido)</strong>.
      </p>
      <p>
        Que estén disponibles no significa que debas abrirlos el primer día. Cada
        localización añadida es un conjunto completo de nombre, subtítulo,
        keywords, texto promocional, descripción y capturas que alguien tiene que
        mantener en cada versión. Abrir catalán y dejarlo con el texto de hace
        dos años es peor que no abrirlo.
      </p>

      <h2>El estatus de comerciante del DSA</h2>
      <p>
        Es el requisito que ninguna guía en español cubre y el que puede sacar tu
        app de la tienda en toda la Unión Europea.
      </p>
      <p>
        <strong>Apple.</strong> El estatus de comerciante es obligatorio para las
        apps distribuidas en la UE bajo la Ley de Servicios Digitales. Una vez
        verificado,{" "}
        <strong>
          Apple publica el nombre, la dirección, el teléfono y el correo del
          comerciante en la página de producto del App Store en los 27
          territorios de la Unión Europea
        </strong>
        . Las personas físicas pueden facilitar una dirección o un apartado de
        correos, lo cual importa mucho si eres desarrollador individual y no
        quieres tu domicilio publicado. Según el anuncio de la propia Apple,{" "}
        <strong>
          desde el 17 de febrero de 2025 las apps sin estatus de comerciante
          fueron retiradas del App Store en la Unión Europea
        </strong>{" "}
        hasta que se facilite y verifique dicho estatus. El plazo previo, el 16
        de octubre de 2024, afectaba a apps nuevas y a actualizaciones.
      </p>
      <p>
        <strong>Google.</strong> Conviene no asumir paridad:{" "}
        <strong>
          no hemos localizado una página oficial de ayuda de Google Play que
          documente un requisito equivalente de estatus de comerciante bajo el
          DSA
        </strong>
        . La página de Google sobre condiciones generales de acceso en el EEE se
        refiere al DMA, que es otro reglamento. Lo correcto es afirmar que el
        requisito de Apple está documentado y el de Google no lo está de forma
        oficial.
      </p>
      <p>
        <strong>Contexto legal español.</strong> Con independencia de la política
        de tienda, la LSSI-CE impone deberes de información a las aplicaciones
        que califiquen como servicio de la sociedad de la información:
        denominación social, domicilio, correo de contacto y datos registrales.
        Es derecho español, no norma de Apple, y merece asesoramiento
        profesional antes de publicar.
      </p>

      <h2>La revisión de Apple</h2>
      <p>
        Apple publica que{" "}
        <strong>
          de media el 90 por ciento de los envíos se revisan en menos de 24 horas
        </strong>
        . Es una media sobre el total, no un compromiso con tu envío concreto.
      </p>
      <p>Lo que más alarga el reloj, por orden de frecuencia real:</p>
      <ol>
        <li>
          <strong>Cuenta de prueba ausente o rota.</strong> Si hay login y el
          revisor no puede entrar, rechazo automático. Deja credenciales válidas
          en las notas del revisor y compruébalas el mismo día del envío.
        </li>
        <li>
          <strong>Funciones que requieren hardware o contexto específico</strong>{" "}
          sin explicación ni vídeo de demostración.
        </li>
        <li>
          <strong>Metadatos que prometen más de lo que la app hace</strong>, o
          capturas que muestran pantallas inexistentes.
        </li>
        <li>
          <strong>Compras integradas mal configuradas</strong>, que es el rechazo
          más caro porque obliga a rehacer producto y envío.
        </li>
      </ol>
      <p>
        Truco de calendario: el <strong>texto promocional de 170 caracteres</strong>{" "}
        se puede cambiar sin enviar una versión nueva. Úsalo para anuncios
        temporales en vez de tocar la descripción, que sí obliga a pasar por
        revisión.
      </p>

      <h2>Checklist antes del primer envío</h2>
      <ol>
        <li>Alta en el Apple Developer Program activa y pagada.</li>
        <li>
          Clave de API generada, con <strong>Issuer ID, Key ID y el .p8
          guardado en el gestor de secretos</strong> el mismo día.
        </li>
        <li>
          Nombre y subtítulo de 30 caracteres cada uno, sin repetir palabras
          entre ellos.
        </li>
        <li>
          Keywords contadas <strong>en bytes</strong>, sin espacios tras las
          comas y sin repetir lo que ya está en nombre o subtítulo.
        </li>
        <li>
          Capturas sin canal alfa, en un tamaño aceptado, entre 1 y 10 por
          localización.
        </li>
        <li>
          Localizaciones abiertas solo las que puedas mantener: español (España)
          por defecto, catalán e inglés (Reino Unido) disponibles.
        </li>
        <li>
          <strong>Estatus de comerciante del DSA</strong> facilitado y verificado
          si distribuyes en la UE.
        </li>
        <li>
          Cuenta de prueba funcionando y notas del revisor escritas para alguien
          que no conoce el producto.
        </li>
      </ol>

      <h2>Y después</h2>
      <p>
        Una vez publicada, la ficha deja de ser un formulario y se convierte en
        algo que se mide y se reescribe. Si además publicas en Android, la
        contraparte de esta guía es{" "}
        <Link href="/es/blog/google-play-console-publicar-app">
          Google Play Console paso a paso
        </Link>
        , donde cambian tanto los límites como el proceso de pruebas. Y si estás
        valorando delegar el trabajo de optimización, en{" "}
        <Link href="/es/blog/agencia-aso-precios">
          precios de agencia ASO
        </Link>{" "}
        están las pocas tarifas publicadas en euros y el punto en el que sale a
        cuenta.
      </p>
      <p>
        Nosotros hacemos{" "}
        <Link href="/pricing">AppBoard, gratis en beta</Link>: App Store y Google
        Play en un panel, metadatos por idioma con contador de bytes de verdad
        para el campo de keywords, historial de cambios con diferencias y
        reversión, y exportación de capturas en las medidas exactas.
      </p>

      <h2>Preguntas frecuentes</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Límites de metadatos, tamaños de captura y plazos verificados en la
        documentación de Apple en agosto de 2026. Los tamaños de captura son lo
        que Apple cambia con más frecuencia, así que confírmalos antes de generar
        un set completo si lees esto bastante después.
      </p>
    </ArticleLayout>
  );
}
