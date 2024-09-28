import { categories, Category, ExtraItem } from '@/data/menu/categories';
import type { MenuItem as Item } from '@/data/menu/items';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import MenuItem from './MenuItem';
import { Topic, topics } from '@/data/menu/topics';
import { getItemsByCategory } from '@/service/menu';

interface CategoryAccordionProps {
  items: Item[];
  extras?: ExtraItem[];
  title: string;
  highlighted?: boolean;
  className?: HTMLDivElement['className'];
  accordionName: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isOpen?: boolean;
  icon?: StaticImageData | string;
}

export default function CategoryAccordion({
  items,
  extras,
  title,
  // icon,
  className,
  accordionName,
  onChange,
  isOpen
  // highlighted
}: CategoryAccordionProps) {
  if (!items.length) return;

  const renderItem = (item: Item) => {
    return (
      <MenuItem
        key={item.id}
        title={item.label}
        subtitle={item.description}
        price={item.price}
        className='my-2.5'
        {...(item?.allergens?.length && {
          tooltip: `Allergeni: ${item?.allergens?.join(`, `)}`
        })}
      />
    );
  };

  const renderExtraItem = (item: ExtraItem) => {
    return (
      <MenuItem
        key={item.id}
        title={item.label}
        subtitle={item.description}
        price={item.price}
        className='my-1'
        isExtraItem
      />
    );
  };

  return (
    <div className={clsx('collapse collapse-arrow transition-none', className)}>
      <input
        type='checkbox'
        name={accordionName}
        onChange={onChange}
        defaultChecked={isOpen}
      />
      <div className='collapse-title rounded-full border-2 border-secondary-100 bg-secondary text-xl font-bold text-primary'>
        {title}
      </div>
      <div className={clsx('collapse-content my-5 bg-babyPowder')}>
        {items.map(renderItem)}

        {/* Extra items */}
        {extras?.length ? (
          <div className='mt-5'>
            <h4 className='text-lg font-bold'>Extras</h4>
            <div className='mt-3'>{extras.map(renderExtraItem)}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const getCategoriesByTopic = (topicSlug: Topic['slug']) => {
  if (topicSlug === 'all') return categories;

  const topic = topics.find((topic: Topic) => topic.slug === topicSlug);

  if (!topic) throw new Error(`Sezione '${topicSlug}' non trovata`);

  const activeCategories = categories.filter((category) =>
    category.topics.includes(topic.id)
  );

  return activeCategories;
};

CategoryAccordion.List = function CategoryAccordionList({
  topic
}: {
  topic: Topic['slug'];
}) {
  const categoriesByTopic = topic ? getCategoriesByTopic(topic) : categories;

  const renderCategoryAccordion = (category: Category) => (
    <CategoryAccordion
      key={category.id}
      title={category.name}
      extras={category.extras}
      accordionName={category.slug}
      items={getItemsByCategory(category.slug)}
      icon={category.image}
      className='animate-fadeIn'
    />
  );

  return categoriesByTopic.map(renderCategoryAccordion);
};
