import { WordResults } from "@/domain/dictionary";
import { useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import { dictionaryRepository } from "@/domain/dictionaryRepository";

export default function useWordResultsQuery(searchWord: string) {
  return useQuery<WordResults>(
    queryKeys.word.list(searchWord),
    () => dictionaryRepository.getWordResults(searchWord),
    {
      enabled: Boolean(searchWord),
    }
  );
}
