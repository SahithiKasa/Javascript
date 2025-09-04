//if else
let temperature = 20;
if (temperature > 25) {
    console.log("It's hot outside");
}
else {
    console.log("It's cool outside");
}



//if-else if-else
//let marks = 78;

//if (marks >= 90) {

//    console.log("Grade: A");

//}
//else if (marks >= 75) {

//    console.log("Grade: B");
//}

//else if (marks >= 50) {

//    console.log("Grade: C");

//} else {
  //  console.log("Grade: F");


//}






//switch statement



let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//example using the conditional statements//

let studentName = "Sahithi";
let marks = 85;     // out of 100
let attendance = 92; // percentage
let activities = true; // participated in extra activities or not
 
console.log(" Student Result for: " + studentName);
 
// Step 1: Grade based on marks
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F (Fail)");
}
 
// Step 2: Pass/Fail based on marks
if (marks >= 50) {
  console.log("Status: Passed ✅");
} else {
  console.log("Status: Failed ❌");
}
 
// Step 3: Attendance check
if (attendance >= 90) {
  console.log("Attendance: Excellent");
} else if (attendance >= 75) {
  console.log("Attendance: Good");
} else if (attendance >= 50) {
  console.log("Attendance: Needs Improvement");
} else {
  console.log("Attendance: Very Poor");
}
 
// Step 4: Scholarship eligibility
if (marks >= 85 && attendance >= 90) {
  console.log(" Eligible for Merit Scholarship!");
} else if (marks >= 70 && activities) {
  console.log(" Eligible for Activity Scholarship!");
} else {
  console.log("Not eligible for scholarship.");
}
 
