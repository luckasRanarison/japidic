import { searchWord } from "@/api";
import wordMocks from "@/mock/words";
import WordEntry from "./WordEntry";

type ContainerProps = {
  query: string;
};

const WordContainer = async ({ query }: ContainerProps) => {
  // const results = await searchWord({ query });

  return (
    <div className="w-full max-w-6xl space-y-8">
      {wordMocks.map((word) => (
        <WordEntry data={word} />
      ))}
    </div>
  );
};

export default WordContainer;
