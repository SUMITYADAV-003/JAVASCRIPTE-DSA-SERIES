// *************************PATTERN PROGRAMMING*******************************

let prompt = require("prompt-sync")();

// PRINT RIGHT TRINGLE
// let n  = Number(prompt("Enter Your Number :-"));
// for(let i = 1; i<=n; i++){
//   for(let j = 1; j<=i; j++){
//     process.stdout.write("* ");
//   }
//   console.log()
// }


// let num = Number(prompt("Enter Your Number :-"));
// for(let i = 1; i<=num; i++){
//   for(let j = 1; j<=i; j++){
//     process.stdout.write("* ");
//   }
//   console.log();
// }



// Print right  traingle star 
// let n = Number(prompt("Enter Your Number :-"));
// for(let i = 1; i<=n; i++){
//   for(let j = 1; j<=i; j++){
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }


// Print the AIphabet Pattern
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 0; j < i; j++) {
//         row += String.fromCharCode(65 + j);
//         if (j < i - 1) row += ' ';
//     }
//     console.log(row);
// }

// Print inverted right triangle 
// let n = Number(prompt("Enter Your Number :-"));
// for(let i = 1; i<=n; i++){
//   for(let j = 1; j<=n-i+1; j++){
//      process.stdout.write("* ");
//   }
//   console.log();
// }

// Mirrored Right Triangle.



// let n = Number(prompt("Enter Your Number :- "));

// for (let i = 1; i <= n; i++) {
//     // Spaces instead of underscores
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write("  ");
//     }
//     // Stars
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }
// ```

// ## ✅ Print  Output (n=5)
// ```
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * *


// Print X patter .
let n = Number(prompt("Enter Your Number :-"));
for(let i = 1; i<=n; i++){
  for(let j = 1; j <=n; j++){
    if(j==i || j+i == n+1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}