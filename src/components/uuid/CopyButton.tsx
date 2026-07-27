"use client";

import { useState, useCallback, useEffect, useRef, memo } from "react";

interface CopyButtonProps {
  onClick: () => Promise<boolean>;
  label?: string;
}

export const CopyButton = memo(function CopyButton({ onClick, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleClick = useCallback(async () => {
    const success = await onClick();
    if (!success) return;
    setCopied(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null;
    }, 2000);
  }, [onClick]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"
      style={{
        backgroundColor: copied ? "var(--btn-copied-bg)" : "transparent",
        color: copied ? "var(--btn-copied-text)" : "var(--text-muted)",
        "--tw-ring-color": "var(--ring-focus)",
        "--tw-ring-offset-color": "var(--ring-offset)",
      } as React.CSSProperties}
      aria-label={copied ? "Copied" : label}
    >
      {copied ? "Copied!" : label}
    </button>
  );
});
