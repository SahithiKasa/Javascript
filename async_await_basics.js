
//async keyword is used to define the asynchronous function//


//when we keep the asunc keyword in a func it returns the promise//


async function getAuthorDetails() {
    return "Arundati rai";

} 

//console.log(getAuthorDetails);  //func will print//
console.log(getAuthorDetails());   //it executes the value//
  let author=getAuthorDetails();
  author.then((authorname)=>{

  })
  console.log(author);
 
    
