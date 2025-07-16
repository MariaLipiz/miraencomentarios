'use client';

import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      window.location.href = '/success';
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-3 rounded w-full max-w-sm"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
      </button>
      {status === 'error' && <p className="text-red-500">Algo salió mal. Intenta de nuevo.</p>}
    </form>
  );
}
