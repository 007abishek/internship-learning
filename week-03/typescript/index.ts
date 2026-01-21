export {}; // 👈 REQUIRED: makes this file a module (prevents global redeclaration)

/* =====================================================
   1️⃣ GENERIC FUNCTION
===================================================== */

function identity<T>(value: T): T {
  return value;
}

const text = identity("TypeScript");
const numberValue = identity(42);

// Hover 👇
// text → string
// numberValue → number

text.toUpperCase(); // ✅ OK

// ❌ BREAK (uncomment)
// numberValue.toUpperCase(); // Compile-time error

/* =====================================================
   2️⃣ GENERIC CLASS
===================================================== */

class Storage<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberStore = new Storage<number>();
numberStore.add(10);

// ❌ BREAK (uncomment)
// numberStore.add("hello"); // Compile-time error

/* =====================================================
   3️⃣ MULTIPLE GENERICS
===================================================== */

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

const user = merge({ name: "Abhishek" }, { age: 22 });

// Hover 👇
// user → { name: string; age: number }

// ❌ BREAK (uncomment)
// user.email; // Property does not exist

/* =====================================================
   4️⃣ EMPTY ARRAY EDGE CASE
===================================================== */

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]);
const emptyResult = getFirst([]);

// Hover 👇
// firstNum → number | undefined
// emptyResult → undefined

// ❌ BREAK (uncomment)
// firstNum.toUpperCase(); // Error: possibly undefined

/* =====================================================
   5️⃣ CONSTRAINTS WITH extends
===================================================== */

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("Hello");
getLength([1, 2, 3]);

// ❌ BREAK (uncomment)
// getLength(100); // Error: number has no length

/* =====================================================
   6️⃣ keyof SAFETY
===================================================== */

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "Abhishek",
  age: 22
};

getProperty(person, "name");

// ❌ BREAK (uncomment)
// getProperty(person, "email"); // Compile-time error

/* =====================================================
   7️⃣ COMPILE-TIME vs RUNTIME SAFETY
===================================================== */

// ❌ UNSAFE (any → runtime error possible)
function unsafeIdentity(value: any) {
  return value;
}

const unsafe = unsafeIdentity(123);
// unsafe.toUpperCase(); // 💥 Runtime error if uncommented

// ✅ SAFE (generic → compile-time protection)
function safeIdentity<T>(value: T): T {
  return value;
}

const safe = safeIdentity(123);
// safe.toUpperCase(); // ❌ Compile-time error


//Generic interfaces

interface ApiResponse<T>{
    status: number;
    data: T;
}

const userResponse: ApiResponse<string>={
    status: 200,
    data: "Success"
}