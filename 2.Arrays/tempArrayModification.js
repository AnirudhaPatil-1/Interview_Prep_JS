// 1.2 array modification 
// - push(), unshift(), pop(), shift(), splice()

let arr = [5, 6, 7, 8, 9];
//1. push()
console.log("push");
console.log(arr.length); //5
console.log(arr.push(2)); //6 - returned value is array length
console.log(arr); //[ 5, 6, 7, 8, 9, 2 ]

//2. unshift()
console.log(arr.unshift(10)); //7
console.log(arr); // [10, 5, 6, 7,8, 9, 2]

//3. pop()
console.log(arr.pop()); //2 - eliminated element returned
console.log(arr);

//4. shift()
console.log("shift");
console.log(arr.shift()); //10 - returned value
console.log(arr); //[ 5, 6, 7, 8, 9 ]

//5. splice
console.log(arr);
console.log("splice");


// console.log(arr.splice(0, 2));
console.log(arr); //[ 5, 6, 7, 8, 9 ]
console.log(arr.splice(0, 2, "four")); //[ 5, 6 ]
console.log(arr); //[ 'four', 7, 8, 9 ]

let arr1 = [1, 2, 3, 4, 5];
console.log("slice");
console.log(arr1); //[ 1, 2, 3, 4, 5 ]
console.log(arr1.slice(0, 2, "one")); //[ 1, 2 ]
console.log(arr1); //[ 1, 2, 3, 4, 5 ]