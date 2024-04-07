import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import './globals.css';
import { Dancing_Script, Nunito_Sans, Rozha_One } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Crema e Cioccolato - Barletta',
  description: 'La gelateria dai gusti più folli e golosi di Barletta'
};

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans'
});

const rhozaOne = Rozha_One({
  subsets: ['latin'],
  variable: '--font-rhoza-one',
  weight: ['400']
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script'
});

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
