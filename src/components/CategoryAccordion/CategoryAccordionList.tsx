'use client';

import { CategoryWithItems } from '@/data/menu/categories';
import CategoryAccordion from './CategoryAccordion';

export function CategoryAccordionList({ menu }: { menu: CategoryWithItems[] }) {
  const renderCategoryAccordion = (category: CategoryWithItems) => (
    <CategoryAccordion
      key={category.id}
      title={category.name}
      extras={category.extras}
      accordionName={category.slug}
      items={category.items}
      icon={category.image}
      className='animate-fadeIn'
      isOpen={menu.length === 1}
    />
  );

  return menu.map(renderCategoryAccordion);
}
