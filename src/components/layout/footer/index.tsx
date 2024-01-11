'use client';
import WeeklySchedule from '@/components/WeeklySchedule';
import Logo from '@/components/icons/Logo';
import Button from '@/components/ui/Button';
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
            <Button
              onClick={() => console.log('test')}
              fullWidth
              variant='outlined'
              startIcon={<MapPinIcon className='w-5' />}
              className='bg-primary-0 drop-shadow-lg'
            >
              Mappa
            </Button>
          </div>
        </section>
      </div>
    </footer>
  );
}
