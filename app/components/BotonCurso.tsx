// components/ConvertkitButton.tsx
"use client";
import Script from "next/script";

export default function ConvertkitButton() {
  return (
    <>
      {/* Botón que activa la compra */}
      <a
        className="px-6 py-3 text-center bg-red-600 text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
        href="https://buy.stripe.com/5kQ3cx77CapO7Aa3Ob9IQ01"
        data-commerce
      >
        Comprar esta formación por 70€ con un mes de soporte ilimitado incluido (Pago seguro con tarjeta)
      </a>
    </>
  );
}
