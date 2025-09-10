function stepOne(callbackfn){
     console.log("step-1")
     callbackfn();
}

function stepTwo(callbackfn){
    console.log("step-2")
    callbackfn();
}

function stepThree(){
    console.log("step-3")
}

stepOne(()=>{
   stepTwo(()=>{
      stepThree();
   });
})



function FileDownload(callbackfn){
    console.log("file down load completed");
    callbackfn();
}
function WatchInstaReels(callbackfn){
     console.log("Watching insta reels");
     callbackfn();
}

function ChatWithFreind(){
     console.log("Chatting with my freinds")
}


FileDownload(()=>{
  //console.log("Hello world");
    WatchInstaReels(()=>{
        //console.log("hellow wof");
        ChatWithFreind();
    })
})




console.log("Start");
 
setTimeout(() => {
  console.log("User logged in");
 
  setTimeout(() => {
    console.log("Fetching user profile...");
 
    setTimeout(() => {
      console.log("Fetching user posts...");
 
      setTimeout(() => {
        console.log("Displaying posts on screen");
      }, 1000);
 
    }, 1000);
 
  }, 1000);
 
}, 1000);
 
console.log("End");
 