// TODO - Change file type to .ts, no need for .tsx

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
    slug: 'gelateria'
    // icon: '🍦'
  },
  {
    id: 2,
    name: 'Caffetteria',
    slug: 'caffetteria'
    // icon: '☕️'
  },
  {
    id: 4,
    name: 'Bibite',
    slug: 'bibite'
    // icon: '🥤'
  },
  {
    id: 3,
    name: 'Aperitivo',
    slug: 'aperitivo'
    // icon: '🥂'
  },

  {
    id: 5,
    name: 'Birre & Liquori',
    slug: 'birre-e-liquori'
    // icon: '🍸'
  }
];
