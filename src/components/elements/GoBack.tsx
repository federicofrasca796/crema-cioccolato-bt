'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface GoBackProps {
  className?: string;
}

const GoBack: React.FC<GoBackProps> = (props) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Link
      onClick={handleGoBack}
      href=''
      className={clsx(
        'inline-block w-6 transition-transform duration-500 hover:-translate-x-2',
        props.className
      )}
      {...props}
    >
      <ArrowLeftIcon />
    </Link>
  );
};

export default GoBack;
