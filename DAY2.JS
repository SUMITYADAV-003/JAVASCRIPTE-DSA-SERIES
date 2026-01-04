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

let unit = Number(prompt("Enter unit:- "));
if(unit > 0 && unit <= 100) {
  console.log((unit * 4.5));
}else if(unit > 101 && unit <= 201){
  console.log((100 * 4.5) + (unit - 100) * 6);
}
else if(unit > 201 && unit <= 400){
  console.log((100 * 4.5) + (100 * 6) + (unit - 200) * 8);
}
else {
  console.log((100 * 4.5) + (100 * 6) + (200 * 8) + (unit - 400)* 13);
}

