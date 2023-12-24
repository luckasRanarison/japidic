import axios from "axios";

const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji",
});

async function getKanjiSvg(kanji: string) {
  const codepoint = kanji.codePointAt(0) as number;
  const hex = codepoint.toString(16).padStart(5, "0");

  try {
    const res = await api.get(hex + ".svg");
    return res.data;
  } catch (error) {
    return null;
  }
}

export { getKanjiSvg };

export default api;
