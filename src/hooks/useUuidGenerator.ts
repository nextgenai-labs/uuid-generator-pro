"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type { UuidVersion } from "@/lib/uuid";
import { generateUuids, MIN_QUANTITY, MAX_QUANTITY } from "@/lib/uuid";
import { copyToClipboard } from "@/utils/clipboard";
import { exportTxt as doExportTxt, exportCsv as doExportCsv } from "@/utils/export";

export interface UseUuidGeneratorReturn {
  version: UuidVersion;
  quantity: number;
  uuids: string[];
  error: string | null;
  generating: boolean;
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
  const [generating, setGenerating] = useState(false);
  const generatingRef = useRef(false);
  const uuidsRef = useRef(uuids);

  useEffect(() => {
    uuidsRef.current = uuids;
  }, [uuids]);

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
    if (generatingRef.current) return;
    generatingRef.current = true;
    setGenerating(true);

    const validationError = validateQuantity(quantity);
    if (validationError) {
      setError(validationError);
      generatingRef.current = false;
      setGenerating(false);
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
      generatingRef.current = false;
      setGenerating(false);
    }, GENERATE_THROTTLE_MS);
  }, [quantity, version]);

  const clear = useCallback(() => {
    setUuids([]);
    setError(null);
  }, []);

  const copySingle = useCallback(async (index: number): Promise<boolean> => {
    const uuid = uuidsRef.current[index];
    if (!uuid) return false;
    return copyToClipboard(uuid);
  }, []);

  const copyAll = useCallback(async (): Promise<boolean> => {
    const current = uuidsRef.current;
    if (current.length === 0) return false;
    return copyToClipboard(current.join("\n"));
  }, []);

  const exportTxt = useCallback(() => {
    const current = uuidsRef.current;
    if (current.length === 0) return;
    doExportTxt(current);
  }, []);

  const exportCsv = useCallback(() => {
    const current = uuidsRef.current;
    if (current.length === 0) return;
    doExportCsv(current);
  }, []);

  return {
    version,
    quantity,
    uuids,
    error,
    generating,
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
