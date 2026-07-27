"use client";

import { useState, useCallback, useRef } from "react";
import type { UuidVersion } from "@/lib/uuid";
import { generateUuids, MIN_QUANTITY, MAX_QUANTITY } from "@/lib/uuid";
import { copyToClipboard } from "@/utils/clipboard";
import { exportTxt as doExportTxt, exportCsv as doExportCsv } from "@/utils/export";

export interface UseUuidGeneratorReturn {
  version: UuidVersion;
  quantity: number;
  uuids: string[];
  error: string | null;
  setVersion: (version: UuidVersion) => void;
  setQuantity: (quantity: number) => void;
  generate: () => void;
  clear: () => void;
  copySingle: (index: number) => Promise<boolean>;
  copyAll: () => Promise<boolean>;
  exportTxt: () => void;
  exportCsv: () => void;
}

const GENERATE_THROTTLE_MS = 200;

export function useUuidGenerator(): UseUuidGeneratorReturn {
  const [version, setVersion] = useState<UuidVersion>("v4");
  const [quantity, setQuantity] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const generating = useRef(false);

  function validateQuantity(value: number): string | null {
    if (!Number.isInteger(value) || value < MIN_QUANTITY || value > MAX_QUANTITY) {
      return `Quantity must be an integer between ${MIN_QUANTITY} and ${MAX_QUANTITY}.`;
    }
    return null;
  }

  const handleSetQuantity = useCallback((value: number) => {
    setQuantity(value);
    setError(validateQuantity(value));
  }, []);

  const generate = useCallback(() => {
    if (generating.current) return;
    generating.current = true;

    const validationError = validateQuantity(quantity);
    if (validationError) {
      setError(validationError);
      generating.current = false;
      return;
    }

    setError(null);

    try {
      const generated = generateUuids(version, quantity);
      setUuids(generated);
    } catch {
      setError("Failed to generate UUIDs. Please try again.");
    }

    setTimeout(() => {
      generating.current = false;
    }, GENERATE_THROTTLE_MS);
  }, [quantity, version]);

  const clear = useCallback(() => {
    setUuids([]);
    setError(null);
  }, []);

  const copySingle = useCallback(
    async (index: number): Promise<boolean> => {
      const uuid = uuids[index];
      if (!uuid) return false;

      return copyToClipboard(uuid);
    },
    [uuids],
  );

  const copyAll = useCallback(async (): Promise<boolean> => {
    if (uuids.length === 0) return false;

    const text = uuids.join("\n");
    return copyToClipboard(text);
  }, [uuids]);

  const exportTxt = useCallback(() => {
    if (uuids.length === 0) return;
    doExportTxt(uuids);
  }, [uuids]);

  const exportCsv = useCallback(() => {
    if (uuids.length === 0) return;
    doExportCsv(uuids);
  }, [uuids]);

  return {
    version,
    quantity,
    uuids,
    error,
    setVersion,
    setQuantity: handleSetQuantity,
    generate,
    clear,
    copySingle,
    copyAll,
    exportTxt,
    exportCsv,
  };
}
