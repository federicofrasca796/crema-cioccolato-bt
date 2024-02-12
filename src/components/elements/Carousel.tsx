'use client';

import { isObject } from '@/utils/generic';
import clsx from 'clsx';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { AutoplayOptions, PaginationOptions } from 'swiper/types';

export type Slide = {
  alt: string;
  src: string;
};

export interface CarouselProps {
  slides: Slide[];
  className?: string;
  prioritize?: boolean;
  pagination?: boolean | PaginationOptions | undefined;
  id: string; // A unique identifier for the carousel in order to get the correct swiper instance
  autoplay?: boolean | AutoplayOptions | undefined;
}

export default function Carousel({
  slides,
  className,
  prioritize = false,
  id,
  pagination,
  autoplay
}: CarouselProps) {
  const renderSlides = (slide: { src: string; alt: string }, idx: number) => (
    <SwiperSlide className='relative drop-shadow-md' key={`${id}-slide-${idx}`}>
      <Image
        className='rounded-xl'
        src={slide.src}
        alt={slide.alt}
        sizes='(max-width: 768px) 1920px, (max-width: 1200px) 100vw, 100vw'
        fill
        style={{
          objectFit: 'cover'
        }}
        priority={prioritize && idx === 0}
      />
    </SwiperSlide>
  );

  return (
    <div className='group h-full'>
      <Swiper
        modules={[
          A11y,
          ...(pagination ? [Pagination] : []),
          ...(autoplay ? [Autoplay] : [])
        ]}
        grabCursor
        // id={id}
        className={clsx(
          className,
          'h-full group-has-[.swiper-outside-pagination]:h-[calc(100%-30px)]'
        )}
        autoplay={
          autoplay && {
            delay: 10000,
            disableOnInteraction: false,
            ...(isObject(autoplay) && { autoplay })
          }
        }
        spaceBetween={10}
        centeredSlides
        slidesPerView={1}
        pagination={
          pagination && {
            el: `#${id}.swiper-outside-pagination`,
            clickable: true,
            ...(isObject(pagination) && { pagination })
          }
        }
      >
        {slides.map(renderSlides)}
      </Swiper>

      {pagination && (
        <div id={id} className='swiper-outside-pagination mt-2 text-center' />
      )}
    </div>
  );
}
