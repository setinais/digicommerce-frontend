import { useState } from "react";

const useLocalStorage = <T>(item: string, valueDefault?: T) => {
  if (!localStorage.getItem(item))
    localStorage.setItem(item, JSON.stringify(valueDefault));

  const [value, setValue] = useState<T>(
    JSON.parse(localStorage.getItem(item) ?? "")
  );
  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    updateLocalStorage,
    value,
  };
};

export default useLocalStorage;
