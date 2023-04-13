import React from "react";

interface WordMeaningSectionProps {
  title: string;
  texts: string[];
}

export default function WordMeaningSection({
  title,
  texts,
}: WordMeaningSectionProps) {
  return (
    <div className="flex flex-row gap-4">
      <h4 className="text-zinc-500">{title}</h4>

      <div className="flex flex-wrap gap-2">
        {texts.map((text, index) => (
          <p key={index} className="font-bold text-violet-500">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
