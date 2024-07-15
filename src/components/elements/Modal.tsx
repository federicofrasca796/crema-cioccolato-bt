'use client';

import clsx from 'clsx';
import { ReactNode, useEffect, useRef } from 'react';
import Button from './Button';
import { XMarkIcon } from '@heroicons/react/16/solid';

export default function Modal({
  children,
  open,
  onClose
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      if (open) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog
      className={clsx([
        { hidden: !open },
        'modal px-5 py-52 backdrop-blur-sm md:px-40'
      ])}
      ref={modalRef}
    >
      <div className='align-end grid h-full w-full grid-flow-row grid-rows-[max-content_minmax(0,1fr)_max-content] gap-10 rounded-xl bg-babyPowder px-5 py-6'>
        <div className='text-end'>
          <Button
            variant='text'
            className='px-0 text-smokyBrown'
            onClick={handleClose}
          >
            <XMarkIcon className='w-8' />
          </Button>
        </div>
        <div className='max-w-[calc(100% - 2rem)'>{children}</div>
      </div>
    </dialog>
  );
}
