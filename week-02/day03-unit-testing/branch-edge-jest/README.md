# Branch Edge Testing with Jest

This project demonstrates **testing branch conditions and edge cases** using Jest. It focuses on writing comprehensive test cases to cover different execution paths and boundary conditions.

## 🎯 Overview

Branch and edge case testing ensures that your code handles:
- Different conditional branches (if/else paths)
- Edge cases (boundary values, special inputs)
- Error conditions (invalid inputs)
- All possible user types and scenarios

## 🛠 Tech Stack

- **Jest** - Testing framework (v29.0.0)
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
branch-edge-jest/
├── package.json              # Project configuration
├── src/
│   └── discount.js          # Business logic (discount calculation)
├── tests/
│   └── discount.test.js     # Test cases
└── node_modules/            # Dependencies
```

## 📋 Available Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (re-run on file changes)
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage

# Run a specific test file
npm test discount.test.js
```

## 💼 Project Details

### Source Code: `src/discount.js`

A discount calculation function with multiple branches based on user type.

```javascript
function calculateDiscount(price, userType) {
  if (price <= 0) return 0;

  if (userType === "student") {
    return price * 0.2;      // 20% discount
  }

  if (userType === "senior") {
    return price * 0.3;      // 30% discount
  }

  return price * 0.1;        // 10% default discount
}

module.exports = { calculateDiscount };
```

**Parameters:**
- `price` (number): Product price
- `userType` (string): Type of user ("student", "senior", or any other value)

**Returns:** Discount amount (number)

### Test Cases: `tests/discount.test.js`

Comprehensive test coverage for all branches and edge cases:

```javascript
// Test 1: Student discount branch
test("student discount", () => {
  expect(calculateDiscount(100, "student")).toBe(20);
});

// Test 2: Senior discount branch
test("senior discount", () => {
  expect(calculateDiscount(100, "senior")).toBe(30);
});

// Test 3: Default discount branch (regular user)
test("default discount", () => {
  expect(calculateDiscount(100, "regular")).toBe(10);
});

// Test 4: Edge case - zero price
test("price is zero", () => {
  expect(calculateDiscount(0, "student")).toBe(0);
});

// Test 5: Edge case - negative price
test("price is negative", () => {
  expect(calculateDiscount(-100, "student")).toBe(0);
});
```

## 🧪 Testing Strategy

### Branch Coverage

| Branch | Condition | Test Case | Expected |
|--------|-----------|-----------|----------|
| **Zero/Negative Check** | `price <= 0` | `calculateDiscount(0, "student")` | `0` |
| **Student Branch** | `userType === "student"` | `calculateDiscount(100, "student")` | `20` |
| **Senior Branch** | `userType === "senior"` | `calculateDiscount(100, "senior")` | `30` |
| **Default Branch** | else (regular user) | `calculateDiscount(100, "regular")` | `10` |

### Edge Cases Covered

✅ **Boundary Values**
- Zero price: `calculateDiscount(0, "student")` → 0
- Negative price: `calculateDiscount(-100, "student")` → 0

✅ **Different User Types**
- Student user
- Senior user
- Regular/other user

✅ **Discount Calculations**
- 20% for students
- 30% for seniors
- 10% for regular users

## 📊 Code Coverage

Running `npm test -- --coverage` provides:
- **Line Coverage**: % of lines executed
- **Branch Coverage**: % of branches executed
- **Function Coverage**: % of functions executed
- **Statement Coverage**: % of statements executed

**Goal**: Achieve 100% coverage for all metrics

## 💡 Key Concepts

### 1. Branch Testing
Ensures every `if/else` path is tested at least once.

```javascript
if (condition) {
  // Branch 1 - TRUE path
} else {
  // Branch 2 - FALSE path
}
```

### 2. Edge Case Testing
Tests boundary values and special conditions.

```javascript
// Edge cases:
// - Minimum value (0)
// - Below minimum (-1)
// - Maximum expected value
// - Just below/above boundaries
```

### 3. Equivalence Partitioning
Group inputs into categories:
- Valid positive prices
- Zero price
- Negative prices
- Different user types

## 🚀 Extending the Tests

Add more test cases:

```javascript
// Test decimal prices
test("student discount with decimal price", () => {
  expect(calculateDiscount(99.99, "student")).toBeCloseTo(19.998);
});

// Test very large prices
test("senior discount with large price", () => {
  expect(calculateDiscount(10000, "senior")).toBe(3000);
});

// Test all user types systematically
const userTypes = ["student", "senior", "regular"];
userTypes.forEach(type => {
  test(`discount for ${type} user`, () => {
    const result = calculateDiscount(100, type);
    expect(result).toBeGreaterThan(0);
  });
});
```

## 🧠 Best Practices

✅ **Do:**
- Test all branches (if/else paths)
- Test edge cases (0, negative, max values)
- Test with different input types
- Use descriptive test names
- Test one thing per test case
- Keep tests independent
- Use proper assertions

❌ **Don't:**
- Skip edge case testing
- Test multiple things in one test
- Make tests dependent on each other
- Have hardcoded magic numbers without explanation
- Ignore error conditions
- Test internal implementation details

## 🔍 Running Tests

```bash
# Run all tests with summary
npm test

# Output:
# PASS  tests/discount.test.js
#   ✓ student discount (2 ms)
#   ✓ senior discount (1 ms)
#   ✓ default discount (1 ms)
#   ✓ price is zero (1 ms)
#   ✓ price is negative (1 ms)
#
# Tests: 5 passed, 5 total
```

## 📚 Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://jestjs.io/docs/tutorial-react)
- [Branch Coverage](https://en.wikipedia.org/wiki/Code_coverage#Branch_coverage)
- [Equivalence Partitioning](https://en.wikipedia.org/wiki/Equivalence_partitioning)
- [Boundary Value Testing](https://en.wikipedia.org/wiki/Boundary-value_analysis)

