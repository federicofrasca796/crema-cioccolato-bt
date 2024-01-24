'use client';
import WeeklySchedule from '@/components/WeeklySchedule';
import Logo from '@/components/icons/Logo';
import Link from '@/components/ui/Link';
import { MapPinIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className='top-wave relative bg-primary-0 pb-5 pt-4'>
      <div className='container mx-auto'>
        <section className='flex items-center gap-4'>
          <Logo secondary className='w-[5.625rem] fill-primary' />
          <div>
            <div className='font-display text-3xl font-bold text-primary'>
              Crema & Cioccolato
            </div>
            <span className='font-display text-2xl text-secondary-900'>
              Barletta
            </span>
          </div>
        </section>

        <section>
          <WeeklySchedule />
        </section>

        <section className='mt-16 flex items-center justify-between'>
          <div className='max-w-52'>
            <div className='font-serif text-2xl text-primary'>Ci trovi qui</div>
            <p>Via Giacomo Piccininni, 62 Barletta (BT) +39 333 1234567</p>
          </div>
          <div>
            <Link
              look='button'
              buttonVariant='outlined'
              className='bg-primary-0 drop-shadow-lg'
              href='https://www.instagram.com/crema_e_cioccolato_barletta/'
              target='_blank'
            >
              <MapPinIcon className='w-5' />
              Mappa
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
