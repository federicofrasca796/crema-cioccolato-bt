'use client';

import { CategoryWithItems } from '@/data/menu/categories';
import CategoryAccordion from './CategoryAccordion';
import clsx from 'clsx';

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

  const halfMenu = menu.slice(0, Math.round(menu.length / 2));
  const otherHalfMenu = menu.slice(Math.round(menu.length / 2));

  const columnsClass = menu.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1';

  return (
    <div className={clsx('grid gap-x-5', columnsClass)}>
      <div className='flex flex-col md:gap-y-4'>
        {halfMenu.map(renderCategoryAccordion)}
      </div>
      <div className='flex flex-col md:gap-y-4'>
        {otherHalfMenu.map(renderCategoryAccordion)}
      </div>
    </div>
  );
}
