function showCustomerDetails() {
    let CustomerID = 23;
    console.log(CustomerID);


    let CustomerName = "Madan";
    console.log(CustomerName);

}
showCustomerDetails();


function booksAndAuthorDetails() {
    let booksNames = ["Harry Potter Series", "Pride and prejuidice", "The Waves"];
    console.log(booksNames);

    let authorsNames = ["J.K Rowling", "Jane Austen", "Virginia wolf"];
    console.log(authorsNames);

    let authorsYearsOfBirth = [1965, 1775, 1882];
    console.log(authorsYearsOfBirth);
}


booksAndAuthorDetails();



console.log("%c Javascript", "background-color:red");


function redcolor() {
    console.log("%c           ", "backgroud-color:red");
}


function firstSection() {
    console.log("%c         ", "background-color:purple");
    console.log("%c         ", "background-color:purple");
}
firstSection();

function secondSection() {
    console.log("%c         ", "background-color:black");
    console.log("%c         ", "background-color:orange");
}
secondSection();

function thirdSection() {
    console.log("%c         ", "background-color:blue");
    console.log("%c         ", "background-color:grey");
}
thirdSection();