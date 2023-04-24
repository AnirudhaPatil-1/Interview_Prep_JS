let arr = [1, 2, 3, 4, 5];
//1.  push  and Unshift
console.log("----- 1. push & Upshift ----");
// push adds element to end of array & returns new array length
// Upshift adds element to the start of array and returns new array lenght
console.log(arr.push("pushEle")); //6
console.log(arr); //[ 1, 2, 3, 4, 5, 'pushEle' ]
console.log(arr.unshift("unshiftEle")); //7
console.log(arr); //[ 'unshiftEle', 1, 2, 3, 4, 5, 'pushEle' ]

//2. pop and shift 
console.log("----- 2. pop and shift----");
//used to remove elements from the arr
//pop eliminates the element from the end & returns popped element
//shift eliminates the element from the start & returns popped element
console.log(arr.pop()); //pushEle
console.log(arr); //[ 'unshiftEle', 1, 2, 3, 4, 5 ]
console.log(arr.shift()); //unshiftEle
console.log(arr); //[ 1, 2, 3, 4, 5 ]

//3. Splice
console.log("----- 3. Splice----");
// used to add, insert, replace, remove elements in an array and returns the removed values
// syntax arr.splice(index, no of elements);
// console.log(arr.splice(2)); //removes elements from 2nd index till end ie output -> [ 3, 4, 5 ]
// console.log(arr); //[ 1, 2 ] 

//giving range 
console.log(arr.splice(2, 1)); //[3];
console.log(arr); //[ 1, 2, 4, 5 ]

let arr3 = [1, 2, 3, 4, 5];
//remove elements and replace
console.log(arr3.splice(0, 1, "One")); //[1]
console.log(arr3); //[ 'One', 2, 3, 4, 5 ]

//remove nothing, add multiple elements
console.log(arr3.splice(1, 0, "six, seven"));
console.log(arr3);

// 4. at start of arr and end of arr
console.log("----- 4. at start of arr and end of arr ----");

let arr4 = [1, 2, 3, 4, 5];
// end of array
console.log(arr4.splice(arr4.length, 0, "six")); //[]
console.log(arr4); //[ 1, 2, 3, 4, 5, 'six' ]

// start of array
console.log(arr4.splice(0, 0, "startValue")); //[]
console.log(arr4); //[ 'startValue', 1, 2, 3, 4, 5, 'six' ]

//*** DISADVANTAGE - MUTATES THE ORIGINAL ARRAY 