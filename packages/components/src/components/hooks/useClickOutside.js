import { useEffect } from 'react';

export default function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener, true);
    document.addEventListener('touchstart', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
      document.removeEventListener('touchstart', listener, true);
    };
  }, [ref, handler]);
}
