function getBookDetails(bookName,authorName){
    bookDetails = "Book Name  :"  + bookName + "  " +"Author Name  : "   + authorName;
    return bookDetails;
}
    
//console.log(getBookDetails("Gitanjali","Rabindranath tagore"));
let getInformationOfBook = getBookDetails("Gitanjali", "Rabindranath tagore");
console.log(getInformationOfBook);





//Non-Return function//

function showMessage(){
    console.log("This is a non return type fn");

}
showMessage();