import { useEffect } from 'react';
import { targetIsDescendant } from '../../common/dom';

export default function useClickOutside(ref, handler) {
  useEffect(() => {
    const documentClick = evt => {
      if (!targetIsDescendant(evt, ref.current)) {
        handler(evt);
      }
    };
    document.addEventListener('click', documentClick, true);
    document.addEventListener('touchstart', documentClick, true);
    return () => {
      document.removeEventListener('click', documentClick);
      document.removeEventListener('touchstart', documentClick);
    };
  }, [ref, handler]);
}
