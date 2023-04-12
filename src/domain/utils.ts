import { WordInformations } from "./dictionary";

export function getPhoneticAudioUrl(
  phonetics: WordInformations["phonetics"]
): string {
  if (!phonetics) return "";

  const phonetic = phonetics.find((phonetic) =>
    phonetic.audio?.includes("https")
  );
  return phonetic?.audio ?? "";
}
