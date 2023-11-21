import { IconType } from "react-icons";
import { RiEyeLine, RiGitBranchLine, RiStarLine } from "react-icons/ri";
import StyledLink from "../common/StyledLink";

type StatProp = {
  icon: IconType;
  path: string;
  number: number;
};

const GithubStat = ({ icon: Icon, path, number }: StatProp) => (
  <a
    href={`https://github.com/luckasRanarison/japidic/${path}`}
    className="flex items-center space-x-1 cursor-pointer 
    hover:text-primary dark:hover:text-primary-dark"
  >
    <Icon />
    <span>{number}</span>
  </a>
);

const Footer = () => (
  <footer
    className="w-full py-10 px-4 flex justify-center 
    text-secondary dark:text-light"
  >
    <div className="max-w-xl flex flex-col items-center space-y-4">
      <div className="leading-8 text-center space-x-1">
        <span>jAPIdic was built with</span>
        <StyledLink href="https://nextjs.org">Next.js</StyledLink>
        <span>and it uses</span>
        <StyledLink href="https://jotoba.de/docs.html">Jotoba</StyledLink>
        <span>APIs.</span>
      </div>
      <div className="flex space-x-6">
        <GithubStat path="stargazers" icon={RiStarLine} number={0} />
        <GithubStat path="forks" icon={RiGitBranchLine} number={0} />
        <GithubStat path="wathcers" icon={RiEyeLine} number={0} />
      </div>
      <div>© Licensed under the MIT License.</div>
    </div>
  </footer>
);
export default Footer;
