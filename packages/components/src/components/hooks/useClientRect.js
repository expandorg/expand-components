// @flow
import { useState, useEffect, useRef } from 'react';
import debounce from 'debounce';

export default function useClientRect(dobounceInterval: number = 200) {
  // $FlowFixMe
  const ref = useRef(null);

  const [rect, setRect] = useState(null);

  useEffect(() => {
    const resize = debounce(() => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    }, dobounceInterval);

    resize();
    window.addEventListener('resize', resize);
    return () => {
      resize.clear();
      window.removeEventListener('resize', resize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, rect];
}
