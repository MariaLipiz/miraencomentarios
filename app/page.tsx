import NewsletterForm from '@/components/NewsletterForm';
import Script from 'next/script'

export const metadata = {
  title: 'Escribe. Liga. Vende | Copywriter',
  description:
    'Cada día un email para ayudarte a ligar más y mejor',
    keywords: [
      'Técnicas de seducción',
      'Como ligar',
      'Copywriting',
      'Copywriter',
      'Escritura persuasiva',
      'Redacción publicitaria',
    ],
    authors: [{ name: 'Maria Lipiz', url: 'https://www.escribeligavende.com' }],
    robots: 'index, follow',
  openGraph: {
    title: 'Escribe. Liga. Vende | Copywriter',
    description:
      'Cada día un email para ayudarte a ligar más y mejor',
    url: 'https://www.escribeligavende.com',
    siteName: 'Escribe. Liga. Vende',
    images: [
      {
        url: 'https://escribeligavende.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Escribe. Liga. Vende | Copywriter',
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

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Escribe. Liga. Vende | Copywriter",
    "url": "https://www.escribeligavende.com",
    "logo": "https://www.escribeligavende.com/logo.png",
    "description": "Cada día un email para ayudarte a ligar más y mejor",
    "email": "maria@escribeligavende.com",
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Copywriting",
          "description": "Redacción publicitaria para empresas. Copywriter amateur"
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
    <main className="flex flex-col items-start justify-start px-6 sm:px-12 lg:px-52 py-12 gap-5">
      <h1 className="text-3xl sm:text-4xl font-bold">
        Amo ser libre y ayudar a los demás
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Y por eso escribo <span className="text-red-500">un email cada día.</span>
      </h2>

      

      <p className="text-base sm:text-lg  font-normal">
      Para venderte algo. Para aprender a vender. Para ayudarte a vender.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Para ser libre. Para aprender a ser libre. Para ayudarte a ser libre. 
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Apuntarse es gratis. Hasta que deje de serlo.
      </p>

      <NewsletterForm />



      <h2 className="text-xl sm:text-2xl font-semibold my-6">
      ¿De que va esto?
      </h2>
      <p className="text-base sm:text-lg  font-normal">
      Todos los días veo a personas no ser libres.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Aniquilan su instinto de supervivencia.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Deprimidas.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Insatisfechas con sus vidas. 
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Con cuatro títulos y veinte años de estudio a sus espaldas.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Dando su vida por un sueldo miserable a final de mes.
      </p>
      
      <p className="text-base sm:text-lg  font-normal">
      Soñando que lleguen las vacaciones.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Rogandole a su jefe para que decida que les va a subir cincuenta euros el sueldo.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Entrando cada mañana a una oficina con el único objetivo de tomar el mayor número posible
      de cafes mientras mantienen una conversación de besugos con sus compañeros y que sus ocho
      horas pasen rápido.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Repitiendo frases como:
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Quiero montarme algo por mi cuenta.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Emprender esta muy complicado.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Al menos aquí tengo seguridad.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      En unos años llegaré a [introduce aquí un puesto absurdo] y cobraré más.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Yo he estado ahí. He llegado a vislumbrar ese infierno.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Y he salido, como quien se despierta de un mal sueño.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Todavía sigo aprendiendo a ser libre, no te equivoques.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Y a vender escribiendo, por eso lo hago cada día. 
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Espero de corazón que esto te ayude a hacer lo mismo. 
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Entra y aprendamos juntos.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      O no, sigue con tu vida.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Esto ha sido un sueño.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold my-6">
      ¿A quién va dirigido?
      </h2>

      <p className="text-base sm:text-lg  font-normal">
      A nadie.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      A nadie que quiera lamerle el culo a su jefe hasta la segunda venida de Cristo.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      A nadie que ame hacer PowerPoints y Excels de mierda porque su trabajo así se lo exige.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      A nadie cuya máxima aspiración sea sacarse una oposición.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      A nadie que piense que para tener un negocio de éxito necesitas que todo el mundo te vea hacer el ridiculo 
      en TikTok.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      A nadie que se sienta comodo siendo liderado por completos subnormales.
      </p>

      
      <p className="text-base sm:text-lg  font-normal">
      Espero que con esto haya aclarado todas tus dudas. 
      </p>

      <NewsletterForm />



      <h2 className="text-xl sm:text-2xl font-semibold my-6">
        No apto para mentes débiles.
      </h2>
      <p className="text-base sm:text-lg  font-normal">
      Mira. No quiero caerte bien.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Aquí hablaré sobre pollas, liberalismo y seres (humanos) que deberían
      ser desterrados de la sociedad.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      También hablaré sobre ventas, copywriting y emprendimiento sin censura.
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Cada día, cada mañana, recibirás en tu bandeja de entrada un email que hará que quieras hacerme un hijo o escupirme en la cara. 
      </p>
      <p className="text-base sm:text-lg  font-normal">
      ¿Quieres escupirme en la cara?
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Apúntate y vemos.
      </p>

      <p className="text-base sm:text-lg  font-normal">
      PD: Mira arriba.
      </p>

      

      


      <NewsletterForm />
      
    </main>
    </>
  )
}
