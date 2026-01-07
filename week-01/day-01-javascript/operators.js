//operators.js
//Arithmetic, comparison, logical operators

let a=10;
let b=3;

// Arithmetic
console.log(a + b);
console.log(a % b);

// Comparison
console.log(a == "10");   // true (avoid)
console.log(a === "10");  // false (recommended)

// Logical
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);