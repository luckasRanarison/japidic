import ButtonWrapper from "../common/ButtonWrapper";
import EntryContainer from "../common/EntryContainer";

const NameEntry = ({ data }: { data: JapaneseName }) => (
  <EntryContainer className="flex flex-col justify-between sm:space-y-0 sm:flex-row">
    <div className="space-y-3">
      <div className="text-lg">
        <span>{data.kana}</span>
        {data.kanji && <span>【{data.kanji}】</span>}
      </div>
      <div className="font-semibold dark:text-white">
        {data.nameType.join(", ")}
      </div>
      <div className="text-dark space-y-2">
        {data.transcription.split(",").map((trans, index) => (
          <div key={index}>
            <span className="mr-4 font-semibold text-sm text-secondary dark:text-white">
              {index + 1}.
            </span>
            <span className="text-dark dark:text-light">{trans.trim()}</span>
          </div>
        ))}
      </div>
    </div>
    <ButtonWrapper writting={data.kanji ?? data.kana} />
  </EntryContainer>
);

export default NameEntry;
