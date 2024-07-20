export interface Topic {
  id: number;
  name: string;
  slug: string;
}

/**
 * Macro areas in which the categories are grouped.
 */
export const topics: Topic[] = [
  {
    id: 1,
    name: 'Gelateria',
    slug: 'gelateria'
  },
  {
    id: 2,
    name: 'Caffetteria',
    slug: 'caffetteria'
  },
  {
    id: 3,
    name: 'Aperitivo',
    slug: 'aperitivo'
  },
  {
    id: 4,
    name: 'Bibite & Drinks',
    slug: 'bibite-drinks'
  },
  {
    id: 5,
    name: 'Cocktails & Liquori',
    slug: 'cocktails-liquori'
  }
];
