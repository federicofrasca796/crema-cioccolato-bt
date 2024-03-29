import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { dancingScript, nunitoSans, rhozaOne } from '@/utils/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crema e Cioccolato - Barletta',
  description: 'La gelateria dai gusti più folli e golosi di Barletta'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='it'
      className={`${nunitoSans.variable} ${rhozaOne.variable} ${dancingScript.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
