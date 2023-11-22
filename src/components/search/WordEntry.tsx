import { extractPos, pascalToSpaced } from "@/utils/word";
import {
  RiArrowRightDoubleFill,
  RiFileCopyLine,
  RiLinkM,
  RiShareLine,
  RiVolumeUpLine,
} from "react-icons/ri";
import StyledLink from "../common/StyledLink";
import Furigana from "../common/Furigana";
import StyledButton from "../common/StyledButton";

type PitchProps = {
  data: {
    part: string;
    high: boolean;
  }[];
};

const PitchAccent = ({ data }: PitchProps) => (
  <div className="flex">
    {data.map((value, index) => {
      const prev = data[index - 1];
      return value.high ? (
        <div
          className={`p-1 flex items-center 
          ${
            prev && !prev.high && "border-l-2"
          } border-t-2 border-primary dark:border-primary-dark`}
        >
          <div>{value.part}</div>
        </div>
      ) : (
        <div
          className={`p-1 flex items-center ${value.part && "border-b-2"} ${
            prev?.high && "border-l-2"
          } border-primary dark:border-primary-dark`}
        >
          <div>{value.part}</div>
        </div>
      );
    })}
  </div>
);

type EntryProps = {
  data: Word;
};

const WordEntry = ({ data }: EntryProps) => (
  <div
    className="px-8 py-6 space-y-4 rounded-md 
      text-dark dark:text-light dark:bg-secondary bg-white shadow-md"
  >
    <div className="space-y-6 sm:space-y-0 flex flex-col sm:flex-row justify-between">
      <div className="space-y-4">
        <div
          className="flex flex-col md:flex-row items-start md:items-end space-y-2 md:space-x-4
            text-secondary dark:text-light"
        >
          {data.reading.furigana ? (
            <Furigana data={data.reading.furigana} />
          ) : (
            <div className="text-2xl">
              {data.reading.kanji || data.reading.kana}
            </div>
          )}
          {data.pitch && <PitchAccent data={data.pitch} />}
        </div>
        {data.common && (
          <div
            className="w-fit py-1 px-3 rounded-md text-sm 
              text-light bg-primary dark:text-dark dark:bg-primary-dark"
          >
            Common
          </div>
        )}
      </div>
      <div className="space-x-4">
        <StyledButton icon={RiVolumeUpLine} />
        <StyledButton icon={RiFileCopyLine} />
        <StyledButton icon={RiShareLine} />
      </div>
    </div>
    <div className="">
      {data.senses.map((sense, index) => (
        <div key={index} className="space-y-2">
          {sense.pos && (
            <div className="font-semibold text-secondary dark:text-white">
              {JSON.stringify(data.senses[index - 1]?.pos) !=
                JSON.stringify(sense.pos) && extractPos(sense.pos)}
            </div>
          )}
          <div>
            <span className="mr-4 font-semibold text-sm text-secondary dark:text-white">
              {index + 1}.
            </span>
            <span>{sense.glosses.join(", ")}</span>
          </div>
          {sense.xref && (
            <div className="flex items-center space-x-1">
              <RiLinkM className="text-secondary dark:text-primary-dark" />
              <span>See also </span>
              <StyledLink href={`/search?type=0&query=${sense.xref}`} internal>
                {sense.xref}
              </StyledLink>
            </div>
          )}
          <div className="text-secondary dark:text-light opacity-70 text-sm">
            {[sense.field && sense.field + "Term", sense.misc]
              .map((value) => value && pascalToSpaced(value))
              .filter((value) => value)
              .join(", ")}
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center space-x-2">
      <RiArrowRightDoubleFill className="text-primary dark:text-primary-dark" />
      <StyledLink
        href={`/defifinition/${
          data.reading.kanji ? data.reading.kanji : data.reading.kana
        }`}
      >
        More details
      </StyledLink>
    </div>
  </div>
);
export default WordEntry;
