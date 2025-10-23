export const metadata = {
  title: 'Confirma tu email',
    
  authors: [{ name: 'Maria Lipiz', url: 'https://www.miraencomentarios.com' }],
    
  
  
}

export default function SuccessPage() {
  return (
    <main className="flex flex-col items-start justify-start px-6 sm:px-12 lg:px-52 py-12 gap-12 text-base sm:text-xl lg:text-2xl font-light">      <h1 className="text-4xl sm:text-5xl font-bold mb-6 mb-6">Acabas de ser...</h1>
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 mb-6">...</h1>
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 mb-6">¡RECHAZADO!</h1>
      
      <p>
        Mira, te voy a ser sincera.
      </p>
      <p>
        Creí que la herramienta de email que tenía era una mierda y no permitia correos de confirmación, 
        pero como la vida es buena y el mundo es un lugar justo resulta que sí. Así que debes confirmar que de verdad quieres entrar.
      </p>
      
      <p>
        Es sencillo.
      </p>
      <p>
        Vas a tu bandeja de entrada, haces click en el email que acabas de recibir y ya lo tienes. 
        Cuando confirmes tu correo, pues empezarás a recibir mis correos. No tiene más misterio.
      </p>

      <p>
        En estos correos, como te puedes imaginar, hablaremos como adultos y no encontraras prompts de ChatGPT ni cosas similares. Te lo digo por si 
        todavía tenías alguna duda.
      </p>


<h2 className="text-xl sm:text-2xl font-semibold my-6">
        Posibles problemas técnicos  
      </h2>
      <p>
        Si no tienes el email en tu bandeja de entrada habitual puede ser que esté:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>En promociones</li>
        <li>En spam</li>
        <li>Que directamente no lo hayas recibido</li>
      </ul>

      <p>
      En los dos primeros casos, mueve el email a tu bandeja de entrada y agrégame como contacto.
      </p>

      <p>
      En el tercero lamento decirte que todo ha fallado.
      </p>

      <p>
      La vida es así.
      </p>
      

      
      

      

      

    </main>
  );
}
