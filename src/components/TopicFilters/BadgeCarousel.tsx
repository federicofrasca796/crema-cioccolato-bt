'use client';

import 'swiper/css';

import { Topic, topics } from '@/data/menu/topics';
import { useRouter } from 'next/navigation';
import ClickableBadge from '../elements/Badge/ClickableBadge';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function BadgeCarousel({
  activeTopic
}: {
  activeTopic?: Topic['slug'];
}) {
  const router = useRouter();
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (swiper && !swiper.destroyed) {
      const activeSlideIdx = swiper.slides.findIndex(
        (slide) => slide.dataset.history === activeTopic
      );

      swiper.slideTo(activeSlideIdx);
    }
  }, [swiper, activeTopic]);

  const handleSelect = (topic: Topic['slug']) => () => {
    router.replace(`/menu/${topic}`);
  };

  return (
    <Swiper
      onSwiper={(swiper: any) => {
        setSwiper(swiper);
      }}
      modules={[FreeMode]}
      freeMode
      slidesPerView={'auto'}
      // slidesOffsetBefore={16}
      // slidesOffsetAfter={16}
      // wrapperClass='swiper-wrapper container !box-border'
      className='mx-auto mt-5 h-max items-start max-md:!px-4 sm:max-w-[568px] md:max-w-[704px] md:!overflow-visible lg:max-w-[896px] xl:max-w-[1120px] 2xl:max-w-[1344px]'
      // cssMode
      grabCursor
    >
      <SwiperSlide key={0} className='!w-fit' data-history='all'>
        <ClickableBadge
          label={'Tutte'}
          isActive={'all' === activeTopic}
          onClick={handleSelect('')}
          size='large'
          className='flex-shrink-0 rounded-full px-3 shadow-sm'
        />
      </SwiperSlide>
      {topics.map((topic) => (
        <SwiperSlide
          key={topic.id}
          className='ml-2 !w-fit'
          data-history={topic.slug}
        >
          <ClickableBadge
            label={topic.name}
            iconLeft={topic.icon}
            isActive={topic.slug === activeTopic}
            onClick={handleSelect(topic.slug)}
            size='large'
            className='flex-shrink-0 rounded-full px-3 shadow-sm'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
