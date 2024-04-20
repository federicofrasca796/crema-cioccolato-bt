import { useCallback, useEffect, useState } from 'react';

export default function useSticky(ref: React.RefObject<HTMLElement>): {
  isSticky: boolean;
} {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const evaluateSticky = useCallback(() => {
    const offsetTop = ref.current?.offsetTop ?? 0;
    const marginTop = ref.current?.style?.marginTop ?? 0;
    const stickyThreshold = Number(offsetTop) + Number(marginTop);
    return window.scrollY > stickyThreshold;
  }, [ref]);

  useEffect(() => {
    const isSticky = evaluateSticky();

    setIsSticky(isSticky);
  }, [evaluateSticky]);

  useEffect(() => {
    const offsetTop = ref.current?.offsetTop ?? 0;
    const marginTop = ref.current?.style?.marginTop ?? 0;
    const stickyThreshold = Number(offsetTop) + Number(marginTop);

    if (Number.isNaN(stickyThreshold)) return;

    window.addEventListener('scroll', () => {
      const isSticky = window.scrollY > stickyThreshold;

      setIsSticky(isSticky);
    });
  }, [ref]);

  return { isSticky };
}
