// constrctuor - 
// special method automaticaly executs when you call by using new operator

// mehtod      - function inside of class
// fields      - holds  the data
// properties  - handle the data


// myname;
// console.log(myname);  //undefined


class Student{

    _sname;   //field
    _age;
    
    constructor(sname , studentage){
      this._sname = sname;
      this._age   = studentage
    }


    getStudentDetails(){
        return `Studentname is ${this._sname}  and student age is ${this._age}`
    }

}

let student = new Student("John smith" , 20);
let sDetails = student.getStudentDetails();
console.log(sDetails);


let student1  = new Student("Robert Junior" , 18);
let sDetails1 = student1.getStudentDetails();
console.log(sDetails1);


let student2  = new Student("Rabindra" , 16);
let sDetails2 = student2.getStudentDetails();
console.log(sDetails2);

//by using instance you call the member
//method , field or property
// console.log(student._sname);
// console.log(student._age);






class Stud {
  // Fields (properties)
  name;
  rollNumber;
  grade;
 
  // Constructor to initialize object
  constructor(name, rollNumber, grade) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
  }
 
  // Method to display student details
  displayInfo() {
    console.log(`Name: ${this.name}, Roll No: ${this.rollNumber}, Grade: ${this.grade}`);
  }
 
  // Method to check if the student passed
  hasPassed() {
    if (this.grade >= 40) {
      console.log(`${this.name} has passed `);
    } else {
      console.log(`${this.name} has failed `);
    }
  }
}
 
// Creating objects using the constructor
let stud1 = new Stud("Sahithi", 101, 85);
let stud2 = new Stud("Raj", 102, 35);
 
// Using methods
stud1.displayInfo();  // Name: Sahithi, Roll No: 101, Grade: 85
stud1.hasPassed();    // Sahithi has passed ✅
 
stud2.displayInfo();  // Name: Raj, Roll No: 102, Grade: 35
stud2.hasPassed();    // Raj has failed 
 