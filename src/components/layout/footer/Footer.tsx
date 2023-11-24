import { RiEyeLine, RiGitBranchLine, RiStarLine } from "react-icons/ri";
import StyledLink from "../../common/StyledLink";
import GithubStat from "./GithubStat";
import axios from "axios";

const Footer = async () => {
  // const res = await axios.get(
  //   "https://api.github.com/repos/luckasRanarison/japidic"
  // );
  // const parsed = await res.data;

  return (
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
          <GithubStat path="watchers" icon={RiEyeLine} number={0} />
        </div>
        <div>© Licensed under the MIT License.</div>
      </div>
    </footer>
  );
};
export default Footer;
