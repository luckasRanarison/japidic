import SearchInput from "@/components/search/SearchInput";

const Page = () => {
  return (
    <div
      className="h-full p-4 space-y-8
      flex flex-col items-center justify-center 
      text-center text-secondary"
    >
      <div className="space-y-4">
        <div className="text-7xl">辞書</div>
        <div className="text-xl opacity-60">Free Japanese dictionary</div>
      </div>
      <SearchInput />
    </div>
  );
};

export default Page;
