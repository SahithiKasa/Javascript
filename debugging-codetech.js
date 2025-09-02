//let foodItemName= "Pizza";
//console.log(foodItemName);




//function foodApp(item){
//    console.log("FoodApplication");
  //  console.log("Fooditem is",item);
   // logMessage(item);
//}

//function logMessage(item) {
//    console.log("You are ordered the" ,item)
//}
//foodApp(foodItemName);

//let deliveryLocation="Hyderabad";
//console.log(deliveryLocation);


//let estimationTime="20 mins";
//console.log(estimationTime);

//let isDeliveryAvailable=true;
//console.log(isDeliveryAvailable);




function getFullName(firstName,lastName){
    let fullName = firstName + " " + lastName;

    return fullName;

}
function greetUser(firstName,lastName){


    let message="Hello"  + fullName + "!Welcome to javascript debugging.";
    return message;

}
function showMessage(firstName,lastName){
    let fullName=getFullName(firstName,lastName);
let greeting=greetUser(fullName);
return greeting;
}

let finalMessage=showMessage("Sahithi","Kasa");

console.log(finalMessage);
