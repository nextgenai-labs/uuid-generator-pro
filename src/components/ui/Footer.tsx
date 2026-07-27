import { APP_VERSION_LABEL } from "@/config/appVersion";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-500 dark:text-gray-500">
          NextGenAI Labs &middot; {APP_VERSION_LABEL}
        </p>
      </div>
    </footer>
  );
}
