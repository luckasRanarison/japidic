import NoResultFound from "../NoResultFound";
import KanjiEntry from "./KanjiEntry";
import { searchKanji } from "@/api";

const KanjiList = async ({ query }: { query: string }) => {
  const response = await searchKanji({ query });
  const kanji = response.data.kanji;

  return (
    <div className="h-full w-full max-w-4xl space-y-8">
      {kanji.length ? (
        kanji.map((kanji, key) => <KanjiEntry key={key} data={kanji} />)
      ) : (
        <NoResultFound />
      )}
    </div>
  );
};

export default KanjiList;
