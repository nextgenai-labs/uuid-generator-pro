import { v1, v4, v7 } from "uuid";

export type UuidVersion = "v1" | "v4" | "v7";

export const UUID_VERSION_LABELS: Record<UuidVersion, string> = {
  v1: "Version 1 (Time-Based)",
  v4: "Version 4 (Random)",
  v7: "Version 7 (Unix Epoch + Random)",
};

export function generateUuid(version: UuidVersion): string {
  switch (version) {
    case "v1":
      return v1();
    case "v4":
      return v4();
    case "v7":
      return v7();
  }
}

export function generateUuids(version: UuidVersion, count: number): string[] {
  const uuids: string[] = [];
  for (let i = 0; i < count; i++) {
    uuids.push(generateUuid(version));
  }
  return uuids;
}
