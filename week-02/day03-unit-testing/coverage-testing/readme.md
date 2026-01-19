# Coverage Testing with Vitest

This project demonstrates **test coverage analysis** using Vitest. It focuses on measuring how much of your code is tested and ensuring comprehensive test coverage.

## 🎯 Overview

Coverage Testing teaches:
- Understanding code coverage metrics
- Testing all code branches
- Measuring test effectiveness
- Using Vitest for fast testing
- Coverage-driven development

## 🛠 Tech Stack

- **Vitest** - Modern testing framework (v4.0.17)
- **@vitest/coverage-v8** - Coverage reporter (v4.0.17)
- **JavaScript (ES Modules)** - Source code language
- **Node.js** - Runtime environment

## 📦 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **Generate coverage report:**
   ```bash
   npm run coverage
   ```

## 📁 Project Structure

```
coverage-testing/
├── package.json                 # Project configuration
├── src/
│   └── utils/
│       ├── math.js             # Math utility functions
│       └── math.test.js        # Test cases with coverage
├── coverage/                    # Generated coverage reports
└── node_modules/               # Dependencies
```

## 📋 Available Commands

```bash
# Run unit tests
npm test

# Run tests with coverage report
npm run coverage

# Run tests in watch mode
npm test -- --watch

# Run with specific coverage threshold
npm test -- --coverage.lines=80
```

## 💼 Project Details

### Source Code: `src/utils/math.js`

Math utility functions demonstrating coverage testing.

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  if (a < b) {
    return 0;
  }
  return a - b;
}
```

**Functions:**
- `add(a, b)` - Returns the sum of two numbers
- `subtract(a, b)` - Returns difference, or 0 if a < b

### Test Cases: `src/utils/math.test.js`

Comprehensive test cases covering all branches:

```javascript
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
```

## 📊 Understanding Code Coverage

### Coverage Metrics

| Metric | Definition | Goal |
|--------|-----------|------|
| **Statements** | Percentage of statements executed | >80% |
| **Branches** | Percentage of conditional branches executed | >75% |
| **Functions** | Percentage of functions called | >80% |
| **Lines** | Percentage of lines executed | >80% |

### Example Coverage Report

```
File              | % Stmts | % Branch | % Funcs | % Lines
----------------------------------------------------------
All files         | 100     | 100      | 100     | 100
src/utils/        | 100     | 100      | 100     | 100
 math.js          | 100     | 100      | 100     | 100
```

## 🎯 Coverage Types

### 1. Statement Coverage
Ensures every statement is executed at least once.

```javascript
// Line must be executed
console.log("This is a statement");
return result;  // Must be executed
```

### 2. Branch Coverage
Ensures both true and false paths of conditionals are tested.

```javascript
if (a < b) {
  // Branch 1: TRUE path - must be tested
  return 0;
} else {
  // Branch 2: FALSE path - must be tested
  return a - b;
}
```

### 3. Function Coverage
Ensures all functions are called at least once.

```javascript
// Function must be called in tests
export function add(a, b) {
  return a + b;
}
```

### 4. Line Coverage
Ensures every line of code is executed.

## 🚀 Extending the Coverage

Add more utility functions:

```javascript
// In src/utils/math.js
export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

export function absolute(a) {
  if (a < 0) return -a;
  return a;
}
```

### Add comprehensive tests:

```javascript
// In src/utils/math.test.js
test("multiplies numbers", () => {
  expect(multiply(4, 5)).toBe(20);
  expect(multiply(-2, 3)).toBe(-6);
});

test("divides numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws on division by zero", () => {
  expect(() => divide(10, 0)).toThrow();
});

test("returns absolute value", () => {
  expect(absolute(5)).toBe(5);
  expect(absolute(-5)).toBe(5);
  expect(absolute(0)).toBe(0);
});
```

## 🧠 Best Practices

✅ **Do:**
- Aim for high coverage (80%+)
- Test all branches and edge cases
- Check coverage reports regularly
- Use coverage as a guide, not a goal
- Test error conditions
- Test boundary values
- Keep functions focused

❌ **Don't:**
- Aim for 100% coverage everywhere (diminishing returns)
- Write tests just to increase coverage
- Skip difficult-to-test code
- Ignore uncovered branches
- Test implementation details
- Create untestable code

## 📈 Coverage-Driven Development

### Step 1: Write Test
```javascript
test("adds positive numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

### Step 2: Write Minimal Code
```javascript
export function add(a, b) {
  return a + b;
}
```

### Step 3: Measure Coverage
```bash
npm run coverage
```

### Step 4: Add Tests for Uncovered Code
```javascript
test("adds negative numbers", () => {
  expect(add(-2, 3)).toBe(1);
});
```

## 🔍 Analyzing Coverage

```bash
npm run coverage

# Generates detailed report showing:
# - Which lines are covered
# - Which branches are untested
# - Which functions are not called
```

### Coverage HTML Report
```bash
# Opens coverage report in browser
npm run coverage

# Check coverage/ directory for HTML files
```

## 💡 Coverage Thresholds

Set minimum coverage requirements:

```javascript
// In vitest config
export default {
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      lines: 80,      // 80% of lines must be covered
      functions: 80,  // 80% of functions must be covered
      branches: 75,   // 75% of branches must be covered
      statements: 80  // 80% of statements must be covered
    }
  }
}
```

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [Code Coverage](https://en.wikipedia.org/wiki/Code_coverage)
- [Coverage Best Practices](https://istanbul.js.org/)
- [V8 Coverage](https://github.com/istanbuljs/v8)

