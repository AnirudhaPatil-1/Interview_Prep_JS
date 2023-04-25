//methods to search an array - 1. indexOf(), 2. lastIndex(), 3. includes
//1. indexOf()
// syntax: arrName.indexOf(elementName, startIndex)
// startIndex -> default value = 0
// returns -> first found index else -1
//Case sensitive

// 2. lastIndexOf()
// SAME AS indexOf() but differences are:
// syntax -> arrName.lastIndexOf(elementName, endIndex)
// endIndex -> default value = array.length - 1
// returns - last found index or -1
//Case sensitive

// 3. includes()
// same as indexOf() only difference is 
// returns -> boolean value
//Case sensitive

//1. indexOf()
console.log("----------- 1. indexOf() ------- ");

let arr1 = ["one", "two", "three", "four","one", "two", "three", "four"];
//by default startIndex value is 0 
console.log(arr1.indexOf("one")); //0
console.log(arr1.indexOf("one", 3)); //4
//case sensitive
console.log(arr1.indexOf("ONE")); //-1

//2. lastIndexOf()
console.log("----------- 2. lastIndexOf() ------- ");

console.log(arr1.lastIndexOf("one")); //4
console.log(arr1.lastIndexOf("one",3)); //0
console.log(arr1.lastIndexOf("ONE")); //-1

//3. includes()
console.log("----------- 3. includes() ------- ");

console.log(arr1.includes("one")); //true

//find(), findIndex(), filter

//4.find
console.log("----------- 4.find ------- ");

// returns value
//else returns undefined
//has similar syntax as forEach()
let arr10 = [1000, 2000, 3000, 4000, 5000];

const rVal = arr10.find((value, index, arr) => {
    return value > 3000;
});
console.log(rVal); //4000

//5.findIndex()
console.log("----------- 5.findIndex() ------- ");

// returns index
//else returns undefined
const rIndex = arr10.findIndex((value, index, arr) => {
    return value > 3000;
})
console.log(rIndex); //3

//6. filter()
console.log("----------- 6. filter() ------- ");

// returns a new array with elements which return the condition true
// if no element meets condition returns empty array 

const rValue = arr10.filter((element, index, arr, thisArr) => {
    //dont write just "this", it will give error
    return element > 3000;
});
console.log(rValue); //[ 4000, 5000 ]
