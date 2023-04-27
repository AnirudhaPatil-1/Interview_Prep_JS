//Map
//1. basic syntax
arr1 = [1, 2, 3, 4, 5];
let sqArr = arr1. map((element, index) => {
    return element * element;
});

console.log(sqArr); //[ 1, 4, 9, 16, 25 ]
console.log(arr1);

//2. array of an object
console.log("-----2. array of an object-------");
let arrObj = [
    {pName:"A", productPrice:1000},
    {pName:"B", productPrice:2000},
    {pName:"C", productPrice:3000},
    {pName:"D", productPrice:4000},
]

let eleMap = arrObj.map((ele, idx) => {
    return ele.productPrice;
});
console.log(eleMap);
console.log(arrObj);



