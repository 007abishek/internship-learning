import { test, expect } from "vitest";
import { calculateDiscount } from "./discount";

/* Branch tests */

test("student discount", () => {
  expect(calculateDiscount(100, "student")).toBe(20);
});

test("senior discount", () => {
  expect(calculateDiscount(100, "senior")).toBe(30);
});

test("default discount", () => {
  expect(calculateDiscount(100, "regular")).toBe(10);
});

/* Edge-case tests */

test("price is zero", () => {
  expect(calculateDiscount(0, "student")).toBe(0);
});

test("price is negative", () => {
  expect(calculateDiscount(-100, "student")).toBe(0);
});
