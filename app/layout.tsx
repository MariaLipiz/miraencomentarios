import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Regular, Medium, SemiBold, Bold
});

// Metadata
export const metadata: Metadata = {
  title: 'Escribe. Liga. Vende | Copywriter',
  description:
    'Cada día un email para ayudarte a ligar más y mejor sin parecer subnormal en el intento.',
  keywords: [
    'Técnicas de seducción',
    'Como ligar',
    'Como follar más',
    'Copywriting',
    'Copywriter',
    'Escritura persuasiva',
    'Redacción publicitaria',
  ],
  authors: [{ name: 'Maria Lipiz', url: 'https://www.escribeligavende.com' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Escribe. Liga. Vende | Copywriter',
    description:
      'Cada día un email para ayudarte a ligar más y mejor sin parecer subnormal en el intento',
    url: 'https://www.escribeligavende.com',
    siteName: 'Escribe. Liga. Vende',
    images: [
      {
        url: 'https://escribeligavende.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Escribe. Liga. Vende | Copywriter',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
