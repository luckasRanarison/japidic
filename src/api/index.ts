import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const api = applyCaseMiddleware(
  axios.create({ baseURL: "https://jotoba.de/api" })
);

async function searchWord(query: SearchQuery) {
  const res = await api.post<WordResponse>("search/words", query);
  return res.data;
}

async function searchName(query: SearchQuery) {
  const res = await api.post<NameResponse>("search/names", query);
  return res.data.names;
}

async function searchKanji(query: SearchQuery) {
  const res = await api.post<KanjiResponse>("search/kanji", query);
  return res.data.kanji;
}

async function searchKanjiByRadicals(radicals: string[]) {
  const res = await api.post<KanjiByRadicalResponse>(
    "search/kanji/by_radical",
    { radicals }
  );
  return res.data;
}

async function searchSentence(query: SearchQuery) {
  const res = await api.post<SentenceResponse>("search/sentences", query);
  return res.data.sentences;
}

async function getCompletion(query: CompletionQuery) {
  const res = await api.post<CompletionResponse>("suggestion", query);
  return res.data;
}

export {
  searchWord,
  searchName,
  searchKanji,
  searchKanjiByRadicals,
  searchSentence,
  getCompletion,
};

export default api;
