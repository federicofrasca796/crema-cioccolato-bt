import { MutableRefObject, useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(
  refs: MutableRefObject<Element | null>[],
  observerOptions?: IntersectionObserverInit
) {
  const [onScreenIds, setOnScreenIds] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setOnScreenIds((prevIds) => {
        const isStored = prevIds.includes(entry.target.id);

        if (!entry.isIntersecting && isStored) {
          // Remove id
          return prevIds.filter((id) => id !== entry.target.id);
        }

        if (entry.isIntersecting && !isStored) {
          // Add id
          return [...prevIds, entry.target.id];
        }

        return prevIds;
      });
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [observerOptions]);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref.current) return;
      if (!observerRef.current) return;

      observerRef.current.observe(ref.current);
    });
  }, [refs]);

  return [onScreenIds, observerRef];
}
