import SubscribeForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Sobre mí',
  description:
    'Aquí te contaré una cosa que te ayudará a redactar mejor tus páginas de ventas y tu curriculum',
    keywords: [
      'Copywriting',
      'Copywriter',
      'Como vender por internet',
      'Como redactar una página de ventas',
      'Escritura persuasiva',
      'Redacción publicitaria',
      'Newsletter diaria',
    ],
    authors: [{ name: 'Maria Lipiz', url: 'https://www.miraencomentarios.com' }],
    robots: 'index, follow',
  openGraph: {
    title: 'Maria Lipiz | Copywriter',
    description:
      'Aquí te contaré una cosa que te ayudará a redactar mejor tus páginas de ventas y tu curriculum',
    url: 'https://www.miraencomentarios.com/sobremi',
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

export default function Sobremi() {
  return (
    <main className="flex flex-col items-start justify-start px-6 sm:px-12 lg:px-52 py-12 gap-5">

      

        <h1 className="text-4xl sm:text-5xl font-bold mb-6 ">
        María Lípiz
      </h1>
      <h2 className="text-2xl sm:text-3xl max-w-3xl font-semibold mb-6">
        Copywriter. <span className="text-red-600">Persona no domesticada </span>
      </h2>

      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Te voy a contar una reflexión curiosa que probablemente te parecerá una gilipollez y quizás no entenderás, pero que si 
        lees con atención te servirá para redactar mejor tus páginas de ventas, tu curriculum y cualquier descripción 
        sobre ti o sobre un producto.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        También vale para más cosas, pero esas <strong>te las cuento como regalo por suscribirte a mi email diario</strong>, que sinó me lío a hablar y no 
        acabamos nunca. También te hablaré de Juan, un chico que me dio like en Tinder y del que podemos aprender 
        muchas cosas.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Que si, que me lio.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Empiezo.
      </p>
      
      
    
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        El otro día estaba leyendo cosas aleatorias por internet, como hago cada día desde que mi prima segunda me compró 
        mi primer movil con acceso a internet. 
        Me picó la curiosidad y decidí buscar información sobre criaderos 
        de perros. Estos lugares a los que vas y compras el perro que más te guste.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        No me preguntes porqué.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Mirando los perros que tenían en uno de los criaderos, vi que cada uno venía acompañado de una ficha.
        Una ficha que hablaba sobre todas las caracteristicas del animal.
      </p>
     
      
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Caracteristicas como su raza, su color, su caracter, su origen, su edad, las cualidades de su raza, su estado 
        de salud y cosas así.
      </p>

      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Se supone que esa ficha te da la información suficiente para conocer y evaluar al animal,
        y después, tomar una decisión. Si lo adoptabas o no. Te da la capacidad para decidir si era digno de ocupar un lugar en tu casa.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Joder.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        No se tú, pero yo hubiese preferido que me dijesen que Luna, la pastora alemana, era capaz de abrir 
        puertas con la pata, oler si un invitado entraba en mi casa con maria en el bolsillo y que un 
        día se comio una zapatilla y dejo el sofá echo mierda despues de haber vomitado trocitos de caucho. No se. 
      </p>
       <p className="text-base sm:text-lg max-w-3xl font-normal">
        Pero bueno, que eso no fue lo que pasó. En su ficha no ponia eso.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Si lo piensas, un curriculum no es muy diferente. 
      </p>
      
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Redactas una retahila de caracteristicas sobre ti, como 
        producto, no como persona. Y lo redactas así bonito, en forma de lista, con sus puntos, guiones y todo, 
        no sea que no pase el filtro ATS y te vayas a quedar fuera de una empresa donde te van a tratar como a un bot 
        especialista en hacer PowerPoints. 
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Luego, le das el poder a un tio de recursos humanos que no tiene la capacidad de entender lo que haces para decidir si eres digno, si mereces un sitio en su empresa, 
        si eres un candidato apto o debes ser despreciado.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Yo no soy Luna. No quiero que nadie lea una ficha sobre mí. Muchos menos escribirla yo. Tampoco me gusta la idea de comprar perros.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-semibold">
        ¿Por qué te cuento esto?
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Porque en esta sección no me convertiré en una lista de características.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Dicen los de marketing que debo decir algo que llame mucho la atención. Algo memorable, que haga llorar 
        hasta a las cebollas, para que tú, como lector, te enamores de mí.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Y luego de lo que hago.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Después, debo contarte algo sobre lo comprometida que estoy contigo, mi larga trayectoria, 
        mis años de experiencia y lo bien que hago el pino puente sin manos y sin dientes. Mentira, no hago el pino puente. 
      
      </p>
      
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Gilipolleces varias para que compres algo y me des tu dinero, ya sabes. Pero como te dije antes, no soy Luna, así 
        que no haré eso.
      </p>
      
      <p className="text-base sm:text-lg max-w-3xl font-normal">
       Con esta reflexión, ya te he contado lo más importante que debes saber sobre mí. A parte de eso, soy copywriter, pero eso es otra historia.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Ahora me iré, que me esperan mis suegros para cenar y sino voy corriendo me van a dejar sin cena y me da pereza ponerme a cocinar.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        Puedes apuntarte a mi correo diario, y ser una persona. Es gratis.
      </p>
      <p className="text-base sm:text-lg max-w-3xl font-normal">
        También puedes ser un Luna y dejarte domesticar.
      </p>
      

      
        
        

      <SubscribeForm />
    
      
    </main>
  );
}