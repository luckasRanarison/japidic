import { RiArrowRightDoubleFill } from "react-icons/ri";
import StyledLink from "../../common/StyledLink";
import Furigana from "../../common/Furigana";
import PitchAccent from "./PitchAccent";
import ButtonWrapper from "../common/ButtonWrapper";
import EntryContainer from "../common/EntryContainer";
import WordSense from "./WordSense";

const WordEntry = ({ data }: { data: Word }) => (
  <EntryContainer>
    <div
      className="space-y-6 flex flex-col justify-between
      sm:space-y-0 sm:flex-row"
    >
      <div className="space-y-4">
        <div className="flex flex-row flex-wrap items-end gap-x-6 gap-y-2">
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
            text-light bg-primary"
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
    <WordSense data={data.senses} />
    <div className="flex items-center space-x-2">
      <RiArrowRightDoubleFill className="text-primary" />
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
