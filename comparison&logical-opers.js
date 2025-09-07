//logical and operator//(&&)

let age = 20;
let hasID = true;
 
if (age >= 18 && hasID) {
  console.log("Allowed to enter.");
} else {
  console.log("Not allowed.");
}


//logical or operator(||)//

let hasTicket = false;
let isVIP = true;
 
if (hasTicket || isVIP) {
  console.log("You can watch the movie.");
} else {
  console.log("Access denied.");
}

//logical not(!)//

 let isRaining = false;
 
if (!isRaining) {
  console.log("You can go outside without an umbrella.");
} else {
  console.log("Better carry an umbrella.");
}

 
//combining operators//

let username = "admin";
let password = "1234";
 
if ((username === "admin" && password === "1234") || username === "superuser") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

//real worls example using all three logical operators//


let isLoggedIn = true;
let hasItemsInCart = true;
let hasCoupon = false;
let isPrimeMember = true;
let balance = 200;
let totalPrice = 150;
 
// Check if user can place the order
if (isLoggedIn && hasItemsInCart && (balance >= totalPrice)) {
  
  // Extra discount for Prime or Coupon users
  if (isPrimeMember || hasCoupon) {
    console.log("Order placed successfully with discount!");
  } else {
    console.log("Order placed successfully!");
  }
 
} else {
  if (!isLoggedIn) {
    console.log("Please log in to continue.");
  } else if (!hasItemsInCart) {
    console.log("Your cart is empty.");
  } else if (!(balance >= totalPrice)) {
    console.log("Insufficient balance.");
  } else {
    console.log("Order cannot be placed.");
  }
}
 
 