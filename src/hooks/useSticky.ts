import { useCallback, useEffect, useState } from 'react';

export default function useSticky(ref: React.RefObject<HTMLElement>): {
  isSticky: boolean;
} {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const getThreshold = useCallback(() => {
    const offsetTop = ref.current?.offsetTop ?? 0;
    const marginTop = ref.current?.style?.marginTop ?? 0;
    return Number(offsetTop) + Number(marginTop);
  }, [ref]);

  useEffect(() => {
    const stickyThreshold = getThreshold();
    const isSticky = window.scrollY > stickyThreshold;

    setIsSticky(isSticky);
  }, [getThreshold]);

  useEffect(() => {
    const stickyThreshold = getThreshold();

    window.addEventListener('scroll', () => {
      const isSticky = window.scrollY > stickyThreshold;

      setIsSticky(isSticky);
    });
  }, [ref, getThreshold]);

  return { isSticky };
}
