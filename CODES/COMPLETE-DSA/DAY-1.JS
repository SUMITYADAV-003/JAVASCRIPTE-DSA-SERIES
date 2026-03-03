let prompt = require("prompt-sync")();
/* Write a program that takes an integer n as input and computes the sum of its
 digits. • The input number is always positive.
 */
// let num = Number(prompt("Enter Your Number :-"));
// let sum = 0;
// while(num > 0){
//   let rem = (num % 10);
//   sum += rem;
//   num = Math.floor(num / 10);


// }
// console.log(sum);


// Check if your given number is AUTOMORPHIC NUMBER :-
//    CODE IS PANDING STATE

// Check a Given Number is Isbn Number our not :-

// let n = Number(prompt("Enter Your Number :-"));
// let temp = n;
// let count = 0;
// while(n > 0){
//   count ++;
//   n = Math.floor(n/10);
// }

// if(count != 10) console.log("Not Valid ISBN Number :-");
// else {
//   let ans = 0;
//   while(temp > 0){
//     let dig = (n%10);
//     ans = ans + (dig * count);
//     count --;
//     temp  = Math.floor(temp /10);
//   }
//   if(ans % 11 === 0){
//     console.log("it is ISBN Number :-");
//   }else {
//     console.log("It is Not ISBN Number :-");
//   }
// }

// Rever  a give numbar .

// let n = Number(prompt("Enter Your Number :-"));
// let rev = 0;
// while(n > 0){
//   let dig = (n % 10);
//   rev = (rev * 10) + dig;
//   n = Math.floor(n / 10);
// }
// console.log(rev);


/*Write a program to find and print all the prime factors of a given number. A prime
factor is a factor that is a prime number. If the number is O or 1, print No prime
factors.
*/



let num = Number(prompt("Enter your number:"));

if (num === 0 || num === 1) {
  console.log("No prime factors");
} else {
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      console.log(i);
      num = num / i;
    }
  }

  if (num > 1) {
    console.log(num);
  }
}


