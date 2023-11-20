"use client";

import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import SearchSelect from "./SearchSelect";
import { SearchOption } from "@/utils/search";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const [option, setOption] = useState(SearchOption.Word);
  const router = useRouter();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => event.target.value);
  };

  const handleSelect = (value: SearchOption) => {
    setOption(value);
  };

  const handleSearch = () => {
    if (input) {
      router.push(`/search?type=${option},query=${input}`);
    }
  };

  return (
    <div
      className="flex rounded-md shadow-md duration-300
      bg-white text-secondary dark:text-light dark:bg-secondary"
    >
      <SearchSelect value={option} onSelect={handleSelect} />
      <input
        type="search"
        value={input}
        onChange={handleInput}
        placeholder="Type to search..."
        className="py-3 px-6 w-full bg-transparent focus:outline-none"
      />
      <button
        className="px-4 rounded-r-md 
        text-white bg-secondary dark:hover:text-secondary dark:hover:bg-light hover:bg-primary"
        onClick={handleSearch}
      >
        <RiSearchLine className="stroke-1" />
      </button>
    </div>
  );
};

export default SearchInput;
