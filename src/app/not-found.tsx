import Logo from '@/components/icons/Logo';
import MeltedIcecream from '@/components/icons/MeltedIcecream';
import Link from '@/components/elements/Link';

export default function NotFound() {
  return (
    <div className='container mx-auto min-h-[80dvh] items-center gap-16 pb-24 pt-10 md:grid md:grid-flow-col'>
      <MeltedIcecream
        className='md: relative -left-6 mb-10 h-96 md:-top-20 md:left-0 md:mb-0 md:h-[calc(100%+5rem)] md:w-full'
        outlineClassName='fill-smokyBrown-800'
        backgroundClassName='fill-secondary-0'
      />
      <article className='prose'>
        <Logo
          secondary
          className='mb-8 hidden h-20 fill-smokyBrown-800 md:block'
        />
        <h1 className='mb-0 text-smokyBrown-800 md:text-5xl'>
          Oopsie! Questo gusto non esiste
        </h1>
        <p className='font-sans'>
          Non ti abbattere, ne abbiamo moltissimi altri.
        </p>
        <Link type='button' buttonVariant='outlined' href='/' className='group'>
          <Logo className='h-[60%] fill-primary group-hover:fill-secondary-0' />
          Torna all&apos;homepage
        </Link>
      </article>
    </div>
  );
}
