//reduce method
//similar syntax as forEach(), map() 
//difference is accumulator,  
//used for eg, product, sum, result

let arr1 = [ 1, 2, 3, 4, 5];
let sum1 = arr1.reduce((accumulator, ele, index, arr) =>{
    return accumulator + ele;
});
console.log(sum1); //15

let sum2 = arr1.reduce((accumulator, ele, index, arr) =>{
    return accumulator + ele;
}, 10); //initial value of accumulator given: 10
console.log(sum2); //25

let sum3 = arr1.reduce((accumulator, ele, index, arr) =>{
    return accumulator + ele;
}, {}); //initial accumulator value is object
console.log(sum3); //[object Object]12345

let sum4 = arr1.reduce((accumulator, ele, index, arr) => {
    return accumulator + ele;
}, []);
console.log(sum4); //12345


//calculate average value
let arr2 = [1, 2, 3, 4, 5, 6];
let avg = arr2.reduce((accumulator, ele, index, arr) => {
    accumulator += ele;
    if(index === arr2.length - 1){
        return accumulator /arr2.length;
    }
    return accumulator;
})
console.log(avg); //3.5

//reduceRight()
//traverses from arr.length -1 to 0th index i.e right to left traversal


//flatten an array
let multiArray = [
    
    [1, 2],
    [3, 4],
    [5, 6]
];

let flattenArr = multiArray.reduce((accumulator, ele, index, arr) => {
    return accumulator.concat(ele);
})
console.log(flattenArr); //[ 1, 2, 3, 4, 5, 6 ]

let flattenArr1 = multiArray.reduce((accumulator, ele, index, arr) => {
    return accumulator.concat(ele);
}, []); //good practice -> initialize with required data structure
console.log(flattenArr1); //[ 1, 2, 3, 4, 5, 6 ]


//sum of employee salary
const employees = [
    {eNo: 1001, salary: 2000},
    {eNo: 1002, salary: 3000},
    {eNo: 1003, salary: 4000},
    {eNo: 1004, salary: 5000}
];

const salarySum = employees.reduce((accumulator, ele) => {
    return accumulator += ele.salary;
});

console.log(salarySum); //[object Object]300040005000
//ERROR -> this happens because the accumulator is initialized with the start object
//SOLUTION -> initialize the accumulator with 0

const salarySum1 = employees.reduce((accumulator, ele, index, arr) => {
    return accumulator += ele.salary;
}, 0);
console.log(salarySum1); //14000 
