let prompt = require("prompt-sync")();


// Sum of Absolute Differences


// Medium Array

// Description
// You are given a sequence Of integers. Your task is to compute the sum Of absolute differences between every
// pair Of elements in the sequence where the first element appears before the second. More formally, for a given
// array Of integers arr Of length n, you must compute the total value: For all pairs (i, j) such that O i < j < n, add
// larr[i] - arr[j]l to the sum. The absolute difference between two numbers is defined as the non-negative value
// of their difference, regardless of order. The input may contain duplicate values, negative numbers, or zeros.
// The order of elements in the input is fixed and must not be rearranged. Your program must process the input
// exactly as provided and output a single integer representing the computed sum.

// Examples 1:
// Sample Input:
// 5
// 12345
// Expected Output :
// 20

// let arr = [1,2,3,4,5];
// let count = 0;


// for(let i = 0; i<arr.length; i++){
//   for(let j = i; j<arr.length; j++){
//     console.log(`${arr[i]}  ${arr[j]}`)
//   }
// }


//  SEARCHING ALRORITHMS
// let arr = [4,5,6,7,8,9];
// let t = Number(prompt("Enter search Element :-"));
// let indexs = -1;
// for(let i = 0; i<=arr.length; i++){
//     if(arr[i] === t){
//       indexs = i;
//     }
// }

// console.log(indexs == -1? "Not found": "found at " + indexs + " index" + " element is :"   + arr[indexs]);




//   BINNERY SEARCH 

// let arr = [4,6,8,9,10,22,55,74,85];
// let t = Number(prompt("Enter a search Element :- "));
// let st = 0, en = arr.length-1, index = -1;


// while(st <= en){
//   let mid = Math.floor((st + en) /2);
//   if(arr[mid] == t){
//     index = mid;
//     break;
//   }
//   else if(arr[mid] < t) st = mid + 1;
//   else en = mid - 1; 
// }

// if(index == -1) console.log(" Not Found");
// else console.log("Element found At " + index + " indexs");



// let arr = [4,5,6,9,7,3,6,5,6,8];
// let targat = Number(prompt("Enter a Search Element :-"));
// let st = 0, en = arr.length-1, index = -1;


// while(st< en){
//   let mid = Math.floor((st + en) /2 );
//   if(arr[mid] == targat){
//     index = mid;
//     break;
//   }else if(arr[mid] < targat) st = mid + 1;
//   else en = mid - 1;
// }

// if(index == -1) console.log('Not Found ');
// else console.log("Element found At " + index + " indexs");




// let num = Number(prompt("Enter Your Number :-"));
// let sum = 0, sqr = num * num;
// let temp = sqr;
// while(temp > 0){
//   let rem = (temp % 10);
//   sum  += rem;
//   temp = Math.floor(temp/10);

// }
// if(sum === num) console.log("nean number");
// else console.log("not nean number ");


// Find the Targate
// let arr = [7,9,5,2,8,1,1];
// let t = Number(prompt("Enter Your Number :-"));
// let index = -1;
// for(let i = 0; i<arr.length; i++){
//   if(arr[i] === t) {
//     index = i;
//     break;
//   }
// }

// console.log(index == -1 ? "Not Found": "Found at " + index + " Index");

let arr = [4,5,6,7,8,9,10,11];
let t = Number(prompt("Enter Your Number"));
let st = 0; let end = arr.length-1; index = -1;
while(st <= end){
  let mid = Math.floor((st + end) / 2);
  if(arr[mid] === t){
    index = mid;
    break;
  }
  else if(arr[mid] < t) st = mid + 1;
  else end = mid - 1;
}
console.log(index);