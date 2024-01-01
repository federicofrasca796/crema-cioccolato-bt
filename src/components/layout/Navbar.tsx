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
    <nav className='flex justify-center'>
      <ul className='inline-flex gap-3 rounded-full bg-antiqueWhite-100 p-1.5'>
        {LINKS.map((link, idx) => (
          <li key={idx} className='inline-flex'>
            <Link
              href={`#${link.href}`}
              className='rounded-full px-5 py-1 font-semibold text-antiqueWhite-900 transition-colors ease-in-out hover:bg-antiqueWhite-300'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
