Pure JavaScript Unit Testing with Vitest

This project demonstrates unit testing of pure JavaScript functions using Vitest.
It focuses on testing core logic without React, browser APIs, or DOM dependencies.

🎯 Goal

Learn unit testing basics

Understand ES module exports & imports

Practice testing pure JavaScript functions

Build a strong foundation before React testing

🛠 Tech Stack

JavaScript (ES Modules)

Vitest

Node.js



📄 Code Example
src/utils/math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

src/utils/math.test.js
import { test, expect } from "vitest";
import { add, subtract } from "./math";

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

🚀 How to Run Tests
1️⃣ Install dependencies
npm install

2️⃣ Run tests
npm test


or

npx vitest

✅ Expected Output
✓ src/utils/math.test.js (2 tests)


This confirms that pure JavaScript unit tests are working correctly.
