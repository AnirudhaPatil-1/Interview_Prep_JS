const genFunction = function* (){
    console.log("before yield");
    yield;
    console.log("after yield");
    yield "yield value"; 
    console.log("after 2nd yield");
}

const gObj = genFunction();
// console.log(gObj); //Object [Generator] {}

// gObj.next(); //before yield
// console.log(gObj.next()); 
 //after 2nd yield
 //{ value: 'yield value', done: false }
// console.log(gObj.next()); //{ value: 'yield value', done: true }
// console.log(gObj.next()); //{ value: 'yield value', done: true }

// 2. FOR OF LOOP
const gObj1 = genFunction();
console.log("2-------------------------");
for(let o of gObj1){
    // console.log(o);
}
/*
OUTPUT -> 
before yield
undefined
after yield
yield value
after 2nd yield
*/

//3. SPREAD OPERATOR
console.log("3-------------------------");
const gObj2 = [...genFunction()];
console.log(gObj2);
/*OUTPUT => 
before yield
after yield
after 2nd yield
[ undefined, 'yield value' ]
*/
