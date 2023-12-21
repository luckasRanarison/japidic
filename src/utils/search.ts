export type SearchType = "word" | "kanji" | "phrase" | "name";

const optionMap = {
  word: { symbol: "単", name: "Word" },
  kanji: { symbol: "字", name: "Kanji" },
  phrase: { symbol: "文", name: "Phrase" },
  name: { symbol: "名", name: "Name" },
};

export { optionMap };
