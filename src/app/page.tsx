import { UUIDGenerator } from "@/components/uuid/UUIDGenerator";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "var(--page-bg)" }}>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-8">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: "var(--page-text)" }}>
              Generate UUIDs
            </h2>
            <p className="mt-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
              Create UUIDs in versions 1, 4, or 7 with a single click.
            </p>
          </div>
          <UUIDGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
}
