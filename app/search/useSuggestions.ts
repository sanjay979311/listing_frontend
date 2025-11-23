// hooks/search/useSuggestions.ts
import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export const useSuggestions = (searchValue: string, allItems: string[]) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 300);

  useEffect(() => {
    if (!debounced) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    const timeout = setTimeout(() => {
      const filtered = allItems.filter((item) =>
        item.toLowerCase().includes(debounced.toLowerCase())
      );

      setSuggestions(filtered);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [debounced]);

  return { suggestions, loading };
};
