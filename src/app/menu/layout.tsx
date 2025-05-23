'use client';

import GoBack from '@/components/elements/GoBack';
import InputSearch from '@/components/elements/Input/InputSearch';
import BadgeCarousel from '@/components/TopicFilters/BadgeCarousel';
import TextCarousel from '@/components/TopicFilters/TextCarousel';
import { SearchContext } from '@/store/searchword';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

// TODO - transform component in server component to allow for easy metadata settings
// export const metadata: Metadata = {
//   title: 'Menù - Crema & Cioccolato BT',
//   description: 'La gelateria dai gusti più folli e golosi di Barletta'
// };
export default function MenuLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [searchword, setSearchword] = useState<string>('');

  const { topic } = useParams();
  const parsedTopic = topic ? topic[0] : 'all';

  return (
    <SearchContext.Provider value={searchword}>
      <section id='menu-layout'>
        <section className='mb-12 mt-10 md:mb-14 md:mt-20'>
          <header>
            <div className='container'>
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

            <form
              className='container mt-6 grid gap-5 xl:grid-cols-2'
              onSubmit={(e) => e.preventDefault()}
            >
              <InputSearch
                placeholder='Cerca tra le nostre delizie'
                onChange={(e) => setSearchword(e.target.value)}
                onCancel={() => setSearchword('')}
              />
            </form>
          </header>
        </section>

        {children}
      </section>
    </SearchContext.Provider>
  );
}
