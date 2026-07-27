"use client";

import { useState, useCallback } from "react";
import type { UuidVersion } from "@/lib/uuid";
import { generateUuids } from "@/lib/uuid";
import { copyToClipboard } from "@/utils/clipboard";

export interface UseUuidGeneratorReturn {
  version: UuidVersion;
  quantity: number;
  uuids: string[];
  error: string | null;
  copiedIndex: number | null;
  setVersion: (version: UuidVersion) => void;
  setQuantity: (quantity: number) => void;
  generate: () => void;
  clear: () => void;
  copySingle: (index: number) => Promise<void>;
  copyAll: () => Promise<void>;
}

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 100;

export function useUuidGenerator(): UseUuidGeneratorReturn {
  const [version, setVersion] = useState<UuidVersion>("v4");
  const [quantity, setQuantity] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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
    const validationError = validateQuantity(quantity);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    try {
      const generated = generateUuids(version, quantity);
      setUuids(generated);
      setCopiedIndex(null);
    } catch {
      setError("Failed to generate UUIDs. Please try again.");
    }
  }, [quantity, version]);

  const clear = useCallback(() => {
    setUuids([]);
    setError(null);
    setCopiedIndex(null);
  }, []);

  const copySingle = useCallback(
    async (index: number) => {
      const uuid = uuids[index];
      if (!uuid) return;

      const success = await copyToClipboard(uuid);
      if (success) {
        setCopiedIndex(index);
      } else {
        setError("Failed to copy to clipboard.");
      }
    },
    [uuids],
  );

  const copyAll = useCallback(async () => {
    if (uuids.length === 0) return;

    const text = uuids.join("\n");
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedIndex(-1);
    } else {
      setError("Failed to copy to clipboard.");
    }
  }, [uuids]);

  return {
    version,
    quantity,
    uuids,
    error,
    copiedIndex,
    setVersion,
    setQuantity: handleSetQuantity,
    generate,
    clear,
    copySingle,
    copyAll,
  };
}
