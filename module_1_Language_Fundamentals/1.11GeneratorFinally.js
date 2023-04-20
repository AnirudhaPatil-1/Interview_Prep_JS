function* genFunc(){
    try{
        yield "one";
        yield "two";
    }finally{
        yield "finally";
    }
}

// 1. 
console.log("-------------1. with next() method");
const genObj1 = genFunc();
console.log(genObj1.next());
console.log(genObj1.next());

/*output -> 
{ value: 'one', done: false }
{ value: 'two', done: false }
*/

// 2.
console.log("--------------2 with return() method----------------");
const genObj2 = genFunc();
console.log(genObj2.next());
console.log(genObj2.return(" return method used"));
/* 
{ value: 'one', done: false }
{ value: 'finally', done: false }
*/
