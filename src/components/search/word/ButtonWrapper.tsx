"use client";

import StyledButton from "@/components/common/StyledButton";
import api from "@/api";
import { RiFileCopyLine, RiShareLine, RiVolumeUpLine } from "react-icons/ri";

type WrapperProps = {
  audio?: string;
  writting: string;
};

const ButtonWrapper = ({ audio, writting }: WrapperProps) => {
  const handleAudio = async () => {
    if (audio) {
      // TODO
      const file = await api.get(audio);
    }
  };

  const handleCopy = async () => {
    await new Clipboard().writeText(writting);
  };

  const handleShare = () => {
    // TODO
  };

  return (
    <div className="space-x-4">
      {audio && <StyledButton icon={RiVolumeUpLine} onClick={handleAudio} />}
      <StyledButton icon={RiFileCopyLine} onClick={handleCopy} />
      <StyledButton icon={RiShareLine} onClick={handleShare} />
    </div>
  );
};

export default ButtonWrapper;
