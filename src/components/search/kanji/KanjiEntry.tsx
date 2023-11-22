import EntryContainer from "../EntryContainer";

type EntryProps = {
  data: Kanji;
};

const KanjiEntry = ({ data }: EntryProps) => {
  return (
    <EntryContainer>
      <div className="text-4xl">{data.literal}</div>
    </EntryContainer>
  );
};

export default KanjiEntry;
