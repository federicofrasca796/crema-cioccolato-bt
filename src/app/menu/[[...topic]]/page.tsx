'use client';

import { CategoryAccordionList } from '@/components/CategoryAccordion/CategoryAccordionList';
import { CategoryWithItems } from '@/data/menu/categories';
import { type Topic } from '@/data/menu/topics';
import buildMenu from '@/service/menu';
import { useContext, useMemo } from 'react';
import { searchContext } from '../layout';

export default function MenuByTopic({
  params
}: {
  // TODO: fix topic type, this is not typesafe as I can change it to string, while for nextjs it's an array
  params: { topic: Topic['slug'] };
}) {
  const { topic } = params;
  if (topic?.length > 1) throw new Error(`Questa non è una sezione valida`);

  const searchword = useContext(searchContext);

  const menuDataByTopic: { itemsCount: number; data: CategoryWithItems[] } =
    useMemo(() => {
      const menuData = buildMenu(topic?.[0] ?? 'all', searchword);
      return {
        itemsCount: menuData.itemsCount,
        data: Object.values(menuData.categories)
      };
    }, [topic, searchword]);

  return (
    <article className='container mx-auto md:columns-2 md:gap-14'>
      {menuDataByTopic.itemsCount > 0 ? (
        <CategoryAccordionList menu={menuDataByTopic.data} />
      ) : (
        <div className='flex h-full items-center justify-center text-lg'>
          <p>
            Nessuna delizia trovato{' '}
            {topic && (
              <span>
                in &apos;
                <span className='font-bold'>{topic}</span>&apos;
              </span>
            )}{' '}
            con <span className='font-bold'>&apos;{searchword}&apos;</span>
          </p>
        </div>
      )}
    </article>
  );
}
