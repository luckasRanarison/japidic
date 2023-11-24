import ButtonWrapper from "../common/ButtonWrapper";
import EntryContainer from "../common/EntryContainer";
import Furigana from "../common/Furigana";

const SentenceEntry = ({ data }: { data: Sentence }) => (
  <EntryContainer
    className="space-y-4 flex flex-col justify-between
    sm:space-y-0 sm:flex-row"
  >
    <div className="space-y-2">
      <Furigana data={data.furigana} />
      <div>{data.translation}</div>
    </div>
    <ButtonWrapper writting="TODO" />
  </EntryContainer>
);

export default SentenceEntry;
