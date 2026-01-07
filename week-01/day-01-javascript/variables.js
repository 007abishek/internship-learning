//Demonstrates var,let, and const usage

//var is a function scoped
var oldway="Not recommended";

//using let when reassignment is needed
let age=21;
age=22;

//use const by default
const role="Frontend";

//const with objects(reference cannot change)
const user={
    name:"abishek",
    city:"bangalore"
};
user.city="Chennai";//allowed

console.log(age,role,user);