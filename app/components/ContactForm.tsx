'use client';

import { useState, FormEvent } from 'react';

type Props = { className?: string };

const FACTURACION_OPTS = [
  '0-50.000',
  '50.000-100.000',
  '100.000-500.000',
  'mas de 500.000',
] as const;

const MOTIVOS = [
  'tengo muchos clientes tocapelotas',
  'la publicidad que hago no tira',
  'quiero subir mis precios',
  'quiero tener más tiempo para mi',
  'quiero poder escoger a mis clientes',
  'quiero ser el referente de mi sector y todo lo anterior',
  'ni idea, solo quiero saber de que va esto',
] as const;

// Util para serializar errores sin usar `any`
function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === 'string') return err;
  try {
    return JSON.stringify(err);
  } catch {
    return 'Error de envío';
  }
}

export default function ContactForm({ className = '' }: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const motivos = fd.getAll('motivos').map(String);

    const payload = {
      honey: fd.get('honey') || '',
      nombre: String(fd.get('nombre') || ''),
      empresa: String(fd.get('empresa') || ''),
      email: String(fd.get('email') || ''),
      telefono: String(fd.get('telefono') || ''),
      facturacion: String(fd.get('facturacion') || ''),
      descripcion: String(fd.get('descripcion') || ''),
      motivos,
      privacy: fd.get('privacy') === 'on',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Error de envío');
      }
      setOk(true);
      form.reset();
    } catch (err: unknown) {
      setOk(false);
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={`w-full max-w-2xl grid grid-cols-1 gap-4 ${className}`}>
      {/* Honeypot anti-spam */}
      <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block text-lg sm:text-xl font-semibold mb-2">Nombre</label>
        <input
          name="nombre" required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label className="block text-lg sm:text-xl font-semibold mb-2">Empresa</label>
        <input
          name="empresa" required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-lg sm:text-xl font-semibold mb-2">Correo electrónico</label>
          <input
            type="email" name="email" required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="tucorreo@empresa.com"
          />
        </div>
        <div>
          <label className="block text-lg sm:text-xl font-semibold mb-2">Teléfono</label>
          <input
            name="telefono" required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="+34 6XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-lg sm:text-xl font-semibold mb-2">Facturación anual</label>
        <select
          name="facturacion" required defaultValue=""
          className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="" disabled>Selecciona un tramo</option>
          {FACTURACION_OPTS.map(op => <option key={op} value={op}>{op}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-lg sm:text-xl font-semibold mb-2">¿Qué hace tu empresa?</label>
        <textarea
          name="descripcion" required rows={5}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Cuentame de que va lo que haces"
        />
      </div>

      <div>
        <p className="block text-lg sm:text-xl font-semibold mb-2">
          ¿Por qué quieres contratar un copywriter? <span className="font-normal">(puedes marcar varias)</span>
        </p>
        <div className="grid grid-cols-1 gap-2">
          {MOTIVOS.map(m => (
            <label key={m} className="inline-flex items-start gap-2">
              <input type="checkbox" name="motivos" value={m} className="mt-2" />
              <span className="text-base sm:text-lg">{m}</span>
            </label>
          ))}
        </div>
      </div>

      <label className="inline-flex items-start gap-2 mt-2">
        <input type="checkbox" name="privacy" required className="mt-2" />
        <span className="text-base sm:text-lg">
          Acepto la <a href="/legal/privacidad" className="underline">Política de Privacidad</a>.
        </span>
      </label>

      <button
        type="submit" disabled={loading}
        className="rounded-2xl px-6 py-3 font-semibold shadow-sm border border-black hover:translate-y-[-1px] active:translate-y-[0] transition"
      >
        {loading ? 'Enviando…' : 'Enviar'}
      </button>

      {ok === true && (
        <p className="text-base sm:text-lg font-semibold text-green-700">
          Enviado. Te escribiré en un plazo breve (muy breve) de tiempo
        </p>
      )}
      {ok === false && (
        <p className="text-base sm:text-lg font-semibold text-red-700">
          {error || 'No se pudo enviar. Algo ha explotado.'}
        </p>
      )}
    </form>
  );
}
