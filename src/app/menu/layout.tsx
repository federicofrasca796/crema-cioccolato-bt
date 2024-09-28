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
  const parsedTopic = topic ? topic[0] : topic;

  return (
    <section id='menu-layout'>
      <section className='mb-8 mt-10 md:mb-10 md:mt-20'>
        <header>
          <div className='container mx-auto'>
            <Link
              onClick={() => router.back()}
              href=''
              className='mb-8 inline-block w-6'
            >
              <ArrowLeftIcon />
            </Link>
            <h1 className='font-display text-3xl font-bold text-primary-600'>
              Menù
            </h1>
          </div>

          <div className='overflow-hidden max-lg:hidden'>
            <TopicsCarousel activeTopic={parsedTopic} />
          </div>

          <div className='mt-4 lg:hidden'>
            <TopicFilters activeTopic={parsedTopic} />
          </div>
        </header>
      </section>

      {children}
    </section>
  );
}
