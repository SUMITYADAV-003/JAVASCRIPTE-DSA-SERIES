let  prompt = require("prompt-sync")();

//Q Sum Up N Terms 
let n = Number(prompt("Enter Your N Number :-"));
let sum = 0;
for(let i = 1; i<=n; i++){
  sum += i;
}
console.log(sum);