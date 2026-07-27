"use client";

import { memo } from "react";
import { useUuidGenerator } from "@/hooks/useUuidGenerator";
import { VersionSelector } from "./VersionSelector";
import { QuantityInput } from "./QuantityInput";
import { UUIDList } from "./UUIDList";
import { CopyButton } from "./CopyButton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Card } from "@/components/ui/Card";

const ActionButton = memo(function ActionButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border px-4 text-sm font-medium transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40"
      style={{
        backgroundColor: "var(--btn-secondary-bg)",
        borderColor: "var(--btn-secondary-border)",
        color: "var(--btn-secondary-text)",
        "--tw-ring-color": "var(--ring-focus)",
        "--tw-ring-offset-color": "var(--ring-offset)",
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  );
});

function GenerateButton({
  disabled,
  generating,
  onClick,
}: {
  disabled: boolean;
  generating: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || generating}
      aria-label={generating ? "Generating UUIDs" : "Generate UUIDs"}
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-5 text-sm font-medium transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
      style={{
        backgroundColor: "var(--btn-primary-bg)",
        color: "var(--btn-primary-text)",
        "--tw-ring-color": "var(--ring-focus)",
        "--tw-ring-offset-color": "var(--ring-offset)",
      } as React.CSSProperties}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--btn-primary-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--btn-primary-bg)"; }}
    >
      {generating ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Generating
        </>
      ) : (
        "Generate"
      )}
    </button>
  );
}

export function UUIDGenerator() {
  const {
    version,
    quantity,
    uuids,
    error,
    generating,
    setVersion,
    setQuantity,
    generate,
    clear,
    copySingle,
    copyAll,
    exportTxt,
    exportCsv,
  } = useUuidGenerator();

  const hasUuids = uuids.length > 0;
  const hasError = error !== null;

  return (
    <Card>
      <div className="space-y-8">
        <div className="space-y-6">
          <VersionSelector value={version} onChange={setVersion} />
          <div className="flex flex-wrap items-end gap-4">
            <QuantityInput value={quantity} onChange={setQuantity} error={error} />
          </div>
          <div className="flex flex-wrap gap-3">
            <GenerateButton disabled={hasError} generating={generating} onClick={generate} />
            {hasUuids && (
              <ActionButton onClick={clear} aria-label="Clear all UUIDs">
                Clear
              </ActionButton>
            )}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--divider)" }} />

        {hasUuids ? (
          <div className="space-y-4">
            <div
              className="flex flex-wrap items-center justify-between gap-2"
              aria-live="polite"
              aria-atomic="true"
            >
              <h2 className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                Generated {uuids.length} UUID{uuids.length !== 1 ? "s" : ""}
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <ActionButton onClick={exportTxt} disabled={!hasUuids}>
                  Export TXT
                </ActionButton>
                <ActionButton onClick={exportCsv} disabled={!hasUuids}>
                  Export CSV
                </ActionButton>
                <CopyButton onClick={copyAll} label="Copy All" />
              </div>
            </div>
            <UUIDList uuids={uuids} onCopySingle={copySingle} />
          </div>
        ) : (
          <div className="pt-2">
            <EmptyState />
          </div>
        )}
      </div>
    </Card>
  );
}
