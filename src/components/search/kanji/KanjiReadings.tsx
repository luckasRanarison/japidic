type ReadingProps = {
  onyomi?: string[];
  kunyomi?: string[];
};

const KanjiReadings = ({ onyomi, kunyomi }: ReadingProps) => (
  <div className="font-semibold flex flex-wrap flex-row gap-4">
    {kunyomi?.map((reading, key) => (
      <span
        key={key}
        className="py-1 px-3 rounded-md
        text-white bg-primary"
      >
        {reading}
      </span>
    ))}
    {onyomi?.map((reading, key) => (
      <span
        key={key}
        className="py-1 px-3 rounded-md
        text-white bg-secondary"
      >
        {reading}
      </span>
    ))}
  </div>
);

export default KanjiReadings;
