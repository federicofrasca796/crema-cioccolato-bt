'use client';

import { isObject } from '@/utils/generic';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import type { AutoplayOptions, PaginationOptions } from 'swiper/types';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
import Skeleton from './skeleton';
import './styles.css';

export type Slide = {
  alt: string;
  src: string;
};

export interface CarouselProps {
  slides: Slide[];
  className?: React.ComponentProps<typeof Swiper>['className'];
  pagination?: boolean | PaginationOptions | undefined;
  id: string; // A unique identifier for the carousel in order to get the correct swiper instance
  autoplay?: boolean | AutoplayOptions | undefined;
}

const { theme } = resolveConfig(tailwindConfig);

export default function Carousel({
  slides,
  className,
  id,
  pagination,
  autoplay,
  spaceBetween,
  ...props
}: CarouselProps & SwiperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for critical modules to load in order to avoid CLS
    Promise.all([
      ...(pagination ? [import('swiper/css/pagination')] : []),
      ...(props.navigation ? [import('swiper/css/navigation')] : [])
    ]).then(() => {
      setLoading(false);
    });
  }, [pagination, props.navigation, slides]);

  const renderSlides = (slide: { src: string; alt: string }, idx: number) => (
    <SwiperSlide
      className='relative drop-shadow-md md:!w-9/12'
      key={`${id}-slide-${idx}`}
    >
      <Image
        className='rounded-xl'
        src={slide.src}
        alt={slide.alt}
        sizes='(max-width: 768px) 100vw, 50vw'
        fill
        style={{
          objectFit: 'cover'
        }}
        priority={idx === 0 || idx === slides.length - 1}
      />
    </SwiperSlide>
  );

  return (
    <div className='relative h-full overflow-hidden md:p-5'>
      {loading ? (
        <Skeleton className={className} />
      ) : (
        <>
          <Swiper
            className={clsx('h-full !overflow-visible md:-m-5', className)}
            modules={[
              A11y,
              Keyboard,
              ...(pagination ? [Pagination] : []),
              ...(autoplay ? [Autoplay] : [])
            ]}
            breakpoints={{
              [parseInt(theme.screens.md)]: {
                slidesPerView: 'auto'
              }
            }}
            autoplay={
              autoplay && {
                delay: 10000,
                disableOnInteraction: false,
                ...(isObject(autoplay) && { autoplay })
              }
            }
            initialSlide={0}
            spaceBetween={spaceBetween}
            centeredSlides
            keyboard
            loop
            grabCursor
            slidesPerView={1}
            pagination={
              pagination && {
                clickable: true,
                ...(isObject(pagination) && { pagination })
              }
            }
            {...props}
          >
            {slides.map(renderSlides)}
          </Swiper>
        </>
      )}
    </div>
  );
}
