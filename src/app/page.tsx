"use client";
import { FormEvent, useState } from "react";
import { Playfair_Display } from "next/font/google";
import SearchBar from "@/components/SearchBar";
import WordInformationsView from "@/components/home/WordInformationsView";
import useWordInformationsQuery from "@/usecases/useWordInformationsQuery";
import useDebounce from "@/utils/hooks/useDebounce";
import WordNotFoundView from "@/components/home/WordNotFoundView";
import WordLoadingView from "@/components/home/WordLoadingView";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const SEACH_DEBOUNCE_VALUE_IN_MS = 500;
const DEFAULT_SEARCH_WORD = "word";

export default function Home() {
  const [searchWord, setSearchWord] = useState<string>(DEFAULT_SEARCH_WORD);
  const debouncedSearchWord = useDebounce<string>(
    searchWord,
    SEACH_DEBOUNCE_VALUE_IN_MS
  );

  const { data, isLoading, isError, isSuccess } =
    useWordInformationsQuery(debouncedSearchWord);

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

      <output htmlFor="search-bar">
        {isLoading && <WordLoadingView />}
        {isError && <WordNotFoundView searchWord={searchWord} />}
        {isSuccess && <WordInformationsView data={data} />}
      </output>
    </main>
  );
}
