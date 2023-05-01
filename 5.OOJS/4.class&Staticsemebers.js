//class
console.log("---------class--------");
let getData = "showData";
class House{
    constructor(nDoors, windows){
        // console.log("constructor called");
        this.nDoors =  nDoors;
        this.windows = windows;
        console.log(nDoors, windows);
    }
    [getData] (){ //dynamic method
        console.log(this.nDoors, this.windows);
    }
}

//constructor is a method which is executed immediately after instance of a class is created

// const obj = new House(); //constructor called
// const obj1 = new House(); //constructor called


const obj2 = new House(5, 6); //5, 6
const obj3 = new House(2, 3); //2, 3
// obj2.showData(); //5, 6
// obj3.showData(); //2, 3

//Static 
console.log("-----------static ----------------");
//use the method or property(member) inside a class without instance
class bigHouse {
    static window = 2;
    static test(){
        // console.log(window); //gives error -> ReferenceError: window is not defined
        console.log(bigHouse.window); //2
        console.log(this.window); //2 -> this refers to the class "bigHouse"
    }
    static test1(){
        console.log("test1 running");
        this.test();
    }
}

console.log(bigHouse.window); //2
bigHouse.test();
bigHouse.test1(); 
/*output 
t   est1 running
2
2
*/

//ES5 Syntax

function funHOuse(windows){
    console.log("funHOuse running");
    this.windows = windows;
    console.log(windows);
}

const objFun1 = new funHOuse(5); 
/*output -> 
funHOuse running
5
*/

//CLASS EXPRESSION 

let building = class{
    window = 10;
    // console.log(this.window); // gives error
    constructor(){
        console.log(this.window);
    }
}

const building1 = new building; //10
