import NewsletterForm from '@/components/NewsletterForm';
import Script from 'next/script'

export const metadata = {
  title: 'Maria Lipiz | Me gusta ganar dinero y ayudar a los demás a hacerlo',
  description:
    'Cada día un email para ayudarte a vender más y ser más libre',
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
      'Emprendimiento',
    ],
    authors: [{ name: 'Maria Lipiz', url: 'https://www.miraencomentarios.com' }],
    robots: 'index, follow',
  openGraph: {
    title: 'Maria Lipiz | Me gusta ganar dinero y ayudar a los demás a hacerlo',
    description:
      'Cada día un email para ayudarte a vender más y ser más libre',
    url: 'https://www.miraencomentarios.com',
    siteName: 'Maria Lipiz Copywriter',
    images: [
      {
        url: 'https://miraencomentarios.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maria Lipiz | Me gusta ganar dinero y ayudar a los demás a hacerlo',
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
    "name": "Maria Lipiz | Me gusta ganar dinero y ayudar a los demás a hacerlo",
    "url": "https://www.miraencomentarios.com",
    "logo": "https://www.miraencomentarios.com/logo.png",
    "description": "Cada día un email para ayudarte a vender más y ser más libre",
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 ">
      Si tienes tu propio negocio o quieres tenerlo y te sientes perdido <strong className="text-red-600">sigue leyendo</strong> 
      </h1>
      

      <p className="text-lg sm:text-lg font-normal">
      Mira. 
      </p>
      <p className="text-lg sm:text-lg font-normal">
      Dicen por ahí que emprender te hará libre y que ganarás mucho dinero. Todo muy bonito.
      </p>
      
      <p className="text-lg sm:text-lg font-normal">
      Pero la realidad no siempre es así.
      </p>
      <p className="text-lg sm:text-lg font-normal">
      Ser autonomo o empresario también es sentirse solo. No tener ni idea de por donde empezar. No saber a quién pedir ayuda.
      </p>
      <p className="text-lg sm:text-lg font-normal">
      Te sientes incomprendido. No es algo que entienda todo el mundo. 
      </p>
      <p className="text-lg sm:text-lg font-normal">
      Tu pareja te sugiere que busques un trabajo. 
      </p>
      <p className="text-lg sm:text-lg font-normal">
      Tu familia te pregunta preocupada cada vez que sale el tema.
      </p>
      <p className="text-lg sm:text-lg font-normal">
      Tus amigos te mirán raro cuando les hablas de emprender, hablan de la estabilidad de un curro fijo y pasan del asunto.
      </p>
      <p className="text-lg sm:text-lg font-semibold">
      Por eso cada día envio un cosejo valioso solo apto para personas que quieren entender:
      </p>
    
      <ul className="list-disc list-inside space-y-1 text-base sm:text-lg font-normal">
        <li>Que tener un salario fijo no tiene ningun sentido.</li>
        <li>Que alcanzar la libertad es fundamental.</li>
        <li>Que levantar un negocio se basa en realizar las acciones más sencillas y eliminar todo lo demás.</li>
        
      </ul>

      <p className="text-lg sm:text-lg font-normal">
      Si tú eres de esos te apuntas abajo. Es gratis.
      </p>

      

      <NewsletterForm />

      <h2 className="text-2xl sm:text-3xl font-bold my-6 ">
      ¿Que recibirás si te apuntas?
      </h2>

      
      <p className="text-lg sm:text-lg font-normal">
      De todo. Herramientas, estrategias de venta, trucos, consejos y experiencias reales para gestionar mejor tu negocio y vivir mucho 
      más tranquilo (y más libre, que es lo importante).
      </p>
      <p className="text-lg sm:text-lg font-medium">
      Aquí abajo apuntas tu correo. Si no te apuntas hoy, te perderás el consejo de mañana.
      </p>

      <NewsletterForm />

      

      <h2 className="text-2xl sm:text-3xl font-bold my-6 ">
      ¿Por qué debería apuntarme?
      </h2>
      <p className="text-lg sm:text-lg font-normal">
      Eso solo lo puedes decidir tú, aunque si lo tuyo es:
      </p>
      <ul className="list-disc list-inside space-y-3 text-base sm:text-lg font-normal">
        <li>Ser una persona con mentalidad de funcionario sin intención de mejorar</li>
        <li>Vender humo a tus clientes</li>
        <li>Pasarte el día quejandote por redes de lo dura que es la vida e insultar a quién gana más que tú</li>      
      </ul>

      <p className="text-lg sm:text-lg font-normal">
      Te sugiero que no te apuntes.
      </p>

      <p className="text-lg sm:text-lg font-normal">
      En caso contrario, metes abajo tu email.
      </p>
      <NewsletterForm />

      <h2 className="text-2xl sm:text-3xl font-bold my-6 ">
      Algunos asuntos recientes.
      </h2>
      <p className="text-lg sm:text-lg font-normal">
      Esto son titulos de algunos de los últimos emails que he enviado:
      </p>
      <ul className="list-disc list-inside space-y-3 text-base sm:text-lg font-normal">
        <li>Una valiosa lección sobre negocios que aprendí de una señora rancia</li>
        <li>Te cuento la estrategia contraintuitiva que siguió un fulano para conseguir un puesto de trabajo</li>
        <li>El antimorbo</li>  
        <li>Dos errores que casi seguro estás cometiendo y que son muy habituales en cualquier tipo de negocio</li>
        <li>Lo más importante que debes saber a la hora de vender cualquier cosa</li>
        <li>Los equipos multidisciplinares se han aliado para acabar con nosotros</li>
        <li>Porqué tu competidor el inútil gana más que tú</li>
              
      </ul>

      <p className="text-lg sm:text-lg font-normal">
      Si no quieres perderte los siguientes, te apuntas abajo.
      </p>

      <NewsletterForm />




      
      

      
    



      

      

      


      
    </main>
    </>
  )
}
