// @flow
import { useState, useCallback } from 'react';

type ToggleResult = [boolean, Function, Function];

export default function useToggle(value?: boolean = false): ToggleResult {
  const [visible, setVisible] = useState(value);
  const toggleAction = useCallback(
    (evt: Event) => {
      if (evt) {
        evt.preventDefault();
        evt.stopPropagation();
      }
      setVisible(!visible);
    },
    [visible]
  );
  return [visible, toggleAction, setVisible];
}
