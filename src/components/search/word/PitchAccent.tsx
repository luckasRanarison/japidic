const PitchAccent = ({ data }: { data: Pitch[] }) => (
  <div className="flex">
    {data.map((value, index) =>
      value.high ? (
        <div
          key={index}
          className={`p-1 flex items-center 
          ${
            data[index - 1] && !data[index - 1].high && "border-l-2"
          } border-t-2 border-primary`}
        >
          <div>{value.part}</div>
        </div>
      ) : (
        <div
          key={index}
          className={`p-1 flex items-center ${value.part && "border-b-2"} ${
            data[index - 1]?.high && "border-l-2"
          } border-primary`}
        >
          <div>{value.part}</div>
        </div>
      )
    )}
  </div>
);

export default PitchAccent;
