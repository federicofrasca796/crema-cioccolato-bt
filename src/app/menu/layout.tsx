'use client';

// TODO - Encapsulate components and prefer server component for layout if possible

import GoBack from '@/components/elements/GoBack';
import InputSearch from '@/components/elements/Input/InputSearch';
import BadgeCarousel from '@/components/TopicFilters/BadgeCarousel';
import TextCarousel from '@/components/TopicFilters/TextCarousel';
import { useParams } from 'next/navigation';
import React, { createContext, useState } from 'react';

export const searchContext = createContext<string>('');

export default function MenuLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [searchword, setSearchword] = useState('');

  const { topic } = useParams();
  const parsedTopic = topic ? topic[0] : 'all';

  return (
    <searchContext.Provider value={searchword}>
      <section id='menu-layout'>
        <section className='mb-8 mt-10 md:mb-10 md:mt-20'>
          <header>
            <div className='container mx-auto'>
              <GoBack />
              <h1 className='font-display text-3xl font-bold text-primary-600'>
                Menù
              </h1>
            </div>

            <div className='overflow-hidden max-lg:hidden'>
              {/* TODO - Optimize by removing initialization on mobile viewport */}
              <TextCarousel activeTopic={parsedTopic} />
            </div>

            <div className='mt-4 lg:hidden'>
              <BadgeCarousel activeTopic={parsedTopic} />
            </div>

            <div className='container mx-auto mt-6'>
              <InputSearch
                placeholder='Cerca tra le nostre delizie'
                onChange={(e) => setSearchword(e.target.value)}
                onCancel={() => setSearchword('')}
              />
            </div>
          </header>
        </section>

        {children}
      </section>
    </searchContext.Provider>
  );
}
