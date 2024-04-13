'use client';

import MobileMenu from '@/components/MobileMenu';
import Socials from '@/components/Socials';
import Button from '@/components/elements/Button';
import Link from '@/components/elements/Link';
import Logo from '@/components/icons/Logo';
import useSticky from '@/hooks/useSticky';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { Bars2Icon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import Navbar from '../Navbar';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement | null>(null);
  // TODO - use sticky in desktop only
  const { isSticky } = useSticky(headerRef);

  return (
    <>
      <header
        ref={headerRef}
        className={clsx('container mx-auto mb-5 pt-5 md:overflow-x-hidden')}
      >
        <section className={clsx('grid min-h-[72px] grid-cols-3 items-center')}>
          <Socials className='hidden md:grid' rounded />

          <Link href='/' className='mx-auto h-full rounded-lg'>
            <Logo
              className='hidden h-20 fill-primary transition-colors duration-700 ease-in hover:fill-primary-800 md:block'
              secondary
            />
            <Logo className='h-full fill-primary transition-colors duration-700 ease-in hover:fill-primary-800 md:hidden' />
          </Link>

          <Link
            href='#'
            className='order-first inline-block w-fit gap-1 rounded-full p-3 text-smokyBrown-800 transition-colors hover:text-smokyBrown-600 md:order-none md:ml-auto md:bg-secondary-100 md:text-smokyBrown-700 md:hover:bg-smokyBrown-200 md:hover:text-smokyBrown-800'
          >
            <MapPinIcon className='h-5' />
          </Link>

          <Button
            onClick={() => setOpenMenu(!openMenu)}
            variant='text'
            className='ml-auto w-fit px-0 text-smokyBrown-800 md:hidden'
            color='neutral'
          >
            <Bars2Icon className='w-10' />
          </Button>
        </section>

        <MobileMenu open={openMenu} onClose={() => setOpenMenu(false)} />
      </header>
      <Navbar sticky={isSticky} />
    </>
  );
}
