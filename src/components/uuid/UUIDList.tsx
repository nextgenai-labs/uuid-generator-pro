"use client";

import { memo } from "react";
import { UUIDCard } from "./UUIDCard";

interface UUIDListProps {
  uuids: string[];
  onCopySingle: (index: number) => Promise<boolean>;
}

export const UUIDList = memo(function UUIDList({ uuids, onCopySingle }: UUIDListProps) {
  if (uuids.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2" role="list" aria-label="Generated UUIDs">
      {uuids.map((uuid, index) => (
        <div
          key={`${uuid}-${index}`}
          role="listitem"
          className="animate-fade-in"
          style={{ animationDelay: `${index * 15}ms` }}
        >
          <UUIDCard uuid={uuid} index={index} onCopy={onCopySingle} />
        </div>
      ))}
    </div>
  );
});
