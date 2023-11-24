"use client";

import { SearchType, optionMap } from "@/utils/search";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

type SelectProps = {
  value: SearchType;
  onSelect: (value: SearchType) => void;
};

const SearchSelect = ({ value, onSelect }: SelectProps) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleList = () => {
    setIsListVisible((prev) => !prev);
  };

  return (
    <div
      onClick={toggleList}
      className="relative pl-6 flex items-center space-x-4 
      group hover:cursor-pointer"
    >
      <span>{optionMap[value].symbol}</span>
      <span className="hidden md:block">{optionMap[value].name}</span>
      <button>
        <RiArrowDownSLine
          className={`stroke-1 duration-200 ${isListVisible && "rotate-180"}`}
        />
      </button>
      <div
        className={`${
          isListVisible ? "visible opacity-100" : "invisible opacity-0"
        } z-10 absolute top-16 -left-4
        overflow-clip rounded-md shadow-sm shadow-shadow
        bg-white dark:bg-darkoverlay duration-300`}
      >
        {Object.values(optionMap).map(
          ({ symbol, name }, index) =>
            index !== value && (
              <button
                key={index}
                className="w-full py-3 px-5 flex font-sembibold
                hover:text-light hover:bg-secondary"
                onClick={() => onSelect(index)}
              >
                <span className="mr-4">{symbol}</span>
                <span>{name}</span>
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default SearchSelect;
