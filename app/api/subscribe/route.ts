import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    // Añadir al audience
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    // Enviar email de bienvenida
    await resend.emails.send({
      from: 'maria@escribeligavende.com',
      to: email,
      subject: '🔥 Bienvenido a Escribe, liga y vende 🔥',
      html: `
        <div style="font-size: 1.125rem; line-height: 1.6; color: #0E0E0E; background-color: #ffffff; padding: 20px;">
          <p>¡Ey!</p>
          <p>Acabas de apuntarte a <strong>Escribe, liga y vende</strong>, el lugar donde aprenderás a escribir para follar, vender y, de paso, reírte un rato.</p>
          
          <p>Aquí no vas a encontrar:</p>
          <ul>
            <li>❌ Frases motivacionales vacías</li>
            <li>❌ Promesas de millonario en 30 días</li>
            <li>❌ Coaching barato de postureo</li>
          </ul>
          
          <p>Aquí vas a encontrar:</p>
          <ul>
            <li>✅ Ideas crudas, directas y útiles</li>
            <li>✅ Experimentos reales que hice yo misma</li>
            <li>✅ Emails que te harán pensar (o cabrearte)</li>
          </ul>
    
          <p>Prepárate. Voy a ligar contigo, y sí, también te voy a vender algo.</p>
          <p>Un abrazo (o un tortazo, según el día),<br><strong>María</strong></p>
        </div>
      `,
      text: `
    ¡Ey!
    
    Acabas de apuntarte a "Escribe, liga y vende", el lugar donde aprenderás a escribir para follar, vender y, de paso, reírte un rato.
    
    Aquí no vas a encontrar:
    ❌ Frases motivacionales vacías
    ❌ Promesas de millonario en 30 días
    ❌ Coaching barato de postureo
    
    Aquí vas a encontrar:
    ✅ Ideas crudas, directas y útiles
    ✅ Experimentos reales que hice yo misma
    ✅ Emails que te harán pensar (o cabrearte)
    
    Prepárate. Voy a ligar contigo, y sí, también te voy a vender algo.
    
    Un abrazo (o un tortazo, según el día),
    María
    `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in subscribe:', error);
    return NextResponse.json({ error: 'Failed to subscribe or send email' }, { status: 500 });
  }
}
