export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">UUID Generator Pro</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          A fast, modern, and customizable UUID Generator built with Next.js and TypeScript.
        </p>
        <footer className="mt-12 text-sm text-neutral-500 dark:text-neutral-500">
          <p>Version 0.1.0</p>
          <p className="mt-1">NextGenAI Labs</p>
        </footer>
      </section>
    </main>
  );
}
