import { describe, expect, it } from "vitest";

import {
  MAX_QUANTITY,
  MIN_QUANTITY,
  generateUuid,
  generateUuids,
  type UuidVersion,
} from "./uuid";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const VERSION_MARKER: Record<UuidVersion, number> = {
  v1: 1,
  v4: 4,
  v7: 7,
};

describe("generateUuid", () => {
  it("produces a well-formed UUID for every supported version", () => {
    for (const version of ["v1", "v4", "v7"] as const) {
      const uuid = generateUuid(version);
      expect(uuid).toMatch(UUID_RE);
      expect(Number.parseInt(uuid.charAt(14), 16)).toBe(VERSION_MARKER[version]);
    }
  });

  it("generates unique values", () => {
    const seen = new Set(Array.from({ length: 100 }, () => generateUuid("v4")));
    expect(seen.size).toBe(100);
  });
});

describe("generateUuids", () => {
  it("returns the requested number of uuids", () => {
    expect(generateUuids("v4", 5)).toHaveLength(5);
  });

  it("respects the configured quantity bounds", () => {
    expect(MIN_QUANTITY).toBe(1);
    expect(MAX_QUANTITY).toBe(100);
    expect(generateUuids("v4", MAX_QUANTITY)).toHaveLength(MAX_QUANTITY);
    expect(generateUuids("v4", MIN_QUANTITY)).toHaveLength(MIN_QUANTITY);
  });
});