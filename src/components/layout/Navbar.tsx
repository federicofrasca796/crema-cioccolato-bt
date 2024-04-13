import clsx from 'clsx';
import Link from 'next/link';

const LINKS = [
  {
    label: 'Le delizie',
    href: 'delizie'
  },
  {
    label: 'Domande frequenti',
    href: 'faq'
  },
  {
    label: 'Dicono di noi',
    href: 'dicono-di-noi'
  },
  {
    label: 'Dove siamo',
    href: 'dove-siamo'
  },
  {
    label: 'Orari',
    href: 'orari'
  },
  {
    label: 'Contatti',
    href: 'contatti'
  }
];

export default function Navbar({ sticky }: { sticky: boolean }) {
  return (
    <nav
      className={clsx('mt-8 hidden justify-center transition-all md:flex', {
        'top-10 z-10 md:sticky': sticky
      })}
    >
      <ul
        className={clsx(
          'inline-flex items-center gap-3 rounded-full border-2 border-secondary-200/80 bg-secondary-100 p-1.5',
          {
            shadow: sticky
          }
        )}
      >
        {LINKS.map((link, idx) => (
          <li key={idx} className='inline-flex'>
            <Link
              href={`#${link.href}`}
              className='rounded-full py-1 text-center font-semibold text-secondary-900 transition-colors ease-in-out hover:bg-secondary-300 md:px-3 lg:px-6'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
