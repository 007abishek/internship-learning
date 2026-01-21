# Enums and Union Types (TypeScript)


It focuses on **type safety, readability, and real-world usage patterns** commonly used in applications and interviews.

---

## 📌 Objective
- What enums are and when to use them
- How union types work
- How TypeScript enforces compile-time safety
- Differences between enums and union types
- Real-world usage scenarios (status, roles, themes, API responses)

---

## 📁 Project Structure

```text
enums-unions/
│
├── enums-unions-practice.ts
└── README.md

🔢 Enums in TypeScript
What is an Enum?

An enum is a way to define a fixed set of named constants.
It improves readability and avoids hard-coded magic values.
Example: Numeric Enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}


Automatically assigned numeric values

Useful for internal logic

Example: String Enum (Recommended)
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}


✅ More readable
✅ Safer during debugging
✅ Preferred in real projects

When to Use Enums

Roles (Admin, User, Guest)

Status codes

Fixed configuration values

When values are unlikely to change

🔀 Union Types in TypeScript
What is a Union Type?

A union type allows a variable to be one of multiple types.

let id: number | string;


This provides flexibility while maintaining type safety.

Union Types with Functions (Type Narrowing)
function printId(value: number | string) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}


TypeScript narrows the type safely based on runtime checks.

Union Types with Literal Values
type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";


❌ Invalid values are caught at compile time
✔ Very common in React state management

⚖️ Enums vs Union Types
Feature	Enums	Union Types
Runtime presence	Yes	No
Compile-time only	❌	✅
Debug readability	Medium	High
Performance	Slight overhead	Lightweight
React-friendly	⚠️	✅
Recommendation

👉 Prefer union types when possible
👉 Use enums when you need runtime constants

🔗 Combining Enums and Union Types
enum HttpStatus {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

type ApiResult = "success" | "error";


This pattern is common in API handling.

▶️ How to Run the Code
Step 1: Compile TypeScript
npx tsc enums-unions-practice.ts

Step 2: Run JavaScript
node enums-unions-practice.js