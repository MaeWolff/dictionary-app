import React, { useEffect, useMemo, useState } from "react";

interface WordPhoneticAudioButtonProps {
  audioUrl: string;
}

export default function WordPhoneticAudioButton({
  audioUrl,
}: WordPhoneticAudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const phoneticAudio = useMemo(() => {
    return new Audio(audioUrl);
  }, [audioUrl]);

  useEffect(() => {
    phoneticAudio.addEventListener("playing", () => {
      setIsPlaying(true);
    });
    phoneticAudio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      phoneticAudio.removeEventListener("playing", () => {
        setIsPlaying(true);
      });
      phoneticAudio.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
    };
  }, [phoneticAudio]);

  return (
    <button
      onClick={() => phoneticAudio.play()}
      className="w-16 h-16 rounded-full flex justify-center items-center text-violet-300 bg-violet-900"
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

const PlayIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
};

const PauseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="4" height="16" x="6" y="4"></rect>
      <rect width="4" height="16" x="14" y="4"></rect>
    </svg>
  );
};
