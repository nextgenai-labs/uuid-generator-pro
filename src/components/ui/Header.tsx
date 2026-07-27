"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold tracking-tight">UUID Generator Pro</h1>
          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            v0.3.0
          </span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
