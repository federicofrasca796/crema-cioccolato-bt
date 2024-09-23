export interface Topic {
  id: number;
  name: string;
  slug: string;
  icon?: string | React.ReactNode;
}

/**
 * Macro areas in which the categories are grouped.
 */
export const topics: Topic[] = [
  {
    id: 1,
    name: 'Gelateria',
    slug: 'gelateria',
    icon: '🍦'
  },
  {
    id: 2,
    name: 'Caffetteria',
    slug: 'caffetteria',
    icon: '☕️'
  },
  {
    id: 3,
    name: 'Aperitivo',
    slug: 'aperitivo',
    icon: '🥂'
  },
  {
    id: 4,
    name: 'Bibite & Drinks',
    slug: 'bibite-drinks',
    icon: '🥤'
  },
  {
    id: 5,
    name: 'Cocktails & Liquori',
    slug: 'cocktails-liquori',
    icon: '🍸'
  }
];
