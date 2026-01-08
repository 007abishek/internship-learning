/**Typescript */
//1 typed variables
let age:number=22;
let userName:string="Abishek";
let isLoggedIn:boolean=true;

//2 Typed function

function greetUser(name:string):string{
    
    return `Hello, ${name}`;
}
console.log(greetUser(userName));

//3 Interface
interface User{
    id:number;
    name: string;
    email: string;
    isActive?: boolean;
}

//Using the interface
const user1:User={
    id:1,
    name:"Abishek",
    email:"abishek@ex.com",
    isActive:true
};

console.log(user1);
//4 Typed array
let scores:number[]=[85,90,95];
scores.push(100);
console.log(scores);

//5 Union types
let userId:number | string;
userId=101;
userId="A101";
console.log(userId);

//6 type alias
type Status="success" | "error" |"loading";
let apiStatus:Status="success";
console.log(apiStatus);

//7 function with optional parameter
function welcomeUser(name:string, age?:number):string{
    return age?`Welcome ${name}, age ${age}`:`Welcome ${name}`;
}

console.log(welcomeUser("Abishek"));
console.log(welcomeUser("Abishek",22));
//8 Arrow function with types
const multiply=(a: number,b:number):number =>{
    return a*b;
};
console.log(multiply(5,4));

//9 Array of objects with interface()
interface Product{
    id: number;
    title: string;
    price: number;
}
const products: Product[]=[
    {id:1,title:"Laptop",price:50000},
    {id:2,title:"phone",price:30000}
];
products.forEach(product =>{
    console.log(product.id,product.title,product.price)
})
//10 unknown vs any
let value: unknown="hello";
if(typeof value ==="string"){
    console.log(value.toUpperCase());
}

