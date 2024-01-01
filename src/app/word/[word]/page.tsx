import { searchSentence, searchWord } from "@/api/jotoba";
import ResultContainer from "@/components/search/common/ResultContainer";
import SearchBar from "@/components/search/input/SearchBar";
import KanjiEntry from "@/components/search/kanji/KanjiEntry";
import SentenceEntry from "@/components/search/sentence/SentenceEntry";
import WordEntry from "@/components/search/word/WordEntry";
import { isKanji } from "wanakana";

type PageProps = {
  params: {
    word: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const query = decodeURIComponent(params.word);
  const kanji = Array.from(query).filter(isKanji);
  const dataResponse = searchWord({ query });
  const sentenceResponse = searchSentence({ query });
  const [data, sentences] = await Promise.all([dataResponse, sentenceResponse]);

  const wordFiltered = data.words.filter(
    (value) => (value.reading.kanji || value.reading.kana) === query
  );
  const kanjiFiltered = data.kanji.filter((value) =>
    kanji.includes(value.literal)
  );

  return (
    <div className="h-full p-3 md:p-6 space-y-10 flex flex-col items-center">
      <SearchBar />
      <div
        className="max-w-5xl w-full flex flex-col gap-6
        md:flex-row md:items-start md:justify-around"
      >
        <div className="flex flex-col md:w-2/3 space-y-6">
          <ResultContainer label="Meanings">
            {wordFiltered.map((word, key) => (
              <WordEntry key={key} data={word} detailed />
            ))}
          </ResultContainer>
          {sentences.length > 0 && (
            <ResultContainer label="Sentences">
              {sentences.map((sentence, key) => (
                <SentenceEntry key={key} data={sentence} />
              ))}
            </ResultContainer>
          )}
        </div>
        {kanjiFiltered.length > 0 && (
          <div className="flex flex-col md:w-1/3 space-y-6">
            <ResultContainer label="Kanji">
              {kanjiFiltered.map((kanji, key) => (
                <KanjiEntry key={key} data={kanji} isSide />
              ))}
            </ResultContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
