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
    }, 200);

    return () => clearTimeout(timeout);
  }, [query, writtingMode, searchType]);

  return (
    <div
      className="w-full max-w-full md:max-w-md
      flex rounded-md shadow-sm duration-300
      bg-white text-secondary dark:text-light dark:bg-darkoverlay"
    >
      <Listbox value={searchType} onChange={setSearchType}>
        <div className="relative flex items-center justify-start">
          <Listbox.Button className="flex items-center space-x-4 pl-6">
            <span>{searchTypeMap[searchType].symbol}</span>
            <span className="hidden md:block">
              {searchTypeMap[searchType].name}
            </span>
            <RiExpandUpDownLine />
          </Listbox.Button>
          <Listbox.Options
            className="w-full min-w-fit absolutez-10 absolute top-16
            overflow-clip rounded-md shadow-sm shadow-shadow
            bg-white dark:bg-darkoverlay"
          >
            {Object.entries(searchTypeMap).map(([key, { symbol, name }]) => (
              <Listbox.Option
                key={key}
                value={key}
                className="w-full flex space-x-2 py-2 px-5 hover:cursor-pointer
                ui-active:bg-secondary ui-active:text-light"
              >
                <span className="mr-2">{symbol}</span>
                <span>{name}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      <Combobox onChange={handleSearch}>
        <div className="relative w-full py-3 flex">
          <Combobox.Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && handleSearch(query)}
            placeholder="Type to search..."
            className="px-4 w-full bg-transparent focus:outline-none"
          />
          <Combobox.Options
            className="absolute z-10 top-16 w-full rounded-md overflow-clip
            shadow-sm shadow-shadow bg-white dark:bg-darkoverlay"
          >
            {query.length > 0 && (
              <Combobox.Option
                value={query}
                className="group flex justify-between py-2 px-6
                ui-active:bg-secondary ui-active:text-white cursor-pointer"
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
                  className="group flex justify-between py-2 px-6
                  ui-active:bg-secondary cursor-pointer"
                >
                  <div className="overflow-hidden whitespace-nowrap ui-active:text-white">
                    {secondary ?? primary}
                  </div>
                  <div
                    className="text-secondary opacity-60
                    overflow-hidden whitespace-nowrap
                    dark:opacity-100 ui-active:text-light"
                  >
                    {secondary && `(${primary})`}
                  </div>
                </Combobox.Option>
              ))}
          </Combobox.Options>
          <Tooltip
            className="mr-4 cursor-pointer"
            text="Toggle writing mode"
            onClick={toggleWrittingMode}
          >
            {writtingMode == "hiragana" ? "Aa" : "あ"}
          </Tooltip>
        </div>
      </Combobox>
      <button
        className="px-4 rounded-r-md
        text-white bg-secondary hover:bg-primary"
        aria-label="Search"
        onClick={() => handleSearch(query)}
      >
        <RiSearchLine className="stroke-1" />
      </button>
    </div>
  );
};

export default SearchBar;
