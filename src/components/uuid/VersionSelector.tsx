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
      <legend
        className="mb-3 text-sm font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        UUID Version
      </legend>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="UUID Version">
        {VERSIONS.map((v) => {
          const isSelected = value === v;
          return (
            <label
              key={v}
              className="cursor-pointer rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-150 ease-in-out focus-within:ring-2 focus-within:ring-offset-1"
              style={{
                backgroundColor: isSelected ? "var(--badge-bg)" : "var(--input-bg)",
                borderColor: isSelected ? "var(--input-focus-border)" : "var(--input-border)",
                color: isSelected ? "var(--badge-text)" : "var(--btn-secondary-text)",
                boxShadow: isSelected ? "var(--card-shadow)" : "none",
                "--tw-ring-color": "var(--ring-focus)",
                "--tw-ring-offset-color": "var(--ring-offset)",
              } as React.CSSProperties}
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
