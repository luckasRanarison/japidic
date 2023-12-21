import { searchWord } from "@/api/jotoba";
import WordEntry from "./WordEntry";
import ResultContainer from "../common/ResultContainer";

const WordList = async ({ query }: { query: string }) => {
  const { words } = await searchWord({ query });

  return (
    <ResultContainer type="Word (単語)">
      {words
        .sort((a, b) => (a.common && !b.common ? -1 : 1))
        .map((word, key) => (
          <WordEntry key={key} data={word} detailed={false} />
        ))}
    </ResultContainer>
  );
};

export default WordList;
