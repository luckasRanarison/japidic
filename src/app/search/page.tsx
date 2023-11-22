import SearchInput from "@/components/search/SearchInput";
import WordList from "@/components/search/word/WordList";
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
        <WordList query={searchParams.query} />
      </Suspense>
    </div>
  );
};

export default Page;
