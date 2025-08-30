function showBookDetails(bookName,authorName,dateofBirth,publishedDate){
    console.log("Book Name   :",  bookName);
    console.log("Author Name :",  authorName);
    console.log("Date Of Birth  :",  dateofBirth);
    console.log("Published Date  :",  publishedDate);

}
showBookDetails("Githanjali","Rabindranath Tagore","May 7,1861",1910)





//optional parameters//

function showBookDetails(bookName,authorName,dateofBirth,publishedDate){
    console.log("Book Name   :",  bookName);
    console.log("Author Name :",  authorName);
    console.log("Date Of Birth  :",  dateofBirth);
    publishedDate=publishedDate||"No DateAvailable";
    console.log("Published Date  :",  publishedDate);

}
showBookDetails("Githanjali","Rabindranath Tagore","May 7,1861")



//Default parameters//
function showBookDetails(bookName,authorName,dateofBirth,publishedDate="Date is not available"){
    console.log("Book Name   :",  bookName);
    console.log("Author Name :",  authorName);
    console.log("Date Of Birth  :",  dateofBirth);

    console.log("Published Date  :",  publishedDate);

}
showBookDetails("Githanjali","Rabindranath Tagore","May 7,1861")

//Rest parameters//
function showBookDetails(bookName,authorName, ...additionalparams){
    console.log("Book Name   :",bookName);
    console.log("Author Name :",authorName);
    console.log("Date Of Birth  :",additionalparams[0]);
    console.log("Published Date  :", additionalparams[1]);

}
showBookDetails("Githanjali","Rabindranath Tagore","May 7,1861",1910)

