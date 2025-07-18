import SubscribeForm from '@/components/SubscribeForm';
import Script from 'next/script'

export const metadata = {
  title: 'Pixel al Límite | Agencia de Marketing Digital para PyMEs',
  description:
    'Diseño web, desarrollo web, SEO, SEM, Publicidad Digital, Publicidad en Google y Meta, automatización de procesos y más. Creamos experiencias digitales que inspiran y venden.',
  keywords: [
    'Agencia de Marketing Digital para PyMEs',
    'Agencia Marketing Digital para PyMEs',
    'Agencia Marketing Digital para Empresas',
    'Agencia de Marketing para PyMEs',
    'Agencia de Marketing para empresas',
    'Agencia de Marketing para influencers',
    'Marketing para influencers',
  ],
  authors: [{ name: 'Pixel al Límite', url: 'https://pixelallimite.com' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Pixel al Límite | Agencia de Marketing Digital',
    description:
      'Impulsa las ventas de tu negocio con una agencia estratégica, tecnológica y atrevida. Diseño, datos y resultados en cada píxel.',
    url: 'https://pixelallimite.com',
    siteName: 'Pixel al Límite',
    images: [
      {
        url: 'https://pixelallimite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel al Límite | Agencia de Marketing Digital en Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel al Límite',
    description: 'Diseño web, marketing digital y estrategias digitales que inspiran y convierten.',
    images: ['https://pixelallimite.com/og-image.jpg'],
    creator: '@pixelallimite',
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
    "name": "Escribe. Liga. Vende - Copywriter",
    "url": "https://www.escribeligavende.com",
    "logo": "https://www.escribeligavende/logo.png",
    "description": "Cada día un email para ayudarte a ligar más y mejor sin parecer subnormal en el intento",
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
      <h1 className="text-4xl sm:text-5xl font-bold">
        No leas esto si quieres morir solo
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Cada día un email para ayudarte a <strong className="text-red-500">ligar más y mejor</strong> sin parecer subnormal en el intento  
      </h2>

      <p className="text-base sm:text-lg  font-normal">
      La soledad actual es culpa del móvil.
      </p>

      <p className="text-base sm:text-lg  font-normal">
      No, no, no.
      </p>

      <p className="text-base sm:text-lg  font-normal">
      Mejor aun.
      </p>

      <p className="text-base sm:text-lg  font-normal">
      De la extrema derecha.
      </p>

      <p className="text-base sm:text-lg  font-normal">
      O no, todavia mejor.
      </p>

      <p className="text-base sm:text-lg font-normal">
      De la sociedad hetero-patriarcal.
      </p>

      <p className="text-base sm:text-lg font-normal">
      Esa es la culpable de todo.
      </p>
      
      <p className="text-base sm:text-lg  font-normal">
      Los hombres solo quieren follar. 
      </p>
      <p className="text-base sm:text-lg  font-normal">
      Las mujeres morirán solas rodeadas de gatos.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Debes hacerte el dificil.
      </p>

      <p className="text-base sm:text-lg font-normal">
      Debes parecer interesante.
      </p>

      <p className="text-base sm:text-lg font-normal">
      Debes tener dos carreras, cuatro masteres y haber ido a Bali ochenta veces para ser interesante.
      </p>

      <p className="text-base sm:text-lg  font-normal">
      O mejor, hazte el ocupado, que eso es mas interesante.
      </p>

      <p className="text-base sm:text-lg font-normal">
      Al mínimo interés afectivo-romántico tienes que salir corriendo.
      </p>
      
      <p className="text-base sm:text-lg font-normal">
      No vaya a ser que quiera algo más.
      </p>

      <p className="text-base sm:text-lg font-normal">
      Tener hijos mola. Tener hijos no mola.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Lo primero es el trabajo. Lo primero son los amigos. Lo primero soy yo.
      </p>
      
      
      <p className="text-base sm:text-lg font-normal">
      Si va en un seat ibiza no es el indicado.
        </p>
      
        <p className="text-base sm:text-lg font-normal">
        Si no tiene figura paterna está desequilibrada.
        </p>
      
        <p className="text-base sm:text-lg font-normal">
        Quiero que sea rico, romántico, atento y que me mantenga.
        </p>
        <p className="text-base sm:text-lg font-normal">
        Porque yo valgo mucho. No hago nada con mi vida, pero valgo mucho.
        </p>
        <p className="text-base sm:text-lg font-normal">
        Eso me dice mi amiga, la del pelo azul.
      </p>

      <p className="text-base sm:text-lg font-normal">
        Amiga Amigue Amigui.
      </p>

      <p className="text-base sm:text-lg font-normal">
        Como coño se diga hoy en día.
      </p>

        <p className="text-base sm:text-lg font-normal">
        Es guapo y encantador, pero no me dedica todo su tiempo porque está demasiado ocupado labrandose un futuro.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Mejor le mando a la mierda.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Mis ex novias están todas locas.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Claro, que eso no es culpa mía. Solo caigo con locas.
      </p>

      
      
      
      <p className="text-base sm:text-lg font-normal">
      Me han puesto los cuernos 3 veces seguidas.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Los tios son unos cerdos.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Pero no te juntes con tíos que te traten bien, que esos son todos unos débiles.
      </p>

      <p className="text-base sm:text-lg font-normal">
      No le pongas nombre a lo vuestro.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Fluyendo todo sale mejor.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Ojalá esta tía que acabo de conocer no tenga polla.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Que bueno eres conmigo, ojalá tener un novio como tú.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Hazte la dura, no parezcas emocionalmente dependiente.
      </p>
      <p className="text-base sm:text-lg font-normal ">
      Si se vale por sí misma no te fijes en ella, tú quieres una mujer de las de antes.
      </p>

      <p className="text-base sm:text-lg font-normal ">
      Que se deje liderar, y ya de paso, que levante la patita si se lo pides.
      </p>

      <p className="text-base sm:text-lg font-normal ">
      ¿Ha follado con 3 en toda su vida? Será una guarra como todas.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Bien.
      </p>
      <p className="text-base sm:text-lg font-normal ">
      ¿Conclusión?
      </p>
      <p className="text-base sm:text-lg font-normal ">
      Muy fácil, que si mañana se pone de moda decir que tenemos que ir todos con una 
      polla pintada en la frente para poder encontrar pareja o una experiencia sexo-afectiva 
      satisfactoria, lo vamos a hacer. 
      </p>
      <p className="text-base sm:text-lg  font-normal ">
      Y que si aun así no lo conseguimos, tranquilos todos, que será culpa de la extrema derecha.
      </p>
      <p className="text-base sm:text-lg font-normal ">
      &apos;No, no, eso es imposible, no somos tan imbeciles&apos;
      </p>
      <p className="text-base sm:text-lg font-normal">
      Un día más tarde, 8 millones de jóvenes con una polla en la frente. O dos, no sea que una no haga su trabajo.
      </p>

      
      <p className="text-base sm:text-lg font-normal">
      ¿Otra conclusión?
      </p>
      <p className="text-base sm:text-lg font-normal">
      Que los principios básicos del cortejo y el apareamiento humano no han cambiado 
      porque cuatro feas con pelo de colores y ocho comedoritos hayan puesto todo su empeño en ello.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Nos creemos díos jugando a cambiar la biología humana, y no lo somos.
      </p>
      <p className="text-base sm:text-lg font-normal">
      No somos más listos, ni más autoconscientes, ni mejores vendiendonos a los demás.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Total, que tengo una cosa que va a enseñarte a navegar en este puto circo sin perder 
      el tiempo ni la dignidad. 
      </p>
      <p className="text-base sm:text-lg font-normal">
      Y sin decir ellos ellas elles.
      </p>
      <p className="text-base sm:text-lg font-normal">
      Una cosa que hará que me insultes y me llames facha/nazi/apaleadora de niños si nunca te cuestionas nada.
      </p>
      
      <p className="text-base sm:text-lg font-normal mb-6">
      Si es así, te invito a que me insultes, pero no te apuntes.
      </p>


      <SubscribeForm />
      
    </main>
    </>
  )
}
