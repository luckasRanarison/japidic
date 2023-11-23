import StyledLink from "@/components/common/StyledLink";
import { extractPos, pascalToSpaced } from "@/utils/word";
import { RiLinkM } from "react-icons/ri";

const WordSense = ({ data }: { data: Sense[] }) => (
  <div>
    {data.map((sense, index) => (
      <div key={index} className="space-y-2">
        {sense.pos && (
          <div className="font-semibold">
            {JSON.stringify(data[index - 1]?.pos) !=
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
            <RiLinkM className="text-secondary" />
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
);

export default WordSense;
