import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import { useTheme } from "@/contexts/ThemeContext";

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
