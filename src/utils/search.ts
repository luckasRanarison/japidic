import KanjiList from "@/components/search/kanji/KanjiList";
import NameList from "@/components/search/name/NameList";
import SentenceList from "@/components/search/sentence/SentenceList";
import WordList from "@/components/search/word/WordList";

enum SearchType {
  Word,
  Kanji,
  Phrases,
  Names,
}

const optionMap = {
  [SearchType.Word]: { symbol: "単", name: "Word" },
  [SearchType.Kanji]: { symbol: "字", name: "Kanji" },
  [SearchType.Phrases]: { symbol: "文", name: "Phrases" },
  [SearchType.Names]: { symbol: "名", name: "Names" },
};

const tagMap = {
  [SearchType.Word]: WordList,
  [SearchType.Kanji]: KanjiList,
  [SearchType.Names]: NameList,
  [SearchType.Phrases]: SentenceList,
};

export { SearchType, optionMap, tagMap };
