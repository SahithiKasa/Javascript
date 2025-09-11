function step1(){
      console.log("Step1");
}
function step2(){
      console.log("Step2");
}
function step3(){
      console.log("Step3");
}

step1();   // some time 
step2();
step3();








// Main function that accepts a callback
function greetUser(name, callback) {
  console.log("Hello, " + name);
  
  // Calling the callback function immediately (synchronously-if the callback is synchronous it is executed immediately
  //during the executio of the main func not later )//

  callback();
}
 
// Callback function
function sayGoodbye() {
  console.log("Goodbye!");
}
 
// Calling the main function with a callback
greetUser("Sahithi", sayGoodbye);
 
console.log("This line runs after the callback is done.");
 