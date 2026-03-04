// *************************PATTERN PROGRAMMING*******************************

let prompt = require("prompt-sync")();

// PRINT RIGHT TRINGLE
let n  = Number(prompt("Enter Your Number :-"));
for(let i = 1; i<=n; i++){
  for(let j = 1; j<=i; j++){
    process.stdout.write("* ");
  }
  console.log()
}
