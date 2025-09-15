//Normal function//
function washVegetables() {
    return "washVegetables";
}
function cutVegetables(){   //norm func
    return "cutVegetables";

}
 async function cookFood(){  //async func(coking takes time)
    console.log("cooking Food....pls wait");
       
    let food =await new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            resolve("Food is ready");
        },4000);   // 4 secs delay
        });
        return 
    }
    async function makeDinner(){
        console.log(washVegetables());//norm func
        console.log(cutVegetables());//normal func

        let dinner=await cookFood();//async func with await//
        console.log(dinner)

    }
        
    makeDinner();
 



    function GetGeethajliBook(){
   return new Promise((resolve , reject)=>{
        console.log("Kindly wait for 5 secs...for get the GeethajliBook related information");
        setTimeout(() => {
           resolve("GeethajliBook book was writtern in 1910.");
        },5000);
    })
}


function GetGoraBook(){
   return new Promise((resolve , reject)=>{
        console.log("Kindly wait for 3 secs...for get the Gora related information");
        setTimeout(() => {
           resolve("Gora book was writtern in 1910.");
        },3000);   //20 second 10 second 1 mins 5 mins
    })
}

// who is mahesh , tarun and banu

async function getAuthorsDetails(){
    console.log("Author Name RabindraNath Tagore");
    console.log("Kabuliwala was written in 1892");

    //here time is 5 second
    // GetGeethajliBook().then((result)=>{
    //    console.log(result);
    // })
   //console.time("Time");
   let bookGeenthaliDetails = await GetGeethajliBook();  // tarun
   console.log(bookGeenthaliDetails);

   
   let bookGoraDetails      = await GetGoraBook();      // hari
   console.log(bookGoraDetails);

//    Promise.all(bookGeenthaliDetails, bookGoraDetails).then((responses)=>{
//       console.log(responses);
//    })

   //console.timeEnd("Time");

}

getAuthorsDetails();   //Mahesh
console.log("GetGeethanliBook is calling . 'GetGeethajliBook' it said 5 seconds");   
// Mahesh is giving the some work
console.log("CAlling his mom");
console.log("Doing some Whatsapp")
