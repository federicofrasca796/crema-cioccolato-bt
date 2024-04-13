import { StaticImageData } from 'next/image';
import IcecreamSweets from '../../public/assets/icecream+sweets.webp';
// import CoffeeBrioches from '../../public/assets/coffee+brioches.webp';
// import AperitivoCocktails from '../../public/assets/aperitivo+cocktails.webp';
// import BibiteAnalcolici from '../../public/assets/bibite+analcolici.webp';

export interface MenuItem {
  allergens?: string[];
  available: boolean;
  category: Category['id'];
  description?: string;
  id: number;
  image?: string;
  ingredients?: string[];
  label: string;
  price: number;
  slug: string;
}

export interface ExtraItem extends Omit<MenuItem, 'category'> {}

export interface Category {
  id: number;
  name: string;
  image: string | StaticImageData;
  slug: string;
  highlight?: boolean;
  topics: Topic['id'][];
  extras?: ExtraItem[];
  // items: MenuItem[];
}

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

/**
 * Categories in which the Menu Items are grouped. Categories are part of topics.
 */
export const categories: Category[] = [
  {
    id: 1,
    name: 'Gelati & Milkshake',
    image: IcecreamSweets,
    slug: 'gelati-milkshake',
    highlight: true,
    topics: [1],
    extras: [
      {
        id: 1,
        label: 'Panna',
        slug: 'panna',
        price: 0.5,
        allergens: ['Lactose', 'Soja'],
        available: true,
        image: '',
        ingredients: ['Milk', 'Sugar']
      },
      {
        id: 2,
        label: 'Cioccolato fuso',
        slug: 'cioccolato-fuso',
        price: 0.5,
        allergens: ['Gluten', 'Lactose', 'Peanut', 'Soja'],
        available: true,
        image: '',
        ingredients: []
      },
      {
        id: 3,
        label: 'Cono versione "cialda"',
        slug: 'cono-cialda',
        price: 0.5,
        allergens: ['Gluten', 'Peanut'],
        available: true,
        image: '',
        ingredients: []
      }
    ]
  },
  {
    id: 2,
    name: 'Caffetteria',
    image: IcecreamSweets,
    slug: 'caffetteria',
    highlight: true,
    topics: [2],
    extras: []
  },
  {
    id: 3,
    name: 'Taglieri',
    image: IcecreamSweets,
    slug: 'taglieri',
    highlight: true,
    topics: [3],
    extras: []
  },
  {
    id: 4,
    name: 'Cocktails',
    image: IcecreamSweets,
    slug: 'cocktails',
    highlight: true,
    topics: [5],
    extras: []
  },
  {
    id: 5,
    name: 'Amari e liquori',
    image: IcecreamSweets,
    slug: 'amari-liquori',
    highlight: true,
    topics: [5],
    extras: []
  },
  {
    id: 6,
    name: 'Birre',
    image: IcecreamSweets,
    slug: 'birre',
    highlight: true,
    topics: [5],
    extras: []
  },
  {
    id: 7,
    name: 'Pasticceria',
    image: IcecreamSweets,
    slug: 'birre',
    highlight: true,
    topics: [1],
    extras: []
  },
  {
    id: 8,
    name: 'Rosticceria',
    image: IcecreamSweets,
    slug: 'taglieri',
    highlight: true,
    topics: [3],
    extras: []
  }
];

/**
 * List of menu items
 */
