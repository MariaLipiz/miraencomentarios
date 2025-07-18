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
      from: 'María Lípiz <maria@escribeligavende.com>',
      to: email,
      subject: 'Oye tú',
      html: `
        <div style="font-size: 1.125rem; line-height: 1.6; color: #0E0E0E; background-color: #ffffff; padding: 20px;">
          <p>Igual te has apuntado para insultarme.</p>
          <p>Si es así, arriba tienes el buzón de insultos.</p>
          <p>No me conoces de nada.</p>
          <p>Ni yo a ti.</p>
          <p>Quizas eres hombre/mujer/gay/rojo.</p>
          
          <p>O lo que es peor:</p>

          <p>No te comes una rosca y te dedicas a culpar al mundo por tu situación y a llorar como un princeso.</p>

          <p>Te compadezco.</p>

          <p>Bueno, en realidad no.</p>

          <p>En realidad me la pela.</p>

          <p>Para eso estás aquí.</p>

          <p>Para dejar de llorar.</p>

          <p>Porque estás aquí para eso, ¿No?</p>

          <p>En fín, que me lío.</p>

          <p>Tengo algo para ti.</p>

          <p>Algo que te puede servir si eres hombre/mujer/gay/rojo</p>

          <p>También sirve si quieres encontrar personas aptas para follar, encontrar pareja o buscar una suegra mejor.</p>

          <p>A mí me fue de puta madre para no volver a toparme con un casi algo.</p>

          <p>Imagínate.</p>
          
          <p style="font-size: 0.75rem; color: #888888; margin-top: 20px;">
          Si no quieres recibir más emails míos, puedes 
          <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #888888; text-decoration: underline;">
          darte de baja aquí
          </a>.
          </p>

          
        </div>
      `,
      text: `
    Igual te has apuntado para insultarme.

Si es así, arriba tienes el buzón de insultos.

No me conoces de nada.

Ni yo a ti.

Quizas eres hombre/mujer/gay/rojo.

O lo que es peor:

No te comes una rosca y te dedicas a culpar al mundo por tu situación.

Te compadezco.

Bueno, en realidad no.

Me la pela completamente.

Para eso estás aquí.

Para dejar de llorar.

Porque estás aquí para eso, ¿No?

En fin, que me lío.

Tengo algo para ti.

Algo que te puede servir si eres hombre/mujer/gay/rojo.

También sirve si quieres encontrar personas aptas para follar, encontrar pareja o buscar una suegra mejor.

A mí me fue de puta madre para no volver a toparme con un casi algo.

SABIDURÍA POPULAR: https://escribeligavende.com/frase-de-la-muerte

Imagínate.

    `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in subscribe:', error);
    return NextResponse.json({ error: 'Failed to subscribe or send email' }, { status: 500 });
  }
}
