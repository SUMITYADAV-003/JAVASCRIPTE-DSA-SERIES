// Q Write a code to Check a Number is Strong Number or not 
let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter Your Number :-"));

// function Fact(n){
//   let f = 1;
//   for(let i = 1; i<=n; i++){
//     f *= i;
//   }
//   return f;
// }
// let temp = n;
// let sum = 0;
// while(n > 0) {
//   let digit = n % 10;
//    sum += Fact(digit);
//    n = Math.floor(n /10);
// }
// if(temp === sum) console.log("Strong Number : -")
// else console.log(" Not  Strong  Number : - "); 

// let n = Number(prompt("Enter Your Number : -"));
// let rev = 0;
// while(n  > 0) {
//   let rem = (n % 10);
//   rev = (rev * 10) + rem;
//   n = Math.floor(n / 10);
// }
// console.log( `Reverse the number ${n}   to ${rev}`);

// let  n = Number(prompt("Enter Your Number : -"));
//  let count = 0; 
//  while (n > 0) {
//   count ++ ;
//   n = Math.floor( n / 10);
//  }
//  console.log(count);

// let n = Number(prompt("Enter Your Number:-"));
//  let copy = n;
// n = Math.pow(n,2);
// while(n > 0){
  
// }

// let n = Number(prompt("Enter Your Number :-"));
// let sqar = (n * n);
// let digit = (sqar % 100);
// if(digit === n) console.log("yes");
// else console.log("No");

// let n = Number(prompt("Enter You number :- "));
// let  sqar = n * n;
// let temp = n; let count = 0;

// while(temp > 0){
//   count ++ 
//    temp = Math.floor(temp / 10);
// }
// let modul = Math.pow(10,count);
// let digit = (sqar % modul);
// if(digit === n) console.log("Yes");
// else console.log("No");

// let n = Number(prompt("Enter Your number : -"));
// let temp = n;
// let sum = 0;

// while( temp > 0){
//   let  digit  = (temp % 10);
//   sum  += digit;
//   temp = Math.floor(temp / 10);
// }
// console.log("Sum of You number " + sum);
// if(n % sum === 0) console.log("Harshad Number");
// else console.log("Not Harshad Number ");


// Q Abundant Number 
 let n = Number(prompt("Enter Your number : -"));
 let sum = 0;
 for(let i = 1; i<n; i++){
    if(n % i == 0) {
      sum += i
      console.log(sum);
    }
 } 
 if(sum > n ) console.log("Abundant Number");
 else console.log(" Not Abundant Number");

