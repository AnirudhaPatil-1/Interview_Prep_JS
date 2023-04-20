//throw() method

function* genFunc(){
    try{
        yield "one";
        yield "two";
    }catch(err){
        console.log("Error: "+ err);
    }
}

// 1.
console.log("------1. throw() method -----------");
const genObj = genFunc();
console.log(genObj.next());
console.log(genObj.throw(""));
//throw() method points and throws error at the finally() yield
/*
{ value: 'one', done: false }
Error: undefined
{ value: undefined, done: true }
*/
