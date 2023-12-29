import { RiEyeLine, RiGitBranchLine, RiStarLine } from "react-icons/ri";
import StyledLink from "../../common/StyledLink";
import GithubStat from "./GithubStat";
import { getRepoStats } from "@/api/github";

const Footer = async () => {
  const { stargazers, watchers, forks } = await getRepoStats();

  return (
    <footer
      className="w-full py-10 px-4 flex justify-center
      text-sm text-secondary dark:text-light"
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
          <GithubStat path="stargazers" icon={RiStarLine} number={stargazers} />
          <GithubStat path="forks" icon={RiGitBranchLine} number={forks} />
          <GithubStat path="watchers" icon={RiEyeLine} number={watchers} />
        </div>
        <div>© Licensed under the MIT License.</div>
      </div>
    </footer>
  );
};
export default Footer;
