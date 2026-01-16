# Jest Pure JavaScript Testing

This project demonstrates **unit testing pure JavaScript functions** using Jest. It covers fundamental testing concepts with simple, focused test cases.

## 🎯 Overview

Jest Pure JS teaches:
- Writing unit tests for pure JavaScript functions
- Using Jest matchers and assertions
- Testing isolated functions without dependencies
- Simple test structure and organization

## 🛠 Tech Stack

- **Jest** - Testing framework (v30.2.0)
- **JavaScript (ES6+)** - Source code language
- **Node.js** - Runtime environment
- **CommonJS** - Module system

## 📦 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

## 📁 Project Structure

```
jest-pure-js/
├── package.json              # Project configuration
├── src/
│   └── math.js              # Pure JavaScript math functions
├── tests/
│   └── math.test.js         # Test cases for math functions
└── node_modules/            # Dependencies
```

## 📋 Available Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on changes)
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage

# Run a specific test file
npm test math.test.js
```

## 💼 Project Details

### Source Code: `src/math.js`

Pure JavaScript utility functions for basic math operations.

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

**Functions:**
- `add(a, b)` - Returns the sum of two numbers
- `subtract(a, b)` - Returns the difference of two numbers

### Test Cases: `tests/math.test.js`

Simple test cases for each function:

```javascript
const { add, subtract } = require("../src/math");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});
```

## 🧪 Testing Concepts

### 1. Unit Testing
Testing individual functions in isolation.

```javascript
// Testing a single unit
test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

### 2. Test Structure (Arrange-Act-Assert)
Jest tests follow a simple pattern:

```javascript
test("description", () => {
  // Arrange: Set up test data
  const a = 2;
  const b = 3;
  
  // Act: Call the function
  const result = add(a, b);
  
  // Assert: Check the result
  expect(result).toBe(5);
});
```

### 3. Common Matchers

```javascript
// Equality checks
expect(value).toBe(5);              // Exact equality (===)
expect(value).toEqual({ a: 1 });    // Deep equality

// Numeric comparisons
expect(value).toBeGreaterThan(5);
expect(value).toBeLessThan(10);
expect(value).toBeCloseTo(5.1);

// Type checks
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();
expect(value).toBeTruthy();
expect(value).toBeFalsy();

// String matching
expect(text).toMatch(/pattern/);
expect(text).toContain('substring');
```

## 🚀 Extending the Functions

Add more math operations:

```javascript
// In src/math.js
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
```

### Add corresponding tests:

```javascript
// In tests/math.test.js
test("multiplies two numbers", () => {
  expect(multiply(4, 5)).toBe(20);
});

test("divides two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws error on division by zero", () => {
  expect(() => divide(10, 0)).toThrow();
});
```

## 🧠 Best Practices

✅ **Do:**
- Test one thing per test
- Use descriptive test names
- Keep tests simple and focused
- Test edge cases and error conditions
- Use proper assertions
- Keep functions pure (no side effects)

❌ **Don't:**
- Test multiple things in one test
- Create dependencies between tests
- Use vague test names
- Skip error condition testing
- Make functions with side effects

## 📊 Code Coverage

```bash
npm test -- --coverage
```

Coverage metrics:
- **Statements**: % of all statements executed
- **Branches**: % of all conditional branches executed
- **Functions**: % of all functions called
- **Lines**: % of all lines executed

## 🔍 Running Tests

```bash
npm test

# Output:
# PASS  tests/math.test.js
#   ✓ adds two numbers (2 ms)
#   ✓ subtracts two numbers (1 ms)
#
# Tests: 2 passed, 2 total
```

## 📚 Resources

- [Jest Documentation](https://jestjs.io/)
- [Jest Matchers](https://jestjs.io/docs/expect)