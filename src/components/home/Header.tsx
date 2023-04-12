import { useTheme } from "@/contexts/ThemeContext";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex max-w-[900px] justify-between items-center mx-auto mt-8 flex-row px-8 md:px-24 gap-8">
      <p>mw.</p>

      <ThemeButton />
    </header>
  );
}

function ThemeButton() {
  const { theme, handleSwitchTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <button
      className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md"
      onClick={() => handleSwitchTheme()}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

const SunIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
      <path d="M12 8a2.828 2.828 0 1 0 4 4"></path>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  );
};

const MoonIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );
};
