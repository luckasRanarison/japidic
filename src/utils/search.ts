import { searchKanji, searchName, searchSentence, searchWord } from "@/api";

enum SearchOption {
  Word,
  Kanji,
  Phrases,
  Names,
}

const optionMap = {
  [SearchOption.Word]: { symbol: "単", name: "Word" },
  [SearchOption.Kanji]: { symbol: "字", name: "Kanji" },
  [SearchOption.Phrases]: { symbol: "文", name: "Phrases" },
  [SearchOption.Names]: { symbol: "名", name: "Names" },
};

export { SearchOption, optionMap };
