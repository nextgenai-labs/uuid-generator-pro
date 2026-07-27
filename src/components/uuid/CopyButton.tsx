"use client";

import { useState, useCallback } from "react";

interface CopyButtonProps {
  onClick: () => Promise<void>;
  label?: string;
}

export function CopyButton({ onClick, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(async () => {
    await onClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [onClick]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700"
      aria-label={copied ? "Copied" : label}
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
