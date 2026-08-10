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

const SLUG = "agencia-aso-precios";
const EN_SLUG = "app-store-optimization-services";
const article = BLOG_ARTICLES_ES.find((entry) => entry.slug === SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "Cuánto cuesta una agencia ASO en España: las pocas tarifas publicadas en euros, el coste real de hacerlo tú, cuándo compensa contratar y las señales de alarma al elegir.",
  languages: buildAlternates(`/blog/${EN_SLUG}`),
  locale: "es_ES",
  path: `/es/blog/${SLUG}`,
  title: "Agencia ASO: precios reales y cuándo merece la pena (2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "Casi ninguna agencia española publica tarifas de ASO. PICKASO, Idento, AgenciaSEO.eu, Comunicare y Actualízatec remiten a un presupuesto a medida o a una consultoría gratuita. Las únicas cifras públicas que hemos encontrado son la tarifa de Metacom (350,00 EUR por 20 horas de ASO) y los rangos que publica el directorio Sortlist para España.",
    question: "¿Cuánto cuesta una agencia ASO en España?",
  },
  {
    answer:
      "Metacom, en Barcelona, publica 350,00 EUR por 20 horas de ASO, lo que sale a 17,50 EUR la hora. Ese precio por hora es demasiado bajo para trabajo estratégico sénior e indica más bien ejecución junior o administrativa. Puede tener sentido para tareas concretas y acotadas, pero no confundas eso con una estrategia de posicionamiento.",
    question: "¿Es buena señal una tarifa de 17,50 EUR la hora?",
  },
  {
    answer:
      "El directorio Sortlist publica para España rangos de 2.000 a 5.000 EUR para startups y empresas pequeñas, de 5.000 a 20.000 EUR para empresas medianas y desde 20.000 EUR para grandes. Los presupuestos mínimos por proyecto declarados por cada agencia van de 150 a 3.000 EUR. Son mínimos autodeclarados que cubren todos los servicios, no cuotas específicas de ASO.",
    question: "¿Qué rangos publica el directorio Sortlist para España?",
  },
  {
    answer:
      "No. Comprar instalaciones, valoraciones o reseñas incumple las directrices de App Store y de Google Play, y las consecuencias llegan hasta la retirada de la app y el cierre de la cuenta de desarrollador. Una agencia española bien posicionada, Comunicare, anuncia abiertamente descargas incentivadas entre sus servicios. Es motivo suficiente para descartarla.",
    question: "¿Son legítimas las descargas incentivadas?",
  },
  {
    answer:
      "Una puesta a punto inicial seria en las dos tiendas ronda las 20 a 30 horas, y el mantenimiento entre 4 y 8 horas al mes. Con una tarifa interna de 40 EUR la hora eso son unos 800 a 1.200 EUR de arranque y entre 160 y 320 EUR mensuales de coste de oportunidad. Compara esa cifra con el presupuesto de la agencia antes de decidir.",
    question: "¿Cuántas horas cuesta hacer el ASO por mi cuenta?",
  },
  {
    answer:
      "Pregunta qué entregables concretos incluye cada mes, quién ejecuta el trabajo y con qué antigüedad, si utiliza los tests A/B nativos de las tiendas, cómo mide el resultado más allá de las posiciones, si el trabajo queda en tu cuenta al terminar el contrato y si en algún momento recurre a instalaciones incentivadas. Las respuestas vagas a la primera y a la última son suficientes para descartar.",
    question: "¿Qué preguntas debo hacer antes de firmar con una agencia ASO?",
  },
  {
    answer:
      "Como referencia internacional, claramente no española, AppAgent publica entre 5.000 y 25.000 USD al mes. Sirve para situar el orden de magnitud del trabajo sénior en mercados grandes, pero no es un precio comparable con el mercado español ni debe usarse como referencia de negociación en España.",
    question: "¿Cuánto cobran las agencias ASO internacionales?",
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
        Si has llegado aquí buscando cuánto cuesta una agencia ASO en España, el
        primer hallazgo es que{" "}
        <strong>casi ninguna publica precios</strong>. Revisamos las agencias
        españolas mejor posicionadas para esta consulta y el patrón se repite:
        formulario de contacto, &laquo;solicita presupuesto&raquo; o consultoría
        gratuita. Ni una tarifa.
      </p>
      <table>
        <thead>
          <tr>
            <th>Agencia</th>
            <th>Qué publica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PICKASO (Barcelona)</td>
            <td>Sin precios. Solicitar presupuesto</td>
          </tr>
          <tr>
            <td>Idento</td>
            <td>Sin precios. Solicitar presupuesto</td>
          </tr>
          <tr>
            <td>AgenciaSEO.eu</td>
            <td>Sin precios. Solicitar presupuesto</td>
          </tr>
          <tr>
            <td>Comunicare</td>
            <td>Sin precios. Consultoría gratuita</td>
          </tr>
          <tr>
            <td>Actualízatec</td>
            <td>Sin precios. Solicitar presupuesto</td>
          </tr>
        </tbody>
      </table>
      <p>
        PICKASO, por cierto, es la primera agencia de ASO de España, fundada en
        Barcelona en 2013, así que tampoco es cuestión de veteranía: es una
        norma del sector.
      </p>
      <p>
        Este artículo recoge las <strong>únicas cifras públicas</strong> que
        hemos podido verificar, cada una con su fuente, y las contrasta con lo
        que cuesta hacerlo internamente. Nada de rangos inventados.
      </p>

      <h2>Las cifras que sí están publicadas</h2>

      <h3>Metacom (Barcelona): 350,00 EUR por 20 horas</h3>
      <p>
        Metacom publica un cuadro de tarifas con una línea de ASO:{" "}
        <strong>350,00 EUR por 20 horas</strong>. Es la cifra española más
        concreta que existe sobre este servicio, y conviene mirarla con calma
        porque lo que dice no es solo el precio.
      </p>
      <p>
        Sale a <strong>17,50 EUR la hora</strong>. Ese importe está muy por
        debajo de lo que cuesta una hora de estrategia sénior en España, así que
        lo razonable es interpretarlo como{" "}
        <strong>ejecución junior o trabajo administrativo</strong>, no como
        consultoría de posicionamiento. Puede encajar perfectamente para tareas
        acotadas (rellenar fichas, preparar sets de capturas, subir metadatos
        traducidos), pero no esperes de ahí una estrategia de keywords ni un
        programa de tests.
      </p>
      <p>El contraste dentro de su propio cuadro de tarifas es revelador:</p>
      <table>
        <thead>
          <tr>
            <th>Servicio (Metacom)</th>
            <th>Precio publicado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ASO</td>
            <td>350,00 EUR por 20 horas</td>
          </tr>
          <tr>
            <td>Táctica SEO</td>
            <td>675 a 1.650 EUR</td>
          </tr>
          <tr>
            <td>Consultoría SEO</td>
            <td>990 a 2.500 EUR</td>
          </tr>
        </tbody>
      </table>
      <p>
        La misma casa cobra por consultoría SEO entre tres y siete veces más que
        por ASO. Eso ilustra bien cómo está valorado el ASO en el mercado
        español: como una tarea de ejecución, no como una disciplina estratégica.
        Que estés de acuerdo o no con esa valoración es otra cuestión; lo
        relevante es que condiciona lo que recibirás por ese precio.
      </p>

      <h3>Directorio Sortlist: rangos por tamaño de empresa</h3>
      <p>
        Sortlist publica para el mercado español unos rangos de inversión por
        tamaño de cliente:
      </p>
      <table>
        <thead>
          <tr>
            <th>Tamaño del cliente</th>
            <th>Rango publicado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Startups y empresas pequeñas</td>
            <td>2.000 a 5.000 EUR</td>
          </tr>
          <tr>
            <td>Empresas medianas</td>
            <td>5.000 a 20.000 EUR</td>
          </tr>
          <tr>
            <td>Grandes empresas</td>
            <td>Desde 20.000 EUR</td>
          </tr>
        </tbody>
      </table>
      <p>
        Además, los presupuestos mínimos por proyecto que declara cada agencia en
        ese directorio van de <strong>150 a 3.000 EUR</strong>.
      </p>
      <p>
        Con una advertencia importante:{" "}
        <strong>
          son mínimos autodeclarados que cubren todos los servicios de la
          agencia, no cuotas específicas de ASO
        </strong>
        . Sirven para calibrar el orden de magnitud de lo que te van a pedir,
        no para presupuestar un contrato de optimización de fichas.
      </p>

      <h3>Referencia internacional, para contraste</h3>
      <p>
        Fuera de España,{" "}
        <strong>AppAgent publica entre 5.000 y 25.000 USD al mes</strong>. Lo
        incluimos solo como contraste, claramente etiquetado como no español:
        indica lo que cuesta un equipo sénior dedicado en mercados grandes. No es
        un precio comparable con el mercado español ni una referencia útil para
        negociar aquí.
      </p>

      <h2>Lo que cuesta hacerlo tú</h2>
      <p>
        Cualquier presupuesto de agencia solo tiene sentido comparado con la
        alternativa. Estas son las horas reales de trabajo, contadas sobre las
        dos tiendas.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Horas de arranque</th>
            <th>Horas al mes después</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Investigación de keywords en español</td>
            <td>6 a 8</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Reescritura de nombre, subtítulo y descripciones</td>
            <td>4 a 6</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Set de capturas para ambas tiendas</td>
            <td>6 a 10</td>
            <td>1 a 2</td>
          </tr>
          <tr>
            <td>Montaje y lectura de un test A/B nativo</td>
            <td>2 a 3</td>
            <td>1 a 2</td>
          </tr>
          <tr>
            <td>Respuesta a reseñas y seguimiento</td>
            <td>2 a 3</td>
            <td>1 a 2</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>20 a 30</strong>
            </td>
            <td>
              <strong>4 a 8</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Traducido a dinero con una tarifa interna de referencia de 40 EUR la
        hora: el arranque son{" "}
        <strong>unos 800 a 1.200 EUR de coste de oportunidad</strong> y el
        mantenimiento <strong>entre 160 y 320 EUR al mes</strong>. Súmale la
        herramienta si contratas una: desde 9,99 USD al mes en la gama de
        entrada, hasta 79 USD o 69 EUR al mes en las profesionales.
      </p>
      <p>
        El punto de equilibrio queda claro: una agencia que te pida 350 EUR por
        20 horas está por debajo de tu propio coste interno, lo que confirma que
        es ejecución y no estrategia. Y una agencia que te pida 2.000 EUR al mes
        tiene que aportar algo que tú no puedas producir en 8 horas mensuales, o
        no sale a cuenta.
      </p>

      <h2>Cuándo contratar de verdad merece la pena</h2>
      <ul>
        <li>
          <strong>Cuando entras en muchos mercados a la vez.</strong> Diez
          idiomas con keywords propias, y no traducidas, es un volumen de trabajo
          que no absorbe una persona.
        </li>
        <li>
          <strong>Cuando ya hay presupuesto de adquisición pagada.</strong> Con
          campañas activas, una mejora de conversión de la ficha se paga sola en
          semanas.
        </li>
        <li>
          <strong>Cuando nadie internamente sabe leer un test.</strong> Un
          programa de experimentos mal interpretado es peor que no tenerlo.
        </li>
      </ul>
      <p>Y cuándo no:</p>
      <ul>
        <li>
          <strong>Cuando la app aún no tiene encaje de producto.</strong> El ASO
          amplifica lo que hay; si la retención es mala, amplifica el problema.
        </li>
        <li>
          <strong>Cuando solo publicas en España.</strong> Un mercado, un idioma:
          es perfectamente abordable en las horas de la tabla anterior.
        </li>
        <li>
          <strong>Cuando lo que ofrecen es volumen de instalaciones.</strong> Eso
          no es ASO.
        </li>
      </ul>

      <h2>Ética: el asunto de las descargas incentivadas</h2>
      <p>
        Hay que decirlo con nombre y apellidos porque afecta a quien contrate sin
        leer la letra pequeña:{" "}
        <strong>
          Comunicare, una de las agencias españolas mejor posicionadas para esta
          consulta, anuncia abiertamente &laquo;descargas incentivadas&raquo;
          entre sus servicios
        </strong>
        .
      </p>
      <p>
        Comprar instalaciones, valoraciones o reseñas{" "}
        <strong>incumple las directrices de App Store y de Google Play</strong>.
        Las consecuencias documentadas van desde la retirada de la app hasta el
        cierre de la cuenta de desarrollador, y las apelaciones rara vez
        prosperan. El riesgo no lo asume la agencia: lo asumes tú, que eres quien
        tiene la cuenta.
      </p>
      <p>
        Hay un matiz técnico que conviene entender. Un pico de instalaciones
        compradas puede mover posiciones a corto plazo, pero llega acompañado de
        usuarios que no abren la app, así que{" "}
        <strong>hunde la retención y la conversión posterior</strong>, que son
        justo las señales que las tiendas usan para posicionar. Es decir, aunque
        no te expulsen, el efecto se revierte solo.
      </p>

      <h2>Preguntas que hacer antes de firmar</h2>
      <ol>
        <li>
          <strong>¿Qué entregables concretos incluye cada mes?</strong> Si la
          respuesta es &laquo;optimización continua&raquo;, pide la lista. Un
          contrato serio se describe en entregables: número de idiomas, ciclos de
          keywords, tests lanzados, sets de capturas.
        </li>
        <li>
          <strong>¿Quién ejecuta el trabajo y con qué antigüedad?</strong> A
          17,50 EUR la hora no lo hace un sénior, y eso está bien si lo sabes de
          antemano.
        </li>
        <li>
          <strong>
            ¿Usáis Product Page Optimization y los experimentos de ficha de Play?
          </strong>{" "}
          Son gratuitos. Una agencia que no los usa está opinando en vez de
          medir.
        </li>
        <li>
          <strong>¿Cómo medís el resultado más allá de las posiciones?</strong>{" "}
          Las posiciones sin conversión ni retención no dicen nada.
        </li>
        <li>
          <strong>¿El trabajo queda en mi cuenta al terminar?</strong> Metadatos,
          keywords, capturas y aprendizajes deben quedarse contigo, no en un
          panel de la agencia al que pierdes acceso.
        </li>
        <li>
          <strong>¿Recurrís en algún caso a instalaciones incentivadas?</strong>{" "}
          Cualquier respuesta que no sea un no rotundo es motivo para levantarse
          de la mesa.
        </li>
        <li>
          <strong>¿Cuál es la permanencia mínima?</strong> El ASO necesita un
          trimestre para evaluarse, pero un contrato de doce meses sin salida no
          es una necesidad técnica, es una necesidad comercial de la agencia.
        </li>
      </ol>

      <h2>Señales de alarma</h2>
      <ul>
        <li>
          <strong>Garantizar el primer puesto.</strong> Nadie controla el
          algoritmo de las tiendas.
        </li>
        <li>
          <strong>Prometer resultados en dos semanas.</strong> El plazo realista
          para ver movimiento es de dos a cuatro semanas solo para las
          posiciones, y un trimestre para evaluar el retorno.
        </li>
        <li>
          <strong>Vender volumen de descargas como si fuera ASO.</strong> Son
          cosas distintas y una de ellas puede costarte la cuenta.
        </li>
        <li>
          <strong>Presentar el mismo texto para las dos tiendas.</strong>{" "}
          Delata que no entienden que Google Play no tiene campo de keywords y
          App Store sí.
        </li>
        <li>
          <strong>Citar herramientas que ya no existen.</strong> Si en la
          propuesta aparece App Annie, no han actualizado su método desde 2024.
        </li>
      </ul>

      <h2>La vía intermedia</h2>
      <p>
        Entre pagar 2.000 EUR al mes y no hacer nada hay un camino que funciona
        para la mayoría de equipos pequeños: hacerlo tú con el método correcto y
        contratar apoyo puntual solo para lo que no puedas cubrir, como la
        localización a mercados cuyo idioma nadie del equipo domina.
      </p>
      <p>
        El método está detallado en la guía de{" "}
        <Link href="/es/blog/posicionamiento-aso">posicionamiento ASO</Link>, con
        los límites reales de cada campo y los tests A/B gratuitos de las
        tiendas. Si además estás preparando el lanzamiento, las dos guías de
        consola son{" "}
        <Link href="/es/blog/google-play-console-publicar-app">
          Google Play Console
        </Link>{" "}
        y{" "}
        <Link href="/es/blog/app-store-connect-publicar-app">
          App Store Connect
        </Link>
        .
      </p>
      <p>
        Para el trabajo del día a día hacemos{" "}
        <Link href="/pricing">AppBoard, gratis en beta</Link>: las dos tiendas en
        un panel, metadatos por idioma, historial de cambios con diferencias y
        reversión, y un{" "}
        <a href={`${APP_URL}/editor`}>editor de capturas</a> que exporta en las
        medidas exactas de cada tienda. La mayor parte de lo que factura una
        agencia por horas es exactamente ese trabajo repetitivo.
      </p>

      <h2>Preguntas frecuentes</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Precios y páginas de agencias consultados en agosto de 2026. Las tarifas
        que no están publicadas por la propia agencia no aparecen en este
        artículo: si necesitas una cifra para presupuestar, pide dos o tres
        propuestas y compáralas con el coste interno de la tabla de horas.
      </p>
    </ArticleLayout>
  );
}
