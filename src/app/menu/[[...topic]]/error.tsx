'use client';

import Link from '@/components/elements/Link';
import Logo from '@/components/icons/Logo';
import MeltedIcecream from '@/components/icons/MeltedIcecream';

export default function ErrorMenuByTopic({
  error
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='container mx-auto min-h-[80dvh] items-center gap-16 pb-24 pt-10 md:grid md:grid-flow-col'>
      <article className='prose'>
        <Logo
          secondary
          className='mb-8 hidden h-20 fill-smokyBrown-800 md:block'
        />
        <h1 className='mb-0 text-smokyBrown-800 md:text-5xl'>
          Oopsie! Qualcosa è andato storto
        </h1>
        <p className='font-sans'>{error.message}</p>
        <Link
          type='button'
          buttonVariant='outlined'
          href='/menu'
          className='group'
        >
          <Logo className='h-[60%] fill-primary group-hover:fill-secondary-0' />
          Torna al menù
        </Link>
      </article>
    </div>
  );
}
