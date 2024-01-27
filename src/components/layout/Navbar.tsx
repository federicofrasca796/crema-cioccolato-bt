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

export default function Navbar() {
  return (
    <nav className='mt-8 hidden justify-center md:flex'>
      <ul className='inline-flex gap-3 rounded-full bg-secondary-100 p-1.5'>
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
