import SearchInput from "@/components/search/SearchInput";
import { SearchType, tagMap } from "@/utils/search";
import { Suspense } from "react";

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
    <div className="h-full p-6 space-y-16 flex flex-col items-center">
      <SearchInput />
      <Suspense fallback={<div>Loading...</div>}>
        <ListTag query={searchParams.query} />
      </Suspense>
    </div>
  );
};

export default Page;
