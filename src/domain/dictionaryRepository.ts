import fetcher from "@/utils/fetcher";
import { WordResults, wordResultsSchema } from "./dictionary";

export interface DictionaryRepository {
  getWordResults(searchWord: string): Promise<WordResults>;
}

export const dictionaryRepository: DictionaryRepository = {
  async getWordResults(searchWord) {
    const response = await fetcher({ searchWord });
    const data = await response.json();
    return wordResultsSchema.parse(data[0]);
  },
};
