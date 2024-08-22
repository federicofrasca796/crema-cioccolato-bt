import GoBack from '@/components/elements/GoBack';
import TopicsCarousel from '@/components/TopicsCarousel/TopicsCarousel';
import prisma from '@/lib/db';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

export default async function MenuLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const topics = await prisma.topic.findMany({
    select: {
      id: true,
      slug: true,
      name: true
    }
  });

  return (
    <section id='menu-layout'>
      <section className='mb-10 mt-14'>
        <header>
          <div className='container mx-auto'>
            <GoBack />
            <h1 className='mt-10 font-display text-3xl font-bold text-primary-600'>
              Menù
            </h1>
          </div>

          <div className='overflow-hidden'>
            <TopicsCarousel topics={topics} activeTopic={params.topic} />
          </div>
        </header>
      </section>

      {children}
    </section>
  );
}
