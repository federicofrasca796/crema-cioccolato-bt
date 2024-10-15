import { ArrowUpRightIcon, StarIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import googleG from '../../public/images/google_g.png';
export interface ReviewCardProps {
  author: { name: string; lastname?: string; image?: string };
  rating: number;
  content: string;
  url: string;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
}

export default function ReviewCard({
  author,
  rating,
  content,
  url,
  className
}: ReviewCardProps) {
  return (
    <Link
      href={url}
      className={clsx(
        'rounded-2xl border-2 border-secondary-100 bg-babyPowder p-4 transition-colors hover:bg-secondary-0/50',
        className
      )}
    >
      <div className='flex items-start gap-4'>
        {author.image && (
          <figure className='relative aspect-square w-16 overflow-hidden rounded-full'>
            <Image
              src={author.image}
              alt={'author image'}
              sizes='(max-width: 768px) 1920px, (max-width: 1200px) 100vw, 100vw'
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </figure>
        )}
        <div className='w-full'>
          <div className='flex justify-between'>
            <div className='font-serif text-2xl text-primary'>{`${author.name} ${author?.lastname}`}</div>
            <ArrowUpRightIcon className='size-5 text-primary md:size-6' />
          </div>
          <div className='flex items-center gap-x-2'>
            <Image
              src={googleG}
              alt='google reviews logo'
              width={25}
              height={25}
            />

            <span className='flex items-center gap-x-1'>
              <StarIcon className='inline-block w-4 fill-primary-400' />
              <span className='relative top-[1px] text-sm font-semibold text-smokyBrown-700'>
                {rating}/5
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className='pt-5'>
        <p className='line-clamp-3'>{content}</p>
      </div>
    </Link>
  );
}
