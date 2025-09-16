// Defining a class
class Car {
  constructor(brand, model, color) { //constructor
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
 
  // Method inside class
  startEngine() {
    console.log(`${this.brand} ${this.model} engine started!`);
  }
 
  displayDetails() {
    console.log(`Car: ${this.brand}, Model: ${this.model}, Color: ${this.color}`);
  }
}
 
// Creating objects using the class
let car1 = new Car("Toyota", "Fortuner", "Black");
let car2 = new Car("Hyundai", "i20", "Red");
 
// Using methods
car1.startEngine();     // Toyota Fortuner engine started!
car1.displayDetails();  // Car: Toyota, Model: Fortuner, Color: Black
 
car2.startEngine();     // Hyundai i20 engine started!
car2.displayDetails();  // Car: Hyundai, Model: i20, Color: Red








// A class which is group of relative members


// constrctuor - special method
// mehtod      - function inside of class
// fields      - holds  the data
// properties  - handle the data


class Student
{

     johnRollNumber  = "101";  //field

    // its special method which automatically exeuctes while call the class
    //function vs method

    //i can create the only one constructo whil i creat the class

    //A function which is in a class called method
    constructor(){
        console.log("Constructor has executed!!!!");
        console.log("From constructor" , this.johnRollNumber);
    }


    // getEmployee(){
    //     console.log("Employee Name is : JOhn");
    // }

    //void
    getStudent(){
        console.log(this);
        console.log("From getStudent method" ,this.johnRollNumber );
        console.log("Student Name is : JOhn");
    }

    //non-void
    getJohnGrade(){
        console.log("From getGrade method" ,this.johnRollNumber);
        return "A+";
    }

    // i am going to desing members

    //constructor
    //methods
    //fields   - which can holds the data
    //properties -- you handle the data

}


let student = new Student();
student.getStudent();
let jGrade = student.getJohnGrade();
document.writeln(jGrade);

// first step
// second step


// what is block?? 
// collection of statments

// which ends with semicolon;

// switch(______)
// {


// }



// if(_______)
// {
// }


// for(________)
// {

// }


// foreach(________)
// {

// }