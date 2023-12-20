import ButtonWrapper from "../common/ButtonWrapper";
import EntryContainer from "../common/EntryContainer";
import Furigana from "../common/Furigana";

const SentenceEntry = ({ data }: { data: Sentence }) => (
  <EntryContainer className="flex flex-col justify-between sm:space-y-0 sm:flex-row">
    <div className="space-y-2">
      <Furigana data={data.furigana} size="medium" />
      <div>{data.translation}</div>
    </div>
    <ButtonWrapper writting={data.content} />
  </EntryContainer>
);

export default SentenceEntry;
