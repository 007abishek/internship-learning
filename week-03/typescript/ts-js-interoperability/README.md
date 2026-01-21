# TypeScript – JavaScript Interoperability

This project demonstrates **how TypeScript works with existing JavaScript code** using:
- JavaScript files (`.js`)
- Declaration files (`.d.ts`)
- TypeScript configuration (`tsconfig.json`)

It focuses on **real-world scenarios**, common mistakes, and how TypeScript libraries are actually used in production.

---

## 📌 Objective

- How TypeScript consumes JavaScript code
- Why declaration files (`.d.ts`) are required
- The difference between compile-time and runtime
- How incorrect typings can cause runtime bugs
- How real NPM libraries support TypeScript

---

## 📁 Project Structure

```text
ts-js-interoperability/
│
├── src/
│   ├── app.ts
│   ├── utils.js
│   ├── utils.d.ts
│
├── dist/
│   ├── app.js
│   ├── utils.js
│
├── tsconfig.json
└── package.json

TypeScript Configuration

tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "allowJs": true,
    "outDir": "dist"
  },
  "include": ["src"]
}

Why these options matter
Option	Purpose
allowJs	Allows importing JavaScript files
strict	Enables strong type checking
outDir	Outputs compiled JS to dist/
module: CommonJS	Compatible with Node.js