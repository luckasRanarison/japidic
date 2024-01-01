import SearchBar from "@/components/search/input/SearchBar";

const Page = () => (
  <div
    className="h-full p-4 space-y-8
    flex flex-col items-center justify-center
    text-center text-secondary dark:text-light"
  >
    <div className="space-y-4">
      <div className="text-7xl">辞書</div>
      <div className="text-xl">Free Japanese dictionary</div>
    </div>
    <SearchBar />
  </div>
);

export default Page;
