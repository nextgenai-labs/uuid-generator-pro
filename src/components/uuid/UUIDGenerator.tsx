"use client";

import { useUuidGenerator } from "@/hooks/useUuidGenerator";
import { VersionSelector } from "./VersionSelector";
import { QuantityInput } from "./QuantityInput";
import { UUIDList } from "./UUIDList";
import { CopyButton } from "./CopyButton";

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
  } = useUuidGenerator();

  const hasUuids = uuids.length > 0;
  const hasError = error !== null;

  return (
    <section>
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
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-900"
          >
            Generate
          </button>
          {hasUuids && (
            <>
              <button
                type="button"
                onClick={clear}
                className="rounded-md border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
              >
                Clear
              </button>
              <CopyButton onClick={copyAll} label="Copy All" />
            </>
          )}
        </div>
      </div>

      {hasUuids && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Generated {uuids.length} UUID{uuids.length !== 1 ? "s" : ""}
            </h2>
          </div>
          <UUIDList uuids={uuids} onCopySingle={copySingle} />
        </div>
      )}
    </section>
  );
}
