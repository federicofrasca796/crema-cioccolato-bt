/* Next fonts don't appear to currently support types */

import { Nunito_Sans, Rozha_One, Dancing_Script } from 'next/font/google';

export const nunitoSans = Nunito_Sans({
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
