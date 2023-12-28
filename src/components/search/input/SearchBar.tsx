"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useRouter, useSearchParams } from "next/navigation";
import SearchSelect from "./SearchSelect";
import { SearchTypeAlias } from "@/utils/search";
import { toRomaji, toHiragana } from "wanakana";
import Tooltip from "@/components/common/Tooltip";
import SearchSuggestion from "./SearchSuggestion";

type WrittingMode = "romaji" | "hiragana";

const SearchBar = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<WrittingMode>();
  const [input, setInput] = useState(searchParams.get("query") ?? "");
  const [hasTyped, setHasTyped] = useState(false);
  const [type, setType] = useState(
    (searchParams.get("type") as SearchTypeAlias) ?? "word"
  );

  const handleSearch = (input: string) => {
    if (input) {
      setInput(input);
      setHasTyped(false);
      push(`/search?type=${type}&query=${input}`);
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setHasTyped(true);
  };

  useEffect(() => {
    if (mode == "romaji") {
      setInput(toRomaji(input));
    } else if (mode == "hiragana") {
      setInput(toHiragana(toRomaji(input))); // convert to romaji first to handle ん
    }
  }, [input, mode]);

  return (
    <div
      className="w-full max-w-full md:max-w-md
      flex rounded-md shadow-sm duration-300
      bg-white text-secondary dark:text-light dark:bg-darkoverlay"
    >
      <SearchSelect value={type} onSelect={(value) => setType(value)} />
      <div className="relative w-full py-3 flex">
        <input
          type="search"
          value={input}
          onChange={handleInput}
          onKeyUp={(event) => event.key == "Enter" && handleSearch(input)}
          placeholder="Type to search..."
          className="px-4 w-full bg-transparent focus:outline-none"
        />
        <Tooltip
          className="mr-4 cursor-pointer"
          text="Toggle writing mode"
          onClick={() =>
            setMode((prev) => (prev == "hiragana" ? "romaji" : "hiragana"))
          }
        >
          {mode == "hiragana" ? "Aa" : "あ"}
        </Tooltip>
        {hasTyped && (
          <SearchSuggestion
            input={input}
            type={type}
            onSelect={(item) => handleSearch(item)}
          />
        )}
      </div>
      <button
        className="px-4 rounded-r-md
        text-white bg-secondary hover:bg-primary"
        onClick={() => handleSearch(input)}
      >
        <RiSearchLine className="stroke-1" />
      </button>
    </div>
  );
};

export default SearchBar;
