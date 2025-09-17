//import { bankName ,openAccount , getBalance } from "./bank.js";   //half-hour
//import { employeeName } from "./employee.js";

//console.log(bankName);
//console.log(employeeName);

//let accountName = openAccount("Madan");
//console.log(accountName);

//let balance = getBalance("Madan", "10k" );
//console.log(balance);


import {bankName,openAccount,deposit} from "./bank.js";
import {customerDetails,loanEligibility} from "./employee.js";
console.log("welcome to",bankName);
console.log(openAccount("Sahithi"));
console.log(deposit(10000));
console.log(customerDetails("Sahithi",23));
console.log(loanEligibility(30000));




