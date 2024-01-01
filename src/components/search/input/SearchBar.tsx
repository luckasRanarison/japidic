"use client";

import { useEffect, useState } from "react";
import { RiSearchLine, RiExpandUpDownLine } from "react-icons/ri";
import { useRouter, useSearchParams } from "next/navigation";
import {
  SearchTypeAlias,
  getTypeFromAlias,
  searchTypeMap,
} from "@/utils/search";
import { toRomaji, toHiragana } from "wanakana";
import Tooltip from "@/components/common/Tooltip";
import { getCompletion } from "@/api/jotoba";
import { Combobox, Listbox } from "@headlessui/react";

type WrittingMode = "romaji" | "hiragana";

const SearchBar = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [writtingMode, setWrittingMode] = useState<WrittingMode>();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [searchType, setSearchType] = useState(
    (searchParams.get("type") as SearchTypeAlias) ?? "word"
  );

  const handleSearch = (input: string) => {
    if (input) {
      setWrittingMode(undefined);
      setSuggestions([]);
      setQuery(input);
      push(`/search?type=${searchType}&query=${input}`);
    }
  };

  const toggleWrittingMode = () => {
    setWrittingMode((prev) => (prev == "hiragana" ? "romaji" : "hiragana"));
  };

  useEffect(() => {
    if (writtingMode == "romaji") {
      setQuery(toRomaji(query));
    } else if (writtingMode == "hiragana") {
      setQuery(toHiragana(toRomaji(query))); // convert to romaji first to handle ん
    }

    const timeout = setTimeout(async () => {
      if (!query) {
        setSuggestions([]);
      } else {
        try {
          const res = await getCompletion({
            input: query,
            searchType: getTypeFromAlias(searchType),
            lang: "en-US",
          });
          setSuggestions(res.suggestions.slice(0, 4));
        } catch (_) {
          // Dismisss errors
        }
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, writtingMode, searchType]);

  useEffect(() => {
    handleSearch(query);
  }, [searchType]);

  return (
    <div
      className="relative py-3 w-full max-w-full md:max-w-md
      flex items-center rounded-md shadow-sm duration-300
      bg-white text-secondary dark:text-light dark:bg-darkoverlay
      border-[1px] border-shadow dark:border-darkborder"
    >
      <RiSearchLine className="ml-4 text-secondary dark:text-white" />
      <Combobox onChange={handleSearch}>
        <Combobox.Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && handleSearch(query)}
          placeholder="Type to search..."
          className="px-4 w-full bg-transparent focus:outline-none"
        />
        {query && (
          <Combobox.Options
            className="absolute z-10 top-16 w-full overflow-clip p-2
            rounded-md shadow-sm bg-white dark:bg-darkoverlay
            border-[1px] border-shadow dark:border-darkborder"
          >
            {query.length > 0 && (
              <Combobox.Option
                value={query}
                className="flex justify-between py-2 px-6 cursor-pointer rounded-md
                ui-active:bg-highlight dark:ui-active:bg-darkhighlight
                ui-active:text-secondary dark:ui-active:text-white"
              >
                {query}
              </Combobox.Option>
            )}
            {suggestions
              .filter((s) => s.primary !== query)
              .map(({ primary, secondary }, key) => (
                <Combobox.Option
                  key={key}
                  value={secondary ?? primary}
                  className="flex justify-between py-2 px-6 cursor-pointer rounded-md
                  ui-active:bg-highlight dark:ui-active:bg-darkhighlight
                  ui-active:text-secondary dark:ui-active:text-white"
                >
                  <div
                    className="overflow-hidden whitespace-nowrap
                    ui-active:text-secondary dark:ui-active:text-white"
                  >
                    {secondary ?? primary}
                  </div>
                  <div
                    className="text-secondary opacity-60
                    overflow-hidden whitespace-nowrap
                    dark:opacity-100 ui-active:text-secondary"
                  >
                    {secondary && `(${primary})`}
                  </div>
                </Combobox.Option>
              ))}
          </Combobox.Options>
        )}
        <Tooltip
          className="mr-4 cursor-pointer"
          text="Toggle writing mode"
          onClick={toggleWrittingMode}
        >
          {writtingMode == "hiragana" ? "Aa" : "あ"}
        </Tooltip>
      </Combobox>
    </div>
  );
};

export default SearchBar;
