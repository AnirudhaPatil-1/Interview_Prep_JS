// Object literal
// this
// call, apply , bind
// class, class expression and static members



// obj and dynamic value
let key = "masterKey";
// let obj = {
//     [key]: "MasterValue",
//     key1: "value1", 
//     key2: "value2"
// }
// console.log(obj.key1);
// console.log(obj.key);
// console.log(obj);

let obj1 = {};
obj1.value = "adding value";
// console.log(obj1);

//this
// console.log(this);

function f1(){
    // console.log(this);
}
f1();

//call, apply and bind
console.log("--------call, apply and bind---------");

let obj2 = {
    key1: "value1", 
    key2: "value2",
    func1(a, b){
        console.log(a, b);
    },
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}
// console.log(obj2);


//call
function func1(a, b){
    console.log(a, b);
    console.log(this);
}

// func1(5, 6); // this ->global object
// func1.call(obj2, 5, 6); // this -> obj

//apply

//bind

const obj = {
    name: "X",
    data: {
        price: 10,
    }
}
const newobj = {...obj};
// console.log(newobj);

obj.data.price = 100;
console.log(newobj.data.price);

console.log(null == 0);


//class
// class hero = {

// }


