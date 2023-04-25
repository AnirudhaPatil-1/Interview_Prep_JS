let str = "Anirudha";

// str.forEach((element)=> {
//     console.log(element);
// });

// for(let i =0; i < str.length; i++){
//     console.log(i);
// }

//search in array
//1. indexOf(), 2. lastIndexOf(), 3. includes, 4. find, 5.findIndex, 6.filter

let arr1 =  [11, 12, 13, 12,  14, 15, 12, 16];
console.log(arr1.indexOf(12));  //1
console.log(arr1.indexOf(22)); //-1
console.log(arr1.indexOf(12, 2));  //3  given index to arr.length - 1


//2. lastIndexOf()
console.log("-----------2. lastIndexOf() ------")
//arr.length - 1 to the  0th index
console.log(arr1.lastIndexOf(12)); //6
console.log(arr1.lastIndexOf(12, 5)); //3

// 3. includes
console.log("----------- 3. includes------");
console.log(arr1.includes(16)); //true
console.log(arr1.includes(23)); //false


//4. find -> returns the value
console.log("------4. find-----------"); 
arr2 = [11, 12, 13, 11, 12, 13];
console.log("------------4. find-----------");

const ans = arr2.find((ele, index, arr) => {
    // return ele > 11;
    // return index > 2; //11
    // return arr; //11
})
console.log(ans);  //11

//5. findIndex() - returns the index
console.log("------5. findIndex()-----------");
const ans3 = arr2.findIndex((ele) => {
    return ele > 12;
}) 
console.log(ans3); //2

//6. filter
//returns array with elements that meet the given condition
//else returns empty array
console.log("---- 6. filter ------");

const arr3 = [11, 12, 13, 11, 12, 13];

const ans4 = arr3.filter((ele, index, arr) => {
    return ele > 12;
})
console.log(ans4); //[13, 13]
// console.log(arr3);

const ans5 = arr3.filter((ele, index, arr) => {
    return index > 1;
})
console.log(ans5); //[ 13, 11, 12, 13 ]






