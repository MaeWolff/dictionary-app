import { WordResults } from "./dictionary";

export function getPhoneticAudioUrl(
  phonetics: WordResults["phonetics"]
): string {
  if (!phonetics) return "";

  const phonetic = phonetics.find((phonetic) =>
    phonetic.audio?.includes("https")
  );
  return phonetic?.audio ?? "";
}
