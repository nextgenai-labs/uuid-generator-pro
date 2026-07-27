"use client";

import { memo } from "react";
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
  return (
    <div>
      <label
        htmlFor="uuid-quantity"
        className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Quantity
      </label>
      <input
        id="uuid-quantity"
        type="number"
        min={MIN_QUANTITY}
        max={MAX_QUANTITY}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-describedby={error ? "quantity-error" : undefined}
        aria-invalid={error ? true : undefined}
        className={`w-24 rounded-lg border px-3 py-2.5 text-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-400 dark:border-red-500"
            : "border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
        } bg-white dark:bg-gray-800 dark:text-gray-100`}
      />
      {error && (
        <p
          id="quantity-error"
          className="mt-1.5 text-xs text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});
