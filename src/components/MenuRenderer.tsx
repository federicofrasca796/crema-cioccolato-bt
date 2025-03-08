'use client';

import { CategoryWithItems } from '@/data/menu/categories';
import { Topic } from '@/data/menu/topics';
import { SearchContext } from '@/store/searchword';
import { useContext, useMemo } from 'react';
import { CategoryAccordionList } from './CategoryAccordion/CategoryAccordionList';
import { MenuItem } from '@/data/menu/items';
import { useMenuBuilder } from '@/hooks/useMenuBuilder';

export default function MenuRenderer({
  topic,
  items
}: {
  topic: Topic['slug'];
  items: MenuItem[];
}) {
  const searchword = useContext(SearchContext);
  const menuData = useMenuBuilder(items, {
    topic: topic?.[0] ?? 'all',
    searchword
  });
  const menuDataByTopic: { itemsCount: number; data: CategoryWithItems[] } =
    useMemo(() => {
      // const menuData = buildMenu(topic?.[0] ?? 'all', searchword);
      return {
        itemsCount: menuData.itemsCount,
        data: Object.values(menuData.categories)
      };
    }, [topic, searchword]);

  return menuDataByTopic.itemsCount > 0 ? (
    <CategoryAccordionList menu={menuDataByTopic.data} />
  ) : (
    <div className='flex h-full items-center justify-center text-lg'>
      <p>
        Nessuna delizia trovata{' '}
        {topic && (
          <span>
            in &apos;
            <span className='font-bold'>{topic}</span>&apos;
          </span>
        )}{' '}
        con <span className='font-bold'>&apos;{searchword}&apos;</span>
      </p>
    </div>
  );
}
