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
 


let items=[10,0,"Five",2];
for(let item of items) {
    try {
        if(typeof item!=="number") {
            throw new Error("Not a number!");
        }
        if(item==0) {
            throw new Error("Divison by zero!");
        }
        console.log("100/",item,"=",100/item);

    }
    catch(error) {
        console.log("Error:",error.message);

    }
    finally{
        console.log("Checked item:",item);
    }
}






function safeDivide(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Inputs must be numbers!");
        }
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        console.log("Result:", a / b);
    } 
    catch (error) {
        console.log("Error:", error.message);
    } 
    finally {
        console.log("Calculation attempt finished.");
    }
}
 
safeDivide(20, 5);
safeDivide(10, 0);
safeDivide("ten", 2);
 