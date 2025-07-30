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
    <main className="flex flex-col items-start justify-center px-6 sm:px-12 lg:px-52 py-6 lg:py-12 gap-5 xl:h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 ">
        Copywriting para caerle mal a tu cuñado
      </h1>
      

      <p className="text-lg sm:text-xl  font-normal">
      Una vez escuché a un grande del copy decir que él escribía mucho y observaba a la gente.
      </p>
      <p className="text-lg sm:text-xl  font-normal">
      Será por eso que es un grande. 
      </p>
      <p className="text-lg sm:text-xl  font-normal">
      No se.
      </p>
      <p className="text-lg sm:text-xl  font-normal">
      Lo que sí sé, es que <strong>cada día te envío un email diario </strong> para aprender a hacer que las personas sientan cosas y compren lo que ofreces.
      </p>
      <p className="text-lg sm:text-xl  font-normal mb-4">
      Te apuntas abajo.
      </p>
      

      <NewsletterForm />

      <p className="text-lg sm:text-xl  font-semibold mt-4">
      PD: Con esto conseguirás caerle mal a tu cuñado. 
      </p>
      <p className="text-lg sm:text-xl  font-semibold">
      PD2: También ganar más dinero.
      </p>
    



      

      

      


      
    </main>
    </>
  )
}
