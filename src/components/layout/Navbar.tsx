'use client';

import { NAV_LINKS } from '@/data/homepage';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useSticky from '@/hooks/useSticky';
import clsx from 'clsx';
import Link from 'next/link';
import { MutableRefObject, useRef } from 'react';

export default function Navbar({
  trackedSections
}: {
  trackedSections: MutableRefObject<Element | null>[];
}) {
  const navRef = useRef<HTMLElement | null>(null);

  // TODO - use sticky in desktop only
  const { isSticky } = useSticky(navRef);

  const [visibleSections] = useIntersectionObserver(trackedSections);

  return (
    <nav
      className={clsx(
        'mt-8 hidden justify-center transition-transform md:flex',
        {
          'top-0 z-10 translate-y-10 md:sticky': isSticky
        }
      )}
      ref={navRef}
    >
      <ul
        className={clsx(
          'inline-flex items-center gap-3 rounded-full border-2 border-secondary-200/50 bg-secondary-100 p-1.5',
          {
            'shadow-xl': isSticky
          }
        )}
      >
        {NAV_LINKS.map((link, idx) => (
          <li key={idx} className='inline-flex'>
            <Link
              href={`#${link.href}`}
              className={clsx(
                'rounded-full py-1 text-center font-semibold text-primary/90 transition-colors ease-in-out hover:bg-secondary-300 md:px-3 lg:px-6',
                {
                  'bg-primary !text-babyPowder hover:!bg-primary-800':
                    Array.isArray(visibleSections) &&
                    visibleSections.at(0) === link.href
                }
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
