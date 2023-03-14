import { useState } from 'react';

export const useLocalStorage = (
  key: string
): { value: unknown; storeValue: (value) => void } => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)));

  const storeValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return { value, storeValue };
};
