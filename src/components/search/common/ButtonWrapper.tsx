"use client";

import Tooltip from "@/components/common/Tooltip";
import { RiFileCopyLine, RiShareLine, RiVolumeUpLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { useSearchParams } from "next/navigation";

type ButtonProp = {
  icon: IconType;
  text: string;
  onClick: () => void;
};

const StyledButton = ({ icon: Icon, text, onClick }: ButtonProp) => (
  <Tooltip text={text} onClick={onClick}>
    <button
      className="relative group p-2 rounded-full
      text-secondary dark:text-light"
    >
      <Icon size={18} />
    </button>
  </Tooltip>
);

type WrapperProps = {
  audio?: string;
  writting: string;
};

const ButtonWrapper = ({ audio, writting }: WrapperProps) => {
  const params = useSearchParams();

  const handleAudio = async () => {
    if (audio) {
      const audioElem = new Audio("https://jotoba.de" + audio);
      await audioElem.play();
    }
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(writting);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `/search?type=${params.get("type")}&query=${writting}`
      );
    }
  };

  return (
    <div className="flex items-start">
      {audio && (
        <StyledButton
          icon={RiVolumeUpLine}
          text="Play audio file"
          onClick={handleAudio}
        />
      )}
      <StyledButton
        icon={RiFileCopyLine}
        text="Copy text to clipboard"
        onClick={handleCopy}
      />
      <StyledButton
        icon={RiShareLine}
        text="Copy link to clipboard"
        onClick={handleShare}
      />
    </div>
  );
};

export default ButtonWrapper;
