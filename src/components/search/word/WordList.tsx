import { searchWord } from "@/api";
import WordEntry from "./WordEntry";
import NoResultFound from "../NoResultFound";

type ListProps = {
  query: string;
};

const WordList = async ({ query }: ListProps) => {
  const response = await searchWord({ query });
  const words = response.data.words;

  return (
    <div className="h-full w-full max-w-4xl space-y-8">
      {words.length ? (
        words
          .sort((a, b) => (a.common && !b.common ? -1 : 1))
          .map((word, key) => <WordEntry key={key} data={word} />)
      ) : (
        <NoResultFound />
      )}
    </div>
  );
};

export default WordList;
