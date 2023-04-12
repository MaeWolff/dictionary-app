"use client";
import { Playfair_Display } from "next/font/google";
import SearchBar from "@/components/SearchBar";
import WordInformations from "@/components/home/WordInformations";
import useWordInformationsQuery from "@/usecases/useWordInformationsQuery";
import useDebounce from "@/utils/hooks/useDebounce";
import { FormEvent, useState } from "react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const SEACH_DEBOUNCE_VALUE_IN_MS = 300;

export default function Home() {
  const [searchWord, setSearchWord] = useState<string>("Word");
  const debouncedSearchWord = useDebounce<string>(
    searchWord,
    SEACH_DEBOUNCE_VALUE_IN_MS
  );

  const {
    data: word,
    isLoading,
    isError,
    isSuccess,
  } = useWordInformationsQuery(debouncedSearchWord);

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <main
      className={`w-full flex min-h-screen max-w-[900px] mx-auto flex-col p-8 md:p-24 gap-8 ${playfairDisplay.variable}`}
    >
      <form className="w-full" onSubmit={handleSubmitForm}>
        <SearchBar
          id="search-bar"
          onSearch={setSearchWord}
          placeholder="word"
        />
      </form>

      {isLoading && <p>loading...</p>}
      {isError && (
        <p className="text-zinc-500">
          No result found for{" "}
          <b className="playfair-font text-violet-500">{debouncedSearchWord}</b>
          . <br />
          Please try again with another word.
        </p>
      )}

      {isSuccess && (
        <output htmlFor="search-bar">
          <WordInformations searchWord={word} />
        </output>
      )}
    </main>
  );
}