export const items: MenuItem[] = [
  {
    id: 1,
    label: 'Gelato artigianale Piccolo',
    description: 'Cono o coppetta | 1 gusto',
    price: 1.7,
    allergens: ['Gluten', 'Lactose', 'Peanut', 'Soja'],
    available: true,
    image: '',
    slug: 'gelato-artigianale-piccolo',
    category: 1,
    ingredients: ['Milk', 'Sugar', 'Eggs', 'Flour', 'Water', 'Salt', 'Yeast']
  },
  {
    id: 2,
    label: 'Gelato artigianale Medio',
    description: 'Cono o coppetta | 2 gusti',
    price: 2.7,
    allergens: ['Gluten', 'Lactose', 'Peanut', 'Soja'],
    available: true,
    image: '',
    slug: 'gelato-artigianale-medio',
    category: 1,
    ingredients: ['Milk', 'Sugar', 'Eggs', 'Flour', 'Water', 'Salt', 'Yeast']
  },
  {
    id: 3,
    label: 'Gelato artigianale Grande',
    description: 'Cono o coppetta | 3 gusti',
    price: 3.7,
    allergens: ['Gluten', 'Lactose', 'Peanut', 'Soja'],
    available: true,
    image: '',
    slug: 'gelato-artigianale-grande',
    category: 1,
    ingredients: ['Milk', 'Sugar', 'Eggs', 'Flour', 'Water', 'Salt', 'Yeast']
  },
  {
    id: 4,
    label: 'Gelato artigianale MAXI',
    description: 'Cono o coppetta | Tutti i gusti che riusciamo a farci stare!',
    price: 5,
    allergens: ['Gluten', 'Lactose', 'Peanut', 'Soja'],
    available: true,
    image: '',
    slug: 'gelato-artigianale-grande',
    category: 1,
    ingredients: ['Milk', 'Sugar', 'Eggs', 'Flour', 'Water', 'Salt', 'Yeast']
  },
  {
    id: 5,
    label: 'Spritz',
    description: 'Aperol | Campari | Misto',
    price: 4,
    allergens: ['Alcol'],
    available: true,
    image: '',
    slug: 'spritz',
    category: 3,
    ingredients: ['Bitter', 'Soda', 'Prosecco', 'Ice']
  },
  {
    id: 6,
    label: 'Caffè espresso',
    price: 1.2,
    available: true,
    image: '',
    slug: 'caffe-espresso',
    category: 2
  },
  {
    id: 7,
    label: 'Caffè freddo',
    price: 1.8,
    available: true,
    image: '',
    slug: 'caffe-freddo',
    category: 2
  },
  {
    id: 8,
    label: 'Cappuccino',
    price: 1.4,
    available: true,
    image: '',
    slug: 'cappuccino',
    category: 2
  },
  {
    id: 9,
    label: 'Espressino',
    price: 1.3,
    available: true,
    image: '',
    slug: 'espressino',
    category: 2
  },
  {
    id: 10,
    label: 'Amaro del capo',
    price: 3,
    available: true,
    image: '',
    slug: 'amaro-del-capo',
    category: 5
  },
  {
    id: 11,
    label: 'Limoncello',
    price: 2.5,
    available: true,
    image: '',
    slug: 'limoncello',
    category: 5
  },
  {
    id: 12,
    label: 'Birra IPA',
    price: 5,
    available: true,
    image: '',
    slug: 'birra-ipa',
    category: 6
  },
  {
    id: 13,
    label: 'Birra Moretti',
    price: 2.5,
    available: true,
    image: '',
    slug: 'birra-moretti',
    category: 6
  },
  {
    id: 14,
    label: 'Birra Peroni',
    price: 2.5,
    available: true,
    image: '',
    slug: 'birra-peroni',
    category: 6
  },
  {
    id: 15,
    label: 'Birra Nastro Azzurro',
    price: 3,
    available: true,
    image: '',
    slug: 'birra-nastro-azzurro',
    category: 6
  },
  {
    id: 16,
    label: 'Tagliere misto piccolo',
    description: 'Assortimento di salumi e formaggi',
    price: 4.5,
    available: true,
    image: '',
    slug: 'tagliere-piccolo',
    category: 3
  },
  {
    id: 17,
    label: 'Tagliere misto medio',
    description: 'Assortimento di salumi e formaggi',
    price: 4.5,
    available: true,
    image: '',
    slug: 'tagliere-medio',
    category: 3
  },
  {
    id: 18,
    label: 'Tagliere misto grande',
    description: 'Assortimento di salumi e formaggi',
    price: 4.5,
    available: true,
    image: '',
    slug: 'tagliere-grande',
    category: 3
  },
  {
    id: 19,
    label: 'Tagliere salumi',
    description: 'Assortimento di salumi nostrani',
    price: 4.5,
    available: true,
    image: '',
    slug: 'tagliere-salumi',
    category: 3
  },
  {
    id: 20,
    label: 'Tagliere formaggi',
    description: 'Assortimento di formaggi nostrani',
    price: 4.5,
    available: true,
    image: '',
    slug: 'tagliere-formaggi',
    category: 3
  },
  {
    id: 21,
    label: 'Cornetto vuoto',
    price: 1.2,
    available: true,
    image: '',
    slug: 'cornetto-vuoto',
    category: 7
  },
  {
    id: 22,
    label: 'Cornetto ripieno',
    description: 'Gusti assortiti',
    price: 1.4,
    available: true,
    image: '',
    slug: 'cornetto-ripieno',
    category: 7
  },
  {
    id: 23,
    label: 'Krapfen',
    description: 'Cioccolato | Crema',
    price: 1.6,
    available: true,
    image: '',
    slug: 'krapfen',
    category: 7
  }
];
