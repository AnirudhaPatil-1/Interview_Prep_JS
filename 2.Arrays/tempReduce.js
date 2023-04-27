//reduce

//1. accumulator
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, ele, idx) => {
    // return accumulator += ele; //sum -> 15
    return accumulator * ele; //product -> 120
    
});
console.log(arr);
console.log(sum);



//2.  flattening a array
console.log("----------2.  flattening a array-----------")
let arr2 = [
    [1, 2],
    [3, 4],
    [5, 6],
]

let  flatArr = arr2.reduce((acc, ele, idx) => {
    return acc.concat(ele);
});
console.log(flatArr); //[ 1, 2, 3, 4, 5, 6 ]



