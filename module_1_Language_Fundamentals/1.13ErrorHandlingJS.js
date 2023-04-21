const { STATEMENT_PAPER } = require("excel4node/distribution/lib/types/paperSize");
const { closeSync } = require("fs");

// 1.
let a = 10;
console.log(`value of a: ${a}`);
letb = 20;
// console.log(`value of b: ${b}`); //throws error: ReferenceError: b is not defined


//2. Use try catch block to catch errors
console.log("-------------2. try catch block ----------------");
try{
    let a = 10;
    console.log(`value of a: ${a}`);
    letb = 20;
    console.log(`value of b: ${b}`);
}catch(err){
    //error object is always passed with the catch block
    console.log(err);
    //error has properties like name, message and stack
    console.log("------------------");
    console.log(`error name: ${err.name}`);
    console.log(`error message: ${err.message}`);
    console.log(`error stack: ${err.stack}`);
}


// 3. use "throw" to throw error or custom error

//4. finally
console.log("---------4. finally ------------");
//4.1
try{
    //statement
}catch(err){
    // statement
}finally{
    // statement
}

//4.2
try{
    // statement
}finally{
    // statement
}

let c = 10;
try{
    if(c < 15){
        throw new TypeError("Invalid Age");
    }else{
        console.log("valid age");
    }
}catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack); //error stack contains both err.name, err.message and other details
}

// 4.2 finally block catch block

let d = 20;
try{
    if(d < 25){
        throw new TypeError("Invalid age");
    }else{
        console.log("valid age");
    }
}catch(err){
    console.log(err);
}
finally{
    console.log("finally block code");
}

