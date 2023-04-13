import React, { ReactNode } from "react";
import Header from "./home/Header";
import { useTheme } from "@/contexts/ThemeContext";
import {
  MAP_FONT_STYLES_TO_FONT_FAMILY,
  useFont,
} from "@/contexts/FontContext";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const { font } = useFont();

  return (
    <html
      lang="en"
      className={`${theme} ${MAP_FONT_STYLES_TO_FONT_FAMILY[font].className}`}
    >
      <body className="dark:bg-zinc-900 dark:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
