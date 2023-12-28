export type SearchTypeAlias = "word" | "kanji" | "phrase" | "name";

const searchTypeMap = {
  word: { id: 0, symbol: "単", name: "Word" },
  kanji: { id: 1, symbol: "字", name: "Kanji" },
  phrase: { id: 2, symbol: "文", name: "Phrase" },
  name: { id: 3, symbol: "名", name: "Name" },
};

function getTypeFromAlias(alias: SearchTypeAlias) {
  return searchTypeMap[alias].id.toString() as SearchType;
}

export { searchTypeMap, getTypeFromAlias };
