"use client";

import StyledButton from "@/components/common/StyledButton";
import { RiFileCopyLine, RiShareLine, RiVolumeUpLine } from "react-icons/ri";

type WrapperProps = {
  audio?: string;
  writting: string;
};

const ButtonWrapper = ({ audio, writting }: WrapperProps) => {
  const handleAudio = async () => {
    if (audio) {
      const audioElem = new Audio("https://jotoba.de" + audio);
      await audioElem.play();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(writting);
  };

  const handleShare = () => {
    // TODO
  };

  return (
    <div className="flex items-start">
      {audio && <StyledButton icon={RiVolumeUpLine} onClick={handleAudio} />}
      <StyledButton icon={RiFileCopyLine} onClick={handleCopy} />
      <StyledButton icon={RiShareLine} onClick={handleShare} />
    </div>
  );
};

export default ButtonWrapper;
