import SearchBar from "@/components/search/input/SearchBar";
import { SearchType, tagMap } from "@/utils/search";

type PageProps = {
  searchParams: {
    type: string;
    query: string;
  };
};

const Page = async ({ searchParams }: PageProps) => {
  const type: SearchType = parseInt(searchParams.type);
  const ListTag = tagMap[type];

  return (
    <div className="h-full p-3 space-y-10 flex flex-col items-center">
      <SearchBar />
      <ListTag query={searchParams.query} />
    </div>
  );
};

export default Page;
