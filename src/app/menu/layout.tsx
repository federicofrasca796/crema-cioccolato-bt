'use client';

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
  const params = useParams();

  return (
    <section id='menu-layout'>
      <section className='mb-10 mt-20'>
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

          <TopicsCarousel activeTopic={params.topic} />
        </header>
      </section>

      {children}
    </section>
  );
}
