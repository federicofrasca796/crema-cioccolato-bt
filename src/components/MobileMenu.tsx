import clsx from 'clsx';
import Link from './elements/Link';
import { useEffect, useRef } from 'react';
import Button from './elements/Button';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Socials from './Socials';

// TODO - This should be centralized for Navbar and MobileMenu components
const LINKS = [
  {
    label: 'Menù',
    href: '/#menu'
  },
  {
    label: 'Come trovarci',
    href: '/#dove-siamo'
  },
  {
    label: 'Domande frequenti',
    href: '/#faq'
  },
  // {
  //   label: 'Dicono di noi',
  //   href: '/#dicono-di-noi'
  // },
  {
    label: 'Orari',
    href: '/#orari'
  },
  {
    label: 'Contattaci',
    href: '/#contatti'
  },
  {
    label: 'Consegna a domicilio',
    href: '/#consegna-a-domicilio'
  }
];

export default function MobileMenu({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      if (open) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <dialog
        className={clsx([{ hidden: !open }, 'modal p-3 backdrop-blur-sm'])}
        id='mobile-menu'
        ref={modalRef}
      >
        <div className='align-end grid h-full w-full grid-flow-row grid-rows-[max-content_minmax(0,1fr)_max-content] gap-10 rounded-xl bg-babyPowder px-5 py-6'>
          <div className='text-end'>
            <Button
              variant='text'
              className='px-0 text-smokyBrown'
              onClick={() => handleClose()}
            >
              <XMarkIcon className='w-10' />
            </Button>
          </div>

          <nav>
            <ul className='text-end'>
              {LINKS.map((link, idx) => (
                <li key={idx} className='mt-8'>
                  <Link
                    href={`#${link.href}`}
                    className='rounded-md font-serif text-3xl text-smokyBrown-800'
                    underlineOnHover
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Socials className='content-end justify-center' />
        </div>
      </dialog>
    </>
  );
}
