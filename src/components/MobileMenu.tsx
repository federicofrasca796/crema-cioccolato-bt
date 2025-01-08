import clsx from 'clsx';
import Link from './elements/Link';
import { useEffect, useRef } from 'react';
import Button from './elements/Button';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Socials from './Socials';
import { motion } from 'motion/react';

// TODO - This should be centralized for Navbar and MobileMenu components
const LINKS = [
  {
    label: 'Le nostre delizie',
    href: '/#delizie'
  },
  {
    label: 'Domande frequenti',
    href: '/#faq'
  },
  {
    label: 'Come trovarci',
    href: '/#dove-siamo'
  },
  {
    label: 'Orari',
    href: '/#orari'
  },
  {
    label: 'Contattaci',
    href: '/#contatti'
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
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, easings: 'easeInOut' }}
          className='align-end grid h-full w-full grid-flow-row grid-rows-[max-content_minmax(0,1fr)_max-content] gap-10 overflow-hidden rounded-xl bg-babyPowder px-5 py-6'
        >
          <div className='text-end'>
            <Button
              variant='text'
              className='px-0 text-smokyBrown'
              onClick={handleClose}
            >
              <XMarkIcon className='w-10' />
            </Button>
          </div>

          <nav>
            <ul className='flex flex-col gap-6 text-end'>
              {LINKS.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Link
                    href={`${link.href}`}
                    className='rounded-md font-serif text-3xl text-smokyBrown-800'
                    underlineOnHover
                    onClick={handleClose}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li
                className='mt-4'
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: LINKS.length * 0.1 }}
              >
                <Link
                  type='button'
                  href='/menu'
                  className='btn-accent'
                  onClick={handleClose}
                >
                  Scopri il nostro menù
                </Link>
              </motion.li>
            </ul>
          </nav>

          <Socials className='content-end justify-center' />
        </motion.div>
      </dialog>
    </>
  );
}
