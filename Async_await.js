function brushTeeth(){   // normal func
    return new Promise((resolve, reject) => {
        console.log("Kindly wait for 5 secs...to finish brushing teeth");
    setTimeout(() => {
           resolve("Doing brushing teeth.");
        },5000);
    })
}


function eatBreakfast(){
    return new Promise((resolve, reject) => {
        console.log("KIndly wait for 5 secs.....to finsish eating breakfast");
    setTimeout(() => {
           resolve("Doing eating breakfast");
        },5000);
    })
}  

async function makeCoffee() { 
    console.log("making coffee....pls wait");

  let brushingteeth=await brushTeeth();
  
  console.log("complete brushing teeth");

  let eatingbreakfast=await eatBreakfast();
  console.log("complete eatingbreakfast");
}
makeCoffee();


    

// Normal function 1
function brushTeeth() {
  return " Brushed teeth";
}
 
// Normal function 2
function eatBreakfast() {
  return " Ate breakfast";
}
 
// Async function (simulating waiting for coffee to be ready)
async function makeCoffee() {
  console.log("Making coffee... please wait...");
 
  let coffee = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Coffee is ready!");
    }, 2000); // 2 sec delay
  });
 
  return coffee;
}
 
// Main function
async function startMorning() {
  console.log(brushTeeth()); // normal
  console.log(eatBreakfast()); // normal
 
  let coffee = await makeCoffee(); // async
  console.log(coffee);
}
 
// Run the routine
startMorning();
 
 

function GetTarunResponse(){
   return new Promise((resolve , reject)=>{
        //console.log("Kindly wait for 5 secs...for get the GeethajliBook related information");
        setTimeout(() => {
           resolve("He will come 5 secs");
        },5000);
    })
}


function GetBhanuBook(){
   return new Promise((resolve , reject)=>{
        //console.log("Kindly wait for 3 secs...for get the Gora related information");
        setTimeout(() => {
           resolve("He will come 3 secs.");
        },3000);   //20 second 10 second 1 mins 5 mins
    })
}

// who is mahesh , tarun and banu

//Mahesh is the jscompiler

async function MeetUp(){
   
   let bookGeenthaliDetails = await GetBhanuBook();  // tarun
   console.log(bookGeenthaliDetails);

}

MeetUp();   //Mahesh - compiler

// Mahesh is giving the some work
console.log("CAlling his mom");
console.log("Doing some Whatsapp")


//put the debugger each and every line and try to understand...