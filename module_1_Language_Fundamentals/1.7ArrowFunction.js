let Object = {
    sum: function (){
        console.log(this);
    }
}

//regular function
function fun1(){
    console.log("hello");
};
fun1();

//arrow function from normal function
let fun11 = ()=>{
    console.log("hello11");
}
fun11();


// function Expression
let fun2 =function (){
    console.log("hello1");
}
fun2();

//arrow function from function expression
let fun22 = () => {
    console.log("hello22");
}
fun22();

//Arrow Function
let fun3 = function(){
    console.log("hellow3");
}
fun3();

//summary
function fun4(){
    //code
}

fun5 = function(){
    // code
}

let fun6 = () => {
    // code
}

let sum = function(a){
    console.log(a);
}
sum(5);

let sum1 = (a) => {
    console.log(a);
}
sum(5);

//can also be written as
let sum2 = a => {
    console.log(a);
}
sum(5);

sum(5, 6);

let sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(5, 6));

//when arrow function just one statement and that too return statement - no need of curly braces
let sum4 = (a, b) => a + b;
console.log(sum4(4, 5));