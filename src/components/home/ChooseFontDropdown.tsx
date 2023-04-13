import { FONT_STYLES, FontStyles, useFont } from "@/contexts/FontContext";
import { useState } from "react";

export default function ChooseFontDropdown() {
  const { font, handleSwitchFont } = useFont();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectFont = (option: FontStyles) => {
    handleSwitchFont(option);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className={`group/container px-4 py-2 font-${font} font-medium rounded-m`}
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        {FONT_STYLES[font]}

        <svg
          className="inline-block w-4 h-4 ml-2 -mr-1 group-hover/container:text-violet-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.71-.29l-3.58-3.58a1 1 0 011.42-1.42L10 9.59l2.88-2.88a1 1 0 011.42 1.42l-3.58 3.58A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-10 w-40 p-2 bg-white dark:bg-zinc-800 rounded-md shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Object.entries(FONT_STYLES).map(([key, value]) => {
            return (
              <DropdownItem
                key={key}
                isSelected={font === key}
                onClick={() => handleSelectFont(key as FontStyles)}
                option={value}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  onClick: () => void;
  isSelected: boolean;
  option: string;
}

const DropdownItem = ({ onClick, isSelected, option }: DropdownItemProps) => {
  return (
    <button
      className={`w-full px-4 py-2 text-sm text-start font-medium rounded ${
        isSelected
          ? "text-violet-500"
          : "hover:bg-gray-100 dark:hover:bg-zinc-900"
      }`}
      onClick={onClick}
    >
      {option}
    </button>
  );
};
