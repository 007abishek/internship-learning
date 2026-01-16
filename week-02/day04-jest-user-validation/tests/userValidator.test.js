const { isValidUsername, isValidEmail } = require("../src/userValidator");

test("valid username", () => {
  expect(isValidUsername("abhishek")).toBe(true);
});

test("invalid username", () => {
  expect(isValidUsername("ab")).toBe(false);
});

test("valid email", () => {
  expect(isValidEmail("test@gmail.com")).toBe(true);
});
