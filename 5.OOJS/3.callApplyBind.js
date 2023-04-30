// this cannot be assigned value

function test(a, b){
    // this = obj; //ERROR -> SyntaxError: Invalid left-hand side in assignment
    console.log(this);
    console.log(a, b);
}

let obj = {
    a: 5
}
// test(obj);

//AS this cannot be assigned we use call apply bind method

test.call(obj, 5, 6); 
/*{ a: 5 }
5 6
*/
// syntax -> .call(thisObj, arguments)

// CALL is used to change the reference or context or value of "this" object

//APPLY METHOD
console.log("------------apply method------");
//Syntax ->  .apply(thisArg, array)
// takes two arguments - 1. thisArg 2. array

test.apply(obj, [2, 3,4]); 
/*
{ a: 5 }
2 3
*/

//BIND  
console.log("------------BIND method------");
//similar to call 
//difference - call -> changes ref and executes
//bind -> changes ref but does not execute. act like function expression
//.bind(thisArg, arguments)
test.bind(obj, 5, 6); // does not execute the function as acts like function expression
let fe = test.bind(obj, 7, 8);
fe();
/*output -> 
{ a: 5 }
7 8
*/


