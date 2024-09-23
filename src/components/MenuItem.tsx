'use client';

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Badge from './elements/Badge/Badge';
import Button from './elements/Button';
import Modal from './elements/Modal';
import { useState } from 'react';

interface MenuItemProps {
  title: string;
  subtitle?: string;
  price: number;
  badges?: { icon: string; className: string }[];
  tooltip?: string;
  className?: HTMLDivElement['className'];
  isExtraItem?: boolean;
}

const parsePrice = (price: number) => {
  return '€' + ' ' + price.toFixed(2).toString().replace('.', ',');
};

export default function MenuItem({
  className,
  isExtraItem,
  price,
  subtitle,
  title,
  tooltip
}: MenuItemProps) {
  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false);

  const toggleInfoModal = () => {
    setInfoModalOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <div className={clsx('group inline-flex min-h-10 w-full', className)}>
        <div className='grow'>
          <div className='wavy-dotted-line mb-0.5 group-hover:after:animate-wavyLine'>
            <h3 title={title} className='max-w-[80%]'>
              {title}
            </h3>
          </div>

          <div className='flex justify-between'>
            <p className='text-sm text-smokyBrown-600'>{subtitle}</p>
            {tooltip && (
              <Button
                variant='text'
                size='tiny'
                color='neutral'
                onClick={toggleInfoModal}
              >
                <InformationCircleIcon className='w-[1.1rem] text-smokyBrown-800' />
              </Button>
            )}
          </div>
        </div>
        <div>
          <Badge
            label={parsePrice(price)}
            variant={isExtraItem ? 'outlined' : 'contained'}
            className={clsx('min-w-max', {
              'border-none bg-secondary-200 text-primary hover:bg-secondary-300':
                !isExtraItem
            })}
          />
        </div>
      </div>

      <Modal open={infoModalOpen} onClose={toggleInfoModal}>
        {tooltip}
      </Modal>
    </>
  );
}
