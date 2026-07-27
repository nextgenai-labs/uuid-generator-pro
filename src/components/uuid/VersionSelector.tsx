"use client";

import type { UuidVersion } from "@/lib/uuid";
import { UUID_VERSION_LABELS } from "@/lib/uuid";

const VERSIONS: UuidVersion[] = ["v1", "v4", "v7"];

interface VersionSelectorProps {
  value: UuidVersion;
  onChange: (version: UuidVersion) => void;
}

export function VersionSelector({ value, onChange }: VersionSelectorProps) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium">UUID Version</legend>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="UUID Version">
        {VERSIONS.map((v) => (
          <label
            key={v}
            className={`cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition-colors
              ${
                value === v
                  ? "border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950 dark:text-blue-300"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
          >
            <input
              type="radio"
              name="uuid-version"
              value={v}
              checked={value === v}
              onChange={() => onChange(v)}
              className="sr-only"
            />
            {UUID_VERSION_LABELS[v]}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
