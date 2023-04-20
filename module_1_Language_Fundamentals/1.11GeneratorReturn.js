// 1. next() method
console.log("-----1. next() method------");
function* genFunc(){
    yield "one";
    yield "two";
}

const genObj = genFunc();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
/* OUTPUT -> 
{ value: 'one', done: false }
{ value: 'two', done: false }
{ value: undefined, done: true }
*/

// 2. RETURN METHOD
console.log("----2. return() method");
const genObj1 = genFunc();
console.log(genObj1.next());
console.log(genObj1.return());
console.log(genObj1.next());
/*OUTPUT -> 
{ value: 'one', done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/

// 3. return() method with value
console.log("---3. return() method with value---");
const genObj2 = genFunc(); 
console.log(genObj.return("condition done")); //{ value: 'condition done', done: true }

