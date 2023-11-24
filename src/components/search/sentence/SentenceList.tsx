import ResultContainer from "../common/ResultContainer";
import SentenceEntry from "./SentenceEntry";
import { searchSentence } from "@/api";

const SentenceList = async ({ query }: { query: string }) => {
  const { data } = await searchSentence({ query });

  return (
    <ResultContainer type="Sentence (文)">
      {data.sentences.map((sentence, key) => (
        <SentenceEntry key={key} data={sentence} />
      ))}
    </ResultContainer>
  );
};

export default SentenceList;
