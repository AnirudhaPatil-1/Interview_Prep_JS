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

// 4. Normal implementation of ITERATOR
console.log("4.------------- 4. Normal implementation of ITERATOR -------------------");
const obj = {
    start: 10,
    end: 15,
    [Symbol.iterator]: function(){
        const itr = {
            next(){
                if(obj.start <= obj.end){
                    return {value: obj.start++, done: false};
                }else{
                    return {done: true};
                }
            }
        }
        return itr;
    }
}

for(let i of obj){
    console.log(i);
}
/*OUTPUT -> 
10
11
12
13
14
15
*/

// 5. GENERATORS work well with ITERATOR
console.log("5.-------------5. GENERATORS work well with ITERATOR-------------------");
let obj1 = {
    start: 20,
    end: 25,
    [Symbol.iterator]: function*(){
        // for(let counter = obj1.start; obj1.start <= obj1.end; counter++){ 
        // MISTAKE -> USE this.start instead of obj1.start
        for(let counter = this.start; counter <= this.end; counter++){
            yield counter;
        }
    }
}

for(let i of obj1){
    console.log(i)
}
/*OUTPUT -> 
20
21
22
23
24
25
*/ 

//6. ES6 syntax
console.log("-------------6. ES6 syntax-------------------");
let obj2 = {
    start: 30,
    end: 35,
    *[Symbol.iterator] (){
        for(let counter = this.start; counter <= this.end; counter++){
            yield counter;
        }
    }
}

console.log(...obj2); //30 31 32 33 34 35
console.log([...obj2]); //[ 30, 31, 32, 33, 34, 35 ]