// 1. Create two variables: one storing your full name and another storing your favorite hobby. Print a sentence in the format:
//   "My name is <your name> and <your hobby>".

let prompt = require("prompt-sync")();

// let Name = prompt("Enter Your Name :-");
// let Hobby = prompt("Enter Your Hobby :-");
// console.log(`My Name is ${Name} and ${Hobby}`);

// //2. Perform the arithmetic calculation `45 * 2 - 10` and print the final result.
// let result  =  (45 * 2 ) - 10;
// console.log(result);


// 3. Write a program that retrieves and prints the current year using JavaScript’s `Date` object.    
// const  date = new Date();
// const year = date.getFullYear();
// console.log(year);

// 4. Store your first name and last name in two different variables, then print your full name in a single output.

// const Name = "Sumit";
// const Yadav = "yadav";
// console.log(Name + " " + Yadav);

// 5. Create a variable with an initial value. Print its value, update the value, and print the updated value again.

// let  a = 20;
// console.log(a);
// a = 21;
// console.log(a);

// 6. Print a custom error message using `console.error()`.
// console.error("This is the custom message error :");

// 7. Store a number in a variable and print the square of that number.
// let num = Number(prompt("Enter  Your Number :-"));

// console.log(num * num);

// 9. Store your age in a variable and print whether your age is greater than 18.

let age = Number(prompt("Enter you age :-"));
if(age >= 18) console.log("You are elegible for vote");
else console.log("your are not elegible for vote");