"use client";

import Tooltip from "@/components/common/Tooltip";
import {
  RiCheckLine,
  RiFileCopyLine,
  RiLoader4Line,
  RiShareLine,
  RiVolumeUpLine,
} from "react-icons/ri";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { copy } from "clipboard";

type ButtonProp = {
  icon: JSX.Element;
  text: string;
  showTooltip?: boolean;
  onClick: () => void;
};

const StyledButton = ({ icon, text, showTooltip, onClick }: ButtonProp) => (
  <Tooltip text={text} onClick={onClick} showTooltip={showTooltip}>
    <button
      className="relative group p-2 rounded-full
      text-secondary dark:text-light"
    >
      {icon}
    </button>
  </Tooltip>
);

const Spinner = () => <RiLoader4Line className="animate-spin" />;

type WrapperProps = {
  audio?: string;
  writting: string;
};

const ButtonWrapper = ({ audio, writting }: WrapperProps) => {
  const params = useSearchParams();
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [hasCopiedText, setHasCopiedText] = useState(false);
  const [hasSharedLink, setHasSharedLink] = useState(false);

  const handleAudio = async () => {
    if (audio) {
      setIsLoadingAudio(true);
      const audioElem = new Audio("https://jotoba.de" + audio);
      await audioElem.play();
      setIsLoadingAudio(false);
    }
  };

  const handleCopy = () => {
    setHasCopiedText(true);
    copy(writting);
    setTimeout(() => setHasCopiedText(false), 1000);
  };

  const handleShare = () => {
    setHasSharedLink(true);
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const type = params.get("type");
    copy(`${domain}/search?type=${type}&query=${writting}`);
    setTimeout(() => setHasSharedLink(false), 1000);
  };

  return (
    <div className="flex items-start">
      {audio && (
        <StyledButton
          icon={isLoadingAudio ? <Spinner /> : <RiVolumeUpLine />}
          text="Play audio file"
          onClick={handleAudio}
        />
      )}
      <StyledButton
        icon={hasCopiedText ? <RiCheckLine /> : <RiFileCopyLine />}
        text={hasCopiedText ? "Copied to clipboard" : "Copy text to clipboard"}
        showTooltip={hasCopiedText}
        onClick={handleCopy}
      />
      <StyledButton
        icon={hasSharedLink ? <RiCheckLine /> : <RiShareLine />}
        text={hasSharedLink ? "Copied to clipboard" : "Copy link to clipboard"}
        showTooltip={hasSharedLink}
        onClick={handleShare}
      />
    </div>
  );
};

export default ButtonWrapper;
