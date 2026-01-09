// Q Write a code to Check a Number is Strong Number or not 
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter Your Number :-"));

function Fact(n){
  let f = 1;
  for(let i = 1; i<=n; i++){
    f *= i;
  }
  return f;
}
let temp = n;
let sum = 0;
while(n > 0) {
  let digit = n % 10;
   sum += Fact(digit);
   n = Math.floor(n /10);
}
if(temp === sum) console.log("Strong Number : -")
else console.log(" Not  Strong  Number : - "); 

