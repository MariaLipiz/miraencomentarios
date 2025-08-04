import Script from 'next/script';

export default function Producto() {
  return (
    <>
      <Script
        src="https://miraencomentarios.kit.com/commerce.js"
        strategy="afterInteractive"
      />

      <main className="flex flex-col items-start justify-center px-6 sm:px-12 lg:px-52 py-6 gap-5">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 ">
                Todo el mundo quiere ganar dinero pero solo unos pocos valientes están dispuestos a leer un email semanal 
                para conseguirlo
              </h1>
              <p className="text-2xl sm:text-3xl font-bold mb-6 text-red-600">
              ATENCIÓN: ACCESO CERRADO
              </p>
              
        
              <p className="text-base sm:text-lg font-normal">
              Por eso, <strong className="text-red-500">es muy probable que no te suscribas a mi email semanal.</strong>
              </p>
              <p className="text-base sm:text-lg font-normal">
              Aun así, te contaré una cosa que puedes hacer cada día para aumentar los ingresos de tu negocio 
              y que en un 99,99% de los casos funcionará en caso de que tu producto no sea una mierda.
              </p>
              
              <p className="text-base sm:text-lg font-normal">
              Pero primero te explico. 
              </p>
              <p className="text-base sm:text-lg font-normal">
              En este email semanal puedes encontrar cosas como:
              </p>
              <ul className="list-disc pl-6 text-base sm:text-lg font-normal space-y-4 my-6">
                <li>Un truco de ventas <strong>muy efectivo</strong> que he aplicado en mis emails anteriores y del que no te has dado cuenta</li>
                <li><strong>Lo que aprendí sobre copywriting</strong> de una persona que conocí en la empresa para la que trabajaba y que era un gilipollas</li>
                <li>Un <strong>analisis de una página web (que puede ser la tuya)</strong> y que tú mismo podrás aplicar para vender más</li>
                <li>Un <strong>error</strong> que cometí durante años mientras emprendía y que me costó años darme cuenta de que estaba matando mis ventas</li>
                <li>Un <strong>mensaje sencillo</strong> que puedes enviar para recuperar a un cliente que probablemente no te fuese a comprar y que haga que te compre con una tasa de éxito muy alta</li>
                
            </ul>
              <p className="text-base sm:text-lg font-normal">
              Este email te lo enviaré cada semana el viernes y contendrá información de alto valor que podrás aplicar a tu negocio sea cual sea 
              y que hará que dejes de hacer cosas como estas: 
              </p>
              <ul className="list-disc pl-6 text-base sm:text-lg font-normal space-y-4 my-6">
                <li><strong>Comprar plantillas</strong> inutiles para páginas webs y anuncios que te prometen hacerte rico en 30 días laborables</li>
                <li><strong>Perseguir a los clientes</strong> para que te compren</li>
                <li><strong>Invertir cantidades importantes de dinero</strong> en publicidad</li>
                <li><strong>Copiar textos que no sirven de tu competencia</strong> para intentar destacar más y terminar no destacando nada</li>
                <li><strong>Perder tiempo haciendo seguimiento</strong> a clientes que nunca te van a comprar</li>
                <li><strong>Gastarte mucho dinero</strong> en diseños bonitos para tu web que no aportan nada al cliente</li>
                
                </ul>
            
            <p className="text-base sm:text-lg font-normal">
              Por cierto, ¿Sabes que puedes hacer cada día para aumentar los ingresos de tu negocio? 
              </p>
              <p className="text-base sm:text-lg font-normal">
              Crear una audiencia y escribirle todos los días para vender. Así de sencillo.
              </p>
              <p className="text-base sm:text-lg font-normal">
              Bien.
              </p>
              <p className="text-base sm:text-lg font-normal">
              Este email semanal tendrá un precio de 25€/mes.   
              </p>
              <p className="text-base sm:text-lg font-normal">
              Es decir, por 25€ al mes te envio un email cada semana con información de valor para hacer tu negocio y tu producto 
              más atractivo y hacer que más gente te compre.    
              </p>
              <p className="text-base sm:text-lg font-normal">
              Este precio solo subirá, y si te suscribes ahora pagarás <strong>25€/mes para siempre. </strong> 
              </p>
              
            <div className="flex flex-col items-center justify-center gap-4 mb-10">
              
        
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center my-4">
        Lección semanal de copywriting para vender más y hacer tu negocio más atractivo <span className="text-red-800 text-4xl">25€/mes</span>
      </h2>
        {/*
            <a
                href="https://miraencomentarios.kit.com/products/leccion-semanal-de-copywriting"
                data-commerce
                className="max-w-lg px-8 py-6 text-center rounded-lg font-medium text-white text-xl bg-red-600 hover:bg-red-500 transition-colors duration-200 my-6"
            >
                Suscribirme a tu email semanal por 25€/mes
            </a>
            */}
            <p className="text-lg sm:text-xl font-normal text-gray-600 text-center">
                
        Impuestos incluidos. Cancela cuando quieras.
      </p>
      <p className="text-lg sm:text-xl font-normal text-gray-600 text-center">
        *Pago seguro con tarjeta*
      </p>
      </div>
        </main>
        
    </>
  );
}