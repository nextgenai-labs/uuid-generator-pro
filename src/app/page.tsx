import { UUIDGenerator } from "@/components/uuid/UUIDGenerator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <h1 className="text-lg font-semibold tracking-tight">UUID Generator Pro</h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Generate UUIDs</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Create UUIDs in versions 1, 4, or 7 with a single click.
            </p>
          </div>
          <UUIDGenerator />
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            NextGenAI Labs &middot; Version 0.2.0
          </p>
        </div>
      </footer>
    </div>
  );
}
