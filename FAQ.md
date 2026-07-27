# Frequently Asked Questions

## General

### What is UUID Generator Pro?

UUID Generator Pro is a web-based tool for generating UUIDs (Universally Unique Identifiers) in versions 1, 4, and 7. It supports bulk generation, clipboard copy, and file export — all running entirely in the browser.

### Who is this tool for?

Developers, QA engineers, system administrators, database architects, and anyone who needs to generate UUIDs for testing, database keys, API development, or distributed systems.

### Is this a desktop application?

No. UUID Generator Pro is a web application built with Next.js that runs in the browser. It can be deployed to any hosting platform that supports Node.js.

### Do I need an internet connection?

No. Once deployed or running locally, the application works entirely in the browser. No external API calls are made for UUID generation.

## Purchase & Licensing

### How do I install UUID Generator Pro?

Extract the ZIP downloaded from Codester, run `pnpm install`, then `pnpm dev` for development or `pnpm build && pnpm start` for production. See [INSTALL.md](./INSTALL.md) for details.

### Can I use this on multiple domains?

The standard license covers a single domain. Extended licenses for multi-domain or SaaS use may be available — contact NextGenAI Labs through Codester.

### Can I modify the source code?

Yes. You are permitted to modify the code for your own use under the terms of the commercial license.

### Do I need attribution?

No attribution is required for commercial use.

### How do I get updates?

Updates are published on Codester. You can download the latest version from your Codester purchases page.

## UUID Versions

### What is the difference between UUID v1, v4, and v7?

- **v1** — Time-based UUID using the current timestamp and MAC address. Sortable but may expose the MAC address.
- **v4** — Random UUID. The most common variant. Suitable for most use cases where ordering is not required.
- **v7** — Unix Epoch timestamp with random suffix (RFC 9562). Time-ordered like v1 but without exposing the MAC address.

### Which version should I use?

For most applications, **UUID v4** is the right choice. Use **v7** if you need time-ordered UUIDs (e.g., for database index performance). Use **v1** only if you require MAC-address-based identification.

### Can I generate custom UUID formats?

No. This tool generates standard UUIDs per RFC 9562. Custom formats are not supported.

## Usage

### How many UUIDs can I generate at once?

Between 1 and 100 UUIDs per generation.

### Can I copy UUIDs to the clipboard?

Yes. Click the copy button on any individual UUID card, or click "Copy All" to copy every generated UUID at once (newline-separated).

### What export formats are supported?

TXT (one UUID per line) and CSV (header row plus one UUID per line). Files are named using the pattern `uuids-YYYY-MM-DD.{ext}`.

### Does the application work offline?

UUID Generator Pro is a client-side application. Once the page is loaded, UUID generation, clipboard, and export work without an internet connection.

## Technical

### What browsers are supported?

Chrome, Firefox, Safari, and Edge — latest 2 major versions.

### Does the application collect data?

No. UUIDs are generated entirely on your device. No data is sent to any server.

### Why is my clipboard not working?

The application first attempts the modern Clipboard API. If that fails, it falls back to `document.execCommand("copy")`. Clipboard operations may be restricted on non-HTTPS pages. Run the application over HTTPS or localhost.

### Can I deploy to Vercel?

Yes. See [docs/marketplace/demo.md](./docs/marketplace/demo.md) for step-by-step deployment instructions.

### What are the minimum system requirements?

Node.js 20.x or later and pnpm 9.x or later. No database or external services required.

## Support

### What support is included?

Installation assistance, bug verification, and usage guidance. Response within 48 hours on business days.

### What is not covered by support?

Custom development, third-party integrations, and code modifications beyond the original product.

### How do I report a bug?

Open an issue on the [GitHub repository](https://github.com/nextgenai-labs/uuid-generator-pro/issues) or contact support through your Codester purchase page.

### Is there a demo available?

A live demo can be deployed to Vercel. See [demo.md](./docs/marketplace/demo.md) for instructions.
