import { extractPos, pascalToSpaced } from "@/utils/word";
import { RiArrowRightDoubleFill, RiLinkM } from "react-icons/ri";
import StyledLink from "../../common/StyledLink";
import Furigana from "../../common/Furigana";
import PitchAccent from "./PichAccent";
import ButtonWrapper from "../ButtonWrapper";
import EntryContainer from "../EntryContainer";

type EntryProps = {
  data: Word;
};

const WordEntry = ({ data }: EntryProps) => (
  <EntryContainer>
    <div
      className="space-y-6 flex flex-col justify-between
      sm:space-y-0 sm:flex-row"
    >
      <div className="space-y-4">
        <div
          className="space-y-2 flex flex-col items-start
          md:space-x-4 md:flex-row md:items-end"
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
      <ButtonWrapper
        audio={data.audio}
        writting={data.reading.kanji ? data.reading.kanji : data.reading.kana}
      />
    </div>
    <div className="">
      {data.senses.map((sense, index) => (
        <div key={index} className="space-y-2">
          {sense.pos && (
            <div className="font-semibold">
              {JSON.stringify(data.senses[index - 1]?.pos) !=
                JSON.stringify(sense.pos) && extractPos(sense.pos)}
            </div>
          )}
          <div>
            <span className="mr-4 font-semibold text-sm">{index + 1}.</span>
            <span className="text-dark dark:text-light">
              {sense.glosses.join(", ")}
            </span>
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
          <div className="opacity-70 text-sm">
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
  </EntryContainer>
);
export default WordEntry;
