'use client';

import { ShareIcon } from '@heroicons/react/16/solid';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ComponentProps, useEffect, useState } from 'react';
import Button from '../elements/Button';
import Link from '../elements/Link';

export default function StickyCTABottom({
  sticky,
  ...props
}: {
  sticky: boolean;
} & ComponentProps<'div'>) {
  const [canShare, setCanShare] = useState(false);

  const handleNativeShare = () => {
    navigator
      .share({
        url: location.href,
        text: "Dai un'occhiata a questo locale!"
      })
      .catch((error) => console.error('Sharing action went wrong:: \n', error));
  };

  useEffect(() => {
    const canShare = typeof window !== 'undefined' && navigator;
    setCanShare(!!canShare);
  }, []);

  return (
    <div
      className={clsx(
        'hidden justify-center gap-5 text-center transition-transform md:mt-3',
        {
          'z-10 max-md:sticky max-md:bottom-0 max-md:!flex max-md:-translate-y-8':
            sticky
        }
      )}
      {...props}
    >
      <Link
        href='menu'
        type='button'
        buttonVariant='contained'
        color='accent'
        className='shadow-xl'
      >
        <BookOpenIcon className='w-6' />
        Sfoglia il menù
      </Link>

      {canShare && (
        <Button
          color='primary'
          variant='outlined'
          startIcon={<ShareIcon className='w-6' />}
          className='bg-secondary-0 shadow-xl'
          onClick={handleNativeShare}
        />
      )}
    </div>
  );
}
