type PitchProps = {
  data: {
    part: string;
    high: boolean;
  }[];
};

const PitchAccent = ({ data }: PitchProps) => (
  <div className="flex">
    {data.map((value, index) => {
      const prev = data[index - 1];
      return value.high ? (
        <div
          className={`p-1 flex items-center 
          ${prev && !prev.high && "border-l-2"} border-t-2 border-primary`}
        >
          <div>{value.part}</div>
        </div>
      ) : (
        <div
          className={`p-1 flex items-center ${value.part && "border-b-2"} ${
            prev?.high && "border-l-2"
          } border-primary`}
        >
          <div>{value.part}</div>
        </div>
      );
    })}
  </div>
);

export default PitchAccent;
