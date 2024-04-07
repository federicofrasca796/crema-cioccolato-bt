import ReviewCard from '@/components/ReviewCard';
import Accordion from '@/components/elements/Accordion';
import Button from '@/components/elements/Button';
import Carousel from '@/components/elements/carousel';
import Link from '@/components/elements/Link';
import { faqs, heroCarouselSlides, reviews } from '@/data/homepage';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import IcecreamTransparent from '../../public/assets/icecream-transparent.png';

export default async function Home() {
  return (
    <>
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
        <div className='mt-5 text-center md:mt-3'>
          <Link
            href='menu'
            type='button'
            buttonVariant='contained'
            color='accent'
          >
            <BookOpenIcon className='w-6' />
            Scopri il nostro menù
          </Link>
          <ChevronDownIcon className='mx-auto mt-4 w-10 fill-smokyBrown-600 ' />
        </div>
      </section>

      <section className='mb-20 mt-40' id='offerte'>
        <div className='container mx-auto mb-20 grid grid-cols-1 gap-20 md:grid-cols-5'>
          <div className='prose md:col-span-3'>
            <h1>Gusta la nostra varietà di dolci e gelati</h1>
            <p>
              Artigianali, naturali e freschi. Le nostre preparazioni sono
              sempre giornaliere.
            </p>
          </div>
          <figure className='relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-gradient-to-t from-secondary-300 md:col-span-2'>
            <Image
              className='rounded-xl'
              src={IcecreamTransparent}
              alt='Icecream vanilla flavour with chocolate sprinkles on top'
              sizes='(max-width: 786px) 100vw, 50vw'
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </figure>
        </div>

        <div className='container mx-auto mb-20 grid grid-cols-1 gap-20 md:grid-cols-5'>
          <div className='prose md:col-span-2 md:col-start-4'>
            <h1>Prova i nostri dolci con farcitura al gelato!</h1>
            <p>
              Scegli tra brioches, crepes e pancakes il dolce che più desideri
              farcire con le creme o con il nostro gelato artigianale.
            </p>
          </div>
          <figure className='relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-gradient-to-t from-secondary-300 md:-order-1 md:col-span-2'>
            <Image
              className='rounded-xl'
              src={IcecreamTransparent}
              alt='Icecream vanilla flavour with chocolate sprinkles on top'
              sizes='(max-width: 786px) 100vw, 50vw'
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </figure>
        </div>

        <div
          className='mx-2 mb-20 rounded-2xl border-2 border-primary-100 bg-primary-0 py-16 md:mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'
          id='aperitivo'
        >
          <div className='container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-12'>
            <div className='prose prose-h1:text-primary-900'>
              <h1>Aperitivo tra amici?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione corrupti, aspernatur consequatur alias necessitatibus
                illo, aliquid ipsum molestias rem nesciunt dolorum ad facilis
                eius fugit laudantium accusantium libero ipsa beatae.
              </p>

              <Link
                href='menu'
                type='button'
                buttonVariant='contained'
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
                slides={heroCarouselSlides}
                pagination
                spaceBetween={10}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto mb-20' id='faq'>
        <h1 className='mb-8 font-serif text-4xl'>Domande frequenti</h1>

        <div className='flex flex-col gap-5'>
          {faqs.map((faq, idx) => (
            <Accordion
              datasetName='main-faqs'
              className=''
              title={faq.question}
              content={faq.answer}
              multiselection
              // checked={idx === 0}
              key={idx}
            />
          ))}
        </div>
      </section>

      <section className='mx-auto mb-36' id='dicono-di-noi'>
        <h1 className='container mx-auto mb-8 font-serif text-4xl'>
          Dicono di noi
        </h1>

        <div className='container mx-auto hidden gap-5 md:grid md:grid-cols-2'>
          {reviews.slice(0, 4).map((review, idx) => (
            <ReviewCard
              author={review.author}
              rating={review.rating}
              content={review.content}
              key={`review-${idx}`}
            />
          ))}
        </div>

        <div className='carousel carousel-center max-w-full space-x-4 px-4 md:hidden'>
          {reviews.slice(0, 4).map((review, idx) => (
            <div
              className='carousel-item basis-11/12'
              key={`review-carousel-${idx}`}
            >
              <ReviewCard
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
    </>
  );
}
