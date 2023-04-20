// 1. call generator function 
console.log("---  1. call generator function & next() method ---")
function* genFunc1(){
    console.log("hello");
};

function* genFunc2(){
    let genObj = genFunc1();
    genObj.next();
};

let genObj2 = genFunc2();
genObj2.next(); //hello

// 2. calling gen function from another gen function using yield*
console.log("---2. calling gen function directly using yield*---")

function* genFunction1(){
    console.log("hello");
}

function* genFunction2(){
    yield* genFunction1();
}

const genFunctionObj2 = genFunction1();
genFunctionObj2.next();

// 3. calling one genFunction from another genFunction or implementing recursion using genFunction
console.log("---3. recursion using genFunction -yield*---");



function* factorial(){
    //if statement
    
        //exit statement
        yield* factorial();
}

