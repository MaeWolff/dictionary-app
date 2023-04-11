import React, { ChangeEvent, HTMLProps } from "react";

type SearchBarProps = {
  onSearch(searchWord: string): void;
} & HTMLProps<HTMLInputElement>;

export default function SearchBar({ onSearch, ...props }: SearchBarProps) {
  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    onSearch(event.target.value);
  }

  return (
    <input
      className="w-full p-4 bg-zinc-800 rounded-md outline-none focus:outline-1 focus:outline-violet-500	"
      onChange={handleSearchInput}
      type="search"
      {...props}
    />
  );
}