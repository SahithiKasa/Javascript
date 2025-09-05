function Car(brandName,modelName,color) {
    this.brand= brandName;
    this.model=modelName;
    this.color=color;
    console.log(this);

}
 
Car.prototype.getCarInfo=function() {
    console.log(`Car Brand is ${this.brand} and model is ${this.model}`);
    console.log(this);

}

Car.prototype.getDriveInfo=function(){
    console.log(`Car Brand is ${this.brand} and model is ${this.model}`);
    console.log(this);
}
let car1=new Car("Tayoto","camry","Red");
car1.getCarInfo();
car1.getDriveInfo();


let car2=new Car("Honda","civic","Yellow");
car2.getCarInfo();
car2.getDriveInfo();