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


