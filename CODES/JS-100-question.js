let prompt = require("prompt-sync")();
// let amount = Number(prompt("Enter Your Amount "));
// let dis = 0;
// if(amount >= 0 && amount <= 5000)  dis = 0;
// else if(amount >= 5001 && amount <= 7000) dis = 5;
// else if(amount >= 7001 && amount <= 9000) dis = 10;
// else dis = 20;
// let  FinalAmount = (amount - (dis * amount)/ 100);
// console.log(FinalAmount); 
 
//  electi bill
let unit = Number(prompt("enter Your unit :-"));
if(unit == 0) return ( (unit * 0).toFixed(1));
else if(unit > 0 && unit <= 100) console.log((unit * 4.2));
else if( unit > 101 && unit <= 201 ) console.log((100 * 4.2) + (unit - 100) * 6);
else if( unit > 201 && unit <= 400 ) console.log((100 * 4.2) + (100  * 6) + (unit - 200) * 8);
else console.log((100 * 4.2) + (100  * 6) + (200 * 8) + (unit - 400) * 13);
