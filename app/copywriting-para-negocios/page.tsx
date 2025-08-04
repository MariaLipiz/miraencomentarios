import Link from 'next/link';

export const metadata = {
  title: 'Copywriting para negocios sin(verguenza)',
  description:
    'Redactaré anuncios y páginas de ventas que te hagan destacar frente a tu competencia para vender más, vender a precios más altos y a clientes mejores.',
    keywords: [
      'Copywriting',
      'Copywriter',
      'Como vender por internet',
      'Copywriting para negocios',
      'Copywriting para empresas',
      'Como redactar una página de ventas',
      'Escritura persuasiva',
      'Redacción publicitaria',
      'Newsletter diaria',
    ],
    authors: [{ name: 'Maria Lipiz', url: 'https://www.miraencomentarios.com' }],
    robots: 'index, follow',
  openGraph: {
    title: 'Copywriting para negocios sin(verguenza)',
    description:
      'Redactaré anuncios y páginas de ventas que te hagan destacar frente a tu competencia para vender más, vender a precios más altos y a clientes mejores.',
    url: 'https://www.miraencomentarios.com/servicio',
    siteName: 'Maria Lipiz Copywriter',
    images: [
      {
        url: 'https://miraencomentarios.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maria Lipiz | Copywriter',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

export default function Servicio() {
  return (
    <main className="flex flex-col  px-6 sm:px-12 lg:px-52 py-12 gap-10 text-justify">
      <h1 className="text-5xl sm:text-6xl font-semibold mb-6 text-center">
        Copywriting para negocios sin(verguenza)
      </h1>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-red-600 text-center">
        ATENCIÓN: LAS PLAZAS SON LIMITADAS Y EL AÑO QUE VIENE COSTARÁ <strong>9680€ </strong>
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center my-4">
        Este servicio es simple. Redactaré anuncios y páginas de ventas que te hagan 
        destacar frente a tu competencia para vender más, vender a precios más altos y a clientes
        mejores.
      </h2>
      <p className="text-lg sm:text-xl font-semibold mb-6 text-center">
        El copywriting es una disciplina altamente rentable y aplicable a cualquier tipo de negocio
        con la que se puede hacer mucho dinero y aquí te voy a mostrar como hacer eso, aunque
        es muy probable que no vayas a ser mi cliente.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        ¿Por qué?
      </p>
      
      <p className="text-lg sm:text-xl font-normal">
        <strong>Este servicio no es barato</strong>, si quieres que te ayude, que redacte tus textos,
        tu página de ventas y tus anuncios, el precio no es para todo el mundo.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Igualmente, <strong>te voy a contrar algo increible</strong>, sobre cual es uno de los mejores lugares para probar 
        titulares y textos de venta y que puede mejorar extraodinariamente la redacción en tu negocio, y seguido,
        tus ingresos.

      </p>
      <p className="text-lg sm:text-xl font-normal">
        Primero te cuento.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        A todas las personas que contratan mi servicio, una vez finalizado, <strong> les regalo una formación escrita </strong> 
        donde les explico con detalle el proceso que he seguido para mejorar todos sus textos para que ellos 
        mismos puedan seguir aplicandolo a su negocio y a otros negocios distintos sin mi ayuda. 
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Esta es una formación de alto nivel que no puedes conseguir en ningún otro lugar.  
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center my-4">
        Y si te interesa, puedo redactar tus textos para sacarle todo el jugo a tu negocio y despues
        enseñarte como lo he hecho. 
      </h2>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        <strong className="text-red">No apto para públicos sensibles.</strong>
      </h2>
      
      <p className="text-lg sm:text-xl font-normal">
        Gran parte de las personas que contratan servicios de copywriting luego no saben que hacer
        si no tienen a una persona que elabore sus textos.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Por eso regalo esta formación despues de finalizar mi trabajo. Para que tú también puedas hacerlo.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Sin depender de nadie y sin necesidad de contratar a nadie más, porque es muy probable que no sepas como redactar
        tus textos.
      </p>
      
      <p className="text-lg sm:text-xl font-normal">
        Yo misma no sabía como hacerlo cuando empecé. No nacemos aprendidos.
      </p>
      
      <p className="text-lg sm:text-xl font-normal">
        Y no es fácil. Requiere mucho esfuerzo, observación. Con la práctica suficiente, puedes llegar 
        a redactar textos tan buenos que harán que... 
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center my-4">
        el dinero nunca vuelva a ser un problema para ti.
      </h2>
      <p className="text-lg sm:text-xl font-normal">
        Nunca.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Por cierto, ¿Sabes cual es uno de los mejores lugares para probar tus titulares y textos?
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Tinder
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Si, Tinder.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Con veintidos años y un corazon roto, pensé en que tenía que haber alguna forma de filtrar malos candidatos que 
        me harían perder el tiempo y limitarme a hablar solo con personas afines a mí. Así que comencé a escribir descripciones
        en mi perfil y a hacer pruebas para ver cuales funcionaban y cuales no. Los resultados fueron increibles.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Si pruebas esto podrás identificar que es lo que más llama la atención de las personas y ponerlo en práctica en 
        tu negocio.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Mejore mucho mi forma de escribir y de redactar titulares atractivos probando lo que funcionaba y lo que no 
        vendiendome a mí misma. 
      </p>
      <p className="text-lg sm:text-xl font-normal">
        También encontré en menos de un mes un novio que no me hizo perder el tiempo.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Y como decía antes, el regalo que reciben los que contratan mi servicio es:
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center my-4">
        Formación escrita donde te explico con detalle el proceso que he seguido para mejorar todos tus textos para que tú 
        mismo puedan seguir aplicandolo en tu negocio y a otros negocios distintos sin mi ayuda. 
      </h2>
      <h3 className="text-lg sm:text-xl font-bold">
        Vale, ¿Que precio tiene tu servicio?
      </h3>
      <p className="text-lg sm:text-xl font-medium text-red-600">
        Atento aquí
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Que redacte tus anuncios, páginas de ventas y textos tiene un <strong>precio de 7260€ (IVA incluido).</strong>
      </p>
      <h3 className="text-lg sm:text-xl font-bold">
        ¿Qué incluye este servicio?
      </h3>
      <p className="text-lg sm:text-xl font-normal">
        Incluye una sesión inicial (de varias horas) donde me contarás todos los detalles de tu negocio y tu producto o servicio y
         que yo redacte después tu página de ventas, tus anuncios (los que quieras publicar en ese momento) y 
        todos los textos de tu sitio web. También, como te dije antes, al finalizar el servicio te regalo una formación
        escrita donde te explico con detalle que técnicas he utilizado y como las puedes aplicar tú.
      </p>
      <p className="text-lg sm:text-xl font-normal text-red-600">
        <strong> Ya solo esta formación que te regalo justifica el precio, ya que si sigues todo lo que viene ahí, podrás recuperar
        tu inversión en un plazo muy corto de tiempo.</strong>
      </p>

      <div className="flex flex-col items-center justify-center gap-4 mb-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center my-4">
        Servicio con regalo de formación para redactar textos y páginas de ventas <span className="text-red-800 text-4xl">7260€</span>
      </h2>
      <p className="text-lg sm:text-xl font-normal text-gray-600 text-center">
        Impuestos incluidos
      </p>
      <p className="text-lg sm:text-xl font-normal text-gray-600 text-center">
        *Pago seguro con tarjeta, Google Pay o Apple Pay*
      </p>
      <Link href="https://buy.stripe.com/bJe5kF0JedC0dYy70n9IQ00">
        <p className=" max-w-lg px-8 py-6 text-center rounded-lg font-medium text-white text-xl bg-red-600 hover:bg-red-500 transition-colors duration-200">
          Quiero que redactes mis textos y páginas de venta y llevarme de regalo la formación escrita
        </p>
      </Link>
      </div>
      

      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center my-4">
        Preguntas frecuentes
      </h2>
      <h3 className="text-lg sm:text-xl font-bold">
        ¿Este servicio vale para [introduce aquí tu negocio] del sector de [introduce aquí tu sector]?
      </h3>
      <p className="text-lg sm:text-xl font-normal">
        Este servicio vale para cualquier negocio honesto de cualquier sector independemente de lo que sea que venda
        y de quienes sean sus clientes. 
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Aquí utilizaré algo tan sencillo y eficaz como que las personas lean tus textos y compren.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Así que si tu negocio es honesto, tu eres honesto y vendes a humanos capaces de leer un texto, la repsuesta es que sí.
      </p>

      <h3 className="text-lg sm:text-xl font-bold">
        ¿Hay garantía de devolución?
      </h3>
      <p className="text-lg sm:text-xl font-normal">
        No. Si crees que mi servicio no te ayudará y que no amortizarás la inversión mi recomendación honesta y genuina es que no lo compres.
      </p>

      <h3 className="text-lg sm:text-xl font-bold">
        ¿Haces algún tipo de descuento?
      </h3>
      <p className="text-lg sm:text-xl font-normal">
        Me encanta halloween y no hago descuentos de Navidad, ni de BlackFriday ni 
        por Halloween cuando me disfrazo de homunculo. <strong className="text-red-600">El precio más bajo que vas a encontrar son 7260€ y
          el año que viene será más alto </strong>
      </p>
      <h3 className="text-lg sm:text-xl font-bold">
        ¿A quien NO le recomiendas este servicio?
      </h3>
      <p className="text-lg sm:text-xl font-normal">
        Este servicio es para personas sensatas y honestas que tengan un negocio. Si lo que vendes no interesa a 
        las personas o no eres una persona sincera y honesta, esto no es para ti.
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Lo que yo hago supone una inversión de dinero y es muy rentable si tu producto encaja con los intereses de 
        los consumidores, pero no hago milagros ni convierto el agua en vino, por lo que si no cumples los dos 
        requisitos anteriores te recomiendo encarecidamente que no lo compres.
      </p>

      <h3 className="text-lg sm:text-xl font-bold">
        Si lo contrato una vez, ¿Puedo volver a contratarlo en un futuro?
      </h3>
      <p className="text-lg sm:text-xl font-normal">
        No. La primera vez que contratas este servicio te regalo al acabar una formación detallada para que tú 
        mismo puedas aplicar mis técnicas en el futuro, por lo que no será posible contratarlo una segunda vez. 
        <strong> Solo esta formación que te regalo justifica el precio, ya que si sigues todo lo que te explicaré en esa formación, podrás recuperar
        tu inversión en un plazo muy corto de tiempo.</strong>
      </p>
      <p className="text-lg sm:text-xl font-normal">
        Esto lo hago porque el servicio no es barato y mi intención es, además de ayudarte, enseñarte a hacer
        lo que yo hago y que no tengas que depender de mí una segunda vez.
      </p>
      <h3 className="text-lg sm:text-xl font-bold">
        ¿Hay plazas limitadas?
      </h3>
      <p className="text-lg sm:text-xl font-normal">
        Me encantaría poder ayudar a mucha gente, pero me resulta fisicamente imposible porque el año solo tiene doce meses,
        y cada mes 30 días, por lo que <strong className="text-red-600"> cada año SOLO admitiré
        a 12 personas. </strong>
      </p>
      <h3 className="text-lg sm:text-xl font-bold">
        ¿Por qué aparece un mensaje de <strong>error</strong> si hago click en el enlace de abajo?
      </h3>
      <p className="text-lg sm:text-xl font-normal">
        Esto no es un error. Esto sucede porque ya ha habido 12 personas que lo han comprado antes que tú,
        por lo que deberás esperar al año que viene para poder contratar este servicio. En caso de ser así, lo harás a un precio 
        de  <strong> 9680€.</strong>
      </p>
      <div className="flex flex-col items-center justify-center gap-4 mb-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center my-4">
        Servicio con regalo de formación para redactar textos y páginas de ventas <span className="text-red-800 text-4xl">7260€</span>
      </h2>
      <p className="text-lg sm:text-xl font-normal text-gray-600 text-center">
        Impuestos incluidos
      </p>
      <p className="text-lg sm:text-xl font-normal text-gray-600 text-center">
        *Pago seguro con tarjeta, Google Pay o Apple Pay*
      </p>
      <Link href="https://buy.stripe.com/bJe5kF0JedC0dYy70n9IQ00">
        <p className=" max-w-lg px-8 py-6 text-center rounded-lg font-medium text-white text-xl bg-red-600 hover:bg-red-500 transition-colors duration-200">
          Quiero que redactes mis textos y páginas de venta y llevarme de regalo la formación escrita
        </p>
      </Link>
      </div>
      
    </main>
  );
}
