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
    name: 'Gelati MAXI',
    image: IcecreamSweets,
    slug: 'gelati-maxi',
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
    id: 4,
    name: 'Latte e cioccolate',
    image: '',
    slug: 'latte-cioccolate',
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
    slug: 'dolci-paste',
    highlight: false,
    topics: [2],
    extras: [
      {
        id: 3,
        label: 'Creme assortite',
        slug: 'creme-assortite',
        price: 0.5,
        available: true,
        image: '',
        ingredients: []
      },
      {
        id: 4,
        label: 'Smarties',
        slug: 'smarties',
        price: 0.5,
        available: true,
        image: '',
        ingredients: []
      },
      {
        id: 4,
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
  {
    id: 9,
    name: 'Cocktails',
    image: '',
    slug: 'cocktails',
    highlight: false,
    topics: [3, 5],
    extras: []
  },
  {
    id: 10,
    name: 'Amari e liquori',
    image: '',
    slug: 'amari-liquori',
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
    topics: [3, 4, 5],
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
    topics: [3],
    extras: []
  },
  {
    id: 18,
    name: 'Taglieri e panini',
    image: '',
    slug: 'taglieri-panini',
    highlight: false,
    topics: [3]
  }
];