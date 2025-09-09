//we handle the errors by using the try catch finally blocks//


try {
    const bankName=hdfc;
    bankName=bankName.toUppercase();
    console.log(`Welcome to the ${bankName}`);
}
catch(ex){
    console.log(ex.message);
}
finally {
    console.log("Task completed");
}
let transactions = ["credit card","Debit card","Savings"];
console.log(`Number of transactions : ${transactions.length}`);


try {
    // Code that may throw an error
    let result = 10 / 0; // Division by zero (no error in JS, result is Infinity)
    console.log("Result:", result);
 
    let x = undefinedVariable; // This will throw an error
} 
catch (error) {
    // Runs if an error occurs in the try block
    console.log("An error occurred:", error.message);
} 
finally {
    // Always runs, no matter what
    console.log("This block always executes.");
}
 

