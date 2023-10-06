import { useState, useEffect } from "react";
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timout);
    };
  }, [value, delay]);
  return debouncedValue;
}
export default useDebounce;
