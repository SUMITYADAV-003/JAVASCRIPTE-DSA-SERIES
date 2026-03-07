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

// let arr = [10,20,3,300,80];
// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);

// for(let i = 0; i<arr.length; i++){
//   if(arr[i] > max){
//     smax = max
//     max = arr[i];
//   } else if(arr[i] > smax && arr[i] != max){
//     smax = arr[i];
//   }
  
// }
// console.log(smax);

// let arr = [0,20,2,0,3,6];
// let temp = new Array(arr.length);

// let i = arr.length-1;

// for(let j = 0; j<temp.length; j++){
//   temp[j] = arr[i];
//   i--;
// }

// console.log(temp);


// let arr = [20,30,50,60,40];
// let i = 0; 
// let j = arr.length -1;
// while(i<j){
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);



// max element 


// let arr = [30,20,50];
// let max = arr[0];

// for(let i = 0; i<arr.length; i++){
//   if(arr[i] > max){
//     max = arr[i];
//   }
// }

// console.log(max);



// let temp = new Array(arr.length);
// let i = arr.length-1;
// for(let j = 0; j<arr.length; j++){
//   temp[j]  = arr[i];
//   i--;
// }

// console.log(temp);



// let arr = [50,10,20,30,50];
// let i = 0;
// let j  = arr.length-1;

// while(i<j){
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr);






let arr = [0,1,0,1,1,0,1];
let i = 0; 
let j = arr.length - 1; // ✅ fix: -1

while(i < j) {
  if(arr[i] === 0) {
    // swap
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--; // move j left
  } else {
    i++; // ✅ only move i forward when arr[i] is 1
  }
}

console.log(arr)