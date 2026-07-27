"use client";

import { CopyButton } from "./CopyButton";

interface UUIDCardProps {
  uuid: string;
  index: number;
  onCopy: (index: number) => Promise<boolean>;
}

export function UUIDCard({ uuid, index, onCopy }: UUIDCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
      <code className="font-mono text-sm text-gray-900 dark:text-gray-100">{uuid}</code>
      <CopyButton onClick={() => onCopy(index)} label="Copy UUID" />
    </div>
  );
}
