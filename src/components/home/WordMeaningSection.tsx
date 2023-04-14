"use client";
import React from "react";
import { useRouter } from "next/navigation";
import createQueryString from "@/utils/createQueryString";

interface WordMeaningSectionProps {
  title: string;
  texts: string[];
}

export default function WordMeaningSection({
  title,
  texts,
}: WordMeaningSectionProps) {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-4">
      <h4 className="text-zinc-500">{title}</h4>

      <div className="flex flex-wrap gap-2">
        {texts.map((text, index) => (
          <button
            key={index}
            className="font-bold text-violet-500 hover:underline hover:opacity-70"
            onClick={() => router.push(`?${createQueryString("word", text)}`)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
