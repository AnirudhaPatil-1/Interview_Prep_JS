// 1
function outer1(){
    // console.log("outer function");
    function inner1(){
        console.log("inner function");
    }
    return inner1;
}

const cl1 = outer1();
// this means
cl1();


// 2
function outer2 (){
    return function inner2(){
        console.log("inner function");
    }
}

const cl2 = outer2();
cl2();


// 3
const outer3 = () => {
    return () => {
        console.log("inner function");
    }
}

const cl3 = outer3();
cl3();

// closure
//1

const counter = () => {
    let counter = 0;
    counter++;
    return counter;
}

console.log(counter());  //1
console.log(counter());  //1
console.log(counter());  //1

//2
const addCounter = () => {
    let counter = 0;
    return () => {
        counter++;
        return counter;
    }
}

const cl = addCounter();
console.log(cl()); //1
console.log(cl()); //2
console.log(cl()); //3
