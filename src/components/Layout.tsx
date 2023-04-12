import React, { ReactNode } from "react";
import Header from "./home/Header";
import { useTheme } from "@/contexts/ThemeContext";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <html lang="en" className={`${theme}`}>
      <body className="dark:bg-zinc-900 dark:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
