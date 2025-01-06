'use client';

import WeeklySchedule from '@/components/WeeklySchedule';
import Logo from '@/components/icons/Logo';
import Link from '@/components/elements/Link';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { NAV_LINKS } from '@/data/navbar';
import PrivacyPolicyLink from '@/components/scripts/PrivacyPolicyLink';
import CookiePolicyLink from '@/components/scripts/CookiePolicyLink';

export default function Footer() {
  return (
    <footer className='top-wave relative mt-24 bg-secondary pb-5 pt-4 after:-top-14 after:h-14'>
      <div className='container grid gap-10'>
        <div className='flex items-center gap-4' role='heading' aria-level={2}>
          <Logo secondary className='w-[5.625rem] fill-primary' />
          <div>
            <div className='font-display text-3xl font-bold text-primary'>
              Crema & Cioccolato
            </div>
            <span className='font-display text-2xl text-secondary-900'>
              Barletta
            </span>
          </div>
        </div>

        <section id={NAV_LINKS[4].href}>
          <WeeklySchedule />
        </section>

        <section className='mt-16 flex items-center justify-between'>
          <div className='max-w-52'>
            <div className='mb-1 font-serif text-2xl text-primary'>
              Ci trovi qui
            </div>
            <span id={NAV_LINKS[5].href}>
              Via Rocco Chinnici, 43 <br />
              Barletta (BT) <br />
              <Link href='tel:+393284689986'>(+39) 328 4689986</Link>
            </span>
          </div>
          <div id={NAV_LINKS[3].href}>
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
            © {new Date().getFullYear()} Crema e Cioccolato di Andrea Bufo{' '}
            <br />
            Tutti i diritti riservati.
          </div>

          <ul className='inline-flex items-end gap-2'>
            <li>P.Iva 08663910720</li>
            <li>
              <PrivacyPolicyLink />
            </li>
            <li>
              <CookiePolicyLink />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
