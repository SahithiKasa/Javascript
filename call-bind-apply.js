let student = {
       name : "R.Chandra",
       location : "Andhrapradesh",
       getStudentDetails : function(argument1,argument2){
            console.log(this);  
            console.log(argument1);
            console.log(argument2);
       }
}


 let JohnStudent = {
       name : "John",
       location : "UK",
       DOB : "Jan 07 , 1999",
       FatherName:"Clerk",
       MotherName:"Mery",
       Car : "Toyoto"
 }

  let  RobertStudent = {
       name : "Robert",
       location : "US",
       DOB : "Jan 07 , 2003",
       FatherName:"Robert Senior",
       MotherName:"xyz",
       Car : "abc"
 }


 var firststudent ={
    name : "John",
       location : "UK",
       DOB : "Jan 07 , 1999",
       FatherName:"Clerk",
       MotherName:"Mery",
       Car : "Toyoto"
 }
 



 student.getStudentDetails.call(JohnStudent,"34","2kids");
 
student.getStudentDetails.call(RobertStudent);


// function getStudntDetails1(){
//     console.log(this);         // a.window. b.Refers objet itself  c.error
// }

// getStudntDetails1(); 



//console.log(firststudent);
student.getStudentDetails.apply(JohnStudent,["34","2kids"]);

//console.log(student.getStudentDetails.bind(JohnStudent,"34","2kids"));
let newStudentDetails=student.getStudentDetails.bind(RobertStudent,"34","2kids");
newStudentDetails();


// Car
// : 
// "Toyoto"
// DOB
// : 
// "Jan 07 , 1999"
// FatherName
// : 
// "Clerk"
// MotherName
// : 
// "Mery"
// location
// : 
// "UK"
// name
// : 
// "John"



//just check the apply and bind 
//chatgpt , copili