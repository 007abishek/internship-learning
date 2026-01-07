/**
 * Shallow vs Deep Copy
 * Important for React state management
 */

// 🔹 Shallow Copy (Spread Operator)
const user1 = {
  name: "Abhishek",
  address: {
    city: "Bangalore"
  }
};

const user2 = { ...user1 }; // shallow copy
user2.name = "Abi";
user2.address.city = "Chennai"; // ❌ affects original

console.log(user1.address.city); // Chennai (unexpected)

// 🔹 Deep Copy (Simple method)
const user3 = JSON.parse(JSON.stringify(user1));
user3.address.city = "Mumbai";

console.log(user1.address.city); // Chennai (unchanged)
console.log(user3.address.city); // Mumbai


/**
 * React Note:
 * React checks reference changes to re-render components.
 * Shallow copy is enough for flat state.
 * Deep copy is required for nested state updates.
 */
