// @flow
import { useState, useCallback } from 'react';

export function lsRead(key: string, initial?: any) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initial;
  } catch (error) {
    return initial;
  }
}

export function lsWrite(key: string, value: any) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export function lsRemove(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}

export function useLocalStorage(key: string, initial?: any) {
  const [saved, setSaved] = useState(() => lsRead(key, initial));

  const set = useCallback(
    (value: any) => {
      lsWrite(key, value);
      setSaved(value);
    },
    [key]
  );

  return [saved, set];
}
