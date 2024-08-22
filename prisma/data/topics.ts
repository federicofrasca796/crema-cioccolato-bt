import { Prisma } from '@prisma/client';

export const topics: Prisma.TopicCreateInput[] = [
  {
    name: 'Gelateria',
    slug: 'gelateria'
  },
  {
    name: 'Caffetteria',
    slug: 'caffetteria'
  },
  {
    name: 'Aperitivo',
    slug: 'aperitivo'
  },
  {
    name: 'Bibite & Drinks',
    slug: 'bibite-e-drinks'
  },
  {
    name: 'Cocktails & Liquori',
    slug: 'cocktails-e-liquori'
  }
];
