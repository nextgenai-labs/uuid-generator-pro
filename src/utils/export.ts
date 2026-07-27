export function formatFilename(extension: string): string {
  const date = new Date().toISOString().split("T")[0];
  return `uuids-${date}.${extension}`;
}

function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

export function exportTxt(uuids: string[]): void {
  const content = uuids.join("\n");
  downloadFile(content, formatFilename("txt"), "text/plain");
}

export function exportCsv(uuids: string[]): void {
  const header = "UUID";
  const content = [header, ...uuids].join("\n");
  downloadFile(content, formatFilename("csv"), "text/csv");
}
