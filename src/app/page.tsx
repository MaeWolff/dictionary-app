"use client";
import { FormEvent, useState } from "react";
import SearchBar from "@/components/SearchBar";
import WordResultsView from "@/components/home/WordResultsView";
import useWordResultsQuery from "@/usecases/useWordResultsQuery";
import useDebounce from "@/utils/hooks/useDebounce";
import WordNotFoundView from "@/components/home/WordNotFoundView";
import WordLoadingView from "@/components/home/WordLoadingView";

const SEACH_DEBOUNCE_VALUE_IN_MS = 500;
const DEFAULT_SEARCH_WORD = "word";

export default function Home() {
  const [searchWord, setSearchWord] = useState<string>(DEFAULT_SEARCH_WORD);
  const debouncedSearchWord = useDebounce<string>(
    searchWord,
    SEACH_DEBOUNCE_VALUE_IN_MS
  );

  const { data, isLoading, isError, isSuccess } =
    useWordResultsQuery(debouncedSearchWord);

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <main
      className={`w-full flex min-h-screen max-w-[735px] mx-auto flex-col p-8 md:p-24 gap-8 md:gap-16`}
    >
      <form className="w-full" id="search-form" onSubmit={handleSubmitForm}>
        <SearchBar
          id="search-bar"
          onSearch={setSearchWord}
          placeholder="word"
        />
      </form>

      <output htmlFor="search-bar" form="search-form">
        {isLoading && <WordLoadingView />}
        {isError && <WordNotFoundView searchWord={searchWord} />}
        {isSuccess && <WordResultsView data={data} />}
      </output>
    </main>
  );
}
