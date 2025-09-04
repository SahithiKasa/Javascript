// global scope

//this.authors=["Rabindranath Tagore","Rolling"];
//this. books=["Geetanjali","HarryPotter"];
// getBookDetails=function(){
//        return books;
//}
//var achievements=["Nobel prize","Oscaraward"];
//console.log(this);

// we can also use the this keyword in the objectv scope ,and it is accessible in the object iitself

//var obj={
//    name : "Rabindranath Tagore",
//    books : ["Gitanjali","Harrypotter series"],
//    achievements : ["Nobelprize","oscaraward"],
//   getBookDetails : function(){
//        console.log(this);
//        console.log(this.achievements);
//        console.log(this.name);

//    }

//}
//obj.getBookDetails();

//using this keyword in constructor

function getAuthorBookDetails(authorName, bookList) {
    this.name = authorName;
    this.books = bookList;
    this.achievements = ["NobelPrize", "Padmasriaward"];
    console.log(this);
}
new getAuthorBookDetails("Rabindranath Tagore", ["Gitanjali", "The Home of wings"]);

//we can also use this keyword in arrow functions
var obj = {
    studentname: "John",
    age: 15,
    getStudentdetails: () => {
        let localthis = this;
        console.log("student level context", localthis);
        console.log(localthis.age);
    },

    getteacherdetails: function () {
        let localthis = this;  // refers object itself
        console.log("teacher level context", localthis);
        console.log(localthis.achivements);
    }
}

obj.getStudentdetails();
obj.getteacherdetails();
