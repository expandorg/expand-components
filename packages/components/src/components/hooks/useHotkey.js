import { useEffect, useCallback } from 'react';

export default function useHotkey(keyCode, handler) {
  const keyDown = useCallback(
    evt => {
      if (evt.keyCode === keyCode) {
        handler(evt);
      }
    },
    [keyCode, handler]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyDown);
    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  }, [keyDown]);
}
