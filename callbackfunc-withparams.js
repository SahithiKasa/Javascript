function myName(stuName){
      console.log(`My name is ${stuName}`);
}

//                  myname refers the function -> not chiru , not balu
function setMyName(callbackFn){
    callbackFn("John");
}


//Here i am passing the named function
//                      anonmous function
//                      arrow function

//Named functio
setMyName(myName);



    setMyName(function(stuName){
   console.log(`My name is ${stuName}`); 
})

//Lambda
setMyName((stuName)=>{
   console.log(`My name is ${stuName}`); 
})







//function executeSkill(callbackfun){
 //     callbackfun("HTML" , "CSS" , "JS");
// }

// executeSkill((tech1, tech2 , tech3)=>{
//    console.log(`MY skill set is now ${tech1} , ${tech2} & ${tech3}`);
// });








 function executeSkill(location , callbackfun){
     callbackfun("HTML" , "CSS" , "JS"   , location);
}

executeSkill("Bangolore" , (tech1, tech2 , tech3  , locname)=>{
    console.log(`MY skill set is now ${tech1} , ${tech2} & ${tech3}`);
    console.log(`Location is ${locname}` );
});