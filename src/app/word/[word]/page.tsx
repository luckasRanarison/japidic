import { searchSentence, searchWord } from "@/api";
import ResultContainer from "@/components/search/common/ResultContainer";
import SearchInput from "@/components/search/input/SearchInput";
import KanjiEntry from "@/components/search/kanji/KanjiEntry";
import SentenceEntry from "@/components/search/sentence/SentenceEntry";
import WordEntry from "@/components/search/word/WordEntry";
import { isKanji } from "wanakana";

async function getWordData(query: string) {
  const { data } = await searchWord({ query });
  return data;
}

async function getSentences(query: string) {
  const { data } = await searchSentence({ query });
  return data.sentences;
}

type PageProps = {
  params: {
    word: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const query = decodeURIComponent(params.word);
  const kanji = Array.from(query).filter(isKanji);
  const dataResponse = getWordData(query);
  const sentenceResponse = getSentences(query);
  const [data, sentences] = await Promise.all([dataResponse, sentenceResponse]);
  const wordFiltered = data.words.filter(
    (value) => (value.reading.kanji || value.reading.kana) === query
  );

  const kanjiFiltered = data.kanji.filter((value) =>
    kanji.includes(value.literal)
  );

  return (
    <div className="h-full p-3 md:p-6 space-y-10 flex flex-col items-center">
      <SearchInput />
      <div
        className="max-w-5xl w-full flex flex-col gap-6
        md:flex-row md:items-start md:justify-around"
      >
        <div className="flex flex-col md:w-2/3 space-y-6">
          <ResultContainer type="Meaning (意み味)">
            {wordFiltered.map((word, key) => (
              <WordEntry key={key} data={word} detailed />
            ))}
          </ResultContainer>
          {sentences.length > 1 && (
            <ResultContainer type="Example sentences (文)">
              {sentences.map((sentence, key) => (
                <SentenceEntry key={key} data={sentence} />
              ))}
            </ResultContainer>
          )}
        </div>
        {kanjiFiltered.length > 0 && (
          <div className="flex flex-col md:w-1/3 min-w-[400px] space-y-6">
            <ResultContainer type="Kanji in this word (漢字)">
              {kanjiFiltered.map((kanji, key) => (
                <KanjiEntry key={key} data={kanji} />
              ))}
            </ResultContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
