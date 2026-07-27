"use client";

import { memo, useCallback } from "react";
import { CopyButton } from "./CopyButton";

interface UUIDCardProps {
  uuid: string;
  index: number;
  onCopy: (index: number) => Promise<boolean>;
}

export const UUIDCard = memo(function UUIDCard({ uuid, index, onCopy }: UUIDCardProps) {
  const handleCopy = useCallback(() => onCopy(index), [onCopy, index]);

  return (
    <div
      className="flex items-center justify-between gap-3 rounded-lg border px-4 py-2.5 transition-all duration-150 ease-in-out active:scale-[0.99]"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      <code
        className="select-all break-all font-mono text-sm"
        style={{ color: "var(--page-text)" }}
      >
        {uuid}
      </code>
      <CopyButton onClick={handleCopy} label="Copy UUID" />
    </div>
  );
});
