function myName(){
      console.log("My name is Madan!!!!");
}

//         callbackfuntion
//setTimeout(myName, 5000);  // 

//settimeout is defualt funcion in js which can accept the ohter funciton(callback) as input parameter


                   //method
function setMyName(callbackFn){
    callbackFn();
}

setMyName(myName);




// A function that accepts a callback
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the callback function
}
 
// A callback function
function sayGoodbye() {
  console.log("Goodbye!");
}
 
// Passing 'sayGoodbye' as a callback
greet("Sahithi", sayGoodbye);
 