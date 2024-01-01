import Logo from '@/components/icons/Logo';
import { MapPinIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Navbar from '../Navbar';
import Socials from '@/components/Socials';

export default function Header() {
  return (
    <header className='container sticky top-0 z-50 mx-auto mt-5'>
      <section className='mb-8 grid grid-cols-3 items-center'>
        <Socials />

        <Link href='/' className='mx-auto'>
          <Logo
            className='h-20 fill-secondary transition-colors duration-700 ease-in hover:fill-secondary-800'
            secondary
          />
        </Link>

        <a
          href='#'
          className='ml-auto inline-block gap-1 rounded-full bg-antiqueWhite-100 p-3 transition-colors hover:bg-smokyBrown-200'
        >
          <MapPinIcon className='h-5 w-5 fill-smokyBrown-700' />
        </a>
      </section>

      <Navbar />
    </header>
  );
}
