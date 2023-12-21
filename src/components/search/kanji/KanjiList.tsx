import ResultContainer from "../common/ResultContainer";
import KanjiEntry from "./KanjiEntry";
import { searchKanji } from "@/api/jotoba";

const KanjiList = async ({ query }: { query: string }) => {
  const kanji = await searchKanji({ query });

  return (
    <ResultContainer type="Kanji (漢字)">
      {kanji
        .sort((a, b) => {
          const delta = (a.frequency ?? Infinity) - (b.frequency ?? Infinity);
          return isNaN(delta) ? 0 : delta;
        })
        .map((kanji, key) => (
          <KanjiEntry key={key} data={kanji} />
        ))}
    </ResultContainer>
  );
};

export default KanjiList;
