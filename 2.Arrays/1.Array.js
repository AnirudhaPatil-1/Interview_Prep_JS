//1. Array syntax
let arr = [];
let arr1 = [4, 5, 6];
let arr2 = ["hello", 10, true];

console.log(arr);
console.log(arr1);
console.log(arr2);

console.log(arr2.length);
console.log(arr2[0]);
console.log(arr2[arr2.length - 1]);

//2. array  having elements as object literal
console.log("------------- 2. array  having elements as object literal ------------------");
let arrObj = [
    {pcode: 1, pName: "Apple"},
    {pcode: 2, pName: "Banana"},
    {pcode: 3, pName: "Orange"}
]

console.log(arrObj);
console.log(arrObj[0]); //{ pcode: 1, pName: 'Apple' }
console.log(arrObj[0].pName); //Apple

//3. array traversal
console.log("------------- 3  array traversal - for in - for of ------------------");

let arr4 = ["ES5", "ES6", "ES7", "ES8"];
for(let i = 0; i < arr4.length; i++){
    console.log(arr4[i]);
}
console.log(arr4);

//for in - gives index
for(let i in arr4){
    console.log(i);
}

//for of - gives value
for(let i of arr4){
    console.log(i) 
}


/*4. forEach(callbackFunction(value, index, arr, this){

})
*/
console.log("----------- 4. forEach -------------");
arr4.forEach(function(value, index, arr, address){
    console.log(value, index, arr);


})

//5. forEach with arrow function -> gives this value as -> undefined
arr4.forEach((value, index, arr, thisArr) => {
    console.log(value, index, arr, thisArr);
})

//forEach LOOP CANNOT BE TERMINATED -> if you try to terminate it, it will give error