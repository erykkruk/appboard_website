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

const SLUG = "google-play-console-publicar-app";
const EN_SLUG = "app-store-localization";
const article = BLOG_ARTICLES_ES.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Guía de Google Play Console en 2026: los 25 USD de alta, cuenta personal u organización, D-U-N-S, la regla de 12 testers, límites reales y requisitos gráficos.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "es_ES",
  path: `/es/blog/${SLUG}`,
  title: "Google Play Console: cómo publicar una app (guía 2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "El alta en Google Play Console cuesta 25 USD y es un pago único, no una cuota anual. Google publica el importe en dólares; el cargo que verás en tu banco será el equivalente en euros del día. Después de ese pago no hay renovación: la cuenta sigue activa mientras cumplas las políticas.",
    question: "¿Cuánto cuesta la cuenta de Google Play Console?",
  },
  {
    answer:
      "El título de la app en Google Play tiene 30 caracteres desde el 29 de septiembre de 2021. Varias páginas españolas bien posicionadas siguen indicando 50 caracteres, entre ellas yeeply.com, y ese dato es incorrecto. La descripción breve tiene 80 caracteres y la descripción completa 4000.",
    question: "¿Cuántos caracteres admite el título en Google Play?",
  },
  {
    answer:
      "Las cuentas personales creadas después del 13 de noviembre de 2023 deben ejecutar una prueba cerrada con al menos 12 testers que permanezcan inscritos durante 14 días continuos antes de poder solicitar el acceso a producción. El requisito eran 20 testers y Google lo redujo a 12 el 11 de diciembre de 2024.",
    question: "¿Qué es la regla de los 12 testers durante 14 días?",
  },
  {
    answer:
      "Una cuenta de organización requiere un número D-U-N-S válido asociado a la empresa, y Google verifica que los datos coincidan con el registro de Dun and Bradstreet. La cuenta personal no lo necesita, pero sí verificación de identidad. Cambiar de tipo de cuenta después no es un simple ajuste, así que conviene decidirlo antes de pagar.",
    question: "¿Necesito un D-U-N-S para publicar en Google Play?",
  },
  {
    answer:
      "El icono es un PNG de 32 bits con canal alfa de 512 por 512 píxeles y un máximo de 1024 KB. El gráfico de funciones es de 1024 por 500 píxeles, en JPEG o PNG de 24 bits, sin canal alfa. Las capturas van de 320 a 3840 píxeles y el lado largo no puede superar el doble del lado corto.",
    question: "¿Qué medidas tienen el icono y el gráfico de funciones?",
  },
  {
    answer:
      "El canal interno admite hasta 100 testers. La prueba cerrada permite hasta 200 listas de correo con un máximo de 2000 usuarios por lista. La prueba abierta puede ser ilimitada o fijar un mínimo de 1000 participantes. Producción es la publicación pública.",
    question: "¿Cuántos testers admite cada canal de prueba?",
  },
  {
    answer:
      "Apple sí documenta el estatus de comerciante del DSA y publica nombre, dirección, teléfono y correo del desarrollador en la ficha del App Store en los 27 territorios de la Unión Europea. En el caso de Google Play no encontramos una página oficial de ayuda que documente un requisito equivalente de estatus de comerciante bajo el DSA, así que no conviene dar por hecha la paridad entre ambas tiendas.",
    question: "¿Google Play exige el estatus de comerciante del DSA?",
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
        Publicar en Google Play en 2026 ya no es rellenar un formulario y pulsar
        un botón. Entre el alta de la cuenta y el primer usuario que se descarga
        tu app hay tres filtros que detienen a la mayoría de los desarrolladores
        que llegan por primera vez:{" "}
        <strong>
          el tipo de cuenta que eliges, la prueba cerrada obligatoria de 12
          testers durante 14 días continuos y unos requisitos gráficos que
          Google rechaza sin margen
        </strong>
        . Esta guía va directa a esos tres puntos, con las cifras verificadas en
        la documentación de Google.
      </p>
      <p>
        Aviso previo sobre las fuentes en español: varias de las páginas mejor
        posicionadas para esta consulta están desactualizadas. La más visible
        indica que el nombre de la app admite 50 caracteres, y{" "}
        <strong>el límite es 30 desde el 29 de septiembre de 2021</strong>. Si
        escribes tu título contra un límite que no existe, Google Play Console
        te lo cortará al guardar.
      </p>

      <h2>Coste de la cuenta y qué incluye</h2>
      <p>
        La cuota de registro de desarrollador de Google Play es de{" "}
        <strong>25 USD, en un pago único</strong>. No es anual, a diferencia del
        programa de Apple. Google publica el importe en dólares y el cobro en
        euros aparece en el momento del pago según el cambio del día, así que no
        esperes un precio oficial en euros publicado por Google.
      </p>
      <p>
        Ese pago te da acceso a Google Play Console, a la publicación ilimitada
        de aplicaciones bajo esa cuenta y a las herramientas de distribución y
        prueba. Lo que no te da es exención de la verificación: el alta y el
        pago son el principio del proceso, no el final.
      </p>

      <h2>Cuenta personal o cuenta de organización</h2>
      <p>
        Es la primera decisión y la más difícil de deshacer. Cambiar el tipo de
        cuenta después del alta no es un ajuste de perfil, así que merece la
        pena pensarlo cinco minutos antes de pagar.
      </p>
      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Cuenta personal</th>
            <th>Cuenta de organización</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>D-U-N-S</td>
            <td>No se pide</td>
            <td>Obligatorio y verificado</td>
          </tr>
          <tr>
            <td>Verificación</td>
            <td>Identidad de la persona</td>
            <td>Datos de la empresa contra Dun and Bradstreet</td>
          </tr>
          <tr>
            <td>Nombre público</td>
            <td>Tu nombre o un alias de desarrollador</td>
            <td>La denominación de la empresa</td>
          </tr>
          <tr>
            <td>Prueba cerrada obligatoria</td>
            <td>Sí, si la cuenta se creó tras el 13/11/2023</td>
            <td>No documentado por Google (ver aviso más abajo)</td>
          </tr>
        </tbody>
      </table>
      <p>
        El <strong>D-U-N-S</strong> es un identificador de nueve dígitos que
        emite Dun and Bradstreet para empresas. Solicitarlo es gratuito, pero
        tarda: cuenta con días, no con horas, y en algunos casos con semanas si
        los datos de tu sociedad no están ya en su base. Si vas a publicar como
        empresa, pide el D-U-N-S antes de empezar cualquier otra cosa, porque es
        el paso con el plazo más largo y menos controlable de todo el proceso.
      </p>

      <h2>La regla de los 12 testers durante 14 días</h2>
      <p>
        Este es el requisito que más sorprende a quien publica su primera app en
        2026 y el que casi ninguna guía en español explica bien.
      </p>
      <p>
        Si tu <strong>cuenta personal</strong> se creó{" "}
        <strong>después del 13 de noviembre de 2023</strong>, antes de poder
        solicitar el acceso a producción tienes que ejecutar una{" "}
        <strong>prueba cerrada con al menos 12 testers que permanezcan
        inscritos durante 14 días continuos</strong>. No son 12 instalaciones
        sueltas ni 14 días sumados a trozos: la cuenta corre mientras los
        testers siguen dentro, y si bajas del umbral el contador se resiente.
      </p>
      <p>
        Un detalle que casi nadie menciona:{" "}
        <strong>
          el requisito original eran 20 testers y Google lo redujo a 12 el 11 de
          diciembre de 2024
        </strong>
        . Si encuentras una guía que sigue hablando de 20, está escrita antes de
        esa fecha y probablemente el resto de sus datos también.
      </p>
      <p>
        <strong>Aviso honesto sobre las cuentas de organización.</strong> La
        página oficial de Google describe este requisito para{" "}
        <em>cuentas personales</em>, pero{" "}
        <strong>
          no afirma explícitamente que las cuentas de organización estén exentas
        </strong>
        . Esa exención la dan por hecha fuentes de terceros, no Google. Si vas a
        planificar un lanzamiento corporativo asumiendo que te la saltas,
        confirma el estado de tu cuenta concreta en Play Console antes de
        comprometer una fecha con nadie.
      </p>
      <p>
        Consecuencia práctica de calendario: si eres desarrollador individual,{" "}
        <strong>añade dos semanas largas a tu plan</strong>. Recluta a los
        testers antes de tener la app terminada, porque reunir 12 personas que
        acepten la invitación y no se den de baja cuesta más que programar la
        pantalla de ajustes.
      </p>

      <h2>Canales de prueba y sus límites</h2>
      <table>
        <thead>
          <tr>
            <th>Canal</th>
            <th>Límite de testers</th>
            <th>Para qué sirve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Interno</td>
            <td>Hasta 100 testers</td>
            <td>Builds rápidas para el equipo, sin revisión completa</td>
          </tr>
          <tr>
            <td>Cerrado</td>
            <td>Hasta 200 listas de 2000 usuarios cada una</td>
            <td>La prueba que exige la regla de los 12 testers</td>
          </tr>
          <tr>
            <td>Abierto</td>
            <td>Ilimitado, o con un mínimo de 1000 participantes</td>
            <td>Beta pública visible en la ficha de Play</td>
          </tr>
          <tr>
            <td>Producción</td>
            <td>Todos los usuarios</td>
            <td>Publicación definitiva</td>
          </tr>
        </tbody>
      </table>
      <p>
        El canal interno es el único donde la iteración es realmente rápida. Usa
        interno para el equipo, cerrado para cumplir el requisito y validar con
        gente externa, y abierto solo si de verdad quieres una beta visible.
      </p>

      <h2>Límites de texto en la ficha</h2>
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
            <td>Desde el 29/09/2021. No son 50, aunque lo leas por ahí</td>
          </tr>
          <tr>
            <td>Descripción breve</td>
            <td>80 caracteres</td>
            <td>Es el texto que más se lee tras el título</td>
          </tr>
          <tr>
            <td>Descripción completa</td>
            <td>4000 caracteres</td>
            <td>Google Play no tiene campo oculto de keywords</td>
          </tr>
        </tbody>
      </table>
      <p>
        La ausencia de un campo de keywords cambia toda la estrategia: en Google
        Play, el buscador de la tienda extrae los términos del título, de la
        descripción breve y de la descripción completa. Es decir, la descripción
        tiene que leerse bien para una persona y contener las frases que te
        interesan al mismo tiempo. Copiar el texto del App Store tal cual es un
        error estructural, no solo estilístico. Lo desarrollamos en la guía de{" "}
        <Link href="/es/blog/posicionamiento-aso">posicionamiento ASO</Link>.
      </p>

      <h2>Requisitos gráficos, campo por campo</h2>
      <table>
        <thead>
          <tr>
            <th>Recurso</th>
            <th>Especificación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Icono</td>
            <td>
              512 &times; 512 px, PNG de 32 bits <strong>con</strong> canal
              alfa, máximo 1024 KB
            </td>
          </tr>
          <tr>
            <td>Gráfico de funciones</td>
            <td>
              1024 &times; 500 px, JPEG o PNG de 24 bits{" "}
              <strong>sin</strong> canal alfa
            </td>
          </tr>
          <tr>
            <td>Capturas de pantalla</td>
            <td>
              Entre 320 y 3840 px, con el lado largo nunca superior al doble del
              lado corto
            </td>
          </tr>
          <tr>
            <td>Cantidad de capturas</td>
            <td>Mínimo 2 por tipo de dispositivo, máximo 8 por tipo</td>
          </tr>
          <tr>
            <td>Pantallas grandes</td>
            <td>Mínimo 4 capturas</td>
          </tr>
        </tbody>
      </table>
      <p>
        Dos detalles que provocan rechazos evitables. El primero:{" "}
        <strong>el icono lleva canal alfa y el gráfico de funciones no</strong>.
        Exportar los dos con el mismo ajuste falla siempre en uno de ellos. El
        segundo: la regla del doble. Una captura de 1080 &times; 2400 pasa
        (2400 es menos del doble de 1080), pero un recorte panorámico muy
        alargado no.
      </p>
      <p>
        Y un dato que conviene tener claro porque muchas plantillas de internet
        lo inventan:{" "}
        <strong>
          Google no publica medidas en píxeles distintas para tablets de 7 y de
          10 pulgadas
        </strong>
        . Lo que publica es el rango de tamaño y la proporción máxima. Si una
        guía te da una cifra exacta para tablet de 7 pulgadas, está rellenando
        huecos.
      </p>
      <p>
        Si vas a preparar el set completo para los dos sistemas, puedes exportar
        las medidas exactas con nuestro{" "}
        <a href={`${APP_URL}/editor`}>editor de capturas</a>, que es gratuito.
      </p>

      <h2>El estatus de comerciante del DSA</h2>
      <p>
        Ninguna de las páginas españolas mejor posicionadas para esta consulta
        cubre este punto, ni siquiera la que se titula &laquo;requisitos en
        España&raquo;. Y afecta a cualquiera que distribuya en la Unión Europea.
      </p>
      <p>
        <strong>Apple.</strong> El estatus de comerciante es obligatorio para
        las apps distribuidas en la Unión Europea bajo la Ley de Servicios
        Digitales. Una vez verificado,{" "}
        <strong>
          Apple publica el nombre, la dirección, el teléfono y el correo del
          comerciante en la ficha del App Store en los 27 territorios de la UE
        </strong>
        . Las personas físicas pueden facilitar una dirección o un apartado de
        correos. Según el propio anuncio de Apple,{" "}
        <strong>
          desde el 17 de febrero de 2025 las apps sin estatus de comerciante
          fueron retiradas del App Store en la Unión Europea
        </strong>{" "}
        hasta que se facilite y verifique dicho estatus. El plazo anterior, el
        16 de octubre de 2024, se aplicaba a apps nuevas y actualizaciones.
      </p>
      <p>
        <strong>Google.</strong> Aquí toca ser preciso en lugar de asumir
        simetría:{" "}
        <strong>
          no hemos encontrado una página oficial de ayuda de Google Play que
          documente un requisito equivalente de estatus de comerciante bajo el
          DSA
        </strong>
        . La página de Google sobre condiciones generales de acceso en el EEE
        trata sobre el DMA, que es un reglamento distinto. Así que lo correcto
        es decir que el requisito de Apple está documentado y el equivalente de
        Google no lo está oficialmente, en vez de dar por hecho que ambas
        tiendas piden lo mismo.
      </p>
      <p>
        <strong>Contexto legal español.</strong> Al margen de la política de las
        tiendas, la LSSI-CE impone deberes de información a las apps que
        califiquen como servicio de la sociedad de la información: denominación
        social, domicilio, correo de contacto y datos registrales. Esto es
        derecho español, no política de tienda, y conviene consultarlo con un
        profesional antes de decidir qué publicas y dónde.
      </p>

      <h2>Checklist antes de pulsar publicar</h2>
      <ol>
        <li>
          <strong>Tipo de cuenta decidido</strong> y, si es organización,
          D-U-N-S solicitado con semanas de antelación.
        </li>
        <li>
          <strong>Prueba cerrada planificada</strong>: 12 testers reclutados y
          avisados de que tienen que permanecer 14 días.
        </li>
        <li>
          <strong>Título de 30 caracteres</strong>, comprobado con un contador
          real y no escrito contra el límite de 50 que circula por ahí.
        </li>
        <li>
          <strong>Descripción breve de 80</strong> que funcione sola, porque es
          lo primero que se lee en el listado.
        </li>
        <li>
          <strong>Icono con alfa, gráfico de funciones sin alfa</strong>, y
          capturas dentro de la regla del doble.
        </li>
        <li>
          <strong>Mínimo 2 capturas por tipo de dispositivo</strong> y 4 si
          declaras compatibilidad con pantallas grandes.
        </li>
        <li>
          <strong>Política de privacidad publicada</strong> en una URL accesible
          y el formulario de seguridad de los datos completado con honestidad.
        </li>
        <li>
          <strong>Situación legal revisada</strong>: DSA en el lado de Apple si
          también publicas ahí, y deberes de información de la LSSI-CE.
        </li>
      </ol>

      <h2>Los cuatro errores que más retrasan un lanzamiento</h2>
      <ul>
        <li>
          <strong>Pedir el D-U-N-S tarde.</strong> Es el único paso cuyo plazo
          no controlas.
        </li>
        <li>
          <strong>Descubrir la regla de los 12 testers el día del
          lanzamiento.</strong> Son dos semanas que no se pueden comprimir.
        </li>
        <li>
          <strong>Escribir el título contra un límite inexistente.</strong> A
          los 30 caracteres se corta.
        </li>
        <li>
          <strong>Exportar todos los gráficos con el mismo ajuste de alfa.</strong>{" "}
          Icono y gráfico de funciones piden lo contrario.
        </li>
      </ul>

      <h2>Después de publicar</h2>
      <p>
        Publicar es el primer día, no el último. A partir de ahí la ficha es un
        activo que se edita, se mide y se vuelve a editar, y el trabajo se
        multiplica en cuanto añades idiomas. Si estás valorando llevarlo tú o
        contratarlo, en la guía de{" "}
        <Link href="/es/blog/agencia-aso-precios">
          precios de agencia ASO
        </Link>{" "}
        desglosamos las pocas tarifas publicadas en euros y el punto de
        equilibrio frente a hacerlo internamente. Y si la app también sale en el
        App Store, la contraparte de esta guía es{" "}
        <Link href="/es/blog/app-store-connect-publicar-app">
          App Store Connect paso a paso
        </Link>
        .
      </p>
      <p>
        Nosotros construimos{" "}
        <Link href="/pricing">AppBoard, gratis en beta</Link>: las dos tiendas en
        un solo panel, metadatos por idioma, historial de cambios con diferencias
        y opción de revertir, y exportación de capturas en las medidas exactas de
        cada tienda.
      </p>

      <h2>Preguntas frecuentes</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Cifras, límites y requisitos verificados en la documentación de Google y
        de Apple en agosto de 2026. Si lees esto mucho después, comprueba el
        límite de caracteres del título y los requisitos de la prueba cerrada
        antes de fijar una fecha de lanzamiento: son las dos cosas que Google
        cambia con más frecuencia.
      </p>
    </ArticleLayout>
  );
}
