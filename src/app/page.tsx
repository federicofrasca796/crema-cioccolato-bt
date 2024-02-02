'use client';
import Button from '@/components/ui/Button';
import { heroCarouselSlides } from '@/data/homepage';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import IcecreamTransparent from '../../public/assets/icecream-transparent.png';

export default function Home() {
  const renderSlides = (slide: { src: string; alt: string }, idx: number) => (
    <SwiperSlide className='relative drop-shadow-md' key={`slide-${idx}`}>
      <Image
        className='rounded-xl'
        src={slide.src}
        alt={slide.alt}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        fill
        style={{
          objectFit: 'cover'
        }}
        priority={idx === 0}
      />
    </SwiperSlide>
  );

  return (
    <div>
      <section className='bottom-wave group h-[calc(100dvh-112px)] bg-gradient-to-b from-transparent to-secondary px-3.5 after:h-8'>
        <div className='mx-auto h-[calc(100%-150px)] md:container'>
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            grabCursor
            className='hp-carousel h-full group-has-[.swiper-outside-pagination]:h-[calc(100%-30px)]'
            autoplay={{
              delay: 10000,
              disableOnInteraction: false
            }}
            spaceBetween={10}
            centeredSlides
            slidesPerView={1}
            pagination={{
              el: '.swiper-outside-pagination',
              clickable: true
            }}
          >
            {heroCarouselSlides.map(renderSlides)}
          </Swiper>
          <div className='swiper-outside-pagination mt-2 text-center' />
        </div>
        <div className='mt-5 text-center'>
          <Button color='accent' startIcon={<BookOpenIcon className='w-6' />}>
            Scopri il nostro menù
          </Button>
          <ChevronDownIcon className='mx-auto mt-4 w-10 fill-smokyBrown-600 ' />
        </div>
      </section>

      <section className='container mx-auto my-20' id='servizi'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='prose'>
            <h1>Gusta la nostra varietà di dolci e gelati</h1>
            <p>
              Artigianali, naturali e freschi. Le nostre preparazioni sono
              sempre giornaliere.
            </p>
          </div>
          <div>
            <div className='relative mx-auto h-96 w-96 overflow-hidden rounded-full bg-gradient-to-t from-secondary-300'>
              <Image
                className='rounded-xl'
                src={IcecreamTransparent}
                alt='Icecream vanilla flavour with chocolate sprinkles on top'
                sizes='100%'
                fill
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className='min-h-[200px]' id='dicono-di-noi'>
        Dicono di noi
      </section>
      <section className='min-h-[200px]' id='dove-siamo'>
        Dove siamo
      </section>
    </div>
  );
}
