"use client";

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  error: string | null;
}

export function QuantityInput({ value, onChange, error }: QuantityInputProps) {
  return (
    <div>
      <label htmlFor="uuid-quantity" className="mb-2 block text-sm font-medium">
        Quantity
      </label>
      <input
        id="uuid-quantity"
        type="number"
        min={1}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-describedby={error ? "quantity-error" : undefined}
        aria-invalid={error ? true : undefined}
        className={`w-24 rounded-md border px-3 py-2 text-sm transition-colors
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:border-blue-500 dark:border-gray-700"
          }
          bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100`}
      />
      {error && (
        <p id="quantity-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
