import { searchName } from "@/api";
import NameEntry from "./NameEntry";
import ResultContainer from "../common/ResultContainer";

const NameList = async ({ query }: { query: string }) => {
  const { data } = await searchName({ query });

  return (
    <ResultContainer type="Name (名)">
      {data.names.map((name, key) => (
        <NameEntry key={key} data={name} />
      ))}
    </ResultContainer>
  );
};

export default NameList;
