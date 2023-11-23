"use client";

import { RiErrorWarningLine, RiRestartLine } from "react-icons/ri";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div
      className="h-full flex flex-col items-center justify-center
      text-secondary dark:text-light"
    >
      <RiErrorWarningLine size={60} />
      <div className="mt-2 mb-8 font-semibold text-2xl">
        An error occured :'(
      </div>
      <button
        className="py-2 px-6 space-x-2 flex items-center rounded-md
        text-light dark:text-darkbg bg-primary hover:bg-secondary dark:hover:text-light"
        onClick={reset}
      >
        <RiRestartLine />
        <div>Retry</div>
      </button>
    </div>
  );
};

export default Error;
