# Frequently Asked Questions

## General

### What is UUID Generator Pro?

UUID Generator Pro is a web-based tool for generating UUIDs (Universally Unique Identifiers) in versions 1, 4, and 7. It supports bulk generation, clipboard copy, and file export.

### Who is this tool for?

Developers, QA engineers, system administrators, and anyone who needs to generate UUIDs for testing, database keys, API development, or distributed systems.

### Is this a desktop application?

No. UUID Generator Pro is a web application that runs in the browser. It is built with Next.js and can be deployed to any hosting platform that supports Node.js.

### Do I need an internet connection?

No. Once deployed or running locally, the application works entirely in the browser — no external API calls are made for UUID generation.

## UUID Versions

### What is the difference between UUID v1, v4, and v7?

- **v1** — Time-based UUID using the current timestamp and MAC address. Produces sortable but predictable IDs.
- **v4** — Random UUID. The most common variant. Suitable for most use cases.
- **v7** — Unix Epoch timestamp with random suffix (RFC 9562). Time-ordered like v1 but without exposing the MAC address.

### Which version should I use?

For most applications, **UUID v4** is the right choice. Use **v7** if you need time-ordered UUIDs (e.g., for database indexing). Use **v1** only if you require MAC-address-based identification.

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

Chrome, Firefox, Safari, and Edge — latest versions.

### Does the application collect data?

No. UUIDs are generated entirely on your device. No data is sent to any server.

### Why is my clipboard not working?

The application first attempts the modern Clipboard API. If that fails, it falls back to `document.execCommand("copy")`. Clipboard operations may be restricted on non-HTTPS pages. Run the application over HTTPS or localhost.

### Can I deploy this to Vercel?

Yes. See [docs/marketplace/demo.md](./docs/marketplace/demo.md) for deployment instructions.

## Licensing

### Can I use this in commercial projects?

Yes. The commercial license included with your Codester purchase permits use in commercial projects.

### Can I redistribute the source code?

No. Redistribution of the source code is not permitted under the commercial license.

### Is there a free version?

This is a paid product available on Codester. No free version is offered.
