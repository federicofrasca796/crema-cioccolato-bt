import clsx from 'clsx';

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={clsx('h-full py-5 md:-m-5', className)}>
      <div className='swiper-wrapper justify-center gap-5'>
        <div className='swiper-slide swiper-slide-prev relative !hidden !w-9/12 drop-shadow-md md:!block'>
          <div className='skeleton h-full w-full'></div>
        </div>
        <div className='swiper-slide swiper-slide-active relative drop-shadow-md md:!w-9/12'>
          <div className='skeleton h-full w-full'></div>
        </div>
        <div className='swiper-slide swiper-slide-next relative !hidden !w-9/12 drop-shadow-md md:!block'>
          <div className='skeleton h-full w-full'></div>
        </div>
      </div>
    </div>
  );
}
