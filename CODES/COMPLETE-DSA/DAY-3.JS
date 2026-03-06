let prompt = require("prompt-sync")();

// let n  = Number(prompt("Enter Size of Arrya :-"));
// let arr  = new Array(n);

// for(let i = 0; i<arr.length; i++){
//   arr[i] = Number(prompt("Enter Your Number :-"));
// }
// let sum = 0;
// for(let i = 0; i<n; i++){
//    sum += arr[i];
// }
// let meno = (sum / n).toFixed(1);


// console.log(sum, meno);



// let arr = [4,5,6,9,8,51];
// let max = arr[0];
// let i = 1
// for(let i = 1; i<arr.length; i++){
//   if(arr[i] > max){
//     max = arr[i];

//   console.log(`Max =  ${max} and his index is ${i}`);
//   }

// }



// Description
// Write a program to find the greatest element in an array and print its value along
// with its index. The index should be zero-based.

// Input Format
// • The first line contains an integer n, the number of elements. • The second line
// contains n space-separated integers, representing the elements of the array.
// Output Format
// • Print "Max element = X found at index Y", where: X is the maximum value and Y is
// the zero-based index Of X. • For Javascript : Returns an array [maxElement ,
// maxElementlndex].
// Constraints
// • -2*31 arr[i] 231

// let arr = [88,20,36,96,8];
// let n = arr.length;
// let max_Element = arr[0];
// let  X = 0;

// for(let i = 1; i<n; i++ ){
//   if(arr[i] > max_Element){
//     max_Element = arr[i];
//     X = i;
//   }
 
// }

// console.log(`Max Element of all arryrs is ${max_Element} and his index is ${X}`);







// find second smax

let arr = [10,20,3,300,80];
let max = Math.max(arr[0], arr[1]);
let smax = Math.min(arr[0], arr[1]);

for(let i = 0; i<arr.length; i++){
  if(arr[i] > max){
    smax = max
    max = arr[i];
  } else if(arr[i] > smax && arr[i] != max){
    smax = arr[i];
  }
  
}
console.log(smax);