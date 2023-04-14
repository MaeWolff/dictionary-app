import { WordResults } from "@/domain/dictionary";
import React from "react";
import WordMeaningSection from "./WordMeaningSection";
import { getPhoneticAudioUrl } from "@/domain/utils";
import WordPhoneticAudioButton from "./WordPhoneticAudioButton";
import ExternalLinkIcon from "@/assets/icons/ExternalLinkIcon";

interface WordResultsProps {
  data: WordResults;
}

export default function WordResultsView({ data }: WordResultsProps) {
  const phoneticAudioUrl = getPhoneticAudioUrl(data.phonetics);

  return (
    <div className="w-full flex flex-col gap-14">
      <header className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{data.word}</h1>
          <h2 className="text-xl text-violet-500">
            {data.phonetic ??
              data.phonetics?.[0]?.text ??
              data.phonetics?.[1]?.text}
          </h2>
        </div>

        {!!phoneticAudioUrl.length && (
          <WordPhoneticAudioButton audioUrl={phoneticAudioUrl} />
        )}
      </header>

      {data.meanings.map((meaning, index) => (
        <section key={index} className="w-full flex flex-col gap-10">
          <h3 className="flex items-center gap-6 text-xl after:content-[' '] after:block after:w-full after:h-[1px] after:bg-zinc-700">
            {meaning.partOfSpeech}
          </h3>

          <div className="flex flex-col gap-6">
            <h4 className="text-zinc-500">Meaning</h4>
            <ul className="marker:text-violet-500 flex flex-col gap-2 list-disc">
              {meaning.definitions.map((definition, index) => (
                <li key={index}>{definition.definition}</li>
              ))}
            </ul>
          </div>

          {!!meaning.synonyms.length && (
            <WordMeaningSection title="Synonyms" texts={meaning.synonyms} />
          )}

          {!!meaning.antonyms.length && (
            <WordMeaningSection title="Antonyms" texts={meaning.antonyms} />
          )}
        </section>
      ))}

      <section className="flex flex-col md:flex-row gap-4 border-t-[1px] pt-8 border-zinc-700 text-sm">
        <h4 className="text-zinc-500 underline underline-offset-4">Source</h4>
        <a
          className="flex flex-row gap-2 underline underline-offset-4 items-center transition duration-200 hover:opacity-40"
          target="_blank"
          rel="noreferrer"
          href={data.sourceUrls[0]}
        >
          {data.sourceUrls[0]}

          <span className="w-5 h-5 text-zinc-500">
            <ExternalLinkIcon />
          </span>
        </a>
      </section>
    </div>
  );
}
