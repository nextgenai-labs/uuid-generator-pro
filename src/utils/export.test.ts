import { describe, expect, it } from "vitest";

import { formatFilename } from "./export";

describe("formatFilename", () => {
  it("uses the uuids-<date>.<ext> convention", () => {
    expect(formatFilename("txt")).toMatch(/^uuids-\d{4}-\d{2}-\d{2}\.txt$/);
  });

  it("keeps the requested extension", () => {
    expect(formatFilename("csv")).toMatch(/\.csv$/);
    expect(formatFilename("json")).toMatch(/\.json$/);
  });
});