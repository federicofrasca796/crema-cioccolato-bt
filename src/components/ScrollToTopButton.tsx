'use client';

import { useRef } from 'react';
import clsx from 'clsx';
import { ArrowUpIcon } from '@heroicons/react/20/solid';
import Button from './elements/Button';

export default function ScrollToTopButton({ sticky }: { sticky: boolean }) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      ref={buttonRef}
      onClick={scrollToTop}
      className={clsx(
        'btn btn-circle btn-ghost fixed bottom-10 right-6 z-10 fill-primary hover:-translate-y-3 hover:bg-secondary-500 hover:fill-primary-900 max-md:hidden md:bottom-6',
        'transition-all duration-300 ease-out',
        sticky
          ? 'translate-y-0 scale-100 opacity-100'
          : 'translate-y-16 -scale-100 opacity-0'
      )}
      aria-label='Scroll to top'
    >
      <ArrowUpIcon className='size-6 fill-inherit' />
    </Button>
  );
}
