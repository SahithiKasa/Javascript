
 
// Task 1: Download File
function downloadFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("📂 File Downloaded (8 sec)");
    }, 8000);
  });
}
 
// Task 2: Watch Insta Reels
function watchReels() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🎥 Watched Insta Reels (3 sec)");
    }, 3000);
  });
}
 
// Task 3: Chat with Friends
function chatFriends() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("💬 Chat with Friends Completed (6 sec)");
    }, 6000);
  });
}
 
// Run all tasks together
console.time("PromisesTime");
console.log("👉 Starting all tasks...");
Promise.all([downloadFile(), watchReels(), chatFriends()])
  .then((allTasks)=>{
    console.log(allTasks)
    console.timeEnd("PromisesTime");
  
       
  });







  
//debugger helps to you to understand program

//1. Promise will handle the 2 callback functions 1. success callback 2. reject callback

//2. right now i am using the lambda;



//3. i am going to take the container to capture the promise related details. you can let , var and const
//let mypromise = new Promise((successfn,rejectfn)=>{
    
 //   let isTrue = false;
 //   if(isTrue){
 //   successfn();
 //   }
 //   else{
 //     rejectfn();
 //   }
//});


//"madan".


//mypromise.then(function(){
 //    console.log("success");
//}).catch(function(){
//     console.log("some error occured")
//})








let fruit=new Promise((fruit1,fruit2)=>{
    let isfruit=true;
    if(isfruit){
        fruit1();
    }else{
        fruit2();
    }
});
fruit.then(function(){
    console.log("fruit is apple");
}).catch(function(){
    console.log("fruit is not found");
});




let my_Promise = new fn_mis_Promise(
    function(myName){
       return myName;
     },function(){
         return "one more success message"
     },
     function(){
        return "one more success message"
    },
    function(){
        return "one more success message"
    },
    function(){
        return "one more success message"
    },
  function(){
        return "one more success message"
   }
);  
my_Promise();
