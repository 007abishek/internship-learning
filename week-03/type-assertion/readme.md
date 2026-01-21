# Type Assertion & Type Guards (TypeScript)

This project demonstrates how **Type Assertion** and **Type Guards** are used in TypeScript to safely work with unknown or union types.

---



### 1️⃣ Type Assertion (`as`)
- Tells TypeScript to treat a value as a specific type
- Used when the developer knows more than the compiler
- Does **not** add runtime safety

```ts
const value: unknown = "TypeScript";
const str = value as string;

2️⃣ Type Guards

Type guards safely narrow types at runtime.

typeof
if (typeof value === "string") {}

instanceof
if (obj instanceof ClassName) {}

Custom Type Guard
function isAdmin(user: User | Admin): user is Admin {
  return (user as Admin).isAdmin === true;
}

▶️ How to Run
npx tsc type-assertion-type-guards.ts
node type-assertion-type-guards.js