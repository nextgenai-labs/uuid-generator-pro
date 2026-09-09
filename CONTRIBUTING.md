# Contributing

Thanks for your interest in contributing to UUID Generator Pro.

## Setup

Requires Node.js >= 18 and [pnpm](https://pnpm.io/).

```bash
git clone https://github.com/nextgenai-labs/uuid-generator-pro.git
cd uuid-generator-pro
pnpm install
```

## Quality gates

```bash
pnpm lint
pnpm test
pnpm build
```

All three run automatically in CI on every push/PR.

## Process

1. Branch from `main`: `feat/my-feature` or `fix/my-bug`.
2. Add tests for new behavior in `src/` (Vitest).
3. Run the quality gates above.
4. Commit with a Conventional Commit message and open a PR.

## PR checklist

- [ ] `pnpm lint` passes
- [ ] `pnpm test` passes
- [ ] `pnpm build` passes
- [ ] Tests added/updated
- [ ] README updated if behavior changed