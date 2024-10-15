'use client';

import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GoBack() {
  const router = useRouter();

  return (
    <Link
      onClick={() => router.back()}
      href=''
      className='mb-8 inline-block w-6'
    >
      <ArrowLeftIcon />
    </Link>
  );
}
