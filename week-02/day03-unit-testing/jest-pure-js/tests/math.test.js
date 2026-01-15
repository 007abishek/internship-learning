const { add, subtract } = require("../src/math");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});
