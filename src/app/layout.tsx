import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme";
import { THEME_INIT_SCRIPT } from "@/lib/themeInitScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "UUID Generator Pro",
  description: "A fast, modern, and customizable UUID Generator built with Next.js and TypeScript.",
  keywords: ["uuid", "generator", "developer-tools", "nextjs", "typescript"],
  authors: [{ name: "NextGenAI Labs" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "UUID Generator Pro",
    description:
      "A fast, modern, and customizable UUID Generator built with Next.js and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
