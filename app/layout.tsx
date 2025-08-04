import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Regular, Medium, SemiBold, Bold
});

// Metadata
export const metadata = {
  title: 'Maria Lipiz | Copywriter',
  description:
    'Cada día un email para ayudarte a que las personas sientan cosas y compren lo que ofreces',
    keywords: [
      'Copywriting',
      'Copywriter',
      'Como vender por internet',
      'Como redactar una carta de ventas',
      'Escritura persuasiva',
      'Redacción publicitaria',
      'Newsletter diaria',
    ],
    authors: [{ name: 'Maria Lipiz', url: 'https://www.miraencomentarios.com' }],
    robots: 'index, follow',
  openGraph: {
    title: 'Maria Lipiz | Copywriter',
    description:
      'Cada día un email para ayudarte a que las personas sientan cosas y compren lo que ofreces',
    url: 'https://www.miraencomentarios.com',
    siteName: 'Maria Lipiz Copywriter',
    images: [
      {
        url: 'https://miraencomentarios.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maria Lipiz | Copywriter',
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
