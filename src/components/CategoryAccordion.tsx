import clsx from 'clsx';
import MenuItem from './MenuItem';
import type { ExtraItem, MenuItem as Item } from '@/data/menu';
import { StaticImageData } from 'next/image';

interface CategoryAccordionProps {
  items: Item[];
  extras?: ExtraItem[];
  title: string;
  highlighted?: boolean;
  className?: HTMLDivElement['className'];
  accordionName: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOpen?: boolean;
  icon?: StaticImageData | string;
}

export default function CategoryAccordion({
  items,
  extras,
  title,
  icon,
  className,
  accordionName,
  onChange,
  isOpen,
  highlighted
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
