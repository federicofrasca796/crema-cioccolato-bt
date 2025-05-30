import { ExtraItem } from '@/data/menu/categories';
import type { MenuItem as Item } from '@/data/menu/items';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import MenuItem from '../MenuItem';

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

  return (
    <div className={clsx('collapse collapse-arrow transition-none', className)}>
      <input
        type='checkbox'
        name={accordionName}
        onChange={onChange}
        defaultChecked={isOpen}
      />
      <CategoryAccordion.Header title={title} />
      <CategoryAccordion.Content items={items} extras={extras} />
    </div>
  );
}

CategoryAccordion.Header = function CategoryAccordionHeader({
  title
}: {
  title: string;
}) {
  return (
    <div className='collapse-title rounded-full border-2 border-secondary-100 bg-secondary text-xl font-bold text-primary'>
      {title}
    </div>
  );
};

CategoryAccordion.Content = function CategoryAccordionContent({
  items,
  extras
}: {
  items: CategoryAccordionProps['items'];
  extras?: ExtraItem[];
}) {
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
    <div className={clsx('collapse-content mt-5 bg-babyPowder')}>
      {items.map(renderItem)}

      {/* Extra items */}
      {extras?.length ? (
        <div className='mt-5'>
          <h4 className='text-lg font-bold'>Extras</h4>
          <div className='mt-3'>{extras.map(renderExtraItem)}</div>
        </div>
      ) : null}
    </div>
  );
};
