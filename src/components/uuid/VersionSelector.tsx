"use client";

import { memo } from "react";
import type { UuidVersion } from "@/lib/uuid";
import { UUID_VERSION_LABELS } from "@/lib/uuid";

const VERSIONS: UuidVersion[] = ["v1", "v4", "v7"];

interface VersionSelectorProps {
  value: UuidVersion;
  onChange: (version: UuidVersion) => void;
}

export const VersionSelector = memo(function VersionSelector({
  value,
  onChange,
}: VersionSelectorProps) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        UUID Version
      </legend>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="UUID Version">
        {VERSIONS.map((v) => {
          const isSelected = value === v;
          return (
            <label
              key={v}
              className={`cursor-pointer rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-150 ease-in-out focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-1 ${
                isSelected
                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm dark:border-blue-400 dark:bg-blue-950 dark:text-blue-300"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200"
              }`}
            >
              <input
                type="radio"
                name="uuid-version"
                value={v}
                checked={isSelected}
                onChange={() => onChange(v)}
                className="sr-only"
              />
              {UUID_VERSION_LABELS[v]}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
});
