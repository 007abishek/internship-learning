// conditions.js
// if-else and switch usage

let score = 82;

if (score >= 80) {
  console.log("Distinction");
} else if (score >= 60) {
  console.log("First Class");
} else {
  console.log("Pass");
}

let role = "intern";

switch (role) {
  case "admin":
    console.log("Admin access");
    break;
  case "intern":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}
