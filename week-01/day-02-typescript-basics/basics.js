/**Typescript */
//1 typed variables
var age = 22;
var userName = "Abishek";
var isLoggedIn = true;
//2 Typed function
function greetUser(name) {
    return "Hello, ".concat(name);
}
console.log(greetUser(userName));
//Using the interface
var user1 = {
    id: 1,
    name: "Abishek",
    email: "abishek@ex.com",
    isActive: true
};
console.log(user1);
//4 Typed array
var scores = [85, 90, 95];
scores.push(100);
console.log(scores);
//5 Union types
var userId;
userId = 101;
userId = "A101";
console.log(userId);
var apiStatus = "success";
console.log(apiStatus);
//7 function with optional parameter
function welcomeUser(name, age) {
    return age ? "Welcome ".concat(name, ", age ").concat(age) : "Welcome ".concat(name);
}
console.log(welcomeUser("Abishek"));
console.log(welcomeUser("Abishek", 22));
//8 Arrow function with types
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(5, 4));
var products = [
    { id: 1, title: "Laptop", price: 50000 },
    { id: 2, title: "phone", price: 30000 }
];
products.forEach(function (product) {
    console.log(product.id, product.title, product.price);
});
//10 unknown vs any
var value = "hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
