export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center sm:py-20">
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
        style={{
          backgroundColor: "var(--btn-secondary-hover-bg)",
          color: "var(--text-muted)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z"
            clipRule="evenodd"
          />
          <path d="M12.971 1.816A5.25 5.25 0 0114.25 5.25v1.875c0 .207.168.375.375.375h1.875a5.25 5.25 0 013.434 1.279 9.708 9.708 0 00-6.963-6.963z" />
        </svg>
      </div>
      <h3 className="text-base font-semibold" style={{ color: "var(--page-text)" }}>
        No UUIDs Generated
      </h3>
      <p className="mt-1.5 max-w-xs text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        Select a UUID version, choose a quantity, then click Generate.
      </p>
    </div>
  );
}
