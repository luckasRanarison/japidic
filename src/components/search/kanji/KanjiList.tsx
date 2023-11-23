import ResultContainer from "../common/ResultContainer";
import KanjiEntry from "./KanjiEntry";
import { searchKanji } from "@/api";

const KanjiList = async ({ query }: { query: string }) => {
  const response = await searchKanji({ query });
  const kanji = response.data.kanji;

  return (
    <ResultContainer>
      {kanji
        .sort((a, b) => (a.frequency || 9999) - (b.frequency || 9999))
        .map((kanji, key) => (
          <KanjiEntry key={key} data={kanji} />
        ))}
    </ResultContainer>
  );
};

export default KanjiList;
