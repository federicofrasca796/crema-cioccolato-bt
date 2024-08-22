import { Prisma } from '@prisma/client';

export const categories: Prisma.CategoryCreateWithoutItemsInput[] = [
  {
    name: 'Gelati',
    slug: 'gelati',
    highlight: true,
    topics: {
      connect: [{ slug: 'gelateria' }]
    }
  },
  {
    name: 'Farciture gelato',
    slug: 'gelati-maxi',
    highlight: true,
    topics: {
      connect: [{ slug: 'gelateria' }]
    }
  },
  {
    name: "Caffe'",
    slug: 'caffe',
    highlight: false,
    topics: {
      connect: [{ slug: 'caffetteria' }]
    }
  },
  {
    name: 'Latte e cioccolate',
    slug: 'latte-e-cioccolato',
    highlight: false,
    topics: {
      connect: [{ slug: 'caffetteria' }]
    }
  },
  {
    name: 'Té e tisane',
    slug: 'te-tisane',
    highlight: false,
    topics: {
      connect: [{ slug: 'caffetteria' }]
    }
  },
  {
    name: 'Dolci e paste',
    slug: 'dolci-e-paste',
    highlight: false,
    topics: {
      connect: [{ slug: 'caffetteria' }]
    }
  },
  {
    name: 'Bibite',
    slug: 'bibite',
    highlight: false,
    topics: {
      connect: [{ slug: 'bibite-e-drinks' }]
    }
  },
  {
    name: 'Amari e liquori',
    slug: 'amari-e-liquori',
    highlight: false,
    topics: {
      connect: [{ slug: 'cocktails-e-liquori' }]
    }
  },
  {
    name: 'Birre',
    slug: 'birre',
    highlight: false,
    topics: {
      connect: [{ slug: 'cocktails-e-liquori' }, { slug: 'bibite-e-drinks' }]
    }
  },
  {
    name: 'Grappe',
    slug: 'grappe',
    highlight: false,
    topics: {
      connect: [{ slug: 'cocktails-e-liquori' }]
    }
  },
  {
    name: 'Rum',
    slug: 'rum',
    highlight: false,
    topics: {
      connect: [{ slug: 'cocktails-e-liquori' }]
    }
  },
  {
    name: 'Whiskey',
    slug: 'whiskey',
    highlight: false,
    topics: {
      connect: [{ slug: 'cocktails-e-liquori' }]
    }
  },
  {
    name: 'Gin',
    slug: 'gin',
    highlight: false,
    topics: {
      connect: [{ slug: 'cocktails-e-liquori' }]
    }
  },
  {
    name: 'Vini',
    slug: 'vini',
    highlight: false,
    topics: {
      connect: [{ slug: 'cocktails-e-liquori' }, { slug: 'aperitivo' }]
    }
  },
  {
    name: 'Snacks',
    slug: 'snacks',
    highlight: false,
    topics: {
      connect: [{ slug: 'aperitivo' }]
    }
  },
  {
    name: 'Taglieri e panini',
    slug: 'taglieri-e-panini',
    highlight: false,
    topics: {
      connect: [{ slug: 'aperitivo' }]
    }
  }
];
