"use client";

import { useState } from "react";
import type { Story } from "@/data/stories";

export default function StoryCard({ story }: { story: Story }) {
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar");

  return (
    <div className="story-card bg-white border border-gray-100 rounded-2xl overflow-hidden">
      {/* Header */}
      <div
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            <span className="font-arabic">{story.titleAr}</span>
            <span className="mx-3 text-gray-300">|</span>
            <span>{story.titleEn}</span>
          </h3>
          <p className="text-xs text-gray-400 mt-1">{story.inspiration}</p>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 pb-6">
          {/* Language toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setLang("ar")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === "ar"
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === "en"
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              English
            </button>
          </div>

          {/* Story text */}
          <div
            className={`leading-relaxed whitespace-pre-line ${
              lang === "ar"
                ? "font-arabic rtl text-gray-800 text-lg"
                : "text-gray-700"
            }`}
          >
            {lang === "ar" ? story.contentAr : story.contentEn}
          </div>
        </div>
      )}
    </div>
  );
}
