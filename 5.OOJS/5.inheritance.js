//String is a inbuilt class in JS

const { closeSync } = require("fs");

//"extends" is the keyword used in ES6 to inherit the class
class Child extends String{
    //custom method -> eg noc ie no of characters
    noc(str){
        console.log(str.length);
    }
}

const obj1 = new Child("Hello World");
console.log(obj1.toLowerCase()); //hello world
obj1.noc("calculating the length of string using custom method created in  custom class"); //77


console.log("-------------inheriting methods and members----------");
class Parent{
    constructor( para1){
        console.log("Parent Class constructor running");
        console.log(para1); //no need for this.para1
        //but if I want to store the para1 in Parent class I need to use para1 = this.para1
        // para1 = this.para1; //wrong way -error
        this.para1 = para1;
        console.log(para1*para1);
    }
    parentMethod(){
        console.log(`Parent Method running and has value: ${this.para1}`);
    }
}

class Child1 extends Parent{

}

const objChild = new Child1(2); 
/*output->
Parent Class constructor running
2
4
Parent Method running and has value: 2
*/
objChild.parentMethod(); //Parent Method running


console.log("-----------------------two constructors---------");

class Parent2{
    constructor(){
        console.log("Parent2 constructor running");
    }
}

class Child2 extends Parent2{
    constructor(){
        //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        console.log("Child2 constructor running");
    }

}

let obj2 = new Child2();










