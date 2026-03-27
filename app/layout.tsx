import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "انهف — A New Gender-Neutral Pronoun for Arabic",
  description:
    "انهف (inahuf) is an innovative gender-neutral pronoun for Arabic, created by the Iraqi queer community. Learn how to use it, explore grammar, and read stories.",
  openGraph: {
    title: "انهف — A New Gender-Neutral Pronoun for Arabic",
    description:
      "An innovative gender-neutral pronoun for Arabic, from the Iraqi queer community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="ltr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
