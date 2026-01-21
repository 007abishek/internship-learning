export {}; // 👈 makes file a module (avoids redeclare issues)

/* =====================================================
   1️⃣ ENUMS (Numeric & String)
===================================================== */

// Numeric enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;

// ❌ BREAK (uncomment)
// move = "Up"; // Error: not assignable

// String enum (recommended)
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access");
  } else {
    console.log("Limited access");
  }
}

checkAccess(UserRole.Admin);

/* =====================================================
   2️⃣ UNION TYPES (Basic)
===================================================== */

let id: number | string;

id = 101;
id = "A101";

// ❌ BREAK (uncomment)
// id = true; // Error

/* =====================================================
   3️⃣ UNION TYPES WITH FUNCTIONS (Type Narrowing)
===================================================== */

function printId(value: number | string) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printId(100);
printId("typescript");

/* =====================================================
   4️⃣ UNION WITH LITERAL TYPES (Very Common)
===================================================== */

type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";

// ❌ BREAK (uncomment)
// currentStatus = "done"; // Error

/* =====================================================
   5️⃣ ENUM vs UNION (Comparison in Code)
===================================================== */

// Enum version
enum ThemeEnum {
  Light = "light",
  Dark = "dark"
}

let theme1: ThemeEnum = ThemeEnum.Dark;

// Union version (preferred)
type ThemeUnion = "light" | "dark";

let theme2: ThemeUnion = "light";

// ❌ BREAK (uncomment)
// theme2 = "blue"; // Error

/* =====================================================
   6️⃣ COMBINING ENUMS + UNION TYPES
===================================================== */

enum HttpStatus {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

type ApiResult = "success" | "error";

function handleResponse(status: HttpStatus, result: ApiResult) {
  console.log("Status:", status, "Result:", result);
}

handleResponse(HttpStatus.Success, "success");

// ❌ BREAK (uncomment)
// handleResponse(201, "ok"); // Error

/* =====================================================
   7️⃣ REAL-WORLD STYLE EXAMPLE
===================================================== */

type Role = "admin" | "user";

enum Device {
  Mobile = "MOBILE",
  Desktop = "DESKTOP"
}

function login(role: Role, device: Device) {
  console.log(`Role: ${role}, Device: ${device}`);
}

login("admin", Device.Mobile);

// ❌ BREAK (uncomment)
// login("guest", Device.Mobile); // Error
