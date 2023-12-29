"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useRouter, useSearchParams } from "next/navigation";
import SearchSelect from "./SearchSelect";
import { SearchTypeAlias, getTypeFromAlias } from "@/utils/search";
import { toRomaji, toHiragana } from "wanakana";
import Tooltip from "@/components/common/Tooltip";
import SearchSuggestion from "./SearchSuggestion";
import { getCompletion } from "@/api/jotoba";

type WrittingMode = "romaji" | "hiragana";

const SearchBar = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [writtingMode, setWrittingMode] = useState<WrittingMode>();
  const [input, setInput] = useState(searchParams.get("query") ?? "");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const [hasTyped, setHasTyped] = useState(false);
  const [searchType, setSearchType] = useState(
    (searchParams.get("type") as SearchTypeAlias) ?? "word"
  );

  const handleSearch = (input: string) => {
    if (input) {
      setWrittingMode(undefined);
      setInput(input);
      setHasTyped(false);
      setSuggestions([]);
      push(`/search?type=${searchType}&query=${input}`);
    }
  };

  const updateIndex = (change: number) => {
    const result = suggestionIndex + change;

    if (result < 0) {
      setSuggestionIndex(suggestions.length - 1);
    } else if (result > suggestions.length - 1) {
      setSuggestionIndex(0);
    } else {
      setSuggestionIndex(result);
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setHasTyped(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Enter":
        const { secondary, primary } = suggestions[suggestionIndex] ?? {};
        handleSearch(secondary ?? primary ?? input);
        break;
      case "ArrowUp":
        updateIndex(-1);
        event.preventDefault();
        break;
      case "ArrowDown":
        updateIndex(1);
        event.preventDefault();
        break;
    }
  };

  useEffect(() => {
    if (writtingMode == "romaji") {
      setInput(toRomaji(input));
    } else if (writtingMode == "hiragana") {
      setInput(toHiragana(toRomaji(input))); // convert to romaji first to handle ん
    }

    setSuggestionIndex(-1);
  }, [input, writtingMode]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!input) {
        setSuggestions([]);
      } else {
        try {
          const res = await getCompletion({
            input,
            searchType: getTypeFromAlias(searchType),
            lang: "en-US",
          });
          setSuggestions(res.suggestions.slice(0, 5));
        } catch (_) {
          // Dismisss errors
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [input, searchType]);

  return (
    <div
      className="w-full max-w-full md:max-w-md
      flex rounded-md shadow-sm duration-300
      bg-white text-secondary dark:text-light dark:bg-darkoverlay"
    >
      <SearchSelect
        value={searchType}
        onSelect={(value) => setSearchType(value)}
      />
      <div className="relative w-full py-3 flex">
        <input
          type="search"
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyPress}
          placeholder="Type to search..."
          className="px-4 w-full bg-transparent focus:outline-none"
        />
        <Tooltip
          className="mr-4 cursor-pointer"
          text="Toggle writing mode"
          onClick={() =>
            setWrittingMode((prev) =>
              prev == "hiragana" ? "romaji" : "hiragana"
            )
          }
        >
          {writtingMode == "hiragana" ? "Aa" : "あ"}
        </Tooltip>
        {hasTyped && (
          <SearchSuggestion
            index={suggestionIndex}
            suggestions={suggestions}
            onSelect={(item) => handleSearch(item)}
          />
        )}
      </div>
      <button
        className="px-4 rounded-r-md
        text-white bg-secondary hover:bg-primary"
        aria-label="Search"
        onClick={() => handleSearch(input)}
      >
        <RiSearchLine className="stroke-1" />
      </button>
    </div>
  );
};

export default SearchBar;
