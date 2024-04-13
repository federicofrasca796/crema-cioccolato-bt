'use client';

import CategoryAccordion from '@/components/CategoryAccordion';
import { Category, categories, items } from '@/data/menu';
import { getCategoryItems } from '@/data/utils';

export default function Menu() {
  const renderCategoryAccordion = (category: Category) => (
    <CategoryAccordion
      key={category.id}
      title={category.name}
      extras={category.extras}
      accordionName={category.slug}
      items={getCategoryItems(category.id)}
      icon={category.image}
      isOpen
    />
  );

  return (
    // Unfiltered menu items
    <article className='container mx-auto mt-10 md:max-h-[200vh] md:columns-2 md:gap-14'>
      {categories.map(renderCategoryAccordion)}
    </article>
  );
}
