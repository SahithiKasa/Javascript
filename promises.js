// resolve -- callbackfuntion

// reject -- callbackfuntion


//promise is a function which accepts the anonomous function as a input paramter

//2 input paramters 

//first is one indicaes the succsscallbackfunciton
//second is indicates the failcallbakcfuntion


// 1. function - I do't know

// 2. Promise is a kind of funtion  new function


//now you have created the promise


//var johnCar = new Car("Dec 10 , 2020" , "John" , "UK");

//Promise definaiton
let myPromise = new Promise((resolve, reject) => {
    let myStatus = true;
    if (myStatus) {
        resolve("success message");
    }
    else {
        reject("fail Message");
    }
})


//wneever hey then is a kind of member in promise

//toppercase() in


// catch

//
myPromise.then(
    (successresultSet) => {
        //  you can write our movie
    }).catch((failMessage) => {
        console.log(failMessage);
    })








    function downloadFile() {
  return new Promise((resolve, reject) => {
    console.log("Starting download...");
 
    setTimeout(() => {
      let success = true; // change to false to test rejection
      if (success) {
        resolve("⬇️ File downloaded successfully!");
      } else {
        reject("❌ File download failed!");
      }
    }, 3000); // takes 3 seconds
  });
}
 
// Consuming the promise with .then() and .catch()
downloadFile()
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  })
  .finally(() => {
    console.log("Download process finished.");
  });
 






  