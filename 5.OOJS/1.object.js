let obj = {};
// console.log(obj);

obj.pCode = 1001;
obj.pName = "Apple";
obj.getData = function(){
    console.log(obj.pCode, obj.pName);
}

console.log(obj); 
//{ pCode: 1001, pName: 'Apple', getData: [Function (anonymous)] }

//general way 
let tV = "pCode" //dynamic variable key
let obj1 = {
    // tV: 1001, //gives error
    [tV]: 100, //dynamic variable key
    pName: "Apple",
    // getData: function(){
    // getData (){
        ["get" + "Data"] (){
        console.log(obj1.pCode, obj1.pName);
    }
}

console.log(obj1); 
/*
{
  pCode: 1001,
  pName: 'Apple',
  getData: [Function: getData]
}
*/
obj1.getData(); //1001 Apple


//short hand
let pCode1 = 2002;
let pName1 = "Banana";

obj = {
    // pCode1: pCode1,
    // pName1: pName1
    //below is short hand for property
    pCode1,
    pName1
}
console.log(obj); //{ pCode1: 2002, pName1: 'Banana' }

//assign method
obj = {a: "first"};
let obj2 = obj;
obj2.a = "second";
console.log(obj); //{ a: 'second' }

let obj3 = Object.assign({}, obj);
obj3.a = "third";
console.log(obj); //{ a: 'second' }