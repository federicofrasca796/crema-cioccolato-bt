'use client';

import MobileMenu from '@/components/MobileMenu';
import Socials from '@/components/Socials';
import Button from '@/components/elements/Button';
import Link from '@/components/elements/Link';
import Logo from '@/components/icons/Logo';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className='container mb-5 pt-5 '>
      <section className='grid min-h-[var(--header-height)] grid-cols-3 items-center'>
        <Socials className='hidden md:grid' rounded />

        <Link href='/' className='mx-auto h-full rounded-full'>
          <Logo
            className='hidden h-20 fill-primary transition-colors duration-700 ease-in hover:fill-primary-800 md:block'
            secondary
          />
          <Logo className='h-full fill-primary transition-colors duration-700 ease-in hover:fill-primary-800 md:hidden' />
        </Link>

        <Link
          href='https://maps.app.goo.gl/V36pGd3jSGZ5tG7GA'
          type='button'
          target='_blank'
          className='order-first flex size-12 items-center rounded-full border-none bg-transparent p-0 text-smokyBrown-700 shadow-none transition-colors hover:bg-smokyBrown-200 hover:text-smokyBrown-800 md:order-none md:ml-auto md:bg-secondary-100'
        >
          <MapPinIcon className='size-5' />
        </Link>

        <Button
          onClick={() => setOpenMenu(!openMenu)}
          variant='text'
          className='ml-auto w-fit px-0 text-smokyBrown-800 md:hidden'
          color='neutral'
        >
          <span id='menu-opener' className='sr-only'>
            menù
          </span>
          <Bars2Icon className='w-10' aria-describedby='menu-opener' />
        </Button>
      </section>

      <MobileMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </header>
  );
}
