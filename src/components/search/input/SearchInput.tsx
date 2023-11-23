"use client";

import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useRouter, useSearchParams } from "next/navigation";
import SearchSelect from "./SearchSelect";
import { SearchType } from "@/utils/search";

const SearchInput = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [input, setInput] = useState(searchParams.get("query") || "");
  const [type, setOption] = useState<SearchType>(
    parseInt(searchParams.get("type") || "0")
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => event.target.value);
  };

  const handleSelect = (value: SearchType) => {
    setOption(value);
  };

  const handleSearch = () => {
    if (input) {
      push(`/search?type=${type}&query=${input}`);
    }
  };

  return (
    <div
      className="w-full max-w-full md:max-w-md 
      flex rounded-md shadow-md duration-300
      bg-white text-secondary dark:text-light dark:bg-darkoverlay"
    >
      <SearchSelect value={type} onSelect={handleSelect} />
      <input
        type="search"
        value={input}
        onChange={handleInput}
        placeholder="Type to search..."
        className="py-3 px-6 w-full bg-transparent focus:outline-none"
      />
      <button
        className="px-4 rounded-r-md 
        text-white bg-secondary hover:bg-primary"
        onClick={handleSearch}
      >
        <RiSearchLine className="stroke-1" />
      </button>
    </div>
  );
};

export default SearchInput;
