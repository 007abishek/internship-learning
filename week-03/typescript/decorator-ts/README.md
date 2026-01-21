# Decorators Practice (TypeScript)

This project demonstrates **TypeScript decorators** through hands-on examples.
It covers **class decorators, method decorators, property decorators, parameter decorators**, and a **real-world validation use case**.

The project is to understand:
- Why decorators exist
- How they work internally
- Common mistakes and edge cases
- The difference between runtime behavior and TypeScript typing

---

## 📌 What Are Decorators?

Decorators are **functions that run at class definition time**.
They allow you to **add or modify behavior** without changing the original code.

Decorators are commonly used for:
- Logging
- Validation
- Authentication / Authorization
- Dependency Injection

They are heavily used in frameworks like **Angular** and **NestJS**.

---

## 📁 Project Structure

```text
decorator-ts/
│
├── decorators-practice.ts
├── decorators-practice.js
├── tsconfig.json
└── package.json
⚙️ TypeScript Configuration

Decorators require legacy decorator support.

tsconfig.json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "strict": true
  }
}

🧪 Decorators Implemented
1️⃣ Class Decorator – Logging
@Logger
class User {}


Runs when the class is defined

Logs class creation

Demonstrates definition-time execution

2️⃣ Class Decorator – Modifying Class
@AddRole("admin")
class AdminUser {
  role!: string;
}


Adds a property at runtime

Property must be declared explicitly for TypeScript

Shows runtime vs compile-time difference

3️⃣ Method Decorator – Logging Method Calls
@LogMethod
add(a: number, b: number) {}


Wraps the original method

Logs arguments before execution

Preserves original logic

4️⃣ Property Decorator – Readonly Property
@Readonly
apiUrl = "https://api.example.com";


Allows initial assignment

Prevents reassignment

Demonstrates correct property decorator pattern

5️⃣ Parameter Decorator – Logging Parameters
save(@LogParam data: string) {}


Logs parameter index and method name

Used for validation and metadata tracking

6️⃣ Method Decorator – Validation (Real-World Example)
@Validate
deposit(amount: number) {}


Prevents invalid input

Throws runtime error for invalid values

Common in banking, forms, and APIs

▶️ How to Run the Project
Step 1: Go to project folder
cd decorator-ts

Step 2: Compile TypeScript
npx tsc

Step 3: Run JavaScript
node decorators-practice.js