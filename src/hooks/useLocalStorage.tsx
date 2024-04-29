import { useEffect, useState } from "react";

function UseLocalStorage(key: string, defaultValue: string) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (err) {
      console.log(err);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }, [key, defaultValue]);
  return [value, setValue];
}
export default UseLocalStorage;
