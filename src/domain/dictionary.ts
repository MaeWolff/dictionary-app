import { z } from "zod";

export const phoneticsSchema = z
  .array(
    z.object({
      audio: z.string().optional(),
      sourceUrl: z.string().optional(),
      text: z.string().optional(),
    })
  )
  .optional();
export type Phonetics = z.infer<typeof phoneticsSchema>;

export const meaningsSchema = z.array(
  z.object({
    partOfSpeech: z.string(),
    definitions: z.array(
      z.object({
        definition: z.string(),
        synonyms: z.array(z.string()),
        antonyms: z.array(z.string()),
        example: z.string().optional(),
      })
    ),
    synonyms: z.array(z.string()),
    antonyms: z.array(z.string()),
  })
);
export type Meanings = z.infer<typeof meaningsSchema>;

export const wordResultsSchema = z.object({
  word: z.string(),
  phonetic: z.string().optional(),
  phonetics: phoneticsSchema,
  meanings: meaningsSchema,
  sourceUrls: z.array(z.string()),
  license: z.object({
    name: z.string(),
    url: z.string(),
  }),
});
export type WordResults = z.infer<typeof wordResultsSchema>;
