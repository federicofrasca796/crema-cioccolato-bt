import { Topic, topics } from '@/data/menu/topics';
import { useRouter } from 'next/navigation';
import ClickableBadge from '../elements/Badge/ClickableBadge';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

export default function TopicFilters({
  activeTopic
}: {
  activeTopic?: Topic['slug'];
}) {
  const router = useRouter();

  const handleSelect = (topic: Topic['slug']) => () => {
    router.replace(`/menu/${topic}`);
  };

  return (
    <Swiper
      modules={[FreeMode]}
      freeMode
      slidesPerView={'auto'}
      spaceBetween={10}
      slidesOffsetBefore={16}
      slidesOffsetAfter={16}
    >
      <SwiperSlide key={0} className='!w-fit'>
        <ClickableBadge
          label={'Tutte'}
          isActive={undefined === activeTopic}
          onClick={handleSelect('')}
          size='large'
          className='flex-shrink-0 rounded-full px-3 shadow-sm'
        />
      </SwiperSlide>
      {topics.map((topic) => (
        <SwiperSlide key={topic.id} className='!w-fit'>
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
