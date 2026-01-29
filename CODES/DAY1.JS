let  prompt = require("prompt-sync")();

// let age = Number(prompt("Enter your age: "));
// console.log(`User Age is  ${age}`);
// console.log(typeof age );

// swap two number using third variable 

// let a = 10; 
// let b = 20;

// let temp = a;
// a =b;
// b = temp;
// console.log(`After swapping a = ${a} and b = ${b}`);
// let a = 10;
// let b = 40;
// [a, b] = [b, a];

// a = a + b; // 10 + 40 = 50
// b = a - b; // 50 - 40 = 10
// a = a - b; // 50 - 10 = 40
// console.log(a, b);

// console.log(`After swapping a = ${a} and b = ${b}`);

//1. Compound Interest Calculation 
let p = Number(prompt("Enter your Principle Amount :- "));
let r = Number(prompt("Enter your Rate of  Interest  :- "));
let t = Number(prompt("Enter your Time :- "));
let n = Number(prompt("Enter Number  Time :- "));

// let A = (P * Math.pow((1 + R/N), (N*T))).toFixed(2);
// console.log(A);

let A = (p * Math.pow(1 + r/n, (n*t)));
let CL = p - A;
console.log(CL);


