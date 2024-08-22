import { Prisma } from '@prisma/client';
import clsx from 'clsx';
import { ChangeEventHandler } from 'react';
import MenuItem from './MenuItem';

interface CategoryAccordionProps {
  items: Prisma.ItemGetPayload<{}>[];
  extras?: Prisma.ExtraItemGetPayload<{}>[];
  title: string;
  highlighted?: boolean;
  className?: HTMLDivElement['className'];
  accordionName: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isOpen?: boolean;
}

export default function CategoryAccordion({
  items,
  extras,
  title,
  className,
  accordionName,
  onChange,
  isOpen
}: CategoryAccordionProps) {
  if (!items.length) return;

  const renderItem = (item: CategoryAccordionProps['items'][number]) => (
    <MenuItem
      key={item.id}
      title={item.label}
      subtitle={item.description}
      price={Number(item.price)}
      className='my-2.5'
      {...(item.allergens?.length && {
        tooltip: `Allergeni: ${item.allergens?.join(`, `)}`
      })}
    />
  );

  const renderExtraItem = (
    extra: NonNullable<CategoryAccordionProps['extras']>[number]
  ) => (
    <MenuItem
      key={extra.id}
      title={extra.label}
      subtitle={extra.description}
      price={Number(extra.price)}
      className='my-1'
      isExtraItem
    />
  );

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
