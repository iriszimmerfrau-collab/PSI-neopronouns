"use client";

import { useState } from "react";

const links = [
  { href: "#why", labelEn: "Why", labelAr: "ليش؟" },
  { href: "#pronouns", labelEn: "Pronouns", labelAr: "الضمائر" },
  { href: "#grammar", labelEn: "Grammar", labelAr: "القواعد" },
  { href: "#stories", labelEn: "Stories", labelAr: "قصص" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-arabic gradient-text">
          انهف
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-accent transition-colors"
            >
              <span className="font-arabic">{l.labelAr}</span>
              <span className="mx-1 text-gray-300">|</span>
              <span>{l.labelEn}</span>
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-accent transition-colors"
            >
              <span className="font-arabic">{l.labelAr}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span>{l.labelEn}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
