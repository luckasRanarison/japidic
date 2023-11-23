import { searchWord } from "@/api";
import WordEntry from "./WordEntry";
import ResultContainer from "../common/ResultContainer";

const WordList = async ({ query }: { query: string }) => {
  const response = await searchWord({ query });
  const words = response.data.words;

  return (
    <ResultContainer>
      {words
        .sort((a, b) => (a.common && !b.common ? -1 : 1))
        .map((word, key) => (
          <WordEntry key={key} data={word} />
        ))}
    </ResultContainer>
  );
};

export default WordList;
