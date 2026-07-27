"use client";

import { useUuidGenerator } from "@/hooks/useUuidGenerator";
import { VersionSelector } from "./VersionSelector";
import { QuantityInput } from "./QuantityInput";
import { UUIDList } from "./UUIDList";
import { CopyButton } from "./CopyButton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Card } from "@/components/ui/Card";
import clsx from "clsx";

function ActionButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={clsx(
        "rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function UUIDGenerator() {
  const {
    version,
    quantity,
    uuids,
    error,
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
            <button
              type="button"
              onClick={generate}
              disabled={hasError}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-900"
            >
              Generate
            </button>
            {hasUuids && <ActionButton onClick={clear}>Clear</ActionButton>}
          </div>
        </div>

        {hasUuids ? (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Generated {uuids.length} UUID{uuids.length !== 1 ? "s" : ""}
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <ActionButton onClick={exportTxt}>Export TXT</ActionButton>
                <ActionButton onClick={exportCsv}>Export CSV</ActionButton>
                <CopyButton onClick={copyAll} label="Copy All" />
              </div>
            </div>
            <UUIDList uuids={uuids} onCopySingle={copySingle} />
          </div>
        ) : (
          <div className="border-t border-gray-100 pt-8 dark:border-gray-800">
            <EmptyState />
          </div>
        )}
      </div>
    </Card>
  );
}
