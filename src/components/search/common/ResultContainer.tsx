import React from "react";
import NoResultFound from "./NoResultFound";

const ResultContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full w-full max-w-4xl space-y-8">
    {React.Children.count(children) ? children : <NoResultFound />}
  </div>
);

export default ResultContainer;
