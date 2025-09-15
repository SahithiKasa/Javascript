fetch('https://fakestoreapi.com/products/1')
           .then(res=>res.json())            
          .then(json=>console.log(json))
           





  let ConfigureURL = fetch("https://jsonplaceholder.typicode.com/comments"); //resources | URI | API

console.log(ConfigureURL);


//amazon primise   -- diff data 

//hdfc bck         -- diff data


//then mean subscriip

let outputResult = ConfigureURL.then((result)=>{
    result.json()
   return result.json();
}).then((result2)=>{
   console.log(result2);
})
console.log(outputResult);




//let ConfigureURL1 = fetch("https://fakestoreapi.com/products/1");   // promise

//ConfigureURL1.then((result3)=>{
    //console.log(result3);
 //   return result3.json()
//}).then((result4)=>{
 //   console.log(result4);
//})







let ConfigureURL2 = fetch("https://api.firstamedu.com/api/api/class/AllClassesByState/California");
ConfigureURL2.then((x)=>{
    console.log(x.json());
    return x.json();
}).then((y)=>{
   console.log(y);
});





let ConfigureURL4 = fetch("https://jsonplaceholder.typicode.com/albums");
ConfigureURL4.then((x)=>{
    console.log(x.json());
    return x.json();
}).then((y)=>{
   console.log(y);
});
    