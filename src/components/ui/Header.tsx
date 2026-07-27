"use client";

import { ThemeToggle } from "./ThemeToggle";
import { APP_VERSION_SHORT } from "@/config/appVersion";

export function Header() {
  return (
    <header
      style={{
        backgroundColor: "var(--header-bg)",
        borderBottom: "1px solid var(--header-border)",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold tracking-tight" style={{ color: "var(--page-text)" }}>
            UUID Generator Pro
          </h1>
          <span
            className="rounded-full px-2 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: "var(--badge-bg)",
              color: "var(--badge-text)",
            }}
          >
            {APP_VERSION_SHORT}
          </span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
