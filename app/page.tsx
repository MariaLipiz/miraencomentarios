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
    <main className="flex flex-col items-start justify-start px-6 sm:px-12 lg:px-52 py-12 gap-12 text-base sm:text-xl lg:text-2xl font-light">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 ">
      Ni métricas. Ni IA. Ni el sistema revolucionario de solo 5 pasos que encontrarás en este webinar.
      </h1>
      
      <p >
      No voy a decirte que te han engañado como travesti paraguayo ni que yo vengo a revelarte la verdad absoluta. Porque te estaría engañando.
      </p>
      
      <p >
      Pero si que te puedo decir una cosa. 
      </p>
      <p >
      El éxito en los negocios no pasa por gastarte 3000€ en una automatización para aumentar en un 0,0001% tus beneficios. No tiene mucho sentido y es muy posible que estés de acuerdo conmigo.
      </p>
      <p >
      Ahora bien, te he hablado de lo que no hace falta para hacer que tu negocio vaya bien y puedas cerrarle la boca a tu familia con lo de “no emprendas que es muy arriesgado”.
      </p>
      <p >
      Hablemos de lo que si hace falta. 
      </p>
      <p >
      Esto es casi de sentido común, aunque es probable que de tan sencillo que parece no me creas.
      </p>
    
      <ul className="list-disc list-inside space-y-6">
        <li>Tu negocio, tus normas. Saber poner coto a clientes tocapelotas es de primero de emorendimiento. Al igual que no dejarías entrar a cualquiera a tu casa, pues con tu negocio lo mismo. No querrás ser la putita de tu sector y comerte toda la morralla, aunque solo sea por una cuestión de orgullo.</li>
        <li>Imitar a la competencia y hacer lo mismo que hacen ellos es como el ciego que sigue a otro ciego. El resto de la historia te la puedes imaginar. </li>
        <li>La complejidad es enemiga del buen funcionamiento. Esto es algo que muchas personas no entienden y probablemente nunca entenderán, en especial los marketeros aficionados a hacer embudos de 80 pasos.</li>
        
      </ul>

      <p >
      Entiendo que si sigues aquí y no estás pensando que tengo algún tipo de deficit intelectual, estarás de acuerdo conmigo. 
      </p>

      <p >
      Y también estarás de acuerdo conmigo en que dominar y aplicar estos tres puntos, salvo que hayas nacido siendo el Superman de los negocios, tampoco es sencillo. 
      </p>

      <p >
      Bien.
      </p>

      <p >
      Ahora puedes hacer dos cosas:
      </p>

      <p >
      La primera. Cerrar esta pestaña y si te he visto no me acuerdo. Yo ni me enteraré y esto quedará entre Dios, Google y tú. 
      </p>

      <p >
      La segunda. Dejarme tu email abajo, y ningún dato más, mi intención no es hacer que parezcamos amigos.  
      </p>

      <p >
      En este caso, cada día te freiré a correos con un consejo diario.
      </p>

      <p >
      Así hasta que me odies, 
      o me ames, o me insultes o te desuscribas o quieras acampar en el portal de mi casa. 
      </p>

      <p >
      Eso ya lo dejo a tu elección.
      </p>

      <p >
      Te apuntas aquí abajo. Es gratis y desapuntarse también es gratis.
      </p>

      <NewsletterForm />

      <h2 className="text-2xl sm:text-3xl font-bold my-6 ">
      Esto no va de “mejorar los textos de tu web”
      </h2>

      
      <p >
      Que si, que mejorar los textos de tu web es importante y no poner lo multidisciplinar que es tu equipo también, 
      hablaremos de esto. Pero y qué, ¿A quién le importa esto? ¿A tu cuñado? Ya te digo yo que no. 
      </p>
      <p >
      Esto va de hacer las cosas con criterio y con sentido común (que como todos sabemos, es el menos común de los sentidos), y sobre todo, 
      de no ser un huevon o huevona o huevone. Lo digo por si hay algún indigente mental en los alrededores. 
      </p>

      <NewsletterForm />

      

      <h2 className="text-2xl sm:text-3xl font-bold my-6 ">
      Escribo para gente con dos dedos de frente
      </h2>
      <p >
      Por eso no te regalaré ningún PDF con -El consejo definitivo que aprendi de un camello nigeriano durante mi erasmus en un gulaj ruso en 
      Siberia sobre ventas, negocios y copywriting- ni nada parecido. 
      </p>

      <p >
      Doy por hecho que eres un adulto funcional y que no necesitas un refuerzo positivo para hacer algo que puede ser 
      bueno para tu negocio y para ti. 
      </p>

      <p >
      Si es que esto se parece a algo bueno para tu negocio, claro. Yo creo que si, porque soy parte interesada y me va bien. Tu puedes pensar lo que quieras.
      </p>

      <p >
      También te ahorraré gilipolleces como “pon aquí tu email menos comunista”. Ya somos mayorcitos y si quieres poner uno, pues pones el que quieras. 
      </p>

      <NewsletterForm />


      <h2 className="text-2xl sm:text-3xl font-bold my-6 ">
      Me gusta ganar dinero para ser libre y hacérselo ganar a los demás. Para que sean libres también, ya sabes
      </h2>

      <p >
      Y para que nunca nadie tenga que pasar por una situación de necesidad ni nada parecido como pasé yo de pequeña.
      </p>

      <p >
      Y hasta aquí los sentimentalismos.
      </p>

      <p >
      Por eso te aviso de que cada día te intentaré vender algo. Porque somos humanos, y antes que humanos somos comerciantes y toda esa película. Ya somos 
      mayores para entender esto.
      </p>

      <p >
      Igualmente, aunque no compres nada, es muy probable que te lleves algo de valor, como por ejemplo, una estrategia infalible para evitar 
      cosas como el “Me lo tengo que pensar”. 
      </p>

      <p >
      Por poner un ejemplo. Repito. Aunque si lo que lees no hace que te entren ganas de sacar la tarjeta, pues mejor te desuscribes y listo.
      </p>

      <NewsletterForm />

      <h2 className="text-2xl sm:text-3xl font-bold my-6 ">
      Y aquí… algunos asuntos anteriores. 
      </h2>

      <ul className="list-disc list-inside space-y-6">
        <li>El extraño uso que hace la gente de esta cosa que casi seguro conoces</li>
        <li>Consejo de sentido común, que como se dice, es el menos común de los sentidos</li>
        <li>Este correo ha quedado fatal y por eso no debes leerlo</li>  
        <li>Dos errores que casi seguro estás cometiendo y que son muy habituales en cualquier tipo de negocio</li>
        <li>Si lees con atención, esta reflexión personal te abrirá los ojos y te llevará un pasito mas lejos</li>
        <li>Vender es importante, esto que te cuento aquí lo es más</li>
        <li>Una llamada marciana que todo emprendedor ha recibido y que cambió el rumbo de mi negocio</li>
        <li>Porqué tu competidor el inútil gana más que tú</li>
              
      </ul>

      <p >
      Como dice el gran Luis Monge, dia que estás fuera, consejo que te pierdes.
      </p>

      <NewsletterForm />




      
      

      
    



      

      

      


      
    </main>
    </>
  )
}
