"use client";
import invariant from "@/utils/invariant";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";

export interface ThemeContextProps {
  theme: ThemeType;
  handleSwitchTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  function handleSwitchTheme() {
    const isDarkTheme = theme === "dark";
    return setTheme(isDarkTheme ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, handleSwitchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  invariant(
    context,
    "could not find ThemeContext, please ensure the component is wrapped in a <ThemeProvider>"
  );

  return context;
}
