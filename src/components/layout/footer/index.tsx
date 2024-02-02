'use client';
import WeeklySchedule from '@/components/WeeklySchedule';
import Logo from '@/components/icons/Logo';
import Link from '@/components/ui/Link';
import { MapPinIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className='top-wave relative mt-24 bg-secondary pb-5 pt-4 after:-top-14 after:h-14'>
      <div className='container mx-auto grid gap-10'>
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
            <div className='mb-1 font-serif text-2xl text-primary'>
              Ci trovi qui
            </div>
            <span>
              Via Rocco Chinnici, 43 <br />
              Barletta (BT) <br />
              +39 333 1234567
            </span>
          </div>
          <div>
            <Link
              type='button'
              buttonVariant='outlined'
              className='bg-secondary drop-shadow-lg'
              href='https://maps.app.goo.gl/sVoKqYm29TAbSjht9'
              target='_blank'
            >
              <MapPinIcon className='w-5' />
              Mappa
            </Link>
          </div>
        </section>

        <section>
          <div>Seguici su Instagram</div>
          <Link
            href='https://www.instagram.com/crema_e_cioccolato_barletta/'
            target='_blank'
            underlineOnHover
          >
            @crema_e_cioccolato_barletta
          </Link>
        </section>

        <section className='flex flex-col justify-between gap-y-4 text-xs md:flex-row'>
          <div>
            {/* TODO - Check for copyright  */}
            © 2023 Crema e Cioccolato di Andrea Bufo <br />
            Tutti i diritti riservati.
          </div>

          <ul className='inline-flex items-end gap-2'>
            {/* TODO - Insert real P.Iva and handle policies */}
            <li>P.Iva 03830581207</li>
            <li>
              <Link href='#'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='#'>Cookie Policy</Link>
            </li>
            <li>
              <Link href='#'>Preferenze Cookie</Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
