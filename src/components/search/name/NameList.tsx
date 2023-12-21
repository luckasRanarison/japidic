import { searchName } from "@/api/jotoba";
import NameEntry from "./NameEntry";
import ResultContainer from "../common/ResultContainer";

const NameList = async ({ query }: { query: string }) => {
  const names = await searchName({ query });

  return (
    <ResultContainer type="Name (名)">
      {names.map((name, key) => (
        <NameEntry key={key} data={name} />
      ))}
    </ResultContainer>
  );
};

export default NameList;
