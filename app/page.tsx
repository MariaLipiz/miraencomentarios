import NewsletterForm from '@/components/NewsletterForm';
import Script from 'next/script'

export const metadata = {
  title: 'Maria Lipiz | Copywriter',
  description:
    'Cada día un email para ayudarte a que las personas sientan cosas y compren lo que ofreces',
    keywords: [
      'Copywriting',
      'Copywriter',
      'Como vender por internet',
      'Como redactar una página de ventas',
      'Escritura persuasiva',
      'Redacción publicitaria',
    ],
    authors: [{ name: 'Maria Lipiz', url: 'https://www.miraencomentarios.com' }],
    robots: 'index, follow',
  openGraph: {
    title: 'Maria Lipiz | Copywriter',
    description:
      'Cada día un email para ayudarte a que las personas sientan cosas y compren lo que ofreces',
    url: 'https://www.miraencomentarios.com',
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
          "description": "Redacción publicitaria para negocios y empresas."
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
        Copywriting para darle envidia a tu cuñado
      </h1>
      

      <p className="text-base sm:text-lg font-normal">
      Un mileurista, un comedoritos, un liberal y tu abuela. 
      </p>
      <p className="text-base sm:text-lg font-normal">
      Cada día envio un email hablando de esto y <strong>te doy una estrategia para hacer que las personas sientan 
      cosas y compren lo que vendas</strong> por la que podría cobrarte. 
      </p>
      
      <p className="text-base sm:text-lg font-normal">
      No apto para huevones, ofendidos y funcionarios que quieran seguir siendolo.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Te apuntas abajo, aunque si eres uno de ellos <strong>seguro que no te apuntarás.</strong>
      </p>
      

      <NewsletterForm />

      <p className="text-base sm:text-lg font-medium">
      PD: Con esto conseguirás caerle mal a tu cuñado. 
      </p>
      <p className="text-base sm:text-lg font-medium">
      PD2: Nada más apuntarte recibirás un <strong className="text-red-600">regalo</strong> en el que te cuento en 1.306 palabras lo que aprendí sobre copywriting de un chaval aburridisimo que conocí por Tinder.
      </p>



      
      

      
    



      

      

      


      
    </main>
    </>
  )
}
