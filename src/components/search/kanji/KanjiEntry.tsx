import {
  RiGraduationCapFill,
  RiPenNibFill,
  RiTimer2Fill,
} from "react-icons/ri";
import ButtonWrapper from "../ButtonWrapper";
import EntryContainer from "../EntryContainer";
import KanjiInfo from "./KanjiInfo";
import KanjiReadings from "./KanjiReadings";
import Link from "next/link";

type EntryProps = {
  data: Kanji;
};

const KanjiEntry = ({ data }: EntryProps) => (
  <EntryContainer>
    <div
      className="flex flex-col space-y-4 
      md:space-y-0 md:space-x-6 md:flex-row"
    >
      <div className="text-7xl">{data.literal}</div>
      <div
        className="space-y-4 w-full flex flex-col justify-between
        md:space-y-0 md:flex-row"
      >
        <div className="space-y-2">
          <div>{data.meanings.join(", ")}</div>
          <KanjiReadings onyomi={data.onyomi} kunyomi={data.kunyomi} />
        </div>
        <ButtonWrapper writting={data.literal} />
      </div>
    </div>
    <div className="flex flex-row flex-wrap gap-y-2 gap-x-6">
      {data.parts?.map((value) => (
        <Link
          href={`/search?type=1&query=${value}`}
          className="text-xl text-primary"
        >
          {value}
        </Link>
      ))}
    </div>
    <div className="flex flex-row flex-wrap gap-y-2 gap-x-6">
      <KanjiInfo icon={RiPenNibFill} info="Strokes" value={data.strokeCount} />
      <KanjiInfo icon={RiGraduationCapFill} info="Grade" value={data.grade} />
      <KanjiInfo icon={RiTimer2Fill} info="Frequency" value={data.frequency} />
    </div>
  </EntryContainer>
);
export default KanjiEntry;
