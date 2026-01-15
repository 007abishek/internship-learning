import { describe, test, expect } from "vitest";
import { add, subtract } from "./math";

describe("Math Utils", () => {
  test("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("returns 0 when a < b", () => {
    expect(subtract(2, 5)).toBe(0);
  });
});
