import { WordInformations } from "@/domain/dictionary";
import { useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import { dictionaryRepository } from "@/domain/dictionaryRepository";

export default function useWordInformationsQuery(searchWord: string) {
  return useQuery<WordInformations>(queryKeys.word.all, () =>
    dictionaryRepository.getWordInformations(searchWord)
  );
}