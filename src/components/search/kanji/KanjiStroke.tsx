"use client";

import Tooltip from "@/components/common/Tooltip";
import anime from "animejs";
import { useMemo, useRef, useState } from "react";
import { RiEyeLine, RiPlayCircleLine, RiPlayFill } from "react-icons/ri";

const KanjiStroke = ({ svg }: { svg: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const matches = useMemo(() => /<svg.*?>(.*)<\/svg>/s.exec(svg), [svg]);
  const [isTextHidden, setIsTextHidden] = useState(false);

  const animate = () => {
    const strokeColor = document.documentElement.classList.contains("dark")
      ? "#E7E8ED"
      : "#526071";

    anime({
      targets: svgRef.current?.querySelectorAll("path"),
      strokeDashoffset: [anime.setDashoffset, 0],
      stroke: ["#DC515C", "#DC515C", strokeColor],
      easing: "easeInOutSine",
      duration: 300,
      delay: (_, i) => i * 300,
    });

    if (!isTextHidden) {
      anime({
        targets: svgRef.current?.querySelectorAll("text"),
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 300,
        delay: (_, i) => i * 300,
      });
    }
  };

  if (matches) {
    return (
      <div className="flex">
        <svg
          className={`${isTextHidden && "hidden-text"} h-32 w-32`}
          dangerouslySetInnerHTML={{ __html: matches[1] }}
          ref={svgRef}
        ></svg>
        <div className="flex flex-col justify-center space-y-4">
          <Tooltip
            text="Play animation"
            className="cursor-pointer hover:text-primary"
            onClick={animate}
          >
            <RiPlayCircleLine size={22} />
          </Tooltip>
          <Tooltip
            text="Hide numbers"
            className="cursor-pointer hover:text-primary"
            onClick={() => setIsTextHidden((prev) => !prev)}
          >
            <RiEyeLine size={22} />
          </Tooltip>
        </div>
      </div>
    );
  }
};

export default KanjiStroke;
