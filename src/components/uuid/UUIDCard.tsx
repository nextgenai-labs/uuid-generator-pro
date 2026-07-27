"use client";

import { memo } from "react";
import { CopyButton } from "./CopyButton";

interface UUIDCardProps {
  uuid: string;
  index: number;
  onCopy: (index: number) => Promise<boolean>;
}

export const UUIDCard = memo(function UUIDCard({ uuid, index, onCopy }: UUIDCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 transition-all duration-150 ease-in-out hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600">
      <code className="select-all font-mono text-sm text-gray-900 dark:text-gray-100">{uuid}</code>
      <CopyButton onClick={() => onCopy(index)} label="Copy UUID" />
    </div>
  );
});
