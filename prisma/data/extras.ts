import { Prisma } from '@prisma/client';

export const extraItems: Prisma.ExtraItemCreateInput[] = [
  {
    label: 'Panna',
    slug: 'panna-piccola',
    price: 0.5,
    category: {
      connect: { slug: 'gelati' }
    }
  },
  {
    label: 'Panna',
    slug: 'panna-grande',
    price: 1,
    category: {
      connect: { slug: 'gelati-maxi' }
    }
  },
  {
    label: 'Creme assortite',
    slug: 'creme',
    price: 0.5,
    category: {
      connect: { slug: 'dolci-e-paste' }
    }
  },
  {
    label: 'Smarties',
    slug: 'smarties',
    price: 0.5,
    category: {
      connect: { slug: 'dolci-e-paste' }
    }
  },
  {
    label: 'Granella nocciola',
    slug: 'granella-nocciola',
    price: 0.5,
    category: {
      connect: { slug: 'dolci-e-paste' }
    }
  },
  {
    label: 'Farina di cocco',
    slug: 'farina-di-cocco',
    price: 0.5,
    category: {
      connect: { slug: 'dolci-e-paste' }
    }
  }
];
