import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const api = applyCaseMiddleware(
  axios.create({ baseURL: "https://jotoba.de/api" })
);

async function searchWord(query: SearchQuery) {
  return api.post<WordResponse>("search/words", query);
}

async function searchName(query: SearchQuery) {
  return api.post<NameResponse>("search/names", query);
}

async function searchKanji(query: SearchQuery | string[]) {
  return api.post<KanjiResponse>("search/kanji", query);
}

async function searchKanjiByRadicals(query: SearchQuery | string[]) {
  return api.post<KanjiByRadicalResponse>("search/kanji/by_radical", query);
}

async function searchSentence(query: SearchQuery) {
  return api.post<SentenceResponse>("search/sentences", query);
}

async function getCompletion(query: CompletionQuery) {
  return api.post<CompletionResponse>("suggestion", query);
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
