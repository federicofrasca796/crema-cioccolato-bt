'use client';

import { Prisma } from '@prisma/client';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface TopicCarouselProps {
  topics: Prisma.TopicGetPayload<{
    select: { id: true; slug: true; name: true };
  }>[];
  activeTopic?: Prisma.TopicGetPayload<{}>['slug'] | Params[string];
}

export default function TopicsCarousel({
  topics,
  activeTopic
}: TopicCarouselProps) {
  const router = useRouter();
  const { theme } = resolveConfig(tailwindConfig);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    // Preserve active topic on page load
    if (swiper && activeTopic) {
      const activeSlideIdx = swiper.slides.findIndex(
        (slide) => slide.dataset.history === activeTopic
      );

      swiper.slideTo(activeSlideIdx);
    }
  }, [swiper, activeTopic]);

  const renderTopicSlide = (
    topic: TopicCarouselProps['topics'][number],
    idx: number
  ) => (
    <SwiperSlide
      tag='a'
      key={topic.id}
      className='md:!w-fit'
      data-history={topic.slug}
      onClick={() => {
        swiper?.slideTo(idx + 1);
      }}
    >
      {({ isActive }) => (
        <span
          title={topic.name}
          className={clsx(
            'cursor-pointer font-serif text-5xl no-underline underline-offset-4 transition-all duration-500',
            {
              'text-smokyBrown/20': !isActive,
              'text-smokyBrown': isActive
            }
          )}
        >
          {topic.name}
        </span>
      )}
    </SwiperSlide>
  );

  const handleSwiperHistory = (swiper: SwiperClass) => {
    /**
     * Activate aptic feedback on topic change.
     */
    const canVibrate = typeof window !== 'undefined' && navigator;
    if (canVibrate) navigator.vibrate(1);

    /**
     * Enables soft navigation between topics.
     */
    const slideHistory =
      swiper.slides[swiper.activeIndex].dataset.history ?? '';

    if (slideHistory.length > 0) {
      router.replace(`/menu/${slideHistory}`);
    } else {
      router.replace('/menu');
    }
  };

  return (
    <>
      <Swiper
        tag='nav'
        onSwiper={(swiper: any) => {
          setSwiper(swiper);
          // Hacky solution to overcome issue with last slides block from being set to active
          swiper.snapGrid = [...swiper.slidesGrid];
        }}
        onReachEnd={(swiper: any) => (swiper.snapGrid = [...swiper.slidesGrid])}
        onSlideChange={handleSwiperHistory}
        breakpoints={{
          [parseInt(theme.screens.md)]: {
            slidesPerView: 'auto',
            spaceBetween: 40
          }
        }}
        spaceBetween={60}
        slidesPerView={1.45}
        rewind
        className='mx-auto mt-5 h-max items-start max-md:!px-4 sm:max-w-[568px] md:max-w-[704px] md:!overflow-visible lg:max-w-[896px] xl:max-w-[1120px] 2xl:max-w-[1344px]'
      >
        {renderTopicSlide(
          {
            name: 'Tutto il menù',
            slug: '',
            id: 0
          },
          -1
        )}
        {topics.map(renderTopicSlide)}
      </Swiper>
    </>
  );
}
