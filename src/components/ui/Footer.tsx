import { APP_VERSION_LABEL } from "@/config/appVersion";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--footer-bg)",
        borderTop: "1px solid var(--footer-border)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs" style={{ color: "var(--footer-text)" }}>
          NextGenAI Labs &middot; {APP_VERSION_LABEL}
        </p>
      </div>
    </footer>
  );
}
