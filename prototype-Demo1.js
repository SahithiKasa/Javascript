var dummyValueOfBankName = "";
function bank(bankname,locatoin){
   //console.log(bank.arguments);
   console.log(this); //window
   //dummyValueOfBankName = bank.arguments[1];
   dummyValueOfBankName = locatoin;
   dummyValueOfBankName=bankname;
}
bank("hdfc","andhra");
console.log(dummyValueOfBankName); // "hdfc"..
//bankname
//console.log(bank.name);
//console.log(bank.length);
//console.log(bank.arguments);








function person(name,age){
    this.name = name;
    this.age = age;
}


person.prototype.sayHello =function() {
    console.log("Hello,my name is " + this.name + " and i am " + this.age + " years old.");
};
let person1=new person("Alice",24);
let person2=new person("Bob",34);

person1.sayHello();
person2.sayHello();





