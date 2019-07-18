// @flow
import { useState, useCallback } from 'react';

export default function useToggle() {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleAction = useCallback(
    (evt: Event) => {
      if (evt) {
        evt.stopPropagation();
      }
      setVisible(!visible);
    },
    [visible]
  );
  return [visible, toggleAction, setVisible];
}
