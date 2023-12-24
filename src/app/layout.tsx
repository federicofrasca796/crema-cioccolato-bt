import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import { Dancing_Script, Nunito_Sans, Rozha_One } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans'
});
export const rhozaOne = Rozha_One({
  subsets: ['latin'],
  variable: '--font-rhoza-one',
  weight: ['400']
});
export const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script'
});

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
    <html lang='it' className={nunitoSans.className}>
      <body className='bg-babyPowder text-smokyBrown-900'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
