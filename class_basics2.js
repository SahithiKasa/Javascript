class Student{
    _name = "Unknown";

    getStudentName(){
        return this._name;
    }

    //get set; getter and setter

    //modify
    get name(){
       return this._name.toUpperCase();
    }

    //validation
    set name(studentname){
        if(studentname.length > 2){
            //console.log("YOur name is valid");
            this._name = studentname;
        }
        else{
            window.alert(`Please enter valid name .
                 Student name must contains the more than 3 charcters`);
        }
    }


}

let student = new Student();
//console.log(student._name);  // "Un known"

student.name = "car";
console.log(student.name);









class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
 
  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
 
  // Setter for full name
  set fullName(name) {
    let parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1] || ""; // in case only one name is given
  }
 
  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.fullName}`);
  }
}
 
// Create object
let person1 = new Person("Sahithi", "Kasa");
 
// Using getter
console.log(person1.fullName);  // Sahithi Kasa
 
// Using setter
person1.fullName = "Raj Kumar";
 
// After setter, firstName and lastName are updated
console.log(person1.firstName); // Raj
console.log(person1.lastName);  // Kumar
console.log(person1.fullName);  // Raj Kumar
 
// Method call
person1.greet();  // Hello, my name is Raj Kumar
 




// //student._name = "alice";


// let studentName = student.getStudentName();
// console.log(studentName);