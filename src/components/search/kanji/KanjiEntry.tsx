import {
  RiGraduationCapFill,
  RiPenNibFill,
  RiTimer2Fill,
} from "react-icons/ri";
import ButtonWrapper from "../common/ButtonWrapper";
import EntryContainer from "../common/EntryContainer";
import KanjiInfo from "./KanjiInfo";
import KanjiReadings from "./KanjiReadings";
import Link from "next/link";
import { getKanjiSvg } from "@/api/kanjivg";
import KanjiStroke from "./KanjiStroke";

type EntryProps = {
  data: Kanji;
  isSide?: boolean;
};

const KanjiEntry = async ({ data, isSide }: EntryProps) => {
  const svg = await getKanjiSvg(data.literal);

  return (
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
          <div className="space-y-3">
            <div>{data.meanings.join(", ")}</div>
            <div className={`${isSide ? "md:hidden block" : "block"}`}>
              <KanjiReadings onyomi={data.onyomi} kunyomi={data.kunyomi} />
            </div>
          </div>
          <ButtonWrapper writting={data.literal} />
        </div>
      </div>
      <div className={`${isSide ? "hidden md:block" : "hidden"}`}>
        <KanjiReadings onyomi={data.onyomi} kunyomi={data.kunyomi} />
      </div>
      <div className="flex flex-row flex-wrap gap-y-2 gap-x-6">
        {data.parts?.map((value, key) => (
          <Link
            key={key}
            href={`/search?type=kanji&query=${value}`}
            className="text-xl text-primary"
          >
            {value}
          </Link>
        ))}
      </div>
      <KanjiStroke svg={svg} />
      <div className="flex flex-row flex-wrap gap-y-2 gap-x-6">
        <KanjiInfo
          icon={RiPenNibFill}
          info="Strokes"
          value={data.strokeCount}
        />
        <KanjiInfo icon={RiGraduationCapFill} info="Grade" value={data.grade} />
        <KanjiInfo
          icon={RiTimer2Fill}
          info="Frequency"
          value={data.frequency}
        />
      </div>
    </EntryContainer>
  );
};
export default KanjiEntry;
