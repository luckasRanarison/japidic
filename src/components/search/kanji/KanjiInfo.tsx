import { IconType } from "react-icons";

type InfoProps = {
  icon: IconType;
  info: string;
  value: string | number;
};

const KanjiInfo = ({ icon: Icon, info, value }: InfoProps) => {
  return (
    <div className="flex font-semibold items-center space-x-2">
      <Icon />
      <span>{info}: </span>
      <span className="text-primary">{value}</span>
    </div>
  );
};

export default KanjiInfo;
