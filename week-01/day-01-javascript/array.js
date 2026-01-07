// arrays.js
// Array operations and methods

let numbers = [1, 2, 3, 4];

// push & pop
numbers.push(5);


//map
let doubled=numbers.map(num=>num*2);

//filter
let evenNumbers=numbers.filter(num=>num%2===0);

//forEach
numbers.forEach(num => {
  console.log("Value:", num);
});

console.log(numbers);
console.log(doubled);
console.log(evenNumbers);


