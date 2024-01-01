import React from "react";
import NoResultFound from "./NoResultFound";

type ContainerProps = {
  label: string;
  children: React.ReactNode;
};

const ResultContainer = ({ children, label }: ContainerProps) => {
  const count = React.Children.count(children);

  return (
    <div className="h-full w-full max-w-4xl space-y-8">
      {count ? (
        <>
          <div
            className="flex items-center space-x-2
            text-secondary dark:text-light"
          >
            <div className="font-semibold text-2xl">{label}</div>
            <div>
              — {count} result{count > 1 && "s"} found
            </div>
          </div>
          <div className="h-full space-y-6">{children}</div>
        </>
      ) : (
        <NoResultFound />
      )}
    </div>
  );
};

export default ResultContainer;
