import axios, { AxiosResponse } from "axios";
import applyCaseMiddleware from "axios-case-converter";

const api = applyCaseMiddleware(
  axios.create({ baseURL: "https://jotoba.de/api" })
);

async function searchWord(query: SearchQuery) {
  return api.post<WordResponse>("search/words", query);
}

async function searchName(query: SearchQuery) {
  return api.post<JapaneseName[]>("search/names", query);
}

async function searchKanji(
  query: SearchQuery
): Promise<AxiosResponse<Kanji[], any>>;

async function searchKanji(
  radicals: string[]
): Promise<AxiosResponse<Kanji[], any>>;

async function searchKanji(query: SearchQuery | string[]) {
  return api.post<Kanji[]>("search/kanji", query);
}

async function searchSentence(query: SearchQuery) {
  return api.post<Sentence[]>("search/sentences", query);
}

async function getCompletion(query: CompletionQuery) {
  return api.post<CompletionResult>("suggestion", query);
}

export { searchWord, searchName, searchKanji, searchSentence, getCompletion };
