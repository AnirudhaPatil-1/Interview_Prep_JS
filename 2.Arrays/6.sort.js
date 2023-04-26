//sort

const { closeSync } = require("fs");

//1. sort ascending
console.log(" ---------- 1. sort ascending -----------");

let products = ["banana", "orange", "grapes", "apple"];
let sArr = products.sort();
console.log(sArr); //[ 'apple', 'banana', 'grapes', 'orange' ]
console.log(products); //[ 'apple', 'banana', 'grapes', 'orange' ]

//2. sort descending
console.log("---------------2. sort descending -----------");

let products1 = ["banana", "orange", "grapes", "apple"];
products1.sort(function(a, b){
    console.log(a, b);

});
console.log(products1); 
/*output -> 
orange banana
grapes orange
apple grapes
[ 'banana', 'orange', 'grapes', 'apple' ]
*/


products1.sort(function(a, b){
    if(a < b){
        return -1;
    }
    if(a == b){
        return 0;
    }
    if(a > b){
        return 1;
    }
});
// sorts array in the ascending manner
console.log(products1); //[ 'apple', 'banana', 'grapes', 'orange' ]

//4.sort an array in descending order 
console.log("------------4.sort an array in descending order -------");
products1.sort(function(a, b){
    if(a< b){
        return 1;
    }
    if(a == b){
        return 0;
    }
    if(a > b){
        return -1;
    }
})
console.log(products1); //[ 'orange', 'grapes', 'banana', 'apple' ]

//5. sort for numberic array give wrong sorting
console.log("-----5. not to use sort for numberic array");

let nArr = [45, 23, 10, 89, 5];
console.log(nArr.sort()); //[ 10, 23, 45, 5, 89 ]  wrong sorting as it compares numbers using unicode
// NOTE : USE SORT WITH COMPARE FUNCTION for numberic array

//ascending sort
nArr.sort(function(a, b){
    if(a < b){
        return -1;
    }
    if(a == b){
        return 0;
    }
    if(a > b){
        return 1;
    }
})
console.log(nArr); //[ 5, 10, 23, 45, 89 ]

//descending sort
nArr.sort(function(a, b){
    if(a < b){
        return  1;
    }
    if(a == b){
        return 0; 
    }
    if(a > b){
        return -1;
    }
})
console.log(nArr); //[ 89, 45, 23, 10, 5 ]

//NOTE:  if the array contains undefined as value inside the array 
//sort will move the undefined to the end of array

//7. sorting an object
console.log("------------7. sorting an object---------");
const employees = [
    {eNo: 1001, salary: 3000},
    {eNo: 1002, salary: 2200},
    {eNo: 1003, salary: 3400},
    {eNo: 1004, salary: 6000}
]

employees.sort(function(a, b){
    if(a.salary < b.salary){
        return -1;
    }
    if(a.salary == b.salary){
        return 0;
    }
    if(a.salary > b.salary){
        return 1;
    }
});
console.log(employees);
/* OUTPUT ->
[
  { eNo: 1002, salary: 2200 },
  { eNo: 1001, salary: 3000 },
  { eNo: 1003, salary: 3400 },
  { eNo: 1004, salary: 6000 }
]
*/
