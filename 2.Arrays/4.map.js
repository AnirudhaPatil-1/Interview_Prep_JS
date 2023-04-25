//map method
//similar to for eachEach in input syntax
//returns new Array 
//does not mutate the original array
let arr = [5, 6, 7, 8, 9, 10];
let nArr = arr.map((element, index, arr) => {
    return element * element;
});
console.log(nArr); //[ 25, 36, 49, 64, 81, 100 ]

// 2.length of elements
console.log("----------2.length of elements-------- ");
let arr1 = ["Anirudha", "Patil", "JavaScript", "React"];

let lengthArr = arr1.map((element, index, arr) => {
    return element.length;
});
console.log(lengthArr); //[ 8, 5, 10, 5 ]

let arr2 = [36, 49, 64, 81, 100];
let sqrtArr = arr2.map((element, index, arr) => {
    return Math.sqrt(element);
})
console.log(sqrtArr); //[ 6, 7, 8, 9, 10 ]

//array of object
console.log("------------");
let objArr = [
    {pCode: 1, pName: "Anirudha"},
    {pCode: 2, pName: "Patil"},
    {pCode: 3, pName: "Developer"}
];

let resultArr = objArr.map((element, index, arr) => {
    return element.pName;
})
console.log(resultArr); //[ 'Anirudha', 'Patil', 'Developer' ]
