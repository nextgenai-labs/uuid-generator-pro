"use client";

import { UUIDCard } from "./UUIDCard";

interface UUIDListProps {
  uuids: string[];
  onCopySingle: (index: number) => Promise<void>;
}

export function UUIDList({ uuids, onCopySingle }: UUIDListProps) {
  if (uuids.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2" role="list" aria-label="Generated UUIDs">
      {uuids.map((uuid, index) => (
        <div key={`${uuid}-${index}`} role="listitem">
          <UUIDCard uuid={uuid} index={index} onCopy={onCopySingle} />
        </div>
      ))}
    </div>
  );
}
