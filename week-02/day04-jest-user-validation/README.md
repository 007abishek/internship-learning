# Jest User Validation

A simple Jest testing project that validates user credentials (username and email).

## Project Overview

This project demonstrates unit testing using Jest for user validation functions. It includes validation logic for usernames and emails with corresponding test cases.

## Project Structure

```
day04-jest-user-validation/
├── src/
│   └── userValidator.js       # Validation functions
├── tests/
│   └── userValidator.test.js   # Test cases
├── package.json                # Project configuration
├── package-lock.json
└── README.md
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd day04-jest-user-validation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

To run all tests:
```bash
npm test
```

## Validation Functions

### `isValidUsername(username)`
- Validates that username is a string
- Validates that username length is at least 4 characters
- Returns `true` if valid, `false` otherwise

**Example:**
```javascript
isValidUsername("abhishek")  // true
isValidUsername("ab")        // false
```

### `isValidEmail(email)`
- Validates that email contains "@" symbol
- Returns `true` if valid, `false` otherwise

**Example:**
```javascript
isValidEmail("test@gmail.com")  // true
isValidEmail("testgmail.com")   // false
```

## Test Cases

The test suite includes:
- ✅ Valid username validation
- ✅ Invalid username validation (too short)
- ✅ Valid email validation

## Dependencies

- **jest** (v30.2.0) - Testing framework
