// isFinite() method
// checks whether the value is number i.e (between -Infinity & Infinity) and checks NaN

console.log("1. ---------------------------------------");

let a = 5;
let b = "value";

console.log(isFinite(a*b));
console.log(isFinite(5*4));
console.log(isFinite(Number.MAX_VALUE*3));
console.log(isFinite(Infinity));

// 2.  QUESTIONS
console.log("2. ---------------------------------------");

// Q.1) What will be the output of the below statement?
console.log(NaN==NaN);
// Q.2) What is the difference between isNaN() and isFinite() method?
