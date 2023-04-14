import createQueryString from "@/utils/createQueryString";
import React, { ChangeEvent, HTMLProps } from "react";

type SearchBarProps = {
  onSearch(searchWord: string): void;
} & HTMLProps<HTMLInputElement>;

export default function SearchBar({ onSearch, ...props }: SearchBarProps) {
  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    onSearch(event.target.value);
  }

  return (
    <label className="relative flex items-center">
      <input
        className="w-full p-4 bg-zinc-100 dark:bg-zinc-800 rounded-md outline-none focus:outline-1 focus:outline-violet-500	"
        onChange={handleSearchInput}
        type="search"
        {...props}
      />
      <SearchIcon />
    </label>
  );
}

const SearchIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute right-[24px]"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
    </svg>
  );
};
