Jest – Pure JavaScript Unit Testing

This project demonstrates unit testing pure JavaScript functions using Jest.
It focuses on testing logic without frameworks or browsers.

📁 Folder Structure

jest-pure-js
│
├─ src
│  └─ math.js
│
├─ tests
│  └─ math.test.js
│
├─ package.json
└─ README.md

What is Tested

Addition of two numbers

Subtraction of two numbers

These are pure functions (same input → same output).

🧪 Example Function

The math.js file contains simple arithmetic logic used for learning unit testing.

▶️ Run Tests
npm install
npm test

✅ Expected Output
PASS  tests/math.test.js
✓ adds two numbers
✓ subtracts two numbers