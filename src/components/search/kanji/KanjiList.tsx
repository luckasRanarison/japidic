import kanjiMock from "@/mock/kanji";
import KanjiEntry from "./KanjiEntry";

const KanjiList = () => {
  return (
    <div className="w-full max-w-4xl space-y-8">
      {kanjiMock.map((kanji, key) => (
        <KanjiEntry key={key} data={kanji} />
      ))}
    </div>
  );
};

export default KanjiList;
