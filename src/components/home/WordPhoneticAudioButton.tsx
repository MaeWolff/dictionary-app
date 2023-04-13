import PauseIcon from "@/assets/icons/PauseIcon";
import PlayIcon from "@/assets/icons/PlayIcon";
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
      className="w-16 h-16 rounded-full flex justify-center items-center transition text-violet-500 hover:text-violet-100 bg-violet-100 hover:bg-violet-500 dark:text-violet-300 dark:hover:text-violet-100  dark:bg-violet-900 dark:hover:bg-violet-500"
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}
