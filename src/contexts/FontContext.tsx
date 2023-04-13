"use client";
import invariant from "@/utils/invariant";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import {
  Inter as InterFont,
  Lora as LoraFont,
  Inconsolata as InconsolataFont,
} from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

const Inter = InterFont({
  subsets: ["latin"],
  display: "swap",
});

const Lora = LoraFont({
  subsets: ["latin"],
  display: "swap",
});

const Inconsolata = InconsolataFont({
  subsets: ["latin"],
  display: "swap",
});

export enum FONT_STYLES {
  serif = "Serif",
  sans = "Sans Serif",
  mono = "Mono",
}
export type FontStyles = keyof typeof FONT_STYLES;

export const MAP_FONT_STYLES_TO_FONT_FAMILY: Record<FontStyles, NextFont> = {
  serif: Inter,
  sans: Lora,
  mono: Inconsolata,
};

export interface FontContextProps {
  font: FontStyles;
  handleSwitchFont: (selectedFont: FontStyles) => void;
}

export const FontContext = createContext<FontContextProps | null>(null);

export function FontProvider({ children }: PropsWithChildren) {
  const [selectedFont, setSelectedFont] = useState<FontStyles>("mono");

  function handleSwitchFont(selectedFont: FontStyles) {
    setSelectedFont(selectedFont);
  }

  return (
    <FontContext.Provider value={{ font: selectedFont, handleSwitchFont }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);

  invariant(
    context,
    "could not find FontContext, please ensure the component is wrapped in a <FontProvider>"
  );

  return context;
}
