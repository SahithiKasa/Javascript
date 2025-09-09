
let items=[10,0,"Five",2];
for(let item of items) {
    try {
        if(typeof item!=="number") {
            throw new Error("Not a number!");//throw new error  is used to generate an error manually
        }                                      //creates an error object with a custom message
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
 