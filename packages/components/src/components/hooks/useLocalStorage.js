// @flow
import { useState, useCallback } from 'react';

export function lsRead(key: string, initial: any) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initial;
  } catch (error) {
    return initial;
  }
}

export function lsWrite(key: string | Function, value: any, stored: any) {
  const valueToStore = value instanceof Function ? value(stored) : value;
  try {
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  } catch (error) {
    console.log(error);
  }
  return valueToStore;
}

export function useLocalStorage(key: string, initial: any) {
  const [saved, setSaved] = useState(() => lsRead(key, initial));

  const set = useCallback(
    (value: any) => {
      setSaved(lsWrite(key, value, saved));
    },
    [key, saved]
  );

  return [saved, set];
}
