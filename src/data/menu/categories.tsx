// TODO - Change file type to .ts, no need for .tsx
import { StaticImageData } from 'next/image';
import { Topic } from './topics';
import { MenuItem } from './items';
import IcecreamSweets from '../../../public/assets/icecream+sweets.webp';

export interface Category {
  id: number;
  name: string;
  image: string | StaticImageData;
  slug: string;
  highlight?: boolean;
  topics: Topic['id'][];
  extras?: ExtraItem[];
}

export interface ExtraItem extends Omit<MenuItem, 'category_id'> {}

export interface CategoryWithItems extends Category {
  items: MenuItem[];
}
/**
 * Categories in which the Menu Items are grouped. Categories are part of topics.
 */
export const categories: Category[] = [
  {
    id: 1,
    name: 'Gelati',
    image: IcecreamSweets,
    slug: 'gelati',
    highlight: true,
    topics: [1],
    extras: [
      {
        id: 1,
        label: 'Panna',
        slug: 'panna',
        price: 0.5,
        available: true,
        image: '',
        ingredients: []
      },
      {
        id: 2,
        label: 'Cioccolato fuso',
        slug: 'cioccolato-fuso',
        price: 0.5,
        available: true,
        image: '',
        ingredients: []
      }
    ]
  },
  {
    id: 2,
    name: 'Coppe e farciture gelato',
    image: IcecreamSweets,
    slug: 'coppe-e-farciture-gelato',
    highlight: true,
    topics: [1],
    extras: [
      {
        id: 1,
        label: 'Panna',
        slug: 'panna',
        price: 1,
        available: true,
        image: '',
        ingredients: []
      },
      {
        id: 2,
        label: 'Cioccolato fuso',
        slug: 'cioccolato-fuso',
        price: 1,
        available: true,
        image: '',
        ingredients: []
      }
    ]
  },
  {
    id: 3,
    name: "Caffe'",
    image: IcecreamSweets,
    slug: 'caffe',
    highlight: false,
    topics: [2],
    extras: []
  },
  {
    id: 5,
    name: 'Té e tisane',
    image: '',
    slug: 'te-tisane',
    highlight: false,
    topics: [2],
    extras: []
  },
  {
    id: 6,
    name: 'Dolci e paste',
    image: '',
    slug: 'dolci-e-paste',
    highlight: false,
    topics: [2],
    extras: [
      {
        id: 1,
        label: 'Creme assortite',
        slug: 'creme-assortite',
        price: 0.5,
        available: true,
        image: '',
        ingredients: []
      },
      {
        id: 2,
        label: 'Smarties',
        slug: 'smarties',
        price: 0.5,
        available: true,
        image: '',
        ingredients: []
      },
      {
        id: 3,
        label: 'Granella nocciola',
        slug: 'granella-nocciola',
        price: 0.5,
        available: true,
        image: '',
        ingredients: []
      },
      {
        id: 4,
        label: 'Farina di cocco',
        slug: 'farina-cocco',
        price: 0.5,
        available: true,
        image: '',
        ingredients: []
      }
    ]
  },
  {
    id: 8,
    name: 'Bibite',
    image: '',
    slug: 'bibite',
    highlight: false,
    topics: [4],
    extras: []
  },
  // TODO - Cocktails category should be present since they are served with the Aperitivo
  // {
  //   id: 9,
  //   name: 'Cocktails',
  //   image: '',
  //   slug: 'cocktails',
  //   highlight: false,
  //   topics: [3, 5],
  //   extras: []
  // },
  {
    id: 10,
    name: 'Amari e liquori',
    image: '',
    slug: 'amari-e-liquori',
    highlight: false,
    topics: [5],
    extras: []
  },
  {
    id: 11,
    name: 'Birre',
    image: '',
    slug: 'birre',
    highlight: false,
    topics: [3, 5],
    extras: []
  },
  {
    id: 12,
    name: 'Grappe',
    image: '',
    slug: 'grappe',
    highlight: false,
    topics: [5],
    extras: []
  },
  {
    id: 13,
    name: 'Rum',
    image: '',
    slug: 'rum',
    highlight: false,
    topics: [5],
    extras: []
  },
  {
    id: 14,
    name: 'Whiskey',
    image: '',
    slug: 'whiskey',
    highlight: false,
    topics: [5],
    extras: []
  },
  {
    id: 15,
    name: 'Gin',
    image: '',
    slug: 'gin',
    highlight: false,
    topics: [5],
    extras: []
  },
  {
    id: 16,
    name: 'Vini',
    image: '',
    slug: 'vini',
    highlight: false,
    topics: [5],
    extras: []
  },
  {
    id: 17,
    name: 'Snacks',
    image: '',
    slug: 'snacks',
    highlight: false,
    topics: [3, 6],
    extras: []
  },
  {
    id: 18,
    name: 'Taglieri e panini',
    image: '',
    slug: 'taglieri-e-panini',
    highlight: false,
    topics: [3, 6]
  }
];
