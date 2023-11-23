import { RiEmotionUnhappyFill } from "react-icons/ri";

const NoResultFound = () => (
  <div
    className="h-full space-y-4 flex flex-col items-center justify-center
    font-semibold text-2xl text-secondary dark:text-light"
  >
    <RiEmotionUnhappyFill size={60} />
    <div>No results found</div>
  </div>
);

export default NoResultFound;
