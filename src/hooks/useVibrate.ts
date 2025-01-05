import { useCallback } from 'react';

/**
 * A custom hook that returns the `vibrate` method of the `navigator` object
 * if the environment supports vibration. If not, returns a no-op function.
 *
 * @returns  The `vibrate` method or a no-op function.
 */
export default function useVibrate(pattern: VibratePattern) {
  const vibrate = useCallback(() => {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    } else {
      console.warn('Vibration API is not supported on this device.');
    }
  }, [pattern]);

  return vibrate;
}
