'use client';
import Logo from '@/components/icons/Logo';
import { MapPinIcon } from '@heroicons/react/20/solid';
import NextLink from 'next/link';
import Navbar from '../Navbar';
import Socials from '@/components/Socials';
import Button from '@/components/ui/Button';
import { Bars2Icon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className='container mx-auto mt-5 md:overflow-x-hidden'>
      <section className='grid min-h-[72px] grid-cols-3 items-center'>
        <Socials className='hidden md:grid' />

        <NextLink href='/' className='mx-auto h-full'>
          <Logo
            className='hidden h-20 fill-primary transition-colors duration-700 ease-in hover:fill-primary-800 md:block'
            secondary
          />
          <Logo className='h-full fill-primary transition-colors duration-700 ease-in hover:fill-primary-800 md:hidden' />
        </NextLink>

        <NextLink
          href='#'
          className='order-first inline-block w-fit gap-1 rounded-full bg-secondary-100 p-3 transition-colors hover:bg-smokyBrown-200 md:order-none md:ml-auto'
        >
          <MapPinIcon className='h-5 fill-smokyBrown-700' />
        </NextLink>

        <Button
          onClick={() => alert('open mobile menu')}
          variant='text'
          className='ml-auto w-fit pr-0 md:hidden'
        >
          <Bars2Icon className='w-10 fill-smokyBrown-800' />
        </Button>
      </section>

      <Navbar />
    </header>
  );
}
