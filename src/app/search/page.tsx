import SearchBar from "@/components/search/input/SearchBar";
import KanjiList from "@/components/search/kanji/KanjiList";
import NameList from "@/components/search/name/NameList";
import SentenceList from "@/components/search/sentence/SentenceList";
import WordList from "@/components/search/word/WordList";
import { SearchType } from "@/utils/search";

type PageProps = {
  searchParams: {
    type: SearchType;
    query: string;
  };
};

const Page = ({ searchParams: { type, query } }: PageProps) => (
  <div className="h-full p-3 space-y-10 flex flex-col items-center">
    <SearchBar />
    {type === "word" && <WordList query={query} />}
    {type === "kanji" && <KanjiList query={query} />}
    {type === "phrase" && <SentenceList query={query} />}
    {type === "name" && <NameList query={query} />}
  </div>
);

export default Page;
