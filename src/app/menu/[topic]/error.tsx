'use client';

import { useEffect } from 'react';

export default function ErrorMenuByTopic({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <h1>Oh no!</h1>;
}
