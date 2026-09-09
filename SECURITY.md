# Security

## Reporting a vulnerability

Please do **not** open a public issue for security problems. Report via a
[private security advisory](https://github.com/nextgenai-labs/uuid-generator-pro/security/advisories)
on GitHub. We aim to acknowledge reports within 3 business days.

## Current posture

- The app is a client-side UUID generator; no user data is stored or uploaded.
- No secrets are required to run, build, or test the application.
- Keep dependency updates current — run `pnpm audit` before release.