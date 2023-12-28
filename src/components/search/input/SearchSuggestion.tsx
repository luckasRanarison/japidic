import { getCompletion } from "@/api/jotoba";
import { SearchTypeAlias, getTypeFromAlias } from "@/utils/search";
import { useEffect, useMemo, useState } from "react";

type SuggestionProps = {
  input: string;
  type: SearchTypeAlias;
  onSelect: (item: string) => void;
};

const SearchSuggestion = ({ input, type, onSelect }: SuggestionProps) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const searchType = useMemo(() => getTypeFromAlias(type), [type]);

  const handleSelect = (item: Suggestion) => {
    onSelect(item.secondary ?? item.primary);
    setSuggestions([]);
  };

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!input) {
        setSuggestions([]);
      } else {
        try {
          const res = await getCompletion({ input, searchType, lang: "en-US" });
          setSuggestions(res.suggestions);
        } catch (_) {
          // Dismisss errors
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <div
      className="absolute z-10 top-16 w-full max-h-48 overflow-y-scroll
      rounded-md shadow-sm shadow-shadow bg-white dark:bg-darkoverlay"
    >
      {suggestions.map((item, index) => (
        <div
          key={index}
          className="group flex justify-between py-2 px-6
          hover:bg-secondary cursor-pointer"
          onClick={() => handleSelect(item)}
        >
          <div className="group-hover:text-white ">
            {item.secondary ?? item.primary}
          </div>
          {item.secondary && (
            <div className="text-secondary group-hover:text-light opacity-60 dark:opacity-100">
              {item.secondary && `(${item.primary})`}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestion;
