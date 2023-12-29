type SuggestionProps = {
  index: number;
  suggestions: Suggestion[];
  onSelect: (item: string) => void;
};

const SearchSuggestion = (props: SuggestionProps) => (
  <div
    className="absolute z-10 top-16 w-full rounded-md overflow-clip
      shadow-sm shadow-shadow bg-white dark:bg-darkoverlay"
  >
    {props.suggestions.map((item, key) => (
      <div
        key={key}
        className={`${key === props.index && "bg-secondary text-light"} 
        group flex justify-between py-2 px-6
        hover:bg-secondary cursor-pointer`}
        onClick={() => props.onSelect(item.secondary ?? item.primary)}
      >
        <div className="group-hover:text-white ">
          {item.secondary ?? item.primary}
        </div>
        {item.secondary && (
          <div
            className={`${key === props.index ? "text-light" : "text-secondary"}
            group-hover:text-light opacity-60 dark:opacity-100`}
          >
            {item.secondary && `(${item.primary})`}
          </div>
        )}
      </div>
    ))}
  </div>
);
export default SearchSuggestion;
