// async always returns the promise


//shall we implment real promise??? yes

async function getAuthorDetails(){
    return new Promise((resolve , reject)=>{
         // let author = "Rabindra nath tagore";
          let author;
          if(author){
              resolve(author);
          }
          else{
            reject("Auhtor is undefined or null or something issue is their....");
          }
    })
}

console.log(getAuthorDetails);     // function wil print

let author = getAuthorDetails();
console.log(author);   // promise

author.then((authorname)=>{
     //console.log(authorname);
     document.writeln(authorname);
}).catch(
    (rejectedMessage)=>{
    document.writeln(rejectedMessage);
})





// Function that returns a new Promise
function downloadFile() {
  return new Promise((resolve, reject) => {
    console.log("📥 Download started...");
 
    setTimeout(() => {
      let success = true; // change to false to test rejection
 
      if (success) {
        resolve(" File downloaded successfully!");
      } else {
        reject("File download failed!");
      }
    }, 3000); // simulate 3 seconds delay
  });
}
 
// Async function that uses await
async function startDownload() {
  let message = await downloadFile(); // waits until promise resolves
  return message; // async function returns a Promise
}
 
// Consume the async function with .then() and .catch()
startDownload()
  .then((msg) => {
    console.log(msg); // success message
  })
  .catch((error) => {
    console.log(error); // error message
  })
  .finally(() => {
    console.log("🎉 Download attempt finished.");
  });
 