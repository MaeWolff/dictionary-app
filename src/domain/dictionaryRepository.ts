import fetcher from "@/utils/fetcher";
import { WordInformations, wordInformationsSchema } from "./dictionary";

export interface DictionaryRepository {
  getWordInformations(searchWord: string): Promise<WordInformations>;
}

export const dictionaryRepository: DictionaryRepository = {
  async getWordInformations(searchWord) {
    const response = await fetcher({ searchWord });
    const data = await response.json();
    return wordInformationsSchema.parse(data[0]);
  },
};
