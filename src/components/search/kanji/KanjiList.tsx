import ResultContainer from "../common/ResultContainer";
import KanjiEntry from "./KanjiEntry";
import { searchKanji } from "@/api";

const KanjiList = async ({ query }: { query: string }) => {
  const { data } = await searchKanji({ query });

  return (
    <ResultContainer type="Kanji (漢字)">
      {data.kanji
        .sort((a, b) => (a.frequency ?? Infinity) - (b.frequency ?? Infinity))
        .map((kanji, key) => (
          <KanjiEntry key={key} data={kanji} />
        ))}
    </ResultContainer>
  );
};

export default KanjiList;
