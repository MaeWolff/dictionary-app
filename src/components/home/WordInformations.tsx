import { WordInformations } from "@/domain/dictionary";
import useWordInformationsQuery from "@/usecases/useWordInformationsQuery";
import { link } from "fs";
import React from "react";

interface WordInformationsProps {
  searchWord: WordInformations;
}

export default function WordInformations({
  searchWord,
}: WordInformationsProps) {
  return (
    <div className="w-full flex flex-col gap-14">
      <header className="w-full justify-space-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold playfair-font">
            {searchWord.word}
          </h1>
          <h2 className="text-xl text-violet-500">{searchWord.phonetic}</h2>
        </div>
      </header>

      {searchWord.meanings.map((meaning, index) => (
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
            <div className="flex flex-row gap-4">
              <h4 className="playfair-font text-zinc-500">Synonyms</h4>

              <div className="flex flex-wrap gap-2">
                {meaning.synonyms.map((synonym, index) => (
                  <p key={index} className="font-bold text-violet-500">
                    {synonym}
                  </p>
                ))}
              </div>
            </div>
          )}

          {meaning.antonyms.length > 0 && (
            <div className="flex flex-row gap-4">
              <h4 className="text-zinc-500">Antonyms</h4>

              <div className="flex flex-wrap gap-2">
                {meaning.antonyms.map((synonym, index) => (
                  <p key={index} className="font-bold text-violet-500">
                    {synonym}
                  </p>
                ))}
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
