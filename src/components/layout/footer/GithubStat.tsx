import { IconType } from "react-icons";

type StatProp = {
  icon: IconType;
  path: string;
  number: number;
};

const GithubStat = ({ icon: Icon, path, number }: StatProp) => (
  <a
    href={`https://github.com/luckasRanarison/japidic/${path}`}
    className="flex items-center space-x-1 cursor-pointer 
    hover:text-primary"
  >
    <Icon />
    <span>{number}</span>
  </a>
);

export default GithubStat;
