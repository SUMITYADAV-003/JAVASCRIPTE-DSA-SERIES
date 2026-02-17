let prompt = require("prompt-sync")();

//Q Sum Up N Terms 
// let n = Number(prompt("Enter Your N Number :-"));
// let sum = 0;
// for(let i = 1; i<=n; i++){
//   sum += i;
// }
// console.log(sum);

// Q Print All Factors of a  Number 
// let n = Number(prompt("entre your number : -"));

// for(let  i = 1; i<=n; i++){
//   if(n % i == 0){
//     process.stdout.write(i + " ");
//   }


// }
// let start = Number(prompt("Entre your Start number:-"));
// let end = Number(prompt("Entre your end number:-"));
// if (start > end) {
//   let temp = start;
//   start = end;
//   end = temp;
// }

// let evenSum = 0;
// let oddSum = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;  
//   } else {
//     oddSum += i;  
//   }
// }

// console.log("Sum of even numbers: " + evenSum);
// console.log("Sum of odd numbers: " + oddSum);
    
   
  



// let n = Number(prompt("Entre your  number:-"));
// for(let i = 1; i<=n; i++){
//   if(i%1 == 0 && i%n == 0) return "Prime";
//   else return "Not Prime";
// }

// Q  write a  program to calulate the area of a circle rectangle and tringe using a awitch statement 


// console.log("Enter 1 to find the area of circle :-") 
// console.log("Enter 2 to find the area of Rectangle :-") 
// console.log("Enter 3 to find the area of Triangle :-")
// let n = Number(prompt("Enter Your NUmber  1 to 3:-"));
// switch(n){
//   case 1:
//     let r = Number(prompt("Enter Your Radis and  cal  the area of Circle :-"));
//     let area = (Math.PI * r * r).toFixed(1);
//     console.log( ` area of circle is ${area}`);
//     break;
//   case 2:
//     let  l = Number(prompt("Enter your length "));
//     let  b = Number(prompt("Enter your width :- "));
//     let  A =  (l * b);
//     console.log(" Area of Rectangle is  :-", A);
//     break;
//   case 3:
//     let base = Number(prompt("Enter you base :-"));
//     let height = Number(prompt("Enter you height :-"));
//     let a = base * height;
//     console.log("Area of Triangle ", (base * height) / 2);
//     break;
//   default :{
//     console.log("Invalid Number Try againe :-");
//   }
// } 

 // Q Print All Factors of a  Number 
//  let n = Number(prompt("Entre Your number :-"));
//  for(let i = 1; i<=n/2; i++ ){
//    if(n % i == 0){
//      process.stdout.write(i + " ");

//    }
   
//  }
//  console.log(n);
 

// let start = Number(prompt("Enter Your start :-"));
// let end = Number(prompt("Enter Your end :-"));
// if(start > end){
//   let temp = start;
//   start = end;
//   end = temp;
// }
// let evenSum = 0;
// let oddSum = 0;

// for(let i = start; i<=end; i++) {
//   if(i % 2 == 0 ) evenSum += i;
//   else oddSum += i;
     
  
// }
// process.stdout.write("even sum is = " + evenSum);
// console.log("--------------------------------")
// process.stdout.write("odd sum is = " + oddSum); // 5, 6 ,7 , 8, 9 10 11 12 13 14 15


// Q  print table of any number :-
// let num = Number(prompt("enter number :-"));
// for(let i = 1; i<=10; i++){
//   console.log(num + " * " + i + " = " + (num * i) );
// }

// Q sum of n term 
//  let num = Number(prompt("enter number :-"));
//  let sum = 0;
//  for(let i = 1; i<=num; i++){
//     sum += i;
//  }
//  console.log(sum);

// let n = Number(prompt("enter the number :-"));
// if(n == 2 || n == 1) console.log("prime  numebr ");

// let n = Number(prompt("enter number to check it is prime or not : -"));
// function isPrime(n){
//   if(num <= 1) return false;

//   for(let i = 2; i<Math.sqrt(n); i++){
//     if(n % i === 0) return false
//   }
  
// }
 
// let a = Number(prompt("Enter your Number "));
// let b = Number(prompt("Enter your Number "));
// let pow = 1;

// for(let i = 1; i<=b; i++){
//    pow = a ** 3;
//   console.log(pow);
// }


// Q Calculate Power of  Number a = 2 ANd b = 3 . Find the OutPut 
// let  a = Number(prompt("Enter number when you want to find power  :- "));
// let  b = Number(prompt("Enter Power  Number :- "));
// let power = 1;
// for(let i = 1; i<=b; i++){
//   power = a ** i;

// }
// console.log(`Power of ${a} = ${power}`);
 

// Q Prime Number Code 
// let n = Number(prompt("Enter your number :-"));
// let count = 0;
// if(n<=1) console.log("Not Prime");
// else {
//   for(let i = 2; i<=(n/2); i++){
//     if(n % i == 0) count ++;
//   }
//   if(count == 0) console.log("Prime number");
//   else console.log(" Not Prime Number");
// }

// let n = 5;
// let f = 1;
// for(let i = 1; i<=n; i++){
//      f *= i;
//   console.log(` fact  ${i} = ${f} `);
// }

