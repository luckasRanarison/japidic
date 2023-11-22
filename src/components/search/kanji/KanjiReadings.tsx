type ReadingProps = {
  onyomi: string[];
  kunyomi: string[];
};

const KanjiReadings = ({ onyomi, kunyomi }: ReadingProps) => (
  <div className="flex flex-wrap flex-row gap-4">
    {kunyomi.map((reading, key) => (
      <span
        key={key}
        className="py-1 px-3 rounded-md
        text-light bg-primary dark:text-dark dark:bg-primary-dark"
      >
        {reading}
      </span>
    ))}
    {onyomi.map((reading, key) => (
      <span
        key={key}
        className="py-1 px-3 rounded-md
        text-light bg-secondary dark:text-light dark:bg-dark"
      >
        {reading}
      </span>
    ))}
  </div>
);

export default KanjiReadings;
