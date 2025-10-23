// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// utils
const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const escapeHtml = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const FACTURACION_ALLOW = new Set([
  '0-50.000',
  '50.000-100.000',
  '100.000-500.000',
  'mas de 500.000',
]);

const MOTIVOS_ALLOW = new Set([
  'tengo muchos clientes tocapelotas',
  'la publicidad que hago no tira',
  'quiero subir mis precios',
  'quiero tener más tiempo para mi',
  'quiero poder escoger a mis clientes',
  'quiero ser el referente de mi sector y todo lo anterior',
  'ni idea, solo quiero saber de que va esto',
]);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      honey = '',
      nombre = '',
      empresa = '',
      email = '',
      telefono = '',
      facturacion = '',
      descripcion = '',
      motivos = [],
      privacy = false,
    } = body || {};

    // honeypot
    if (String(honey).trim() !== '') return NextResponse.json({ ok: true });

    // validaciones
    if (
      !nombre || !empresa || !email || !telefono || !descripcion || !privacy ||
      !isEmail(String(email)) ||
      !FACTURACION_ALLOW.has(String(facturacion))
    ) {
      return NextResponse.json({ ok: false, error: 'Datos inválidos' }, { status: 400 });
    }

    const motivosList: string[] = Array.isArray(motivos) ? motivos.map(String) : [];
    const motivosValid = motivosList.filter(m => MOTIVOS_ALLOW.has(m));

    const subject = `Nuevo lead — ${nombre} (${empresa})`;

    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;font-size:14px;line-height:1.6">
        <h2 style="margin:0 0 8px 0">Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Facturación anual:</strong> ${escapeHtml(facturacion)}</p>

        <p><strong>¿Qué hace su empresa?</strong></p>
        <pre style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px">${escapeHtml(descripcion)}</pre>

        <p><strong>Motivos para contratar copywriter:</strong></p>
        ${
          motivosValid.length
            ? `<ul>${motivosValid.map(m => `<li>${escapeHtml(m)}</li>`).join('')}</ul>`
            : '<p><em>Sin motivos marcados</em></p>'
        }

        <p><a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;margin-top:12px;padding:10px 14px;border:1px solid #000;border-radius:12px;text-decoration:none;color:#000">Responder a este lead</a></p>
      </div>
    `;

    // From del subdominio verificado en Resend
    const from = 'Contacto Web <info@copy.miraencomentarios.com>';

    await resend.emails.send({
      from,
      to: ['maria@miraencomentarios.com'],
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: 'Error interno' }, { status: 500 });
  }
}
