"use client";

import radicals from "@/utils/radicals";
import { useEffect, useState } from "react";
import { searchKanjiByRadicals } from "@/api/jotoba";
import { RiRefreshLine } from "react-icons/ri";

const allRadicals = Object.values(radicals).flat();

const Radicals = ({ onSelect }: { onSelect: (kanji: string) => void }) => {
  const [selected, setSelected] = useState(new Set<string>());
  const [valid, setValid] = useState(new Set(allRadicals));
  const [kanji, setKanji] = useState<string[]>([]);

  const toggleSelected = (radical: string) => {
    setSelected((prev) => {
      const newSet = new Set(prev);
      return newSet.delete(radical) ? newSet : newSet.add(radical);
    });
  };

  useEffect(() => {
    if (selected.size) {
      searchKanjiByRadicals(Array.from(selected)).then(
        ({ kanji, possibleRadicals }) => {
          const newValid = Object.values(possibleRadicals).flat();
          const newKanji = Object.values(kanji).flat();
          setValid(new Set(newValid));
          setKanji(newKanji);
        }
      );
    } else {
      setValid(new Set(allRadicals));
      setKanji([]);
    }
  }, [selected]);

  return (
    <div
      className="relative h-full p-4 flex flex-col rounded-md shadow-sm
      dark:border-[1px] bg-white dark:text-white 
      dark:border-darkborder dark:bg-darkoverlay"
    >
      <div className="h-full overflow-y-scroll space-y-4">
        {Object.entries(radicals).map(([strokeCount, radicals]) => (
          <div key={strokeCount} className="flex flex-wrap gap-2">
            <span
              className="flex items-center py-2 px-4 rounded-md 
              bg-primary text-white text-sm"
            >
              {strokeCount}
            </span>
            {radicals.map((radical) => (
              <button
                disabled={!selected.has(radical) && !valid.has(radical)}
                key={radical}
                className={`py-2 px-3 rounded-md disabled:text-border 
                text-secondary dark:text-white
                ${selected.has(radical) && "bg-secondary text-white"}`}
                onClick={() => toggleSelected(radical)}
              >
                {radical}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="flex mt-3 overflow-x-scroll space-x-2">
        {kanji.map((item) => (
          <button
            className="py-2 px-3 rounded-md text-xl border-[1px] 
              border-border dark:border-darkborder"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {kanji.length > 0 && (
        <button
          className="absolute top-4 right-4 py-2 px-4 flex items-center space-x-2
          rounded-md bg-primary text-white"
          onClick={() => setSelected(new Set())}
        >
          <RiRefreshLine />
          <span>Reset</span>
        </button>
      )}
    </div>
  );
};

export default Radicals;
