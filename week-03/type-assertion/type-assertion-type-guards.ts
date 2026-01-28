export {}; // 👈 makes this file a module (avoids redeclare issues)

/* =====================================================
    TYPE ASSERTION using `as`
===================================================== */

// Type assertion tells TypeScript: "Trust me, I know the type"

let value: unknown = "TypeScript";

// Without assertion → error
// value.toUpperCase();

// With assertion
const strValue = value as string;
console.log(strValue.toUpperCase());

/*  Important:
   Type assertion does NOT change runtime value.
   It only helps the compiler.
*/

//  DANGEROUS assertion (uncomment to see runtime issue)
// const numValue = value as number;
// console.log(numValue.toFixed(2)); // Runtime error

/* =====================================================
   2️ TYPE ASSERTION WITH DOM ELEMENTS
===================================================== */

// Common real-world use case
const input = document.createElement("input");

// Without assertion
// input.value;

// With assertion
const inputElement = input as HTMLInputElement;
inputElement.value = "Hello";

/* =====================================================
   3️ TYPE GUARD using `typeof`
===================================================== */

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string
  } else {
    console.log(value.toFixed(2)); // number
  }
}

printValue("typescript");
printValue(100);

/* =====================================================
   4️ TYPE GUARD using `instanceof`
===================================================== */

class Car {
  drive() {
    console.log("Driving car");
  }
}

class Bike {
  ride() {
    console.log("Riding bike");
  }
}

function useVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

useVehicle(new Car());
useVehicle(new Bike());

/* =====================================================
   5️ CUSTOM TYPE GUARD (IMPORTANT)
===================================================== */

type User = {
  name: string;
};

type Admin = {
  name: string;
  isAdmin: true;
};

// Custom type guard function
function isAdmin(user: User | Admin): user is Admin {
  return (user as Admin).isAdmin === true;
}

function checkUser(user: User | Admin) {
  if (isAdmin(user)) {
    console.log("Admin user:", user.name);
    // user.isAdmin → accessible safely
  } else {
    console.log("Normal user:", user.name);
  }
}

checkUser({ name: "Abhishek", isAdmin: true });
checkUser({ name: "Rahul" });

/* =====================================================
   6️ TYPE ASSERTION vs TYPE GUARD (Comparison)
===================================================== */

function unsafeExample(value: unknown) {
  const data = value as string;
  console.log(data.toUpperCase()); // ❌ unsafe
}

function safeExample(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ safe
  }
}

// BREAK (uncomment)
// unsafeExample(123); // runtime crash

safeExample("safe");
safeExample(123);

/* =====================================================
   7️ REAL-WORLD INTERVIEW SCENARIO
===================================================== */

type ApiResponse =
  | { status: "success"; data: string }
  | { status: "error"; error: string };

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log(res.data.toUpperCase());
  } else {
    console.log(res.error);
  }
}

handleResponse({ status: "success", data: "done" });
handleResponse({ status: "error", error: "failed" });
