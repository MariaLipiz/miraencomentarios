import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Regular, Medium, SemiBold, Bold
});

// Metadata
export const metadata = {
  title: 'Maria Lipiz | Me gusta ganar dinero y ayudar a los demás a hacerlo',
  description:
    'Cada día un email para ayudarte a vender más y ser más libre',
    keywords: [
      'Estrategia comercial',
      'Estratega comercial',
      'Consultoría comercial',
      'Copywriter',
      'Como vender por internet',
      'Como ganar dinero en internet',
      'Escritura persuasiva',
      'Redacción publicitaria',
      'Emprendimiento',
    ],
    authors: [{ name: 'Maria Lipiz', url: 'https://www.miraencomentarios.com' }],
    robots: 'index, follow',
  openGraph: {
    title: 'Maria Lipiz | Me gusta ganar dinero y ayudar a los demás a hacerlo',
    description:
      'Cada día un email para ayudarte a vender más y ser más libre',
    url: 'https://www.miraencomentarios.com',
    siteName: 'Maria Lipiz Copywriter',
    images: [
      {
        url: 'https://miraencomentarios.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maria Lipiz | Me gusta ganar dinero y ayudar a los demás a hacerlo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: [
    { url: '/favicon.ico' },                      // clásico
    { url: '/favicon.svg', type: 'image/svg+xml' } // vectorial
  ],
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
        <Footer />
      </body>
    </html>
  );
}
