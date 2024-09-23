'use client';

import TopicFilters from '@/components/TopicFilters';
import TopicsCarousel from '@/components/TopicsCarousel/TopicsCarousel';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

export default function MenuLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { topic } = useParams();

  return (
    <section id='menu-layout'>
      <section className='mb-8 mt-10 md:mb-10 md:mt-20'>
        <header>
          <div className='container mx-auto'>
            <Link
              onClick={() => router.back()}
              href=''
              className='inline-block w-6'
            >
              <ArrowLeftIcon />
            </Link>
            <h1 className='font-display text-3xl font-bold text-primary-600'>
              Menù
            </h1>
          </div>

          <div className='overflow-hidden max-lg:hidden'>
            <TopicsCarousel activeTopic={topic ? topic[0] : topic} />
          </div>

          <div className='container mx-auto mt-8 lg:hidden'>
            <TopicFilters activeTopic={topic ? topic[0] : topic} />
          </div>
        </header>
      </section>

      {children}
    </section>
  );
}
