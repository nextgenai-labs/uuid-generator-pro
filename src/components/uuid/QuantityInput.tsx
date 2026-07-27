"use client";

import { memo, useCallback } from "react";
import { MIN_QUANTITY, MAX_QUANTITY } from "@/lib/uuid";

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  error: string | null;
}

export const QuantityInput = memo(function QuantityInput({
  value,
  onChange,
  error,
}: QuantityInputProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      if (raw === "") return;
      const parsed = parseInt(raw, 10);
      if (!isNaN(parsed)) {
        const cleaned = String(parsed);
        if (e.target.value !== cleaned) {
          e.target.value = cleaned;
        }
        onChange(parsed);
      }
    },
    [onChange],
  );

  return (
    <div>
      <label
        htmlFor="uuid-quantity"
        className="mb-1.5 block text-sm font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        Quantity
      </label>
      <input
        id="uuid-quantity"
        type="number"
        min={MIN_QUANTITY}
        max={MAX_QUANTITY}
        value={value}
        onChange={handleChange}
        aria-describedby={error ? "quantity-error" : undefined}
        aria-invalid={error ? true : undefined}
        className="w-24 rounded-lg border px-3 py-2.5 text-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"
        style={{
          backgroundColor: "var(--input-bg)",
          borderColor: error ? "var(--input-error-border)" : "var(--input-border)",
          color: "var(--input-text)",
          "--tw-ring-color": error ? "var(--input-error-ring)" : "var(--input-focus-ring)",
          "--tw-ring-offset-color": "var(--ring-offset)",
          outline: "none",
        } as React.CSSProperties}
      />
      {error && (
        <p
          id="quantity-error"
          className="mt-1.5 text-xs"
          style={{ color: "var(--input-error-text)" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});
