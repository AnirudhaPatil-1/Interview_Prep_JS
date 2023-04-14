// 1. 
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 5, 6, 7, 8];
console.log(arr2);

let arr3 = [...arr1, ...arr2];
console.log(arr3);

//2.
let arr4 = [1, 2, 3, 4, 5, 6, 9];
console.log(Math.max(...arr4));

