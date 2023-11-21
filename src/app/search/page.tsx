import SearchInput from "@/components/search/SearchInput";
import WordContainer from "@/components/search/WordContainer";
import { Suspense } from "react";

type PageProps = {
  searchParams: {
    type: string;
    query: string;
  };
};

const Page = async ({ searchParams }: PageProps) => {
  return (
    <div className="p-6 space-y-16 flex flex-col items-center">
      <SearchInput />
      <Suspense fallback={<div>Loading...</div>}>
        <WordContainer query={searchParams.query} />
      </Suspense>
    </div>
  );
};

export default Page;
