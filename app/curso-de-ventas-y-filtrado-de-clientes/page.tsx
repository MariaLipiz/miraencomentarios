
import Script from 'next/script'
import ConvertkitButton from "@/components/BotonCurso";

export const metadata = {
  title: 'Curso de ventas y filtrado de clientes',
  description:
    'Esta formación trata sobre como cerrar más ventas con personas interesadas en lo que sea que vendas y filtrar clientes que no te llevarán a ningún sitio',
    keywords: [
      'Estrategia comercial',
      'Estratega comercial',
      'Consultoría comercial',
      'Consultoría de marketing',
      'Copywriter',
      'Como vender por internet',
      'Como ganar dinero en internet',
      'Escritura persuasiva',
      'Redacción publicitaria',
      'Curso de ventas para negocios',
    ],
    authors: [{ name: 'Maria Lipiz', url: 'https://www.miraencomentarios.com' }],
    robots: 'index, follow',
  openGraph: {
    title: 'Curso de ventas y filtrado de clientes',
    description:
      'Esta formación trata sobre como cerrar más ventas con personas interesadas en lo que sea que vendas y filtrar clientes que no te llevarán a ningún sitio',
    url: 'https://www.miraencomentarios.com',
    siteName: 'Maria Lipiz Copywriter',
    images: [
      {
        url: 'https://miraencomentarios.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Curso de ventas y filtrado de clientes',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: [
    { url: '/favicon.ico' },                      // clásico
    { url: '/favicon.svg', type: 'image/svg+xml' } // vectorial
  ],
    apple: '/apple-icon.png',
  },
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Curso de ventas y filtrado de clientes",
    "url": "https://www.miraencomentarios.com",
    "logo": "https://www.miraencomentarios.com/logo.png",
    "description": "Esta formación trata sobre como cerrar más ventas con personas interesadas en lo que sea que vendas y filtrar clientes que no te llevarán a ningún sitio",
    "email": "maria@miraencomentarios.com",
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Estrategia comercial",
          "description": "Estudio tu negocio, tu mercado y tu proceso de ventar y elaboro estrategias para simplificar tu negocio y facturar más."
        },
      ]
    }
  }

  return (
    <>
      <Script
        id="schema-dw"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    <main className="flex flex-col items-start justify-center px-6 sm:px-12 lg:px-52 py-6 gap-5">
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 ">
      <strong className="text-red-600">Cierra más ventas</strong>  con personas interesadas y filtra clientes de mierda

      </h1>
      

      
      

      <h2 className="text-2xl sm:text-3xl font-bold my-2 ">
      Esta formación trata sobre como cerrar más ventas con personas interesadas en lo que sea que vendas y 
      filtrar clientes que no te llevarán a ningún sitio (bueno).
      </h2>
      
    
      <p className="text-lg sm:text-lg font-normal">
       Esto es la recopilación de todas las notas que he tomado a lo largo del tiempo sobre lo que funciona y lo que no 
       a la hora de vender cualquier cosa y que me han ayudado a mí y muchas personas a mejorar sustancialmente su negocio y su calidad de vida. 
      </p>
      <p className="text-lg sm:text-lg font-normal mb-6">
       Algunas de esas notas son:
      </p>
      <ul className="list-disc list-inside space-y-6 text-base sm:text-lg font-normal mb-6">
        <li>El motivo por el que nunca debes justificar el precio </li>
        <li>8 señales de que la persona que tienes delante será un futuro cliente problematico</li>
        <li>La extraña razón por la cual nunca debes responder preguntar como ¿Cuantos años tienes? o ¿Para que clientes has trabajado?</li>  
        <li>Un error que casi seguro estás cometiendo a la hora de cerrar una venta y que está haciendo que factures menos</li>
        <li>El motivo por el cual nunca debes usar ChatGPT en nada relacionado con tu proceso de venta</li>
        <li>10 frases que, si las dices, hará que tu cliente tengas ganas de salir corriendo (casi seguro las estas utilizando)</li>
 
              
      </ul>

      <p className="text-lg sm:text-lg font-normal mb-6">
       Contiene más cosas, pero esas te las cuento en la formación.
      </p>

      <p className="text-lg sm:text-lg font-normal mb-6">
       Debes saber que si compras, <strong>tendrás acceso a un mes de soporte ilimitado</strong> en el que podrás preguntarme todas tus dudas y yo misma 
       te responderé. 
      </p>
      <p className="text-lg sm:text-lg font-normal mb-6">
       No, no un bot ni mi secretario.
      </p>
      <p className="text-lg sm:text-lg font-normal mb-6">
       Yo en persona.
      </p>

      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
       ¿Cual es su precio?
      </h3>
      <p className="text-lg sm:text-lg font-normal mb-12">
       El precio es de <strong>70€ (IVA incluido) y nunca bajará.</strong>
      </p>

      <ConvertkitButton />


      <h2 className="text-2xl sm:text-3xl font-bold my-12 ">
       Preguntas frecuentes
      </h2>
      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
       ¿Para quien es esta formación?
      </h3>
      <p className="text-lg sm:text-lg font-normal">
       Esto es para ti si:
      </p>
      <ul className="list-disc list-inside space-y-6 text-base sm:text-lg font-normal">
        <li>Sientes que muchos clientes pierden el interes cuando parecía que ya tenías cerrada la venta</li>
        <li>Tienes clientes problemáticos</li>
        <li>Muchos clientes no te compran por tu edad, tu experiencia, el tamaño de tu empresa o tus clientes anteriores </li>  
        <li>Tienes que perseguir a tus clientes para que te compren</li>
    
      </ul>

      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
       ¿Que contiene?
      </h3>
      <p className="text-lg sm:text-lg font-normal">
       Esta formación consiste en 16 páginas y 7994 palabras de mucho grano y poca paja donde te explico las claves para mejorar y acelerar tus procesos de venta.
      </p>
      <p className="text-lg sm:text-lg font-normal">
       Si te parece poco contenido, te sugiero que no lo compres.
      </p>
      <p className="text-lg sm:text-lg font-normal">
       No tiene sentido valorar una formación por su extensión y no por su calidad, por lo que si eres ese tipo de persona prefiero que no seas mi cliente.
      </p>

      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
       ¿Es posible solicitar un reembolso?
      </h3>
      <p className="text-lg sm:text-lg font-normal">
       No. Una vez comprada no es posible reembolsar, por lo que si crees que esto no encajará contigo te recomiendo encarecidamente que no lo compres.
      </p>

      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
       ¿Bajará de precio?
      </h3>
      <p className="text-lg sm:text-lg font-normal">
       No. No hago descuentos por Black Friday, Navidad ni el día de Halloween. Es más, ten claro que el precio subirá con el tiempo.
      </p>
      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
       ¿Esto es para mí?
      </h3>
      <p className="text-lg sm:text-lg font-normal">
       Eso es algo que solo puedes decidir tú, pero si te tuviese que dar una respuesta, no, no es para ti.
      </p>
      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
      ¿Incluye algún extra?
      </h3>
      <p className="text-lg sm:text-lg font-normal">
       Depende de cuando lo compres incluirá un bonus. O dos.
      </p>
      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
      En el momento en el que compre esta formación, ¿Como accedo a ella?
      </h3>
      <p className="text-lg sm:text-lg font-normal ">
       Te seré sincera. Todavía no he automatizado este proceso, por lo que una o dos horas despues de la compra yo misma te enviaré 
       esta formación por correo. Este correo probablemente contendrá algún bonus no solicitado, así que estate atento.
      </p>
      <h3 className="text-xl sm:text-2xl font-bold my-6 ">
      ¿Incluye soporte?
      </h3>
      <p className="text-lg sm:text-lg font-normal mb-12">
       Sí. Esta formación incluye un mes completo de soporte ilimitado. Durante este mes podrás hacerme las preguntas que quieras 
       y yo misma las responderé, no un bot ni mi secretario (que gracias a Dios no tengo).
      </p>

      

      

      
      <ConvertkitButton />




      
      

      
    



      

      

      


      
    </main>
    </>
  )
}
