// TODO - Change file type to .ts, no need for .tsx

export interface Topic {
  id: number;
  name: string;
  slug: string;
  icon?: string | React.ReactNode;
  order?: number;
}

/**
 * Macro areas in which the categories are grouped.
 */
export const topics: Topic[] = [
  {
    id: 1,
    name: 'Gelateria',
    slug: 'gelateria',
    // icon: '🍦',
    order: 1
  },
  {
    id: 2,
    name: 'Caffetteria',
    slug: 'caffetteria',
    // icon: '☕️',
    order: 2
  },
  {
    id: 4,
    name: 'Bibite',
    slug: 'bibite',
    // icon: '🥤',
    order: 3
  },
  {
    id: 3,
    name: 'Aperitivo',
    slug: 'aperitivo',
    // icon: '🥂',
    order: 4
  },
  {
    id: 6,
    name: 'Food & Snacks',
    slug: 'food-e-snacks',
    // icon: '🍸',
    order: 4
  },
  {
    id: 5,
    name: 'Birre & Liquori',
    slug: 'birre-e-liquori',
    // icon: '🍸',
    order: 5
  }
];
