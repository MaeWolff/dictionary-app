import { WordInformations } from "@/domain/dictionary";
import React from "react";
import WordMeaningSection from "./WordMeaningSection";

interface WordInformationsProps {
  data: WordInformations;
}

export default function WordInformationsView({ data }: WordInformationsProps) {
  return (
    <div className="w-full flex flex-col gap-14">
      <header className="w-full justify-space-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold playfair-font">{data.word}</h1>
          <h2 className="text-xl text-violet-500">
            {data.phonetic ??
              data.phonetics?.[0].text ??
              data.phonetics?.[1].text}
          </h2>
        </div>
      </header>

      {data.meanings.map((meaning, index) => (
        <section key={index} className="w-full flex flex-col gap-12">
          <h3 className="flex items-center gap-6 text-xl playfair-font after:content-[' '] after:block after:w-full after:h-[1px] after:bg-zinc-700">
            {meaning.partOfSpeech}
          </h3>

          <div className="flex flex-col gap-6">
            <h4 className="playfair-font text-zinc-500">Meaning</h4>
            <ul className="flex flex-col gap-2 list-disc">
              {meaning.definitions.map((definition, index) => (
                <li key={index}>{definition.definition}</li>
              ))}
            </ul>
          </div>

          {meaning.synonyms.length > 0 && (
            <WordMeaningSection title="Synonyms" texts={meaning.synonyms} />
          )}

          {meaning.antonyms.length > 0 && (
            <WordMeaningSection title="Antonyms" texts={meaning.antonyms} />
          )}
        </section>
      ))}
    </div>
  );
}
