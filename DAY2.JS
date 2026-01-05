let prompt = require("prompt-sync")();

// PAY DISCOUNT PAYBILL AMOUNT 


// let Amount = Number(prompt("Enter your amount : "));
// let dis = 0;
// if(Amount > 0 && Amount  <= 5000) dis = 5;
// else if(Amount > 5000 && Amount <= 7000) dis = 10;
// else if(Amount > 7000 && Amount <= 9000) dis = 20;

// console.log( `Your pay bill amount is ${Amount - (dis*Amount/100).toFixed(2)} and your are gatting dis amount is ${dis}` )

// Q  WRITE CODE TO CHECK  YOUR USER GIVEN YEAR IS LEAP YEAR OR NOT 

// let year = Number(prompt("Enter your year:-"));
// if(year % 4 == 0 && year % 100 !=0 ) console.log("Leap Year")
// else if(year % 400 == 0 ) console.log("Leap Year :");
// else console.log("Not a  Leap Year: "); 


// Q Electricity  Bill payment 

// let unit = Number(prompt("Enter unit:- "));
// if(unit > 0 && unit <= 100) {
//   console.log((unit * 4.5));
// }else if(unit > 101 && unit <= 201){
//   console.log((100 * 4.5) + (unit - 100) * 6);
// }
// else if(unit > 201 && unit <= 400){
//   console.log((100 * 4.5) + (100 * 6) + (unit - 200) * 8);
// }
// else {
//   console.log((100 * 4.5) + (100 * 6) + (200 * 8) + (unit - 400)* 13);
// }

// Q write leap year code  
// let year = Number(prompt("Enter your year"));
// if(year % 4 == 0 && year % 100 != 0) console.log("LEAP YEAR");
// else if(year % 4== 0) console.log("LEAP YEAR ");
// else console.log("NOT A LEAP YEAR");


// Q ACCEPT THREE NUMBER AND PRINT THE GREATER AMONG.
// let a = Number(prompt("Enter Your Fist NUmber : -"))
// let b = Number(prompt("Enter Your second NUmber : -"))
// let c = Number(prompt("Enter Your theird NUmber : -"))
// if(a > b && a > c) console.log(` A is greate Number ${a}`);
// else if(b > a && b > c) console.log(` B is greate Number ${b}`);
// else console.log(` C is greate Number ${c} `)

// PAY BILL AMOUNT 
// const Amount = Number(prompt("Enter YOur Amount : -"));
// dis = 0;
// if(Amount > 0 && Amount <= 5000) dis = 0
// else if(Amount > 5000 && Amount <= 7000) dis = 5;
// else if(Amount > 7000 && Amount <= 9000) dis = 10;
// else dis = 20;

// console.log(`Payable Amount  ${(Amount - (dis * Amount)/100)}`);

// Electricity Bill
// let unit = Number(prompt("Enter Your Unit :- "));
// if (unit > 0 && unit <= 100) console.log((unit * 4.2));
// else if (unit > 100 && unit <= 200) console.log((100 * 4.2) + (unit - 100) * 6);

// else if (unit > 201 && unit <= 400) console.log((100 * 4.2) + (100 * 6) + (unit - 200) * 8);

// else console.log((100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 8);

// Electricity Bill  top down apporoch

//  let unit = Number(prompt("Enter Your Unit :- "));
//  let Amount = 0;
//  if(unit > 400){
//   Amount = (unit - 400) * 13;
//   unit = 400;
//  }
//  if(unit > 200 && unit <= 400){
//   Amount = Amount + (unit - 200) * 8;
//   unit = 200
//  }
//  if(unit > 100 && unit <= 200){
//   Amount = Amount + (unit - 100) * 6;
//   unit = 100;
//  }
//  Amount = Amount + (unit * 4.2 )
//  console.log("Total  Ele Bil Amount to Par Unit :- ",Amount);


// Q  Calculate the Area of Triange by Heron's Formula .
// let a = Number(prompt("Enter the fist number : -"));
// let b = Number(prompt("Enter the fist number : -"));
// let c = Number(prompt("Enter the fist number : -"));
// let s = (a + b + c) / 2;
// let Area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(1);
// console.log("s  is = ", s);
// console.log("Area  is = ", Area);


//Q  Calculate the area of Circumference of circle 
// let r = Number(prompt("Enter your radies:- "));
// let circumference  = (2 * 3.14 * r).toFixed(1);
// console.log("Your Area of Circumference us :-  ", circumference);

