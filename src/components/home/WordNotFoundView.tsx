import React from "react";

interface WordNotFoundViewProps {
  searchWord: string;
}

export default function WordNotFoundView({
  searchWord,
}: WordNotFoundViewProps) {
  return (
    <p className="text-zinc-500">
      No result found for <b className="text-violet-500">{searchWord}</b>
      . <br />
      Please try again with another word.
    </p>
  );
}
