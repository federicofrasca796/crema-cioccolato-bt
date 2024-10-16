'use client';

import ReviewCard from '@/components/ReviewCard';
import Accordion from '@/components/elements/Accordion';
import Link from '@/components/elements/Link';
import Carousel from '@/components/elements/Carousel';
import StickyCTABottom from '@/components/layout/BottomCTA';
import Navbar from '@/components/layout/Navbar';
import { aperitivoCarouselSlides } from '@/data/home/aperitivoCarouselSlides';
import { faqs } from '@/data/home/faq';
import { heroCarouselSlides } from '@/data/home/heroCarouselSlides';
import { reviews } from '@/data/home/reviews';
import { NAV_LINKS } from '@/data/navbar';
import useSticky from '@/hooks/useSticky';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRef } from 'react';

import IcecreamConeCutout from '../../public/images/icecream_cone_cutout.png';
import CroissantIcecreamCutout from '../../public/images/croissant_icecream_cutout.png';

export default function HomePage() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const heroCTA = useRef(null);

  const { isSticky } = useSticky(heroCTA);

  return (
    <>
      <Navbar trackedSections={[section1, section2, section3]} />

      <section>
        <section className='bottom-wave h-[calc(100dvh-112px)] bg-gradient-to-b from-transparent to-secondary px-3.5 after:h-8 md:mt-10 md:h-[calc(100dvh-174px)] md:px-0'>
          <div className='mx-auto h-[calc(100%-150px)] md:h-[calc(100%-180px)]'>
            <Carousel
              id='hero'
              slides={heroCarouselSlides}
              pagination
              spaceBetween={20}
              autoplay
            />
          </div>
          <div className='mt-5 text-center md:mt-3' ref={heroCTA}>
            <Link
              href='menu'
              type='button'
              buttonVariant='contained'
              color='accent'
            >
              <BookOpenIcon className='w-6' />
              Scopri il nostro menù
            </Link>

            <a href={'#' + NAV_LINKS[0].href}>
              <ChevronDownIcon className='mx-auto mt-5 w-10 animate-bounce fill-smokyBrown-600 md:mt-4' />
            </a>
          </div>
        </section>

        <section
          ref={section1}
          id={NAV_LINKS[0].href}
          className='mb-20 mt-24 md:mt-40'
        >
          <div className='container mb-20 grid grid-cols-1 gap-20 md:grid-cols-5'>
            <div className='prose md:col-span-3'>
              <h1>Gusta la nostra varietà di dolci e gelati</h1>
              <p>
                Scegli tra una vasta selezione di deliziosi dolci artigianali,
                preparati giornalmente con cura e passione. Utilizziamo solo
                ingredienti naturali e freschi per garantire un sapore autentico
                e genuino. Lasciati consigliare dai nostri esperti sui migliori
                abbinamenti per un&apos;esperienza personalizzata sui tuoi
                gusti.
              </p>
            </div>
            <figure className='relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-gradient-to-t from-secondary-300 md:col-span-2 md:w-4/5'>
              <Image
                className='rounded-xl'
                src={IcecreamConeCutout}
                alt='Icecream cone'
                sizes='(max-width: 786px) 100vw, 50vw'
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center 30px'
                }}
              />
            </figure>
          </div>

          <div className='container mb-20 grid grid-cols-1 gap-20 md:grid-cols-5'>
            <div className='prose md:col-span-3 md:col-start-3'>
              <h1>Prova i nostri dolci con farcitura al gelato!</h1>
              <p>
                Scegli tra una vasta selezione di deliziosi dolci: soffici
                brioches, crepes sottili e leggere, oppure morbidi pancakes.
                Qualunque sia la tua scelta, potrai farcire il tuo dolce
                preferito con una delle nostre squisite creme o con il nostro
                gelato artigianale, preparato con ingredienti freschi e di alta
                qualità. Concediti un momento di puro piacere e personalizza il
                tuo dolce per una esperienza di gusto indimenticabile.
              </p>
            </div>
            <figure className='relative mx-auto flex aspect-square w-full justify-center overflow-hidden rounded-full bg-gradient-to-t from-accent-100/50 md:-order-1 md:col-span-2 md:w-4/5'>
              <Image
                className='rounded-xl'
                src={CroissantIcecreamCutout}
                alt='Croissant with three balls of Icecream'
                sizes='(max-width: 786px) 100vw, 50vw'
                style={{
                  objectFit: 'contain',
                  width: '80%'
                }}
              />
            </figure>
          </div>

          <div
            className='mx-2 mb-20 rounded-2xl border-2 border-primary-100 bg-primary-0 py-6 md:mx-auto md:max-w-screen-md md:py-16 lg:max-w-screen-lg xl:max-w-screen-xl'
            id='aperitivo'
          >
            <div className='container grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12'>
              <div className='prose prose-h1:text-primary-900'>
                <h1>Aperitivo tra amici?</h1>
                <p>
                  Gusta i nostri{' '}
                  <strong>taglieri di salumi, formaggi e stuzzichini</strong>{' '}
                  per rendere i tuoi incontri speciali. Accompagnati da una
                  vasta scelta di bevande, il nostro aperitivo è un&apos;ottima
                  occasione per condividere buon cibo e momenti piacevoli con le
                  persone che ami. Scegli la qualità dei nostri taglieri per un
                  momento di convivialità memorabile.
                </p>

                <Link
                  href='menu/aperitivo'
                  type='button'
                  buttonVariant='outlined'
                  className='mt-8 md:mt-12'
                  color='accent'
                >
                  <BookOpenIcon className='w-6' />
                  Sfoglia gli appetizer
                </Link>
              </div>

              <div className='h-96 md:h-auto'>
                <Carousel
                  id={'aperitivo'}
                  slides={aperitivoCarouselSlides}
                  pagination
                  spaceBetween={10}
                  loop={false}
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        className='container mb-20'
        id={NAV_LINKS[1].href}
        ref={section2}
      >
        <h1 className='mb-8 font-serif text-4xl'>Domande frequenti</h1>

        <div className='flex flex-col gap-5'>
          {faqs.map((faq, idx) => (
            <Accordion
              datasetName='main-faqs'
              className=''
              title={faq.question}
              content={faq.answer}
              multiselection
              key={idx}
            />
          ))}
        </div>
      </section>

      <section
        className='mx-auto mb-20 md:mb-36'
        id={NAV_LINKS[2].href}
        ref={section3}
      >
        <h1 className='container mb-8 font-serif text-4xl'>Dicono di noi</h1>

        <div className='container hidden gap-5 md:grid md:grid-cols-2'>
          {reviews.slice(0, 4).map((review, idx) => (
            <ReviewCard
              author={review.author}
              rating={review.rating}
              content={review.content}
              url={review.url}
              key={`review-${idx}`}
            />
          ))}
        </div>

        <div className='carousel carousel-center max-w-full space-x-4 px-4 md:hidden'>
          {reviews.map((review, idx) => (
            <div
              className='carousel-item basis-11/12'
              key={`review-carousel-${idx}`}
            >
              <ReviewCard
                url={review.url}
                author={review.author}
                rating={review.rating}
                content={review.content}
              />
            </div>
          ))}
        </div>

        <div className='my-12 text-center'>
          <Link
            className='inline-flex gap-x-4 rounded-md border-2 border-primary bg-babyPowder px-5 py-3 font-semibold no-underline shadow-none transition-shadow duration-500 hover:shadow-md'
            href='https://www.google.it/maps/place/Crema+e+Cioccolato+Barletta/@41.3044675,16.2711089,17z/data=!4m8!3m7!1s0x13381b39570404b1:0xf5b5f94be92f7dbf!8m2!3d41.3044635!4d16.2736838!9m1!1b1!16s%2Fg%2F11s3wxrv3r?entry=ttu'
          >
            Leggi tutte le recensioni
            <ArrowLongRightIcon className='w-5' />
          </Link>
        </div>
      </section>

      <StickyCTABottom sticky={isSticky} />
    </>
  );
}
