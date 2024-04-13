import { useEffect, useState } from 'react';

export default function useSticky(ref: React.RefObject<HTMLElement>): {
  isSticky: boolean;
} {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const getStickyThreshold = (): number => {
      const initialOffset = Number(ref?.current?.offsetTop);
      const initialHeight = Number(ref?.current?.offsetHeight);

      return initialHeight + initialOffset;
    };

    const stickyThreshold = getStickyThreshold();

    if (Number.isNaN(stickyThreshold)) return;

    window.addEventListener('scroll', () => {
      const isSticky = window.scrollY > stickyThreshold;

      setIsSticky(isSticky);
    });
  }, [ref]);

  return { isSticky };
}
