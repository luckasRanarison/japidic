type FuriganaProps = {
  data: string;
};

const Furigana = ({ data }: FuriganaProps) => {
  const match = data.matchAll(/\[([^\]]+)\]([^\[]*)/g);
  const partial = Array.from(match).flatMap((value) => value.slice(1));

  const furigana = partial.flatMap((value) => {
    const elements = value.split("|");
    const kanjiChars = Array.from(elements[0]);

    if (kanjiChars.length !== elements.slice(1).length) {
      return [[elements[1], kanjiChars.join("")]]; // ateji
    } else {
      return kanjiChars.map((char, index) => [elements[index + 1], char]);
    }
  });

  return (
    <div className="flex">
      {furigana.map(([reading, writting], index) => (
        <div key={index} className="flex flex-col items-center justify-end">
          <div className="text-xs">{reading}</div>
          <div className="text-2xl">{writting}</div>
        </div>
      ))}
    </div>
  );
};

export default Furigana;
