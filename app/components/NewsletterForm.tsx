'use client';

import { useRef, useState } from 'react';

export default function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const email = form.email_address.value.toLowerCase();

    // Lista de alias prohibidos
    const bloqueados = ['info@', 'hola@', 'admin@', 'contacto@', 'ventas@', 'support@', 'administracion@', 'soporte@'];

    if (bloqueados.some(b => email.startsWith(b))) {
      setError('No uses esa mierda, mete tu correo personal.');
      return;
    }

    // Si pasa la validación, enviamos el formulario
    form.submit();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      action="https://app.kit.com/forms/8373690/subscriptions"
      method="post"
      className="max-w-md space-y-4"
    >
      <div className="flex">
        <input
          type="email"
          name="email_address"
          placeholder="Tu email más loco"
          required
          className="flex-1 px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-r-md hover:bg-gray-900"
        >
          Pues vale
        </button>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="text-sm text-gray-700">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="privacy"
            required
            className="mt-1"
          />
          <span>
            He leído y acepto la{' '}
            <a
              href="/politica-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              política de privacidad
            </a>
            .
          </span>
        </label>
      </div>
    </form>
  );
}
