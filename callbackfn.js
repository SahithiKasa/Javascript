function sayHello(callbackfn){
    callbackfn(20,30);   //we have to use the method signature because callbackfn is a ananymous fn//
}

sayHello(function(a,b){
    console.log("Hello world");
    console.log(a);
    console.log(b);

});

setTimeout(function(){
    console.log("Test");
},3000);

