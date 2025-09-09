//for loop//
let marks = [85, 90, 78, 92, 88];
let total = 0;

for (let i = 0; i < marks.length; i++) {

    console.log("Adding mark of student", i + 1, ":", marks[i]);

    total += marks[i];
}
let average = total / marks.length;

console.log("Total Marks:", total);

console.log("Average Marks:", average);




//while loop//
let num = 1;
let sum = 0;

while (num <= 10) {
    sum = sum + num;

    num++;
}
console.log("Sum of first numbers:", sum);



//do while loop//
let number = 6;
let i = 1;

do {
    console.log(number + "X" + i + "=" + (number * i));

    i++;
}
while (i <= 10);




//for of loop//
let students = [
    { name: "Sahithi", marks: 85 },
    { name: "Raj", marks: 92 },
    { name: "Priya", marks: 78 }
];
for (let student of students) {
    console.log("Student:", student.name, "| Marks:", student.marks);

    if (student.marks >= 80) {
        console.log(student.name, "Passed");
    } else {


        console.log(student.name, "Failed");


    }
}


//for in loop//
var bookDetails = {
    bookName: "Geetanjali",
    bookAuthor: "Rabindranath Tagore",
    bookPublisher: "Rupa &co",
    bookPrice: 250.00,
    bookEdition: "1st",
    bookISBN: "1234567890",
    bookPunlicationDate: "2018-01-01",
};
for (var property in bookDetails) {
    console.log(`Property Name : ${property}`);


    console.log(`value of Property : ${bookDetails[property]}`);//Take the key stored inside propety 
    // and fetch that value from bookDetails object//

}


