function step1() {
    setTimeout(() => {
        console.log("Step1");
    }, 8000);
}
function step2() {
    setTimeout(() => {
        console.log("Step2");
    }, 3000);
}
function step3() {
    setTimeout(() => {
        console.log("Step3");
    }, 6000);
}

 step1(); 
 step2();
 step3();

//step 2

// step 3

// step 1




function FileDownload(callbackfn){
    var workName = "video"
    console.log("Video is loading");

    //callback function approach
    setTimeout(() => {
         console.log(`${workName} complted in 8 seconds `);
         callbackfn();
    }, 8000);
}


function WatchInstaReelsDownload(callbackfn){
    var workName = "Insta reels"
    console.log("I am wathing insta reels ");

     //callback function approach
    setTimeout(() => {
         console.log(`${workName} complted in 3 seconds `);
         callbackfn();
    }, 3000);
}


function ChatWithFreinds(callbackfn){
    var workName = "Chat with freinds"
    console.log("I am chatting wtih freinds ");

     //callback function approach
    setTimeout(() => {
         console.log(`${workName} complted in 6 seconds `);
    }, 6000);
}

// FileDownload();
// WatchInstaReelsDownload();
// ChatWithFreinds();


//callback hell
FileDownload(()=>{
    WatchInstaReelsDownload(()=>{
        ChatWithFreinds();
    })
})







//function WatchInstaReels(callbackfn){
//      console.log("Watching insta reels");
//      callbackfn();
// }

// function ChatWithFreind(){
//      console.log("Chatting with my freinds")
// }


// FileDownload(()=>{
//   //console.log("Hello world");
//     WatchInstaReels(()=>{
//         //console.log("hellow wof");
//         ChatWithFreind();
//     })
// })






function fetchData(callback) {
  console.log("Fetching data...");
 
  setTimeout(() => {
    console.log("Data fetched!");
    callback(); // runs later (after 2 seconds)
  }, 2000);
}
 
function processData() {
  console.log("Processing data...");
}
 
fetchData(processData);
 
console.log("This line runs immediately after fetchData call.");
 